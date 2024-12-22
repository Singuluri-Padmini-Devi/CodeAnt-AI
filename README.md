CodeAnt AI Frontend
A modern, responsive web application for CodeAnt AI - an AI-powered code quality and security platform.

Features
🎨 Modern, clean UI design
📱 Fully responsive (desktop & mobile)
🔒 Multiple authentication options
📊 Real-time statistics dashboard
⚡ Fast and optimized performance
Tech Stack
React - UI Framework
TypeScript - Type Safety
Tailwind CSS - Styling
Vite - Build Tool
Lucide React - Icons
Project Structure
src/
├── components/
│   ├── auth/
│   │   ├── AuthSection.tsx     # Authentication UI container
│   │   └── DeploymentToggle.tsx # SAAS/Self-hosted toggle
│   ├── buttons/
│   │   └── AuthButton.tsx      # Reusable auth button component
│   ├── stats/
│   │   ├── IssuesCard.tsx      # Issues statistics card
│   │   ├── StatsCard.tsx       # Reusable stats card component
│   │   └── StatsSection.tsx    # Statistics section container
│   ├── CodeAntLogo.tsx         # Logo component
│   ├── Layout.tsx              # Main layout wrapper
│   ├── LoginPage.tsx           # Login page component
│   └── RepositoryPage.tsx      # Repository listing page
└── main.tsx                    # Application entry point
Getting Started
Install Dependencies

npm install
Start Development Server

npm run dev
Build for Production

npm run build
Development Guidelines
Components are organized by feature/domain
Each component has a single responsibility
Reusable UI components are placed in dedicated folders
Consistent naming conventions:
Components: PascalCase
Files: PascalCase for components
Folders: camelCase
Key Components
AuthSection
Handles user authentication with multiple sign-in options:

GitHub
GitLab
SSO
StatsSection
Displays key metrics and statistics:

Language support count
Developer count
Hours saved
Issues fixed with trending data
Layout
Provides consistent page structure and responsive behavior.

Contributing
Follow the existing code structure and naming conventions
Ensure responsive design works on all screen sizes
Maintain type safety with TypeScript
Write clean, maintainable code
Test thoroughly before submitting changes
