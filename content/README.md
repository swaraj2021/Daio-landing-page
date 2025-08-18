# DAIO Content Management System

This folder contains all the text content for the DAIO website, organized in separate JSON files for easy management by the marketing team.

## 📁 File Structure

```
content/
├── config.json              # Main configuration and file mapping
├── navigation.json          # Navigation menu items
├── hero.json               # Hero section content
├── problem.json            # Problem section content
├── solution.json           # Solution section content
├── market.json             # Market opportunity content
├── product.json            # Product tiers content
├── roadmap.json            # Roadmap and timeline content
├── gtm.json               # Go-to-market strategy content
├── moonshot.json          # Moonshot goal content
├── contact.json           # Contact form and info
├── footer.json            # Footer links and info
├── chatbot.json           # Chatbot messages and options
├── content-loader.js      # Content injection system
└── README.md              # This file
```

## 🚀 How to Update Content

### For Marketing Team

1. **No coding required!** Just edit the JSON files in this folder
2. **Save the file** - changes will automatically appear on the website
3. **Test your changes** by refreshing the website

### Quick Start Guide

#### 1. Update Hero Section
Edit `hero.json`:
```json
{
  "title": "DAIO",
  "tagline": "Your new tagline here...",
  "buttons": [
    {
      "text": "New Button Text",
      "href": "#contact",
      "class": "btn btn-primary"
    }
  ]
}
```

#### 2. Update Problem Section
Edit `problem.json`:
```json
{
  "header": {
    "title": "New Problem Title",
    "subtitle": "New subtitle here"
  },
  "layers": [
    {
      "type": "environment",
      "title": "Environment",
      "problem": "New problem description",
      "points": [
        "New point 1",
        "New point 2"
      ]
    }
  ]
}
```

#### 3. Update Product Tiers
Edit `product.json`:
```json
{
  "tiers": [
    {
      "type": "free",
      "title": "Free",
      "features": [
        "New feature 1",
        "New feature 2"
      ]
    }
  ]
}
```

## 📝 Content File Details

### Navigation (`navigation.json`)
- **brand**: Company name in navigation
- **menuItems**: Array of navigation links

### Hero (`hero.json`)
- **title**: Main headline
- **tagline**: Subtitle text
- **buttons**: Call-to-action buttons
- **image**: Hero image details

### Problem (`problem.json`)
- **header**: Section title and subtitle
- **layers**: Array of problem layers (environment, social, governance)
- **summary**: Problem summary section

### Solution (`solution.json`)
- **header**: Section title and subtitle
- **pillars**: Array of solution pillars (access, impact, participate)

### Market (`market.json`)
- **header**: Section title and subtitle
- **opportunities**: Array of market opportunity cards

### Product (`product.json`)
- **header**: Section title and subtitle
- **tiers**: Array of product tiers (free, standard, premium)

### Roadmap (`roadmap.json`)
- **header**: Section title and subtitle
- **timeline**: Timeline configuration
- **details**: Roadmap details and team size
- **legend**: Status legend

### GTM (`gtm.json`)
- **header**: Section title and subtitle
- **left**: Left column content (goal, target, penetration, timeline, channels)
- **right**: Right column content (ARR projection, capital gains, revenue streams, assumptions)

### Moonshot (`moonshot.json`)
- **title**: Moonshot goal title
- **points**: Array of goal points

### Contact (`contact.json`)
- **header**: Section title and subtitle
- **info**: Contact information
- **form**: Contact form configuration

### Footer (`footer.json`)
- **brand**: Company name and tagline
- **socialLinks**: Social media links
- **sections**: Footer link sections
- **copyright**: Copyright text

### Chatbot (`chatbot.json`)
- **title**: Chatbot title
- **welcomeMessage**: Welcome message
- **inputPlaceholder**: Input field placeholder
- **quickReplies**: Quick reply buttons
- **triggerText**: Trigger button text

## 🔧 Technical Details

### Content Loading Process
1. Website loads `content-loader.js`
2. Content manager fetches all JSON files
3. Content is injected into HTML elements
4. Website becomes fully functional

### Adding New Content
1. Create new JSON file in `content/` folder
2. Add file path to `config.json` sections
3. Add injection method to `content-loader.js`
4. Update this README

### Content Updates
- **Real-time**: Changes appear immediately after saving
- **No deployment needed**: Just save the JSON file
- **Version control**: All changes are tracked in Git

## 🎯 Best Practices

### Text Formatting
- Use **bold** with `<strong>text</strong>`
- Use *italics* with `<em>text</em>`
- Use line breaks with `<br>`
- Use links with `<a href="url">text</a>`

### JSON Structure
- Keep consistent naming conventions
- Use descriptive field names
- Maintain proper JSON syntax
- Test changes in browser

### Content Guidelines
- Keep text concise and impactful
- Maintain brand voice consistency
- Update all related sections when making changes
- Test on different screen sizes

## 🐛 Troubleshooting

### Content Not Updating
1. Check browser cache (Ctrl+F5 or Cmd+Shift+R)
2. Verify JSON syntax is valid
3. Check browser console for errors
4. Ensure file paths are correct

### JSON Syntax Errors
1. Use online JSON validator
2. Check for missing commas or brackets
3. Ensure all strings are in quotes
4. Verify no trailing commas

### Missing Content
1. Check if content file exists
2. Verify file path in `config.json`
3. Check browser console for loading errors
4. Ensure content manager is initialized

## 📞 Support

For technical issues or questions about the content management system:
1. Check browser console for error messages
2. Verify all JSON files are properly formatted
3. Contact the development team if issues persist

## 🔄 Version History

- **v1.0.0** (2024-12-19): Initial content management system
  - Separated all text content into JSON files
  - Created dynamic content injection system
  - Added comprehensive documentation

---

**Note**: This system allows marketing teams to update website content without touching HTML, CSS, or JavaScript files. All changes are made through simple JSON file edits.
