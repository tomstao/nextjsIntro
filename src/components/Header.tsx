import Link from 'next/link';

export default function Header() {
    return (
        <header className="text-white p-4 bg-blue-500 w-full ">
            <nav className="container mx-auto flex-row flex  justify-between">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/share" className="hover:underline">Share</Link>
            </nav>
        </header>
    );
}