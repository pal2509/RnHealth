import os
import smtplib
import ssl

#This funtion sends and email
def sendEmail(email: str, token: str, emailtoken: str):
    port = os.environ.get("appEmailSMTPPort") 
    smtp_server = os.environ.get("appEmailSMTP")
    sender = os.environ.get("appEmail")
    sender_password = os.environ.get("appEmailPwd")
    recipient = email

    tokenUrl = os.environ.get("appUrl") +"reading?token=" + token
    emailUrl = os.environ.get("appUrl") +"readings/" + emailtoken

    message = """
    A sua classificacao foi efectuada com sucesso!

    Aceda ao link para poder submeter dados de uma leitura: %s

    Para aceder as suas leituras use o link: %s

    RnHealthTech
    """ %(tokenUrl, emailUrl)

    smtp = smtplib.SMTP(smtp_server, port=port)
    smtp.starttls()
    smtp.login(sender, sender_password)
    smtp.sendmail(sender, recipient, 'Subject: Acesso para a sua estimativa - RnHealth\n{}'.format(message))
    smtp.quit()
