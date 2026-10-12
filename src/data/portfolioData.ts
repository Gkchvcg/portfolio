import { Project, SkillCategory, CodingProfile, Certification, Education } from '@/types';

export const PERSONAL_INFO = {
  name: 'Maroof Husain',
  headline: 'Building software that solves real problems.',
  eyebrow: 'COMPUTER SCIENCE ENGINEER · SOFTWARE DEVELOPER',
  subheading:
    'Computer Science undergraduate specializing in full-stack web applications, AI-integrated systems, data-driven backends, and decentralized blockchain architecture. Passionate about algorithms, robust systems engineering, and shipping clean software.',
  location: 'Lucknow, Uttar Pradesh, India',
  email: 'maroofhusain2005@gmail.com',
  phone: '+91 7355284571',
  resumePath: '/Maroof_Husain_Resume.pdf',
  resumeFilename: 'Maroof_Husain_Resume.pdf',
  githubProfileUrl: 'https://github.com/Gkchvcg',
  avatarUrl: '/images/avatar.jpg',
  typingDescriptors: [
    'Full-Stack Development',
    'Artificial Intelligence',
    'Blockchain & Web3',
    'Data Structures & Algorithms',
  ],
};

export const EDUCATION_DATA: Education = {
  degree: 'B.Tech in Computer Science & Engineering',
  institution: 'Dr. A.P.J. Abdul Kalam Technical University',
  location: 'Lucknow, Uttar Pradesh',
  period: '2023 – 2027',
  cgpa: '7.9 / 10',
  highlights: [
    'Rigorous coursework across Data Structures, Algorithms, DBMS, OS, and Computer Networks',
    'Active focus on full-stack web development, AI engineering, and smart contract architecture',
    'Competitive programming and algorithm optimization with 500+ LeetCode problems solved',
  ],
};

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte (Forage)',
    year: '2024',
    description:
      'Completed practical tasks in exploratory data analysis, business metric interpretation, and presenting actionable analytical insights for enterprise clients.',
  },
  {
    title: 'ChatGPT for DevOps',
    issuer: 'Udemy',
    year: '2024',
    description:
      'Trained on leveraging generative AI and LLM tooling for DevOps automation, CI/CD pipeline optimization, infrastructure scripting, and developer workflows.',
  },
  {
    title: 'Tata GenAI Powered Data Analytics',
    issuer: 'Tata Group',
    year: 'Completion Certificate',
    description:
      'Credentialed in applying modern Generative AI techniques to data manipulation, automated reporting pipelines, and advanced analytical workflows.',
  },
];

export const CODING_PROFILES: CodingProfile[] = [
  {
    name: 'LeetCode',
    platform: 'LeetCode',
    username: 'MaroofHusain',
    url: 'https://leetcode.com/u/MaroofHusain/',
    badgeText: '500+ Problems Solved',
    statsLabel: 'Strong foundation in DSA, Two Pointers, Trees, Graphs, DP',
    icon: 'Code2',
    accentColor: '#FFA116',
  },
  {
    name: 'GitHub',
    platform: 'GitHub',
    username: 'Gkchvcg',
    url: 'https://github.com/Gkchvcg',
    badgeText: '15+ Public Repositories',
    statsLabel: 'Active open-source builder across Full-Stack, AI/ML, and Mobile',
    icon: 'Github',
    accentColor: '#93C5FD',
  },
  {
    name: 'LinkedIn',
    platform: 'LinkedIn',
    username: 'maroof-husain-arima',
    url: 'https://www.linkedin.com/in/maroof-husain-arima/',
    badgeText: 'Professional Network',
    statsLabel: 'Software Development Engineer Aspirant & Tech Discussions',
    icon: 'Linkedin',
    accentColor: '#38BDF8',
  },
  {
    name: 'HackerRank',
    platform: 'HackerRank',
    username: 'maroofhusain2005',
    url: 'https://www.hackerrank.com/profile/maroofhusain2005',
    badgeText: 'Problem Solving & Skills',
    statsLabel: 'Verified problem solving and algorithm challenges',
    icon: 'Terminal',
    accentColor: '#22C55E',
  },
  {
    name: 'CodeChef',
    platform: 'CodeChef',
    username: 'koseuiarima',
    url: 'https://www.codechef.com/users/koseuiarima',
    badgeText: 'Contest Programmer',
    statsLabel: 'Algorithmic contest participation & practice',
    icon: 'Award',
    accentColor: '#F59E0B',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code',
    skills: ['Python', 'JavaScript', 'Java', 'C', 'SQL', 'TypeScript', 'Solidity', 'Kotlin'],
  },
  {
    title: 'Frontend & Full Stack Frameworks',
    iconName: 'Layout',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'Bootstrap', 'jQuery', 'Vite', 'HTML5 / CSS3'],
  },
  {
    title: 'Backend & APIs',
    iconName: 'Server',
    skills: ['Node.js', 'Express.js', 'FastAPI', 'Flask', 'Django', 'Spring Boot', 'RESTful APIs'],
  },
  {
    title: 'Databases & Storage',
    iconName: 'Database',
    skills: ['MongoDB', 'PostgreSQL', 'SQLite', 'Mongoose', 'SQLAlchemy'],
  },
  {
    title: 'AI, Machine Learning & Analytics',
    iconName: 'BrainCircuit',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'TensorFlow',
      'Scikit-learn',
      'XGBoost',
      'Llama-3 LLM',
      'BLIP Vision AI',
      'NudeNet Moderation',
      'Meta Prophet',
    ],
  },
  {
    title: 'Blockchain & Web3',
    iconName: 'Layers',
    skills: ['Solidity Smart Contracts', 'Polygon Amoy', 'Wagmi', 'RainbowKit', 'Hardhat', 'Ethers.js'],
  },
  {
    title: 'Developer Tools & Cloud',
    iconName: 'Wrench',
    skills: ['Git', 'Docker', 'AWS', 'VS Code', 'PyCharm', 'IntelliJ IDEA', 'Eclipse', 'Vercel', 'Render'],
  },
  {
    title: 'Core Computer Science',
    iconName: 'Cpu',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming (OOP)',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
    ],
  },
];

export const ALL_PROJECTS: Project[] = [
  {
    id: 'datakart',
    title: 'DataKart',
    subtitle: 'Decentralized Data Aggregation & AI Training Marketplace',
    description:
      'A decentralized dual-sided marketplace enabling users to securely monetize datasets for AI training while preserving privacy, equipped with Llama-3 AI assistant, BLIP vision analysis, pHash duplicate prevention, and Polygon Amoy smart contracts.',
    longDescription:
      'DataKart addresses the modern AI data ownership crisis by creating a verified bridge between enterprises seeking curated training datasets and individual data sellers. It features automated AI dataset valuation, multi-modal content moderation (NudeNet), perceptual hash deduplication, and automated reward distribution via Polygon smart contracts.',
    problemStatement:
      'AI companies face severe shortages of verified, ethical data while content creators lack direct monetization pipelines and data privacy guarantees.',
    solution:
      'Engineered an end-to-end decentralized data marketplace combining automated computer vision evaluation, content safety filtering, and transparent Web3 escrow contracts for POL/USDC payouts.',
    categories: ['Full Stack', 'AI/ML', 'Developer Tools'],
    technologies: [
      'Next.js 14',
      'React',
      'Tailwind CSS',
      'Python',
      'Flask',
      'Solidity',
      'Polygon Amoy',
      'Wagmi',
      'RainbowKit',
      'Llama-3',
      'BLIP Vision AI',
      'NudeNet',
      'pHash',
    ],
    githubUrl: 'https://github.com/Gkchvcg/DataKart',
    liveDemoUrl: 'https://pde-web-olive.vercel.app/',
    architectureImage: '/images/datakart-architecture.png',
    keyFeatures: [
      'Decentralized dataset monetization with cryptographic privacy protection',
      'Autonomous AI evaluation pipeline using Llama-3 for qualitative assessment',
      'BLIP Vision AI for automatic image captioning and semantic metadata tagging',
      'NudeNet automated NSFW detection and perceptual hashing (pHash) duplicate rejection',
      'Solidity smart contracts deployed on Polygon Amoy for automated POL/USDC escrow payouts',
      'Integrated Karty AI interactive chatbot assistant for buyers and sellers',
    ],
    architectureHighlights: [
      'Frontend built with Next.js 14 App Router and Tailwind CSS for real-time wallet interactions',
      'Flask backend microservice handles compute-intensive computer vision and hash comparison algorithms',
      'Smart contract integration via Wagmi hooks and RainbowKit for multi-chain wallet authentication',
    ],
    featured: true,
    status: 'Completed',
  },
  {
    id: 'flatmate-finder',
    title: 'Flatmate Finder',
    subtitle: 'AI-Powered Roommate Matching & Property Discovery Platform',
    description:
      'Full-stack platform connecting university students and young professionals seeking compatible flatmates and verified property rentals, featuring AI compatibility scoring and authenticated listings.',
    longDescription:
      'A monorepo web platform engineered with a React/Vite client and an Express/MongoDB REST backend. Implements JWT-secured role authentication, listing creation and exploration, and intelligent roommate preference matchmaking powered by Llama AI algorithms.',
    problemStatement:
      'Finding trustworthy flatmates and suitable shared accommodation is traditionally fragmented across informal social groups with zero compatibility screening.',
    solution:
      'Constructed a centralized web service combining structured rental listings with algorithmic roommate matchmaking based on budget, lifestyle habits, and schedule compatibility.',
    categories: ['Full Stack', 'AI/ML'],
    technologies: [
      'React',
      'Vite',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT Auth',
      'Tailwind CSS',
      'Llama AI',
      'Render',
      'Vercel',
    ],
    githubUrl: 'https://github.com/Gkchvcg/Flatmate-Finder',
    liveDemoUrl: 'https://flatmate-finder-eta.vercel.app/',
    keyFeatures: [
      'Algorithmic roommate matchmaking utilizing Llama AI to score lifestyle and budget compatibility',
      'JWT-authenticated protected routes for user profiles, dashboard, and property creation',
      'Full CRUD operations for residential rental listings with photo uploads and amenity filters',
      'Responsive, modern client interface built with React, Vite, and React Router',
      'MongoDB database schemas optimized for geospatial and preference querying',
      'Automated deployment pipelines configured for Vercel frontend and Render API services',
    ],
    architectureHighlights: [
      'Decoupled monorepo architecture with clean separation of frontend SPA and backend API layers',
      'Bcrypt password hashing and secure HTTP bearer token middleware validation',
      'Mongoose validation schemas ensuring high data integrity across listings and user accounts',
    ],
    featured: true,
    status: 'Completed',
  },
  {
    id: 'banking-fraud-analytics',
    title: 'Banking Fraud Analytics (SafeVault)',
    subtitle: 'Dual-Engine ML Fraud Detection & Banking Transaction Intelligence',
    description:
      'Production-grade banking security system combining supervised XGBoost models and unsupervised Isolation Forest anomaly detection to identify and investigate fraudulent financial activity in real time.',
    longDescription:
      'SafeVault is an enterprise-oriented fraud analytics platform. It implements a synthetic transaction generator reflecting realistic fraud vectors, a normalized SQLite relational ledger, and an interactive Streamlit intelligence dashboard with live transaction scoring, merchant risk heatmaps, and audit logs.',
    problemStatement:
      'Modern financial systems face evolving fraud patterns where standard rule-based checks fail to detect novel, distributed attack vectors.',
    solution:
      'Built a hybrid detection pipeline utilizing supervised gradient boosting (XGBoost) for known fraud indicators and unsupervised Isolation Forest for zero-day behavioral anomalies.',
    categories: ['AI/ML', 'Data Analytics', 'Finance'],
    technologies: [
      'Python',
      'Streamlit',
      'XGBoost',
      'Isolation Forest',
      'Scikit-learn',
      'SQLite',
      'Pandas',
      'NumPy',
      'Plotly',
    ],
    githubUrl: 'https://github.com/Gkchvcg/banking-fraud-analytics',
    keyFeatures: [
      'Supervised XGBoost classification for precise probability scoring of known fraud vectors',
      'Unsupervised Isolation Forest algorithm detecting anomalous transaction outliers',
      'Interactive executive dashboard with real-time fraud metrics, precision-recall analysis, and flags',
      'Normalized SQLite relational schemas storing customer profiles, merchant data, and transactions',
      'Dynamic feature engineering covering rolling velocity, geodetic deviations, and amount z-scores',
    ],
    architectureHighlights: [
      'Three-tier architecture: Synthetic Data Layer ➔ Relational Storage ➔ Dual ML Inference Pipeline',
      'Comprehensive confusion matrix and ROC-AUC evaluation metrics visualization',
    ],
    featured: true,
    status: 'Completed',
  },
  {
    id: 'customer-churn-project',
    title: 'Customer Churn Intelligence Dashboard',
    subtitle: 'GridSearch ML Pipeline & Enterprise Churn Risk Intelligence',
    description:
      'Production-grade machine learning application deploying a GridSearch-tuned Decision Tree Classifier pipeline in Streamlit to evaluate individual customer churn probabilities and batch enterprise datasets.',
    longDescription:
      'Developed an end-to-end data science and machine learning solution for telecommunications customer retention. Includes reproducible model training scripts, automated IQR outlier clipping, custom behavioral feature engineering, and an interactive dashboard for marketing and retention teams.',
    problemStatement:
      'Customer churn directly impacts enterprise recurring revenue, yet business teams frequently lack interpretable tooling to proactively detect at-risk accounts.',
    solution:
      'Created an interpretable, calibrated machine learning dashboard allowing staff to test "what-if" parameter adjustments and view the primary drivers behind churn classifications.',
    categories: ['AI/ML', 'Data Analytics'],
    technologies: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'Decision Trees',
      'Pandas',
      'NumPy',
      'Joblib',
      'Plotly',
    ],
    githubUrl: 'https://github.com/Gkchvcg/customer-churn-project',
    keyFeatures: [
      'Single-customer real-time risk assessment with visual probability gauge and tailored recommendations',
      'Bulk CSV batch upload processing with high-throughput inference and exportable risk reports',
      'Feature importance breakdown highlighting key churn triggers (e.g. customer service call frequency, plan type)',
      'Strict preprocessing parity between offline Jupyter exploration and production Streamlit runtime',
    ],
    architectureHighlights: [
      'Scikit-learn Pipeline encapsulating StandardScaler and tuned DecisionTree hyperparameters',
      'Saved JSON metadata maintaining production bounds and categorical encoding consistency',
    ],
    featured: true,
    status: 'Completed',
  },
  {
    id: 'campus-lost-and-found',
    title: 'Campus Lost & Found',
    subtitle: 'Native Android Item Recovery Application with Clean Architecture',
    description:
      'Native Android application engineered for university campuses to report, locate, and recover lost personal belongings, built with Jetpack Compose, Room database, and Hilt dependency injection.',
    longDescription:
      'A fully featured native mobile application adhering to Android architectural guidelines (MVVM + Clean Architecture). Features offline-first local persistence with Room, asynchronous data streaming via Kotlin Coroutines and StateFlow, dynamic Material 3 theming, and multi-category item filtering.',
    problemStatement:
      'University campuses lose hundreds of student belongings daily with no organized or verifiable recovery system.',
    solution:
      'Engineered an intuitive mobile application allowing students to catalog lost items, photograph found articles, and search items with granular location tags.',
    categories: ['Android'],
    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Material 3',
      'MVVM Architecture',
      'Clean Architecture',
      'Room DB',
      'Hilt (Dagger)',
      'Kotlin Coroutines',
      'StateFlow',
      'Coil Image Loader',
      'DataStore',
    ],
    githubUrl: 'https://github.com/Gkchvcg/campus-lost-and-found',
    keyFeatures: [
      'Modern, declarative UI built entirely with Jetpack Compose and Material 3 design tokens',
      'MVVM separation of concerns across Data, Domain, and Presentation layers',
      'Room Database with TypeConverters and DAOs for reliable offline-first local storage',
      'Hilt dependency injection for maintainable, testable module structure',
      'Real-time search and multi-tag filtering across item status (Lost vs. Found) and categories',
      'Coil image integration for snappy asynchronous image rendering',
    ],
    architectureHighlights: [
      'Unidirectional Data Flow (UDF) powered by ViewModel StateFlow states',
      'Repository pattern decoupling local SQLite queries from Compose UI components',
    ],
    featured: true,
    status: 'Completed',
  },
  {
    id: 'movie-recommendation-system',
    title: 'Movie Recommendation System Dashboard',
    subtitle: 'Netflix-Style Recommendation Engines: Content, Collaborative & SVD',
    description:
      'Interactive cinema recommendation platform implementing three distinct recommendation algorithms from scratch: TF-IDF Content-Based Filtering, Pearson Item-Item Collaborative Filtering, and SVD Matrix Factorization.',
    longDescription:
      'A Netflix-style Streamlit web dashboard built on the MovieLens Latest Small dataset. Allows users to benchmark different machine learning recommendation paradigms side-by-side, inspect cosine similarity vectors, and explore personalized movie suggestions.',
    problemStatement:
      'Understanding the mathematical trade-offs between content metadata filtering versus user-behavior matrix factorization in recommendation engines.',
    solution:
      'Implemented each algorithm from mathematical first principles and visualized their ranking decisions on an interactive cinematic UI.',
    categories: ['AI/ML', 'Data Analytics'],
    technologies: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'TF-IDF Vectorizer',
      'Cosine Similarity',
      'Pearson Correlation',
      'SVD (Surprise / Scipy)',
      'Pandas',
      'NumPy',
    ],
    githubUrl: 'https://github.com/Gkchvcg/movie-recommendation-system',
    keyFeatures: [
      'Content-Based Filtering using TF-IDF genre and tag vectors with Cosine Similarity',
      'Item-Item Collaborative Filtering calculating Pearson correlation over sparse user-item rating matrices',
      'Singular Value Decomposition (SVD) latent-factor dimensionality reduction for collaborative predictions',
      'Polished Netflix-inspired dark UI with poster representations and interactive recommendation controls',
    ],
    architectureHighlights: [
      'Automated dataset fetching and caching for the MovieLens benchmark dataset',
      'Sparse matrix memory optimization for responsive real-time cosine calculations in Streamlit',
    ],
    featured: true,
    status: 'Completed',
  },
  {
    id: 'spendwise',
    title: 'SpendWise Multi-Platform Finance Manager',
    subtitle: 'Cross-Platform Personal Expense & Budget Management Solution',
    description:
      'Dual-client personal finance system featuring a native Kotlin/Jetpack Compose Android app and a React/TypeScript web dashboard for monitoring expenses, tracking budgets, and analyzing spending patterns.',
    longDescription:
      'SpendWise gives users total visibility into their financial habits. The repository contains both a native Android application engineered with Jetpack Compose and an interactive web frontend built with React, Vite, and TypeScript with Vercel deployment workflows.',
    categories: ['Full Stack', 'Android', 'Finance'],
    technologies: [
      'Kotlin',
      'Android Jetpack',
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'Vercel',
    ],
    githubUrl: 'https://github.com/Gkchvcg/SpendWise',
    keyFeatures: [
      'Cross-platform accessibility across Android smartphones and desktop browsers',
      'Visual expense categorization (Food, Transport, Utilities, Entertainment)',
      'Interactive budget progress tracking and spending velocity warnings',
      'Clean TypeScript interfaces ensuring type-safe client state management',
    ],
    architectureHighlights: [
      'Hybrid repository layout with dedicated Android client and React web application modules',
    ],
    featured: false,
    status: 'Completed',
  },
  {
    id: 'geo-measure-api',
    title: 'Geospatial File Measurement API',
    subtitle: 'Asynchronous GIS File Processing & Geometric Measurement Microservice',
    description:
      'High-performance geospatial backend built with FastAPI that accepts Shapefile archives (.zip) or .kml files, parses vector geometries in the background, and returns automated feature calculations.',
    longDescription:
      'An asynchronous RESTful API engineered for GIS data processing. Clients upload zipped ESRI Shapefiles or Keyhole Markup Language (.kml) files; the service assigns a UUID, queues background workers, calculates perimeter, area, and bounding boxes, and serves structured GeoJSON measurements.',
    categories: ['Backend/API', 'Developer Tools'],
    technologies: [
      'Python 3',
      'FastAPI',
      'Uvicorn',
      'GeoPandas',
      'Shapely',
      'Pydantic',
      'BackgroundTasks',
    ],
    githubUrl: 'https://github.com/Gkchvcg/geo-measure-api',
    keyFeatures: [
      'Multipart file upload handling for Shapefiles (.zip) and Google Earth .kml formats',
      'Non-blocking background calculation of polygon areas, line lengths, and coordinate reference systems (CRS)',
      'UUID-based job status tracking endpoint (/api/files/{id}/)',
      'Fully interactive OpenAPI / Swagger documentation out-of-the-box',
    ],
    architectureHighlights: [
      'FastAPI BackgroundTasks architecture ensuring sub-50ms API response times for file uploads',
    ],
    featured: false,
    status: 'Completed',
  },
  {
    id: 'my-chat-app',
    title: 'Gemini AI Chat Application',
    subtitle: 'Modern Minimalist Conversational Interface with Google Gemini',
    description:
      'A sleek, responsive browser-based conversational assistant powered directly by the Google Gemini API, featuring Markdown formatting, chat history caching, conversation summaries, and smart reply suggestions.',
    longDescription:
      'Engineered with pure vanilla JavaScript, HTML5, and Tailwind CSS without bulky framework overhead. Features marked.js syntax formatting, code block copy utilities, intelligent conversation summarization prompts, and quick-reply action chips.',
    categories: ['AI/ML', 'Full Stack'],
    technologies: [
      'JavaScript (Vanilla)',
      'HTML5',
      'Tailwind CSS',
      'Marked.js',
      'Google Gemini API',
    ],
    githubUrl: 'https://github.com/Gkchvcg/my-chat-app',
    keyFeatures: [
      'Direct client integration with Google Gemini Pro API for high-speed conversational responses',
      'Rich Markdown message rendering with copy-to-clipboard for source code snippets',
      'Conversation summarizer tool generating concise executive recaps of multi-turn dialogues',
      'Suggested contextual follow-up prompts to guide user conversations',
    ],
    architectureHighlights: [
      'Zero-dependency build pipeline running directly in any modern web browser',
    ],
    featured: false,
    status: 'Completed',
  },
  {
    id: 'retail-sales-intelligence',
    title: 'Retail Sales Intelligence Executive Dashboard',
    subtitle: 'Power BI-Style Supply Chain & Demand Forecasting Intelligence Portal',
    description:
      'Interactive business intelligence dashboard built with Streamlit over 10,000+ US Superstore records. Combines indexed SQLite transaction storage, live SQL query playground, and Meta Prophet time-series forecasting.',
    longDescription:
      'Simulates an executive enterprise BI terminal. Analyzes supply chain margins, regional customer profitability, sub-category demand patterns, and uses Meta Prophet forecasting to project future monthly sales volumes.',
    categories: ['Data Analytics', 'Finance'],
    technologies: [
      'Python',
      'Streamlit',
      'SQLite',
      'Meta Prophet',
      'Pandas',
      'Plotly Express',
    ],
    githubUrl: 'https://github.com/Gkchvcg/retail-sales-intelligence',
    keyFeatures: [
      'SQLite relational database indexed on order dates, product categories, and geography',
      'Integrated in-browser SQL query execution interface for custom ad-hoc reporting',
      'Time-series demand forecasting using Meta Prophet with seasonal trend decomposition',
      'Interactive revenue, margin, and discount KPI cards with drill-down charts',
    ],
    architectureHighlights: [
      'Optimized SQL indexing minimizing aggregation query latency across large transaction tables',
    ],
    featured: false,
    status: 'Completed',
  },
  {
    id: 'fake-news-detector',
    title: 'Fake News Classifier',
    subtitle: 'NLP Machine Learning Fake News Detection Web Application',
    description:
      'Natural language processing application utilizing TF-IDF vectorization and a trained Scikit-learn classifier model to predict article authenticity and flag disinformation.',
    longDescription:
      'An end-to-end NLP text classification service built with Python and Streamlit. Vectorizes raw news headlines and body text using a serialized TF-IDF vectorizer and evaluates authenticity with a tuned classification model.',
    categories: ['AI/ML'],
    technologies: [
      'Python',
      'Streamlit',
      'Scikit-learn',
      'TF-IDF Vectorizer',
      'Joblib',
      'NLP Preprocessing',
    ],
    githubUrl: 'https://github.com/Gkchvcg/fake-news-detector',
    keyFeatures: [
      'Interactive text analysis interface with instant credibility scoring',
      'Serialized model pipeline with Joblib for sub-second classification latency',
      'Text normalization covering lowercasing, punctuation stripping, and tokenization',
    ],
    architectureHighlights: [
      'Lightweight web deployment optimized for resource-constrained server instances',
    ],
    featured: false,
    status: 'Completed',
  },
  {
    id: 'bulk-cert-generator',
    title: 'Bulk Certificate Generator API',
    subtitle: 'Asynchronous PDF Certificate Generation Backend Service',
    description:
      'FastAPI backend service designed for mass generation of customized PDF certificates with SQLAlchemy persistence, ReportLab vector rendering, and full Pytest test coverage.',
    longDescription:
      'Engineered for educational institutions and hackathons. Users post batch recipient rosters; the service persists jobs in SQLite via SQLAlchemy ORM, dispatches asynchronous generation workers using ReportLab, and provides downloadable PDF credentials.',
    categories: ['Backend/API', 'Developer Tools'],
    technologies: [
      'Python 3',
      'FastAPI',
      'SQLAlchemy',
      'SQLite',
      'ReportLab',
      'Pydantic',
      'Pytest',
    ],
    githubUrl: 'https://github.com/Gkchvcg/bulk-cert-generator',
    keyFeatures: [
      'Asynchronous batch job scheduling via POST /jobs/ endpoint',
      'Dynamic PDF document generation with custom typography, borders, and metadata',
      'Relational tracking of job states (Pending, In Progress, Completed, Failed)',
      'Automated unit and integration test suite implemented with Pytest and HTTPX',
    ],
    architectureHighlights: [
      'SQLAlchemy session management and clean Pydantic v2 schemas for strict input validation',
    ],
    featured: false,
    status: 'Completed',
  },
  {
    id: 'finance-app-fullstack',
    title: 'Personal Finance App (Full Stack)',
    subtitle: 'Dual-Tier FastAPI & React Budget Tracking Application',
    description:
      'Full-stack personal finance and expense ledger coupling a FastAPI Python REST backend with a modern React single-page frontend for transaction logging and budget insights.',
    longDescription:
      'A full-stack financial bookkeeping platform. Implements clean REST endpoints in FastAPI for recording expenses, incomes, and categories, paired with an Axios-powered React frontend displaying running balances.',
    categories: ['Full Stack', 'Finance'],
    technologies: [
      'React',
      'FastAPI',
      'Python',
      'Axios',
      'Uvicorn',
      'JavaScript',
      'RESTful APIs',
    ],
    githubUrl: 'https://github.com/Gkchvcg/finance-app-fullstack',
    keyFeatures: [
      'Two-tier architecture with decoupled FastAPI backend and React frontend',
      'Full CRUD operations for transactions with automated balance calculation',
      'Fast asynchronous API request processing with Python Uvicorn server',
    ],
    architectureHighlights: [
      'CORS-configured REST API connecting React client running on port 3000 to FastAPI on port 8000',
    ],
    featured: false,
    status: 'Completed',
  },
  {
    id: 'todo-list',
    title: 'Task & Productivity Manager',
    subtitle: 'Interactive Streamlit & SQLite Task Management Portal',
    description:
      'Streamlit productivity application backed by SQLite database operations with real-time task tracking, priority categorization, and Plotly completion metrics.',
    longDescription:
      'A clean task management tool built with Python, Streamlit, and SQLite. Features database helpers for task CRUD workflows, deadline tracking, task status transitions, and analytical completion charts.',
    categories: ['Developer Tools', 'Experiments'],
    technologies: [
      'Python',
      'Streamlit',
      'SQLite',
      'Plotly Express',
      'Pandas',
    ],
    githubUrl: 'https://github.com/Gkchvcg/To-do-list',
    keyFeatures: [
      'SQLite relational database operations for creating, updating, and archiving tasks',
      'Plotly graphical visualizations tracking task completion ratios by category',
      'Render deployment configuration (render.yaml) for cloud hosting',
    ],
    architectureHighlights: [
      'Modular database helper architecture (db_fxns.py) isolating SQL queries from UI layout',
    ],
    featured: false,
    status: 'Completed',
  },
  {
    id: 'text-animation',
    title: 'Text Animation Kinetic Showcase',
    subtitle: 'Interactive Typography & Kinetic CSS Motion Experiment',
    description:
      'Creative frontend demonstration of kinetic typography, CSS keyframe animations, and DOM interaction built with lightweight vanilla web standards.',
    longDescription:
      'An experiment exploring fluid web typography, stagger timings, and interactive hover states created purely with standard HTML5, CSS3, and vanilla JavaScript without external dependencies.',
    categories: ['Experiments', 'Developer Tools'],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript (Vanilla)',
      'Kinetic Motion',
    ],
    githubUrl: 'https://github.com/Gkchvcg/text-animation',
    keyFeatures: [
      'Pure vanilla CSS keyframe animations for kinetic typography',
      'Zero dependency, lightweight, high-performance rendering',
      'Interactive letter hover and transition states',
    ],
    architectureHighlights: [
      'Hardware-accelerated CSS transforms minimizing browser reflows and repaints',
    ],
    featured: false,
    status: 'Completed',
  },
];
