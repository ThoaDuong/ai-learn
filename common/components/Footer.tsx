import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto py-6 border-t border-white/20 bg-white/30 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <p className="text-sm text-gray-600">
                    © {currentYear} TLearn. All Rights Reserved | <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                </p>
            </div>
        </footer>
    );
}
