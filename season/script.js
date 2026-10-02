// تاريخ بداية اللعبة حسب تقويم السعودية
const startDate = {
    year: 2026,
    month: 9,
    day: 28
};

// جلب التاريخ الحالي حسب توقيت السعودية
function getSaudiDateParts() {

    const parts = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Riyadh",
        year: "numeric",
        month: "numeric",
        day: "numeric"
    }).formatToParts(new Date());

    const values = {};

    parts.forEach(part => {
        if (part.type !== "literal") {
            values[part.type] = Number(part.value);
        }
    });

    return values;
}

const saudiToday = getSaudiDateParts();

const startDayUTC = Date.UTC(
    startDate.year,
    startDate.month - 1,
    startDate.day
);

const todayDayUTC = Date.UTC(
    saudiToday.year,
    saudiToday.month - 1,
    saudiToday.day
);

const daysSinceStart = Math.floor(
    (todayDayUTC - startDayUTC) / 86400000
);

// رقم تحدي اليوم
const challengeNumber = daysSinceStart + 1;

// اختيار لاعب اليوم
const dailyPlayerId = dailyChallenges[daysSinceStart];

const targetPlayer = players.find(
    player => player.id === dailyPlayerId
);

if (!targetPlayer) {
    throw new Error(
        `لا يوجد لاعب محدد للتحدي #${challengeNumber}`
    );
}

// عرض رقم التحدي
document.getElementById("challengeNumber").textContent =
    String(challengeNumber).padStart(3, "0");

const storageKey = `rslGuess_${challengeNumber}`;

let gameState = JSON.parse(localStorage.getItem(storageKey)) || {
    guesses: [],
    finished: false
};

let attempts = gameState.guesses.length;
const maxAttempts = 6;

function makeGuess() {
    const input = document.getElementById("playerInput");
    const playerName = input.value.trim();

    if (playerName === "") {
        return;
    }

    const guessedPlayer = players.find(
        player => player.name === playerName
    );

    if (!guessedPlayer) {
        document.getElementById("result").innerHTML =
            "<p>⚠️ اللاعب غير موجود في القائمة</p>";
        return;
    }

    // منع تخمين نفس اللاعب مرتين
    const alreadyGuessed = gameState.guesses.includes(guessedPlayer.id);

    if (alreadyGuessed) {
        alert("سبق وخمنت هذا اللاعب");
        input.value = "";
        return;
    }

    if (attempts >= maxAttempts) {
        return;
    }

    attempts++;

    gameState.guesses.push(guessedPlayer.id);

    document.getElementById("attempts").textContent =
        `المحاولات: ${attempts} / ${maxAttempts}`;

    showGuess(guessedPlayer);

    input.value = "";
}

function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);

    let age = today.getFullYear() - birth.getFullYear();

    const monthDifference =
        today.getMonth() - birth.getMonth();

    if (
        monthDifference < 0 ||
        (monthDifference === 0 &&
            today.getDate() < birth.getDate())
    ) {
        age--;
    }

    return age;
}

function showGuess(player, restoring = false) {

    const club = compareText(player.club, targetPlayer.club);
    const nationality = compareText(
        player.nationality,
        targetPlayer.nationality
    );
    const position = compareText(
        player.position,
        targetPlayer.position
    );
    const foot = compareText(player.foot, targetPlayer.foot);

    const playerAge = calculateAge(player.birthDate);
    const targetAge = calculateAge(targetPlayer.birthDate);

    const age = compareNumber(playerAge, targetAge);
    const height = compareNumber(player.height, targetPlayer.height);
    

    const result = document.getElementById("result");

    result.innerHTML += `
        <div class="guess-result">

            <h3>${player.name}</h3>

            <div class="comparison">

                ${createBox("النادي", player.club, club)}
                ${createBox("الجنسية", player.nationality, nationality)}
                ${createBox("المركز", player.position, position)}

                ${createBox(
                   "العمر",
                  playerAge,
                  age.status,
                   age.arrow
                 )}

                ${createBox("القدم", player.foot, foot)}

                ${createBox(
                    "الطول",
                    player.height + " سم",
                    height.status,
                    height.arrow
                )}

            </div>

        </div>
    `;

    if (player.name === targetPlayer.name) {

        result.innerHTML += `
            <h2>🎉 أحسنت! عرفت لاعب اليوم</h2>
        `;

        document.getElementById("playerInput").disabled = true;

        gameState.finished = true;
        gameState.won = true;
         if (!restoring) {
         recordStats(true);
                    }
        saveGame();
        showEndCard();
    }

    else if (attempts === maxAttempts) {

        result.innerHTML += `
            <h2>انتهت المحاولات!</h2>
            <p>اللاعب هو: ${targetPlayer.name}</p>
        `;

        document.getElementById("playerInput").disabled = true;

        gameState.finished = true;
        gameState.won = false;
         if (!restoring) {
         recordStats(false);
                  }
        saveGame();
        showEndCard();
    }

    if (!restoring) {
    saveGame();
    }
}

function compareText(guess, target) {

    if (guess === target) {
        return "correct";
    }

    return "wrong";
}

function compareNumber(guess, target) {

    if (guess === target) {
        return {
            status: "correct",
            arrow: ""
        };
    }

    if (guess < target) {
        return {
            status: "wrong",
            arrow: "up"
        };
    }

    return {
        status: "wrong",
        arrow: "down"
    };
}

function createBox(label, value, status, arrow = "") {

    return `
        <div class="info-box ${status}">
            <span class="label">${label}</span>
            <strong>${value}</strong>
            ${arrow ? `<span class="arrow ${arrow}"></span>` : ""}
        </div>
    `;
}

const playerInput = document.getElementById("playerInput");
const suggestions = document.getElementById("suggestions");

playerInput.addEventListener("input", function () {

    const searchText = normalizeText(playerInput.value);

    suggestions.innerHTML = "";

    if (searchText.length === 0) {
        suggestions.style.display = "none";
        return;
    }

    const matches = players.filter(player => {

    const normalizedName = normalizeText(player.name);

    const nameMatch = normalizedName.includes(searchText);

    const aliasMatch = player.aliases.some(alias =>
        normalizeText(alias).includes(searchText)
    );

    return nameMatch || aliasMatch;

    });

    if (matches.length === 0) {
        suggestions.style.display = "none";
        return;
    }

    matches.forEach(player => {

        const item = document.createElement("div");

        item.classList.add("suggestion-item");

        item.innerHTML = `
            <span class="suggestion-name">
                ${player.name}
            </span>

            <span class="suggestion-club">
                ${player.club}
            </span>
        `;

        item.addEventListener("click", function () {

            playerInput.value = player.name;

            suggestions.innerHTML = "";
            suggestions.style.display = "none";

        });

        suggestions.appendChild(item);

    });

    suggestions.style.display = "block";

});


function normalizeText(text) {

    return text
        .toLowerCase()

        // إزالة التشكيل العربي
        .replace(/[\u064B-\u065F]/g, "")

        // توحيد أشكال الألف
        .replace(/[أإآ]/g, "ا")

        // إزالة المسافات الزائدة
        .trim();
}

function saveGame() {
    localStorage.setItem(storageKey, JSON.stringify(gameState));
}

function buildShareText() {

    const emojiRows = gameState.guesses.map(playerId => {

        const player = players.find(p => p.id === playerId);

        if (!player) {
            return "";
        }

        const playerAge = calculateAge(player.birthDate);
        const targetAge = calculateAge(targetPlayer.birthDate);

        const statuses = [
            compareText(player.club, targetPlayer.club),
            compareText(player.nationality, targetPlayer.nationality),
            compareText(player.position, targetPlayer.position),
            compareNumber(playerAge, targetAge).status,
            compareText(player.foot, targetPlayer.foot),
            compareNumber(player.height, targetPlayer.height).status
        ];

        return statuses
            .map(status => status === "correct" ? "🟩" : "🟥")
            .join("");

    }).join("\n");

    const score = gameState.won
        ? `${gameState.guesses.length}/6 🎯`
        : "X/6";

    return `⚽ خمن لاعب دوري روشن #${String(challengeNumber).padStart(3, "0")}

${emojiRows}

${score}

https://rawshaniat.com`;
}

async function shareResult() {

    const text = buildShareText();

    if (navigator.share) {

        try {
            await navigator.share({
                title: "خمن لاعب دوري روشن",
                text: text
            });
        } catch (error) {
            console.log("تم إلغاء المشاركة");
        }

    } else {

        try {
            await navigator.clipboard.writeText(text);

            const button =
                document.getElementById("shareButton");

            const oldText = button.textContent;

            button.textContent = "✅ تم نسخ النتيجة";

            setTimeout(() => {
                button.textContent = oldText;
            }, 2000);

        } catch {
            alert("تعذر نسخ النتيجة");
        }
    }
}

function showEndCard() {

    const endCard = document.getElementById("endCard");
    const endIcon = document.getElementById("endIcon");
    const endTitle = document.getElementById("endTitle");
    const endMessage = document.getElementById("endMessage");
    const answerName = document.getElementById("answerName");

    endCard.style.display = "block";

    answerName.textContent = targetPlayer.name;

    if (gameState.won) {

        endIcon.textContent = "🎉";
        endTitle.textContent = "أحسنت!";

        endMessage.textContent =
            `عرفت لاعب اليوم في ${gameState.guesses.length} محاولات`;

    } else {

        endIcon.textContent = "⚽";
        endTitle.textContent = "انتهت المحاولات";

        endMessage.textContent =
            "حظ أوفر في تحدي الغد";

    }

    document.getElementById("shareButton").style.display = "block";
}

function updateCountdown() {

    const now = new Date();

    // منتصف الليل القادم في السعودية
    const saudiParts = getSaudiDateParts();

    const nextSaudiMidnight = new Date(
        Date.UTC(
            saudiParts.year,
            saudiParts.month - 1,
            saudiParts.day + 1,
            -3,
            0,
            0
        )
    );

    let difference = nextSaudiMidnight.getTime() - now.getTime();

    if (difference < 0) {
        difference = 0;
    }

    const hours = Math.floor(
        difference / (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );

    const countdown =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;

    const countdownElement =
        document.getElementById("countdown");

    if (countdownElement) {
        countdownElement.textContent = countdown;
    }
}

updateCountdown();

setInterval(updateCountdown, 1000);

function restoreGame() {

    document.getElementById("attempts").textContent =
        `المحاولات: ${attempts} / ${maxAttempts}`;

    gameState.guesses.forEach(playerId => {

        const player = players.find(p => p.id === playerId);

        if (player) {
            showGuess(player, true);
        }

    });

    if (gameState.finished) {

    document.getElementById("playerInput").disabled = true;

    showEndCard();
    }
}


// ========================================
// الإحصائيات
// ========================================

const statsKey = "rslGuess_stats";

let stats = JSON.parse(localStorage.getItem(statsKey)) || {
    gamesPlayed: 0,
    wins: 0,
    currentStreak: 0,
    maxStreak: 0
};

function saveStats() {
    localStorage.setItem(statsKey, JSON.stringify(stats));
}

function openStats() {
    updateStatsDisplay();
    document.getElementById("statsModal").classList.add("show");
}

function closeStats() {
    document.getElementById("statsModal").classList.remove("show");
}

function updateStatsDisplay() {
    const winPercentage =
        stats.gamesPlayed === 0
            ? 0
            : Math.round((stats.wins / stats.gamesPlayed) * 100);

    document.getElementById("gamesPlayed").textContent =
        stats.gamesPlayed;

    document.getElementById("winPercentage").textContent =
        `${winPercentage}%`;

    document.getElementById("currentStreak").textContent =
        stats.currentStreak;

    document.getElementById("maxStreak").textContent =
        stats.maxStreak;
}

function recordStats(won) {

    // يمنع تسجيل نفس تحدي اليوم مرتين
    if (gameState.statsRecorded) {
        return;
    }

    stats.gamesPlayed++;

    if (won) {
        stats.wins++;
        stats.currentStreak++;

        if (stats.currentStreak > stats.maxStreak) {
            stats.maxStreak = stats.currentStreak;
        }
    } else {
        stats.currentStreak = 0;
    }

    gameState.statsRecorded = true;

    saveStats();
    saveGame();
}

restoreGame();
