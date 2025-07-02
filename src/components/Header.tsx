import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="container mx-auto flex gap-6">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/share" className="hover:underline">Share</Link>
            </nav>
        </header>
    );
}