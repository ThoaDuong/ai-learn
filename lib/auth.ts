import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getDatabase } from "./mongodb";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "google") {
                try {
                    const db = await getDatabase();
                    const usersCollection = db.collection("users");

                    // Check if user exists
                    const existingUser = await usersCollection.findOne({
                        googleId: account.providerAccountId,
                    });

                    if (!existingUser) {
                        // Create new user
                        await usersCollection.insertOne({
                            googleId: account.providerAccountId,
                            email: user.email,
                            name: user.name,
                            image: user.image,
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        });
                    } else {
                        // Update existing user
                        await usersCollection.updateOne(
                            { googleId: account.providerAccountId },
                            {
                                $set: {
                                    name: user.name,
                                    image: user.image,
                                    updatedAt: new Date(),
                                },
                            }
                        );
                    }
                } catch (error) {
                    console.error("Error saving user to database:", error);
                    return false;
                }
            }
            return true;
        },
        async session({ session, token }) {
            if (session.user && token.sub) {
                // Add googleId to session
                (session.user as { googleId?: string }).googleId = token.sub;
            }
            return session;
        },
        async jwt({ token, account }) {
            if (account) {
                token.googleId = account.providerAccountId;
            }
            return token;
        },
    },
    pages: {
        signIn: "/",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
