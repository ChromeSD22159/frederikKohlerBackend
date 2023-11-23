module.exports = {


  async afterCreate(event) {
      const nodemailer = require('nodemailer');
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SMTP_HOST,
        port: process.env.EMAIL_SMTP_PORT,
        auth: {
            user: process.env.EMAIL_SMTP_USER,
            pass: process.env.EMAIL_SMTP_PASS
        }
      });

      const { result } = event;
      
      const sendTo = process.env.EMAIL_ADDRESS_TO
      strapi.log.debug(`Trying to send an email to ${ sendTo }`)

      try {

        const mail = await transporter.sendMail({
          from: `"${event.result.firstname} ${event.result.lastname} via FK - KontaktFormular" <${process.env.EMAIL_ADDRESS_FROM}>`,
          to: `${sendTo}`,
          subject: `KontaktFormular: ${event.result.subject}`,
          html: `
          <h2>Kontakt: ${event.result.firstname} ${event.result.lastname}</h2>
          <p>E-Mail: ${event.result.email}</p> 
          <p>Telefon: ${event.result.phone}</p>
          <br>
          <h2>Betreff: KontaktFormular: ${event.result.subject}</h2>
          <p>${event.result.message}</p>
          `
      });
        
      } catch (err) {
        strapi.log.error(`Error sending email to ${sendTo}`, err)
      }
    },
  };