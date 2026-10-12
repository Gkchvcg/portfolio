# Maroof Husain — Production Developer Portfolio

<div align="center">

[![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![LeetCode](https://img.shields.io/badge/LeetCode-500%2B_Solved-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/MaroofHusain/)

**Building software that solves real problems.**

*Computer Science & Engineering Undergraduate · SDE Aspirant · Full-Stack & AI Systems Builder*

[GitHub](https://github.com/Gkchvcg) · [LinkedIn](https://www.linkedin.com/in/maroof-husain-arima/) · [LeetCode](https://leetcode.com/u/MaroofHusain/) · [Resume PDF](public/Maroof_Husain_Resume.pdf)

</div>

---

## 🌟 Overview

This repository hosts the official, production-ready personal developer portfolio for **Maroof Husain**, a Computer Science and Engineering undergraduate at **Dr. A.P.J. Abdul Kalam Technical University (2023–2027)** with a **7.9/10 CGPA** and **500+ LeetCode algorithmic problems solved**.

Engineered from scratch using modern web standards:
- **Next.js 16 (App Router)** with Turbo bundler and static optimization
- **TypeScript** for strict type safety
- **Tailwind CSS v4** design tokens with dark-first technical aesthetics
- **Interactive PDF Viewer & Resume Download** directly accessible in-browser
- **Complete Projects Directory** cataloging all 15 public GitHub repositories with real-time keyword search and category filters

---

## 🚀 Key Features

- **Integrated Resume System**: Prominently downloadable PDF (`Maroof_Husain_Resume.pdf`, 719 KB) and in-browser modal viewer with toolbar controls.
- **15 Public GitHub Repositories**: Complete inventory across Full Stack, Machine Learning, Data Analytics, Mobile Android, and Backend Systems.
- **System Architecture Spotlights**:
  - **DataKart**: Decentralized AI dataset aggregation marketplace (Next.js 14, Solidity, Llama-3, BLIP Vision AI, NudeNet, Polygon Amoy).
  - **Flatmate Finder**: Full-stack roommate matching monorepo with Llama AI preference scoring (React, Vite, Express, MongoDB, JWT).
  - **SafeVault**: Enterprise banking fraud detection with XGBoost and Isolation Forest anomaly detection.
  - **Campus Lost & Found**: Native Android recovery app (Kotlin, Jetpack Compose, Room DB, Hilt, MVVM).
- **Interactive Projects Directory (`/projects`)**: Real-time debounced search, 8 category filter tabs with dynamic counters, and compact/grid view switcher.
- **Deep Case Study Drawer (`ProjectModal`)**: Displays engineering problem statements, architectural solutions, verified technology tags, and source code links.
- **Theme Modes**: Seamless toggling between Dark, Light, and System modes with zero layout shift.
- **SEO & Production Optimized**: Dynamic `sitemap.xml`, `robots.txt`, Open Graph metadata, and responsive layouts verified on desktop and mobile viewports.

---

## 🛠️ Complete Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Framework & Core** | Next.js 16 (App Router), React 19, TypeScript |
| **Styling & Design** | Tailwind CSS v4, Lucide Icons, Custom Brand SVGs |
| **Languages** | Python, JavaScript, Java, C, SQL, TypeScript, Solidity, Kotlin |
| **Frameworks** | React, Next.js, FastAPI, Flask, Express.js, Django, Spring Boot |
| **Databases** | MongoDB, PostgreSQL, SQLite, Mongoose, Room DB |
| **AI / ML & Analytics**| Llama-3, BLIP Vision AI, XGBoost, Scikit-learn, Meta Prophet, Pandas, NumPy |
| **Web3 & Cloud** | Solidity Smart Contracts, Polygon Amoy, Wagmi, RainbowKit, AWS, Docker |

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── Maroof_Husain_Resume.pdf   # Verified source resume document (719 KB)
│   └── images/
│       ├── datakart-architecture.png # DataKart system architecture blueprint
│       └── avatar.jpg                # Verified GitHub profile avatar
├── src/
│   ├── app/
│   │   ├── globals.css            # Tailwind 4 design system & theme tokens
│   │   ├── layout.tsx             # Root layout with SEO metadata & ThemeProvider
│   │   ├── page.tsx               # Homepage assembling all 6 core sections
│   │   ├── projects/
│   │   │   └── page.tsx           # Dedicated /projects searchable directory
│   │   ├── robots.ts              # Search engine robots.txt
│   │   └── sitemap.ts             # Dynamic sitemap generator
│   ├── components/
│   │   ├── About.tsx              # University background, CGPA, and core pillars
│   │   ├── CodingProfiles.tsx     # LeetCode (500+), GitHub, LinkedIn, HackerRank
│   │   ├── ContactSection.tsx     # Direct mailto, phone, verified social links
│   │   ├── EducationCertifications.tsx # AKTU B.Tech, Deloitte Forage, Udemy, Tata
│   │   ├── FeaturedProjects.tsx   # Spotlights for DataKart, Flatmate Finder, SafeVault
│   │   ├── Footer.tsx             # Dynamic year, navigation, and signature
│   │   ├── Hero.tsx               # Animated descriptors, CTAs, architecture diagram
│   │   ├── Navbar.tsx             # Responsive header with mobile drawer & theme switcher
│   │   ├── ProjectCard.tsx        # Project card with case study triggers & tags
│   │   ├── ProjectDirectoryClient.tsx # Search, category & tech filters
│   │   ├── ProjectModal.tsx       # Expandable case study drawer
│   │   ├── ResumeModal.tsx        # In-browser PDF preview modal
│   │   ├── ThemeProvider.tsx      # Dark / Light / System theme state
│   │   ├── ThemeToggle.tsx        # Theme switcher buttons
│   │   └── icons/BrandIcons.tsx   # Pixel-perfect Brand SVGs
│   ├── data/
│   │   └── portfolioData.ts       # Centralized single source of truth configuration
│   └── types/
│       └── index.ts               # TypeScript data interfaces
└── package.json
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- Node.js `v20+` or `v22+`
- npm `v10+`

### 2. Clone Repository
```bash
git clone https://github.com/Gkchvcg/portfolio.git
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 5. Production Build
```bash
npm run build
npm run start
```

---

## 🚀 Deployment to Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com):

1. **Push to GitHub**:
   Ensure the latest commits are pushed to `main` branch.
2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select the `Gkchvcg/portfolio` repository
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `next build`
   - Output Directory: `.next`
3. **Deploy**:
   Click **Deploy**. Your resume and all 15 repositories will be live on Vercel Edge Network instantly!

---

## 📬 Contact & Connect

- **Email**: [maroofhusain2005@gmail.com](mailto:maroofhusain2005@gmail.com)
- **Phone**: +91 7355284571
- **GitHub**: [github.com/Gkchvcg](https://github.com/Gkchvcg)
- **LinkedIn**: [linkedin.com/in/maroof-husain-arima](https://www.linkedin.com/in/maroof-husain-arima/)
- **LeetCode**: [leetcode.com/u/MaroofHusain](https://leetcode.com/u/MaroofHusain/)

© 2026 Maroof Husain. All rights reserved.
