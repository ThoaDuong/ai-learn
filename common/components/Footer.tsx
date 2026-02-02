export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-auto py-6 border-t border-white/20 bg-white/30 backdrop-blur-lg">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <p className="text-sm text-gray-600">
                    © {currentYear} TLearn. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
