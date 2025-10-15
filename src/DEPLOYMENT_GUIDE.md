# TDTM Website - Deployment Guide 🚀

## Overview

Your TDTM website is a React + TypeScript application that needs to be built and deployed to a web hosting service. This guide covers multiple deployment options.

---

## 📦 What You Need to Deploy

### Required Files (Already in Your Project):
- ✅ `/App.tsx` - Main application
- ✅ `/components/*` - All React components
- ✅ `/styles/globals.css` - Global styles
- ✅ All Figma assets imported in components

### Files NOT Needed for Deployment:
- ❌ `*.md` files (documentation only)
- ❌ `/guidelines/` folder

---

## 🎯 RECOMMENDED: Deploy to Vercel (Easiest & Free)

### Why Vercel?
- ✅ **Free hosting** for personal/small business sites
- ✅ **Automatic builds** from GitHub
- ✅ **Global CDN** for fast loading
- ✅ **Automatic HTTPS** with SSL certificate
- ✅ **Custom domain** support
- ✅ **Zero configuration** needed
- ✅ **Perfect for React apps**

### Step-by-Step: Deploy to Vercel

#### Option A: Deploy from GitHub (Recommended)

1. **Create GitHub Repository**
   ```bash
   # In your project folder, initialize git (if not already)
   git init
   git add .
   git commit -m "Initial commit - TDTM website"
   
   # Create a new repository on GitHub.com
   # Then push your code:
   git remote add origin https://github.com/YOUR_USERNAME/tdtm-website.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Sign Up" and use your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect React settings
   - Click "Deploy"
   - **Done!** Your site will be live in ~2 minutes

3. **Your Site URL**
   - Vercel gives you: `https://your-project-name.vercel.app`
   - You can add a custom domain in settings

#### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   # In your project folder
   vercel
   
   # Follow the prompts:
   # - Set up and deploy? Yes
   # - Which scope? Your account
   # - Link to existing project? No
   # - Project name? tdtm-website
   # - Directory? ./
   ```

4. **Done!** 
   - Vercel will give you a live URL
   - Future updates: Just run `vercel` again

---

## 🌐 OPTION 2: Deploy to Netlify (Also Free & Easy)

### Step-by-Step: Netlify

1. **Prepare Your Project**
   - Make sure you have a `package.json` file
   - Build command should be: `npm run build`

2. **Deploy via Netlify Drop**
   - Go to [netlify.com](https://netlify.com)
   - Sign up with GitHub
   - Click "Sites" → "Add new site" → "Deploy manually"
   - Build your project first (see Build Instructions below)
   - Drag and drop the `dist` folder
   - **Done!** Site is live

3. **Deploy via GitHub (Auto-deploy)**
   - Push code to GitHub
   - In Netlify: "Add new site" → "Import from Git"
   - Connect your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

4. **Configure Routing**
   - Create a file called `_redirects` in your `public` folder:
   ```
   /*    /index.html   200
   ```
   - This ensures /privacy and /terms routes work correctly

---

## 🏢 OPTION 3: Traditional Web Hosting (cPanel, etc.)

If you have traditional web hosting (GoDaddy, Bluehost, HostGator, etc.), follow these steps:

### Step 1: Build Your Project Locally

1. **Ensure you have Node.js installed**
   - Download from [nodejs.org](https://nodejs.org)
   - Verify: `node --version`

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build for production**
   ```bash
   npm run build
   ```
   
   This creates a `dist` folder with all your production files.

### Step 2: Upload to Your Hosting

1. **Connect via FTP/SFTP**
   - Use FileZilla, Cyberduck, or cPanel File Manager
   - Connect to your hosting server

2. **Upload Files**
   - Navigate to your `public_html` or `www` folder
   - Upload **everything** from the `dist` folder
   - Structure should look like:
     ```
     public_html/
     ├── index.html
     ├── assets/
     │   ├── index-[hash].js
     │   ├── index-[hash].css
     │   └── [other assets]
     └── [other files]
     ```

3. **Configure Server for React Router**
   
   **For Apache (most common):**
   Create/edit `.htaccess` file in your root directory:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteCond %{REQUEST_FILENAME} !-l
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   **For Nginx:**
   Add to your nginx config:
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

4. **Test Your Site**
   - Visit your domain: `https://yourdomain.com`
   - Test navigation and all sections
   - Test routes: `/privacy` and `/terms`

---

## 🔧 Build Commands Reference

```bash
# Install dependencies
npm install

# Development mode (local testing)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🌍 Custom Domain Setup

### For Vercel:
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed:
   - Add A record or CNAME pointing to Vercel

### For Netlify:
1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

### For Traditional Hosting:
- Domain usually auto-configured if hosted on same provider
- Point nameservers to your hosting provider

---

## ✅ Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All images load correctly
- [ ] All navigation links work
- [ ] Contact form submission is configured (if using backend)
- [ ] Privacy Policy and Terms pages load
- [ ] Mobile responsive design works
- [ ] Chat widget displays correctly
- [ ] All platform logos show up
- [ ] Pricing information is accurate
- [ ] FAQ accordion functions properly

---

## 🚨 Important Notes for Routing

Your site uses client-side routing for:
- `/privacy` - Privacy Policy page
- `/terms` - Terms of Service page

**You MUST configure server-side redirects** to handle these routes, otherwise users will get 404 errors when accessing these URLs directly.

### Current Setup:
- These routes work in development
- They need server configuration in production

### Solutions by Platform:
- ✅ **Vercel**: Handles automatically
- ✅ **Netlify**: Handles automatically (with `_redirects` file)
- ⚠️ **Traditional Hosting**: Requires `.htaccess` or nginx config (see above)

---

## 🎨 Environment Variables

Currently, your site doesn't use environment variables, but if you add backend services:

1. **Create `.env` file** (don't commit to git)
   ```
   VITE_API_KEY=your_key_here
   VITE_SUPABASE_URL=your_url_here
   ```

2. **Configure in hosting**:
   - **Vercel**: Settings → Environment Variables
   - **Netlify**: Site settings → Environment variables
   - **Traditional**: Create `.env` file on server

---

## 📊 Recommended Hosting Comparison

| Feature | Vercel | Netlify | Traditional Hosting |
|---------|--------|---------|---------------------|
| **Ease of Setup** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Free Tier** | ✅ Generous | ✅ Generous | ❌ Usually paid |
| **Auto HTTPS** | ✅ Yes | ✅ Yes | ⚠️ Manual setup |
| **Global CDN** | ✅ Yes | ✅ Yes | ⚠️ Depends |
| **Auto Deploy** | ✅ From Git | ✅ From Git | ❌ Manual FTP |
| **Custom Domain** | ✅ Free | ✅ Free | ✅ Included |
| **Best For** | React apps | Any static site | Traditional sites |

**Recommendation: Use Vercel for this project** ⭐

---

## 🚀 Quick Start: Fastest Deployment (5 minutes)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "TDTM website ready for deployment"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Project"
   - Select your GitHub repo
   - Click "Deploy"
   - ✅ **DONE!**

3. **Share Your Link**
   - Vercel gives you: `https://your-project.vercel.app`
   - Add custom domain later if needed

---

## 🆘 Troubleshooting

### Problem: 404 on /privacy or /terms
**Solution:** Configure server redirects (see routing section above)

### Problem: Images not loading
**Solution:** Check if Figma assets are included in build
- Images should be in `figma:asset/` imports
- These are automatically bundled during build

### Problem: Build fails
**Solution:** Check Node.js version
```bash
node --version  # Should be 16.x or higher
npm --version   # Should be 8.x or higher
```

### Problem: Chat widget not showing
**Solution:** Check z-index and viewport settings
- Widget has z-50, should appear above all content

### Problem: Styles not applying
**Solution:** Ensure globals.css is imported in main file
- Check that Tailwind is configured properly

---

## 📞 Support Resources

- **Vercel Docs:** [vercel.com/docs](https://vercel.com/docs)
- **Netlify Docs:** [docs.netlify.com](https://docs.netlify.com)
- **React Router:** [reactrouter.com](https://reactrouter.com)
- **Tailwind CSS:** [tailwindcss.com](https://tailwindcss.com)

---

## ✨ Post-Deployment

After deploying:

1. **Test Everything**
   - [ ] All navigation links
   - [ ] All CTA buttons
   - [ ] Pricing section
   - [ ] FAQ accordion
   - [ ] Chat widget
   - [ ] Privacy/Terms pages
   - [ ] Mobile responsiveness

2. **Add Analytics** (Optional)
   - Google Analytics
   - Vercel Analytics
   - Hotjar for heatmaps

3. **Set Up Monitoring**
   - Uptime monitoring (UptimeRobot)
   - Performance monitoring (Lighthouse)

4. **SEO Optimization**
   - Add meta descriptions
   - Submit sitemap to Google
   - Configure Open Graph tags

---

## 🎉 You're Ready to Deploy!

**Recommended Path:**
1. Push to GitHub (2 minutes)
2. Deploy to Vercel (3 minutes)
3. Test your live site (5 minutes)
4. Add custom domain (optional)

**Total time: ~10 minutes to live site! 🚀**

Need help? The Vercel/Netlify dashboards are very intuitive and have great documentation.

**Good luck with your launch! 🎊**
