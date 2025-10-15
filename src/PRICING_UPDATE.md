# Pricing Section Update - Performance-Based Model

## Summary
Updated the pricing structure to reflect the per-record charge model and include the audience builder in all tiers.

---

## Key Changes

### 1. **Pricing Model Shift**
**FROM:** Fixed monthly pricing  
**TO:** Base monthly fee + per-record pricing for resolved identities

### 2. **Audience Builder Now Included**
**BEFORE:** Audience Builder was a separate "Custom" tier  
**NOW:** Audience Builder is included in ALL pricing tiers

### 3. **Three Clear Tiers**

| Tier | Base Price | Target Customer |
|------|-----------|-----------------|
| **TDTM Pixel** | $199/month | Self-serve businesses |
| **White Label** | $499/month | Agencies & resellers |
| **Enterprise** | Custom | Managed service clients |

---

## New Pricing Structure

### **Tier 1: TDTM Pixel** 💚
**Price:** $199/month + per-record pricing  
**Icon:** ⚡ Zap (Green #39FF14)  
**Target:** Direct customers, SMBs, self-serve

**What's Included:**
- ✅ TDTM pixel with 50% match rate
- ✅ Real-time visitor identification
- ✅ **Custom audience builder included** ← NEW
- ✅ Access to 500M+ identity records
- ✅ 100+ platform integrations
- ✅ API & webhook access
- ✅ Email & chat support
- ✅ Self-service documentation

---

### **Tier 2: White Label** 🟣 (MOST POPULAR)
**Price:** $499/month + per-record pricing  
**Icon:** 🏢 Building (Purple #8B5CF6)  
**Target:** Marketing agencies, resellers, white-label partners

**What's Included:**
- ✅ Everything in TDTM Pixel (including audience builder)
- ✅ White label platform for agencies
- ✅ Custom branding & domain
- ✅ Multi-client dashboard access
- ✅ Agency support & training
- ✅ Priority implementation
- ✅ Custom reporting dashboards
- ✅ Reseller program benefits

**Why Most Popular:**
- Perfect for agencies wanting to resell under their brand
- Higher margin opportunity for partners
- Multi-client management built-in

---

### **Tier 3: Enterprise** 🔵
**Price:** Custom + per-record pricing  
**Icon:** 🚀 Rocket (Cyan #00D9FF)  
**Target:** Large enterprises, strategic accounts, fully managed services

**What's Included:**
- ✅ Everything in White Label (including audience builder)
- ✅ Dedicated account manager
- ✅ Campaign strategy & planning
- ✅ Multi-channel activation
- ✅ Custom data integrations
- ✅ Weekly optimization calls
- ✅ Advanced reporting & analytics
- ✅ SLA & priority support

**When to Recommend:**
- High-volume clients (100K+ visitors/month)
- Clients wanting hands-off managed services
- Complex multi-channel campaigns
- Enterprise security/compliance requirements

---

## Per-Record Pricing Explanation

### **NEW: Prominent Callout Box**
Added a highlighted section below pricing cards:

**"Pay Only for Resolved Identities"**

**Key Points:**
1. ✅ **Performance-based** - Only charged for successfully matched visitors
2. ✅ **No waste** - Unmatched traffic = no charge
3. ✅ **Volume-based** - Pricing varies by volume and plan tier
4. ✅ **Transparent** - Contact sales for detailed per-record rates

**Messaging:**
> "All plans include a per-record charge based only on successfully resolved visitor identities. No charges for unmatched traffic—you only pay when the pixel works."

---

## Updated Section Header

### **BEFORE:**
- Badge: "FLEXIBLE PRICING"
- Heading: "CHOOSE YOUR ENGAGEMENT MODEL"
- Subhead: Generic ecosystem description

### **NOW:**
- Badge: "PERFORMANCE-BASED PRICING"
- Heading: "PAY FOR RESULTS, NOT PROMISES"
- Subhead: "All plans include the **audience builder**, **500M+ identity records**, and **100+ integrations**. You only pay per-record for identities we successfully resolve."

**Impact:**
- ✅ Emphasizes value-based pricing
- ✅ Highlights audience builder availability
- ✅ Builds trust with performance focus
- ✅ Sets clear expectations

---

## What's Removed

❌ **"Audience Builder" as separate tier** - Now included in all tiers  
❌ **Fixed-only pricing** - Now hybrid (base + per-record)  
❌ **Vague "Custom" messaging** - More specific about what's included

---

## CTAs Per Tier

| Tier | Button Text | Email Subject |
|------|-------------|---------------|
| TDTM Pixel | "Get Started" | Get Started - TDTM Pixel |
| White Label | "Contact Sales" | Contact Sales - White Label |
| Enterprise | "Schedule Demo" | Schedule Demo - Enterprise |

All buttons link to `mailto:hello@tdtm.io` with pre-filled subject lines.

---

## Design Updates

### **Popular Badge**
- **Now on:** White Label tier (moved from Enterprise)
- **Reasoning:** Agencies are the primary growth channel
- **Style:** Cyan (#00D9FF) badge with black text

### **Color Scheme**
Each tier has a unique color for visual differentiation:
- **TDTM Pixel:** Green (#39FF14) - Fresh, accessible
- **White Label:** Purple (#8B5CF6) - Premium, partnership
- **Enterprise:** Cyan (#00D9FF) - Brand color, high-end

---

## Per-Record Pricing FAQ (Internal)

### Q: Why not disclose the per-record price?
**A:** Volume-based pricing varies significantly. Disclosing one rate would:
- Confuse low-volume customers
- Undervalue high-volume discounts
- Create pricing anchors that limit negotiation

### Q: What should sales say when asked?
**A:** "Per-record pricing is volume-based and starts at [your lowest rate]. Let's discuss your expected traffic so I can give you an accurate quote."

### Q: How do we position this vs. competitors?
**A:** 
- **Clearbit/6sense:** Fixed monthly ($$$), we're performance-based
- **FullContact:** Pay per API call, we're real-time pixel
- **LiveRamp:** Enterprise-only, we start at $199/month

**Win Message:** "Unlike competitors who charge you regardless of results, you only pay when we successfully identify a visitor. With our 50% match rate, you're guaranteed ROI."

---

## Consultation CTA

Added below pricing cards:

**Heading:** "Not sure which plan is right for you?"

**Body:** "Schedule a consultation with our team to discuss your specific needs, traffic volume, and campaign goals. We'll design a custom package that delivers maximum ROI."

**CTA:** "Schedule Consultation" → `hello@tdtm.io?subject=Schedule%20Consultation`

---

## Implementation Notes

### Files Updated:
- `/components/PricingSection.tsx` - Complete pricing overhaul

### Dependencies:
- No new dependencies added
- Uses existing Motion, Lucide icons, Button components

### Responsive:
- ✅ Mobile: Single column stack
- ✅ Tablet: 2-column grid
- ✅ Desktop: 3-column grid
- ✅ White Label card scales 5% larger with "MOST POPULAR" badge

---

## Messaging Hierarchy

### **Primary Message:** Performance-based pricing
- You only pay for results
- No charges for unmatched traffic
- Transparent, volume-based

### **Secondary Message:** Audience builder included
- Previously positioned as premium tier
- Now standard across all plans
- Massive value add for $199 entry point

### **Tertiary Message:** Scalability
- Start at $199, grow to Enterprise
- Same data ecosystem regardless of tier
- Upgrade path is clear

---

## Competitive Positioning

### **vs. Fixed-Price SaaS**
✅ "We don't charge you for non-performance"  
✅ "Pay only when the pixel works"  
✅ "No inflated monthly fees covering our misses"

### **vs. Enterprise-Only Platforms**
✅ "$199 entry point vs. $50K+ minimums"  
✅ "Same 500M+ identity database at every tier"  
✅ "Audience builder included from day one"

### **vs. Pay-Per-API-Call**
✅ "Real-time pixel, not batch processing"  
✅ "100+ integrations built-in"  
✅ "Unlimited platform activations"

---

## Success Metrics to Track

**Conversion Metrics:**
1. **Pricing page views** → Email clicks (per tier)
2. **"Get Started" clicks** (TDTM Pixel tier)
3. **"Contact Sales" clicks** (White Label tier)
4. **"Schedule Demo" clicks** (Enterprise tier)

**Messaging Effectiveness:**
1. Sales call transcripts - Do prospects understand per-record pricing?
2. Email responses - Are they asking for clarification or ready to buy?
3. Tier distribution - Are most signing up for White Label as expected?

**Revenue Impact:**
1. Average deal size per tier
2. Per-record pricing as % of total contract value
3. Upgrade rate from TDTM → White Label → Enterprise

---

## Sales Enablement

### **Key Talking Points:**

**1. Performance-Based Pricing**
> "Unlike competitors who charge you a flat fee regardless of results, you only pay per-record when we successfully identify a visitor. With our 50% match rate, that means you're getting value on half your traffic, and you're not paying for the other half."

**2. Audience Builder Included**
> "The audience builder used to be a premium add-on. Now it's included in every tier—even at $199/month. That means you get access to our full 500M+ identity database from day one."

**3. White Label for Agencies**
> "If you're an agency, White Label at $499/month lets you rebrand the entire platform as your own. You own the client relationship, we power the tech. It's a $199 product you can resell for $500-1000/month to each client."

**4. Enterprise Tier**
> "Enterprise is for clients who want us to run campaigns for them. You get a dedicated account manager, weekly strategy calls, and hands-on optimization. Think of it as a performance marketing agency built on top of the best identity data in the market."

---

## What to Say When Asked About Per-Record Pricing

### **Scenario 1: "What's the per-record cost?"**
**Response:** "It depends on your volume. Higher volume gets better rates. Can you share your monthly website traffic so I can give you an accurate quote?"

### **Scenario 2: "Why can't you just tell me the price?"**
**Response:** "Because I don't want to overcharge you. A business with 10K visitors/month pays a different rate than one with 1M visitors/month. Let me get your volume first so I can give you the best possible rate."

### **Scenario 3: "Is the per-record charge expensive?"**
**Response:** "Think of it this way—you're only paying when we turn an anonymous visitor into a known identity. If we don't resolve them, you don't pay. That's why our customers love it. They're paying for outcomes, not software licenses."

### **Scenario 4: "Can I get a discount?"**
**Response:** "The base monthly fee is fixed, but per-record pricing is volume-based. The more traffic you have, the better your per-record rate. If you're doing high volume or annual contracts, we can absolutely work on better pricing."

---

## Objection Handling

### **Objection: "I don't want to pay per record, I want predictable costs"**
**Response:** 
"I get that. Here's the thing—with a flat fee, you're subsidizing our misses. If we only match 50% of traffic but charge you for 100%, that's not fair to you. With per-record pricing, you know exactly what you're paying for: verified identities. Plus, with a 50% match rate, you can estimate your monthly cost pretty accurately based on traffic."

### **Objection: "What if my costs spike unexpectedly?"**
**Response:**
"Great question. We can set volume caps in your contract so you never exceed a certain monthly spend. Most customers do this—they'll say 'cap me at $5K/month' and we'll stop resolving after that threshold. You're always in control."

### **Objection: "Why should I pay per record if I can buy a flat-fee tool?"**
**Response:**
"Because flat-fee tools charge you whether they work or not. We only charge when we successfully match someone. If our match rate was 10%, you'd pay 1/5 what a customer with a 50% match rate pays. That's fair. Flat fees aren't."

---

## Upsell Path

### **TDTM Pixel → White Label**
**Trigger:** Customer asks about reselling or mentions they're an agency  
**Pitch:** "For $300 more per month, you can white label the platform and resell it to clients. If you sign just 2 clients at $500/month each, you're cash flow positive."

### **White Label → Enterprise**
**Trigger:** Customer mentions they don't have time to manage campaigns  
**Pitch:** "Sounds like you need Enterprise. We'll run the campaigns for you—strategy, setup, optimization, reporting. You focus on your business, we focus on the data."

### **TDTM Pixel → Enterprise**
**Trigger:** Customer has 100K+ monthly visitors but doesn't want to DIY  
**Pitch:** "At your volume, you'd benefit from Enterprise. You get better per-record rates, a dedicated account manager, and we handle everything. Let's talk about a managed service retainer."

---

## Final Notes

### **Why This Pricing Works:**

1. ✅ **Transparency without commoditization** - Clear tiers, custom per-record rates
2. ✅ **Value-based** - Pay for outcomes, not licenses
3. ✅ **Accessible entry** - $199/month gets you started
4. ✅ **Agency-friendly** - White Label tier drives partnership revenue
5. ✅ **Scalable** - Clear path from TDTM → White Label → Enterprise

### **Next Steps:**

1. **Sales training** - Ensure team can articulate per-record pricing
2. **Volume-based rate card** - Create internal pricing tiers
3. **Contract templates** - Add per-record language to MSAs
4. **Case studies** - Build examples showing total cost at different volumes
5. **ROI calculator** - Add interactive tool showing per-record ROI

---

**Last Updated:** October 15, 2025  
**Version:** 2.0 - Performance-Based Pricing Model
