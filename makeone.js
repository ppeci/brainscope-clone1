const input = document.getElementById('textinputs');
const createBtn = document.getElementById('create'); 
const rect = document.querySelector('#createSvg rect');

input.addEventListener('input', () => {
  const hasText = input.value.trim() !== '';
  rect.setAttribute('fill', hasText ? '#ff8a47' : '#CECECE');
  createBtn.style.cursor = hasText ? 'pointer' : 'not-allowed';
});

createBtn.addEventListener('click', () => {
  const className = input.value.trim();
  if (!className) {
    alert("Please enter a class name");
    return;
  }

//save
  localStorage.setItem("classNames", className);
  window.location.href = 'maketwo.html';
});
s
const exitBtn = document.getElementById('exit');
exitBtn.addEventListener('click', () => {
  window.location.href = 'dashboard.html';
});
