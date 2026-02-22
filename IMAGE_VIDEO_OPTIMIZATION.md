# Image & Video Optimization Guide

## Overview
This guide explains how to optimize images and videos in the Trident Gems Showcase website to reduce load times.

## Components Available

### 1. OptimizedImage Component
**Location:** `src/components/OptimizedImage.tsx`

**Features:**
- Lazy loading with Intersection Observer
- Priority preloading for above-the-fold images
- WebP format support with fallback
- Skeleton shimmer loading effect
- Async image decoding
- Responsive image sizes

**Usage:**
```tsx
import OptimizedImage from "@/components/OptimizedImage";

// Basic usage
<OptimizedImage 
  src={imageUrl} 
  alt="Description"
/>

// With priority (for above-the-fold images)
<OptimizedImage 
  src={heroImage} 
  alt="Hero"
  priority
  aspectRatio="video"
/>

// With WebP support
<OptimizedImage 
  src={imagePng} 
  alt="Product"
  webpSrc={imageWebp}
/>
```

**Props:**
- `src` (required): Image source URL
- `alt` (required): Alt text
- `priority` (optional): Boolean, preload if true
- `aspectRatio` (optional): "square" | "video" | "portrait" | "auto"
- `sizes` (optional): Responsive sizes string
- `webpSrc` (optional): WebP version of image
- `quality` (optional): "high" | "medium" | "low"
- `className` (optional): CSS classes
- `containerClassName` (optional): Container CSS classes

---

### 2. OptimizedVideo Component
**Location:** `src/components/OptimizedVideo.tsx`

**Features:**
- Lazy loading with Intersection Observer
- Poster image support
- Priority preloading
- Metadata preloading for non-priority videos
- Auto pause when out of view
- Skeleton shimmer loading effect
- Responsive aspect ratio support

**Usage:**
```tsx
import OptimizedVideo from "@/components/OptimizedVideo";

// Basic usage
<OptimizedVideo 
  src={videoUrl}
/>

// With poster and priority
<OptimizedVideo 
  src={heroVideo}
  poster={posterImage}
  priority
  aspectRatio="video"
/>
```

**Props:**
- `src` (required): Video source URL
- `poster` (optional): Poster/thumbnail image
- `priority` (optional): Boolean, preload if true
- `aspectRatio` (optional): "square" | "video" | "portrait" | "auto"
- `className` (optional): CSS classes
- `containerClassName` (optional): Container CSS classes
- Standard video props: `autoPlay`, `loop`, `muted`, `playsInline`

---

## Image Optimization Best Practices

### 1. **Format Selection**
```
JPEG (.jpg)      → Photos with complex colors
PNG (.png)       → Images with transparency/text
WebP (.webp)     → Modern browsers (best compression)
```

### 2. **Lazy Load Non-Priority Images**
```tsx
// DON'T
<img src={image} />

// DO
<OptimizedImage src={image} alt="description" />
```

### 3. **Prioritize Above-The-Fold Images**
```tsx
// Hero image should have priority
<OptimizedImage 
  src={heroImage} 
  alt="Hero" 
  priority
/>

// Below-the-fold can wait
<OptimizedImage 
  src={portfolioImage} 
  alt="Portfolio"
/>
```

### 4. **Use Responsive Sizes**
```tsx
<OptimizedImage
  src={image}
  alt="Product"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

### 5. **Provide WebP Format**
```tsx
// With WebP support
<OptimizedImage 
  src={image} 
  alt="Product"
  webpSrc={imageWebp}
/>
```

---

## Video Optimization Best Practices

### 1. **Use Metadata Preload**
```tsx
// Non-priority videos load only metadata (much smaller)
<OptimizedVideo 
  src={demoVideo}
  poster={posterImage}
/>
```

### 2. **Always Include Poster**
```tsx
<OptimizedVideo 
  src={video}
  poster={posterImage}  // Shows while loading
/>
```

### 3. **Lazy Load Videos**
Videos are automatically lazy-loaded only when they enter the viewport, then paused when leaving.

### 4. **Encode Videos Properly**
- Use H.264 codec for MP4
- Target bitrate: 2-4 Mbps for 1080p
- Use two-pass encoding for quality

```bash
# Example FFmpeg command
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 23 -c:a aac -b:a 128k output.mp4
```

---

## File Size Targets

| Type | Target Size | Format |
|------|------------|--------|
| Hero Image | < 100KB | WebP |
| Portfolio Image | < 50KB | WebP |
| Thumbnail | < 20KB | WebP |
| Video (30sec) | < 2MB | MP4 (H.264) |

---

## Build Optimization

### Vite Configuration
The `vite.config.ts` includes:
- Code splitting for vendor libraries
- Optimal asset inline limit (8KB)
- Asset optimization settings

### Build Command
```bash
npm run build
# or
bun run build
```

---

## Performance Checklist

- [ ] All above-the-fold images have `priority` prop
- [ ] All images use `OptimizedImage` component
- [ ] All videos use `OptimizedVideo` component
- [ ] Videos include `poster` prop
- [ ] WebP versions provided for large images
- [ ] `sizes` prop set for responsive images
- [ ] No inline images in HTML
- [ ] No direct `<img>` tags without optimization
- [ ] Video bitrate optimized (< 5 Mbps)
- [ ] Image compression applied (< 100KB per image)

---

## Troubleshooting

### Images Still Loading Slowly
1. Check file sizes (aim for < 100KB)
2. Use `priority` prop for above-the-fold
3. Provide WebP versions
4. Check network tab in DevTools

### Videos Buffering
1. Reduce video bitrate
2. Use proper codec (H.264)
3. Don't use `priority` for non-hero videos
4. Include poster image

### WebP Not Working
1. Check browser support (most modern browsers)
2. Fallback to JPEG/PNG with same `src` prop
3. Test in DevTools Network tab

---

## Converting Existing Images to WebP

Using ImageMagick:
```bash
convert image.jpg -quality 80 image.webp
```

Using FFmpeg:
```bash
ffmpeg -i image.jpg -c:v libwebp -quality 80 image.webp
```

Using Node.js (sharp library):
```bash
npm install sharp
node -e "require('sharp')('image.jpg').webp({quality: 80}).toFile('image.webp')"
```

---

## Performance Impact

Expected improvements with full optimization:
- **Initial Load Time:** -40-50%
- **Time to Interactive:** -30-40%
- **Largest Contentful Paint:** -35-45%
- **Core Web Vitals:** Significant improvement

## Additional Resources

- [Web.dev Image Optimization](https://web.dev/image-optimization/)
- [MDN Media Query Resolution](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries)
- [Vite Asset Handling](https://vitejs.dev/guide/assets.html)
- [Can I Use WebP](https://caniuse.com/webp)
