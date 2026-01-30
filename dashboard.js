const progressiveBtn = document.querySelector('.progressive');
const randomBtn = document.querySelector('.random');

progressiveBtn.addEventListener('click', () => {
    progressiveBtn.style.backgroundColor = '#656c72';
    progressiveBtn.style.color = 'white';
    randomBtn.style.backgroundColor = 'white';
    randomBtn.style.color = '#656c72';
});

randomBtn.addEventListener('click', () => {
    randomBtn.style.backgroundColor = '#656c72';
    randomBtn.style.color = 'white';
    progressiveBtn.style.backgroundColor = 'white';
    progressiveBtn.style.color = '#656c72';
});

const aboutLink = document.getElementById('about-link');
const deckLink = document.getElementById('Deck-link');
const leaderLink = document.getElementById('leaderboard-link');

aboutLink.addEventListener('click', function() {
    aboutLink.style.color="#1e88e5";
    deckLink.style.color="black";
    leaderLink.style.color="black";
});
deckLink.addEventListener('click', function() {
    deckLink.style.color="#1e88e5";
    aboutLink.style.color="black";
    leaderLink.style.color="black";});
leaderLink.addEventListener('click', function() {
    leaderLink.style.color="#1e88e5";
    aboutLink.style.color="black";
    deckLink.style.color="black";});        

    const studybtn = document.querySelector('.primary');
    studybtn.addEventListener('click', function() {
        window.location.href = 'flashcard.html';
    });
// Toggle layout when "Rehab" button is pressed
const btn = document.getElementById("rehab");
const continer = document.getElementById("container");

btn.addEventListener("click", () => {
  continer.classList.toggle("show-main");
});

    /*  const createbtn = document.getElementById('add-class');
  const deckWithButton = createbtn.parentElement; // the <div class="deck"> containing the button
  const container = deckWithButton.parentElement; // parent of all decks

  createbtn.addEventListener('click', function() {
    // Create the outer deck div
    const newDeck = document.createElement('div');
    newDeck.className = 'deck';

    // Add the image
    const img = document.createElement('img');
    img.src = "https://placekitten.com/60/60"; // placeholder image
    img.alt = "New Subject";

    // Add the deck-info div
    const deckInfo = document.createElement('div');
    deckInfo.className = 'deck-info';

    // Title inside deck-info
    const title = document.createElement('p');
    title.textContent = "New Subject";

    // Progress bar inside deck-info
    const progress = document.createElement('div');
    progress.className = 'progress';

    // Assemble deck-info
    deckInfo.appendChild(title);
    deckInfo.appendChild(progress);

    // Assemble deck
    newDeck.appendChild(img);
    newDeck.appendChild(deckInfo);

     newDeck.addEventListener('click', () => {
    window.location.href = "makeone.html"; // replace with your page
  });



    // Insert above the "Add new class" button deck
    container.insertBefore(newDeck, deckWithButton);
  });
*/

const createbtn = document.getElementById('add-class');
  const deckWithButton = createbtn.parentElement;
  const container = deckWithButton.parentElement;

  // Render all saved decks on load
  window.addEventListener('DOMContentLoaded', () => {
    const classes = JSON.parse(localStorage.getItem('classNames')) || [];
    classes.forEach(className => {
      createDeck(className);
    });
  });

  // Function to create a deck
  function createDeck(className) {
    const newDeck = document.createElement('div');
    newDeck.className = 'deck';

    const img = document.createElement('img');
    img.src = "https://placekitten.com/60/60";
    img.alt = className;

    const deckInfo = document.createElement('div');
    deckInfo.className = 'deck-info';

    const title = document.createElement('p');
    title.textContent = className;

    const progress = document.createElement('div');
    progress.className = 'progress';

    deckInfo.appendChild(title);
    deckInfo.appendChild(progress);

    newDeck.appendChild(img);
    newDeck.appendChild(deckInfo);

    // Click event to go to another page
    newDeck.addEventListener('click', () => {
      window.location.href = "flashcard1.html"; // replace with your page
    });

    container.insertBefore(newDeck, deckWithButton);
  }

  // Add new class button → go to maketwo.html
  createbtn.addEventListener('click', () => {
    window.location.href = "maketwo.html";
  });



 const username = localStorage.getItem('username');

  if (username) {
    // Display username
    document.getElementById('user-name').textContent = username;

    // Display first letter in avatar (uppercase)
    document.querySelector('.avatar').textContent = username.charAt(0).toUpperCase();
  }

  const aboutLink1 = document.getElementById("about-link");
  const deckLink1 = document.getElementById("Deck-link");
  const leaderLink1 = document.getElementById("leaderboard-link");

  const aboutView = document.getElementById("about-view");
  const decksView = document.getElementById("deck-view");
  const leaderboardView = document.getElementById("leaderboard-view");

  

  function showView(view) {
    aboutView && aboutView.classList.add("hidden1");
    decksView && decksView.classList.add("hidden1");
    leaderboardView && leaderboardView.classList.add("hidden1");

    aboutLink1.classList.remove("active");
    deckLink1.classList.remove("active");
    leaderLink1.classList.remove("active");

    view.section && view.section.classList.remove("hidden1");
    view.link.classList.add("active");
  }

  aboutLink1.addEventListener("click", (e) => {
    e.preventDefault();
    showView({ section: aboutView, link: aboutLink1 });
  });

  deckLink1.addEventListener("click", (e) => {
    e.preventDefault();
    showView({ section: decksView, link: deckLink1 });
  });

  leaderLink1.addEventListener("click", (e) => {
    e.preventDefault();
    showView({ section: leaderboardView, link: leaderLink1 });
  });

  // default view on load
  showView({ section: decksView, link: deckLink1});


  const toggle = document.getElementById("sidebar-toggle");
  const containerr = document.getElementById("container");

  toggle.addEventListener("click", () => {
    containerr.classList.toggle("collapsed");
  });
