# Editorial Portfolio

A clean, modular, and magazine-inspired portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🏗️ Architecture

### Modular Structure
The codebase is organized into clean, reusable modules:

```
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page using modular sections
│   └── globals.css         # Global styles and magazine elements
├── components/
│   ├── sections/           # Modular page sections
│   │   ├── work-section.tsx
│   │   ├── about-section.tsx
│   │   ├── skills-section.tsx
│   │   ├── data-section.tsx
│   │   ├── contact-section.tsx
│   │   └── index.ts        # Section exports
│   ├── cal-booking.tsx     # Cal.com integration
│   ├── cal-modal.tsx       # Calendar modal
│   ├── floating-nav.tsx    # Navigation component
│   ├── hero-section.tsx    # Hero section
│   ├── magazine-elements.tsx # Magazine UI components
│   ├── magazine-loader.tsx # Loading animation
│   ├── theme-provider.tsx  # Theme management
│   ├── theme-toggle.tsx    # Dark/light mode toggle
│   └── [widget-components] # Data widgets
└── data/
    └── user-data.ts        # Centralized data configuration
```

## 🎨 Features

### Magazine-Inspired Design
- **Editorial Layout**: Professional magazine-style typography and spacing
- **Magazine Elements**: Bylines, drop caps, sidebars, stats grids
- **Loading Animation**: Magazine-themed loading screen
- **Dark Mode**: Kindle-like grayish dark theme with system detection

### Modular Components
- **Section-Based**: Each page section is a separate, reusable component
- **Clean Imports**: Organized imports through index files
- **Type Safety**: Full TypeScript support throughout

### Data-Driven
- **Centralized Configuration**: All content managed through `user-data.ts`
- **Dynamic Content**: Components automatically use data from configuration
- **Easy Customization**: Change content without touching component code

## 🚀 Quick Start

### 1. Customize Your Data
Edit `/data/user-data.ts` to update:
- Personal information (name, role, location, contact)
- Projects and work samples
- Skills and technologies
- About section content
- Magazine branding

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

### 4. Build for Production
```bash
npm run build
```

## 📝 Customization Guide

### Personal Information
```typescript
personal: {
  name: "Your Name",
  role: "Your Role",
  location: "Your City",
  email: "your@email.com",
  twitter: "@yourhandle",
  github: "github.com/yourusername",
  calUsername: "your-cal-username"
}
```

### Projects
```typescript
projects: [
  {
    id: "1",
    title: "Project Name",
    description: "Project description...",
    technologies: ["React", "TypeScript", "Next.js"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/you/project",
    year: "2024",
    type: "Web Application",
    duration: "3",
    teamSize: "2"
  }
]
```

### Skills & Technologies
```typescript
skills: {
  categories: {
    skills: ["Skill 1", "Skill 2", "Skill 3"],
    technologies: ["Tech 1", "Tech 2", "Tech 3"]
  },
  tags: ["Frontend", "Backend", "Design"]
}
```

## 🎯 Key Components

### Magazine Elements
- `MagazineByline`: Author, date, and read time
- `MagazineDropCap`: Large first letter for paragraphs
- `MagazineSidebar`: Highlighted content boxes
- `MagazineStats`: Statistics grid display
- `MagazineColumnBreak`: Section separators
- `MagazineReadingTime`: Time estimates
- `MagazineTags`: Topic tags

### Sections
- `WorkSection`: Project showcase with detailed cards
- `AboutSection`: Personal information and stats
- `SkillsSection`: Skills and technologies
- `DataSection`: Live data widgets (GitHub, Spotify, etc.)
- `ContactSection`: Contact information and Cal.com booking

### Theme System
- **Dark/Light Mode**: Toggle between themes
- **System Detection**: Automatically follows user's system preference
- **Kindle-Style Dark**: Grayish dark theme for comfortable reading
- **CSS Variables**: Consistent theming throughout

## 🔧 Technical Details

### Built With
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework
- **next-themes**: Theme management
- **Cal.com**: Meeting scheduling integration

### Performance
- **Modular Loading**: Components load only when needed
- **Optimized Images**: Next.js image optimization
- **Fast Loading**: Magazine-themed loading animation
- **Responsive Design**: Works on all screen sizes

### Code Quality
- **Clean Architecture**: Modular, maintainable code structure
- **Type Safety**: Full TypeScript coverage
- **Consistent Styling**: CSS variables and design system
- **Reusable Components**: DRY principles throughout

## 📱 Responsive Design

The portfolio is fully responsive with:
- **Mobile-First**: Optimized for mobile devices
- **Tablet Support**: Proper layouts for medium screens
- **Desktop Enhancement**: Full features on large screens
- **Touch-Friendly**: Proper touch targets and interactions

## 🎨 Customization Tips

1. **Colors**: Update CSS variables in `globals.css` for custom colors
2. **Typography**: Modify font families and sizes in the CSS
3. **Layout**: Adjust section order in `page.tsx`
4. **Content**: All content changes go through `user-data.ts`
5. **Components**: Add new sections in `/components/sections/`

## 📄 License

This project is open source and available under the MIT License.
