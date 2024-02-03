import express from "express";

const catalogRouter = express.Router();


catalogRouter.post("/", (req, res) => {

    if (!req.body.data) {
        res.status(400);
        res.json({ message: "NACK - No data received" });
        return;
    }
    else
    {
        res.status(200);
        res.json({ message: "ACK" });
    }

    const payload = req.body.data;

    const context = data.context;
    const message = data.message;


})


export default catalogRouter;