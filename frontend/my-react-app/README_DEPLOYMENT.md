# SMART-PDS Deployment Guide

## Vercel Deployment Instructions

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub/GitLab/Bitbucket**
   ```bash
   git add .
   git commit -m "Initial SMART-PDS deployment"
   git push origin main
   ```

2. **Go to Vercel Dashboard**
   - Visit https://vercel.com
   - Sign in with your GitHub/GitLab/Bitbucket account
   - Click "Add New Project"

3. **Import Your Repository**
   - Select your repository (e.g., `EDII`)
   - Vercel will auto-detect it's a Vite project

4. **Configure Project Settings**
   - **Root Directory**: Set to `frontend/my-react-app`
   - **Framework Preset**: Vite (auto-detected)
   - **Build Command**: `npm run build` (already set in vercel.json)
   - **Output Directory**: `dist` (already set in vercel.json)
   - **Install Command**: `npm install` (default)

5. **Environment Variables** (if needed)
   - Add any environment variables if your app requires them
   - For this mock data app, no environment variables are needed

6. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your app will be live at `your-project.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Navigate to the project directory**
   ```bash
   cd frontend/my-react-app
   ```

3. **Login to Vercel**
   ```bash
   vercel login
   ```

4. **Deploy**
   ```bash
   vercel
   ```
   - Follow the prompts
   - When asked for root directory, specify: `frontend/my-react-app` or just deploy from within that directory
   - When asked to override settings, say "No" (vercel.json will handle it)

5. **Production Deploy**
   ```bash
   vercel --prod
   ```

## Important Configuration Details

### Root Directory
- **Main Source Directory**: `frontend/my-react-app`
- This is where your `package.json`, `vite.config.js`, and `src/` folder are located

### Build Configuration (in vercel.json)
- **Build Command**: `npm run build` - Builds the React app
- **Output Directory**: `dist` - Vite outputs the built files here
- **Framework**: `vite` - Tells Vercel this is a Vite project
- **Rewrites**: Ensures all routes work with React Router (SPA routing)

### Key Files Location
```
EDII/
└── frontend/
    └── my-react-app/          ← THIS is your root directory for deployment
        ├── package.json        ← Dependencies and scripts
        ├── vite.config.js      ← Vite configuration
        ├── vercel.json         ← Vercel deployment config
        ├── index.html          ← Entry point
        └── src/                ← Source code
            ├── App.jsx         ← Main app component with routing
            ├── main.jsx        ← React entry point
            └── ...
```

## What Vercel Will Do

1. **Install Dependencies**: Runs `npm install` in `frontend/my-react-app`
2. **Build the App**: Runs `npm run build` which creates the `dist/` folder
3. **Serve the App**: Serves files from the `dist/` directory
4. **Handle Routing**: The `rewrites` in vercel.json ensure React Router works correctly

## Troubleshooting

### If deployment fails:
1. Make sure you've set the **Root Directory** to `frontend/my-react-app` in Vercel dashboard
2. Check that all dependencies are in `package.json`
3. Verify the build works locally: `npm run build`

### If routes don't work:
- The `vercel.json` file includes rewrites to handle React Router
- All routes should redirect to `index.html` for client-side routing

### If you get 404 errors:
- Ensure the `rewrites` section in `vercel.json` is correct
- Clear browser cache and try again

## Local Testing Before Deployment

Test the production build locally:
```bash
cd frontend/my-react-app
npm run build
npm run preview
```

This will serve the production build locally at `http://localhost:4173`

## Continuous Deployment

Once connected to Vercel:
- Every push to your main branch will trigger a new deployment
- Preview deployments are created for pull requests
- All deployments get unique URLs for testing

