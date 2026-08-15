import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Resolve the built client output robustly across deploy layouts:
 * 1. <bundle>/public          (server bundled inside dist/, Vite outDir dist/public)
 * 2. <cwd>/dist/public        (server run from project root, e.g. NODE_ENV=production pnpm start)
 * 3. <bundle>/..              (Vite output at the parent of the server bundle)
 */
function resolveStaticPath(): string {
  const candidates = [
    path.resolve(__dirname, "public"),
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(__dirname, ".."),
  ];
  const found = candidates.find((p) =>
    fs.existsSync(path.join(p, "index.html"))
  );
  if (!found) {
    console.error(
      `[server] Could not locate index.html. Candidates checked:`,
      candidates,
      `__dirname=${__dirname} NODE_ENV=${process.env.NODE_ENV}`
    );
  }
  return found ?? candidates[1];
}

async function startServer() {
  const app = express();
  const server = createServer(app);

  const staticPath = resolveStaticPath();
  console.log(`[server] serving static files from: ${staticPath}`);

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"), (err) => {
      if (err) {
        console.error("[server] sendFile error:", err);
        res.status(500).send("Internal Server Error");
      }
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
