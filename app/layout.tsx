import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Hello World',
  description: 'A minimal, responsive Next.js application displaying Hello World with a clean, modern design.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<React.ReactElement> {
  return (
    <html lang="en">
      <head />
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}