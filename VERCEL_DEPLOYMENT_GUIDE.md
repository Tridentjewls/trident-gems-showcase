# Fast Deployment Guide: GitHub + Vercel

## Problem Statement
- Large video and image files (100MB+) make GitHub repo huge
- Slow clone times
- Slow deployments on Vercel
- Slow asset loading on production

## Solution Summary
**GitHub LFS + Vercel CDN = Fast loading everywhere** ✅

---

## 🚀 QUICK START (5 minutes)

### Step 1: Install Git LFS
```bash
brew install git-lfs
```

### Step 2: Initialize LFS
```bash
git lfs install
```

### Step 3: Verify .gitattributes
File `.gitattributes` should exist in your project root with:
```
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.jpg filter=lfs diff=lfs merge=lfs -text
*.png filter=lfs diff=lfs merge=lfs -text
*.webp filter=lfs diff=lfs merge=lfs -text
```

### Step 4: Analyze Assets
```bash
npm run analyze-assets
# Shows which files are too large
```

### Step 5: Compress Large Files
```bash
# Compress images to WebP
cwebp -q 80 input.jpg -o output.webp

# Re-encode videos
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 28 -maxrate 3000k -bufsize 6000k output.mp4
```

### Step 6: Push to GitHub
```bash
git add .
git commit -m "Optimize assets with LFS configuration"
git push origin main
```

### Step 7: Deploy to Vercel
- Go to https://vercel.com
- Connect GitHub repo
- Vercel automatically handles LFS files
- Done! ✅

---

## 📊 How It Works

### Before (Without LFS)
```
GitHub Repo: ~500MB
├─ Code: 5MB
└─ Large assets: 495MB ❌

Vercel Deployment:
1. Clone entire 500MB repo
2. Extract all files
3. Build project
4. Deploy
⏱️ Takes 2-5 minutes
```

### After (With LFS)
```
GitHub Repo: ~20MB
├─ Code: 5MB
├─ LFS metadata: 15MB (just pointers)
└─ Actual files stored separately

Vercel Deployment:
1. Clone 20MB repo (FAST!)
2. LFS files auto-downloaded from CDN
3. Build project
4. Deploy assets via CDN
⏱️ Takes 30-60 seconds
```

---

## 🔧 Detailed Setup

### 1. Install Git LFS
```bash
# macOS
brew install git-lfs

# Ubuntu/Debian
sudo apt install git-lfs

# Windows (Chocolatey)
choco install git-lfs
```

### 2. Initialize in Your Repo
```bash
cd /path/to/your/repo
git lfs install
```

### 3. Check .gitattributes
```bash
cat .gitattributes
# Should show all media file types
```

### 4. Track Files with LFS
```bash
# Already configured, but to manually add more:
git lfs track "*.mp4"
git lfs track "*.jpg"
```

### 5. Commit and Push
```bash
git add .gitattributes
git commit -m "Configure Git LFS for large files"
git push origin main
```

---

## 📦 What Gets Stored in LFS

✅ These files use LFS (stay small in repo):
- All videos (.mp4, .webm, .mov)
- Large images (.jpg, .png, .webp > 1MB)
- Archives (.zip, .rar)

✅ Git stays responsible for:
- Code files (.tsx, .ts, .js)
- Config files (json, yml, env)
- Small assets (< 1MB)

---

## 🎯 File Size Targets

For **fast Vercel deployment**:

| Asset Type | Limit | Format | Quality |
|----------|-------|--------|---------|
| Hero Image | 100KB | WebP | 80% |
| Product Image | 50KB | WebP | 75% |
| Thumbnail | 20KB | WebP | 70% |
| Short Video (30s) | 2MB | H.264 MP4 | 3 Mbps |
| Long Video (60s) | 4MB | H.264 MP4 | 2 Mbps |

---

## 🛠️ Compression Commands

### Images to WebP
```bash
# Single file
cwebp -q 80 input.jpg -o output.webp

# All JPGs in folder
for file in src/assets/imgs/**/*.jpg; do
  cwebp -q 80 "$file" -o "${file%.*}.webp"
done

# Using ImageMagick
convert input.jpg -quality 80 -strip output.jpg
```

### Videos to H.264
```bash
# Standard 1080p video
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 \
  -s 1920x1080 -c:a aac -b:a 128k output.mp4

# Web-optimized (smaller file)
ffmpeg -i input.mp4 -c:v libx264 -preset medium -crf 28 \
  -maxrate 3000k -bufsize 6000k output.mp4

# Extract poster frame
ffmpeg -i video.mp4 -ss 00:00:01 -vframes 1 poster.jpg
```

---

## 🚀 Vercel Configuration

**Good news:** You don't need to do anything special!

Vercel automatically:
1. ✅ Detects Git LFS files
2. ✅ Downloads them during build
3. ✅ Serves via Vercel CDN
4. ✅ Caches globally
5. ✅ Optimizes for edge locations

Just push to GitHub and deploy normally.

---

## ✅ Deployment Checklist

- [ ] Git LFS installed: `git lfs install`
- [ ] .gitattributes exists and configured
- [ ] Images compressed to WebP (< 100KB)
- [ ] Videos re-encoded to H.264 (< 2MB for 30s)
- [ ] Verify: `npm run analyze-assets`
- [ ] Commit changes: `git add .`
- [ ] Push to GitHub: `git push origin main`
- [ ] Verify Vercel deployment
- [ ] Test asset loading times

---

## 🔍 Verify It Works

### Check Git LFS Status
```bash
git lfs ls-files
# Should show all large files being tracked
```

### Check Vercel Deployment
1. Go to https://vercel.com/dashboard
2. Select your project
3. Wait for deployment to complete
4. Check deployment logs
5. Should say "LFS files: XX files"

### Check Load Times
1. Open your site on Vercel
2. Open DevTools → Network
3. Filter by Images/Videos
4. Check response times
5. Should be < 2 seconds for all assets

---

## 📈 Expected Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| GitHub Repo Size | 500MB | 20MB | **96% smaller** |
| Clone Time | 5 min | 20 sec | **15x faster** |
| Vercel Deploy Time | 3-5 min | 30-60 sec | **5x faster** |
| Asset Load Time | 5-10s | 1-2s | **5x faster** |
| First Contentful Paint | 4s | 1s | **4x faster** |

---

## 🆘 Troubleshooting

### "Object does not exist on the server"
```bash
git lfs pull origin
git lfs fetch origin
```

### "LFS files not found after deployment"
1. Verify .gitattributes is committed: `git log --oneline -- .gitattributes`
2. Check LFS quota on GitHub (free for public repos)
3. Verify files are tracked: `git lfs ls-files`

### "Repo is still large"
```bash
# Clean up old commits
git reflog expire --expire=now --all
git gc --prune=now --aggressive

# Force push (be careful!)
git push origin main --force-with-lease
```

### "Vercel build failing"
1. Check Vercel logs for LFS errors
2. Ensure .gitattributes is in repo
3. Re-push: `git push origin main`
4. Trigger rebuild in Vercel dashboard

---

## 📚 Commands Summary

```bash
# One-time setup
brew install git-lfs
git lfs install

# Regular workflow
npm run analyze-assets     # Check asset sizes
npm run build              # Build for production
git add .
git commit -m "Message"
git push origin main       # Automatically uses LFS

# Troubleshooting
git lfs ls-files           # Show tracked files
git lfs pull origin        # Download LFS files
git lfs fetch origin       # Fetch LFS metadata
```

---

## 🎯 Next Steps

1. **Today**: Install Git LFS and run analyze-assets
2. **This Week**: Compress images and videos
3. **This Week**: Push optimized assets to GitHub
4. **Next Week**: Verify deployment on Vercel
5. **Monitor**: Check Core Web Vitals monthly

---

## 💡 Pro Tips

1. **Always use WebP** for images (90% smaller than PNG)
2. **Always use H.264** for videos (universally supported)
3. **Test locally** before pushing: `npm run build`
4. **Monitor Vercel** deployments: https://vercel.com/dashboard
5. **Use DevTools** to check asset loading times
6. **Set up GitHub Actions** for automatic compression

---

## 🔗 Resources

- [Git LFS Documentation](https://git-lfs.github.com/)
- [Vercel + Git LFS](https://vercel.com/docs/source-control/git/git-lfs)
- [FFmpeg Docs](https://ffmpeg.org/)
- [ImageMagick Docs](https://imagemagick.org/)
- [GitHub LFS Pricing](https://github.com/pricing)

---

## Questions?

See these files for more details:
- `GITHUB_LFS_SETUP.md` - Detailed setup guide
- `IMAGE_VIDEO_OPTIMIZATION.md` - Asset optimization guide
- `OPTIMIZATION_SUMMARY.md` - Implementation checklist

Run: `npm run analyze-assets` to see your current asset status.

**Good luck! 🚀**
