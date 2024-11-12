import nodemailer from 'nodemailer';
import { createTransport } from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { application, attachments } = req.body;

    // Configurer le transporteur d'email
    const transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });

    // Créer le contenu HTML de l'email
    const htmlContent = `
      <h2>Nouvelle candidature pour le poste : ${application.jobTitle}</h2>
      
      <h3>Informations du candidat :</h3>
      <ul>
        <li><strong>Nom :</strong> ${application.firstName} ${application.lastName}</li>
        <li><strong>Email :</strong> ${application.email}</li>
        <li><strong>Téléphone :</strong> ${application.phone || 'Non renseigné'}</li>
        <li><strong>Disponibilité :</strong> ${application.availability || 'Non renseignée'}</li>
        <li><strong>Prétentions salariales :</strong> ${application.salary || 'Non renseignées'}</li>
      </ul>

      ${application.portfolio ? `<p><strong>Portfolio :</strong> <a href="${application.portfolio}">${application.portfolio}</a></p>` : ''}
      ${application.linkedin ? `<p><strong>LinkedIn :</strong> <a href="${application.linkedin}">${application.linkedin}</a></p>` : ''}

      <h3>Lettre de motivation :</h3>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
        ${application.coverLetter.replace(/\n/g, '<br>')}
      </div>
    `;

    // Envoyer l'email
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.RECRUITMENT_EMAIL,
      subject: `Nouvelle candidature : ${application.jobTitle}`,
      html: htmlContent,
      attachments: attachments.map(attachment => ({
        filename: attachment.filename,
        content: attachment.content
      }))
    });

    res.status(200).json({ message: 'Application sent successfully' });
  } catch (error) {
    console.error('Error sending application email:', error);
    res.status(500).json({ error: 'Failed to send application' });
  }
}