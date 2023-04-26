import smtplib
from email.mime.text import MIMEText
from datetime import date
from datetime import datetime

# foo function send email
def foo(email_address, message):
    msg_from = 'test@webclients.net'
    msg = MIMEText(message.format(first_name=first_name,
                   last_name=last_name))
    msg['Subject'] = 'Important'
    msg['From'] = msg_from
    msg['To'] = email_address
    smtp = smtplib.SMTP('emgw.local:25')
    smtp.sendmail(msg_from, email_address, msg.as_string())
    smtp.quit()


today = date.today()

seen = {}
# open .csv file, read it and send emails for recipients 
with open(r"user_data.csv", 'r') as fh:
    for ln in fh: 
        
        #3. How would you change this code to prevent foo(...) 
        # from being called on users who live in California (CA)
        #and New York (NY)?

        # 3.1 Maybe we can skip somehow line from file where California and New York
        # if ln contains CA or NY or if state_prov contains CA or NY then skip line
        (email_address, first_name, last_name, birth_date,
         state_prov) = ln.strip().split(',') 
        birth_date = datetime.strptime(birth_date, '%Y-%m-%d')

        #2. The age calculation is not correct. How could it be fixed?
        # well, to be honest i don't know python, but i found such way
        # age = today.year - birth_date.year - ((today.month, today.day) < (birth_date.month, birth_date.day))
        age = today.year - birth_date.year 
        
        # 3.2 Or filter here where California and New York
        if age >= 18 and age < 65 and not seen.has_key(email_address):
            foo(email_address,
                'Dear {first_name} {last_name}, Hello!\n'.format(first_name=first_name,
                last_name=last_name))
            seen[email_address] = 1
