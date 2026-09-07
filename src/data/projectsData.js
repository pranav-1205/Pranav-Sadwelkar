/**
 * Centralized project data.
 *
 * To add / edit a project:
 *   1. Add or update an object in the array below.
 *   2. Only `slug`, `title`, and `category` are required.
 *   3. Every other field is optional — if omitted the corresponding
 *      UI section simply won't render.
 *   4. For screenshots, import images or use paths from `public/`.
 */

const projectsData = [
  {
    slug: 'aidrac',
    title: 'AIDRAC',
    category: 'Agentic AI / Full-Stack Development',
    shortDescription: 'Agentic AI Disaster Response Coordinator. A full-stack disaster management platform that assists citizens during natural disasters.',
    description: 'AIDRAC is a full-stack disaster management platform that assists citizens during natural disasters by surfacing safe evacuation routes, nearby shelters, hospitals, police stations, fire stations, and pharmacies, alongside live weather data, government emergency alerts, and AI-driven decision support. The system combines a React/TypeScript frontend with a FastAPI backend, uses live OpenStreetMap and Overpass API data for infrastructure, and integrates a Gemini-powered multi-agent (LangGraph) system that reasons over weather, alerts, infrastructure, and routing to recommend the safest course of action.',
    technologies: [
      'React + TypeScript',
      'Vite',
      'Tailwind CSS',
      'Leaflet',
      'Python',
      'FastAPI',
      'SQLAlchemy',
      'LangGraph',
      'Gemini AI',
      'PostgreSQL',
      'JWT',
      'Overpass API',
      'OpenRouteService'
    ],
    features: [
      'JWT-based authentication with token session management',
      'Interactive Leaflet map with disaster zones, CAP alert polygons, and layered POI markers',
      'Live Overpass API queries for emergency infrastructure',
      'Emergency SOS button routing to the nearest safe facility',
      'Turn-by-turn walking route generation with Haversine fallback',
      'Live weather via OpenWeatherMap with auto-refresh',
      'Government CAP alert ingestion (IMD/NDMA)',
      'Gemini-powered multi-agent AI Decision Assistant with deterministic fallback'
    ],
    technicalDetails: {
      'Frontend': 'React + TypeScript, Vite, Tailwind CSS, Leaflet',
      'Backend': 'Python, FastAPI, SQLAlchemy, Pydantic',
      'AI / Orchestration': 'LangGraph + google-genai (Gemini)',
      'Database': 'PostgreSQL',
      'Authentication': 'JWT (python-jose) + bcrypt',
      'External APIs': 'Overpass API, OpenStreetMap, OpenRouteService/OSRM, OpenWeatherMap'
    },
    thumbnail: '/assets/Project%20under%20gone/AIDRAC%20MAP%20VIEW.webp',
    screenshots: [
      { src: '/assets/Project%20under%20gone/AIDRAC%20MAP%20VIEW.webp', alt: 'Interactive Map - live infrastructure layers' },
      { src: '/assets/Project%20under%20gone/AIDRAC%20AGENT.webp', alt: 'AI Decision Support' },
      { src: '/assets/Project%20under%20gone/AIDRAC%20ALERTS.webp', alt: 'Emergency Alerts - real-time government notifications' },
      { src: '/assets/Project%20under%20gone/AIDRAC%20NAVIGATION.webp', alt: 'Turn-by-turn safe route' }
    ],
    githubUrl: 'https://github.com/pranav-1205/AIDRAC-Agentic-AI-Disaster-Response-Coordinator',
  },
  {
    slug: 'weshare',
    title: 'WeShare',
    category: 'Real-Time Systems / Full-Stack Development',
    shortDescription: 'Real-Time Collaborative Notes Application. A Google-Docs-style collaborative platform with account-based authentication and conflict-free editing.',
    description: 'This project is a real-time collaborative note-taking web application where users create accounts, own notes, and collaborate on the same document simultaneously via a shared link or QR code. A dashboard lists recent and shared notes, and edits are synchronised instantly across all participants using CRDT-based (Yjs) conflict-free replication over WebSockets.',
    technologies: [
      'React',
      'Vite',
      'Quill.js',
      'Yjs',
      'y-quill',
      'Socket.IO',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'JWT'
    ],
    features: [
      'Account registration and login secured with JWT stored in httpOnly cookies',
      'Dashboard with search, recent notes, and notes shared with the user',
      'Instant note creation with copyable share links and QR-code sharing',
      'Real-time collaborative editing for multiple simultaneous users via Yjs CRDTs',
      'Google-Meet-style people panel showing active participants and their roles',
      'Owner controls: rename the note title, grant or revoke write access, remove users',
      'Guests and collaborators join as read-only by default',
      'Debounced autosave of note content to MongoDB'
    ],
    learnings: 'Real-time systems design using WebSockets and CRDTs, JWT session management with httpOnly cookies, Role-based access control in a real-time application (owner / read / write), State management under concurrency.',
    technicalDetails: {
      'Frontend': 'React (Vite), Quill.js for rich-text editing',
      'Sync Engine': 'Yjs + y-quill for CRDT-based real-time conflict-free synchronisation',
      'Real-time Comm': 'Socket.IO',
      'Backend': 'Node.js, Express.js',
      'Database': 'MongoDB (Mongoose)',
      'Security': 'jsonwebtoken, bcrypt, cookie-parser (httpOnly session cookies)'
    },
    thumbnail: '/assets/Project%20under%20gone/WE%20SHARE%20COLLABORATION%20TOOL%20Dashboard.webp',
    screenshots: [
      { src: '/assets/Project%20under%20gone/WE%20SHARE%20COLLABORATION%20TOOL%20Dashboard.webp', alt: 'Dashboard - recent notes and join existing note' },
      { src: '/assets/Project%20under%20gone/WE%20SHARE%20COLLABORATION%20TOOL%20Real-time%20editor.webp', alt: 'Real-time editor - autosaving note' },
      { src: '/assets/Project%20under%20gone/WE%20SHARE%20COLLABORATION%20TOOL%20Join%20a%20Note%20-%20joining%20a%20shared%20note%20via%20link.webp', alt: 'Join a Note via link' },
      { src: '/assets/Project%20under%20gone/WE%20SHARE%20COLLABORATION%20TOOL%20People%20panel%20-%20participants%20with%20owner%20and%20read-only%20roles.webp', alt: 'People panel - participants and roles' }
    ],
    githubUrl: 'https://github.com/pranav-1205/WeShare---Collaboration-platform.git',
    liveUrl: 'https://weshare-theta.vercel.app/',
  },
  {
    slug: 'ai-study-buddy',
    title: 'AI Study Buddy',
    category: 'AI / EdTech',
    shortDescription: 'An AI-powered educational assistant that turns static study material into interactive, personalized learning tools.',
    description: 'AI Study Buddy is an AI-powered educational assistant that lets students upload their own notes (PDF/TXT) and instantly interact with the material - generating quizzes, explanations, and summaries. Built with Streamlit and powered by Groq API using Meta Llama models, it acts as a personalised, always-available study companion with an additional Teacher Mode for educators.',
    technologies: [
      'Python',
      'Streamlit',
      'Groq API',
      'LLaMA models',
      'PyPDF2',
      'ReportLab'
    ],
    features: [
      'Upload PDF or TXT study material',
      'Interactive quiz generation with automatic evaluation and instant feedback',
      'AI-driven topic explanations and key-point summaries',
      'Simplified notes for difficult concepts',
      'Teacher Mode for generating learning material and answer keys',
      'Printable quiz/answer-key PDF export'
    ],
    technicalDetails: {
      'Frontend / App Logic': 'Python, Streamlit',
      'AI / LLM': 'Groq API + LLaMA models for high-speed LLM inference',
      'Document Processing': 'PyPDF2 for extracting text from uploaded PDFs',
      'Export': 'ReportLab for generating downloadable PDF quizzes and answer keys'
    },
    thumbnail: '/assets/Project%20under%20gone/STUDY%20BUDDY%20Homepage.webp',
    screenshots: [
      { src: '/assets/Project%20under%20gone/STUDY%20BUDDY%20Homepage.webp', alt: 'Study Buddy Homepage' },
      { src: '/assets/Project%20under%20gone/STUDY%20BUDDY%20Notes%20upload.webp', alt: 'Notes Upload Interface' }
    ],
    githubUrl: 'https://github.com/pranav-1205/Study_Buddy',
    liveUrl: 'https://studybuddy-pranavsadwelkar.streamlit.app/',
  },
  {
    slug: 'coldguard',
    title: 'ColdGuard',
    category: 'IoT / Systems Simulation',
    shortDescription: 'Temperature Monitoring & Cooling System Simulation platform mirroring a real IoT cold-chain deployment.',
    description: 'ColdGuard is a temperature monitoring and cooling system simulation platform built with a React frontend and an Express.js backend. It models a cold-chain asset (e.g., a refrigerated transport unit) in real time, streaming temperature, battery, solar, GPS, and ESP32 sensor-signal data to a live dashboard over Socket.IO, while persisting history and events to MySQL for later review.',
    technologies: [
      'React',
      'Vite',
      'Socket.IO',
      'Express.js',
      'Node.js',
      'MySQL',
      'MQTT',
      'OpenStreetMap'
    ],
    features: [
      'Real-time simulation engine (temperature, battery, solar, route) ticking on a fixed interval',
      'Live dashboard updates via Socket.IO',
      'External sensor ingestion endpoint and MQTT topic subscription for IoT integration',
      'ESP32 signal processing service and GPS tracking service',
      'Historical simulation data, sensor readings, and event logs persisted to MySQL',
      'Map visualisation via an OpenStreetMap embed',
      'REST API for simulation state, history, events, and control'
    ],
    technicalDetails: {
      'Frontend': 'React 19 + Vite for real-time monitoring dashboard',
      'Real-time Comm': 'Socket.IO (client + server)',
      'Backend': 'Express.js 5, Node.js (API and simulation engine)',
      'Database': 'MySQL (mysql2) for persistent storage',
      'IoT Integration': 'MQTT for sensor/topic ingestion',
      'Mapping': 'OpenStreetMap'
    },
    thumbnail: '/assets/Project%20under%20gone/COLDGUARD%20Cargo%20temperature%20trend%20&%20current%20operating%20state.webp',
    screenshots: [
      { src: '/assets/Project%20under%20gone/COLDGUARD%20Cargo%20temperature%20trend%20&%20current%20operating%20state.webp', alt: 'Cargo temperature trend & current operating state' },
      { src: '/assets/Project%20under%20gone/COLDGUARD%20Live%20GPS%20tracking%20-%20consignment%20location%20details.webp', alt: 'Live GPS tracking' },
      { src: '/assets/Project%20under%20gone/COLDGUARD%20Cargo%20temperature,%20battery,solar%20and%20cooling%20performance%20metrics.webp', alt: 'Cargo temperature, battery, solar and cooling metrics' },
      { src: '/assets/Project%20under%20gone/COLDGUARD%20MQTT%20dashboard%20-%20connected%20and%20streaming%20live%20sensor%20data.webp', alt: 'MQTT dashboard streaming live data' },
      { src: '/assets/Project%20under%20gone/COLDGUARD%20MQTT%20dashboard%20-%20connection%20configuration.webp', alt: 'MQTT Connection Configuration' },
      { src: '/assets/Project%20under%20gone/COLDGUARD%20Solar%20telemetry,%20heading%20and%20live%20GPS%20map.webp', alt: 'Solar telemetry and GPS Map' },
      { src: '/assets/Project%20under%20gone/COLDGUARD%20Wokwi%20ESP32%20+%20DHT22%20hardware%20simulation%20with%20sensor%20payloads.webp', alt: 'Wokwi ESP32 Hardware Simulation' }
    ],
    githubUrl: 'https://github.com/pranav-1205/ColdGuard',
  },
  {
    slug: 'penetration-testing-api',
    title: 'Penetration Testing Framework API',
    category: 'Cybersecurity / Backend Development',
    shortDescription: 'A web-based security assessment tool automating network scanning and vulnerability detection.',
    description: 'The Penetration Testing Framework API is a web-based security assessment tool that lets users initiate vulnerability scans from a dashboard interface. It automates security assessments using Python and integrates Nmap for network scanning, generating structured security reports.',
    technologies: [
      'Python',
      'Flask',
      'Flask-CORS',
      'python-nmap',
      'SQLite',
      'fpdf',
      'Jinja2',
      'bcrypt'
    ],
    features: [
      'Network port scanning and service detection via python-nmap',
      'Automated vulnerability detection',
      'Dashboard interface for initiating and monitoring scans',
      'REST API architecture',
      'Structured relational schema for users, projects, scans, targets, ports, and vulnerabilities',
      'PDF report generation'
    ],
    learnings: 'Hands-on experience with Flask API development, Understanding of vulnerability scanning concepts, Practical automation of Nmap from Python, Secure coding practices.',
    technicalDetails: {
      'Backend REST API': 'Python, Flask, Flask-CORS',
      'Security Tools': 'python-nmap for network scanning',
      'Frontend': 'HTML, CSS, JavaScript Dashboard',
      'Database': 'SQLite',
      'Reporting': 'fpdf, Jinja2',
      'Authentication': 'bcrypt, python-dotenv'
    },
    thumbnail: '/assets/Project%20under%20gone/PENETRATION%20TESTING%20FRAMEWORK%20API%20Security%20dashboard.webp',
    screenshots: [
      { src: '/assets/Project%20under%20gone/PENETRATION%20TESTING%20FRAMEWORK%20API%20Security%20dashboard.webp', alt: 'Security Dashboard' },
      { src: '/assets/Project%20under%20gone/PENETRATION%20TESTING%20FRAMEWORK%20API%20All%20scans.webp', alt: 'All Scans History' },
      { src: '/assets/Project%20under%20gone/PENETRATION%20TESTING%20FRAMEWORK%20API%20New%20scan%20creation.webp', alt: 'New Scan Creation' },
      { src: '/assets/Project%20under%20gone/PENETRATION%20TESTING%20FRAMEWORK%20API%20Attack%20simulation%20warning.webp', alt: 'Attack Simulation Warning' },
      { src: '/assets/Project%20under%20gone/PENETRATION%20TESTING%20FRAMEWORK%20API%20Security%20defense%20testing.webp', alt: 'Security Defense Testing' },
      { src: '/assets/Project%20under%20gone/PENETRATION%20TESTING%20FRAMEWORK%20API%20Scan%20details.webp', alt: 'Scan Details' },
      { src: '/assets/Project%20under%20gone/PENETRATION%20TESTING%20FRAMEWORK%20API%20Hashcat%20password%20cracking.webp', alt: 'Hashcat Password Cracking' },
      { src: '/assets/Project%20under%20gone/PENETRATION%20TESTING%20FRAMEWORK%20API%20SSH%20bruteforce%20and%20directory%20bruteforce%20test%20results.webp', alt: 'Bruteforce Test Results' }
    ],
    githubUrl: 'https://github.com/pranav-1205/Penetration-Testing-Framework-API',
  },
  {
    slug: 'notemania',
    title: 'NoteMania',
    category: 'Full-Stack Web Development',
    shortDescription: 'A full-stack web application for creating, managing, and organising personal notes online with secure cloud storage.',
    description: 'NoteMania (Note WebApp) is a full-stack web application that lets users create, manage, and organise personal notes online. It provides a clean, intuitive interface with user authentication, real-time note management, and persistent cloud storage, so notes can be accessed securely from any device.',
    technologies: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB (Atlas)',
      'JWT',
      'bcrypt'
    ],
    features: [
      'User registration and login with hashed passwords and JWT-based sessions',
      'Create, fetch, update, and delete personal notes',
      'Tagging of notes for organisation (defaults to "General")',
      'Calendar view to browse notes by date',
      'Trash bin with restore / permanent delete',
      'Archive for storing notes separately from the main dashboard',
      'Input validation via express-validator'
    ],
    technicalDetails: {
      'Frontend UI': 'React.js, HTML5, CSS3',
      'Backend API': 'Node.js, Express.js',
      'Database': 'MongoDB (Atlas)',
      'Security': 'JSON Web Tokens (JWT) + bcrypt'
    },
    thumbnail: '/assets/Project%20under%20gone/NOTE%20APP%20-%20NOTEMANIA%20Dashboard%20%20%20My%20Notes.webp',
    screenshots: [
      { src: '/assets/Project%20under%20gone/NOTE%20APP%20-%20NOTEMANIA%20Dashboard%20%20%20My%20Notes.webp', alt: 'Dashboard - My Notes' },
      { src: '/assets/Project%20under%20gone/NOTE%20APP%20-%20NOTEMANIA%20New%20Note%20Creation.webp', alt: 'New Note Creation' },
      { src: '/assets/Project%20under%20gone/NOTE%20APP%20-%20NOTEMANIA%20Calendar%20View.webp', alt: 'Calendar View' },
      { src: '/assets/Project%20under%20gone/NOTE%20APP%20-%20NOTEMANIA%20Archive.webp', alt: 'Archive' },
      { src: '/assets/Project%20under%20gone/NOTE%20APP%20-%20NOTEMANIA%20%20Trash%20Bin.webp', alt: 'Trash Bin' }
    ],
    githubUrl: 'https://github.com/pranav-1205/Note_WebApp',
  }
]

export default projectsData
