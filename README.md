# Wael Mahjoubi - Professional Resume

A modern, responsive professional resume built with HTML5, CSS3, and JavaScript, featuring the Brandi Network design theme.

## ✨ Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI**: Brandi Network theme with elegant gradients and smooth animations
- **Performance Optimized**: Fast loading with optimized assets and lazy loading
- **SEO Ready**: Complete meta tags and Open Graph support for social sharing
- **Print Friendly**: CSS-optimized for professional printing (A4 format)
- **PWA Ready**: Service worker support for offline capabilities

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (for local development)
- Vercel CLI (for deployment)

### Local Development

```bash
# Clone the repository
git clone <repository-url>
cd wael-mahjoubi-resume

# Open index.html in your browser or use a local server
python -m http.server 8000
# or
npx serve .
```

### Deploy to Vercel

**Option 1: Using Vercel CLI**
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to production
vercel --prod
```

**Option 2: GitHub Integration**
1. Push code to GitHub repository
2. Import project in [Vercel Dashboard](https://vercel.com)
3. Configure custom domain: `mahjoubiwael.brandi.network`
4. Deploy automatically on every push

## ⚙️ Customization

### Update Resume Content
Edit `RESUME.md` (Markdown source) or directly modify `index.html`:

- **Contact Information**: Update email, LinkedIn, location, website
- **Professional Summary**: Modify executive summary section
- **Experience**: Update work history and achievements
- **Skills**: Add/remove technologies and expertise levels
- **Education**: Update academic background

### Enable Google Analytics (Optional)
Uncomment and configure in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID'); // Replace with your actual ID
</script>
```

### Styling & Theme
- Modify CSS variables in `<style>` section of `index.html`
- Brand colors and gradients can be adjusted to match your brand
- Print styles are optimized for A4 paper size

## 📄 Resume Format Guidelines

**Best Practices for 2-Page Resume:**
- ✅ Keep total length to 2 pages maximum (when printed)
- ✅ Focus on quantifiable achievements with metrics
- ✅ Use concise bullet points (3-5 per role)
- ✅ Prioritize recent and most relevant experience
- ✅ Remove redundant information and metadata sections
- ✅ Use clear section headers and consistent formatting
- ✅ Proofread for grammar and spelling errors

**Content Priority:**
1. **Executive Summary** (2-3 sentences)
2. **Key Achievements** (high-level metrics)
3. **Professional Experience** (most recent first)
4. **Technical Skills** (core competencies, not exhaustive)
5. **Education** (brief, relevant details only)
6. **Optional**: Languages, certifications (if space permits)

## 🛠️ Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid/Flexbox
- **JavaScript**: Minimal vanilla JS for interactions
- **Markdown**: Source content format (RESUME.md)

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📝 License

© 2024-2026 Wael Mahjoubi. All rights reserved.
