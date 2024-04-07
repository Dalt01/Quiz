const questions = [
    {
        question: "Qual é a capital do Brasil?",
        options: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
        correctAnswer: "Brasília"
    },
    {
        question: "Quantas casas decimais tem o número pi?",
        options: ["Infinitas", "Centenas", "Vinte", "Duas"],
        correctAnswer: "Infinitas"
    },
    {
        question: "Qual o metal cujo símbolo químico é o Au?",
        options: ["Cobre", "Prata", "Ouro", "Mercúrio"],
        correctAnswer: "Ouro"
    },
    {
        question: "De onde é a invenção do chuveiro elétrico?",
        options: ["França", "Inglaterra", "Brasil", "Austrália"],
        correctAnswer: "Brasil"
    },
    {
        question: "Quanto tempo a luz do Sol demora para chegar à Terra?",
        options: ["12 segundos", "8 minutos", "7 minutos", "12 minutos"],
        correctAnswer: "8 minutos"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").textContent = currentQuestion.question;
    
    const optionsList = document.getElementById("options");
    optionsList.innerHTML = "";
    currentQuestion.options.forEach(option => {
        const li = document.createElement("li");
        const button = document.createElement("button");
        button.textContent = option;
        button.setAttribute("onclick", "checkAnswer(this)");
        li.appendChild(button);
        optionsList.appendChild(li);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = selectedOption.textContent;
    
    if (selectedAnswer === currentQuestion.correctAnswer) {
        document.getElementById("feedback").textContent = "Resposta correta!";
        score++;
    } else {
        document.getElementById("feedback").textContent = "Resposta incorreta!";
    }

    updateScore();
}

function updateScore() {
    document.getElementById("score-value").textContent = score;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        document.getElementById("feedback").textContent = "";
    } else {
        endQuiz();
    }
}

function endQuiz() {
    alert("Quiz finalizado! Sua pontuação total: " + score);
}

showQuestion();
