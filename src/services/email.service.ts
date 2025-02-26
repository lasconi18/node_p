import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})

const mailOptions = {
    from: `"API TESTE" <${process.env.EMAIL_USER}>`,
    to: "nicolas@email.com",
    subject: "Enviando email teste",
    text: "Aqui vai o conteúdo"
}

export async function enviaEmail() {
    const envio = await transporter.sendMail(mailOptions)
    console.log(envio);
    
}
