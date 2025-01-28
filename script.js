const noBtn = document.getElementById('no-btn');
const yesBtn = document.getElementById('yes-btn');


noBtn.addEventListener('mouseover', () => {
  let x, y;
  const buffer = 50; // Space to avoid overlap
  const yesBtnRect = yesBtn.getBoundingClientRect();

  do {
    x = Math.random() * (window.innerWidth - 100);
    y = Math.random() * (window.innerHeight - 50);
  } while (
    x < yesBtnRect.right + buffer &&
    x + 100 > yesBtnRect.left - buffer &&
    y < yesBtnRect.bottom + buffer &&
    y + 50 > yesBtnRect.top - buffer
  );

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});


yesBtn.addEventListener('click', () => {
  document.body.innerHTML = `
    <div class="celebration">
      <div class="text-container">
        <h1 class="animated-text">Yay!I knew it!! 🎉</h1>
        <p class="message">I Love you sooo much my JB Babyyyy! 😘💞</p>
        <p class="thanks">Thank you for being mine! ❤️</p>
      </div>
      <div class="image-container">
        <img src="https://media1.tenor.com/m/6qeSIGOvo08AAAAd/happy-mayaka.gif" alt="Happy Dance" />
      </div>
    </div>
  `;
  document.body.className = "celebration-body"; 
});
