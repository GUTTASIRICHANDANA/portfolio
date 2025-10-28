// ...existing code...
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// ...existing code...

// Unregister any service workers and clear caches (dev helper to force new favicon/assets)
if (typeof window !== "undefined" && "serviceWorker" in navigator) {
  navigator.serviceWorker
    .getRegistrations()
    .then((regs) => regs.forEach((r) => r.unregister()))
    .catch(() => { /* ignore errors */ });

  if ("caches" in window) {
    caches.keys().then((keys) => keys.forEach((k) => caches.delete(k)));
  }
}

createRoot(document.getElementById("root")!).render(<App />);
// ...existing code...