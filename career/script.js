
const careerPath = document.getElementById("careerPath");
const challengeNumberEl = document.getElementById("challengeNumber");
const scoreEl = document.getElementById("score");
const attemptsEl = document.getElementById("attempts");
const playerInput = document.getElementById("playerInput");
const suggestions = document.getElementById("suggestions");
const guessBtn = document.getElementById("guessBtn");
const guessHistory = document.getElementById("guessHistory");
const resultCard = document.getElementById("resultCard");
const resultTitle = document.getElementById("resultTitle");
const resultDescription = document.getElementById("resultDescription");
const shareBtn = document.getElementById("shareBtn");

const MAX_ATTEMPTS = 5;
const MAX_SCORE = 10;

// تاريخ إطلاق التحدي الأول (نعدّله عند تحديد موعد النشر)
const START_DATE = "2026-10-09";

function getSaudiDayNumber() {
    const today = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Riyadh",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(new Date());

    const start = Date.parse(START_DATE + "T00:00:00Z");
    const current = Date.parse(today + "T00:00:00Z");

    return Math.floor((current - start) / 86400000) + 1;
}

const challengeNumber = getSaudiDayNumber();
const playerId = dailyCareerChallenges[challengeNumber - 1];
const player = careerPlayers.find(p => p.id === playerId);
const storageKey = `careerChallenge-${challengeNumber}`;

let guesses = [];
let finished = false;
let selectedPlayer = null;
let wonGame = false;

function normalizeName(value) {
    return value
        .toLowerCase()
        .normalize("NFKC")
        .replace(/[\u064B-\u065F\u0670]/g, "")
        .replace(/[أإآ]/g, "ا")
        .replace(/ى/g, "ي")
        .replace(/ـ/g, "")
        .replace(/\s+/g, " ")
        .trim();
}

function matchesPlayer(candidate, text) {
    return [candidate.name, ...(candidate.aliases || [])]
        .some(name => normalizeName(name).includes(normalizeName(text)));
}

function isCorrectGuess(candidate) {
    return candidate.id === player.id;
}

function getScore() {
    return Math.max(0, MAX_SCORE - guesses.length * 2);
}

function renderCareer() {
    careerPath.innerHTML = "";

    player.clubs.forEach((club, index) => {
        if (index > 0) {
            const arrow = document.createElement("span");
            arrow.className = "career-arrow";
            arrow.textContent = "←";
            careerPath.appendChild(arrow);
        }

        const logo = document.createElement("img");
        logo.className = "club-logo";
        logo.src = `logos/${club}`;
        logo.alt = "شعار نادي";
        careerPath.appendChild(logo);
    });
}

function updateStatus() {
    scoreEl.textContent = getScore();
    attemptsEl.textContent = finished
    ? "اكتمل التحدي "
    : `المحاولات المتبقية: ${MAX_ATTEMPTS - guesses.length}`;

    guessHistory.innerHTML = "";

    guesses.forEach(guess => {
        const item = document.createElement("div");
        item.className = "guess-item";
        item.textContent = guess.name;
        guessHistory.appendChild(item);
    });
}

function showSuggestions() {
    suggestions.innerHTML = "";

    const query = playerInput.value.trim();

    if (!query || finished || !player) {
        suggestions.style.display = "none";
        return;
    }

    const matches = careerPlayers
        .filter(p => matchesPlayer(p, query))
        .filter(p => !guesses.some(g => g.id === p.id))
        .slice(0, 8);

    matches.forEach(candidate => {
        const item = document.createElement("div");
        item.className = "suggestion-item";
        item.textContent = candidate.name;

        item.addEventListener("click", () => {
            selectedPlayer = candidate;
            playerInput.value = candidate.name;
            suggestions.style.display = "none";
        });

        suggestions.appendChild(item);
    });

    suggestions.style.display = matches.length ? "block" : "none";
}

function endGame(won) {
    finished = true;
    wonGame = won;
    attemptsEl.textContent = "اكتمل التحدي ";
    playerInput.disabled = true;
    guessBtn.disabled = true;
    suggestions.style.display = "none";

    resultCard.hidden = false;
    resultTitle.textContent = won ? "إجابة صحيحة! 🎉" : "انتهت المحاولات";
    resultDescription.textContent = won
        ? `أحسنت! عرفت ${player.name} وحصلت على ${getScore()} من 10 نقاط.`
        : `اللاعب هو ${player.name}. نتيجتك 0 من 10.`;
}

function saveGame() {
    localStorage.setItem(storageKey, JSON.stringify({
        guesses,
        finished,
        wonGame
    }));
}

function submitGuess() {
    if (finished || !player) return;

    const typedName = normalizeName(playerInput.value);
    const candidate = selectedPlayer &&
        normalizeName(selectedPlayer.name) === typedName
        ? selectedPlayer
        : careerPlayers.find(p =>
            [p.name, ...(p.aliases || [])]
                .some(name => normalizeName(name) === typedName)
        );

    if (!candidate) {
        alert("اختر لاعبًا من قائمة الاقتراحات.");
        return;
    }

    if (guesses.some(g => g.id === candidate.id)) {
        alert("سبق أن خمنت هذا اللاعب.");
        return;
    }

    const correct = isCorrectGuess(candidate);

    // الإجابة الصحيحة لا تخصم نقاطًا
    if (!correct) {
        guesses.push({ id: candidate.id, name: candidate.name });
    }

    if (correct) {
        endGame(true);
    } else if (guesses.length >= MAX_ATTEMPTS) {
        endGame(false);
    }

    updateStatus();
    saveGame();

    playerInput.value = "";
    selectedPlayer = null;
    suggestions.style.display = "none";
}

function restoreGame() {
    try {
        const saved = JSON.parse(localStorage.getItem(storageKey));
        if (!saved) return;

        guesses = Array.isArray(saved.guesses) ? saved.guesses : [];
        finished = Boolean(saved.finished);
        wonGame = saved.wonGame !== undefined
        ? Boolean(saved.wonGame)
        : Boolean(saved.finished && guesses.length < MAX_ATTEMPTS);

        if (finished) {
         endGame(wonGame);
            }
    } 
    
    catch (error) {
        console.warn("تعذر استعادة التحدي", error);
    }
}

function initGame() {
    challengeNumberEl.textContent =
        `التحدي #${String(challengeNumber).padStart(3, "0")}`;

    if (!player) {
        careerPath.textContent = "لا يوجد تحدٍّ متاح لهذا اليوم بعد.";
        playerInput.disabled = true;
        guessBtn.disabled = true;
        return;
    }

    renderCareer();
    restoreGame();
    updateStatus();
}

playerInput.addEventListener("input", () => {
    selectedPlayer = null;
    showSuggestions();
});

playerInput.addEventListener("keydown", event => {
    if (event.key === "Enter") submitGuess();
});

guessBtn.addEventListener("click", submitGuess);

shareBtn.addEventListener("click", async () => {
    const squares = guesses.map(() => "🟥").join("");
    const result = wonGame
        ? squares + "🟩"
        : squares;

    const text = `مسيرة لاعب #${challengeNumber}
${getScore()}/10
${result}

rawshaniat.com/career/`;

    try {
        await navigator.clipboard.writeText(text);
        shareBtn.textContent = "تم نسخ النتيجة ✓";
    } catch {
        alert("تعذر نسخ النتيجة.");
    }
});

initGame();


/* ===== إحصائيات مسيرة لاعب ===== */

const statsBtn = document.getElementById("statsBtn");
const statsModal = document.getElementById("statsModal");
const closeStatsBtn = document.getElementById("closeStatsBtn");

function getCareerStats() {
    const completed = [];

    // قراءة نتائج التحديات المحفوظة
    for (let day = 1; day <= challengeNumber; day++) {
        const saved = localStorage.getItem(`careerChallenge-${day}`);

        if (!saved) continue;

        try {
            const game = JSON.parse(saved);

            if (!game.finished) continue;

            const won = game.wonGame === true;
            const wrongGuesses = Array.isArray(game.guesses)
                ? game.guesses.length
                : 0;

            completed.push({
                day,
                won,
                score: won
                    ? Math.max(0, 10 - wrongGuesses * 2)
                    : 0
            });
        } catch (error) {
            console.warn("تعذر قراءة إحصائية التحدي", day);
        }
    }

    const played = completed.length;
    const wins = completed.filter(game => game.won).length;
    const winRate = played
        ? Math.round((wins / played) * 100)
        : 0;

    const totalScore = completed.reduce(
        (sum, game) => sum + game.score, 0
    );

    // حساب أطول سلسلة انتصارات متتالية
    let bestStreak = 0;
    let streak = 0;
    let previousDay = null;

    completed.forEach(game => {
        if (game.won) {
            streak = previousDay === game.day - 1
                ? streak + 1
                : 1;

            bestStreak = Math.max(bestStreak, streak);
        } else {
            streak = 0;
        }

        previousDay = game.day;
    });

    // السلسلة الحالية تنتهي بالخسارة أو تفويت يوم كامل
    let currentStreak = 0;
    const resultsByDay = new Map(
        completed.map(game => [game.day, game])
    );

    let day = challengeNumber;

    // إذا تحدي اليوم لم يكتمل، نبدأ من أمس
    if (!resultsByDay.has(day)) {
        day--;
    }

    while (day >= 1 && resultsByDay.get(day)?.won) {
        currentStreak++;
        day--;
    }

    return {
        played,
        wins,
        winRate,
        totalScore,
        currentStreak,
        bestStreak
    };
}

function renderCareerStats() {
    const stats = getCareerStats();

    document.getElementById("statPlayed").textContent = stats.played;
    document.getElementById("statWins").textContent = stats.wins;
    document.getElementById("statWinRate").textContent = stats.winRate + "%";
    document.getElementById("statTotalScore").textContent = stats.totalScore;
    document.getElementById("statCurrentStreak").textContent = stats.currentStreak;
    document.getElementById("statBestStreak").textContent = stats.bestStreak;
}

statsBtn.addEventListener("click", () => {
    renderCareerStats();
    statsModal.hidden = false;
});

closeStatsBtn.addEventListener("click", () => {
    statsModal.hidden = true;
});

statsModal.addEventListener("click", event => {
    if (event.target === statsModal) {
        statsModal.hidden = true;
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        statsModal.hidden = true;
    }
});

