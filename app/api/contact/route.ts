import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, name, email, company, message } = body;

    // Handle both name formats (single "name" field or separate "firstName"/"lastName")
    let fullName: string;
    let firstNameValue: string;
    
    if (name) {
      // If single name field is provided, split it
      fullName = name;
      const nameParts = name.trim().split(' ');
      firstNameValue = nameParts[0];
    } else if (firstName && lastName) {
      // If separate fields are provided
      fullName = `${firstName} ${lastName}`;
      firstNameValue = firstName;
    } else {
      return NextResponse.json(
        { error: 'Missing required fields: name or firstName/lastName required' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: email and message are required' },
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

    // Send both emails in parallel for faster response
    const [userEmail, adminEmail] = await Promise.all([
      // Send acknowledgment email to the user
      resend.emails.send({
        from: 'Worksthal <noreply@worksthal.com>',
        to: email,
        subject: `Thank you for contacting Worksthal, ${firstNameValue}!`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                background: #0a0a0a;
                padding: 40px 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background: linear-gradient(135deg, #18181b 0%, #27272a 100%);
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                border: 1px solid #3f3f46;
              }
              .header {
                background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                padding: 50px 40px;
                text-align: center;
                position: relative;
                overflow: hidden;
              }
              .header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
                opacity: 0.3;
              }
              .header h1 {
                margin: 0;
                font-size: 36px;
                font-weight: 700;
                color: white;
                position: relative;
                z-index: 1;
                letter-spacing: -0.5px;
              }
              .header p {
                margin: 12px 0 0 0;
                font-size: 16px;
                color: rgba(255, 255, 255, 0.9);
                position: relative;
                z-index: 1;
              }
              .content {
                padding: 40px;
                color: #e4e4e7;
              }
              .greeting {
                font-size: 20px;
                font-weight: 600;
                color: #fafafa;
                margin-bottom: 20px;
              }
              .message-preview {
                background: linear-gradient(135deg, #27272a 0%, #3f3f46 100%);
                border: 1px solid #52525b;
                border-radius: 12px;
                padding: 24px;
                margin: 30px 0;
                position: relative;
              }
              .message-preview::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 4px;
                height: 100%;
                background: linear-gradient(180deg, #059669 0%, #10b981 100%);
                border-radius: 12px 0 0 12px;
              }
              .preview-label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #10b981;
                font-weight: 600;
                margin-bottom: 12px;
              }
              .preview-content {
                color: #d4d4d8;
                font-size: 15px;
                line-height: 1.7;
                white-space: pre-wrap;
              }
              .info-grid {
                display: table;
                width: 100%;
                margin: 30px 0;
                background: #18181b;
                border-radius: 12px;
                padding: 20px;
                border: 1px solid #3f3f46;
              }
              .info-row {
                display: table-row;
              }
              .info-label {
                display: table-cell;
                padding: 12px 16px;
                font-size: 13px;
                color: #a1a1aa;
                font-weight: 500;
                width: 30%;
              }
              .info-value {
                display: table-cell;
                padding: 12px 16px;
                font-size: 14px;
                color: #fafafa;
                font-weight: 500;
              }
              .divider {
                height: 1px;
                background: linear-gradient(90deg, transparent 0%, #3f3f46 50%, transparent 100%);
                margin: 30px 0;
              }
              .cta-button {
                display: inline-block;
                background: linear-gradient(135deg, #059669 0%, #10b981 100%);
                color: white;
                padding: 16px 32px;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 15px;
                text-align: center;
                box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
                transition: all 0.3s ease;
              }
              .footer {
                background: #18181b;
                padding: 30px 40px;
                text-align: center;
                border-top: 1px solid #3f3f46;
              }
              .footer-text {
                color: #a1a1aa;
                font-size: 13px;
                margin: 8px 0;
              }
              .footer-links {
                margin-top: 16px;
              }
              .footer-link {
                color: #10b981;
                text-decoration: none;
                margin: 0 12px;
                font-size: 13px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Worksthal</h1>
                <p>We've received your message</p>
              </div>
              
              <div class="content">
                <div class="greeting">Hi ${firstNameValue},</div>
                
                <p style="color: #d4d4d8; margin-bottom: 20px;">
                  Thank you for reaching out to Worksthal. We've successfully received your inquiry and our team is reviewing it.
                </p>
                
                <p style="color: #d4d4d8; margin-bottom: 30px;">
                  We typically respond within <strong style="color: #10b981;">24-48 hours</strong>. If your project is time-sensitive, feel free to reach us directly at <a href="mailto:admin@worksthal.com" style="color: #10b981; text-decoration: none;">admin@worksthal.com</a>.
                </p>

                <div class="message-preview">
                  <div class="preview-label">Your Message</div>
                  <div class="preview-content">${message}</div>
                </div>

                <div class="info-grid">
                  <div class="info-row">
                    <div class="info-label">Name</div>
                    <div class="info-value">${fullName}</div>
                  </div>
                  <div class="info-row">
                    <div class="info-label">Email</div>
                    <div class="info-value">${email}</div>
                  </div>
                  ${company ? `
                  <div class="info-row">
                    <div class="info-label">Company</div>
                    <div class="info-value">${company}</div>
                  </div>
                  ` : ''}
                  <div class="info-row">
                    <div class="info-label">Submitted</div>
                    <div class="info-value">${new Date().toLocaleString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}</div>
                  </div>
                </div>

                <div class="divider"></div>

                <p style="color: #d4d4d8; margin-bottom: 24px;">
                  While you wait, explore what we can do for your business:
                </p>

                <div style="text-align: center;">
                  <a href="https://worksthal.com/#services" class="cta-button">
                    View Our Services
                  </a>
                </div>
              </div>
              
              <div class="footer">
                <p class="footer-text">
                  <strong style="color: #fafafa;">Worksthal</strong> — AI Automation, Web Development & AEO Studio
                </p>
                <p class="footer-text">
                  📧 admin@worksthal.com  •  📱 +91 6309821905
                </p>
                <div class="footer-links">
                  <a href="https://worksthal.com" class="footer-link">Website</a>
                  <a href="https://worksthal.com/about" class="footer-link">About</a>
                  <a href="https://worksthal.com/services" class="footer-link">Services</a>
                </div>
                <p class="footer-text" style="margin-top: 20px;">
                  © ${new Date().getFullYear()} Worksthal. All rights reserved.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
      }),
      // Send notification email to admin
      resend.emails.send({
        from: 'Worksthal Contact Form <noreply@worksthal.com>',
        to: 'admin@worksthal.com',
        subject: `🔔 New Lead: ${fullName}${company ? ` from ${company}` : ''}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
              }
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                line-height: 1.6;
                background: #0a0a0a;
                padding: 40px 20px;
              }
              .container {
                max-width: 700px;
                margin: 0 auto;
                background: linear-gradient(135deg, #18181b 0%, #27272a 100%);
                border-radius: 16px;
                overflow: hidden;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                border: 1px solid #3f3f46;
              }
              .header {
                background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
                padding: 40px;
                text-align: center;
                position: relative;
                overflow: hidden;
              }
              .header::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: url('data:image/svg+xml,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
                opacity: 0.4;
              }
              .header-badge {
                display: inline-block;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 13px;
                font-weight: 600;
                margin-bottom: 16px;
                position: relative;
                z-index: 1;
                letter-spacing: 0.5px;
              }
              .header h1 {
                margin: 0;
                font-size: 32px;
                font-weight: 700;
                color: white;
                position: relative;
                z-index: 1;
                letter-spacing: -0.5px;
              }
              .content {
                padding: 40px;
                color: #e4e4e7;
              }
              .lead-card {
                background: linear-gradient(135deg, #27272a 0%, #3f3f46 100%);
                border: 1px solid #52525b;
                border-radius: 12px;
                padding: 28px;
                margin: 24px 0;
                position: relative;
              }
              .lead-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 4px;
                height: 100%;
                background: linear-gradient(180deg, #dc2626 0%, #ef4444 100%);
                border-radius: 12px 0 0 12px;
              }
              .field-group {
                margin-bottom: 24px;
              }
              .field-group:last-child {
                margin-bottom: 0;
              }
              .field-label {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #a1a1aa;
                font-weight: 600;
                margin-bottom: 8px;
              }
              .field-value {
                font-size: 16px;
                color: #fafafa;
                font-weight: 500;
                line-height: 1.5;
              }
              .field-value a {
                color: #ef4444;
                text-decoration: none;
                font-weight: 600;
              }
              .message-section {
                background: #18181b;
                border: 1px solid #3f3f46;
                border-radius: 12px;
                padding: 24px;
                margin: 24px 0;
              }
              .message-label {
                font-size: 11px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #ef4444;
                font-weight: 600;
                margin-bottom: 12px;
              }
              .message-text {
                color: #d4d4d8;
                font-size: 15px;
                line-height: 1.8;
                white-space: pre-wrap;
              }
              .action-buttons {
                display: flex;
                gap: 12px;
                margin: 30px 0;
              }
              .btn-primary {
                flex: 1;
                display: inline-block;
                background: linear-gradient(135deg, #dc2626 0%, #ef4444 100%);
                color: white;
                padding: 16px 24px;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 15px;
                text-align: center;
                box-shadow: 0 4px 12px rgba(220, 38, 38, 0.3);
              }
              .btn-secondary {
                flex: 1;
                display: inline-block;
                background: #27272a;
                color: white;
                padding: 16px 24px;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                font-size: 15px;
                text-align: center;
                border: 1px solid #52525b;
              }
              .timestamp {
                background: #18181b;
                padding: 20px;
                text-align: center;
                border-top: 1px solid #3f3f46;
                border-bottom: 1px solid #3f3f46;
              }
              .timestamp-text {
                color: #a1a1aa;
                font-size: 13px;
              }
              .timestamp-value {
                color: #fafafa;
                font-weight: 600;
                font-size: 14px;
                margin-top: 4px;
              }
              .footer {
                background: #18181b;
                padding: 30px 40px;
                text-align: center;
              }
              .footer-text {
                color: #71717a;
                font-size: 12px;
                margin: 6px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="header-badge">NEW LEAD</div>
                <h1>Contact Form Submission</h1>
              </div>
              
              <div class="content">
                <p style="color: #d4d4d8; margin-bottom: 24px; font-size: 15px;">
                  You have a new inquiry from your website contact form. Review the details below and respond promptly.
                </p>

                <div class="lead-card">
                  <div class="field-group">
                    <div class="field-label">Contact Name</div>
                    <div class="field-value">${fullName}</div>
                  </div>
                  
                  <div class="field-group">
                    <div class="field-label">Email Address</div>
                    <div class="field-value">
                      <a href="mailto:${email}">${email}</a>
                    </div>
                  </div>
                  
                  ${company ? `
                  <div class="field-group">
                    <div class="field-label">Company</div>
                    <div class="field-value">${company}</div>
                  </div>
                  ` : ''}
                </div>

                <div class="message-section">
                  <div class="message-label">Message</div>
                  <div class="message-text">${message}</div>
                </div>

                <div class="action-buttons">
                  <a href="mailto:${email}?subject=Re: Your inquiry to Worksthal&body=Hi ${firstNameValue},%0D%0A%0D%0AThank you for reaching out to Worksthal.%0D%0A%0D%0A" class="btn-primary">
                    Reply to ${firstNameValue}
                  </a>
                  <a href="https://worksthal.com/admin" class="btn-secondary">
                    View Dashboard
                  </a>
                </div>
              </div>
              
              <div class="timestamp">
                <div class="timestamp-text">Received on</div>
                <div class="timestamp-value">
                  ${new Date().toLocaleString('en-US', { 
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

              <div class="footer">
                <p class="footer-text">
                  This email was sent from your Worksthal website contact form
                </p>
                <p class="footer-text">
                  worksthal.com • Automated by Resend
                </p>
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
