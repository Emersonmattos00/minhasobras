import nodemailer from "nodemailer";
import { NextResponse } from "next/server"; // Importar NextResponse

export async function POST(request) {
  try { // Adicionar try block
  const { email, subject, message } = await request.json();

  if (!email || !subject || !message) {
 return new NextResponse("Missing required fields: email, subject, and message are required.", { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject,
    text: message,
  });

  return new NextResponse("Email enviado com sucesso", { status: 200 });
  } catch (error) { // Adicionar catch block
    console.error("Error sending email:", error);
    // Retornar uma resposta de erro amigável sem expor detalhes internos
    return new NextResponse("Erro ao enviar email", { status: 500 });
  }
}
