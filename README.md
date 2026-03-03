# Deciso – Frontend Application

## Deciso is a decision-support platform designed to transform analytics into structured, actionable insights.

This frontend application delivers an interactive, performance-optimized user interface built using React + Vite, enabling real-time dashboards, AI-driven insights, and executive-level decision views.

🚀 Tech Stack

React 18 – UI library

Vite – Fast build tool & development server

React Router – Client-side routing

Axios / Fetch API – Backend integration

ESLint – Code quality enforcement

Environment-based configuration

🏗 Project Structure
frontend/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
│
├── .env
├── vite.config.js
└── package.json
⚙️ Getting Started
1️⃣ Install Dependencies
npm install
2️⃣ Run Development Server
npm run dev

The application will start on:

http://localhost:5173

Hot Module Replacement (HMR) is enabled for instant UI updates during development.

🏭 Build for Production
npm run build

This generates an optimized production build inside the dist/ folder.

To preview the production build locally:

npm run preview
🔐 Environment Configuration

Create a .env file in the root of the frontend directory:

VITE_API_BASE_URL=http://localhost:5000

All environment variables must be prefixed with VITE_ to be accessible in the application.

🧠 Key Frontend Features

Executive dashboard views

KPI visualizations

Predictive insights integration

Risk segmentation views

Action-trigger based UI components

Modular component architecture

Clean separation between UI and service layers

🔄 Backend Integration

The frontend communicates with the Deciso backend via REST APIs.

All API calls are centralized inside:

src/services/

This ensures:

Reusable service logic

Clean separation of concerns

Easier scaling and maintenance

🧩 ESLint & Code Quality

ESLint is configured to enforce:

Consistent coding standards

React hooks best practices

Clean imports and structure

To run lint checks:

npm run lint
🛠 React + Vite Configuration

This project uses Vite for fast builds and development speed.

Available React plugins:

@vitejs/plugin-react (Babel-based Fast Refresh)

@vitejs/plugin-react-swc (SWC-based Fast Refresh for improved speed)

The React Compiler is not enabled due to performance considerations during development and production builds.

📈 Scalability Considerations

The frontend architecture is designed to support:

Role-based dashboards

Multi-tenant environments

Advanced analytics modules

AI-driven insight layers

Enterprise-level authentication flows

🧪 Recommended Production Enhancements

For production-grade deployment:

Add TypeScript for type safety

Enable type-aware ESLint rules

Integrate centralized error logging

Implement environment-based API routing

Add performance monitoring

👨‍💻 Author

Kamal Sharma
Senior Business Analyst | Analytics Consultant

Deciso reflects practical experience in delivering decision-support systems that combine analytics, visualization, and predictive intelligence.
