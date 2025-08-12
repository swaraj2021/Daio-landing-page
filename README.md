# DAIO Landing Page

A modern, responsive landing page template designed for startups and small businesses. This landing page includes all the essential sections you need to showcase your company, team, and solutions.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and form handling
- **Contact Forms**: Built-in feedback and contact forms with validation
- **Team Section**: Showcase your founding team members
- **Problem/Solution**: Clearly explain what you're solving and how
- **Professional Styling**: Modern gradients, shadows, and typography

## 📁 File Structure

```
startup-landing-page/
├── index.html          # Main HTML file
├── styles.css          # CSS styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎨 Customization Guide

### 1. Company Information

Update the following in `index.html`:

- **Company Name**: Replace "DAIO" throughout the file if needed
- **Tagline**: Update the hero section headline and description
- **Contact Details**: Update email, phone, location, and business hours
- **Social Media**: Update social media links in the footer

### 2. Team Section

Customize the team section in `index.html`:

```html
<div class="team-member">
    <div class="member-avatar">
        <i class="fas fa-user"></i> <!-- Replace with actual photo -->
    </div>
    <h3>Your Name</h3> <!-- Replace with actual name -->
    <p class="member-role">Your Role</p> <!-- Replace with actual role -->
    <p class="member-bio">Your bio description</p> <!-- Replace with actual bio -->
</div>
```

**To add team photos**: Replace the `<i class="fas fa-user"></i>` with:
```html
<img src="path/to/your/photo.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
```

### 3. Problem & Solution

Update the solution section to reflect your specific:

- **Problem**: What challenges are you solving?
- **Pain Points**: List the specific issues your customers face
- **Solution**: How does your product/service address these problems?

### 4. About Section

Modify the three cards in the about section to highlight your company's:

- **Core Values**
- **Mission**
- **Unique Strengths**

### 5. Colors & Branding

Update the color scheme in `styles.css`:

```css
/* Primary brand color */
:root {
    --primary-color: #2563eb;    /* Replace with your brand color */
    --secondary-color: #1d4ed8;  /* Darker shade of primary */
    --accent-color: #8b5cf6;     /* Accent color for highlights */
}
```

### 6. Content Updates

- **Hero Section**: Update the main headline and call-to-action
- **About Section**: Modify the three feature cards
- **Contact Information**: Update all contact details
- **Footer**: Customize links and company description

## 🛠️ Technical Features

### Form Handling

The landing page includes two forms:

1. **Feedback Form**: For general feedback and inquiries
2. **Contact Form**: For direct contact

**To connect forms to your backend**:

1. Update the form action URLs in `index.html`
2. Modify the form submission logic in `script.js`
3. Replace the console.log statements with actual API calls

Example backend integration:
```javascript
// Replace the form submission logic
const response = await fetch('/api/contact', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
});
```

### Responsive Design

The page automatically adapts to different screen sizes:

- **Desktop**: Full layout with side-by-side sections
- **Tablet**: Adjusted spacing and single-column layouts
- **Mobile**: Mobile-first design with hamburger navigation

### Animations

- **Scroll Animations**: Elements fade in as you scroll
- **Hover Effects**: Interactive cards and buttons
- **Smooth Scrolling**: Navigation links scroll smoothly to sections
- **Loading States**: Form submission feedback

## 🚀 Deployment

### Local Development

1. Open the project folder in your code editor
2. Open `index.html` in your web browser
3. Make changes and refresh to see updates

### Web Hosting

1. **Upload files** to your web hosting provider
2. **Ensure all files** are in the same directory
3. **Test the forms** to ensure they work correctly

### Recommended Hosting Options

- **Netlify**: Free hosting with form handling
- **Vercel**: Fast deployment and hosting
- **GitHub Pages**: Free hosting for public repositories
- **Traditional hosting**: Upload via FTP/SFTP

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Customization Tips

### Adding New Sections

1. Copy an existing section structure
2. Update the content and styling
3. Add navigation links if needed
4. Update the CSS for responsive design

### Changing Icons

The page uses Font Awesome icons. To change icons:

1. Visit [Font Awesome](https://fontawesome.com/icons)
2. Find your desired icon
3. Replace the icon class in the HTML

### Adding Images

1. Place images in an `images/` folder
2. Update image paths in the HTML
3. Ensure images are optimized for web (compressed, appropriate dimensions)

## 📞 Support

For customization help or questions:

1. Check the code comments for guidance
2. Review the CSS classes for styling options
3. Test changes in different browsers
4. Validate HTML and CSS for errors

## 📄 License

This template is free to use and modify for your startup. Please ensure you have the rights to any images or content you add.

## 🎯 Next Steps

After customizing your landing page:

1. **Add Analytics**: Google Analytics, Mixpanel, etc.
2. **SEO Optimization**: Meta tags, structured data, sitemap
3. **Performance**: Optimize images, minify CSS/JS
4. **Testing**: Test on different devices and browsers
5. **Launch**: Deploy and share your new landing page!

---

**Good luck with your startup! 🚀**
