let tempCards = [];

// Get elements
const questionInput = document.getElementById("question");
const answerInput   = document.getElementById("answer");
const addBtn = document.getElementById("addBtn");
const doneBtn = document.getElementById("doneBtn");

// Get last ID from localStorage or start at 1
let lastId = Number(localStorage.getItem("lastCardId")) || 0;

// Add Another Card
addBtn.addEventListener("click", () => {

  const question = questionInput.value.trim();
  const answer   = answerInput.value.trim();

  if(question === "" || answer === ""){
    alert("Please enter both question and answer.");
    return;
  }

  // Increment ID
  lastId++;

  const card = {
    id: lastId,
    question: question,
    answer: answer
  };

  tempCards.push(card);

  questionInput.value = "";
  answerInput.value = "";

  alert("Card added!");
});

// Done Button
doneBtn.addEventListener("click", () => {

  if(tempCards.length === 0){
    alert("No cards to save.");
    return;
  }

  // Get existing cards
  let existing = JSON.parse(localStorage.getItem("flashcards")) || [];

  // Combine old + new
  let combined = existing.concat(tempCards);

  // Save cards
  localStorage.setItem("flashcards", JSON.stringify(combined));

  // Save last used ID
  localStorage.setItem("lastCardId", lastId);

  // Reset temporary array
  tempCards = [];

  alert("Flashcards saved!");
  window.location.href = "flashcard1.html"; // or your flashcard review page
});

