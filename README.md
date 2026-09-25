<p align="center" width="100%">
    <img height="100" src="https://github.com/said7388/developer-portfolio/assets/77630868/c0064908-cd5f-4751-a77c-eba90a62b55c">
</p>

<h1 align="center">Han Yawei - Software Engineer</h1>

<p align="center">
  <strong>A personal portfolio built with Next.js, React and Tailwind CSS</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2.7-black?style=for-the-badge&logo=next.js" alt="Next.js 16.2.7">
  <img src="https://img.shields.io/badge/React-19.2.7-blue?style=for-the-badge&logo=react" alt="React 19.2.7">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS 4">
  <img src="https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge" alt="License">
</p>

<p align="center">
  <a href="#demo-movie_camera">Demo</a> •
  <a href="#features-sparkles">Features</a> •
  <a href="#installation-arrow_down">Installation</a> •
  <a href="#usage-joystick">Usage</a> •
  <a href="#deployment-rocket">Deployment</a> •
  <a href="#tutorials-wrench">Tutorials</a>
</p>

---

## Overview

This portfolio is configured for Han Yawei and based on the [Developer Portfolio template](https://github.com/said7388/developer-portfolio). Content lives in `utils/data/`, and the profile photo is `public/han-yawei.jpg`. No phone number or CV is published. The blog stays hidden until a dev.to username is provided; visitors can make contact by email.

---

## GitHub Pages

This repository deploys a static export at `https://hyw007726.github.io/han_portfolio/`. The workflow in `.github/workflows/deploy-pages.yml` builds on pushes to `main`, sets `NEXT_PUBLIC_BASE_PATH=/han_portfolio`, and publishes `.next-pages/`. Enable **Settings → Pages → Build and deployment → Source: GitHub Actions** in your own repository. The Pages website is publicly accessible even if the source repository is private.

To check the export locally in PowerShell:

```powershell
npm ci
$env:NEXT_PUBLIC_BASE_PATH = '/han_portfolio'
npm run build
Remove-Item Env:NEXT_PUBLIC_BASE_PATH
```

If the repository name changes, update `NEXT_PUBLIC_BASE_PATH` in the workflow. A regular `npm run dev` still serves the site at `http://localhost:3000`. GitHub Pages does not run Next.js API routes, so contact is through an email link, not a form.

---

## Demo :movie_camera:

The screenshot and link below show the original template, not this personalized portfolio.

<p align="center">
  <img src="./public/image/screen.png" alt="Portfolio Screenshot" width="100%">
</p>

<p align="center">
  <a href="https://abusaid.netlify.app/" target="_blank">
    <strong>View original template demo</strong>
  </a>
</p>

---

## Features :sparkles:

- ✅ **Cutting-Edge Tech Stack**: Built with Next.js 16, React 19, and Tailwind CSS 4
- ✅ **Fully Responsive**: Optimized for all devices and screen sizes
- ✅ **SEO Optimized**: Better visibility on search engines with Next.js metadata API
- ✅ **Fast Static Pages**: Pre-rendered at build time for GitHub Pages
- ✅ **App Router**: Uses the modern Next.js App Router architecture
- ✅ **Easy Customization**: Simple data-driven configuration
- ✅ **Email Contact**: Direct link to your mail app
- ✅ **Optional Blog**: Fetches posts from dev.to at build time when configured
- ✅ **Dark Theme**: Beautiful gradient design with Lottie animations
- ✅ **Docker Support**: Easy containerized deployment
- ✅ **Google Analytics**: Track visitor insights with GTM support

---

## Next.js 16 Features Used :rocket:

This portfolio leverages the latest Next.js 16 and React 19 capabilities:

| Feature                  | Benefit                                                      |
| ------------------------ | ------------------------------------------------------------ |
| **App Router**           | Modern routing with layouts and nested routes                |
| **Server Components**    | Improved performance with zero JavaScript for static content |
| **Metadata API**         | Enhanced SEO with type-safe metadata                         |
| **Image Components**     | Responsive images with static hosting support                |
| **Font Optimization**    | Automatic font loading with `next/font`                      |
| **React 19 Features**    | Actions, use hook, and improved hydration                    |

---

## Sections :bookmark:

| Section           | Description                                         |
| ----------------- | --------------------------------------------------- |
| 🦸 **Hero**       | Eye-catching introduction with animated elements    |
| 👤 **About Me**   | Personal information and professional summary       |
| 💼 **Experience** | Work history and professional accomplishments       |
| 🛠️ **Skills**     | Technical skills with animated marquee display      |
| 🚀 **Projects**   | Showcase your best work with descriptions and links |
| 🎓 **Education**  | Academic background and certifications              |
| 📝 **Blog**       | Optional articles from dev.to, fetched at build time |
| 📧 **Contact**    | Direct email link                                   |

---

## Table of Contents :scroll:

- [Overview](#overview)
- [GitHub Pages](#github-pages)
- [Demo](#demo-movie_camera)
- [Features](#features-sparkles)
- [Sections](#sections-bookmark)
- [Tech Stack](#tech-stack-computer)
- [Installation](#installation-arrow_down)
- [Getting Started](#getting-started-dart)
- [Usage](#usage-joystick)
- [Deployment](#deployment-rocket)
- [Tutorials](#tutorials-wrench)
  - [Fetching Blog from dev.to](#fetching-blog-from-devto)
- [Packages Used](#packages-used-package)
- [Contributing](#contributing-handshake)
- [License](#license-page_with_curl)
- [Support](#support-coffee)

---

## Tech Stack :computer:

| Technology       | Version | Purpose                                   |
| ---------------- | ------- | ----------------------------------------- |
| **Next.js**      | 16.2.7  | React framework with App Router           |
| **React**        | 19.2.7  | UI component library with latest features |
| **Tailwind CSS** | 4.x     | Utility-first CSS framework               |
| **SASS**         | Latest  | CSS preprocessor                          |
| **Lottie**       | Latest  | Lightweight animations                    |
| **Docker**       | -       | Containerization platform                 |

---

## Installation :arrow_down:

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

| Tool                   | Minimum Version | Download Link                               |
| ---------------------- | --------------- | ------------------------------------------- |
| **Node.js**            | v20.9.0+       | [Download](https://nodejs.org/en/download/) |
| **Git**                | Latest          | [Download](https://git-scm.com/downloads)   |
| **pnpm** (recommended) | Latest          | [Install](https://pnpm.io/installation)     |

> **Note**: The GitHub Pages workflow uses Node.js 22.

#### Verify Installation

Check your installations with these commands:

```bash
node --version
git --version
pnpm --version  # or npm --version
```

---

## Getting Started :dart:

### 1. Fork and Clone the Repository

```bash
git clone https://github.com/hyw007726/han_portfolio.git
cd han_portfolio
```

### 2. Install Dependencies

```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm ci

# Using yarn
yarn install
```

### 3. Set Up Environment Variables

```bash
cp .env.example .env
```

Edit the `.env` file with your values (see [Usage](#usage-joystick) section).

### 4. Run the Development Server

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 🐳 Docker Deployment (Alternative)

#### Option 1: Using Docker Compose (Recommended)

```bash
docker-compose up --build

# Run in detached mode
docker-compose up -d --build

# Stop
docker-compose down
```

#### Option 2: Using Docker Directly

**For Development:**

```bash
# Build the development image
docker build -t developer-portfolio:dev -f Dockerfile.dev .

# Run the container
docker run -p 3000:3000 --name portfolio-dev developer-portfolio:dev

# Stop and remove container
docker stop portfolio-dev && docker rm portfolio-dev
```

**For Production:**

```bash
# Build the production image
docker build -t developer-portfolio:prod -f Dockerfile.prod .

# Run the production container
docker run -p 3000:3000 --name portfolio-prod developer-portfolio:prod
```

---

## Usage :joystick:

### Environment Variables Configuration

Only Google Tag Manager is optional. If needed, create a `.env` file in the root directory:

```env
# Google Tag Manager (Optional - for analytics)
NEXT_PUBLIC_GTM=GTM-XXXXXXX

```

#### Variable Descriptions:

| Variable              | Required | Description                                  |
| --------------------- | -------- | -------------------------------------------- |
| `NEXT_PUBLIC_GTM`     | No       | Google Tag Manager ID for analytics tracking |
| `NEXT_PUBLIC_BASE_PATH` | Build only | `/han_portfolio` for the Pages project URL |

The Pages workflow sets `NEXT_PUBLIC_BASE_PATH` automatically. Leave it unset in local development so `http://localhost:3000` works. Do not add credentials or private CV files to the repository.

---

### Customize Your Portfolio Data

All portfolio content is managed through data files in the `utils/data/` folder:

#### 📝 Personal Information (`personal-data.js`)

```javascript
export const personalData = {
  name: "YOUR NAME",
  profile: "/your-image-name.jpg", // Path to your profile image
  designation: "Software Developer", // Your job title
  description: "Your bio and introduction...", // About yourself
  email: "your.email@example.com",
  address: "City, Country",
  github: "https://github.com/yourusername",
  facebook: "https://www.facebook.com/yourprofile",
  linkedIn: "https://www.linkedin.com/in/yourprofile",
  twitter: "https://twitter.com/yourusername",
  stackOverflow: "https://stackoverflow.com/users/your-id",
  leetcode: "https://leetcode.com/yourusername/",
  devUsername: "yourusername", // dev.to username for blog integration
};
```

#### 💼 Additional Data Files

| File               | Purpose                                        |
| ------------------ | ---------------------------------------------- |
| `experience.js`    | Your work experience and job history           |
| `projects-data.js` | Portfolio projects with descriptions and links |
| `skills.js`        | Technical skills and competencies              |
| `educations.js`    | Academic background and certifications         |
| `contactsData.js`  | Contact details derived from `personal-data.js` |

#### 🎨 Adding Your Profile Image

Place your profile picture in the `public/` directory and update the `profile` field in `personal-data.js`:

```javascript
profile: "/your-image-name.png"; // or .jpg, .webp
```

To replace this site's photo, update `public/han-yawei.jpg`. Do not place private documents in `public/`: anyone who visits the site can download files there.

---

## Deployment :rocket:

GitHub Pages is configured above. The following options require setting up a separate hosting provider.

### Alternative: Vercel

**Manual Deployment:**

1. Sign up at [Vercel](https://vercel.com/)
2. Import your GitHub repository
3. Add environment variables in **Settings** → **Environment Variables**
4. Deploy

**Features:**

- Native Next.js 16 support
- Automatic deployments on push
- Preview deployments for PRs
- Edge runtime support
- Global CDN and free SSL

---

### Alternative: Netlify

**Manual Deployment:**

1. Sign up at [Netlify](https://www.netlify.com/)
2. Import your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `.next`
5. Add environment variables in **Site Settings** → **Environment**

---

### 🐳 Deploy with Docker

```bash
# Build production image
docker build -t developer-portfolio:prod -f Dockerfile.prod .

# Run
docker run -d -p 80:3000 --name portfolio developer-portfolio:prod

# Or use Docker Compose
docker-compose -f docker-compose.prod.yml up -d
```

---

## Tutorials :wrench:

### 📝 Fetching Blog from dev.to

1. Create a [dev.to](https://dev.to/) account
2. Open `utils/data/personal-data.js`
3. Set your dev.to username:

```javascript
export const personalData = {
  // ... other fields
  devUsername: "yourusername",
};
```

The portfolio fetches public articles at build time; redeploy to refresh them on GitHub Pages. No API key is required.

---

## Packages Used :package:

### Core Dependencies

| Package         | Version | Purpose                                                      |
| --------------- | ------- | ------------------------------------------------------------ |
| **next**        | ^16.0.1 | Latest React framework with App Router and Server Components |
| **react**       | ^19.2.0 | JavaScript library with improved concurrent rendering        |
| **react-dom**   | ^19.2.0 | React package for working with the DOM                       |
| **tailwindcss** | ^4.1.16 | Modern utility-first CSS framework                           |
| **sass**        | Latest  | CSS preprocessor for styling                                 |

### UI & Animations

| Package                | Purpose                                    |
| ---------------------- | ------------------------------------------ |
| **lottie-react**       | Lightweight animations with Lottie files   |
| **react-fast-marquee** | Smooth scrolling marquee component         |
| **react-icons**        | Popular icon library with easy integration |

### Functionality

| Package                    | Purpose                           |
| -------------------------- | --------------------------------- |
| **sharp**                  | High-performance image processing |
| **@next/third-parties**    | Third-party script optimization   |

---

## Troubleshooting :wrench:

### Common Issues and Solutions

<details>
<summary><strong>❌ "next is not recognized as an internal or external command"</strong></summary>

**Solution:**

```bash
# Option 1: Install Next.js globally
npm install -g next

# Option 2: Use npx (recommended)
npx next dev

# Option 3: Use package manager scripts
npm run dev
```

</details>

<details>
<summary><strong>❌ Port 3000 is already in use</strong></summary>

**Solution:**

```bash
# Find and kill the process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port:
PORT=3001 npm run dev
```

</details>

<details>
<summary><strong>❌ Module not found or dependency errors</strong></summary>

**Solution:**

```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Or with pnpm:
rm -rf node_modules pnpm-lock.yaml
pnpm store prune
pnpm install
```

</details>

<details>
<summary><strong>❌ Environment variables not working</strong></summary>

**Solution:**

- Ensure `.env` file is in the root directory
- Restart the development server after changing `.env`
- Check that variables starting with `NEXT_PUBLIC_` are used for client-side code
- Server-side variables should NOT start with `NEXT_PUBLIC_`

</details>

<details>
<summary><strong>❌ Images not loading</strong></summary>

**Solution:**

- Verify images are in the `public/` directory
- Use paths starting with `/` (e.g., `/profile.png`)
- Check image file extensions match the code
- Ensure image files are committed to your repository

</details>

## Contributing :handshake:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/AmazingFeature`
3. Commit changes: `git commit -m 'Add some AmazingFeature'`
4. Push to branch: `git push origin feature/AmazingFeature`
5. Open a Pull Request

---

## License :page_with_curl:

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Support :coffee:

- ⭐ [Star the repository](https://github.com/said7388/developer-portfolio/stargazers)
- � [Report bugs](https://github.com/said7388/developer-portfolio/issues)
- � [Suggest features](https://github.com/said7388/developer-portfolio/discussions)

---

![GitHub stars](https://img.shields.io/github/stars/said7388/developer-portfolio?style=social)
![GitHub forks](https://img.shields.io/github/forks/said7388/developer-portfolio?style=social)
![GitHub issues](https://img.shields.io/github/issues/said7388/developer-portfolio)
![GitHub license](https://img.shields.io/github/license/said7388/developer-portfolio)
