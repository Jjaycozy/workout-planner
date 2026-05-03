# Deploy Your Workout Planner to Your Phone

## Option 1: Deploy to Vercel (Recommended - FREE)

This will give you a URL you can access from any device, including your phone.

### Steps:

1. **Create a free Vercel account:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Upload your code to GitHub:**
   - Create a new repository on GitHub
   - Upload all the files from this project to that repository

3. **Deploy on Vercel:**
   - In Vercel, click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite app
   - Click "Deploy"
   - Wait 1-2 minutes for deployment to complete

4. **Access on your phone:**
   - Vercel will give you a URL like `your-workout-planner.vercel.app`
   - Open this URL on your phone's browser
   - Click "Add to Home Screen" (iOS Safari or Android Chrome)
   - Now it works like a real app!

## Option 2: Deploy to Netlify (Also FREE)

Similar to Vercel:

1. Go to [netlify.com](https://netlify.com)
2. Sign up and connect your GitHub
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build command: `pnpm build`
6. Publish directory: `dist`
7. Click "Deploy"

## Your Data is Safe

All your workout data is saved in your phone's browser storage (localStorage). It will persist even when you close the app, as long as you don't clear your browser data.

## Installing as a PWA (Progressive Web App)

Once deployed:

**On iPhone (Safari):**
1. Open the URL in Safari
2. Tap the Share button
3. Select "Add to Home Screen"
4. Name it "Workout Planner"
5. Tap "Add"

**On Android (Chrome):**
1. Open the URL in Chrome
2. Tap the three dots menu
3. Select "Add to Home Screen"
4. Name it "Workout Planner"
5. Tap "Add"

Now you have the app on your home screen like any other app!

## Need Help?

If you need help deploying, you can:
- Ask me for step-by-step guidance
- Share your GitHub repository and I can help troubleshoot
- Try the "Deploy to Vercel" button if your repo is public
