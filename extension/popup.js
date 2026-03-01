/**
 * TLearn Extension — Popup Script
 */

document.addEventListener("DOMContentLoaded", async () => {
    const loadingEl = document.getElementById("loading");
    const loggedInEl = document.getElementById("logged-in");
    const loggedOutEl = document.getElementById("logged-out");

    // Check auth
    chrome.runtime.sendMessage({ type: "CHECK_AUTH" }, (auth) => {
        loadingEl.style.display = "none";

        if (auth?.loggedIn) {
            loggedInEl.style.display = "block";
            document.getElementById("user-name").textContent = auth.user?.name || "User";
            document.getElementById("user-email").textContent = auth.user?.email || "";

            if (auth.user?.image) {
                document.getElementById("user-avatar").src = auth.user.image;
            } else {
                document.getElementById("user-avatar").style.display = "none";
            }

            // Fetch profile stats
            chrome.runtime.sendMessage({ type: "GET_PROFILE" }, (data) => {
                if (data?.stats) {
                    document.getElementById("streak-count").textContent = data.stats.currentStreak || 0;
                    document.getElementById("freeze-count").textContent = data.stats.freezeCount ?? 5;
                    document.getElementById("active-days").textContent = data.stats.activeDays || 0;
                }
            });
        } else {
            loggedOutEl.style.display = "block";
        }
    });

    // Buttons
    document.getElementById("open-tlearn")?.addEventListener("click", () => {
        chrome.runtime.sendMessage({ type: "OPEN_TLEARN" });
        window.close();
    });

    document.getElementById("login-btn")?.addEventListener("click", () => {
        chrome.runtime.sendMessage({ type: "LOGIN" });
        window.close();
    });

    document.getElementById("open-site-btn")?.addEventListener("click", () => {
        chrome.runtime.sendMessage({ type: "OPEN_TLEARN" });
        window.close();
    });
});
