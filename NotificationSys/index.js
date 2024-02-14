const express = require("express");

const app = express();

const amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost:9090", function (error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function (error1, channel) {
    if (error1) {
      throw error1;
    }

    let queue = "notificationQueue";

    channel.assertQueue(queue, {
      durable: false,
    });

    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(
      queue,
      function (msg) {
        console.log(" [x] Received %s", msg.content.toString());
      },
      {
        noAck: true,
      }
    );
  });
});

const url = "https://example.com/notification"; // Replace with the desired URL

// Make a POST request to the specified URL
// axios
//   .post(url, req.body)
//   .then((response) => {
//     console.log("Notification sent successfully");
//     res.status(200).send("Notification sent successfully");
//   })
//   .catch((error) => {
//     console.error("Error sending notification:", error);
//     res.status(500).send("Error sending notification");
//   });
