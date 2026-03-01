import type { Metadata } from "next";
import Header from "@/common/components/Header";
import Footer from "@/common/components/Footer";

export const metadata: Metadata = {
    title: "Privacy Policy | TLearn",
    description: "Privacy Policy for TLearn web application and Chrome extension.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-blue-50/30 overflow-hidden">
            <Header />

            <main className="flex-1 max-w-3xl mx-auto px-6 py-16">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
                <p className="text-sm text-gray-500 mb-10">Last updated: March 1, 2026</p>

                <div className="space-y-8 text-gray-700 leading-relaxed">
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
                        <p>
                            TLearn (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the TLearn web application
                            at <a href="https://tlearndaily.vercel.app" className="text-blue-600 hover:underline">tlearndaily.vercel.app</a> and
                            the TLearn Chrome extension (collectively, the &quot;Service&quot;). This Privacy Policy explains
                            how we collect, use, and protect your information when you use our Service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>

                        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2.1 Account Information</h3>
                        <p>
                            When you sign in using Google OAuth, we receive and store your name, email address,
                            and profile picture from your Google account. We do not have access to your Google password.
                        </p>

                        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2.2 Learning Data</h3>
                        <p>We collect data related to your learning activities, including:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                            <li>Saved vocabulary words and translations</li>
                            <li>Learning streak and activity dates</li>
                            <li>Freeze usage history</li>
                            <li>Grammar and vocabulary learning progress</li>
                        </ul>

                        <h3 className="text-lg font-medium text-gray-800 mt-4 mb-2">2.3 Chrome Extension Data</h3>
                        <p>
                            The TLearn Chrome extension accesses text that you explicitly select (highlight) on web pages
                            for the purpose of translation. We do not track your browsing history, collect data from
                            pages you visit, or monitor your activity outside of explicit interactions with the extension.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
                        <p>We use the collected information solely to:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                            <li>Provide translation and vocabulary saving functionality</li>
                            <li>Track your learning progress and maintain streaks</li>
                            <li>Send optional learning reminder emails (which you can unsubscribe from)</li>
                            <li>Improve the Service and user experience</li>
                        </ul>
                        <p className="mt-3">
                            We do <strong>not</strong> sell, rent, or share your personal information with third parties
                            for marketing or advertising purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Data Storage and Security</h2>
                        <p>
                            Your data is stored securely with encryption at rest and in transit.
                            Authentication is handled with secure HTTP-only session cookies.
                            We implement industry-standard security measures to protect your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Your Rights</h2>
                        <p>You have the right to:</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                            <li>Access your personal data stored in our Service</li>
                            <li>Delete your vocabulary and learning data at any time</li>
                            <li>Unsubscribe from email notifications</li>
                            <li>Request deletion of your account and all associated data</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Changes to This Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify users of any
                            material changes by updating the &quot;Last updated&quot; date at the top of this page.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us
                            at <a href="mailto:tlearndaily@gmail.com" className="text-blue-600 hover:underline">tlearndaily@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
