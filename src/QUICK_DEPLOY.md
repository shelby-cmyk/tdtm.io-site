# 🚀 Quick Deploy Guide - TDTM Website

## Fastest Way to Get Your Site Live (5 Minutes)

---

## ✨ OPTION 1: Vercel (Recommended - Easiest)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Login
```bash
vercel login
```

### Step 3: Deploy
```bash
# Navigate to your project folder, then:
vercel
```

### Step 4: Follow Prompts
- Set up and deploy? **Yes**
- Which scope? **Your account**
- Link to existing project? **No**
- Project name? **tdtm-website** (or your choice)
- In which directory is your code located? **./**

### ✅ Done!
Your site is now live at the URL Vercel provides (e.g., `https://tdtm-website.vercel.app`)

**Future Updates:**
```bash
# Just run this command again in your project folder:
vercel --prod
```

---

## 💻 OPTION 2: Traditional Hosting (cPanel/FTP)

### Step 1: Build Your Site
```bash
# In your project folder:
npm install
npm run build
```

This creates a `dist` folder with your production files.

### Step 2: Upload Files
1. Open your hosting's File Manager or FTP client
2. Navigate to `public_html` or `www` folder
3. Upload **everything** from the `dist` folder
4. Upload the `.htaccess` file (already created for you)

### Step 3: Test
Visit your domain - your site should be live!

---

## 🌐 OPTION 3: Netlify

### Via Netlify CLI:
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build your site
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Via Netlify Drop (No CLI):
1. Build your site: `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop your `dist` folder
4. ✅ Done!

---

## 🎯 What You Get After Deployment

- ✅ Live website URL
- ✅ Automatic HTTPS/SSL
- ✅ Global CDN (fast loading worldwide)
- ✅ All features working:
  - Navigation
  - Pricing section
  - FAQ accordion
  - Chat widget
  - Contact form
  - Privacy/Terms pages

---

## 🔗 Custom Domain Setup

### After deployment, add your own domain:

**Vercel:**
1. Project Settings → Domains
2. Add your domain
3. Update DNS:
   - Type: A Record
   - Name: @
   - Value: (Vercel provides IP)

**Netlify:**
1. Site Settings → Domain Management
2. Add custom domain
3. Follow DNS instructions

**Traditional Hosting:**
- Usually automatic if domain is with same provider
- Point nameservers to your host

---

## ✅ Pre-Flight Checklist

Before deploying, verify:
- [ ] `npm install` completed successfully
- [ ] `npm run build` works without errors
- [ ] All components are in `/components` folder
- [ ] `styles/globals.css` exists
- [ ] Images/assets are imported correctly

---

## 🆘 Quick Troubleshooting

**Build fails?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Pages show 404?**
- **Vercel/Netlify:** Should work automatically
- **Traditional hosting:** Make sure `.htaccess` file is uploaded

**Images not loading?**
- Check that Figma assets are in the project
- Verify build includes assets folder

---

## 📞 Need Help?

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **Can't build?** Check Node.js version: `node --version` (needs 16+)

---

## 🎉 That's It!

Your TDTM website is production-ready and can be deployed in minutes.

**Recommended:** Use Vercel for the easiest deployment experience.

**Questions?** Check the full `DEPLOYMENT_GUIDE.md` for detailed instructions.

Good luck with your launch! 🚀
