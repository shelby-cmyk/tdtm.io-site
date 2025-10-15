# 🚀 GitHub & Vercel Deployment Guide - TDTM

Complete guide to deploying your TDTM site from GitHub to Vercel.

---

## ✅ Files Created for GitHub

Your repository now has all necessary configuration files:

### **Git Configuration:**
- ✅ `.gitignore` - Excludes build files, dependencies, environment files
- ✅ `.env.example` - Template for environment variables
- ✅ `README.md` - Comprehensive project documentation

### **GitHub Actions:**
- ✅ `.github/workflows/ci.yml` - Automated build testing on push/PR

### **Vercel Configuration:**
- ✅ `vercel.json` - Vercel deployment settings
- ✅ `package.json` - Dependencies and scripts
- ✅ `vite.config.ts` - Vite build configuration

---

## 📋 Step-by-Step Deployment

### **1. Initialize Git Repository**

```bash
# Navigate to your project directory
cd /path/to/tdtm-io

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: TDTM production-ready site"
```

---

### **2. Create GitHub Repository**

#### **Option A: GitHub Web Interface**
1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon → "New repository"
3. **Repository name:** `tdtm-io` (or your preferred name)
4. **Description:** "TDTM - Data Identity Activation Platform"
5. **Visibility:** Private (recommended) or Public
6. **DO NOT** initialize with README, .gitignore, or license
7. Click "Create repository"

#### **Option B: GitHub CLI**
```bash
gh repo create tdtm-io --private --source=. --remote=origin
```

---

### **3. Push to GitHub**

```bash
# Add GitHub remote
git remote add origin https://github.com/YOUR-USERNAME/tdtm-io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME`** with your actual GitHub username.

---

### **4. Deploy to Vercel**

#### **4.1 Sign Up / Sign In**
1. Go to [Vercel](https://vercel.com)
2. Sign in with GitHub

#### **4.2 Import Project**
1. Click "Add New..." → "Project"
2. Select your GitHub repository: `tdtm-io`
3. Click "Import"

#### **4.3 Configure Build Settings**

Vercel should auto-detect these, but verify:

```
Framework Preset:     Vite
Build Command:        npm run build
Output Directory:     dist
Install Command:      npm install
Node.js Version:      18.x (or 20.x)
```

#### **4.4 Environment Variables** (Optional)

Add these in Vercel dashboard under Settings → Environment Variables:

```
VITE_CONTACT_EMAIL=hello@tdtm.io
VITE_DOMAIN=https://tdtm.io
VITE_LINKEDIN_URL=https://www.linkedin.com/company/top-of-funnel-llc
```

**Note:** These are already hardcoded in your app, so environment variables are optional for now.

#### **4.5 Deploy**
1. Click "Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Your site will be live at: `https://your-project.vercel.app`

---

### **5. Add Custom Domain (tdtm.io)**

#### **5.1 In Vercel:**
1. Go to your project → Settings → Domains
2. Add domain: `tdtm.io`
3. Add domain: `www.tdtm.io` (recommended)

#### **5.2 Configure DNS:**

Vercel will show you DNS records to add. Typical setup:

**For `tdtm.io`:**
```
Type:  A
Name:  @
Value: 76.76.21.21 (Vercel IP)
```

**For `www.tdtm.io`:**
```
Type:  CNAME
Name:  www
Value: cname.vercel-dns.com
```

#### **5.3 Wait for DNS Propagation:**
- Usually takes 5-60 minutes
- Can take up to 48 hours in rare cases
- Check status in Vercel dashboard

#### **5.4 SSL Certificate:**
- Vercel automatically provisions SSL
- No action needed - it just works!

---

## 🔄 Continuous Deployment

Once set up, deployments are automatic:

### **Automatic:**
- Every `git push` to `main` → Auto-deploys to production
- Every `git push` to other branches → Creates preview deployment
- Every Pull Request → Creates preview URL for review

### **Manual:**
- Go to Vercel dashboard
- Click "Redeploy" on any deployment

---

## 🧪 Testing Your Deployment

### **1. Check Build Logs**
- Vercel dashboard → Deployments → Click latest deployment → View logs
- Look for any errors or warnings

### **2. Test Site Functionality**
- [ ] Homepage loads correctly
- [ ] Navigation works (nav links, mobile menu)
- [ ] Forms work (demo booking form)
- [ ] Images load (favicon, OG image)
- [ ] Animations work smoothly
- [ ] Responsive on mobile/tablet/desktop

### **3. Test Meta Tags**
```bash
# LinkedIn Post Inspector
https://www.linkedin.com/post-inspector/
Enter: https://tdtm.io

# Facebook Sharing Debugger
https://developers.facebook.com/tools/debug/
Enter: https://tdtm.io

# Google Rich Results
https://search.google.com/test/rich-results
Enter: https://tdtm.io
```

### **4. Test Performance**
```bash
# PageSpeed Insights
https://pagespeed.web.dev/
Enter: https://tdtm.io
Target: 90+ score
```

---

## 🔧 Troubleshooting

### **Build Fails on Vercel**

**Problem:** Build error in Vercel logs

**Solutions:**
1. Check if it builds locally:
   ```bash
   npm run build
   ```
2. Check Node.js version matches (18.x or 20.x)
3. Clear Vercel build cache: Settings → General → Clear Build Cache

---

### **Images Not Loading**

**Problem:** Favicon or OG image shows 404

**Solutions:**
1. Verify files exist in `/public` directory
2. Check file paths in `index.html` (should be `/favicon.svg`)
3. Redeploy after confirming files are committed

---

### **Environment Variables Not Working**

**Problem:** Environment variables not available in build

**Solutions:**
1. Ensure they start with `VITE_` prefix
2. Add in Vercel: Settings → Environment Variables
3. Redeploy after adding variables

---

### **Domain Not Connecting**

**Problem:** Custom domain shows DNS error

**Solutions:**
1. Verify DNS records in your domain registrar
2. Wait for DNS propagation (up to 48 hours)
3. Use `dig tdtm.io` to check DNS resolution:
   ```bash
   dig tdtm.io
   ```
4. Contact Vercel support if issue persists

---

## 📊 Monitoring & Analytics

### **Vercel Analytics** (Built-in)
- Go to project → Analytics tab
- See real-time visitor data, Core Web Vitals

### **Google Analytics** (Optional)
Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### **Error Tracking** (Optional)
Consider adding:
- [Sentry](https://sentry.io) - Error monitoring
- [LogRocket](https://logrocket.com) - Session replay

---

## 🔐 Security Best Practices

### **Environment Variables:**
- ✅ Never commit `.env` or `.env.local` files
- ✅ Use Vercel's environment variable UI
- ✅ Rotate API keys regularly

### **Dependencies:**
```bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### **HTTPS:**
- ✅ Vercel provides SSL automatically
- ✅ All traffic is encrypted

---

## 🚦 GitHub Workflow Status

Your repository includes automated CI/CD:

### **What It Does:**
- Runs on every push to `main` or `develop`
- Runs on every Pull Request
- Tests build on Node.js 18.x and 20.x
- Checks TypeScript types
- Verifies build succeeds

### **View Status:**
- Go to GitHub repo → Actions tab
- See all workflow runs and their status

### **Badge for README:**
```markdown
![CI](https://github.com/YOUR-USERNAME/tdtm-io/workflows/CI/badge.svg)
```

---

## 📝 Post-Deployment Checklist

After successful deployment:

### **Immediate:**
- [ ] Verify site loads at `https://tdtm.io`
- [ ] Test all navigation links
- [ ] Submit demo form to test email integration
- [ ] Check mobile responsiveness
- [ ] Test LinkedIn sharing with Post Inspector

### **Within 24 Hours:**
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Analytics (if using)
- [ ] Test all 100+ integration logos load correctly
- [ ] Verify FAQ accordion works
- [ ] Check pricing calculator functions

### **Within 1 Week:**
- [ ] Monitor Vercel Analytics for traffic
- [ ] Check for any error logs in Vercel
- [ ] Review Core Web Vitals scores
- [ ] Set up uptime monitoring (e.g., UptimeRobot)
- [ ] Create LinkedIn announcement post

---

## 🆘 Support Resources

### **Vercel:**
- [Documentation](https://vercel.com/docs)
- [Community Discord](https://discord.gg/vercel)
- [Support](https://vercel.com/support)

### **GitHub:**
- [Documentation](https://docs.github.com)
- [Community Forum](https://github.community)
- [Support](https://support.github.com)

### **Vite:**
- [Documentation](https://vitejs.dev)
- [Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

## 🎯 Next Steps After Deployment

1. **Announce Launch:**
   - LinkedIn company page post
   - Email existing contacts
   - Update email signatures

2. **SEO:**
   - Submit to Google Search Console
   - Submit to Bing Webmaster Tools
   - Create Google Business Profile

3. **Marketing:**
   - Start content calendar (10-15 posts)
   - Create case study landing pages
   - Launch LinkedIn ad campaigns

4. **Iterate:**
   - Monitor analytics
   - Collect user feedback
   - A/B test CTAs and messaging

---

## ✅ Quick Commands Reference

```bash
# Local Development
npm run dev

# Build for Production
npm run build

# Preview Production Build
npm run preview

# Type Check
npx tsc --noEmit

# Git Workflow
git add .
git commit -m "Your message"
git push origin main

# Create New Branch
git checkout -b feature/new-feature
git push origin feature/new-feature
```

---

## 📞 Need Help?

**Email:** hello@tdtm.io  
**GitHub Issues:** Create an issue in your repository  
**Vercel Support:** https://vercel.com/support

---

**Last Updated:** October 15, 2025  
**Status:** ✅ Production Ready  
**Deployment:** Automated via Vercel + GitHub
