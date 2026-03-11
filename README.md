# Worksthal Landing Page

A premium, high-performance landing page built with Next.js 15, React, and modern UI components.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Premium UI Components**: Integration with MagicUI, Cult-UI, and shadcn/ui
- **Dark/Light Theme**: Animated theme toggler with smooth transitions
- **Performance Optimized**: 
  - Lazy loading and code splitting
  - Optimized animations with GPU acceleration
  - Image optimization with Next.js Image
  - Tree-shaking and bundle optimization
- **Smooth Animations**: 
  - Scroll-triggered animations with Intersection Observer
  - Page load transitions
  - Micro-interactions and hover effects
- **Fully Responsive**: Mobile-first design with breakpoints for all devices
- **Accessibility**: WCAG AA compliant with keyboard navigation support
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML

## 📦 Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS

### UI Components
- **shadcn/ui** - Base component library
- **MagicUI** - Animated components (Bento Grid, Light Rays, etc.)
- **Cult-UI** - Advanced components (Expandable Screen)
- **Lucide React** - Icon library
- **Tabler Icons** - Additional icons
- **Framer Motion** - Animation library

### Utilities
- **next-themes** - Theme management
- **clsx** - Conditional classnames
- **tailwind-merge** - Merge Tailwind classes

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#22D3EE) - Modern, tech-forward
- **Secondary**: Sky Blue (#38BDF8) - Supporting accent
- **Accent**: Teal (#14B8A6) - Highlights
- **Background**: Slate (#0F172A dark, #F8FAFC light)

### Typography
- **Headings**: Playfair Display (Serif) - Elegant, authoritative
- **Body**: Inter (Sans-serif) - Clean, readable

## 📂 Project Structure

```
worksthal-landing-page/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page with sections
│   └── globals.css         # Global styles and utilities
├── components/
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── TechStack.tsx
│   │   └── Contact.tsx
│   ├── ui/                 # Reusable UI components
│   ├── OptimizedImage.tsx  # Image optimization wrapper
│   ├── BackgroundManager.tsx # Background transitions
│   └── theme-provider.tsx  # Theme context provider
├── hooks/
│   └── useScrollAnimation.ts # Scroll animation hook
└── lib/
    └── utils.ts            # Utility functions
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd worksthal-landing-page
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 🎯 Key Sections

### Hero Section
- Eye-catching headline with gradient text
- Light Rays animated background
- Clear CTAs for engagement
- Social proof metrics

### Services Section
- Bento Grid layout for visual hierarchy
- Flickering Grid background
- Service cards with icons and descriptions
- Hover effects and animations

### About Section
- Animated metrics with NumberTicker
- Value proposition cards
- "Why AI" explanation
- Trust-building content

### Tech Stack Section
- Visual representation of technologies
- Dot Pattern background
- Interactive hover states
- Technology categories

### Contact Section
- Expandable full-screen form
- Light Rays background (rotated)
- Form validation
- Contact information cards

## ⚡ Performance Optimizations

- **Code Splitting**: Automatic with Next.js App Router
- **Image Optimization**: Next.js Image with AVIF/WebP
- **Font Optimization**: Google Fonts with `next/font`
- **Animation Performance**: 
  - `will-change` for GPU acceleration
  - `transform3d` for hardware acceleration
  - Reduced animation durations
- **Bundle Size**: Tree-shaking and package optimization
- **Lazy Loading**: Components and images load on demand

## 🎨 Customization

### Colors
Edit `app/globals.css` to customize the color palette:
```css
:root {
  --primary: 189 94%; /* Cyan */
  --secondary: 199 89%; /* Sky */
  /* ... */
}
```

### Typography
Modify fonts in `app/layout.tsx`:
```typescript
const inter = Inter({ /* ... */ });
const playfair = Playfair_Display({ /* ... */ });
```

### Content
Update section content in `components/sections/` files.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

Copyright © 2026 Worksthal. All rights reserved.

## 🤝 Contributing

This is a private project for Worksthal. For inquiries, contact: admin@worksthal.com

---

Built with ❤️ by Worksthal
