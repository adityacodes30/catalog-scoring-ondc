import express from "express";

const catalogRouter = express.Router();

import connect from "../utils/connction.js";


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
  } 

  
  
  const payload = req.body.data;
  const searchString = payload.searchString;
  const email = payload.email;
  const context = payload.context;
  const message = payload.message;

  const callback_url = context.bap_uri + "/on_catalog";

  const rawData = {
    searchString: searchString,
    email: email,
    callback_url: callback_url,
    message: message,
  };

  console.log(rawData);

  
  try{
  channel.sendToQueue("catalogQueue", Buffer.from(JSON.stringify(rawData)));
  // catalog = JSON.stringify(message.catalogs);
  }
  catch(err){
    res.status(400).json({ message: "queueing failed" });
  }
  res.status(200).json({ message: "ACK" });
   


});

export default catalogRouter;
