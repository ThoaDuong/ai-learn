/**
 * Email utility functions using Nodemailer
 * 
 * Configure SMTP settings via environment variables:
 * - SMTP_HOST (e.g., smtp.gmail.com)
 * - SMTP_PORT (e.g., 587)
 * - SMTP_USER (your email)
 * - SMTP_PASS (app password)
 * - EMAIL_FROM (sender address)
 */

import nodemailer from "nodemailer";

// Create reusable transporter
let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
    if (transporter) return transporter;

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
        console.warn("Email not configured: missing SMTP environment variables");
        return null;
    }

    transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465, // true for 465, false for other ports
        auth: { user, pass }
    });

    return transporter;
}

interface ReminderEmailOptions {
    to: string;
    name: string;
    currentStreak: number;
    freezeCount: number;
}

/**
 * Send streak reminder email to user
 */
export async function sendStreakReminderEmail({
    to,
    name,
    currentStreak,
    freezeCount
}: ReminderEmailOptions): Promise<boolean> {
    const transport = getTransporter();
    if (!transport) {
        console.warn("Cannot send email: transporter not configured");
        return false;
    }

    const from = process.env.EMAIL_FROM || "TLearn <tlearndaily@gmail.com>";

    // Determine warning message based on freeze count
    const warningMessage = freezeCount > 0
        ? `⚠️ You will lose 1 Freeze if you don't study now!`
        : `🔥 You will lose your ${currentStreak}-day streak if you don't study (out of Freeze)!`;

    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 40px; border-radius: 16px; margin-top: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1e293b; margin: 0; font-size: 24px;">Study Reminder 📚</h1>
        </div>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
            Hello <strong>${name}</strong>,
        </p>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
            You haven't completed your daily lesson to maintain your streak. Your current streak is <strong style="color: #f97316;">${currentStreak} days</strong>.
        </p>
        
        <div style="background: linear-gradient(135deg, #fef3c7, #fde68a); padding: 20px; border-radius: 12px; margin: 24px 0; text-align: center;">
            <p style="color: #92400e; font-size: 18px; font-weight: 600; margin: 0;">
                ${warningMessage}
            </p>
            ${freezeCount > 0 ? `<p style="color: #a16207; font-size: 14px; margin-top: 8px;">Freeze remaining: ${freezeCount}</p>` : ''}
        </div>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/learn" 
               style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; font-size: 16px;">
                Study Now 🚀
            </a>
        </div>
        
        <p style="color: #94a3b8; font-size: 14px; text-align: center; margin-top: 30px;">
            This is an automated email from AI Learn. You received this email because you signed up for an account.
        </p>
    </div>
</body>
</html>
    `;

    try {
        await transport.sendMail({
            from,
            to,
            subject: `⚡ Reminder: Your ${currentStreak}-day streak is at risk!`,
            html
        });
        return true;
    } catch (error) {
        console.error("Failed to send reminder email:", error);
        return false;
    }
}

interface DailyReminderEmailOptions {
    to: string;
    name: string;
    currentStreak: number;
}

/**
 * Send daily morning reminder email to encourage studying (sent at 8 AM)
 */
export async function sendDailyReminderEmail({
    to,
    name,
    currentStreak
}: DailyReminderEmailOptions): Promise<boolean> {
    const transport = getTransporter();
    if (!transport) {
        console.warn("Cannot send email: transporter not configured");
        return false;
    }

    const from = process.env.EMAIL_FROM || "TLearn <tlearndaily@gmail.com>";
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

    const streakMessage = currentStreak > 0
        ? `You're on a <strong style="color: #f97316;">${currentStreak}-day streak</strong> 🔥 — keep it going!`
        : `Start a new streak today and build your learning habit! 💪`;

    const motivationalQuotes = [
        "The secret of getting ahead is getting started.",
        "A little progress each day adds up to big results.",
        "Learning is a treasure that will follow its owner everywhere.",
        "The more you learn, the more you earn.",
        "Today's effort is tomorrow's success.",
        "Consistency is the key to mastery.",
        "Small daily improvements lead to stunning results.",
    ];
    const quote = motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)];

    const html = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5;">
    <div style="max-width: 600px; margin: 0 auto; background-color: white; padding: 40px; border-radius: 16px; margin-top: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #1e293b; margin: 0; font-size: 24px;">Good Morning! ☀️</h1>
        </div>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
            Hi <strong>${name}</strong>,
        </p>
        
        <p style="color: #475569; font-size: 16px; line-height: 1.6;">
            It's a brand new day — a perfect time to learn something new! Spend just a few minutes today to strengthen your vocabulary and keep your progress going.
        </p>

        <div style="background: linear-gradient(135deg, #eff6ff, #dbeafe); padding: 20px; border-radius: 12px; margin: 24px 0; text-align: center;">
            <p style="color: #1e40af; font-size: 16px; font-weight: 500; margin: 0; font-style: italic;">
                "${quote}"
            </p>
        </div>

        <p style="color: #475569; font-size: 16px; line-height: 1.6; text-align: center;">
            ${streakMessage}
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
            <a href="${appUrl}/learn" 
               style="display: inline-block; background: linear-gradient(135deg, #3b82f6, #2563eb); color: white; text-decoration: none; padding: 14px 32px; border-radius: 10px; font-weight: 600; font-size: 16px;">
                Start Learning 📖
            </a>
        </div>
        
        <p style="color: #94a3b8; font-size: 14px; text-align: center; margin-top: 30px;">
            This is your daily reminder from TLearn. Keep learning, stay chill! ✨
        </p>
    </div>
</body>
</html>
    `;

    try {
        await transport.sendMail({
            from,
            to,
            subject: `☀️ Good Morning, ${name}! Time to learn something new`,
            html
        });
        return true;
    } catch (error) {
        console.error("Failed to send daily reminder email:", error);
        return false;
    }
}
