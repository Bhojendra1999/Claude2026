# Images Directory Structure

This folder contains all images used throughout the website.

## Folder Structure

### `/hero`
Hero section images for the homepage
- `hero-main.jpg` - Main hero image (1920x1080px)
- Recommended: Clean, modern home interior or professional cleaner in action

### `/services`
Service-specific images
- `regular-cleaning.jpg` (600x400px)
- `deep-cleaning.jpg` (600x400px)
- `move-in-out.jpg` (600x400px)
- `post-construction.jpg` (600x400px)
- `window-cleaning.jpg` (600x400px)
- `carpet-cleaning.jpg` (600x400px)

### `/testimonials`
Customer testimonial photos (optional)
- Format: 80x80px circular photos
- Name format: `customer-name.jpg`

### `/about`
About page images
- `team-photo.jpg` - Team group photo (1600x600px)
- Individual team member photos if needed

## Image Guidelines

### Format
- Use WebP format for best compression with JPG fallback
- Use SVG for icons and logos
- PNG for images requiring transparency

### Optimization
- Compress all images before uploading
- Use appropriate dimensions (don't use oversized images)
- Next.js Image component will handle responsive sizes

### Naming Convention
- Use lowercase with hyphens: `my-image-name.jpg`
- Be descriptive: `kitchen-cleaning-service.jpg` not `img1.jpg`

## Placeholder Images

Until actual images are added, components use CSS gradients and emoji placeholders.

To add images:
1. Place images in appropriate folder
2. Update component imports to use the new images
3. Ensure image paths use `/images/...` (relative to public folder)
