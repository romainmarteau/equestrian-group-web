import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, address, affiliation, role, message } = req.body;

  // Validation
  if (!name || !email || !phone || !message || !role) {
    return res.status(400).json({ message: 'Name, email, phone, role and message are required' });
  }

  // Configure transporter (User needs to fill these with actual credentials)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: 'romainmarteau@gmail.com',
      subject: `New Membership Request: ${name}`,
      text: `
        New Membership Submission:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Address: ${address || 'N/A'}
        Affiliation: ${affiliation || 'N/A'}
        Role: ${role}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;700&family=Cormorant+Garamond:wght@500&display=swap" rel="stylesheet">
            <style>
              body { 
                font-family: 'Albert Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; 
                background-color: #FDF9F3; 
                color: #0B130E; 
                margin: 0; 
                padding: 0; 
                -webkit-font-smoothing: antialiased;
              }
              .wrapper {
                background-color: #FDF9F3;
                padding: 40px 20px;
              }
              .container { 
                max-width: 600px; 
                margin: 0 auto; 
                background-color: #ffffff; 
                border-radius: 12px; 
                overflow: hidden; 
                box-shadow: 0 4px 20px rgba(24, 33, 27, 0.08); 
                border: 1px solid #F6E9D7; 
              }
              .header { 
                background-color: #18211B; 
                padding: 40px 30px; 
                text-align: center; 
              }
              .logo-text { 
                color: #FDF9F3; 
                font-family: 'Cormorant Garamond', Georgia, serif; 
                margin: 0; 
                font-size: 24px; 
                font-weight: 500; 
                letter-spacing: 3px;
                text-transform: uppercase;
              }
              .content { 
                padding: 50px 40px; 
              }
              .content h2 { 
                color: #18211B; 
                font-family: 'Cormorant Garamond', Georgia, serif; 
                font-size: 28px;
                font-weight: 500;
                margin-top: 0; 
                margin-bottom: 30px;
                border-bottom: 1px solid #C1C3AA;
                padding-bottom: 15px;
              }
              .field { 
                margin-bottom: 25px; 
              }
              .label { 
                font-weight: 700; 
                color: #C1C3AA; 
                text-transform: uppercase; 
                font-size: 11px; 
                letter-spacing: 1.5px; 
                display: block; 
                margin-bottom: 6px; 
              }
              .value { 
                font-size: 16px; 
                color: #0B130E; 
                line-height: 1.5;
              }
              .message-box {
                background-color: #FDF9F3;
                padding: 20px;
                border-radius: 8px;
                border-left: 4px solid #C1C3AA;
                font-style: italic;
                margin-top: 10px;
              }
              .footer { 
                background-color: #18211B; 
                padding: 30px; 
                text-align: center; 
                font-size: 11px; 
                color: #C1C3AA; 
                letter-spacing: 1px;
              }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="container">
                <div class="header">
                  <div class="logo-text">East End Equestrian Group</div>
                </div>
                <div class="content">
                  <h2>New Membership Request</h2>
                  
                  <div class="field">
                    <span class="label">Applicant Name</span>
                    <span class="value">${name}</span>
                  </div>
                  
                    <div class="field">
                      <span class="label">Email Address</span>
                      <span class="value">${email}</span>
                    </div>

                    <div class="field">
                      <span class="label">Phone Number</span>
                      <span class="value">${phone}</span>
                    </div>
                  
                  <div class="field">
                    <span class="label">Address</span>
                    <span class="value">${address || 'Not provided'}</span>
                  </div>
                  
                  <div class="field">
                    <span class="label">Affiliation / Farm</span>
                    <span class="value">${affiliation || 'Not provided'}</span>
                  </div>
                  
                  <div class="field">
                    <span class="label">Role</span>
                    <span class="value" style="background: #C1C3AA; color: #18211B; padding: 4px 10px; border-radius: 4px; font-weight: bold; font-size: 12px; display: inline-block;">${role}</span>
                  </div>
                  
                  <div class="field">
                    <span class="label">Message</span>
                    <div class="message-box">${message}</div>
                  </div>
                </div>
                <div class="footer">
                  &copy; ${new Date().getFullYear()} EAST END EQUESTRIAN GROUP<br>
                  PROTECTING OUR LAND, OUR HORSES, OUR VOICE
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
