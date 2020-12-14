// original code came from: https://jsfiddle.net/macloo/e839csoL/

// global vars
let message = "";
let score = 0;
let notDone = 0;
let done = 0;
let total = 0;
let answerList = [];

// make all the answer buttons work
const anyButton = document.querySelectorAll('#answer-buttons .butt');
anyButton.forEach(function(e) {
  // run the function named main on click
  e.addEventListener('click', main);
});
// this is the Start or Next button only
const singleButton = document.querySelector('#other-buttons .butt');
// run the function named control on click
singleButton.addEventListener('click', control);

// this runs only once
function setup() {
  total = questions.length;
  notDone = total;
  message = "Play the memory game!";
  document.querySelector("#answer-buttons").classList.add('hide');
  document.querySelector("#other-buttons .butt").textContent = "Start";
  writeResults();
}

// this runs when any answer button is clicked
function main() {
  if (done !== total) {
  	if (this.textContent === questions[done].answer) {
    	// answer is correct
      score++;
      message = "Correct!";
    } else {
    	// answer is wrong
      message = "Sorry, the correct answer was: " + questions[done].answer;
    }
    done++
    notDone--;
    document.querySelector("#other-buttons").classList.remove('hide');
		document.querySelector("#answer-buttons").classList.add('hide');
    writeResults();
  }
}

// for the Start and Next button
function control() {
  if (done !== total) {
    document.querySelector("#other-buttons .butt").textContent = "Next";
    document.querySelector("#answer-buttons").classList.remove('hide');
    loadNewQuestion();
  } else {
  	message = "You're on your way to becoming a yoga expert! Thanks for playing!";
  }
  document.querySelector("#other-buttons").classList.add('hide');
  writeResults();
}

// get question and answers from the array named questions
function loadNewQuestion() {
  document.getElementById("x").src=questions[done].img;
  message = questions[done].question;
  answerList = [questions[done].answer,
    questions[done].wrong_answer_1,
    questions[done].wrong_answer_2
  ];
  answerList = shuffle(answerList);
}

function writeResults() {
  document.querySelector("#narration").textContent = message;
  document.querySelector("#score").textContent = score;
  document.querySelector("#notDone").textContent = notDone;
  document.querySelector("#done").textContent = done;
  // use current contents of answerList to write text
  // into the buttons
  for (let i = 0; i < answerList.length; i++) {
    anyButton[i].textContent = answerList[i];
  }
}

// shuffle all items in an array
function shuffle(questions) {
  for (let i = 0; i < questions.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (questions.length - i));
    let temp = questions[j];
    questions[j] = questions[i];
    questions[i] = temp;
  }
  return questions;
}


const questions = [{
    img: "images/fish.jpg",
    question: "What is the common English name of this pose?",
    answer: "Fish pose",
    wrong_answer_1: "Plow pose",
    wrong_answer_2: "Dolphin pose"
  },
  {
    img: "images/staff.jpg",
    question: "What Asana is this?",
    answer: "Chaturanga",
    wrong_answer_1: "Matsyasana",
    wrong_answer_2: "Agnistambhasana"
  },
  {
    img: "images/pigeon.jpg",
    question: "What is the purpose of this pose?",
    answer: "This pose is meant to stretch and open the hips and groin. It is also intended to be introspective and calming.",
    wrong_answer_1: "The purpose of this pose is to strengthen the core and upper body.",
    wrong_answer_2: "The purpose of this pose is to energize the body and tonify the kidneys."
  },
  {
    img: "images/twist.jpg",
    question: "What is a common mistake of this pose?",
    answer: "With the seated spinal twist, people forget to stretch deeper into the pose with every breath.",
    wrong_answer_1: "With the seated spinal twist, people forget to hinge forward from the hips.",
    wrong_answer_2: "With the seated spinal twist, people forget to look toward the sky."
  },
  {
    img: "images/revolved.jpg",
    question: "What is the common English name of this pose?",
    answer: "Revolved Head to Knee pose",
    wrong_answer_1: "Half Pyramid pose",
    wrong_answer_2: "Firelog pose"
  },
  {
    img: "images/warrior.jpg",
    question: "What is the common English name of this pose?",
    answer: "Reverse Warrior II",
    wrong_answer_1: "Half Moon Pose",
    wrong_answer_2: "Half Pyramid"
  },
  {
    img: "images/bow.jpg",
    question: "What Asana is this?",
    answer: "Dhanurasana",
    wrong_answer_1: "Halasana",
    wrong_answer_2: "Ardha Pincha Mayurasana"
  },
  {
    img: "images/plow.jpg",
    question: "What is the purpose of this pose?",
    answer: "The purpose of the Plow pose is to stimulate blood and lymph circulation to boost the immune system and the thyroid.",
    wrong_answer_1: "The purpose of the Plow pose is to reduce anxiety and open the chest.",
    wrong_answer_2: "The purpose of the Plow pose is to open the hips."
  },
  {
    img: "images/firelog.jpg",
    question: "What is the common English name of this pose?",
    answer: "Firelog pose",
    wrong_answer_1: "Revolved Head to Knee pose",
    wrong_answer_2: "Seated Spinal Twist pose"
  },
  {
    img: "images/dolphin.jpg",
    question: "What is a common mistake when doing this pose?",
    answer: "Not hinging at the hips and keeping the torso in a straight line",
    wrong_answer_1: "Not engaging core to keep balance",
    wrong_answer_2: "Not turning the torso outward"
  },
  {
    img: "images/moon.jpg",
    question: "What is the common english name of this pose?",
    answer: "Half Moon pose",
    wrong_answer_1: "Half Pyramid pose",
    wrong_answer_2: "Reverse Warrior II pose"
  },
  {
    img: "images/pyramid.jpg",
    question: "What is a common mistake when doing this pose?",
    answer: "Slouching and not keeping your back straight to properly hinge from the hips",
    wrong_answer_1: "Not engaging your core",
    wrong_answer_2: "Not relaxing your knees and letting them drop to the ground"
  },
]; // end of questions array

setup();
