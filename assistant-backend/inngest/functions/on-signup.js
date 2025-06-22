import { inngest } from "../client.js";
import User from '../../models/user.model.js'
import { NonRetriableError } from "inngest";
import { sendMail } from "../../utils/mailer.js";


export const onUserSignup = inngest.createFunction(
    {id: "on-user-signup", retries: 3},
    {event: "user/signup"},
    
    async ({event, step}) => {
        try {
            // Data Is Passed When Firing Event
            const {email} = event.data
            
            // Step -1 Pipeline
            const user = await step.run("get-user-email", async() => {
                const userObject = await User.findOne({email})
                if(!userObject){
                    throw new NonRetriableError("User No Longer Exist In Our Database")
                }
                return userObject  // Passed Onto Next Step
            })

            // Step - 2 Pipeline
            const sentMail = await step.run("send-welcome-email", async() => {   // "send-welcome-email" - This Is An Identifier
                const subject = "Welcome To TicSys AI"
                const message = "Hi \n\n Thanks For Signing Up"
                const email = await sendMail(user.email, subject, message)  // user.email - from above Step
            })

            return {success: true}
        } catch (error) {
            console.error("❌ Error Running Step, ", error.message)
            return {success: false}
        }
    } 
)