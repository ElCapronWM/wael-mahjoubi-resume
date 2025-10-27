# Wael Mahjoubi - Professional Resume

A modern, responsive professional resume built with HTML5, CSS3, and JavaScript, featuring the Brandi Network design theme.

## Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Brandi Network theme with gradients and animations
- **Performance Optimized**: Fast loading with optimized assets
- **SEO Ready**: Complete meta tags and Open Graph support
- **Print Friendly**: Optimized for professional printing
- **PWA Ready**: Service worker support for offline capabilities

## Deployment

This resume is designed to be deployed on Vercel with the custom domain `mahjoubiwael.brandi.network`.

### Quick Deploy to Vercel

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

3. **Configure Domain**:
   - Add `mahjoubiwael.brandi.network` in Vercel dashboard
   - Update DNS records as instructed

### Manual Deployment

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add professional resume"
   git push origin main
   ```

2. **Connect to Vercel**:
   - Import project from GitHub
   - Configure build settings
   - Deploy

## Customization

### Analytics
Uncomment and configure Google Analytics in the HTML file:
```javascript
// Replace GA_MEASUREMENT_ID with your actual ID
gtag('config', 'GA_MEASUREMENT_ID');
```

### Contact Information
Update contact details in the header section:
- Email
- LinkedIn URL
- Location
- Website

### Content Updates
- Professional summary
- Skills and technologies
- Project descriptions
- Education details

## Performance Features

- **Image Optimization**: Lazy loading with fallbacks
- **CSS Optimization**: Critical CSS inlined
- **JavaScript**: Minimal, optimized code
- **Caching**: Proper cache headers configured
- **CDN**: Vercel's global CDN for fast delivery

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## License

© 2024 Wael Mahjoubi. All rights reserved.
