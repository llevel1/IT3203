// This function grades the quiz and shows results on the same page
function gradeQuiz() {
  let score = 0;
  let total = 5;

  // Get user answer for question 1
  let q1 = document.getElementById("q1").value.trim().toLowerCase();
  let q1CorrectAnswer = "Tim Berners-Lee";
  let q1UserDisplay = document.getElementById("q1").value.trim();

  let q1Correct =
    q1 === "tim berners-lee" ||
    q1 === "tim berners lee" ||
    q1 === "sir tim berners-lee" ||
    q1 === "sir tim berners lee";

  if (q1Correct) {
    score++;
  }

  // Get user answer for question 2
  let q2 = document.querySelector('input[name="q2"]:checked');
  let q2CorrectAnswer = "HyperText Markup Language";
  let q2UserDisplay = q2 ? q2.parentElement.textContent.trim() : "No answer selected";
  let q2Correct = q2 && q2.value === "b";

  if (q2Correct) {
    score++;
  }

  // Get user answer for question 3
  let q3 = document.querySelector('input[name="q3"]:checked');
  let q3CorrectAnswer = "Internet Explorer";
  let q3UserDisplay = q3 ? q3.parentElement.textContent.trim() : "No answer selected";
  let q3Correct = q3 && q3.value === "c";

  if (q3Correct) {
    score++;
  }

  // Get user answer for question 4
  let q4 = document.querySelector('input[name="q4"]:checked');
  let q4CorrectAnswer = "Web communication between browser and server";
  let q4UserDisplay = q4 ? q4.parentElement.textContent.trim() : "No answer selected";
  let q4Correct = q4 && q4.value === "b";

  if (q4Correct) {
    score++;
  }

  // Get user answers for question 5
  let selectedQ5 = document.querySelectorAll('input[name="q5"]:checked');
  let answersQ5 = [];

  for (let i = 0; i < selectedQ5.length; i++) {
    answersQ5.push(selectedQ5[i].value);
  }

  let q5CorrectAnswer = "Rendering Engine, Networking, Data Storage";
  let q5UserDisplay = answersQ5.length > 0 ? answersQ5.join(", ") : "No answer selected";

  let q5Correct =
    answersQ5.includes("rendering") &&
    answersQ5.includes("networking") &&
    answersQ5.includes("storage") &&
    !answersQ5.includes("keyboard") &&
    answersQ5.length === 3;

  if (q5Correct) {
    score++;
  }

  // Decide pass or fail
  let passFail = score >= 4 ? "PASS" : "FAIL";
  let passFailClass = score >= 4 ? "pass-text" : "fail-text";

  // Show all results on the page
  let results = document.getElementById("results");

  results.innerHTML = `
    <div class="results-box">
      <h3 class="${passFailClass}">Overall Result: ${passFail}</h3>
      <p><strong>Total Score:</strong> <span class="${passFailClass}">${score} / ${total}</span></p>

      <h3>Question Results</h3>

      <div class="question-result">
        <p><strong>Question 1:</strong> <span class="${q1Correct ? 'correct-text' : 'incorrect-text'}">${q1Correct ? 'Correct' : 'Incorrect'}</span></p>
        <p><strong>Your Answer:</strong> ${q1UserDisplay || "No answer entered"}</p>
        <p><strong>Correct Answer:</strong> ${q1CorrectAnswer}</p>
      </div>

      <div class="question-result">
        <p><strong>Question 2:</strong> <span class="${q2Correct ? 'correct-text' : 'incorrect-text'}">${q2Correct ? 'Correct' : 'Incorrect'}</span></p>
        <p><strong>Your Answer:</strong> ${q2UserDisplay}</p>
        <p><strong>Correct Answer:</strong> ${q2CorrectAnswer}</p>
      </div>

      <div class="question-result">
        <p><strong>Question 3:</strong> <span class="${q3Correct ? 'correct-text' : 'incorrect-text'}">${q3Correct ? 'Correct' : 'Incorrect'}</span></p>
        <p><strong>Your Answer:</strong> ${q3UserDisplay}</p>
        <p><strong>Correct Answer:</strong> ${q3CorrectAnswer}</p>
      </div>

      <div class="question-result">
        <p><strong>Question 4:</strong> <span class="${q4Correct ? 'correct-text' : 'incorrect-text'}">${q4Correct ? 'Correct' : 'Incorrect'}</span></p>
        <p><strong>Your Answer:</strong> ${q4UserDisplay}</p>
        <p><strong>Correct Answer:</strong> ${q4CorrectAnswer}</p>
      </div>

      <div class="question-result">
        <p><strong>Question 5:</strong> <span class="${q5Correct ? 'correct-text' : 'incorrect-text'}">${q5Correct ? 'Correct' : 'Incorrect'}</span></p>
        <p><strong>Your Answer:</strong> ${q5UserDisplay}</p>
        <p><strong>Correct Answer:</strong> ${q5CorrectAnswer}</p>
      </div>
    </div>
  `;
}

// This function clears the quiz answers and removes the results
function resetQuiz() {
  // Reset the form inputs
  document.getElementById("quizForm").reset();

  // Clear the results area
  document.getElementById("results").innerHTML = "";
}
