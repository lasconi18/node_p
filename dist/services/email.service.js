"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.enviaEmail = enviaEmail;
const nodemailer_1 = __importDefault(require("nodemailer"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const transporter = nodemailer_1.default.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});
const mailOptions = {
    from: `"API TESTE" <${process.env.EMAIL_USER}>`,
    to: "nicolas@email.com",
    subject: "Enviando email teste",
    text: "Aqui vai o conteúdo"
};
async function enviaEmail() {
    const envio = await transporter.sendMail(mailOptions);
    console.log(envio);
}
