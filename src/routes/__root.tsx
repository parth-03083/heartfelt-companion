import { createRootRoute, Outlet, HeadContent, Scripts, Link } from "@tanstack/react-router";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Horizon Bound — Curated Travel Experiences" },
      { name: "description", content: "Horizon Bound crafts unforgettable group, domestic and international trips with handpicked itineraries." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background text-on-surface">
      <div className="text-center px-5">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary mb-4">404</h1>
        <h2 className="font-display text-2xl font-bold mb-2">Page Not Found</h2>
        <p className="text-on-surface-variant mb-6 max-w-md mx-auto">
          The page you are looking for might have been moved, deleted, or does not exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-sm hover:bg-primary-container transition-all active:scale-95"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  ),
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
