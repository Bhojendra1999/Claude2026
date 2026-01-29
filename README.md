# Cleaning Service Website

A modern, minimal cleaning service website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 Homepage with hero section, services preview, testimonials
- 🧹 Services overview and detailed service pages
- 💰 Interactive pricing calculator
- 📧 Online booking with email confirmations (Resend)
- ℹ️ About page
- 📱 Fully responsive design
- ⚡ Optimized for performance and SEO

## Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Animations**: Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Booking System Setup

The booking system uses [Resend](https://resend.com) for email confirmations.

### Environment Variables

Create a `.env.local` file in the project root:

```
RESEND_API_KEY=re_your_api_key_here
ADMIN_EMAIL=your-email@example.com
```

### Getting Resend API Key

1. Sign up at [resend.com](https://resend.com) (free tier: 3,000 emails/month)
2. Go to Dashboard → API Keys → Create API Key
3. Add the key to your `.env.local` file

### Domain Verification (Production)

For sending emails to customers (not just admin):
1. Go to [resend.com/domains](https://resend.com/domains)
2. Add and verify your domain
3. Update `src/lib/emails.ts`: set `IS_DOMAIN_VERIFIED = true`
4. Update the `from` address to use your verified domain

### Booking Files

| File | Purpose |
|------|---------|
| `src/types/booking.ts` | TypeScript interfaces |
| `src/lib/validation.ts` | Form validation |
| `src/lib/emails.ts` | Resend email functions |
| `src/lib/useBookingForm.ts` | Form state hook |
| `src/app/api/booking/route.ts` | API endpoint |
| `src/app/booking/page.tsx` | Booking page |

## Project Structure

```
cleaning-service/
├── spec/                  # Content specifications
├── public/                # Static assets
│   └── images/
├── src/
│   ├── app/              # Next.js app router pages
│   ├── components/       # React components
│   ├── lib/              # Utility functions
│   ├── data/             # Static data
│   └── types/            # TypeScript types
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

Private project
