const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// Configuration du transporteur d'email
const transporter = nodemailer.createTransport({
  host: functions.config().smtp.host,
  port: functions.config().smtp.port,
  secure: true,
  auth: {
    user: functions.config().smtp.user,
    pass: functions.config().smtp.password
  }
});

exports.sendApplicationEmail = functions.https.onCall(async (data, context) => {
  try {
    // Préparer le contenu de l'email
    const mailOptions = {
      from: 'EcoSolidaire <noreply@ecosolidaire.org>',
      to: 'recrutement@ecosolidaire.org',
      subject: `Nouvelle candidature : ${data.jobTitle}`,
      html: `
        <h2>Nouvelle candidature pour le poste : ${data.jobTitle}</h2>
        
        <h3>Informations du candidat :</h3>
        <ul>
          <li><strong>Nom :</strong> ${data.firstName} ${data.lastName}</li>
          <li><strong>Email :</strong> ${data.email}</li>
          <li><strong>Téléphone :</strong> ${data.phone || 'Non renseigné'}</li>
          <li><strong>Disponibilité :</strong> ${data.availability || 'Non renseignée'}</li>
          <li><strong>Prétentions salariales :</strong> ${data.salary || 'Non renseignées'}</li>
        </ul>

        ${data.portfolio ? `<p><strong>Portfolio :</strong> <a href="${data.portfolio}">${data.portfolio}</a></p>` : ''}
        ${data.linkedin ? `<p><strong>LinkedIn :</strong> <a href="${data.linkedin}">${data.linkedin}</a></p>` : ''}

        <h3>Lettre de motivation :</h3>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${data.coverLetter.replace(/\n/g, '<br>')}
        </div>
      `,
      attachments: [
        {
          filename: data.cv.filename,
          content: data.cv.content,
          encoding: 'base64',
          contentType: data.cv.contentType
        }
      ]
    };

    // Envoyer l'email
    await transporter.sendMail(mailOptions);

    return { success: true };
  } catch (error) {
    console.error('Error sending application email:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to send application email'
    };
  }
});