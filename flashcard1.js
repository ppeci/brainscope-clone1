

document.addEventListener("DOMContentLoaded", () => {

  /* -------------------------------
     1. CARD DATA (mock data)
     ------------------------------- */
 const cards = JSON.parse(localStorage.getItem("flashcards")) || [];

 if(cards.length === 0){
  alert("No flashcards found. Please create cards first.");
  window.location.href = "cards.html"; // or your create page
}


  /* -------------------------------
     2. STATE
     ------------------------------- */
  let currentCardIndex = 0;
  let totalScore = 0;
  const maxScore = cards.length * 5;

  /* -------------------------------
     3. DOM ELEMENTS
     ------------------------------- */
  const questionText = document.querySelector(".question p");
  const answerText = document.querySelector(".answer p");
  const answerCard = document.getElementById("answerCard");
  const ratingSection = document.getElementById("rating");
  const revealBtn = document.getElementById("revealBtn");
  const progressBar = document.getElementById("progressBar");
  const cardStudied=document.getElementById("studied-card");
  const totalCards=document.getElementById("total-cards");
  // Set total cards count
  totalCards.textContent=cards.length;

  /* -------------------------------
     4. RENDER CARD
     ------------------------------- */
  function renderCard() {
    const card = cards[currentCardIndex];

    questionText.textContent = card.question;
    answerText.textContent = card.answer;

    // Reset UI
    answerCard.classList.add("hidden");
    ratingSection.classList.add("hidden");
    revealBtn.disabled = false;
    revealBtn.textContent = "REVEAL ANSWER";
    revealBtn.style.opacity = "1";
  }

  /* -------------------------------
     5. REVEAL ANSWER
     ------------------------------- */
  revealBtn.addEventListener("click", () => {
    answerCard.classList.remove("hidden");
    ratingSection.classList.remove("hidden");

    revealBtn.disabled = true;
    revealBtn.textContent = "ANSWER SHOWN";
    revealBtn.style.opacity = "0.6";
  });

  /* -------------------------------
     6. HANDLE RATING CLICK
     ------------------------------- */
  function handleRatingClick(rating) {
    totalScore += rating;

    updateProgressBar();

    currentCardIndex++;

    // Small delay for UX
    setTimeout(() => {
      if (currentCardIndex < cards.length) {
        renderCard();
      } else {
        showCompletion();
      }
    }, 400);
  }

  document.querySelectorAll(".circle").forEach(circle => {
    circle.addEventListener("click", () => {
      const rating = Number(circle.dataset.value);
      handleRatingClick(rating);
      cardStudied.textContent = currentCardIndex + 1;
    });
  });

  /* -------------------------------
     7. PROGRESS BAR
     ------------------------------- */
  function updateProgressBar() {
    if (!progressBar) return; // guard in case progressBar isn't present in the HTML
    const percentage = (totalScore / maxScore) * 100;
    progressBar.style.width = percentage + "%";
  }

  /* -------------------------------
     8. COMPLETION SCREEN
     ------------------------------- */
  function showCompletion() {
    window.location.href = "finalpage.html";
  }

  /* -------------------------------
     9. INIT
     ------------------------------- */
  renderCard();

});

const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const target = tab.dataset.tab;

    // deactivate all
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));

    // activate selected
    tab.classList.add("active");
    document.getElementById(target).classList.add("active");
  });
});

const username = localStorage.getItem('username');
if (username) {
    

    // Display first letter in avatar (uppercase)
    document.querySelector('.avatar').textContent = username.charAt(0).toUpperCase();}

     const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");
const overlay = document.getElementById("overlay");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  overlay.classList.toggle("active");
});

// Close sidebar when overlay is clicked
overlay.addEventListener("click", () => {
  sidebar.classList.remove("active");
  overlay.classList.remove("active");
});