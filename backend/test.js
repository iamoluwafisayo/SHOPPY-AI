import { MailtrapClient } from "mailtrap"



const TOKEN = "c1b458b0f3f9cd5a3bd185494c78cab2";
const SENDER_EMAIL = "wassioubouraima56@gmail.com";
const RECIPIENT_EMAIL = "wachioubouraima56@gmail.com";

const client = new MailtrapClient({ token: TOKEN });

const sender = { name: "Mailtrap Test", email: SENDER_EMAIL };

client
    .send({
        from: sender,
        to: [{ email: RECIPIENT_EMAIL }],
        subject: "Hello from Mailtrap!",
        text: "Welcome to Mailtrap Sending!",
    })
    .then(console.log)
    .catch(console.error);
