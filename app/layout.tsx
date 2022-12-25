import React from "react";
import Link from "next/link";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head></head>
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
          </nav>
          <nav>
            <Link href="/notes">Notes</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
