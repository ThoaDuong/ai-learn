import Link from "next/link";
import Image from "next/image";
import { Brain } from "lucide-react";
import AuthButton from "./AuthButton";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/30">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 py-3 sm:py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 cursor-pointer flex-shrink-0">
                    <Image src="/images/logo-fit.png" alt="Logo" width={40} height={40} />
                    <Image src="/images/tlearn-fit.png" alt="TLearn" width={80} height={40} className="hidden sm:block" />
                </Link>

                <nav className="flex items-center gap-2">
                    <Link
                        href="/learn"
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                    >
                        <Brain size={18} />
                        <span className="hidden sm:inline">Learn Voca</span>
                    </Link>
                    <AuthButton />
                </nav>
            </div>
        </header>
    );
}
