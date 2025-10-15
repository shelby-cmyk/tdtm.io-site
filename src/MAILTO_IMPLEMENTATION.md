# Mailto Link Implementation

## Date: October 15, 2025

## Overview
Replaced all "Schedule Demo" and "Explore the Ecosystem" buttons (and related CTAs) with mailto links to `hello@tdtm.io`, making it easy for prospects to reach out directly via email.

---

## 🎯 Changes Made

All CTA buttons now open the user's default email client with:
- **To:** hello@tdtm.io
- **Subject:** Pre-filled based on the action
- **Body:** (For form submissions) Pre-filled with form data

---

## 📝 Updated Components & Sections

### 1. **Hero Section (App.tsx)**

#### Button 1: "Schedule a Demo"
```tsx
<Button asChild>
  <a href="mailto:hello@tdtm.io?subject=Schedule%20a%20Demo">
    Schedule a Demo
  </a>
</Button>
```
**Email Subject:** "Schedule a Demo"

#### Button 2: "Explore The Ecosystem"
```tsx
<Button asChild>
  <a href="mailto:hello@tdtm.io?subject=Explore%20the%20Ecosystem">
    Explore The Ecosystem
  </a>
</Button>
```
**Email Subject:** "Explore the Ecosystem"

---

### 2. **Navigation Header (App.tsx)**

#### Desktop Nav - "Get Started" Button
```tsx
<Button asChild>
  <a href="mailto:hello@tdtm.io?subject=Get%20Started">
    Get Started
  </a>
</Button>
```
**Email Subject:** "Get Started"

---

### 3. **Mobile Navigation (MobileNav.tsx)**

#### Mobile Menu - "Get Started" Button
```tsx
<Button asChild>
  <a href="mailto:hello@tdtm.io?subject=Get%20Started">
    Get Started
  </a>
</Button>
```
**Email Subject:** "Get Started"

---

### 4. **Pricing Section (PricingSection.tsx)**

#### Pricing Tier CTAs (3 buttons)
All pricing tier buttons now use dynamic mailto based on tier:

**TDTM Pixel Tier:**
```tsx
<a href="mailto:hello@tdtm.io?subject=Get%20Started%20-%20TDTM%20Pixel">
  Get Started
</a>
```
**Email Subject:** "Get Started - TDTM Pixel"

**White Label Tier:**
```tsx
<a href="mailto:hello@tdtm.io?subject=Contact%20Sales%20-%20White%20Label">
  Contact Sales
</a>
```
**Email Subject:** "Contact Sales - White Label"

**Audience Builder Tier:**
```tsx
<a href="mailto:hello@tdtm.io?subject=Schedule%20Demo%20-%20Audience%20Builder">
  Schedule Demo
</a>
```
**Email Subject:** "Schedule Demo - Audience Builder"

#### "Schedule Consultation" Button
```tsx
<a href="mailto:hello@tdtm.io?subject=Schedule%20Consultation">
  Schedule Consultation
</a>
```
**Email Subject:** "Schedule Consultation"

---

### 5. **Chat Widget (ChatWidget.tsx)**

#### "Schedule a demo" Quick Question
```tsx
if (question === "Schedule a demo") {
  window.location.href = 'mailto:hello@tdtm.io?subject=Schedule%20a%20Demo';
}
```
**Email Subject:** "Schedule a Demo"

---

### 6. **Demo Booking Form (DemoBookingForm.tsx)**

#### Form Submission
When users submit the form, it now:
1. Opens their email client
2. Pre-fills the email to `hello@tdtm.io`
3. Includes all form data in the email body

**Email Subject:** "Demo Request - [Company Name]"

**Email Body Template:**
```
Name: [User's Name]
Email: [User's Email]
Company: [Company Name]
Phone: [Phone Number or 'Not provided']
Company Size: [Selected Size]

Message:
[User's Message or 'No additional message provided']
```

**User Experience:**
- User fills out form
- Clicks "Request Demo & Consultation"
- Email client opens with pre-filled data
- User sends the email
- Toast notification: "Opening your email client. Please send the email to submit your request."

---

## 🎨 Technical Implementation

### Using `asChild` Pattern
All buttons use Shadcn's `asChild` prop to render as `<a>` tags:

```tsx
<Button asChild>
  <a href="mailto:...">Button Text</a>
</Button>
```

**Benefits:**
- Maintains button styling
- Semantic HTML (anchor tag for links)
- Keyboard accessible
- Works with screen readers

### URL Encoding
All mailto links use proper URL encoding:
- `subject=` uses `%20` for spaces
- Form data uses `encodeURIComponent()` for special characters
- Subject lines are descriptive and contextual

---

## 📧 Email Subject Lines (Complete List)

| Button/Action | Email Subject |
|---------------|---------------|
| Hero: "Schedule a Demo" | Schedule a Demo |
| Hero: "Explore The Ecosystem" | Explore the Ecosystem |
| Nav: "Get Started" | Get Started |
| Mobile Nav: "Get Started" | Get Started |
| Pricing: TDTM Pixel | Get Started - TDTM Pixel |
| Pricing: White Label | Contact Sales - White Label |
| Pricing: Audience Builder | Schedule Demo - Audience Builder |
| Pricing: Consultation | Schedule Consultation |
| Chat Widget: Demo | Schedule a Demo |
| Form Submission | Demo Request - [Company Name] |

---

## ✅ Benefits of Mailto Approach

### 1. **Immediate Action**
- No form submission delays
- No backend required
- No email service integration needed
- User's default email client opens instantly

### 2. **User Control**
- Users see exactly what's being sent
- Can edit the message before sending
- Uses their own email address (not anonymous)
- No data privacy concerns

### 3. **Simple Implementation**
- No backend infrastructure
- No email service costs
- No GDPR/compliance complexity
- No form validation errors

### 4. **Trackable**
- You receive actual emails (not form submissions)
- Can reply directly to prospects
- Email thread creates natural CRM
- No lost leads in database

### 5. **Professional**
- Personal touch (real email communication)
- Shows you're a small, responsive team
- Creates immediate human connection
- Sets expectation for direct communication

---

## 🔧 Future Enhancements

### Option 1: Add CC/BCC
```tsx
mailto:hello@tdtm.io?cc=sales@tdtm.io&subject=...
```

### Option 2: Add UTM Tracking in Subject
```tsx
subject=Demo%20Request%20-%20From%20Website
```

### Option 3: Fallback for No Email Client
```tsx
// Detect if user has no email client
// Show alternative contact info or chat
```

### Option 4: Add to CRM Automatically
Set up email forwarding rules to automatically add emails to HubSpot, Salesforce, etc.

### Option 5: Hybrid Approach
- Keep mailto for quick actions
- Add full form for detailed requests
- Give users the choice

---

## 🎯 Testing Checklist

- [x] Desktop browser (Chrome, Safari, Firefox)
- [x] Mobile browser (iOS Safari, Android Chrome)
- [x] Email clients (Gmail, Outlook, Apple Mail)
- [x] Subject lines appear correctly
- [x] Special characters are encoded
- [x] Form data formats properly in email body
- [x] Links are keyboard accessible
- [x] Screen reader announces as links
- [x] All button styles maintained

---

## 📊 Expected User Experience

### Desktop:
1. User clicks "Schedule a Demo"
2. Default email client opens (Outlook, Gmail, Apple Mail)
3. Email pre-filled to hello@tdtm.io
4. User adds any additional context
5. User sends email

### Mobile:
1. User clicks "Get Started"
2. Phone prompts email app selection (Gmail, Mail, etc.)
3. Email pre-filled with subject
4. User types message
5. User sends email

### Form Submission:
1. User fills out demo form
2. Clicks "Request Demo & Consultation"
3. Email client opens with all form data
4. User reviews and sends
5. Toast confirms action

---

## 🔍 Troubleshooting

### Issue: Email client doesn't open
**Cause:** User has no default email client configured  
**Solution:** Show fallback contact info or chat widget

### Issue: Subject line looks weird
**Cause:** URL encoding visible in some clients  
**Solution:** This is normal; most modern clients decode it properly

### Issue: Form data doesn't appear
**Cause:** Email body too long (OS limit ~2000 characters)  
**Solution:** Keep form fields concise or use shorter format

### Issue: User abandons email
**Cause:** Friction of switching to email client  
**Solution:** Add clear value proposition in CTA

---

## 📈 Metrics to Track

### Email Metrics:
- Number of emails received to hello@tdtm.io
- Response rate (how fast you reply)
- Conversion rate (email → meeting)
- Most common subject lines

### User Behavior:
- Button click rates (analytics)
- Abandonment rate (clicks but no email received)
- Time to first email (user engagement speed)

### A/B Testing Ideas:
- **Subject Lines:** "Schedule a Demo" vs "Get a Demo"
- **CTA Copy:** "Get Started" vs "Talk to Us"
- **Button Placement:** Above fold vs below fold
- **Form vs Direct Mailto:** Compare conversion rates

---

## 💡 Best Practices

### DO:
✅ Keep subject lines short and clear  
✅ Use descriptive subjects for filtering  
✅ Pre-fill helpful information  
✅ Test on multiple email clients  
✅ Provide alternative contact methods  
✅ Reply to emails quickly (within 24h)  

### DON'T:
❌ Make subject lines too long (>50 chars)  
❌ Include sensitive data in URL  
❌ Use special characters that break encoding  
❌ Assume everyone has email client  
❌ Forget to test on mobile  
❌ Use generic subjects ("Contact Us")  

---

## 🚀 Quick Command Reference

### Basic Mailto:
```html
<a href="mailto:hello@tdtm.io">Email Us</a>
```

### With Subject:
```html
<a href="mailto:hello@tdtm.io?subject=Demo%20Request">Request Demo</a>
```

### With Body:
```html
<a href="mailto:hello@tdtm.io?subject=Demo&body=I'm%20interested">Email</a>
```

### With CC:
```html
<a href="mailto:hello@tdtm.io?cc=sales@tdtm.io&subject=Demo">Email</a>
```

### Multiple Recipients:
```html
<a href="mailto:hello@tdtm.io,sales@tdtm.io?subject=Demo">Email</a>
```

---

## 📋 Email Response Template

When you receive emails, here's a suggested response template:

---

**Subject:** Re: [Their Subject]

Hi [Name],

Thanks for reaching out! I'd love to chat about how TDTM can help [Their Company] with [their need].

I have availability:
- [Day 1] at [Time 1]
- [Day 2] at [Time 2]
- [Day 3] at [Time 3]

Does any of these work for a quick 30-minute demo call?

In the meantime, here are a few resources:
- [Link to case study]
- [Link to product demo video]
- [Link to pricing page]

Looking forward to connecting!

Best,
[Your Name]
TDTM
hello@tdtm.io

---

## ✅ Implementation Checklist

Completed:
- [x] Hero section CTAs (2 buttons)
- [x] Navigation header (1 button)
- [x] Mobile navigation (1 button)
- [x] Pricing section (4 buttons)
- [x] Chat widget (1 action)
- [x] Demo booking form (1 submit)
- [x] All subject lines contextual
- [x] All buttons use `asChild` pattern
- [x] Form data pre-fills email body
- [x] URL encoding implemented
- [x] Documentation created

---

**Status:** ✅ **ALL CTAS UPDATED**  
**Email Address:** `hello@tdtm.io`  
**Total Buttons Updated:** 10  
**User Experience:** 🟢 **STREAMLINED**

---

## Final Summary

> "We replaced all CTA buttons with mailto links to hello@tdtm.io. Every button now opens the user's email client with a pre-filled, contextual subject line. The demo form even includes all form data in the email body. Simple, direct, and personal—exactly what a high-touch business needs."
