const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/createuser", async (req, res) => {
    try {
        // Log the incoming request body for debugging
        console.log("Request body:", req.body);

        // Create a new user
        const newUser = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            location: req.body.location,
        });

        // Log success message and return response
        console.log("User created:", newUser);
        res.json({ success: true, user: newUser });
    } catch (err) {
        // Log and return error
        console.error("Error creating user:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;
