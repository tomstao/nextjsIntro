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
        <body className="bg-red-500
 min-h-screen flex flex-col bg-gray-50 text-gray-900 justify-center items-center">
        <Header />

        <main className="flex min-h-screen flex-col justify-center items-center px-6 py-10 md:px-10 lg:px-20 max-w-5xl mx-auto w-screen ">
            {children}
        </main>

        <Footer />
        </body>
        </html>
    );
}