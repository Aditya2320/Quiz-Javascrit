const questions = [
  {
    question: "Which one of the following statements is TRUE for all positive functions f (n) ?",
    answers: {
      a: "f (n2 ) =  ( f (n)2 ), when  f (n) is a polynomial",
      b: "f (n2 ) = o( f (n)2 )",
      c: "Mf (n2 ) = O( f (n)2 ), when f (n) is an exponential function",
      d: "f (n2 ) = ( f (n)2 )"
    },
    correctAnswer: "a"
  },
  {
    question: "Which one of the following statements is TRUE?",
    answers: {
      a: "The LALR(1) parser for a grammar G cannot have reduce-reduce conflict if the LR(1) parser for G does not have reduce-reduce conflict",
      b: "Symbol table is accessed only during the lexical analysis phase",
      c: "Data flow analysis is necessary for run-time memory management",
      d: "LR(1) parsing is sufficient for deterministic context-free languages"
    },
    correctAnswer: "d"
  },
  {
    question: "Which one of the following facilitates transfer of bulk data from hard disk to main memory with the highest throughput?",
    answers: {
      a: "Programmed I/O transfer",
      b: "DMA based I/O transfer",
      c: "Interrupt driven I/O transfer",
      d: "Polling based I/O transfer"
    },
    correctAnswer: "b"
  },
  {
    question: "Which one of the following statements is FALSE?",
    answers: {
      a: "The TLB performs an associative search in parallel on all its valid entries using page number of incoming virtual address.",
      b: "If the virtual address of a word given by CPU has a TLB hit, but the subsequent search for the word results in a cache miss, then the word will always be present in the main memory.",
      c: "The memory access time using a given inverted page table is always same for all incoming virtual addresses.",
      d: "In a system that uses hashed page tables, if two distinct virtual addresses V1 and V2 map to the same value while hashing, then the memory access time of these addresses will not be the same."
    },
    correctAnswer: "c"
  },
  {
    question: "In a relational data model, which one of the following statements is TRUE?",
    answers: {
      a: "A relation with only two attributes is always in BCNF.",
      b: "If all attributes of a relation are prime attributes, then the relation is in BCNF.",
      c: "Every relation has at least one non-prime attribute.",
      d: "BCNF decompositions preserve functional dependencies."
    },
    correctAnswer: "a"
  }
];

const questionEl = document.getElementById("question");
const answerEls = document.getElementsByName("answer");
const submitBtn = document.getElementById("submit");
const resultEl = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

loadQuestion();

function loadQuestion() {
  questionEl.innerText = questions[currentQuestion].question;
  answerEls.forEach((answerEl, index) => {
    answerEl.nextElementSibling.innerText = questions[currentQuestion].answers[answerEl.value];
  });
}

function getSelected() {
  let selectedAnswer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      selectedAnswer = answerEl.value;
    }
  });

  return selectedAnswer;
}

submitBtn.addEventListener("click", () => {
  const selectedAnswer = getSelected();

  if (selectedAnswer) {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      questionEl.innerText = "";
      answerEls.forEach((answerEl) => {
        answerEl.nextElementSibling.innerText = "";
      });
      submitBtn.style.display = "none";
      resultEl.innerText = `You scored ${score} out of ${questions.length}.`;
    }
  }
});
