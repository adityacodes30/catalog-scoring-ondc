# from main.py import topsis as tp
import pika, sys, os
import json

from main import topsis 
from sendemail import send

def main():
    connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost', port=8080 ,  heartbeat=90 ))
    channel = connection.channel()

    channel.queue_declare(queue='catalogQueue', durable=True)

    def callback(ch, method, properties, body):
        json_str = body.decode('utf-8')
        json_str = json.loads(json_str)
        print(f" [x] Received {json_str['searchString']}")

        connectionToNotifQ = pika.BlockingConnection(pika.ConnectionParameters('localhost', 9090 ))
        channelToNotifQ = connectionToNotifQ.channel()
        channelToNotifQ.queue_declare(queue='notificationQueue')
        channelToNotifQ.basic_publish(exchange='', routing_key='notificationQueue', body=body )
        channelToNotifQ.close()

        


    channel.basic_consume(queue='catalogQueue', on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()

# main()


def processloop(json_data):

    arr = json_data.message.catalogs
   

   
    for item in arr:
        # Accessing fields from the item
        name = item.name
        short_desc = item.short_desc
        long_desc = item.long_desc
        image = item.image
        symbol = item.symbol
                
                # Example: Print the fields of each item
        print("Name:", name)
        print("Short Description:", short_desc)
        print("Long Description:", long_desc)
        print("Images:", image)
        print("Symbol:", symbol)
       
        score = scoring()
        item.score = score
        # score = tp.top(name, long_desc, short_desc, image, symbol, labels)
        # item.score = score
    return json.dumps(json_data)
        
        

# processloop(json)

labels = ['coffee','tea','shampoo','face serum','bread','honey','soap','biscuit','milk','chocolate','juice']

name='Dove Intense Repair Shampoo 1 L, Repairs Dry and Damaged Hair, Strengthening Shampoo for Smooth & Strong Hair - Mild Daily Shampoo for Men & Women'
long_disc=" PROVIDES NOURISHMENT AND PROTECTION: Dove Daily Shine Hair shampoo for women and men needs to not only nourish but also protect from daily damager. Hair needs protection from pollution, heat, hair products, and general wear and tear. ADDS A LUSTROUS SHINE: Well-nourished and hydrated hair is healthy on the inside and shiny on the outside. Dove shampoo adds shine to normal hair. Shiny hair is usually silky and easier to style and modify. This shampoo for men and women nourishes your hair so you can have a neutral styling base. FORMULATED WITH NUTRITIVE SERUM: The nutritive serum in the Dove Daily Shine Shampoo protects your hair from frizz & humidity. It also enhances the shine and softens your hair strands for a breezy look. Dove Shampoo locks in your natural hair oils and rehydrates dry and damaged hair. STRONG AND BEAUTIFUL: Beautiful and strong hair is formed at the roots and gaged at the tips. Dove Shampoo moisturises your hair at the roots. It provides longevity & consistency for already strong and beautiful hair. This shampoo nourishes damaged hair to rebuild a stronger foundation at the roots. MILD SHAMPOO FOR EVERYDAY USE: Hair that is styled everyday also needs to be washed everyday. Washing hair with shampoo everyday helps reset them to give you a neutral canvas. Dove Daily Shine Shampoo is made with a gentle formula. So, it is safe to use it for daily hair washes. DAMAGE-FEE HAIR: Dry and damaged hair are a common occurrence in the modern world. Hence, healthy hair care routines are becoming increasingly popular. Dove shampoo and conditioner helps protect hair from damage caused by external elements. So, you can style healthy hair to your heart's content."
short_disc="The mystery of how to get shiny hair isn't a tricky one to solve. The key to getting shiny damage free hair we all long for is making sure your hair is nourished, from the start of your routine. And the right hair shampoo is imperative to a healthy hair care routine. That's where Dove Daily Shine Shampoo comes in. Why Dove Daily Shine Shampoo? Dove Daily Shine Shampoo with Nutritive Serum builds a protective shield around the hair fiber and defends your hair from daily hair damage. It is a gentle hair shampoo that keeps your hair looking healthy and lustrous. The shampoo is mild on your scalp but gives protection from the aggression your hair faces every day. Its Nutritive Serum absorbs into the hair strands to keep them beautifully nourished and shiny, this Dove shampoo surrounds your hair with a protective shield, defending it from everyday stresses, like brushing & damage. Can I use Dove hair shampoo daily? Since 1993, Indian women have relied on Dove for beautiful skin. Now, Dove helps you pamper yourself in a new way every day, with a wide range that includes skin care, hair care and deodorants. Not only is the Dove shampoo gentle enough to use every day, over time Dove Intense Repair Shampoo makes your hair better*. So, as well as cleansing from roots up, it helps make your hair look healthy, too. The result? Beautifully shiny, strong and silky hair which is everything you want it to be. *Based on lab test with Dove Daily Shine System vs non-conditioning shampoo"
symbol='https://m.media-amazon.com/images/I/41B2LvhvV9L._SL1000_.jpg'
image=['https://m.media-amazon.com/images/I/61b7lpnvp2L._SL1000_.jpg','https://m.media-amazon.com/images/I/61Mo62qqVDL._SL1000_.jpg']

rc = topsis(name, long_disc, short_disc, image, symbol,labels)

print(rc)

def scoring():
    return 0.87