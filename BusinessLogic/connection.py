# from typing import Union

# from fastapi import FastAPI

# app = FastAPI()

import pika, sys, os

def main():

    # Establish a connection
    connectionToNotifQ = pika.BlockingConnection(pika.ConnectionParameters('localhost', 9090))

# Create a channel
    channelToNotifQ = connectionToNotifQ.channel()

# Declare a queue
    channelToNotifQ.queue_declare(queue='notificationQueue')

# Publish a message
    

    

# Close the connection
   

    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost', port=8080))
    channel = connection.channel()

    channel.queue_declare(queue='catalogQueue', durable=True)

    def callback(ch, method, properties, body):
        print(f" [x] Received {body}")
        channelToNotifQ.basic_publish(exchange='', routing_key='notificationQueue', body=body)


    channel.basic_consume(queue='catalogQueue', on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()


   


main()
# if __name__ == '__main__':
#     try:
#         main()
#     except KeyboardInterrupt:
#         print('Interrupted')
#         try:
#             sys.exit(0)
#         except SystemExit:
#             os._exit(0)

# @app.get("/")
# def read_root():
#     return {"Hello": "World"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}