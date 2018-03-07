var quizDisplay = document.getElementById('maincont');
var resultsDisplay = document.getElementById('results');
var submitButton = document.getElementById('submit');

function buildQuiz () {

  var output = []

  elderQuestions.forEach(
    (currentQuestion, questionNumber) => {

      var answers = [];

      for(letter in currentQuestion.answers) {

        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  quizDisplay.innerHTML = output.join('');
}

elderQuestions.forEach( (currentQuestion, questionNumber) => {
  // storing answers
const answers = [];

// for each available letter in the current question, we will do this..
for(letter in currentQuestion.answers){

  // adding html radio button
  answers.push(
    `<label>
      <input type="radio" name="question${questionNumber}" value="${letter}">
      ${letter} :
      ${currentQuestion.answers[letter]}
    </label>`
  );
}

output.push(
  `<div class="question"> ${currentQuestion.question} </div>
  <div class="answers"> ${answers.join('')} </div>`
);

quizDisplay.innerHTML = output.join('');

});

function showResults () {
  function showResults(){

buildQuiz ();

submitButton.addEventListener('click', showResults);

var elderQuestions = [
  {
    question: "Who is behind the main crisis of the Elder Scrolls IV: Oblivion?",
    answers: {
      a: "Azura",
      b: "Mehrunes Dagon",
      c: "Clavicus Vile",
      d: "Hermaeus Mora"
    },
    correctAnswer: "b"
  },
  {
    question: "Who is the traitor during the Dark Brotherhood questline",
    answers: {
      a: "Vicente Valtieri",
      b: "Gaston Bellefort",
      c: "Matthieu Bellemont",
      d: "Lucien Lachance"
    },
    correctAnswer: "c"
  },
  {
    question: "During which city's Mage's Guild reccomendation quest do you retrieve the ancient tome: Fingers of The Mountain?",
    answers: {
      a: "Chorrol",
      b: "Bruma",
      c: "Bravil",
      d: "Leyawiin"
    },
    correctAnswer: "a"
  },
  {
    question: "What is the name of the opposing guild to the Fighters Guild? (Hint: It's in Leyawiin.)",
    answers: {
      a: "Thieves of the Nibenay",
      b: "The Glorious Lions",
      c: "Sorcerers of Frostcrag",
      d: "The Blackwood Company"
    },
    correctAnswer: "d"
  }
];
