require('dotenv').config();
const mailgun = require("mailgun-js");

const api_key = process.env.MAIL_KEY;
const DOMAIN = process.env.MAIL_DOMAIN;
const email_authorized = process.env.MAIL_AUTHORIZED;

const mg = mailgun({apiKey: api_key, domain: DOMAIN});

function sendEmail(name, amigo) {
    const mail_subject = `${name}, veja quem você tirou no Amigo Secreto!`;
    const mail_text = `${name}, você tirou ${amigo} no Amigo Secreto!`;
    const mail_from = 'Amigo Secreto';

    const email_to = 'norteshopen@gmail.com'; //TODO -> Receber email alvo

    const data = {
        from: `${mail_from} <${email_authorized}>`,
        to: email_to,
        subject: mail_subject,
        text: mail_text
    };

    return mg.messages().send(data, function (error, body) {
        if(error) {
            console.log(error);
        }
        console.log(body);
    });
};

module.exports = sendEmail;