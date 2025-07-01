import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import 'express-async-errors';
import type { Request, Response, NextFunction } from 'express';
// Move imports to the top
// import apiRoutes from './routes'; // Temporarily comment this out

// Load environment variables
dotenv.config();

const app = express();
const port = parseInt(process.env.PORT || '3001', 10);

// Middleware
app.use(helmet());

// Configure CORS with proper options
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Enhanced rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again later'
});
app.use(limiter);

// Health check endpoint
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Mount API routes - temporarily commented out until routes are created
// app.use('/api', apiRoutes);

// Placeholder for API routes - you can implement these later
app.get('/api', (_req: Request, res: Response) => {
  res.json({ message: 'API is working' });
});

// Add 404 handler for unmatched routes
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handling middleware
app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Function to start server
const startServer = async (portNumber: number): Promise<void> => {
  try {
    await new Promise<void>((resolve, reject) => {
      const server = app.listen(portNumber, () => {
        console.log(`API server running on port ${portNumber}`);
        resolve();
      });

      server.on('error', (err: NodeJS.ErrnoException) => {
        if (err.code === 'EADDRINUSE') {
          console.log(
            `Port ${portNumber} is in use, trying ${portNumber + 1}...`
          );
          startServer(portNumber + 1).then(resolve).catch(reject);
        } else {
          reject(err);
        }
      });

      // Graceful shutdown
      process.on('SIGTERM', () => {
        console.log('SIGTERM signal received: closing HTTP server');
        server.close(() => {
          console.log('HTTP server closed');
          process.exit(0);
        });
      });
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

// Start the server
startServer(port); 