import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const script = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const sans = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Bison Floral | Wedding Florist | Flathead Valley, Montana",
    template: "%s | Bison Floral",
  },
  description:
    "Bison Floral—Montana wedding and event florals with western soul and quiet luxury. Flathead Valley.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f3d8e4",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${script.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="site-body min-h-full min-w-0 flex flex-col overflow-x-clip">
        {children}
      </body>
    </html>
  );
}
