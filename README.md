# DevProPedia

A comprehensive web platform integrating AI tools, cryptocurrency (DPPA Coin), and community challenges across tech, science, and business domains.

## Project Structure

```
devpropedia/
├── packages/
│   ├── web/           # Next.js frontend application
│   ├── api/           # Backend API services
│   ├── contracts/     # Smart contracts for DPPA Coin
│   └── shared/        # Shared types and utilities
├── docs/             # Documentation
└── tools/            # Development tools and scripts
```

## Features

- Three-tier account system (Free, Ultra DPPA, Enterprise)
- Interactive dashboards with real-time features
- Challenge hub with DPPA Coin rewards
- AI-powered content generation
- Secure authentication and wallet integration
- Modern UI with 3D animations

## Tech Stack

- **Frontend**: Next.js, TypeScript, Tailwind CSS, Framer Motion, Three.js
- **Backend**: Node.js, TypeScript, Supabase
- **Database**: Supabase (PostgreSQL)
- **Smart Contracts**: Solidity, Hardhat
- **Authentication**: Supabase Auth, OAuth2
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/devpropedia.git
   cd devpropedia
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   NEXT_PUBLIC_PORT=3000
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 