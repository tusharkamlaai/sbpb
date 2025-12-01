import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SBPB INFRA PVT LTD | Coming Soon",
  icons: {
    icon: "/logo.png",
  },
  description:
    "Our new website is on the way. Eco-friendly, customizable packaging solutions. Stay tuned for launch updates!",
  keywords: "",
  // authors: [{ name: "Tushar Patle" }],
  openGraph: {
    title: "SBPB INFRA PVT LTD | Coming Soon",
    description:
      "Our new website is on the way. Eco-friendly, customizable packaging solutions. Stay tuned for launch updates!",
    url: "https://www.sbpb.in/",
    siteName: "SBPB INFRA PVT LTD",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
