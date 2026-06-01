# 🎉 Chaitra's Birthday Surprise Website

A nostalgic, interactive birthday surprise website for Chaitra!

## 🌟 Features

- **Beautiful Intro Screen** - Animated greeting with hearts
- **Memory Timeline** - Showcase your special moments together
- **Photo Gallery** - Display your favorite photos
- **Love Messages** - Share 6 things you love about her
- **Festive Final Screen** - Animated balloons and birthday message
- **Fully Responsive** - Works on all devices

## 🚀 How to Add Your Photos

### Method 1: Using URLs (Easiest)

1. Open `index.html` in a text editor
2. Find the photo gallery section (search for "photo-gallery")
3. Replace the `<div class="photo-placeholder">📷</div>` with `<img src="YOUR_IMAGE_URL" alt="Memory">`

Example:
```html
<div class="photo-item">
    <img src="https://example.com/photo1.jpg" alt="Our first date" style="width: 100%; height: 200px; object-fit: cover;">
    <p>Our First Date</p>
</div>
```

### Method 2: Upload Images to GitHub

1. Create a folder called `images` in your repository
2. Upload your photos to the `images` folder
3. Reference them like this:
```html
<img src="images/photo1.jpg" alt="Memory" style="width: 100%; height: 200px; object-fit: cover;">
```

## 📝 How to Customize

### Change the Messages

Open `index.html` and find the "Things I Love About You" section. Replace the text in the message cards:

```html
<div class="message-card fade-in">
    <p>✨ Your smile lights up my entire world</p>
</div>
```

### Customize the Timeline

Find the timeline section and update the memories:

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <h3>Your Title</h3>
        <p>Your memory description...</p>
        <p class="memory-date">Your date or time reference</p>
    </div>
</div>
```

### Change Colors

Edit `style.css` and update the gradient colors. Look for:

```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🌐 Hosting on GitHub Pages

1. Go to your repository settings
2. Scroll to "Pages" section
3. Select `main` branch as source
4. Wait for it to deploy (usually takes a minute)
5. Your site will be live at: `https://krishna-tized.github.io/chaitra-birthday/`

## 📱 Browser Support

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

## 💡 Tips

- Use high-quality photos for best results
- Test on your phone before sharing
- You can modify colors, fonts, and animations in `style.css`
- Add more message cards by copying the existing structure
- Don't forget to commit and push your changes!

## 🎨 Personalization Ideas

- Add her favorite songs (embed Spotify/YouTube)
- Add more timeline events
- Include inside jokes in the messages
- Use her favorite colors for the gradients
- Add more photos to the gallery

## 🔧 Need Help?

If you need to make more changes, edit the files:
- `index.html` - Content and structure
- `style.css` - Colors, fonts, and animations
- `script.js` - Interactive functionality

Then commit and push your changes to GitHub!

---

**Made with ❤️ by Krishna for Chaitra's Birthday**

Happy Birthday! 🎂✨