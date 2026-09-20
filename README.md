# Modern Developer Portfolio

A modern, responsive portfolio website built with Next.js 15, TailwindCSS, and Shadcn/ui. Features a clean design, dark mode support, and smooth animations.

![Portfolio Preview](https://bayburt.lu/portfolio/portfolio.png)

## Features

- 🎨 Modern and Clean Design
- 🌓 Dark/Light Mode Support
- 📱 Fully Responsive Layout
- ⚡ Fast Performance & SEO Optimized
- 🎬 Smooth Animations with Framer Motion
- 📝 Blog Support with MDX
- 🎵 Spotify Integration
- 🔄 Project Filtering & Sorting
- 🛠 Built with:
  - Next.js 15
  - TypeScript
  - TailwindCSS
  - Shadcn/ui
  - Framer Motion
  - MDX
  - Lucide Icons
  - Nodemailer (Email integration)

## Pages & Features

- 🏠 **Home** - Hero section with quick links and Spotify integration
- 👤 **About** - Personal introduction and featured projects
- 💻 **Skills** - Technical skills and expertise
- 🎓 **Education** - Academic background and achievements
- 💼 **Experience** - Work experience and internships
- 🚀 **Projects** - Portfolio with:
  - Tag-based filtering
  - Star-based sorting
  - GitHub integration
  - Live demo links
- 📝 **Blog** - MDX-powered blog with:
  - Tag filtering
  - Responsive images
  - Code syntax highlighting
  - SEO optimization
- 🏆 **Achievements** - Awards and volunteer work
- 📬 **Contact** - Contact form with Nodemailer SMTP integration and social links

## Getting Started

1. Clone this repository:

```bash
git clone https://github.com/byigitt/portfolio.git
```

2. Install dependencies:

```bash
npm install --legacy-peer-deps
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Configure your SMTP settings in `.env.local`:
- `SMTP_HOST`: `smtp.gmail.com`
- `SMTP_PORT`: `587`
- `SMTP_USER`: `your_email@gmail.com`
- `SMTP_PASS`: `your_google_app_password`
- `CONTACT_EMAIL`: `your_destination_email@gmail.com`


4. Update your information:

   - Edit `src/data/projects.ts` for your projects
   - Add blog posts in `content/blog`
   - Modify content in page components under `src/app`
   - Update social links in components

5. Generate blog data:

```bash
pnpm generate:blog
```

6. Run the development server:

```bash
pnpm dev
```

7. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── content/           # Blog posts and content
├── public/           # Static assets
├── scripts/         # Build and generation scripts
├── src/
│   ├── app/        # Next.js 15 app directory
│   ├── components/ # React components
│   ├── data/       # Project data and configuration
│   ├── lib/        # Utility functions
│   └── styles/     # Global styles
```

## Customization

### Content

- Update personal information in respective page components
- Modify projects in `src/data/projects.ts`
- Edit navigation items in `src/components/layout/navbar.tsx`
- Add blog posts as MDX files in `content/blog`

### Styling

- Theme colors in `src/app/globals.css`
- Component styling uses Tailwind classes
- Shadcn/ui components can be customized in `components.json`

### Configuration

- SEO settings in `src/app/layout.tsx`
- Site metadata in page layouts
- Environment variables in `.env.local`

## Deployment

The easiest way to deploy your portfolio is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/byigitt/portfolio)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT License](LICENSE) - feel free to use this for your own portfolio!

## Credits

- UI Components: [shadcn/ui](https://ui.shadcn.com)
- Icons: [Lucide](https://lucide.dev)
- Animations: [Framer Motion](https://www.framer.com/motion)
- Blog Support: [MDX](https://mdxjs.com)
