const questions = [
  // 🟢 Fáceis — Multiplicação com Metros (m)
  {
    question: "A Mamãe comprou 4 pedaços de arame, e cada pedaço tem 2 metros. Quantos metros de arame ela comprou no total?",
    answers: [
      { text: "6 metros", correct: false },
      { text: "8 metros", correct: true },
      { text: "4 metros", correct: false },
      { text: "2 metros", correct: false }
    ],
    calculation: "4 x 2m = 8m.",
    level: "easy"
  },
  {
    question: "Papai construiu 5 canteiros, e cada canteiro precisou de 3 metros de cerca. Quantos metros de cerca ele usou?",
    answers: [
      { text: "8 metros", correct: false },
      { text: "15 metros", correct: true },
      { text: "12 metros", correct: false },
      { text: "10 metros", correct: false }
    ],
    calculation: "5 x 3m = 15m.",
    level: "easy"
  },
  {
    question: "Um carro percorre 10 metros a cada volta no pátio. Se ele der 3 voltas, quantos metros ele terá percorrido?",
    answers: [
      { text: "13 metros", correct: false },
      { text: "30 metros", correct: true },
      { text: "20 metros", correct: false },
      { text: "40 metros", correct: false }
    ],
    calculation: "3 x 10m = 30m.",
    level: "easy"
  },
  {
    question: "Uma escada tem 4 degraus, e a distância entre um degrau e outro é de 5 metros. Qual é a altura total da escada?",
    answers: [
      { text: "9 metros", correct: false },
      { text: "25 metros", correct: false },
      { text: "20 metros", correct: true },
      { text: "15 metros", correct: false }
    ],
    calculation: "4 x 5m = 20m.",
    level: "easy"
  },
  {
    question: "A Vovó comprou 2 rolos de tecido. Se cada rolo tem 8 metros, quantos metros de tecido a Vovó tem?",
    answers: [
      { text: "10 metros", correct: false },
      { text: "14 metros", correct: false },
      { text: "16 metros", correct: true },
      { text: "18 metros", correct: false }
    ],
    calculation: "2 x 8m = 16m.",
    level: "easy"
  },

  // 🟢 Fáceis — Multiplicação com Centímetros (cm)
  {
    question: "A Professora pediu para todos medirem 4 pedaços de papel, cada um com 5 centímetros. Se juntarmos todos, qual o comprimento total em centímetros?",
    answers: [
      { text: "9 centímetros", correct: false },
      { text: "15 centímetros", correct: false },
      { text: "20 centímetros", correct: true },
      { text: "10 centímetros", correct: false }
    ],
    calculation: "4 x 5cm = 20cm.",
    level: "easy"
  },
  {
    question: "Um clipe de papel mede 3 centímetros. Se colocarmos 5 clipes enfileirados, qual será o comprimento total?",
    answers: [
      { text: "15 centímetros", correct: true },
      { text: "8 centímetros", correct: false },
      { text: "10 centímetros", correct: false },
      { text: "12 centímetros", correct: false }
    ],
    calculation: "5 x 3cm = 15cm.",
    level: "easy"
  },
  {
    question: "Para montar um brinquedo, são necessários 2 peças de 12 centímetros cada. Qual o tamanho das duas peças juntas?",
    answers: [
      { text: "24 centímetros", correct: true },
      { text: "14 centímetros", correct: false },
      { text: "20 centímetros", correct: false },
      { text: "12 centímetros", correct: false }
    ],
    calculation: "2 x 12cm = 24cm.",
    level: "easy"
  },
  {
    question: "A Mamãe decorou 3 caixas de presente, usando 11 centímetros de fita em cada uma. Quantos centímetros de fita ela usou no total?",
    answers: [
      { text: "30 centímetros", correct: false },
      { text: "33 centímetros", correct: true },
      { text: "22 centímetros", correct: false },
      { text: "11 centímetros", correct: false }
    ],
    calculation: "3 x 11cm = 33cm.",
    level: "easy"
  },
  {
    question: "Papai empilhou 4 livros, cada um com 10 centímetros de espessura. Qual é a altura total da pilha de livros?",
    answers: [
      { text: "14 centímetros", correct: false },
      { text: "40 centímetros", correct: true },
      { text: "30 centímetros", correct: false },
      { text: "24 centímetros", correct: false }
    ],
    calculation: "4 x 10cm = 40cm.",
    level: "easy"
  },

  // 🟠 Difíceis — Multiplicação com Metros (m)
  {
    question: "O Vovô plantou 7 fileiras de árvores. Se cada fileira tem 10 metros de comprimento, qual o comprimento total de todas as fileiras juntas?",
    answers: [
      { text: "17 metros", correct: false },
      { text: "60 metros", correct: false },
      { text: "70 metros", correct: true },
      { text: "80 metros", correct: false }
    ],
    calculation: "7 x 10m = 70m.",
    level: "difficult"
  },
  {
    question: "Para uma competição, foram marcadas 5 pistas, e cada pista mede 9 metros. Qual é o comprimento total que todas as pistas somam?",
    answers: [
      { text: "45 metros", correct: true },
      { text: "80 metros", correct: false },
      { text: "60 metros", correct: false },
      { text: "21 metros", correct: false }
    ],
    calculation: "5 x 9m = 45m.",
    level: "difficult"
  },
  {
    question: "Um campinho de futebol tem 6 metros de comprimento. Se alguém correr esse comprimento 2 vezes (ida e volta), quantos metros terá percorrido?",
    answers: [
      { text: "9 metros", correct: false },
      { text: "12 metros", correct: true },
      { text: "10 metros", correct: false },
      { text: "19 metros", correct: false }
    ],
    calculation: "2 x 6m = 12m.",
    level: "difficult"
  },
  {
    question: "A Professora usou 8 pedaços de corda para uma atividade, e cada pedaço tinha 5 metros. Qual o total de metros de corda usados?",
    answers: [
      { text: "13 metros", correct: false },
      { text: "40 metros", correct: true },
      { text: "35 metros", correct: false },
      { text: "45 metros", correct: false }
    ],
    calculation: "8 x 5m = 40m.",
    level: "difficult"
  },
  {
    question: "Em um galpão, há 10 prateleiras, e cada prateleira mede 4 metros. Qual o comprimento total de todas as prateleiras?",
    answers: [
      { text: "14 metros", correct: false },
      { text: "40 metros", correct: true },
      { text: "50 metros", correct: false },
      { text: "30 metros", correct: false }
    ],
    calculation: "10 x 4m = 40m.",
    level: "difficult"
  },

  // 🟠 Difíceis — Multiplicação com Centímetros (cm)
  {
    question: "Uma caixa de fósforos mede 6 centímetros. Se enfileirarmos 10 caixas, qual será o comprimento total em centímetros?",
    answers: [
      { text: "16 centímetros", correct: false },
      { text: "50 centímetros", correct: false },
      { text: "60 centímetros", correct: true },
      { text: "70 centímetros", correct: false }
    ],
    calculation: "10 x 6cm = 60cm.",
    level: "difficult"
  },
  {
    question: "A Mamãe está fazendo 9 bonecos, e cada um precisa de 5 centímetros de linha para o cabelo. Quantos centímetros de linha ela precisa no total?",
    answers: [
      { text: "40 centímetros", correct: false },
      { text: "45 centímetros", correct: true },
      { text: "14 centímetros", correct: false },
      { text: "50 centímetros", correct: false }
    ],
    calculation: "9 x 5cm = 45cm.",
    level: "difficult"
  },
  {
    question: "Uma estante tem 5 andares, e a altura de cada andar é de 20 centímetros. Qual a altura total da estante?",
    answers: [
      { text: "25 centímetros", correct: false },
      { text: "100 centímetros", correct: true },
      { text: "110 centímetros", correct: false },
      { text: "15 centímetros", correct: false }
    ],
    calculation: "5 x 20cm = 100cm.",
    level: "difficult"
  },
  {
    question: "Papai construiu 8 pequenas prateleiras, e cada uma mede 11 centímetros. Qual o comprimento total de madeira utilizada?",
    answers: [
      { text: "19 centímetros", correct: false },
      { text: "80 centímetros", correct: false },
      { text: "88 centímetros", correct: true },
      { text: "78 centímetros", correct: false }
    ],
    calculation: "8 x 11cm = 88cm.",
    level: "difficult"
  },
  {
    question: "O Vovô mediu 7 lápis de cor, e cada um media 14 centímetros. Qual o comprimento total de todos os lápis juntos?",
    answers: [
      { text: "21 centímetros", correct: false },
      { text: "98 centímetros", correct: true },
      { text: "88 centímetros", correct: false },
      { text: "108 centímetros", correct: false }
    ],
    calculation: "7 x 14cm = 98cm.",
    level: "difficult"
  },
  // 🟢 Divisão — Metade (dividir por 2)
  {
    question: "A Professora tinha uma fita colorida de 12 metros de comprimento e dividiu-a ao meio (metade). Quantos metros cada pedaço ficou?",
    answers: [
      { text: "2 metros", correct: false },
      { text: "6 metros", correct: true },
      { text: "4 metros", correct: false },
      { text: "8 metros", correct: false }
    ],
    calculation: "12m ÷ 2 = 6m.",
    level: "easy"
  },
  {
    question: "Um rolo de barbante tem 20 centímetros. O Papai usou a metade para amarrar uma caixa. Quantos centímetros de barbante ele usou?",
    answers: [
      { text: "5 centímetros", correct: false },
      { text: "10 centímetros", correct: true },
      { text: "12 centímetros", correct: false },
      { text: "40 centímetros", correct: false }
    ],
    calculation: "20cm ÷ 2 = 10cm.",
    level: "easy"
  },
  {
    question: "Uma cerca tinha 18 metros e a Mamãe decidiu pintar a metade. Quantos metros da cerca ela pintou?",
    answers: [
      { text: "8 metros", correct: false },
      { text: "9 metros", correct: true },
      { text: "18 metros", correct: false },
      { text: "10 metros", correct: false }
    ],
    calculation: "18m ÷ 2 = 9m.",
    level: "easy"
  },
  {
    question: "Um giz de cera mede 8 centímetros. Se for quebrado exatamente na metade, qual será o tamanho de cada pedacinho?",
    answers: [
      { text: "2 centímetros", correct: false },
      { text: "4 centímetros", correct: true },
      { text: "6 centímetros", correct: false },
      { text: "16 centímetros", correct: false }
    ],
    calculation: "8cm ÷ 2 = 4cm.",
    level: "easy"
  },
  {
    question: "O Vovô comprou 24 metros de fio e usou a metade para fazer uma instalação. Quantos metros de fio ainda sobraram?",
    answers: [
      { text: "14 metros", correct: false },
      { text: "22 metros", correct: false },
      { text: "12 metros", correct: true },
      { text: "6 metros", correct: false }
    ],
    calculation: "24m ÷ 2 = 12m.",
    level: "difficult"
  },

  // 🟠 Divisão — Terça Parte (dividir por 3)
  {
    question: "Papai tinha uma corda de 9 metros e cortou-a em três partes iguais (terça parte). Quantos metros tinha cada pedaço?",
    answers: [
      { text: "6 metros", correct: false },
      { text: "3 metros", correct: true },
      { text: "9 metros", correct: false },
      { text: "4 metros", correct: false }
    ],
    calculation: "9m ÷ 3 = 3m.",
    level: "easy"
  },
  {
    question: "A Professora tinha 15 centímetros de massa de modelar e dividiu-a em três partes iguais. Qual o tamanho de cada parte?",
    answers: [
      { text: "3 centímetros", correct: false },
      { text: "5 centímetros", correct: true },
      { text: "6 centímetros", correct: false },
      { text: "12 centímetros", correct: false }
    ],
    calculation: "15cm ÷ 3 = 5cm.",
    level: "easy"
  },
  {
    question: "Uma pista de corrida tem 30 metros de comprimento. Se percorrermos a terça parte dessa pista, quantos metros teremos andado?",
    answers: [
      { text: "10 metros", correct: true },
      { text: "3 metros", correct: false },
      { text: "9 metros", correct: false },
      { text: "15 metros", correct: false }
    ],
    calculation: "30m ÷ 3 = 10m.",
    level: "difficult"
  },
  {
    question: "Um pedaço de madeira mede 27 centímetros. A Mamãe precisa cortar a terça parte. Quantos centímetros terão essa parte cortada?",
    answers: [
      { text: "24 centímetros", correct: false },
      { text: "9 centímetros", correct: true },
      { text: "7 centímetros", correct: false },
      { text: "10 centímetros", correct: false }
    ],
    calculation: "27cm ÷ 3 = 9cm.",
    level: "difficult"
  },
  {
    question: "A Vovó tinha 36 centímetros de linha e usou a terça parte para fazer uma pulseira. Quantos centímetros de linha ela usou?",
    answers: [
      { text: "18 centímetros", correct: false },
      { text: "12 centímetros", correct: true },
      { text: "10 centímetros", correct: false },
      { text: "6 centímetros", correct: false }
    ],
    calculation: "36cm ÷ 3 = 12cm.",
    level: "difficult"
  }
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answers');
const nextButton = document.getElementById('next-btn');
const feedbackElement = document.getElementById('feedback');
const acertoSom = document.getElementById('acerto-som');
const erroSom = document.getElementById('erro-som');

// Referências corrigidas para os elementos do placar
const correctCountElement = document.getElementById('correct-count');
const wrongCountElement = document.getElementById('wrong-count');
const counterTextElement = document.getElementById('counter-text');

const explanationBox = document.getElementById('explanation-box');
const calculationText = document.getElementById('calculation');

const difficultySelector = document.getElementById('difficulty');
const startButton = document.getElementById('start-btn');
const quizBox = document.getElementById('quiz-box');
let availableQuestions = []; // O array de questões filtradas que será usado no quiz.

let currentQuestionIndex = 0;
let correctAnswers = 0;
let wrongAnswers = 0;



// Função para embaralhar um array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// ATENÇÃO: Esta função será chamada apenas DEPOIS que a função filterQuestions() for executada.
function startQuiz() {
    // 1. Embaralha o array de questões filtrado (Fácil, Difícil ou Todas)
    shuffleArray(availableQuestions); 
    
    // 2. Zera as variáveis de controle do quiz
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    
    // 3. Atualiza o placar e o contador
    updateScoreAndCounter(); 
    
    // 4. Garante que o botão "Próxima Pergunta" esteja escondido no início
    nextButton.classList.add('hide'); 
    
    // 5. Mostra a primeira questão do array filtrado
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = availableQuestions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    updateScoreAndCounter();

    const shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    feedbackElement.innerText = '';
    explanationBox.classList.add('hide'); 
    calculationText.innerText = ''; 
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    // ESSENCIAL: Declarar a variável da pergunta atual aqui
    const currentQuestion = availableQuestions[currentQuestionIndex];
    
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    if (correct) {
        selectedButton.classList.add('correct');
        feedbackElement.innerText = 'Correto! 🎉';
        correctAnswers++;
        acertoSom.play();
    } else {
        selectedButton.classList.add('wrong');
        feedbackElement.innerText = 'Ops! Tente novamente. 🤔';
        wrongAnswers++;
        erroSom.play();
    }

    // NOVO: Exibe o cálculo correto
    calculationText.innerText = currentQuestion.calculation;
    explanationBox.classList.remove('hide'); // Torna a explicação visível

    updateScoreAndCounter();

    // BLOCO ÚNICO para desabilitar todos os botões e mostrar a resposta correta
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add('correct');
        }
        button.disabled = true;
    });

    // CRUCIAL: Mostrar o botão de próxima pergunta
    nextButton.classList.remove('hide');
}

// A função para atualizar o placar é a mais importante aqui.
function updateScoreAndCounter() {
    correctCountElement.innerText = `Acertos: ${correctAnswers}`;
    wrongCountElement.innerText = `Erros: ${wrongAnswers}`;
    counterTextElement.innerText = `Pergunta ${currentQuestionIndex + 1} de ${availableQuestions.length}`;
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < availableQuestions.length) {
        showQuestion();
    } else {
        questionElement.innerHTML = `Quiz finalizado! Você acertou <span style="color:#28a745;">${correctAnswers}</span> de ${availableQuestions.length} perguntas. Parabéns!`;
        resetState();
        nextButton.classList.add('hide');
    }
});

function filterQuestions() {
    const selectedLevel = difficultySelector.value;
    
    if (selectedLevel === 'all') {
        // Se 'Todas' foi selecionado, usa o array completo
        availableQuestions = [...questions]; 
    } else {
        // Filtra o array original com base no nível
        availableQuestions = questions.filter(q => q.level === selectedLevel);
    }
}

// Evento para o novo botão Começar Quiz
startButton.addEventListener('click', () => {
    filterQuestions();
    // Esconde o seletor de dificuldade e mostra o quiz
    document.getElementById('difficulty-selector').classList.add('hide-initial');
    quizBox.classList.remove('hide-initial');
    nextButton.classList.remove('hide-initial');

    startQuiz(); // Chama a função que inicia o quiz com o array filtrado
});