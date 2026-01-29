# Pricing Page Specification

## Page Title
Pricing Calculator | Get Your Custom Cleaning Quote

## Meta Description
Calculate your cleaning service cost instantly. Transparent pricing based on home size, service type, and frequency. No hidden fees. Get your free quote now!

---

## Section 1: Page Header

### Headline
Transparent Pricing Calculator

### Subheadline
Get an instant estimate for your cleaning service. No surprises, no hidden fees.

---

## Section 2: Pricing Calculator (Interactive)

### Calculator Container (Card/Box)

#### Step 1: Property Size
**Label**: What size is your property?

**Options** (Radio buttons or large clickable cards):
- Studio / 1 Bedroom
  - Icon: Small house
  - Approx: 0-800 sq ft
  - Base price: $80

- 2 Bedrooms
  - Icon: Medium house
  - Approx: 800-1200 sq ft
  - Base price: $100

- 3 Bedrooms
  - Icon: Large house
  - Approx: 1200-1800 sq ft
  - Base price: $120

- 4 Bedrooms
  - Icon: Extra large house
  - Approx: 1800-2500 sq ft
  - Base price: $150

- 5+ Bedrooms
  - Icon: XL house
  - Approx: 2500+ sq ft
  - Base price: $180

**Alternative Input**: "Or enter square footage" (number input)

---

#### Step 2: Service Type
**Label**: What type of cleaning do you need?

**Options** (Radio buttons or dropdown):
- Regular Cleaning
  - Description: Routine maintenance cleaning
  - Multiplier: 1.0x

- Deep Cleaning
  - Description: Intensive top-to-bottom cleaning
  - Multiplier: 1.5x
  - Badge: "Most thorough"

- Move-In/Move-Out
  - Description: Complete cleaning for moving
  - Multiplier: 1.8x

- Post-Construction
  - Description: After renovation cleaning
  - Multiplier: 2.0x

**Info Icon**: Tooltip explaining differences

---

#### Step 3: Frequency
**Label**: How often would you like service?

**Options** (Radio buttons with discount badges):
- One-Time
  - Discount: 0%
  - Price: Full price

- Weekly
  - Discount: 15% OFF
  - Badge: "Best value"
  - Price: -15%

- Bi-Weekly (Every 2 weeks)
  - Discount: 10% OFF
  - Badge: "Most popular"
  - Price: -10%

- Monthly
  - Discount: 5% OFF
  - Price: -5%

**Note**: "Recurring services can be paused or cancelled anytime"

---

#### Step 4: Add-Ons (Optional)
**Label**: Add extra services (optional)

**Checkboxes**:
- [ ] Interior Windows (+$30)
- [ ] Inside Refrigerator (+$25)
- [ ] Inside Oven (+$30)
- [ ] Laundry (per load) (+$20)
- [ ] Garage/Patio Sweep (+$15)

---

### Price Display (Sticky on desktop, prominent on mobile)

**Current Selection Summary**:
- Property: [Selected size]
- Service: [Selected type]
- Frequency: [Selected frequency]

**Price Breakdown**:
```
Base Price:              $120
Service Type (Deep):     +$60 (1.5x)
Subtotal:                $180
Frequency Discount (10%): -$18
Add-ons:                 +$55
─────────────────────────
TOTAL:                   $217
```

**Per Visit**: $217
**If recurring**: $217 per visit

**CTA Buttons**:
- **Book This Service** (Primary)
  - Future: Goes to booking page with prefilled info
  - Current: Shows contact info or placeholder

- **Save Quote** (Secondary, optional)
  - Email quote to self
  - Generate PDF

---

## Section 3: What's Included

### Section Title
What You Get With Every Service

### Features Grid (4 items)

1. **Professional Team**
   - Icon: People icon
   - Trained and background-checked cleaners

2. **All Supplies Provided**
   - Icon: Spray bottle
   - We bring all equipment and eco-friendly products

3. **Satisfaction Guarantee**
   - Icon: Badge/shield
   - 100% satisfaction or we'll re-clean for free

4. **Flexible Scheduling**
   - Icon: Calendar
   - Easy online booking and rescheduling

---

## Section 4: Pricing Transparency

### Section Title
Our Pricing Promise

### Content
> **No Hidden Fees**
> The price you see is the price you pay. No surprise charges or hidden fees.

> **Flexible Cancellation**
> Cancel or reschedule anytime with 24 hours notice. No cancellation fees.

> **Price Match Guarantee**
> Found a better price? We'll match it or beat it.

### Trust Badges (icons)
- Insured & Bonded
- BBB Accredited
- 5-Star Rated
- Eco-Friendly

---

## Section 5: FAQ

### Section Title
Pricing Questions?

### Questions

**Q: Are there any hidden fees?**
A: No! The price shown includes everything except optional add-ons you select. No travel fees, no surprise charges.

**Q: What payment methods do you accept?**
A: We accept all major credit cards, debit cards, and digital payments. Payment is processed after service completion.

**Q: Do you offer discounts?**
A: Yes! Recurring services save up to 15%. We also offer referral discounts and seasonal promotions.

**Q: What if my home is larger or messier than average?**
A: Our pricing accommodates typical conditions. For homes requiring extra attention, we'll provide a custom quote after a brief consultation.

**Q: Can I get a refund if I'm not satisfied?**
A: We offer a 100% satisfaction guarantee. If you're not happy, we'll re-clean for free. If still unsatisfied, we'll refund your payment.

---

## Section 6: Special Offers (Optional)

### Section Title
Current Promotions

### Offer Cards

**First-Time Customer**
- 20% OFF your first cleaning
- Code: FIRST20
- Minimum $100 service

**Refer a Friend**
- Get $25 credit for each referral
- Your friend gets 15% off their first cleaning

**Seasonal Deep Clean**
- Spring/Fall special: $50 off deep cleaning
- Limited time offer

---

## Section 7: Custom Quote

### Section Title
Need a Custom Quote?

### Description
Have a unique property or special requirements? Contact us for a personalized quote.

### CTA Button
**Contact Us for Custom Quote**

### Contact Info
- Phone: (555) 123-4567
- Email: quotes@cleaningservice.com
- Hours: Mon-Fri, 8am-6pm

---

## Pricing Logic (Backend Calculation)

### Base Rate Formula
```javascript
baseRates = {
  studio: 80,
  oneBedroom: 100,
  twoBedroom: 120,
  threeBedroom: 150,
  fourBedroom: 180,
  fivePlusBedroom: 220
}
```

### Service Type Multipliers
```javascript
serviceMultipliers = {
  regular: 1.0,
  deep: 1.5,
  moveInOut: 1.8,
  postConstruction: 2.0
}
```

### Frequency Discounts
```javascript
frequencyDiscounts = {
  oneTime: 0,      // 0% off
  weekly: 0.15,    // 15% off
  biWeekly: 0.10,  // 10% off
  monthly: 0.05    // 5% off
}
```

### Add-Ons Pricing
```javascript
addOns = {
  interiorWindows: 30,
  refrigerator: 25,
  oven: 30,
  laundry: 20,      // per load
  garagePatio: 15
}
```

### Calculation Formula
```javascript
// Step 1: Base price
basePrice = baseRates[propertySize]

// Step 2: Apply service multiplier
servicePrice = basePrice * serviceMultipliers[serviceType]

// Step 3: Apply frequency discount
discount = servicePrice * frequencyDiscounts[frequency]
priceAfterDiscount = servicePrice - discount

// Step 4: Add optional add-ons
addOnsTotal = sum of selected add-ons
finalPrice = priceAfterDiscount + addOnsTotal

// Display
- Show base price
- Show service adjustment
- Show subtotal
- Show discount (if applicable)
- Show add-ons total
- Show final total
```

---

## UX Considerations

### Interactive Features
- Real-time price updates as selections change
- Smooth animations when price changes
- Progress indicator for multi-step selection
- Tooltips for explanations
- Mobile-friendly touch targets

### Accessibility
- Keyboard navigation support
- Screen reader compatible
- Clear labels and instructions
- Error states for invalid inputs
- High contrast for readability

### Mobile Responsive
- Stack calculator steps vertically on mobile
- Sticky price summary at bottom on mobile
- Large, touch-friendly buttons
- Collapsible sections for add-ons

---

## Images Needed

1. **Property Size Icons**: 5 house/apartment icons
   - Format: SVG
   - Style: Simple, outlined

2. **Service Type Icons**: 4 cleaning icons
   - Format: SVG

3. **Feature Icons**: 4 icons for included features
   - Format: SVG

4. **Trust Badges**: Company logos/badges
   - Format: SVG or PNG

---

## SEO Keywords

- Primary: cleaning service pricing, cleaning service cost, house cleaning prices
- Secondary: cleaning estimate, free cleaning quote, affordable cleaning service
- Long-tail: how much does house cleaning cost, professional cleaning pricing calculator

---

## Additional Notes

- Calculator should save state in sessionStorage
- Consider adding URL parameters to pre-fill calculator (e.g., /pricing?size=2bed&service=deep)
- Track calculator interactions with analytics
- A/B test different pricing displays
- Add social proof (e.g., "Join 500+ satisfied customers")
- Consider adding a "Compare Plans" view for recurring services
- Price updates should be instant and smooth
- All prices shown are estimates; final price confirmed after booking
