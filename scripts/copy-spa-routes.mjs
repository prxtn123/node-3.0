import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const distDir = join(process.cwd(), "dist");
const indexPath = join(distDir, "index.html");
const routes = [
  "node",
  "praxis",
  "product",
  "about",
  "resources",
  "contact",
  "careers",
  "privacy",
  "terms",
  "gdpr",
  "how-it-works",
];

const html = readFileSync(indexPath, "utf8");

for (const route of routes) {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  writeFileSync(join(routeDir, "index.html"), html, "utf8");
}

console.log(`Copied SPA entrypoint for routes: ${routes.join(", ")}`);
