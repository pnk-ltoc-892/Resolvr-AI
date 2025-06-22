import { inngest } from "../client.js";
import Ticket from '../../models/ticket.model.js'
import User from '../../models/user.model.js'
import { NonRetriableError } from "inngest";
import { sendMail } from "../../utils/mailer.js";
import analyzeTicket from "../../utils/ai-agent.js";


export const onTicketCreated = inngest.createFunction(
    {id: "on-ticket-created", retries: 2},
    {event: "ticket/created"},

    async ({event, step}) => {
        try {
            const {ticketId} = event.data

            // Step - 1 Fetch Ticket From Database
            const ticket = await step.run("fetch-ticket", async () => {  // Have Access to 'ticket', through out
                const ticketObject = await Ticket.findById(ticketId)
                if(!ticket){
                    throw new NonRetriableError("Ticket Does Not Exist In Our Database")
                }
                return ticketObject  // We Have Access of 'ticket', through out Down The Line
            })
            // We Have Access of 'ticket', through out Down The Line

            // Step - 2 Update Ticket - not needed
            await step.run("update-ticket-status", async () => {
                await Ticket.findByIdAndUpdate(ticket._id, {status: "TODO"})
            })

            // Get The AI Response
            const aiResponse = await analyzeTicket(ticket)

            // Step - 3 Updating Response From AI
            const relatedSkills = await step.run("ai-processing", async () => {
                let skills = []
                // Checking Response
                if(aiResponse){
                    await Ticket.findByIdAndUpdate(Ticket?._id, {
                        priority: !["low", "medium", "high"].includes(aiResponse.priority) ? "medium" : aiResponse.priority,

                        helpfulNotes: aiResponse.helpfulNotes,
                        status: "IN_PROGRESS",
                        relatedSkills: aiResponse.relatedSkills
                    })
                    skills = aiResponse.relatedSkills
                }
                return skills;
            })


            // Step - 4 Assigning Moderator - Based On Above Related Skills
            const moderator = await step.run("assign-moderator", async () => {
                // Finding The User (Moderator For Ticket)
                let user = await User.findOne({
                    role: "moderator",
                    skills: {
                        $elemMatch: {
                            $regex: relatedSkills.join("|"),
                            $options: "i"
                        }
                    }
                })
                if(!user){
                    user = await User.findOne({
                        role: "admin"
                    })
                }

                await Ticket.findByIdAndUpdate(Ticket?._id, {
                    assignedTo: user?._id || null
                })
                return user;
            })

            // Sending A Confimation Mail
            await step.run("send-email-notification", async () => {
                const finalTicket = await Ticket.findById(ticket._id)
                if(moderator){
                    await sendMail(
                        moderator.email,
                        "Ticket Assigned",
                        `A new ticket assigned to to you ${finalTicket.title}`
                    )
                }
            })

            return {success: true}
        } catch (error) {
            console.error("❌ Error Ruuning Ticket Creating Step", err.message);
            return {success: false}
        }
    }
)