const nodemailer = require('nodemailer');

// Configure the transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, 
    auth: {
        user: process.env.NODEMAIL_USER, // environment variable for email address
        pass: process.env.NODEMAIL_PASS  // environment variable for email password
    }
});

// Function to send email
const sendEmail = async (name, emailAddress, webAddress, message) => {
    const htmlBody = `
        <div style="text-align: center; margin-bottom: 20px;">
            <b>User Information:</b>
        </div>
        <table style="border-collapse: collapse; width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
            <tr>
                <td style="border: 1px solid #dee2e6; padding: 10px; text-align: left; font-weight: bold; color: #333;">Name:</td>
                <td style="border: 1px solid #dee2e6; padding: 10px; text-align: left;">${name}</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
                <td style="border: 1px solid #dee2e6; padding: 10px; text-align: left; font-weight: bold; color: #333;">Email Address:</td>
                <td style="border: 1px solid #dee2e6; padding: 10px; text-align: left;">${emailAddress}</td>
            </tr>
            <tr>
                <td style="border: 1px solid #dee2e6; padding: 10px; text-align: left; font-weight: bold; color: #333;">Web Address:</td>
                <td style="border: 1px solid #dee2e6; padding: 10px; text-align: left;">${webAddress}</td>
            </tr>
            <tr style="background-color: #f2f2f2;">
                <td style="border: 1px solid #dee2e6; padding: 10px; text-align: left; font-weight: bold; color: #333;">Message:</td>
                <td style="border: 1px solid #dee2e6; padding: 10px; text-align: left;">${message}</td>
            </tr>
        </table>
    `;

    try {
        const info = await transporter.sendMail({
            from: `"Bright Space" <${process.env.NODEMAIL_USER}>`, // sender address
            to: "itsharifofficial@gmail.com", // recipient email
            subject: "User Contact Info", // subject
            text: "User contact details", // plain text
            html: htmlBody, // html email body
        });
        
        console.log("Message sent: %s", info.messageId);
        return info;
    } catch (error) {
        console.error("Error sending email:", error);
        throw error;
    }
};



// Export the sendEmail function
module.exports = { sendEmail };
