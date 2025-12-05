import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Performance & Security Middleware (in order of priority)
app.use(helmet()); // Security headers
app.use(compress()); // Gzip compression
app.use(cors()); // CORS

// Request body parsing (consolidate)
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(cookieParser());

// Cache static assets (production only)
if (process.env.NODE_ENV === 'production') {
  app.use((req, res, next) => {
    // Cache static assets for 30 days
    if (req.url.match(/\.(js|css|jpg|png|gif|ico|svg|woff|woff2)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=2592000');
    }
    next();
  });
}

// Serve static files from React build (production)
const clientBuildPath = path.join(__dirname, "../client/dist");
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(clientBuildPath));
}

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});
    
export default app;
