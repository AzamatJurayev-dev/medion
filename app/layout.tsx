import { ReactNode } from 'react';
import { Metadata } from 'next';
import "@/styles/globals.css";
import QueryProvider from '@/components/providers/QueryProvider';
export const metadata: Metadata = {
  title: 'Medion',
  description: 'Awesome multilingual Next.js app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <body>
        <>
          <QueryProvider>{children}</QueryProvider>
        </>
      </body>
    </html>
  );
}
