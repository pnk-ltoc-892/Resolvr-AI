import jwt from "jsonwebtoken";


// To Verify Authentication Token - For other controllers
export const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.spilt(" ")[1];

    if (!token) {
        return res.status(401).json({ error: "Access Denied. No token found." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;  // Update Information
        next();
    } 
    catch (error) {
        res.status(401).json({ error: "❌ Invalid token" });
    }
};