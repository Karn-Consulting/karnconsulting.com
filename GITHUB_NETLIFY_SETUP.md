# 🚀 GitHub + Netlify Continuous Deployment Setup

This guide will set up automatic deployment: **GitHub Push → Netlify Deploy**

## How It Works:
```
You make changes → Push to GitHub → Netlify auto-deploys → Live in 30 seconds!
```

---

## Step 1: Push Your Code to GitHub

### Create a GitHub Repository:
1. Go to https://github.com/new
2. Repository name: `karn-consulting-website`
3. Make it **Private** (or Public if you prefer)
4. DON'T initialize with README (we already have code)
5. Click "Create repository"

### Push Your Code:
```bash
# In your terminal (in the project folder)
git add .
git commit -m "Initial commit - Karn Consulting website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/karn-consulting-website.git
git push -u origin main
```

---

## Step 2: Connect GitHub to Netlify

### Create Netlify Account:
1. Go to https://app.netlify.com/signup
2. **Click "Sign up with GitHub"** (This is important!)
3. Authorize Netlify to access your GitHub

### Deploy from GitHub:
1. In Netlify dashboard, click **"Add new site"**
2. Choose **"Import an existing project"**
3. Click **"Deploy with GitHub"**
4. You'll see your repositories - select `karn-consulting-website`
5. Netlify auto-detects settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click **"Deploy site"**

🎉 **That's it! Your site is now live!**

---

## Step 3: Your Workflow Going Forward

### Making Changes (From Replit or Locally):

**Option A: From Replit**
```bash
# After making changes in Replit
git add .
git commit -m "Updated contact info"
git push
```
→ Netlify automatically deploys in ~30 seconds!

**Option B: From Your Computer**
```bash
# Clone the repo to your computer
git clone https://github.com/YOUR_USERNAME/karn-consulting-website.git
cd karn-consulting-website

# Install dependencies
npm install

# Run locally
npm run dev

# Make changes, then push
git add .
git commit -m "Added new feature"
git push
```
→ Netlify automatically deploys!

---

## Step 4: Custom Domain (karnconsulting.co)

### In Netlify:
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Enter: `karnconsulting.co`
4. Netlify will show you DNS settings

### In GoDaddy:
1. Login to GoDaddy
2. Go to **My Products** → **DNS** for karnconsulting.co
3. Delete existing A records
4. Add these records:

**For Root Domain (karnconsulting.co):**
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 600
```

**For WWW:**
```
Type: CNAME
Name: www
Value: YOUR-SITE-NAME.netlify.app
TTL: 600
```

5. Save changes
6. Wait 5-30 minutes for DNS propagation
7. Netlify automatically provisions SSL certificate

---

## 🎯 Benefits of This Setup:

### 1. **Version Control**
- Every change is tracked in Git
- Can revert to any previous version
- See history of all changes

### 2. **Automatic Deployment**
- Push to GitHub = Live on website
- No manual uploading
- Deploy previews for branches

### 3. **Collaboration**
- Multiple people can work on it
- Review changes before going live
- Create branches for testing

### 4. **Rollback Protection**
- Something broke? One-click rollback in Netlify
- All previous deployments are saved
- Zero downtime rollbacks

---

## 📱 Quick Commands Reference

### Daily Workflow:
```bash
# Start working
git pull                    # Get latest changes

# After making changes
git add .                   # Stage all changes
git commit -m "Description" # Commit with message
git push                    # Deploy to live site!
```

### Check deployment status:
1. Go to Netlify dashboard
2. See real-time build logs
3. Get notified when deploy is complete

---

## 🔧 Advanced Features (Already Configured)

### netlify.toml Configuration:
✅ Single Page App routing configured
✅ Security headers added
✅ Node version specified
✅ Build commands set

### Form Handling:
Your lead forms will automatically work! Netlify captures submissions:
1. Go to Netlify dashboard → Forms
2. See all submissions
3. Export as CSV
4. Set up email notifications

---

## 🚨 Troubleshooting

**Build Failed?**
- Check Netlify build logs for errors
- Usually it's a missing dependency
- Run `npm install` and push again

**Domain Not Working?**
- DNS takes 5-30 minutes to propagate
- Check DNS settings match exactly
- Netlify will show "Waiting for DNS propagation"

**Forms Not Working?**
- Netlify automatically detects forms
- Check Forms tab in Netlify dashboard
- Enable form notifications in settings

---

## 📞 Need Help?

**For Netlify Issues:**
- Netlify has excellent docs: https://docs.netlify.com
- Build logs show exact errors
- Support is responsive

**For DNS/Domain Issues:**
- GoDaddy support can help with DNS
- Netlify shows DNS checker tool
- Usually resolves within 30 minutes

---

## 🎉 Congratulations!

You now have:
- ✅ Professional website live at karnconsulting.co
- ✅ Automatic deployment from GitHub
- ✅ Free hosting with 100GB bandwidth
- ✅ Lead form capture system
- ✅ SSL certificate
- ✅ Global CDN for fast loading

Every time you push to GitHub, your website updates automatically within 30 seconds!