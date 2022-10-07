import nodemailer from "nodemailer";

const Email = (option) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "krukmakeriet.proj@gmail.com",
            pass: "passWord123",
        },
    });
    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
            return;
        }
    });
};

const EmailSender= ({firstName, email}) =>{
    const options = {
        from:`Krukmakeriet`,
        to: email(email),
        subject: "Tack för att du handla",
        html: `<p> Tack för att du handla ${firstName}</p>`
    }
    Email(options)
}

export default {EmailSender}