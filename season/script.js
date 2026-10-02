const seasonSlider = document.getElementById("seasonSlider");
const seasonDisplay = document.getElementById("seasonDisplay");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const submitBtn = document.getElementById("submitBtn");
const currentClipDisplay = document.getElementById("currentClip");
const gameMedia = document.getElementById("gameMedia");

const answerReveal = document.getElementById("answerReveal");
const yourAnswer = document.getElementById("yourAnswer");
const correctAnswer = document.getElementById("correctAnswer");
const pointsEarned = document.getElementById("pointsEarned");
const nextClipBtn = document.getElementById("nextClipBtn");

let currentClip = 0;
let totalScore = 0;
let answers = [];

const startSeason = 2008;
const endSeason = 2026;

const challengeStartDate = new Date("2026-10-02T00:00:00+03:00");

function getChallengeNumber() {
    const now = new Date();

    const startDay = Date.UTC(
        challengeStartDate.getFullYear(),
        challengeStartDate.getMonth(),
        challengeStartDate.getDate()
    );

    const today = Date.UTC(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
    );

    const daysPassed = Math.floor((today - startDay) / 86400000);

    return daysPassed + 1;
}

const challengeNumber = getChallengeNumber();
const clips = dailyClips[challengeNumber];

const storageKey = `seasonChallenge-${challengeNumber}`;

function calculatePoints(guess, correct) {
    const difference = Math.abs(guess - correct);

    if (difference === 0) return 3;
    if (difference === 1) return 2;
    if (difference === 2) return 1;

    return 0;
}

function formatSeason(year) {
    const nextYear = String(year + 1).slice(-2);
    return `${year}/${nextYear}`;
}

function loadClip() {
    gameMedia.src = clips[currentClip].media;
    gameMedia.load();
}

function updateSeason() {
    const year = Number(seasonSlider.value);
    seasonDisplay.textContent = formatSeason(year);
}

minusBtn.addEventListener("click", () => {
    if (Number(seasonSlider.value) > startSeason) {
        seasonSlider.value--;
        updateSeason();
    }
});

plusBtn.addEventListener("click", () => {
    if (Number(seasonSlider.value) < endSeason) {
        seasonSlider.value++;
        updateSeason();
    }
});

seasonSlider.addEventListener("input", updateSeason);

updateSeason();
loadClip();

submitBtn.addEventListener("click", () => {
    const guess = Number(seasonSlider.value);
    const correct = clips[currentClip].season;

    // مؤقتًا: إذا ما حطينا موسم اللقطة للحين
    if (correct === null) {
        console.log("موسم اللقطة غير محدد بعد");
        return;
    }

    const points = calculatePoints(guess, correct);

    const progressItems = document.querySelectorAll(".progress-item");

if (points === 3) {
    progressItems[currentClip].classList.add("correct");
} else if (points === 2) {
    progressItems[currentClip].classList.add("close");
} else if (points === 1) {
    progressItems[currentClip].classList.add("near");
} else {
    progressItems[currentClip].classList.add("wrong");
}

    answers.push({
        guess: guess,
        correct: correct,
        points: points
    });

    totalScore += points;

    yourAnswer.textContent = formatSeason(guess);
correctAnswer.textContent = formatSeason(correct);

pointsEarned.textContent = `+${points} نقطة`;

pointsEarned.classList.remove("correct", "close", "near", "wrong");

if (points === 3) {
    pointsEarned.classList.add("correct");
} else if (points === 2) {
    pointsEarned.classList.add("close");
} else if (points === 1) {
    pointsEarned.classList.add("near");
} else {
    pointsEarned.classList.add("wrong");
}

answerReveal.style.display = "block";

submitBtn.style.display = "none";
seasonSlider.disabled = true;
minusBtn.disabled = true;
plusBtn.disabled = true;

gameMedia.pause();

localStorage.setItem(storageKey, JSON.stringify({
    currentClip: currentClip,
    totalScore: totalScore,
    answers: answers,
    awaitingNext: true
}));

});

nextClipBtn.addEventListener("click", () => {
    currentClip++;

    localStorage.setItem(storageKey, JSON.stringify({
    currentClip: currentClip,
    totalScore: totalScore,
    answers: answers,
    awaitingNext: false
}));

    if (currentClip < clips.length) {
        currentClipDisplay.textContent = currentClip + 1;

        seasonSlider.value = 2017;
        updateSeason();

        answerReveal.style.display = "none";
        submitBtn.style.display = "block";

        seasonSlider.disabled = false;
        minusBtn.disabled = false;
        plusBtn.disabled = false;

        loadClip();
    } else {
        const clipCard = document.querySelector(".clip-card");
        const resultScreen = document.getElementById("resultScreen");
        const finalScore = document.getElementById("finalScore");

        clipCard.style.display = "none";
        resultScreen.style.display = "block";
        finalScore.textContent = totalScore;

        const resultColors = document.getElementById("resultColors");
        resultColors.innerHTML = "";

        answers.forEach(answer => {
            const box = document.createElement("div");
            box.classList.add("result-color");

           if (answer.points === 3) {
    box.classList.add("correct");
} else if (answer.points === 2) {
    box.classList.add("close");
} else if (answer.points === 1) {
    box.classList.add("near");
} else {
    box.classList.add("wrong");
}

            resultColors.appendChild(box);
        });

        const resultDetails = document.getElementById("resultDetails");
        resultDetails.innerHTML = "";

        answers.forEach((answer, index) => {
            const row = document.createElement("div");
            row.classList.add("result-row");

            row.textContent =
                `${index + 1}. ${formatSeason(answer.correct)} — إجابتك ${formatSeason(answer.guess)}`;

            resultDetails.appendChild(row);
        });
    }
});

const copyResultBtn = document.getElementById("copyResultBtn");

copyResultBtn.addEventListener("click", async () => {
   const resultSquares = answers.map(answer => {
    if (answer.points === 3) return "🟩";
    if (answer.points === 2) return "🟨";
    if (answer.points === 1) return "🟧";
    return "⬛";
}).join("");

   const shareText =
`أي موسم؟ #${challengeNumber}

${totalScore}/12
${resultSquares}

rawshaniat.com`;

    await navigator.clipboard.writeText(shareText);

    copyResultBtn.textContent = "تم النسخ ✓";

    setTimeout(() => {
        copyResultBtn.textContent = "نسخ النتيجة";
    }, 2000);
});

function restoreGame() {
    const savedGame = localStorage.getItem(storageKey);

    if (!savedGame) return;

    const savedData = JSON.parse(savedGame);

    currentClip = savedData.currentClip;
    totalScore = savedData.totalScore;
    answers = savedData.answers;

    if (savedData.awaitingNext && answers.length > 0) {
    const lastAnswer = answers[answers.length - 1];

    yourAnswer.textContent = formatSeason(lastAnswer.guess);
    correctAnswer.textContent = formatSeason(lastAnswer.correct);

    pointsEarned.textContent = `+${lastAnswer.points} نقطة`;

    pointsEarned.classList.remove("correct", "close", "near", "wrong");

if (lastAnswer.points === 3) {
    pointsEarned.classList.add("correct");
} else if (lastAnswer.points === 2) {
    pointsEarned.classList.add("close");
} else if (lastAnswer.points === 1) {
    pointsEarned.classList.add("near");
} else {
    pointsEarned.classList.add("wrong");
}

    answerReveal.style.display = "block";
    submitBtn.style.display = "none";

    seasonSlider.disabled = true;
    minusBtn.disabled = true;
    plusBtn.disabled = true;

    gameMedia.pause();

    return;
}

    const progressItems = document.querySelectorAll(".progress-item");

    answers.forEach((answer, index) => {
        if (answer.points === 3) {
            progressItems[index].classList.add("correct");
        } else if (answer.points === 2) {
            progressItems[index].classList.add("close");
        } else {
            progressItems[index].classList.add("wrong");
        }
    });

if (currentClip < clips.length) {
    currentClipDisplay.textContent = currentClip + 1;
    loadClip();} 
    
    else {
    const clipCard = document.querySelector(".clip-card");
    const resultScreen = document.getElementById("resultScreen");
    const finalScore = document.getElementById("finalScore");
    const resultColors = document.getElementById("resultColors");
    const resultDetails = document.getElementById("resultDetails");

    clipCard.style.display = "none";
    resultScreen.style.display = "block";
    finalScore.textContent = totalScore;

    resultColors.innerHTML = "";
    resultDetails.innerHTML = "";

    answers.forEach((answer, index) => {
        const box = document.createElement("div");
        box.classList.add("result-color");

        if (answer.points === 3) {
    box.classList.add("correct");
} else if (answer.points === 2) {
    box.classList.add("close");
} else if (answer.points === 1) {
    box.classList.add("near");
} else {
    box.classList.add("wrong");
}

        resultColors.appendChild(box);

        const row = document.createElement("div");
        row.classList.add("result-row");
        row.textContent =
            `${index + 1}. ${formatSeason(answer.correct)} — إجابتك ${formatSeason(answer.guess)}`;

        resultDetails.appendChild(row);
    });
}
}

restoreGame();

function updateCountdown() {
    const countdown = document.getElementById("countdown");

    const now = new Date();

    // الوقت الحالي في السعودية
    const saudiNow = new Date(
        now.toLocaleString("en-US", { timeZone: "Asia/Riyadh" })
    );

    // منتصف الليل القادم
    const nextMidnight = new Date(saudiNow);
    nextMidnight.setHours(24, 0, 0, 0);

    const difference = nextMidnight - saudiNow;

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (difference % (1000 * 60)) / 1000
    );

    countdown.textContent =
        `${String(hours).padStart(2, "0")}:` +
        `${String(minutes).padStart(2, "0")}:` +
        `${String(seconds).padStart(2, "0")}`;
}

updateCountdown();
setInterval(updateCountdown, 1000);