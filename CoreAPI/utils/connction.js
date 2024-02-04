import amqp from "amqplib";

async function connect() {
    try {
      const connection = await amqp.connect("amqp://localhost:8080");
      const channel = await connection.createChannel();
      await channel.assertQueue("catalogQueue");
      return channel;
    } catch (err) {
      console.log(err);
    }
  }
  
  export default connect;