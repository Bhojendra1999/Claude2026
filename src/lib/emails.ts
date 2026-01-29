import { Resend } from 'resend';
import { Booking } from '@/types/booking';

const resend = new Resend(process.env.RESEND_API_KEY);

// Set to true after verifying domain at resend.com/domains
const IS_DOMAIN_VERIFIED = false;

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export async function sendBookingConfirmation(booking: Booking) {
  const adminEmail = process.env.ADMIN_EMAIL;

  // Skip customer email if domain not verified and customer email differs from admin
  if (!IS_DOMAIN_VERIFIED && booking.email !== adminEmail) {
    console.log('Skipping customer email - domain not verified. Customer:', booking.email);
    return null;
  }

  const { data, error } = await resend.emails.send({
    from: 'EcoClean <onboarding@resend.dev>',
    to: booking.email,
    subject: `Booking Confirmation - ${booking.id}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #16382B; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; }
            .detail-row { display: flex; padding: 10px 0; border-bottom: 1px solid #eee; }
            .detail-label { font-weight: bold; width: 150px; color: #16382B; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
            .highlight { color: #6FBF8E; font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Booking Confirmed!</h1>
              <p>Thank you for choosing EcoClean</p>
            </div>
            <div class="content">
              <p>Dear <strong>${booking.fullName}</strong>,</p>
              <p>We have received your cleaning service booking request. Our team will contact you within 24 hours to confirm the details.</p>

              <div class="booking-details">
                <h3 style="color: #16382B; margin-top: 0;">Booking Details</h3>
                <div class="detail-row">
                  <span class="detail-label">Booking ID:</span>
                  <span class="highlight">${booking.id}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Service:</span>
                  <span>${booking.serviceType}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Date:</span>
                  <span>${formatDate(booking.preferredDate)}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Time:</span>
                  <span>${booking.preferredTime}</span>
                </div>
                <div class="detail-row">
                  <span class="detail-label">Phone:</span>
                  <span>${booking.phone}</span>
                </div>
                ${booking.additionalNotes ? `
                <div class="detail-row">
                  <span class="detail-label">Notes:</span>
                  <span>${booking.additionalNotes}</span>
                </div>
                ` : ''}
              </div>

              <p>If you have any questions, feel free to reply to this email or call us.</p>
              <p>Best regards,<br><strong>The EcoClean Team</strong></p>
            </div>
            <div class="footer">
              <p>EcoClean - Natural & Eco-Friendly Cleaning Services</p>
            </div>
          </div>
        </body>
      </html>
    `,
  });

  if (error) {
    console.error('Failed to send confirmation email:', error);
    throw error;
  }

  return data;
}

export async function sendAdminNotification(booking: Booking) {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn('ADMIN_EMAIL not configured, skipping admin notification');
    return null;
  }

  const { data, error } = await resend.emails.send({
    from: 'EcoClean Bookings <onboarding@resend.dev>',
    to: adminEmail,
    subject: `New Booking Request - ${booking.id}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #F4C430; color: #16382B; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .booking-details { background: white; padding: 20px; border-radius: 8px; }
            .detail-row { padding: 8px 0; border-bottom: 1px solid #eee; }
            .detail-label { font-weight: bold; color: #16382B; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Booking Request</h2>
            </div>
            <div class="content">
              <div class="booking-details">
                <div class="detail-row">
                  <span class="detail-label">Booking ID:</span> ${booking.id}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Customer:</span> ${booking.fullName}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Email:</span> ${booking.email}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Phone:</span> ${booking.phone}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Service:</span> ${booking.serviceType}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Date:</span> ${formatDate(booking.preferredDate)}
                </div>
                <div class="detail-row">
                  <span class="detail-label">Time:</span> ${booking.preferredTime}
                </div>
                ${booking.additionalNotes ? `
                <div class="detail-row">
                  <span class="detail-label">Notes:</span> ${booking.additionalNotes}
                </div>
                ` : ''}
                <div class="detail-row">
                  <span class="detail-label">Submitted:</span> ${new Date(booking.createdAt).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
  });

  if (error) {
    console.error('Failed to send admin notification:', error);
    throw error;
  }

  return data;
}
