import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

    // Send both emails in parallel for faster response
    // NOTE: Using onboarding@resend.dev only allows sending to ybandharapu@gmail.com
    // To send to actual users, verify your domain at resend.com/domains
    const [userEmail, adminEmail] = await Promise.all([
      // Send acknowledgment email to the user (currently to admin for testing)
      resend.emails.send({
        from: 'Worksthal <onboarding@resend.dev>',
        to: 'ybandharapu@gmail.com', // Temporarily sending to admin email for testing
        subject: `[User Copy] Thank you for contacting Worksthal - ${email}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                color: white;
                padding: 30px 20px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                font-weight: 700;
              }
              .content {
                background: #ffffff;
                padding: 30px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .message-box {
                background: #f9fafb;
                border-left: 4px solid #059669;
                padding: 15px;
                margin: 20px 0;
                border-radius: 4px;
              }
              .contact-info {
                background: #f3f4f6;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
              }
              .contact-info p {
                margin: 8px 0;
              }
              .footer {
                text-align: center;
                padding: 20px;
                color: #6b7280;
                font-size: 14px;
              }
              .button {
                display: inline-block;
                background: #059669;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                margin: 20px 0;
                font-weight: 600;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>Worksthal</h1>
            </div>
            <div class="content">
              <p style="background: #fef3c7; padding: 10px; border-radius: 4px; font-size: 12px; color: #92400e;">
                <strong>NOTE:</strong> This is a test copy. In production, this email would be sent to: <strong>${email}</strong>
              </p>
              
              <h2 style="color: #059669; margin-top: 0;">Thank you for reaching out!</h2>
              
              <p>Hi ${firstName},</p>
              
              <p>We've received your message and appreciate you taking the time to contact us. Our team will review your inquiry and get back to you within 24-48 hours.</p>
              
              <div class="message-box">
                <p style="margin: 0; font-weight: 600; color: #059669;">Your Message:</p>
                <p style="margin: 10px 0 0 0;">${message}</p>
              </div>
              
              <p>In the meantime, if you have any urgent questions, feel free to reach out to us directly:</p>
              
              <div class="contact-info">
                <p><strong>📧 Email:</strong> contact@worksthal.com</p>
                <p><strong>📱 Phone:</strong> +91 63098219055</p>
                <p><strong>📍 Location:</strong> Hyderabad, India</p>
              </div>
              
              <p>We're excited to learn more about your project and explore how we can help bring your ideas to life.</p>
              
              <p style="margin-top: 30px;">Best regards,<br><strong>The Worksthal Team</strong></p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Worksthal. All rights reserved.</p>
              <p>Empowering businesses with AI-driven solutions.</p>
            </div>
          </body>
        </html>
      `,
      }),
      // Send notification email to admin
      resend.emails.send({
        from: 'Worksthal Contact Form <onboarding@resend.dev>',
        to: 'ybandharapu@gmail.com',
        subject: `New Contact Form Submission from ${fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 700px;
                margin: 0 auto;
                padding: 20px;
                background: #f9fafb;
              }
              .container {
                background: white;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                overflow: hidden;
              }
              .header {
                background: linear-gradient(135deg, #1f2937 0%, #374151 100%);
                color: white;
                padding: 25px;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 24px;
              }
              .content {
                padding: 30px;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #e5e7eb;
              }
              .field:last-child {
                border-bottom: none;
              }
              .label {
                font-weight: 600;
                color: #059669;
                font-size: 14px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 8px;
              }
              .value {
                font-size: 16px;
                color: #1f2937;
                margin: 0;
              }
              .message-box {
                background: #f3f4f6;
                padding: 20px;
                border-radius: 6px;
                border-left: 4px solid #059669;
              }
              .timestamp {
                text-align: center;
                padding: 15px;
                background: #f9fafb;
                color: #6b7280;
                font-size: 14px;
              }
              .reply-button {
                display: inline-block;
                background: #059669;
                color: white;
                padding: 12px 24px;
                text-decoration: none;
                border-radius: 6px;
                margin-top: 20px;
                font-weight: 600;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🔔 New Contact Form Submission</h1>
              </div>
              
              <div class="content">
                <div class="field">
                  <div class="label">Full Name</div>
                  <p class="value">${fullName}</p>
                </div>
                
                <div class="field">
                  <div class="label">Email Address</div>
                  <p class="value">
                    <a href="mailto:${email}" style="color: #059669; text-decoration: none;">${email}</a>
                  </p>
                </div>
                
                ${company ? `
                <div class="field">
                  <div class="label">Company Name</div>
                  <p class="value">${company}</p>
                </div>
                ` : ''}
                
                <div class="field">
                  <div class="label">Message</div>
                  <div class="message-box">
                    <p class="value" style="white-space: pre-wrap;">${message}</p>
                  </div>
                </div>
                
                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${email}" class="reply-button">Reply to ${firstName}</a>
                </div>
              </div>
              
              <div class="timestamp">
                Received on ${new Date().toLocaleString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  timeZoneName: 'short'
                })}
              </div>
            </div>
          </body>
        </html>
      `,
      })
    ]);

    // Log the results for debugging
    console.log('User email result:', userEmail);
    console.log('Admin email result:', adminEmail);

    // Check if emails were sent successfully
    if (userEmail.error) {
      console.error('User email error:', userEmail.error);
    }
    if (adminEmail.error) {
      console.error('Admin email error:', adminEmail.error);
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Emails sent successfully',
        userEmailId: userEmail.data?.id,
        adminEmailId: adminEmail.data?.id,
        userEmailStatus: userEmail.error ? 'failed' : 'sent',
        adminEmailStatus: adminEmail.error ? 'failed' : 'sent'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending emails:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send emails',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
