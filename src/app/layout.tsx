import type { Metadata, Viewport } from "next";
import { Figtree, Gloock } from "next/font/google";
import Nav from "@/components/Nav";
import { getProfile } from "@/lib/content";
import "./globals.css";

const figtree = Figtree({ variable: "--font-sans-face", subsets: ["latin"] });
const gloock = Gloock({ variable: "--font-serif-face", subsets: ["latin"], weight: "400" });

const profile = getProfile();

export const metadata: Metadata = {
  title: {
    default: `${profile.name} · ${profile.role}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  openGraph: {
    title: `${profile.name} · ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
  robots: { index: true, follow: true },
};

// Matches the navy nav bar, so mobile browser chrome blends into it.
export const viewport: Viewport = {
  themeColor: "#1f3550",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${gloock.variable} antialiased`}
    >
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="backdrop" aria-hidden="true" />
        <Nav initials={profile.initials} />
        {children}
      </body>
    </html>
  );
}
