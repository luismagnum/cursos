// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Configuración del transporte de correo
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true para port 465, false para otros puertos
      auth: {
        user: "speedweb023@gmail.com", // Tu dirección de correo electrónico
        pass: "cursoportuguesonline", // Tu contraseña de aplicación
      },
    });

    // Verificación del transporte
    transporter.verify((error, success) => {
      if (error) {
        console.error('Error de verificación del transporte:', error);
      } else {
        console.log('El servidor está listo para enviar mensajes');
      }
    });

    try {
      // Enviar el correo electrónico
      await transporter.sendMail({
        from: "luismagnum1@gmail.com", // Dirección de correo del remitente
        to: "speedweb023@gmail.com", // Dirección de correo del destinatario
        subject: `Mensaje de ${name}`,
        text: message,
        html: `<p><strong>Nombre:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Mensaje:</strong><br/>${message}</p>`,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, message: 'Error enviando el correo.' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
