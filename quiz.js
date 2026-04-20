// This function grades the quiz and shows detailed results
function gradeQuiz() {
  let score = 0;
  let total = 5;

  // Question 1: fill in the blank
  let q1Input = document.getElementById("q1").value.trim();
  let q1 = q1Input.toLowerCase();
  let q1CorrectAnswer = "Tim Berners-Lee";

  let q1Correct =
    q1 === "tim berners-lee" ||
    q1 === "tim berners lee" ||
    q1 === "sir tim berners-lee" ||
    q1 === "sir tim berners lee";

  if (q1Correct) {
    score++;
  }

  // Question 2: multiple choice
  let q2 = document.querySelector('input[name="q2"]:checked');
  let q2CorrectAnswer = "HyperText Markup Language";
  let q2UserAnswer = q2 ? q2.parentElement.textContent.trim() : "No answer selected";
  let q2Correct = q2 && q2.value === "b";

  if (q2Correct) {
    score++;
  }

  // Question 3: multiple choice
  let q3 = document.querySelector('input[name="q3"]:checked');
  let q3CorrectAnswer = "Internet Explorer";
  let q3UserAnswer = q3 ? q3.parentElement.textContent.trim() : "No answer selected";
  let q3Correct = q3 && q3.value === "c";

  if (q3Correct) {
    score++;
  }

  // Question 4: multiple choice
  let q4 = document.querySelector('input[name="q4"]:checked');
  let q4CorrectAnswer = "Web communication between browser and server";
  let q4UserAnswer = q4 ? q4.parentElement.textContent.trim() : "No answer selected";
  let q4Correct = q4 && q4.value === "b";

  if (q4Correct) {
    score++;
  }

  // Question 5: multi-selection
  let selectedQ5 = document.querySelectorAll('input[name="q5"]:checked');
  let answersQ5 = [];

  for (let i = 0; i < selectedQ5.length; i++) {
    answersQ5.push(selectedQ5[i].value);
  }

  let q5CorrectAnswer = "Rendering Engine, Networking, Data Storage";
  let q5UserAnswer = answersQ5.length > 0 ? answersQ5.join(", ") : "No answer selected";

  let q5Correct =
    answersQ5.includes("rendering") &&
    answersQ5.includes("networking") &&
    answersQ5.includes("storage") &&
    !answersQ5.includes("keyboard") &&
    answersQ5.length === 3;

  if (q5Correct) {
    score++;
  }

  // Pass/fail message
  let passMessage = "";
  let passClass = "";

  if (score >= 4) {
    passMessage = "You passed!";
    passClass = "pass-text";
  } else {
    passMessage = "Sorry, you failed.";
    passClass = "fail-text";
  }

  // Show results
  let results = document.getElementById("results");

  results.innerHTML = `
    <div class="results-box">
      <h3 class="${passClass}">${passMessage}</h3>
      <p><strong>Your Score:</strong> <span class="${passClass}">${score} out of ${total}</span></p>

      <h3>Question Results</h3>

      <div class="question-result">
        <p><strong>Question 1:</strong> <span class="${q1Correct ? 'correct-text' : 'incorrect-text'}">${q1Correct ? 'Correct' : 'Incorrect'}</span></p>
        <p><strong>Your Answer:</strong> ${q1Input || "No answer entered"}</p>
        <p><strong>Correct Answer:</strong> ${q1CorrectAnswer}</p>
      </div>

      <div class="question-result">
        <p><strong>Question 2:</strong> <span class="${q2Correct ? 'correct-text' : 'incorrect-text'}">${q2Correct ? 'Correct' : 'Incorrect'}</span></p>
        <p><strong>Your Answer:</strong> ${q2UserAnswer}</p>
        <p><strong>Correct Answer:</strong> ${q2CorrectAnswer}</p>
      </div>

      <div class="question-result">
        <p><strong>Question 3:</strong> <span class="${q3Correct ? 'correct-text' : 'incorrect-text'}">${q3Correct ? 'Correct' : 'Incorrect'}</span></p>
        <p><strong>Your Answer:</strong> ${q3UserAnswer}</p>
        <p><strong>Correct Answer:</strong> ${q3CorrectAnswer}</p>
      </div>

      <div class="question-result">
        <p><strong>Question 4:</strong> <span class="${q4Correct ? 'correct-text' : 'incorrect-text'}">${q4Correct ? 'Correct' : 'Incorrect'}</span></p>
        <p><strong>Your Answer:</strong> ${q4UserAnswer}</p>
        <p><strong>Correct Answer:</strong> ${q4CorrectAnswer}</p>
      </div>

      <div class="question-result">
        <p><strong>Question 5:</strong> <span class="${q5Correct ? 'correct-text' : 'incorrect-text'}">${q5Correct ? 'Correct' : 'Incorrect'}</span></p>
        <p><strong>Your Answer:</strong> ${q5UserAnswer}</p>
        <p><strong>Correct Answer:</strong> ${q5CorrectAnswer}</p>
      </div>
    </div>
  `;
}

// This function resets the form and clears the results
function resetQuiz() {
  document.getElementById("quizForm").reset();
  document.getElementById("results").innerHTML = "";
}
