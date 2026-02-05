"use client";

import Link from "next/link";
import Image from "next/image";
import { Brain } from "lucide-react";
import AuthButton from "./AuthButton";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/30">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <Image src="/images/logo-fit.png" alt="Logo" width={40} height={40} />
                    <Image src="/images/tlearn-fit.png" alt="Logo" width={80} height={40} />
                </Link>

                <nav className="flex items-center gap-6">
                    <Link
                        href="/learn"
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium text-sm hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105"
                    >
                        <Brain size={18} />
                        <span>Learn Vocabulary</span>
                    </Link>
                    <AuthButton />
                </nav>
            </div>
        </header>
    );
}
