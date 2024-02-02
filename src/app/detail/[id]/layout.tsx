import type { Metadata } from "next";
import "./../../globals.css";


export const metadata: Metadata = {
  title: "Social Sparkz",
  description: "En nettside med flere 'bli-kjent' leker.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
