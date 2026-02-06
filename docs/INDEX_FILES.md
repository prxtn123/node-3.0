# Index Files Quick Reference

## 🎯 Your Index Files

For publishing to **nodehub.uk**, here's what you need to know:

### Source Files (Development)

1. **`/index.html`** - Main HTML template
   - Located in: Root directory
   - Purpose: HTML entry point for the app
   - Used by: Vite build process

2. **`/src/main.tsx`** - Main TypeScript entry point
   - Located in: src/ directory
   - Purpose: React app initialization
   - Imports: App.tsx and index.css

3. **`/src/index.css`** - Main stylesheet
   - Located in: src/ directory
   - Purpose: Global styles and Tailwind imports
   - Imported by: main.tsx

### Built Files (Production) - **This is what you publish!**

After running `npm run build`, you'll get:

```
dist/
├── index.html              ← Production HTML (this is your entry point!)
├── 404.html                ← Hash routing fallback for static hosting
├── assets/
│   ├── index-[hash].js    ← Bundled JavaScript
│   ├── index-[hash].css   ← Bundled CSS
│   └── [images]           ← Image assets
├── node2.0.png            ← Favicon
└── robots.txt             ← SEO file
```

## 📤 To Publish to nodehub.uk

### Quick Steps:

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Upload the `dist/` folder contents to nodehub.uk**
   - The main entry point will be `dist/index.html`
   - Upload ALL files from the `dist/` directory

3. **Configure your web server:**
   - Point to the `dist/` directory
   - Ensure `index.html` is set as the default document

## ✅ Verification

After building, verify your files exist:

```bash
ls -la dist/
```

You should see:
- ✅ index.html
- ✅ 404.html
- ✅ assets/ folder with .js and .css files
- ✅ Static assets (images, etc.)

## 🔧 Important: Hash Routing

**This app uses hash-based routing** to work on static hosting platforms like nodehub.uk.

### What this means:
- URLs will include a `#`, like: `https://yoursite.com/#/privacy`
- All routes work without server configuration
- The app was switched from `BrowserRouter` to `HashRouter` to fix the blank page issue

### Why?
Static hosts can't redirect URLs like `/privacy` to `/index.html`. Hash routing solves this by making all navigation client-side, so only `index.html` is requested from the server.

## 🚀 Deploy!

That's it! Your `dist/index.html` is the entry point that nodehub.uk needs to serve your application.

---

For more detailed information, see [PUBLISHING_GUIDE.md](../PUBLISHING_GUIDE.md)
