# Portfolio Website

A modern, responsive portfolio website inspired by [Zach Jordan's portfolio](https://www.zachjordan.io/), designed specifically for software developers.

## Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Responsive**: Fully responsive across all devices
- **Interactive**: Smooth scrolling, mobile navigation, and contact form
- **Customizable**: Easy to modify colors, content, and sections
- **Performance Optimized**: Fast loading with debounced scroll events

## Structure

```
Portfolio-Advance/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling and responsive design
├── js/
│   └── script.js       # Interactive functionality
└── img/
    ├── profile.jpg     # Your profile photo
    ├── featured-1.png  # Featured project images
    ├── featured-2.png
    ├── featured-3.png
    ├── favicon.ico     # Website favicon
    └── favicon.svg
```

## Sections

1. **Hero Section**: Personal introduction with profile photo
2. **Featured Work**: Showcase your top 3 projects
3. **Projects**: Grid of your development projects with tech stacks
4. **Skills**: Technical skills organized by category
5. **Experience**: Timeline of your work experience and education
6. **Contact**: Contact form and information

## Customization Guide

### 1. Personal Information
Edit `index.html` and replace:
- `"Your Name"` with your actual name
- `"YN"` in the navigation with your initials
- Update the hero description
- Add your contact information
- Update social media links

### 2. Profile Photo
Replace `img/profile.jpg` with your professional photo (recommended: 400x400px, square format)

### 3. Featured Projects
- Replace `img/featured-1.png`, `img/featured-2.png`, `img/featured-3.png` with your project screenshots
- Update project titles and descriptions in the Featured Work section
- Add links to your live projects

### 4. Projects Section
Update the projects grid with your actual projects:
- Change project titles and descriptions
- Update technology tags to match your stack
- Add project links and GitHub repositories

### 5. Skills Section
Customize the skills categories and technologies:
- Frontend technologies you use
- Backend frameworks and languages
- Databases and tools
- DevOps and cloud platforms

### 6. Experience Section
Update the timeline with your actual experience:
- Work experience
- Education
- Certifications or achievements

### 7. Color Scheme
Modify CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #2563eb;    /* Change main color */
    --primary-dark: #1d4ed8;     /* Darker shade */
    --accent-color: #f59e0b;     /* Accent color */
}
```

### 8. Contact Form
The contact form includes:
- Client-side validation
- Success/error notifications
- Responsive design

**Note**: To make the form functional, you'll need to:
1. Set up a backend service (Node.js, PHP, etc.)
2. Use a service like Formspree, Netlify Forms, or EmailJS
3. Update the form action in `js/script.js`

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: Interactive functionality
- **Font Awesome**: Icons
- **Google Fonts**: Typography (Inter font family)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- **Optimized Images**: Properly sized and compressed images
- **Smooth Animations**: CSS transitions and transforms
- **Debounced Events**: Optimized scroll event handling
- **Intersection Observer**: Efficient scroll-based animations
- **Mobile First**: Responsive design approach

## Getting Started

1. **Download/Clone** this repository
2. **Replace Images**: Add your profile photo and project screenshots
3. **Update Content**: Modify the HTML with your information
4. **Customize Styling**: Adjust colors and layout if needed
5. **Test Locally**: Open `index.html` in your browser
6. **Deploy**: Upload to your hosting service

## Deployment Options

- **GitHub Pages**: Free hosting for static sites
- **Netlify**: Free tier with form handling
- **Vercel**: Fast deployment with Git integration
- **Traditional Hosting**: Upload files via FTP

## SEO Optimization

The template includes:
- Semantic HTML structure
- Meta tags for social sharing
- Proper heading hierarchy
- Alt text for images
- Clean URL structure

## Accessibility

- Keyboard navigation support
- Screen reader friendly
- High contrast colors
- Focus indicators
- Semantic HTML elements

## Mobile Optimization

- Touch-friendly navigation
- Responsive images
- Optimized font sizes
- Fast loading on mobile networks

## Next Steps

After setting up your portfolio:

1. **Add Google Analytics** for tracking visitors
2. **Set up a blog section** for technical writing
3. **Add project case studies** with detailed explanations
4. **Include testimonials** from clients or colleagues
5. **Add a resume download** option
6. **Set up contact form backend** for functionality

## License

This template is free to use for personal and commercial projects. Attribution is appreciated but not required.

## Support

If you encounter any issues or need help customizing the portfolio, feel free to reach out or check the documentation.

---

**Remember**: Your portfolio is often the first impression potential employers or clients will have of your work. Keep it updated with your latest projects and skills!
