import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import { Outfit } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

import { CurrencyStoreProvider } from '@/providers/currency-store-provider';

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['200', '300', '400', '700', '900'],
});

export const metadata: Metadata = {
  title: 'FinTrack',
  description:
    'FinTrack is a smart and intuitive expense tracker designed to help you manage your finances effortlessly. With real-time insights, budget tracking, and expense categorization, it keeps you in control of your spending. Stay on top of your financial goals and make informed decisions with FinTrack.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${outfit.variable}`}>
          <Toaster richColors />
          <CurrencyStoreProvider>{children}</CurrencyStoreProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
