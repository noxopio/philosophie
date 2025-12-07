import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "./context/ThemeContext";
import FloatingMenuWrapper from './components/FloatingMenuWrapper/FloatingMenuWrapper';
import { TextSidebar } from './components/TextSidebar/TextSidebar';
import "./globals.css";
import "./styles/themes.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Philosophie",
  description: "Un viaje a través de las ideas filosóficas que han moldeado nuestra comprensión del mundo",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" }
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <FloatingMenuWrapper />
          <TextSidebar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


