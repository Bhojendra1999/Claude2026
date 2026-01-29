'use client';

import { useState } from 'react';
import { HiCalendar, HiClock, HiHome, HiUser, HiMail, HiPhone, HiCheckCircle, HiExclamationCircle, HiX, HiClipboardCopy, HiClipboardCheck } from 'react-icons/hi';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { useBookingForm } from '@/lib/useBookingForm';

const serviceOptions = [
  'Residential Cleaning',
  'Deep Cleaning',
  'Office Cleaning',
  'Move In/Out Cleaning',
  'Carpet Cleaning',
  'Window Cleaning',
];

const timeSlots = [
  '8:00 AM - 10:00 AM',
  '10:00 AM - 12:00 PM',
  '12:00 PM - 2:00 PM',
  '2:00 PM - 4:00 PM',
  '4:00 PM - 6:00 PM',
];

function parseTimeToHours(timeStr: string): number {
  const [time, period] = timeStr.trim().split(' ');
  const [hours, minutes] = time.split(':').map(Number);
  let hour24 = hours;
  if (period === 'PM' && hours !== 12) {
    hour24 = hours + 12;
  } else if (period === 'AM' && hours === 12) {
    hour24 = 0;
  }
  return hour24 + (minutes / 60);
}

function getAvailableTimeSlots(selectedDate: string): string[] {
  const now = new Date();
  const todayStr = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  if (selectedDate !== todayStr) {
    return timeSlots;
  }

  const currentHour = now.getHours() + now.getMinutes() / 60;
  return timeSlots.filter((slot) => {
    const startTimeStr = slot.split(' - ')[0];
    const startHour = parseTimeToHours(startTimeStr);
    return startHour > currentHour;
  });
}

export default function BookingForm() {
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [copied, setCopied] = useState(false);
  const {
    formData,
    errors,
    isSubmitting,
    submitResult,
    updateField,
    submitForm,
    resetForm,
  } = useBookingForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitForm();
    if (success) {
      setShowSuccessPopup(true);
    }
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    setCopied(false);
    resetForm();
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Get today's date in YYYY-MM-DD format for min date
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      {/* Success Popup Modal */}
      {showSuccessPopup && submitResult?.success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closePopup}
          />

          {/* Modal */}
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-lifted transform transition-all">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 p-2 text-body hover:text-heading transition-colors"
            >
              <HiX className="h-6 w-6" />
            </button>

            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-sage/20 rounded-full flex items-center justify-center">
                <HiCheckCircle className="h-12 w-12 text-sage" />
              </div>
            </div>

            {/* Content */}
            <div className="text-center">
              <h3 className="text-2xl font-heading font-bold text-heading mb-3">
                Booking Submitted!
              </h3>
              <p className="text-body mb-4">
                {submitResult.message}
              </p>

              {submitResult.bookingId && (
                <div className="bg-muted rounded-xl p-4 mb-6">
                  <p className="text-sm text-body mb-2">Your Booking Reference</p>
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-xl font-bold text-heading">{submitResult.bookingId}</p>
                    <button
                      onClick={() => copyToClipboard(submitResult.bookingId!)}
                      className="p-2 hover:bg-sage/20 rounded-lg transition-colors"
                      title={copied ? 'Copied!' : 'Copy to clipboard'}
                    >
                      {copied ? (
                        <HiClipboardCheck className="h-5 w-5 text-sage" />
                      ) : (
                        <HiClipboardCopy className="h-5 w-5 text-body hover:text-heading" />
                      )}
                    </button>
                  </div>
                  {copied && (
                    <p className="text-xs text-sage mt-1">Copied to clipboard!</p>
                  )}
                </div>
              )}

              <p className="text-sm text-body mb-6">
                A confirmation email has been sent to your inbox.
              </p>

              <Button
                onClick={closePopup}
                variant="primary"
                size="lg"
                fullWidth
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      )}

      <section className="py-20 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <span className="inline-block text-sage font-semibold text-sm uppercase tracking-wider mb-3">
              Book Now
            </span>
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-heading mb-6">
              Schedule Your{' '}
              <span className="text-accent">Cleaning</span>{' '}
              Service
            </h2>
            <p className="text-body mb-8 leading-relaxed">
              Ready to experience the EcoClean difference? Fill out the form and well
              get back to you within 24 hours to confirm your appointment. Its that easy!
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiCalendar className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading">Flexible Scheduling</h4>
                  <p className="text-sm text-body">Choose a time that works for you</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiClock className="h-6 w-6 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading">Quick Response</h4>
                  <p className="text-sm text-body">Confirmation within 24 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sage/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <HiHome className="h-6 w-6 text-sage" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading">Free Estimates</h4>
                  <p className="text-sm text-body">No obligation quotes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-muted rounded-3xl p-8 lg:p-10 border border-forest-100 shadow-soft">
            <h3 className="text-xl font-semibold text-heading mb-6">Request a Quote</h3>

            {/* Error Message */}
            {submitResult && !submitResult.success && (
              <div className="mb-6 p-4 bg-red-100 rounded-xl flex items-start gap-3">
                <HiExclamationCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-700">{submitResult.message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-subheading mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-body" />
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                      errors.fullName ? 'border-red-500' : 'border-forest-200'
                    } focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all bg-white`}
                  />
                </div>
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-subheading mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-body" />
                    <input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-500' : 'border-forest-200'
                      } focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all bg-white`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-subheading mb-2">
                    Phone
                  </label>
                  <div className="relative">
                    <HiPhone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-body" />
                    <input
                      type="tel"
                      placeholder="(555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-500' : 'border-forest-200'
                      } focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all bg-white`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
              </div>

              {/* Service Type */}
              <div>
                <label className="block text-sm font-medium text-subheading mb-2">
                  Service Type
                </label>
                <select
                  value={formData.serviceType}
                  onChange={(e) => updateField('serviceType', e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.serviceType ? 'border-red-500' : 'border-forest-200'
                  } focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all bg-white text-body`}
                >
                  <option value="">Select a service</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
                )}
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-subheading mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={formData.preferredDate}
                    onChange={(e) => {
                      const newDate = e.target.value;
                      updateField('preferredDate', newDate);
                      // Clear time if the selected time is no longer available
                      const availableSlots = getAvailableTimeSlots(newDate);
                      if (formData.preferredTime && !availableSlots.includes(formData.preferredTime)) {
                        updateField('preferredTime', '');
                      }
                    }}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.preferredDate ? 'border-red-500' : 'border-forest-200'
                    } focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all bg-white`}
                  />
                  {errors.preferredDate && (
                    <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-subheading mb-2">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => updateField('preferredTime', e.target.value)}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.preferredTime ? 'border-red-500' : 'border-forest-200'
                    } focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all bg-white text-body`}
                  >
                    <option value="">Select time</option>
                    {getAvailableTimeSlots(formData.preferredDate).map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.preferredTime && (
                    <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-subheading mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about your space or any special requests..."
                  value={formData.additionalNotes}
                  onChange={(e) => updateField('additionalNotes', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-forest-200 focus:border-sage focus:ring-2 focus:ring-sage/20 outline-none transition-all bg-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Request Free Quote'}
              </Button>

              <p className="text-xs text-body text-center">
                By submitting, you agree to our privacy policy. We never share your information.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
