const meowSounds = [
  new Audio('media/meow-1.wav'),
  new Audio('media/meow-2.wav'),
  new Audio('media/meow-3.wav')
];

window.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * meowSounds.length);
  const currentSound = meowSounds[randomIndex];
  console.log(randomIndex);
   console.log(currentSound);

  currentSound.currentTime = 0;
  currentSound.play();
});