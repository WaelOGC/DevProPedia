# DevProPedia API

This is the backend API for DevProPedia, built with Express, TypeScript, and Prisma.

## Prerequisites

- Node.js (v18 or higher)
- PostgreSQL
- npm or yarn

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up your environment variables:
```bash
cp .env.example .env
```
Then edit the `.env` file with your database credentials.

3. Initialize the database:
```bash
npm run prisma:generate
npm run prisma:migrate
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user
- `GET /api/articles` - Get all articles

## Development

- `npm run dev` - Start development server
- `npm run build` - Build the application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:migrate` - Run database migrations 