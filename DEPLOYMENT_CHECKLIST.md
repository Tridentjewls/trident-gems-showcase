# ✅ Complete Deployment Checklist

## Phase 1: Preparation (Today)

### Asset Analysis
- [ ] Run `npm run analyze-assets`
- [ ] Note all files over size limits
- [ ] Take screenshots for reference
- [ ] List oversized files in a text file

### Git LFS Setup
- [ ] Install Git LFS: `brew install git-lfs`
- [ ] Verify: `git lfs version`
- [ ] Initialize: `git lfs install`
- [ ] Verify `.gitattributes` exists
- [ ] Check `.gitattributes` is committed

### Tools Installation
- [ ] ImageMagick: `brew install imagemagick`
- [ ] WebP tools: `brew install webp`
- [ ] FFmpeg: `brew install ffmpeg`
- [ ] Verify all tools: `cwebp -version`, `ffmpeg -version`

---

## Phase 2: Optimization (This Week)

### Image Optimization
- [ ] Create WebP versions of all JPGs/PNGs over 100KB
- [ ] Use command: `cwebp -q 80 input.jpg -o output.webp`
- [ ] Verify WebP files are 50-70% smaller
- [ ] Keep original files as fallback
- [ ] Test WebP images in browser

### Video Optimization
- [ ] List all videos with their sizes
- [ ] Re-encode videos over 2MB with H.264
- [ ] Use command:
  ```bash
  ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 28 \
    -maxrate 3000k -bufsize 6000k output.mp4
  ```
- [ ] Extract poster frames for each video
- [ ] Verify new files are 50-70% smaller

### Component Updates
- [ ] Update Header component (uses OptimizedImage)
- [ ] Update Footer component (uses OptimizedImage)
- [ ] Check all service pages for video embeds
- [ ] Add `poster` prop to all OptimizedVideo components
- [ ] Add `webpSrc` prop to OptimizedImage where applicable
- [ ] Mark above-the-fold images with `priority` prop

### Testing Locally
- [ ] `npm run build` - verify build succeeds
- [ ] `npm run preview` - test production build
- [ ] Open DevTools → Network tab
- [ ] Check asset load times (< 2 seconds)
- [ ] Check Core Web Vitals
- [ ] Test on mobile network (throttle to 4G)

---

## Phase 3: Deployment (Before Push)

### Final Checks
- [ ] Run `npm run analyze-assets` again
- [ ] All images < 100KB ✓
- [ ] All videos < 2MB (30s) or < 4MB (60s) ✓
- [ ] All components using OptimizedImage/OptimizedVideo ✓
- [ ] No broken image links
- [ ] No broken video links

### Git Preparation
- [ ] Stage all changes: `git add .`
- [ ] Verify .gitattributes is included: `git status`
- [ ] Review changes: `git diff --cached --stat`
- [ ] Create meaningful commit message
- [ ] Commit: `git commit -m "Optimize assets and configure Git LFS"`

### Push to GitHub
- [ ] `git push origin main`
- [ ] Verify push succeeded
- [ ] Check GitHub repo size (should be < 50MB now)
- [ ] Verify LFS files are tracked: `git lfs ls-files`

---

## Phase 4: Vercel Deployment

### Connect Vercel (First Time Only)
- [ ] Go to https://vercel.com
- [ ] Click "New Project"
- [ ] Select your GitHub repository
- [ ] Configure build settings:
  - [ ] Framework: Vite
  - [ ] Build Command: `npm run build` (default)
  - [ ] Output Directory: `dist` (default)
  - [ ] Install Command: `npm install` (default)
- [ ] Deploy!

### Monitor Deployment
- [ ] Watch deployment progress at vercel.com
- [ ] Check build logs for any errors
- [ ] Look for "LFS files: XX files" in logs
- [ ] Wait for "Deployment Complete" message
- [ ] Note production URL

### Test Production Deployment
- [ ] Open production URL in browser
- [ ] Check that all images load
- [ ] Check that all videos load
- [ ] Open DevTools → Network tab
- [ ] Verify asset response times (< 2s)
- [ ] Test on mobile device
- [ ] Share URL with team for feedback

### Verify Performance
- [ ] Run Google PageSpeed Insights
- [ ] Check Lighthouse scores
- [ ] Verify Core Web Vitals:
  - [ ] FCP (First Contentful Paint): < 1.8s
  - [ ] LCP (Largest Contentful Paint): < 2.5s
  - [ ] CLS (Cumulative Layout Shift): < 0.1
- [ ] Check performance on 4G throttle

---

## Phase 5: Monitoring (Ongoing)

### Weekly Checks
- [ ] Monitor Vercel analytics
- [ ] Check for failed deployments
- [ ] Review Core Web Vitals
- [ ] Check asset CDN cache hit rates
- [ ] Monitor GitHub LFS usage

### Monthly Reviews
- [ ] Generate performance report
- [ ] Compare with baseline metrics
- [ ] Optimize any slow assets
- [ ] Update documentation
- [ ] Plan next optimization round

---

## File Organization Checklist

### Files Created
- [ ] `.gitattributes` - LFS configuration
- [ ] `GITHUB_LFS_SETUP.md` - Setup guide
- [ ] `VERCEL_DEPLOYMENT_GUIDE.md` - Deployment guide
- [ ] `IMAGE_VIDEO_OPTIMIZATION.md` - Optimization reference
- [ ] `OPTIMIZATION_SUMMARY.md` - Implementation summary
- [ ] `setup-lfs.sh` - LFS setup script
- [ ] `scripts/analyze-assets.js` - Asset analysis script
- [ ] `scripts/optimize-images.js` - Image optimization helper

### Components Updated
- [ ] `src/components/OptimizedImage.tsx` - Enhanced
- [ ] `src/components/OptimizedVideo.tsx` - Created
- [ ] `src/components/Header.tsx` - Logo fixed
- [ ] `src/components/Footer.tsx` - Logo fixed
- [ ] `src/components/JewelryCarousel.tsx` - Optimized

### Configuration Updated
- [ ] `vite.config.ts` - Build optimization
- [ ] `package.json` - New scripts added
- [ ] `tailwind.config.ts` - No changes needed

---

## Quick Reference Commands

```bash
# Analysis
npm run analyze-assets

# Image compression
cwebp -q 80 input.jpg -o output.webp

# Video compression
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 28 \
  -maxrate 3000k -bufsize 6000k output.mp4

# Build & test
npm run build
npm run preview

# Git workflow
git add .
git commit -m "Optimize assets and configure Git LFS"
git push origin main

# Verify LFS
git lfs ls-files
```

---

## Troubleshooting Checklist

### If assets still loading slow:
- [ ] Check file sizes: `npm run analyze-assets`
- [ ] Verify WebP format working in browser
- [ ] Check video bitrate is < 3 Mbps
- [ ] Verify `.gitattributes` is committed
- [ ] Check Vercel build logs for errors
- [ ] Try Vercel rebuild: Dashboard → Deployments → Redeploy
- [ ] Clear browser cache and test again

### If images/videos not loading:
- [ ] Check DevTools Network tab for 404 errors
- [ ] Verify file paths are correct
- [ ] Check file permissions on server
- [ ] Verify LFS files downloaded correctly
- [ ] Try `git lfs pull origin` locally

### If Vercel deployment failing:
- [ ] Check Vercel build logs
- [ ] Ensure .gitattributes is in repo
- [ ] Try manual redeploy in Vercel
- [ ] Check GitHub Actions (if enabled)
- [ ] Verify environment variables if needed

---

## Success Criteria ✓

You're done when:

✅ **GitHub Repo**
- Size < 50MB (was 500MB+)
- All assets use LFS
- .gitattributes committed

✅ **Vercel Deployment**
- Deploys in < 2 minutes (was 3-5 min)
- All assets load in < 2 seconds
- PageSpeed score > 80
- No 404 errors

✅ **Performance**
- First Contentful Paint: < 1.8s
- Largest Contentful Paint: < 2.5s
- Core Web Vitals: All Green
- Mobile load time: < 5 seconds

✅ **User Experience**
- All images visible without blur/artifacts
- All videos play smoothly
- No broken links
- Fast page transitions

---

## Celebration! 🎉

You've successfully:
1. Reduced repo size by 90%+
2. Sped up deployments by 5x
3. Improved load times by 5x
4. Set up professional asset management
5. Configured production-grade CDN

**Your users will love the speed! 🚀**

---

## Next Optimizations (Optional)

For even better performance:

1. **Image Lazy Loading**
   - Already implemented in OptimizedImage
   - Shows skeleton on load

2. **Video Lazy Loading**
   - Already implemented in OptimizedVideo
   - Pauses when out of viewport

3. **Static Site Generation (SSG)**
   - Consider for blog/portfolio pages
   - Faster builds and deployments

4. **Edge Caching**
   - Vercel handles automatically
   - Cache purge on redeploy

5. **Database Integration**
   - For dynamic content
   - Could replace image imports

---

**Total Time Estimate: 4-6 hours**

- Preparation: 30 min
- Image optimization: 1-2 hours
- Video optimization: 1-2 hours
- Testing & deployment: 1 hour
- Monitoring: 30 min

**Worth it for 5x speed improvement! 🚀**
