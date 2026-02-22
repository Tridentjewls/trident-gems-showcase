# GitHub LFS & Asset Optimization Guide

## Problem
Large image and video files (>10MB total) are:
1. Making your GitHub repo huge
2. Slowing down Vercel deployments
3. Increasing load times on production

## Solution: Use GitHub LFS + CDN

---

## OPTION 1: GitHub LFS (Recommended for Private Repos)

### Step 1: Install Git LFS
```bash
# macOS
brew install git-lfs

# Then initialize
git lfs install
```

### Step 2: Configure .gitattributes
Create this file in your project root:

```bash
# Image formats
*.jpg filter=lfs diff=lfs merge=lfs -text
*.jpeg filter=lfs diff=lfs merge=lfs -text
*.png filter=lfs diff=lfs merge=lfs -text
*.gif filter=lfs diff=lfs merge=lfs -text
*.webp filter=lfs diff=lfs merge=lfs -text

# Video formats
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.webm filter=lfs diff=lfs merge=lfs -text
*.mov filter=lfs diff=lfs merge=lfs -text
*.avi filter=lfs diff=lfs merge=lfs -text

# Large files
*.psd filter=lfs diff=lfs merge=lfs -text
*.zip filter=lfs diff=lfs merge=lfs -text
```

### Step 3: Track Existing Large Files
```bash
# Find and track large files
git lfs track "src/assets/imgs/**/*.jpg"
git lfs track "src/assets/imgs/**/*.png"
git lfs track "src/assets/imgs/**/*.mp4"

# Or track by size threshold
find src/assets -type f -size +5M | while read file; do
  git lfs track "$file"
done
```

### Step 4: Migrate Existing Files
```bash
# Remove from git history (optional, for existing repos)
git rm --cached -r src/assets/imgs/
git add .
git commit -m "Remove large files from git history"

# Now add back with LFS
git add src/assets/
git commit -m "Add large files with LFS"
git push origin main
```

### GitHub LFS Cost
- GitHub LFS is **FREE for public repos**
- Private repos: Free tier includes 1GB/month, then $5/month for 100GB

---

## OPTION 2: External CDN (Best for Production)

### Using Cloudinary (Free Tier Available)
1. Sign up at https://cloudinary.com/
2. Upload images/videos there
3. Use CDN URLs in your code

### Using Vercel Image Optimization
Since you're using Vercel, use their built-in optimization:

```tsx
import Image from 'next/image'; // If using Next.js
// OR
import OptimizedImage from "@/components/OptimizedImage";
```

### Using Supabase Storage
Free storage with CDN:
```bash
npm install @supabase/supabase-js
```

---

## OPTION 3: Hybrid Approach (RECOMMENDED) ⭐

Use **GitHub LFS** for development + **Vercel Blob** for production:

### Step 1: Set up GitHub LFS (for your repo)
Follow OPTION 1 above

### Step 2: Use Vercel Blob in Production
```bash
npm install @vercel/blob
```

Create an environment variable:
```
VERCEL_BLOB_WRITE_TOKEN=your_token_here
```

Update your components:
```tsx
import OptimizedImage from "@/components/OptimizedImage";

export default function Example() {
  // In development: uses local files
  // In production: served from Vercel Blob (CDN)
  return (
    <OptimizedImage
      src={process.env.NODE_ENV === 'production' 
        ? `https://your-blob-url.vercel-storage.com/image.jpg`
        : imageLocal
      }
      alt="Example"
    />
  );
}
```

---

## Quick Start Commands

### If Using GitHub LFS:
```bash
# 1. Install LFS
brew install git-lfs && git lfs install

# 2. Create .gitattributes
cat > .gitattributes << 'EOF'
*.jpg filter=lfs diff=lfs merge=lfs -text
*.png filter=lfs diff=lfs merge=lfs -text
*.mp4 filter=lfs diff=lfs merge=lfs -text
*.webp filter=lfs diff=lfs merge=lfs -text
EOF

# 3. Track large files
git add .gitattributes
git lfs track "src/assets/imgs/**/*.{jpg,png,mp4,webp}"
git add .gitattributes .gitattributes

# 4. Push
git commit -m "Configure Git LFS"
git push origin main
```

### If Using External CDN:
```bash
# Upload files to CDN manually
# Then update image paths in code to use CDN URLs
# No git repo bloat!
```

---

## File Size Recommendations

For Vercel deployment with fast loading:

| File Type | Max Size | Format | Method |
|-----------|----------|--------|--------|
| Hero Image | 100 KB | WebP + JPEG | Optimize + LFS |
| Product Image | 50 KB | WebP | Optimize + LFS |
| Thumbnail | 20 KB | WebP | Optimize + LFS |
| Video (30s) | 2 MB | MP4 H.264 | LFS or CDN |
| Video (60s) | 4 MB | MP4 H.264 | CDN only |

---

## Vercel + GitHub LFS Setup

1. **GitHub LFS enabled** ✅ (automatic with .gitattributes)
2. **Vercel detects LFS** ✅ (automatic, no extra setup)
3. **Deploy normally** ✅ (git push origin main)

---

## Troubleshooting

### "Object does not exist on the server"
```bash
git lfs pull origin
git lfs fetch origin
```

### Reduce repo size after LFS setup
```bash
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push origin main --force-with-lease
```

### Check which files are in LFS
```bash
git lfs ls-files
```

---

## Best Practices

1. **Always use optimized formats**: WebP for images, H.264 for videos
2. **Use GitHub LFS for all files > 10MB**
3. **Use CDN for high-traffic assets**
4. **Keep .gitattributes in repo** (track with git)
5. **Test deployment** before pushing to production

---

## What to do RIGHT NOW

1. **Create .gitattributes** (if not using LFS yet)
2. **Compress large images** to WebP format
3. **Re-encode videos** to H.264 at lower bitrate
4. **Push to GitHub**
5. **Deploy to Vercel**
6. **Test load times** with DevTools

---

## Commands to Run Now

```bash
# 1. Check current large files
find src/assets -type f -size +1M -exec ls -lh {} \;

# 2. If using GitHub LFS
git lfs install
echo '*.mp4 filter=lfs diff=lfs merge=lfs -text' >> .gitattributes
echo '*.jpg filter=lfs diff=lfs merge=lfs -text' >> .gitattributes
echo '*.png filter=lfs diff=lfs merge=lfs -text' >> .gitattributes

# 3. Commit changes
git add .gitattributes
git commit -m "Configure Git LFS for large media files"
git push origin main

# 4. Done! Vercel will handle the rest
```

---

## Additional Resources

- [Git LFS Documentation](https://git-lfs.github.com/)
- [Vercel Image Optimization](https://vercel.com/docs/image-optimization)
- [Vercel Blob Storage](https://vercel.com/docs/storage/vercel-blob)
- [Cloudinary](https://cloudinary.com/)
- [GitHub LFS Pricing](https://github.com/pricing/calculator)
