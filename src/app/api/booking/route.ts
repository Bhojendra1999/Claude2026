import { NextRequest, NextResponse } from 'next/server';
import { BookingFormData, BookingSubmissionResponse, Booking } from '@/types/booking';
import { validateBookingForm, hasErrors } from '@/lib/validation';
import { sendBookingConfirmation, sendAdminNotification } from '@/lib/emails';
import fs from 'fs/promises';
import path from 'path';

function generateBookingId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 6);
  return `ECO-${timestamp}-${random}`.toUpperCase();
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<BookingSubmissionResponse>> {
  try {
    const body: BookingFormData = await request.json();

    // Server-side validation
    const errors = validateBookingForm(body);
    if (hasErrors(errors)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed. Please check your input.',
        },
        { status: 400 }
      );
    }

    const bookingId = generateBookingId();
    const booking: Booking = {
      id: bookingId,
      ...body,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    // Log the booking
    console.log('New booking received:', booking);

    // Store to JSON file (MVP persistence)
    try {
      const dataDir = path.join(process.cwd(), 'src', 'data');
      const filePath = path.join(dataDir, 'bookings.json');

      // Ensure directory exists
      await fs.mkdir(dataDir, { recursive: true });

      let bookings: Booking[] = [];
      try {
        const existingData = await fs.readFile(filePath, 'utf-8');
        bookings = JSON.parse(existingData);
      } catch {
        // File doesn't exist yet, start with empty array
      }

      bookings.push(booking);
      await fs.writeFile(filePath, JSON.stringify(bookings, null, 2));
    } catch (fileError) {
      console.warn('Could not persist booking to file:', fileError);
    }

    // Send emails via Resend
    try {
      await Promise.all([
        sendBookingConfirmation(booking),
        sendAdminNotification(booking),
      ]);
    } catch (emailError) {
      console.error('Failed to send emails:', emailError);
      // Don't fail the booking if email fails
    }

    return NextResponse.json({
      success: true,
      message:
        'Your booking request has been submitted successfully! We will contact you within 24 hours to confirm your appointment.',
      bookingId,
    });
  } catch (error) {
    console.error('Booking submission error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again.',
      },
      { status: 500 }
    );
  }
}
