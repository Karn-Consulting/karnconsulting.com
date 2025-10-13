# 🎬 Video Tutorial Script: Deploy Karn Consulting Website with GitHub + Netlify

**Duration:** ~15 minutes
**Prerequisites:** Have your website code ready in Replit

---

## **[0:00-0:30] Introduction**

**ON SCREEN:** Show website running in Replit

**SCRIPT:**
"Hello! Today I'll show you how to deploy your Karn Consulting website with automatic deployment. By the end of this video, every time you make a change and push to GitHub, your website will automatically update within 30 seconds. No more manual uploads ever! Let's get started."

---

## **[0:30-2:00] Part 1: Create GitHub Repository**

### Step 1: Open GitHub

**ACTION:** Open browser, go to github.com

**SCRIPT:**
"First, we need to create a GitHub repository. If you don't have a GitHub account, create one for free at github.com. It takes 30 seconds."

### Step 2: Create New Repository

**ACTION:** Click green "New" button or go to github.com/new

**SCRIPT:**
"Click the New button to create a repository."

**ACTION:** Fill in the form:
- Repository name: `karn-consulting-website`
- Description: "AI/ML Consulting Website"
- Choose: Private (or Public)
- DON'T check any initialization boxes

**SCRIPT:**
"Name your repository 'karn-consulting-website'. Make it private if you want. Important: DON'T initialize with README - we already have code."

**ACTION:** Click "Create repository"

**SCRIPT:**
"Perfect! GitHub shows us the commands to push our code. Let's do that now."

---

## **[2:00-4:00] Part 2: Push Code to GitHub**

### Step 3: Open Terminal in Replit

**ACTION:** Go back to Replit, open Shell/Terminal

**SCRIPT:**
"Back in Replit, let's open the terminal. Click on Shell at the bottom."

### Step 4: Initialize Git and Push

**ACTION:** Type these commands one by one:

```bash
git add .
```

**SCRIPT:**
"First, we stage all our files with git add dot"

**ACTION:** Wait for command to complete

```bash
git commit -m "Initial commit - Karn Consulting website"
```

**SCRIPT:**
"Now we commit with a message describing our changes"

```bash
git branch -M main
```

**SCRIPT:**
"This ensures we're using 'main' as our branch name"

```bash
git remote add origin https://github.com/YOUR_USERNAME/karn-consulting-website.git
```

**SCRIPT:**
"Replace YOUR_USERNAME with your actual GitHub username. This connects our code to GitHub."

```bash
git push -u origin main
```

**SCRIPT:**
"Finally, push the code to GitHub. You might need to enter your GitHub username and password or token."

**ACTION:** If prompted for credentials, enter them

**SCRIPT:**
"Great! Our code is now on GitHub. Refresh your GitHub page to see it."

**ACTION:** Refresh GitHub repository page, show the uploaded files

---

## **[4:00-7:00] Part 3: Deploy with Netlify**

### Step 5: Sign up for Netlify

**ACTION:** Open new tab, go to app.netlify.com

**SCRIPT:**
"Now for the magic part. Go to app.netlify.com. This is where our automatic deployment happens."

**ACTION:** Click "Sign up"

**SCRIPT:**
"Click Sign up if you don't have an account."

**ACTION:** Click "GitHub" option

**SCRIPT:**
"IMPORTANT: Sign up WITH GitHub. This connects the two services."

**ACTION:** Authorize Netlify

**SCRIPT:**
"Authorize Netlify to access your GitHub. This is safe - Netlify is trusted by millions."

### Step 6: Create New Site

**ACTION:** In Netlify dashboard, click "Add new site" → "Import an existing project"

**SCRIPT:**
"Click 'Add new site', then 'Import an existing project'"

**ACTION:** Click "Deploy with GitHub"

**SCRIPT:**
"Choose GitHub as your git provider"

**ACTION:** You'll see list of repositories, click "karn-consulting-website"

**SCRIPT:**
"Select your karn-consulting-website repository"

### Step 7: Configure Build Settings

**ACTION:** Netlify auto-detects settings, verify:
- Build command: `npm run build`
- Publish directory: `dist`

**SCRIPT:**
"Netlify is smart - it automatically detects your build settings. Verify it shows 'npm run build' and 'dist' directory."

**ACTION:** Click "Deploy site"

**SCRIPT:**
"Click Deploy! Watch the magic happen..."

**ACTION:** Wait for deployment (shows live logs)

**SCRIPT:**
"Netlify is now building your site. This takes about 1-2 minutes the first time."

---

## **[7:00-8:30] Part 4: Your Site is Live!**

### Step 8: View Your Live Site

**ACTION:** When deploy completes, click the random URL (like `amazing-wilson-a2b3c4.netlify.app`)

**SCRIPT:**
"Success! Your site is live! Click this URL to see it. Netlify gives you a random URL for now - we'll add your custom domain next."

**ACTION:** Show website working, click around, test the lead form

**SCRIPT:**
"Everything works! The contact form, the lead popup - Netlify handles it all automatically."

---

## **[8:30-11:00] Part 5: Custom Domain Setup**

### Step 9: Add Custom Domain in Netlify

**ACTION:** Go back to Netlify, click "Site settings" → "Domain management"

**SCRIPT:**
"Let's add your custom domain. In site settings, go to Domain management."

**ACTION:** Click "Add custom domain"

**SCRIPT:**
"Click Add custom domain"

**ACTION:** Type: `karnconsulting.co`

**SCRIPT:**
"Enter your domain: karnconsulting.co"

**ACTION:** Netlify shows DNS instructions

**SCRIPT:**
"Netlify shows exactly what DNS records you need. Let's add these in GoDaddy."

### Step 10: Configure GoDaddy DNS

**ACTION:** Open new tab, go to godaddy.com, login

**SCRIPT:**
"Login to your GoDaddy account"

**ACTION:** Go to "My Products" → Find your domain → Click "DNS"

**SCRIPT:**
"Find your domain and click DNS to manage settings"

**ACTION:** Delete any existing A records for @ 

**SCRIPT:**
"Delete any existing A records for the root domain"

**ACTION:** Add new record:
- Type: A
- Name: @
- Value: 75.2.60.5
- TTL: 600

**SCRIPT:**
"Add a new A record. Type is A, Name is @, Value is 75.2.60.5"

**ACTION:** Add CNAME record:
- Type: CNAME
- Name: www
- Value: [your-site].netlify.app
- TTL: 600

**SCRIPT:**
"Add CNAME for www. Copy your Netlify URL from the other tab."

**ACTION:** Save all changes

**SCRIPT:**
"Save changes. DNS takes 5-30 minutes to work worldwide. Netlify will automatically add SSL certificate!"

---

## **[11:00-13:00] Part 6: Test Automatic Deployment**

### Step 11: Make a Change

**ACTION:** Go back to Replit

**SCRIPT:**
"Now the best part - automatic deployment! Let's make a small change."

**ACTION:** Open `client/src/components/HeroSection.tsx`, change some text

**SCRIPT:**
"Let's change the hero text slightly"

### Step 12: Push Changes

**ACTION:** In terminal:

```bash
git add .
git commit -m "Updated hero text"
git push
```

**SCRIPT:**
"Save, then in terminal: git add, commit with message, and push"

### Step 13: Watch Auto-Deploy

**ACTION:** Go to Netlify dashboard, show the new deployment starting

**SCRIPT:**
"Look at Netlify - it automatically detected our push and started deploying! No manual upload needed!"

**ACTION:** Wait 30 seconds, refresh live site

**SCRIPT:**
"In about 30 seconds... refresh... and our change is live! This happens EVERY time you push to GitHub!"

---

## **[13:00-14:00] Part 7: Managing Your Site**

### Bonus Features to Show:

**ACTION:** In Netlify dashboard, show:

1. **Forms Tab**
**SCRIPT:**
"Check the Forms tab - all your lead form submissions appear here. You can export as CSV or set up email notifications."

2. **Analytics** (if available)
**SCRIPT:**
"See how many visitors you're getting"

3. **Deploy History**
**SCRIPT:**
"Every deployment is saved. You can rollback instantly if something breaks."

---

## **[14:00-15:00] Conclusion**

**ON SCREEN:** Show the live website on custom domain

**SCRIPT:**
"Congratulations! You now have:
- ✅ A professional website live at karnconsulting.co
- ✅ Automatic deployment - just push to GitHub
- ✅ Free hosting with 100GB bandwidth
- ✅ Lead form capture
- ✅ SSL certificate
- ✅ Global CDN for fast loading

Your workflow is now: Make changes → Git push → Live in 30 seconds!

This is how professional developers work. You're using the same tools as Fortune 500 companies, completely free!

If this helped, give it a thumbs up and subscribe for more tutorials. Questions? Leave them in the comments below.

Thank you for watching!"

---

## **📝 Quick Reference Commands**

**For video description or pinned comment:**

```
Commands used in this video:

Initialize and push to GitHub:
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/karn-consulting-website.git
git push -u origin main

Daily workflow:
git add .
git commit -m "Your change description"
git push

Timestamps:
0:00 Introduction
0:30 Create GitHub Repository
2:00 Push Code to GitHub
4:00 Deploy with Netlify
7:00 View Live Site
8:30 Custom Domain Setup
11:00 Test Auto-Deployment
13:00 Managing Your Site
14:00 Conclusion
```

---

## **🎥 Recording Tips:**

1. **Clear browser** before recording (no personal bookmarks visible)
2. **Zoom in** on important buttons/text (Ctrl/Cmd + for browser zoom)
3. **Pause at commands** so viewers can follow
4. **Use arrows/highlighting** to point out important areas
5. **Keep energy up** - this is exciting stuff!
6. **Test run** once before recording

## **Common Issues to Address:**

If these happen during recording:

**Git asks for credentials:**
"GitHub now requires tokens instead of passwords. Go to GitHub Settings → Developer settings → Personal access tokens. Create one and use that as your password."

**Build fails:**
"Check the build log for errors. Usually it's a missing dependency. The error message tells you exactly what's wrong."

**DNS not working immediately:**
"DNS propagation takes 5-30 minutes globally. Be patient. You can check status at dnschecker.org"

---

## **Alternative: No Video, Just Screenshots**

If you prefer not to record video, you can:
1. Take screenshots at each step
2. Create a blog post with the screenshots
3. Share as a PDF guide
4. Create a slide deck

The script works perfectly as a written tutorial too!

---

**Good luck with your recording! You've got this! 🎬**