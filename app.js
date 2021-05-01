const weatherCard = document.querySelector(".weather");

const states = [
  'weather--morning',
  'weather--noon',
  'weather--night',
];

let current = 0;

weatherCard.addEventListener('click', (e) => {
  const next = (current + 1) % 3;
  weatherCard.classList.replace(states[current], states[next]);
  current = next;
});