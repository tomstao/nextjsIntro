import './globals.css'; // Tailwind or global styles
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
    title: 'My Website',
    description: 'A site with shared header and footer',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto p-6">{children}</main>
        <Footer />
        </body>
        </html>
    );
}