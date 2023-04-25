const ballContainer = document.querySelector(".ball-container");
const balls = document.querySelectorAll(".ball");

// set random starting positions for balls
balls.forEach((ball) => {
  const x = Math.floor(Math.random() * (window.innerWidth - ball.offsetWidth));
  const y = Math.floor(
    Math.random() * (window.innerHeight - ball.offsetHeight)
  );
  ball.style.transform = `translate(${x}px, ${y}px)`;
});

// Generate random delay and position for each ball

balls.forEach((ball) => {
  ball.style.setProperty("--delay", Math.random() * 3);
  ball.style.setProperty("--position", Math.random() * window.innerWidth);
});
