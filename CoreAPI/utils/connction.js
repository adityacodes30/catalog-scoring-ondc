import amqp from "amqplib";
import dotenv from "dotenv";
dotenv.config();

const connect = async () =>{
    try {
      const connection = await amqp.connect(process.env.RABBIT_Q1_URL);
      const channel = await connection.createChannel();
      await channel.assertQueue("catalogQueue");
      return channel;
      
    } catch (err) {
      console.log(err);
    }
  }
  
  export default connect;