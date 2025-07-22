# Portfolio Customization Guide

This guide will help you customize the portfolio with your own images, details, and content.

## 📸 Image Requirements & Locations

### 1. Profile Image
- **Location**: `public/img/profile.jpg`
- **Recommended Size**: 400x400px (square format)
- **Format**: JPG, PNG, or WebP
- **Usage**: Main hero section profile photo
- **Tips**: Use a professional headshot with good lighting

### 2. Featured Project Images
- **Location**: `public/img/featured-1.png`, `public/img/featured-2.png`, `public/img/featured-3.png`
- **Recommended Size**: 800x600px (4:3 aspect ratio)
- **Format**: PNG, JPG, or WebP
- **Usage**: Showcase images for your top 3 projects
- **Tips**: Use screenshots, mockups, or project previews

### 3. Favicon
- **Location**: `public/img/favicon.ico` and `public/img/favicon.svg`
- **Size**: 32x32px (ICO), scalable (SVG)
- **Usage**: Browser tab icon
- **Tips**: Use your initials or a simple logo

## 🔧 Where to Change Your Details

### 1. Personal Information
**File**: `app/layout.tsx`
```typescript
// Update metadata
title: 'Your Name - Portfolio',
description: 'Your professional description here',
keywords: ['Your Skills', 'Your Industry', 'Your Expertise'],

// Update Open Graph
openGraph: {
  title: 'Your Name - Portfolio',
  description: 'Your professional description',
  url: 'https://yourwebsite.com',
}
```

### 2. Hero Section
**File**: `components/Hero.tsx`
```typescript
// Update your name and details
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6">
  Hi, I'm <span className="gradient-text">Your Name</span>
</h1>

<p className="text-xl sm:text-2xl text-secondary-600 mb-8 leading-relaxed">
  Your Professional Title & Brief Description
</p>

// Update your location and status
<div className="flex items-center text-secondary-600 mb-2">
  <MapPinIcon className="w-5 h-5 mr-2 text-primary-600" />
  <span>Your City, Country</span>
</div>

<div className="flex items-center text-secondary-600">
  <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
  <span>Available for work</span>
</div>
```

### 3. Featured Projects
**File**: `components/FeaturedWork.tsx`
```typescript
const featuredProjects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Detailed description of your project, technologies used, and impact.',
    image: '/img/featured-1.png', // Your project image
    technologies: ['Tech1', 'Tech2', 'Tech3', 'Tech4'],
    link: 'https://your-live-project.com',
    github: 'https://github.com/yourusername/project',
  },
  // Add more projects...
]
```

### 4. Skills Section
**File**: `components/Skills.tsx`
```typescript
const skillCategories = [
  {
    title: 'Your Skill Category',
    skills: [
      { name: 'Your Skill', level: 90 },
      { name: 'Another Skill', level: 85 },
      // Add your skills with proficiency levels (0-100)
    ],
  },
  // Add more categories...
]
```

### 5. Experience Section
**File**: `components/Experience.tsx`
```typescript
const experiences = [
  {
    id: 1,
    company: 'Your Company Name',
    position: 'Your Job Title',
    duration: 'Start Date - End Date',
    description: 'Description of your role and achievements.',
    technologies: ['Tech1', 'Tech2'],
    type: 'work', // or 'education'
  },
  // Add more experiences...
]
```

### 6. Projects Section
**File**: `components/Projects.tsx`
```typescript
const allProjects = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Project description',
    image: '/img/project-1.png', // Add more project images
    technologies: ['Tech1', 'Tech2'],
    link: 'https://project-link.com',
    github: 'https://github.com/username/project',
    category: 'web', // web, mobile, desktop, etc.
  },
  // Add all your projects...
]
```

### 7. Contact Information
**File**: `components/Contact.tsx`
```typescript
// Update your contact details
<a
  href="mailto:your.email@example.com"
  className="flex items-center text-secondary-600 hover:text-primary-600"
>
  <EnvelopeIcon className="w-5 h-5 mr-3" />
  your.email@example.com
</a>

<a
  href="tel:+1234567890"
  className="flex items-center text-secondary-600 hover:text-primary-600"
>
  <PhoneIcon className="w-5 h-5 mr-3" />
  +1 (234) 567-890
</a>

// Update social media links
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/yourusername', icon: Twitter },
]
```

### 8. Navigation Logo
**File**: `components/Navbar.tsx`
```typescript
// Update your initials or name
<motion.a>
  YI {/* Your Initials */}
</motion.a>
```

## 🎨 Customizing Colors

### Primary Colors
**File**: `tailwind.config.js`
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#your-color-50',
        100: '#your-color-100',
        // ... add your brand colors
        900: '#your-color-900',
      },
    },
  },
}
```

## 📝 Step-by-Step Customization Process

### Step 1: Prepare Your Images
1. Create a professional profile photo (400x400px)
2. Take screenshots or create mockups of your best projects
3. Design a simple favicon with your initials
4. Save all images in the `public/img/` folder

### Step 2: Update Personal Information
1. Open `app/layout.tsx` and update metadata
2. Modify `components/Hero.tsx` with your name and description
3. Update contact details in `components/Contact.tsx`

### Step 3: Add Your Projects
1. Edit `components/FeaturedWork.tsx` for your top 3 projects
2. Expand `components/Projects.tsx` with all your work
3. Ensure all project links and GitHub URLs are correct

### Step 4: Customize Skills & Experience
1. List your technical skills in `components/Skills.tsx`
2. Add your work experience in `components/Experience.tsx`
3. Include education if relevant

### Step 5: Test Everything
1. Run `npm run dev` to start the development server
2. Check all sections display correctly
3. Test all links work properly
4. Verify images load correctly

## 🚀 Additional Customizations

### Adding New Sections
Create new components in the `components/` folder and import them in `app/page.tsx`.

### Changing Animations
Modify Framer Motion animations in individual components.

### SEO Optimization
Update metadata in `app/layout.tsx` for better search engine visibility.

### Performance
- Optimize images using Next.js Image component
- Use WebP format for better compression
- Minimize bundle size by removing unused dependencies

## 🧹 Project Structure (Clean & Optimized)

Your portfolio now uses the correct Next.js structure:
```
Portfolio-Advance/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout & metadata
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global styles & Tailwind
├── components/           # React components
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section
│   ├── FeaturedWork.tsx # Featured projects
│   ├── Projects.tsx     # All projects
│   ├── Skills.tsx       # Skills section
│   ├── Experience.tsx   # Experience timeline
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
├── public/              # Static assets (Next.js serves these)
│   └── img/            # Your images (favicon, profile, projects)
├── package.json        # Dependencies & scripts
├── tailwind.config.ts  # Tailwind configuration
├── next.config.js     # Next.js configuration
├── tsconfig.json      # TypeScript configuration
└── CUSTOMIZATION_GUIDE.md # This guide
```

**✅ Structure Fixes Applied:**
- Removed duplicate `img/` folder (keeping only `public/img/`)
- Removed duplicate `tailwind.config.js` (using TypeScript version)
- Cleaned unnecessary documentation files from images folder
- Verified all components are properly structured

## 📋 Checklist Before Going Live

- [ ] All images replaced with your own
- [ ] Personal information updated everywhere
- [ ] Project links and GitHub URLs working
- [ ] Contact information correct
- [ ] Social media links updated
- [ ] Favicon updated
- [ ] SEO metadata customized
- [ ] All sections tested on mobile and desktop
- [ ] No placeholder text remaining
- [ ] Performance optimized

## 🛠️ Troubleshooting

### Images Not Loading
- Ensure images are in `public/img/` folder
- Check file names match exactly in code
- Verify image formats are supported (JPG, PNG, WebP)

### Links Not Working
- Check URLs are complete (include https://)
- Test all external links
- Verify email addresses are correct

### Styling Issues
- Clear browser cache
- Check for CSS conflicts
- Verify Tailwind classes are correct

---

**Need Help?** 
Check the component files for examples and patterns to follow when customizing your portfolio.
