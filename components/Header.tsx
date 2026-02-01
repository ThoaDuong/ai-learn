"use client";

import Link from "next/link";
import Image from "next/image";
import AuthButton from "./AuthButton";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-white/30">
            <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <Image src="/images/logo-fit.png" alt="Logo" width={40} height={40} />
                    <Image src="/images/tlearn-fit.png" alt="Logo" width={80} height={40} />
                </Link>
                <AuthButton />
            </div>
        </header>
    );
}
