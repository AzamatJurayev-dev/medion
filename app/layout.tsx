import { ReactNode } from 'react';
import { Metadata } from 'next';
import "@/styles/globals.css";
export const metadata: Metadata = {
  title: 'Medion',
  description: 'Awesome multilingual Next.js app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}
