const input = document.getElementById('textinputsTitle');
const btn = document.getElementById('create');
const rect = document.querySelector('#createSvg rect');
const exitBtn = document.getElementById('exit');

input.addEventListener('input', () => {
  const hasText = input.value.trim() !== '';
  rect.setAttribute('fill', hasText ? '#ff8a47' : '#CECECE');
  btn.style.cursor = hasText ? 'pointer' : 'not-allowed';
});

btn.addEventListener('click', () => {
  const deckTitle = input.value.trim();
  if (!deckTitle) {
    alert("Please enter a deck title!");
    return;
  }

//saving
  localStorage.setItem("deckTitle", deckTitle);
  window.location.href = 'cards.html';
});

exitBtn.addEventListener('click', () => {
  window.location.href = 'dashboard.html';
});
