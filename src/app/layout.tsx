import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import type { ReactNode } from 'react';

export const metadata = {
    title: 'My Website',
    description: 'A site with shared layout',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className="flex-col justify-center items-center w-screen">
        <Header />

        <main className="">
            {children}
        </main>

        <Footer />
        </body>
        </html>
    );
}