import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def send_email(sender_email, sender_password, recipient_email, subject, message):
    # Set up the SMTP server
    smtp_server = 'smtp.gmail.com'
    smtp_port = 587

    # Create a multipart message
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = subject

    # Add the message body
    msg.attach(MIMEText(message, 'plain'))

    # Create a secure connection with the SMTP server
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()
        server.login(sender_email, sender_password)
        server.send_message(msg)

# Example usage
sender_email = 'adityaework@gmail.com'
sender_password = 'mnss ihdf tbdn ijbk'
recipient_email = 'aditya.sapra4103@gmail.com'
subject = 'Hello from Python!'
message = 'This is a test email sent from Python.'

send_email(sender_email, sender_password, recipient_email, subject, message)

def send(recipient_email ,  msg):
    sender_email = 'adityaework@gmail.com'
    sender_password = 'mnss ihdf tbdn ijbk'
    recipient_email = recipient_email
    subject = "Catalog Scoring results" 
    message = msg

