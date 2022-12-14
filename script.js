const mathHelper = {
    sin: {0: "0", 30: "1/2", 45: "√2/2", 60: "√3/2", 90: "1"},
    cos: {90: "0", 60: "1/2", 45: "√2/2", 30: "√3/2", 0: "1"},
    tan: {0: "0", 30: "√3/3", 45: "1", 60: "√3", 90: "undefined"},
    cot: {90: "0", 60: "√3/3", 45: "1", 30: "√3", 0: "undefined"},
    asin: {0: "0", "1/2": "30", "√2/2": "45", "√3/2": "60", "1": "90"},
    acos: {1: "0", "√3/2": "30", "√2/2": "45", "√1/2": "60", "0": "90"},
    atan: {0: "0", "√3/3": "30", "1": "45", "√3": "60", "undefined": "90"},
    acot: {"undefined": "0", "√3": "30", "1": "45", "√3/3": "60", "0": "90"},
};

const morse = {
    letters: [
        ["A", "•–"], ["N", "–•"],// ["Ö", "–––•"],
        ["B", "–•••"], ["O", "–––"],// ["Ü", "••––"],
        ["C", "–•–•"], ["P", "•––•"],// ["Ç", "––––"],
        ["D", "–••"], ["Q", "––•–"],// ["Ş", "•••–•"],
        ["E", "•"], ["R", "•–•"],
        ["F", "••–•"], ["S", "•••"],
        ["G", "––•"], ["T", "–"],
        ["H", "••••"], ["U", "••–"],
        ["I", "••"], ["V", "•••–"],
        ["J", "•–––"], ["W", "•––"],
        ["K", "–•–"], ["X", "–••–"],
        ["L", "•–••"], ["Y", "–•––"],
        ["M", "––"], ["Z", "––••"]
    ],
    numbers: [
        ["0", "–––––"],
        ["1", "•––––"],
        ["2", "••–––"],
        ["3", "•••––"],
        ["4", "••••–"],
        ["5", "•••••"],
        ["6", "–••••"],
        ["7", "––•••"],
        ["8", "–––••"],
        ["9", "––––•"]
    ],
    symbols: [
        [".", "•–•–•–"],
        [",", "––••––"],
        ["?", "••––••"],
        ["-", "–••••–"],
        ["/", "–••–•"]
    ]
};

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const arr_rand = arr => arr[rand(0, arr.length - 1)];
const arr_shuffle = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

const lessons = {
    "Maths-Trigonometry": [
        () => {
            // trig values
            const method = arr_rand(["sin", "cos", "tan", "cot"]);
            const number = arr_rand(Object.keys(mathHelper[method]));
            const answer = mathHelper[method][number];
            return {
                title: `What's the ${method}(${number})?`,
                options: arr_shuffle([...arr_shuffle(Object.values(mathHelper[method]).filter(i => i !== answer)).slice(0, 4), answer]),
                answer
            };
        },
        () => {
            // arc trig values
            const method = arr_rand(["sin", "cos", "tan", "cot"]);
            const number = arr_rand(Object.keys(mathHelper["a" + method]));
            const answer = mathHelper["a" + method][number];
            return {
                title: `What's the arc${method}(${number})?`,
                options: arr_shuffle([...arr_shuffle(Object.values(mathHelper["a" + method]).filter(i => i !== answer)).slice(0, 4), answer]),
                answer
            };
        },
        /*() => {
            // conversions
        }*/
    ],
    "Morse-Letters": [
        () => {
            // Letters
            const selected = arr_rand(morse.letters); // 0 -> letter, 1 -> answer
            return {
                title: `What's '${selected[0]}' in Morse?`,
                options: arr_shuffle([...arr_shuffle(morse.letters.filter(i => i !== selected)).slice(0, 4).map(i => i[1]), selected[1]]),
                answer: selected[1]
            };
        }
    ],
    "Morse-Numbers": [
        () => {
            // Numbers
            const selected = arr_rand(morse.numbers); // 0 -> number, 1 -> answer
            return {
                title: `What's '${selected[0]}' in Morse?`,
                options: arr_shuffle([...arr_shuffle(morse.numbers.filter(i => i !== selected)).slice(0, 4).map(i => i[1]), selected[1]]),
                answer: selected[1]
            };
        }
    ],
    "Morse-Symbols": [
        () => {
            // Symbols
            const selected = arr_rand(morse.symbols); // 0 -> symbol, 1 -> answer
            return {
                title: `What's '${selected[0]}' in Morse?`,
                options: arr_shuffle([...arr_shuffle(morse.symbols.filter(i => i !== selected)).slice(0, 4).map(i => i[1]), selected[1]]),
                answer: selected[1]
            };
        }
    ],
    "Morse-All": [
        () => {
            // All
            const all = [...morse.letters, ...morse.numbers, ...morse.symbols];
            const selected = arr_rand(all); // 0 -> symbol, 1 -> answer
            return {
                title: `What's '${selected[0]}' in Morse?`,
                options: arr_shuffle([...arr_shuffle(all.filter(i => i !== selected)).slice(0, 4).map(i => i[1]), selected[1]]),
                answer: selected[1]
            };
        }
    ],
    "Morse-Reversed Letters": [
        () => {
            // Reversed Letters
            const selected = arr_rand(morse.letters); // 0 -> answer, 1 -> morse
            return {
                title: `What's '${selected[1]}'?`,
                options: arr_shuffle([...arr_shuffle(morse.letters.filter(i => i !== selected)).slice(0, 4).map(i => i[0]), selected[0]]),
                answer: selected[0]
            };
        }
    ],
    "Morse-Reversed Numbers": [
        () => {
            // Reversed Numbers
            const selected = arr_rand(morse.numbers); // 0 -> answer, 1 -> morse
            return {
                title: `What's '${selected[1]}'?`,
                options: arr_shuffle([...arr_shuffle(morse.numbers.filter(i => i !== selected)).slice(0, 4).map(i => i[0]), selected[0]]),
                answer: selected[0]
            };
        }
    ],
    "Morse-Reversed Symbols": [
        () => {
            // Reversed Symbols
            const selected = arr_rand(morse.symbols); // 0 -> answer, 1 -> morse
            return {
                title: `What's '${selected[1]}'?`,
                options: arr_shuffle([...arr_shuffle(morse.symbols.filter(i => i !== selected)).slice(0, 4).map(i => i[0]), selected[0]]),
                answer: selected[0]
            };
        }
    ],
    "Morse-Reversed All": [
        () => {
            // Reversed Numbers
            const all = [...morse.letters, ...morse.numbers, ...morse.symbols];
            const selected = arr_rand(all); // 0 -> answer, 1 -> morse
            return {
                title: `What's '${selected[1]}'?`,
                options: arr_shuffle([...arr_shuffle(all.filter(i => i !== selected)).slice(0, 4).map(i => i[0]), selected[0]]),
                answer: selected[0]
            };
        }
    ],
    /*"Morse-Sentences": [
        () => {
            // Sentences
            const all = [...morse.letters, ...morse.numbers, ...morse.symbols];
            const selected = arr_rand(all); // 0 -> answer, 1 -> morse
            return {
                title: `What's '${selected[1]}'?`,
                options: arr_shuffle([...arr_shuffle(all.filter(i => i !== selected)).slice(0, 4).map(i => i[0]), selected[0]]),
                answer: selected[0]
            };
        }
    ],*/
};

let currentQuestion = null;
let lastQuestionType = null;
let examInfo = null;

const updateExamInfo = () => {
    if (!examInfo) return;
    const examDiv = document.querySelector(".exam-info");
    examDiv.innerHTML = `Question: ${examInfo.count - examInfo.remaining}/${examInfo.count}<br>Points: ${Math.floor(examInfo.points)}/100`;
};

const generateQuestion = lesson => {
    lastQuestionType = lesson;
    if (examInfo) {
        examInfo.remaining--;
        if (examInfo.remaining < 0) {
            document.querySelector(".main").style.display = "block";
            document.querySelector(".question-container").innerHTML = "";
            while (![null, "ok"].includes(prompt(`Your exam result:\nPoints: ${Math.floor(examInfo.points)}/100\nType ok or press escape to continue.`))) {
            }
            return;
        }
    }
    const questionContainer = document.querySelector(".question-container");
    const question = lessons[lesson][rand(0, lessons[lesson].length - 1)]();
    questionContainer.innerHTML = `
<div class="question">${question.title}</div>
<div class="exam-info"></div>
<div class="back">Back</div>
<div class="show-answer">Skip Question</div>
<div class="options">${question.options.map((i, j) => `<div class="option"><div class="option-name" data-option-index="${j}">${["A", "B", "C", "D", "E"][j]}</div> ${i}</div>`).join("")}</div>
<div class="submit-answer disabled">Submit</div>`;
    currentQuestion = {question, selected: null};
    updateExamInfo();
};
let lT = null;

addEventListener("click", ev => {
    let {target} = ev;
    if (target === window) target = lT;
    if (target.classList.contains("back")) {
        document.querySelector(".main").style.display = "block";
        document.querySelector(".question-container").innerHTML = "";
        return;
    }
    if (target.classList.contains("back-main")) {
        lessonFilter = lessonFilter.split("-").reverse().slice(1).reverse().join("-");
        lessonSelect--;
        if (lessonSelect < 0) lessonSelect = 0;
        listLessons();
        document.querySelector(".back-main").style.display = lessonSelect ? "block" : "none";
        return;
    }
    if (target.classList.contains("lesson")) {
        if (lessonFilter) lessonFilter += "-";
        lessonFilter += target.innerHTML;
        lessonSelect++;
        listLessons();
        const l = Object.keys(lessons).find(i => i === lessonFilter);
        document.querySelector(".back-main").style.display = lessonSelect ? "block" : "none";
        examInfo = null;
        if (l) {
            document.querySelector(".main").style.display = "none";
            lessonSelect = 0;
            lessonFilter = "";
            document.querySelector(".back-main").style.display = "none";
            listLessons();
            const isExam = confirm("Do you want to enable exam mode?");
            if (isExam) {
                let count = prompt("How many questions should the exam have?", "10") * 1;
                while (isNaN(count) || count < 1 || count !== Math.floor(count) || !isFinite(count)) count = prompt("Please specify a valid positive integer.\nHow many questions should the exam have?", "15") * 1;
                examInfo = {count, remaining: count, points: 0, pointPerQuestion: 100 / count};
            }
            generateQuestion(l);
        }
        return;
    }
    if (!currentQuestion) {
        if (target.classList.contains("submit-answer") && !target.classList.contains("disabled"))
            generateQuestion(lastQuestionType)
        return;
    }
    if (target.classList.contains("show-answer")) {
        document.querySelectorAll(".option-name").forEach((i, j) => {
            if (j === currentQuestion.question.options.indexOf(currentQuestion.question.answer)) {
                i.style.border = "3px solid #f5ea42";
                i.style.backgroundColor = "#f5ea42";
            }
        });
        document.querySelector(".submit-answer").innerHTML = "Next";
        document.querySelector(".submit-answer").classList.remove("disabled");
        target.remove();
        currentQuestion = null;
    }
    if (target.classList.contains("submit-answer") && !target.classList.contains("disabled")) {
        if (currentQuestion.selected === currentQuestion.question.answer && examInfo)
            examInfo.points += examInfo.pointPerQuestion;
        document.querySelectorAll(".option-name").forEach((i, j) => {
            if (currentQuestion.selected !== currentQuestion.question.answer && j === currentQuestion.selectedIndex) {
                i.style.border = "3px solid #de2020";
                i.style.backgroundColor = "#de2020";
            }
            if (j === currentQuestion.question.options.indexOf(currentQuestion.question.answer)) {
                i.style.border = "3px solid #99ff2e";
                i.style.backgroundColor = "#99ff2e";
            }
        });
        updateExamInfo();
        target.innerHTML = "Next";
        currentQuestion = null;
        return;
    }
    let par = target;
    if (par.classList.contains("option")) par = par.children.item(0);
    if (!par.classList.contains("option-name")) return;
    const ch = !!par.style.backgroundColor;
    document.querySelectorAll(".option-name").forEach(i => i.style.backgroundColor = "");
    if (!ch) {
        par.style.backgroundColor = "#538bff";
        document.querySelector(".submit-answer").classList.remove("disabled");
        currentQuestion.selected = currentQuestion.question.options[par.getAttribute("data-option-index") * 1];
        currentQuestion.selectedIndex = par.getAttribute("data-option-index") * 1;
    } else document.querySelector(".submit-answer").classList.add("disabled");
});
addEventListener("keydown", ev => {
    if (currentQuestion) {
        if (ev.key === "Enter") {
            lT = document.querySelector(".question-container > .submit-answer");
            dispatchEvent(new MouseEvent("click"));
            return;
        }
        const index = {a: 0, b: 1, c: 2, d: 3, e: 4}[ev.key.toLowerCase()];
        if (typeof index !== "number") return;
        lT = document.querySelector("[data-option-index='" + index + "']");
        dispatchEvent(new MouseEvent("click"));
    } else if (document.querySelector(".question-container").innerHTML) {
        if (ev.key === "Enter") {
            lT = document.querySelector(".question-container > .submit-answer");
            dispatchEvent(new MouseEvent("click"));
        }
    }
});
let lessonSelect = 0;
let lessonFilter = "";
const listLessons = () => document.querySelector(".lessons").innerHTML = Array.from(new Set(Object.keys(lessons).filter(i => i.startsWith(lessonFilter)).map(i => i.split("-")[lessonSelect]))).map(i => `<div class="lesson">${i}</div>`).join("");
listLessons();