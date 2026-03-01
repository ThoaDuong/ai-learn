/**
 * TLearn Extension — Content Script
 * Detects text selection, shows translate icon, and displays translation panel.
 */

(function () {
    "use strict";

    // Prevent double-injection
    if (window.__tlearnExtInjected) return;
    window.__tlearnExtInjected = true;

    // ── State ──
    let floatingIcon = null;
    let translationPanel = null;
    let currentAuthInfo = null;

    // ── Floating Icon ──
    function createFloatingIcon() {
        if (floatingIcon) floatingIcon.remove();

        const icon = document.createElement("div");
        icon.id = "tlearn-ext-icon";
        icon.innerHTML = `<img src="${chrome.runtime.getURL("icons/icon48.png")}" width="22" height="22" style="border-radius: 4px;" alt="TLearn">`;
        icon.title = "Translate with TLearn";
        document.documentElement.appendChild(icon);
        floatingIcon = icon;

        icon.addEventListener("mousedown", (e) => {
            e.preventDefault();
            e.stopPropagation();
        });

        icon.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            const selectedText = window.getSelection()?.toString().trim();
            if (selectedText) {
                hideIcon();
                showTranslationPanel(selectedText, e.clientX, e.clientY);
            }
        });

        return icon;
    }

    function showIcon(x, y) {
        if (!floatingIcon) createFloatingIcon();
        // Position near the selection end
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        floatingIcon.style.left = `${x + scrollX + 8}px`;
        floatingIcon.style.top = `${y + scrollY - 16}px`;
        floatingIcon.classList.add("tlearn-visible");
    }

    function hideIcon() {
        if (floatingIcon) {
            floatingIcon.classList.remove("tlearn-visible");
        }
    }

    // ── Translation Panel ──
    function createPanel() {
        if (translationPanel) translationPanel.remove();

        const panel = document.createElement("div");
        panel.id = "tlearn-ext-panel";
        document.documentElement.appendChild(panel);
        translationPanel = panel;
        return panel;
    }

    function showTranslationPanel(text, mouseX, mouseY) {
        if (!translationPanel) createPanel();

        // Position panel
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;
        const viewW = window.innerWidth;
        const viewH = window.innerHeight;

        let left = mouseX + scrollX;
        let top = mouseY + scrollY + 24;

        // Adjust if too far right
        if (mouseX + 340 > viewW) {
            left = mouseX + scrollX - 340;
        }
        // Adjust if too far down
        if (mouseY + 300 > viewH) {
            top = mouseY + scrollY - 300;
        }

        translationPanel.style.left = `${left}px`;
        translationPanel.style.top = `${top}px`;

        // Loading state
        translationPanel.innerHTML = `
            <div class="tlearn-panel-header">
                <div class="tlearn-panel-logo">
                    <img src="${chrome.runtime.getURL("icons/icon48.png")}" width="20" height="20" style="border-radius: 4px;" alt="TLearn">
                    <span>TLearn</span>
                </div>
                <button class="tlearn-panel-close" id="tlearn-close-btn">✕</button>
            </div>
            <div class="tlearn-panel-body">
                <div class="tlearn-loading">
                    <div class="tlearn-spinner"></div>
                    <span>Translating "<strong>${escapeHtml(text)}</strong>"...</span>
                </div>
            </div>
        `;

        translationPanel.classList.add("tlearn-visible");

        // Bind close
        document.getElementById("tlearn-close-btn")?.addEventListener("click", hidePanel);

        // Translate
        chrome.runtime.sendMessage({ type: "TRANSLATE", text }, (response) => {
            if (chrome.runtime.lastError) {
                showError("Extension error. Please try again.");
                return;
            }
            if (response?.error) {
                showError(response.error);
                return;
            }
            renderResult(response);
        });

        // Check auth
        chrome.runtime.sendMessage({ type: "CHECK_AUTH" }, (auth) => {
            currentAuthInfo = auth;
        });
    }

    function renderResult(data) {
        if (!translationPanel) return;

        const body = translationPanel.querySelector(".tlearn-panel-body");
        if (!body) return;

        if (data.type === "word") {
            body.innerHTML = `
                <div class="tlearn-word-result">
                    <div class="tlearn-word-header">
                        <div class="tlearn-word-title">
                            <h3>${escapeHtml(data.word)}</h3>
                            ${data.phonetic ? `<span class="tlearn-phonetic">${escapeHtml(data.phonetic)}</span>` : ""}
                            <button class="tlearn-speak-btn" id="tlearn-speak"
                                title="Pronounce">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
                                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
                                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
                                </svg>
                            </button>
                        </div>
                        <div class="tlearn-word-meta">
                            <span class="tlearn-pos">${escapeHtml(data.partOfSpeech)}</span>
                            <span class="tlearn-level tlearn-level-${(data.level || "").toLowerCase()}">${escapeHtml(data.level)}</span>
                        </div>
                    </div>
                    <div class="tlearn-section">
                        <label>Meaning</label>
                        <p>${escapeHtml(data.meaning)}</p>
                    </div>
                    <div class="tlearn-section">
                        <label>Example</label>
                        <p class="tlearn-example">${escapeHtml(data.example)}</p>
                        <p class="tlearn-example-trans">${escapeHtml(data.exampleTranslation)}</p>
                    </div>
                    <div class="tlearn-actions">
                        <button class="tlearn-save-btn" id="tlearn-save">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                                <polyline points="17 21 17 13 7 13 7 21"/>
                                <polyline points="7 3 7 8 15 8"/>
                            </svg>
                            Save Word
                        </button>
                    </div>
                </div>
            `;

            // Speak button
            document.getElementById("tlearn-speak")?.addEventListener("click", () => {
                const utterance = new SpeechSynthesisUtterance(data.word);
                utterance.lang = "en-US";
                utterance.rate = 0.9;
                speechSynthesis.speak(utterance);
            });

            // Save button
            document.getElementById("tlearn-save")?.addEventListener("click", () => {
                handleSave(data);
            });

        } else if (data.type === "sentence") {
            body.innerHTML = `
                <div class="tlearn-word-result">
                    <div class="tlearn-section">
                        <label>Original</label>
                        <p>${escapeHtml(data.original)}</p>
                    </div>
                    <div class="tlearn-section">
                        <label>Translation</label>
                        <p>${escapeHtml(data.translation)}</p>
                    </div>
                </div>
            `;
        } else if (data.type === "invalid_word") {
            body.innerHTML = `
                <div class="tlearn-word-result">
                    <div class="tlearn-section">
                        <label>Not found</label>
                        <p>"${escapeHtml(data.word)}" is not a valid word.</p>
                        ${data.suggestions?.length ? `
                            <p class="tlearn-suggestions">Did you mean: ${data.suggestions.map(s => `<strong>${escapeHtml(s)}</strong>`).join(", ")}?</p>
                        ` : ""}
                    </div>
                </div>
            `;
        }
    }

    function handleSave(data) {
        const saveBtn = document.getElementById("tlearn-save");
        if (!saveBtn) return;

        if (!currentAuthInfo?.loggedIn) {
            // Not logged in — prompt to login
            saveBtn.innerHTML = "Login to save →";
            saveBtn.classList.add("tlearn-login-btn");
            saveBtn.addEventListener("click", () => {
                chrome.runtime.sendMessage({ type: "LOGIN" });
            }, { once: true });
            return;
        }

        saveBtn.disabled = true;
        saveBtn.innerHTML = `
            <div class="tlearn-spinner tlearn-spinner-sm"></div>
            Saving...
        `;

        chrome.runtime.sendMessage({
            type: "SAVE_WORD",
            wordData: {
                word: data.word,
                meaning: data.meaning,
                partOfSpeech: data.partOfSpeech,
                level: data.level,
                phonetic: data.phonetic,
                example: data.example,
                exampleTranslation: data.exampleTranslation
            }
        }, (response) => {
            if (response?.error) {
                saveBtn.disabled = false;
                saveBtn.textContent = response.error === "This word is already saved"
                    ? "✓ Already saved"
                    : `Error: ${response.error}`;
                saveBtn.classList.add(response.error === "This word is already saved" ? "tlearn-saved" : "tlearn-error");
            } else {
                saveBtn.innerHTML = "✓ Saved!";
                saveBtn.classList.add("tlearn-saved");
            }
        });
    }

    function showError(message) {
        if (!translationPanel) return;
        const body = translationPanel.querySelector(".tlearn-panel-body");
        if (body) {
            body.innerHTML = `
                <div class="tlearn-error-msg">
                    <span>⚠️ ${escapeHtml(message)}</span>
                </div>
            `;
        }
    }

    function hidePanel() {
        if (translationPanel) {
            translationPanel.classList.remove("tlearn-visible");
        }
    }

    // ── Event Listeners ──
    document.addEventListener("mouseup", (e) => {
        // Ignore clicks inside our own elements
        if (e.target.closest("#tlearn-ext-icon") || e.target.closest("#tlearn-ext-panel")) {
            return;
        }

        // Small delay to let selection finalize
        setTimeout(() => {
            const selection = window.getSelection();
            const text = selection?.toString().trim();

            if (text && text.length > 0 && text.length < 200) {
                const range = selection.getRangeAt(0);
                const rect = range.getBoundingClientRect();
                showIcon(rect.right, rect.top);
            } else {
                hideIcon();
            }
        }, 10);
    });

    document.addEventListener("mousedown", (e) => {
        // Close panel if clicking outside
        if (!e.target.closest("#tlearn-ext-panel") && !e.target.closest("#tlearn-ext-icon")) {
            hideIcon();
            hidePanel();
        }
    });

    // ── Utilities ──
    function escapeHtml(str) {
        if (!str) return "";
        const div = document.createElement("div");
        div.textContent = str;
        return div.innerHTML;
    }
})();
