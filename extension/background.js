/**
 * TLearn Extension — Background Service Worker
 * Handles auth cookie retrieval and message passing.
 */

const PROD_URL = "https://tlearndaily.vercel.app";
const DEV_URL = "http://localhost:3000";

// Determine base URL — prefer production
function getBaseUrl() {
    return PROD_URL;
}

// Get session cookie from TLearn domain
async function getSessionCookie() {
    const urls = [PROD_URL, DEV_URL];
    for (const url of urls) {
        try {
            const cookies = await chrome.cookies.getAll({ url });
            // NextAuth uses these cookie names
            const sessionCookie = cookies.find(c =>
                c.name === "next-auth.session-token" ||
                c.name === "__Secure-next-auth.session-token"
            );
            if (sessionCookie) {
                return { cookie: sessionCookie, baseUrl: url };
            }
        } catch (e) {
            console.error("Error getting cookies for", url, e);
        }
    }
    return null;
}

// Check if user is logged in
async function checkAuth() {
    const cookieInfo = await getSessionCookie();
    if (!cookieInfo) return { loggedIn: false };

    try {
        const res = await fetch(`${cookieInfo.baseUrl}/api/auth/session`, {
            credentials: "include",
            headers: {
                "Cookie": `${cookieInfo.cookie.name}=${cookieInfo.cookie.value}`
            }
        });
        const session = await res.json();
        if (session?.user) {
            return {
                loggedIn: true,
                user: session.user,
                baseUrl: cookieInfo.baseUrl,
                cookieName: cookieInfo.cookie.name,
                cookieValue: cookieInfo.cookie.value
            };
        }
    } catch (e) {
        console.error("Auth check failed:", e);
    }
    return { loggedIn: false };
}

// Translate text via TLearn API
async function translateText(text, authInfo) {
    const baseUrl = authInfo?.baseUrl || getBaseUrl();
    const headers = { "Content-Type": "application/json" };

    if (authInfo?.cookieName) {
        headers["Cookie"] = `${authInfo.cookieName}=${authInfo.cookieValue}`;
    }

    const res = await fetch(`${baseUrl}/api/translate`, {
        method: "POST",
        headers,
        body: JSON.stringify({ text })
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Translation failed");
    }

    return res.json();
}

// Save vocabulary via TLearn API
async function saveVocabulary(wordData, authInfo) {
    if (!authInfo?.loggedIn) {
        throw new Error("Not logged in");
    }

    const res = await fetch(`${authInfo.baseUrl}/api/vocabulary`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Cookie": `${authInfo.cookieName}=${authInfo.cookieValue}`
        },
        body: JSON.stringify(wordData)
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Save failed");
    }

    return res.json();
}

// Award streak for word save
async function awardStreak(authInfo) {
    if (!authInfo?.loggedIn) return;

    try {
        await fetch(`${authInfo.baseUrl}/api/streak/activity`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Cookie": `${authInfo.cookieName}=${authInfo.cookieValue}`
            },
            body: JSON.stringify({ activityType: "word_save" })
        });
    } catch (e) {
        console.error("Streak award failed:", e);
    }
}

// Get profile stats
async function getProfile(authInfo) {
    if (!authInfo?.loggedIn) return null;

    try {
        const res = await fetch(`${authInfo.baseUrl}/api/profile`, {
            headers: {
                "Cookie": `${authInfo.cookieName}=${authInfo.cookieValue}`
            }
        });
        if (res.ok) return res.json();
    } catch (e) {
        console.error("Profile fetch failed:", e);
    }
    return null;
}

// Message handler
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === "CHECK_AUTH") {
        checkAuth().then(sendResponse);
        return true; // async
    }

    if (msg.type === "TRANSLATE") {
        checkAuth().then(authInfo => {
            translateText(msg.text, authInfo).then(sendResponse).catch(err => {
                sendResponse({ error: err.message });
            });
        });
        return true;
    }

    if (msg.type === "SAVE_WORD") {
        checkAuth().then(authInfo => {
            saveVocabulary(msg.wordData, authInfo)
                .then(async (result) => {
                    // Award streak after successful save
                    await awardStreak(authInfo);
                    sendResponse(result);
                })
                .catch(err => {
                    sendResponse({ error: err.message });
                });
        });
        return true;
    }

    if (msg.type === "GET_PROFILE") {
        checkAuth().then(authInfo => {
            getProfile(authInfo).then(sendResponse);
        });
        return true;
    }

    if (msg.type === "OPEN_TLEARN") {
        chrome.tabs.create({ url: getBaseUrl() });
        return false;
    }

    if (msg.type === "LOGIN") {
        chrome.tabs.create({ url: `${getBaseUrl()}/api/auth/signin` });
        return false;
    }
});
