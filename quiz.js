// This function checks the quiz answers and shows the score
function gradeQuiz() {
  let score = 0;
  let total = 5;

  // Get the fill in the blank answer and make it lowercase
  let q1 = document.getElementById("q1").value.trim().toLowerCase();

  // Check question 1
  if (
    q1 === "tim berners-lee" ||
    q1 === "tim berners lee" ||
    q1 === "sir tim berners-lee" ||
    q1 === "sir tim berners lee"
  ) {
    score++;
  }

  // Check question 2
  let q2 = document.querySelector('input[name="q2"]:checked');
  if (q2 && q2.value === "b") {
    score++;
  }

  // Check question 3
  let q3 = document.querySelector('input[name="q3"]:checked');
  if (q3 && q3.value === "c") {
    score++;
  }

  // Check question 4
  let q4 = document.querySelector('input[name="q4"]:checked');
  if (q4 && q4.value === "b") {
    score++;
  }

  // Check question 5
  let selectedQ5 = document.querySelectorAll('input[name="q5"]:checked');
  let answersQ5 = [];

  for (let i = 0; i < selectedQ5.length; i++) {
    answersQ5.push(selectedQ5[i].value);
  }

  // Correct answers are rendering, networking, and storage
  let correctQ5 =
    answersQ5.includes("rendering") &&
    answersQ5.includes("networking") &&
    answersQ5.includes("storage") &&
    !answersQ5.includes("keyboard") &&
    answersQ5.length === 3;

  if (correctQ5) {
    score++;
  }

  // Show results
  let results = document.getElementById("results");
  results.innerHTML = "<h3>Your Score: " + score + " out of " + total + "</h3>";

  // Add feedback
  if (score === 5) {
    results.innerHTML += "<p>Excellent job! You know the material very well.</p>";
  } else if (score >= 3) {
    results.innerHTML += "<p>Good work. Review a few sections and try again.</p>";
  } else {
    results.innerHTML += "<p>You may want to review the website and retake the quiz.</p>";
  }
}
