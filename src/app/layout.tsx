import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

// Oswald for headings, Roboto for body text (see globals.css)
const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Welding Tech Corp Rebuild",
  description: "Welding Tech Corp homepage rebuild",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
