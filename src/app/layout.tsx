import type { Metadata } from "next";
import "@/app/styles/globals.css";
import ThemeProvider from "@/app/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Mitchell Bird Portfolio",
  description: "Portfolio website built with Next.js and Tailwind",
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans bg-black text-white overflow-x-hidden">
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>

        <div id="portal-root"></div>
      </body>
    </html>
  );
}
