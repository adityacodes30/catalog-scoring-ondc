import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4500;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to enable CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); //frontend is on port 3000
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

// Define the endpoint
app.post("/api/datasender", (req, res) => {
    try {
        // Extract the "descriptor" data from the request body
        const descriptorData = req.body.message.catalogs.map(item => item.descriptor);

        // Send only the "descriptor" data to the client
        res.json(descriptorData);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
