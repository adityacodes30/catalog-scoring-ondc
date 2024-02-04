import express from "express";

const catalogRouter = express.Router();

import connect from "../utils/connction";

const channel = await connect();

// const cat = {
//     id: 1,
//     name: "catalog",
//     description: "catalog",
//     price: 100,
//     quantity: 10,
//     };

// channel.sendToQueue("catalogQueue", Buffer.from(JSON.stringify(cat)));

catalogRouter.post("/", (req, res) => {
  if (!req.body.data) {
    res.status(400);
    res.json({ message: "NACK - No data received" });
    return;
  } else {
    res.status(200);
    res.json({ message: "ACK" });
  }

  const payload = JSON.parse(req.body.data);

  const context = payload.context;
  const message = payload.message;

  const callback_url = context.bap_uri + "/on_catalog";

  catalog = JSON.stringify(message.catalogs);

   


});

export default catalogRouter;
