import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { getDatabase } from "./mongodb";

export const authOptions: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
            authorization: {
                params: {
                    prompt: "consent select_account",
                    access_type: "offline",
                    response_type: "code",
                },
            },
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
                            image: user.image, // Initial image is Google image
                            googleImage: user.image, // Store Google image backup
                            createdAt: new Date(),
                            updatedAt: new Date(),
                        });
                    } else {
                        // Update existing user
                        const updateData: any = {
                            name: user.name,
                            googleImage: user.image, // Always update Google image in background
                            updatedAt: new Date(),
                        };

                        // Only update main image if user hasn't set a custom one (or if it's currently empty)
                        // If existingUser.image is same as OLD googleImage, we might want to update it to NEW googleImage?
                        // For simplicity: If existing image is missing, use new Google image.
                        if (!existingUser.image) {
                            updateData.image = user.image;
                        }

                        await usersCollection.updateOne(
                            { googleId: account.providerAccountId },
                            { $set: updateData }
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
            if (session.user && token.picture) {
                session.user.image = token.picture;
            }
            return session;
        },
        async jwt({ token, account, trigger, session }) {
            if (account) {
                token.googleId = account.providerAccountId;
            }
            if (trigger === "update" && session?.image) {
                token.picture = session.image;
            }
            return token;
        },
    },
    pages: {
        signIn: "/",
    },
    secret: process.env.NEXTAUTH_SECRET,
};
