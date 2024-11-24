const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const bg = new Image();
const heartFull = new Image();
const heartEmpty = new Image();
const cursor = new Image();
const zombieSprite = new Image();
const gameOverSound = new Audio("images/sad-music.mp3");

bg.src = "images/board-bg.jpg";
heartFull.src = "images/full_heart.png";
heartEmpty.src = "images/empty_heart.png";
cursor.src = "images/aim.png";
zombieSprite.src = "images/walkingdead.png";

let score = 0;
let highScore = 0;
let lives = 3;
let gameOver = false;
let zombies = [];

const zombieSpriteWidth = 200;
const zombieSpriteHeight = 312;
const spriteFrames = 10;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cursorX = 0;
let cursorY = 0;

function drawBG() {
  ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);
}
function drawLives() {
  let i = 0;
  for (; i < lives; i++) {
    ctx.drawImage(heartFull, 10 + i * 50, 10, 40, 40);
  }
  for (; i < 3; i++) {
    ctx.drawImage(heartEmpty, 10 + i * 50, 10, 40, 40);
  }
}
function drawScore() {
  ctx.font = "50px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "right";
  if (score < 10) ctx.fillText(`000${score}`, canvas.width - 10, 50);
  else if (score < 100) ctx.fillText(`00${score}`, canvas.width - 10, 50);
  else if (score < 1000) ctx.fillText(`0${score}`, canvas.width - 10, 50);
  else ctx.fillText(`${score}`, canvas.width - 10, 50);
}
function drawAim() {
  const size = 100;
  ctx.drawImage(cursor, cursorX - size / 2, cursorY - size / 2, size, size);
}
function drawResetButton() {
  const rectWidth = 600;
  const rectHeight = 500;

  const rectX = canvas.width / 2 - rectWidth / 2;
  const rectY = canvas.height / 2 - rectHeight / 2 + 40;

  ctx.beginPath();
  ctx.rect(rectX, rectY, rectWidth, rectHeight);
  ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx.fill();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();

  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(
    "Kliknij aby zagrać ponownie",
    canvas.width / 2,
    canvas.height / 2 + rectHeight / 2
  );

  canvas.addEventListener("click", (event) => {
    if (!gameOver) return;
    if (
      cursorX >= canvas.width / 2 - rectWidth / 2 &&
      cursorX <= canvas.width / 2 - rectWidth / 2 + rectWidth &&
      cursorY >= canvas.height / 2 - rectHeight / 2 + 40 &&
      cursorY <= canvas.height / 2 - rectHeight / 2 + 40 + rectHeight
    ) {
      resetGame();
    }
  });
}
function drawGameOver() {
  let lineHeight = 60;
  drawResetButton();
  ctx.font = "80px Arial";
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.fillText(`Game Over`, canvas.width / 2, canvas.height / 2);
  ctx.font = "40px Arial";
  ctx.fillText(
    `Twój Wynik: ${score}`,
    canvas.width / 2,
    canvas.height / 2 + lineHeight
  );
  ctx.fillText(
    `Twój Rekord: ${highScore}`,
    canvas.width / 2,
    canvas.height / 2 + 2 * lineHeight
  );

  gameOverSound.play();
}

function resetGame() {
  score = 0;
  lives = 3;
  zombies = [];
  gameOver = false;
  gameOverSound.pause();
  gameOverSound.currentTime = 0;
}

class Zombie {
  constructor() {
    this.speed = Math.random() * (score / 33) + score / 100 + 2;
    this.frame = 0;
    this.size = Math.random() * 0.8 + 0.2;
    this.x = canvas.width;
    this.y =
      canvas.height -
      zombieSpriteHeight * this.size -
      (Math.random() * canvas.height) / 4;
  }

  draw() {
    ctx.drawImage(
      zombieSprite,
      this.frame * zombieSpriteWidth,
      0,
      zombieSpriteWidth,
      zombieSpriteHeight,
      this.x,
      this.y,
      zombieSpriteWidth * this.size,
      zombieSpriteHeight * this.size
    );
  }

  update() {
    this.x -= this.speed;
    if (Math.random() * 5 <= 1) this.frame = (this.frame + 1) % spriteFrames;
  }

  offScreen() {
    return this.x + zombieSpriteWidth * this.size < 0;
  }
}
function createZombie() {
  zombies.push(new Zombie());
  zombies.sort(
    (a, b) =>
      a.y + a.size * zombieSpriteHeight - (b.y + b.size * zombieSpriteHeight)
  );
}

function update() {
  zombies.forEach((zombie, index) => {
    zombie.update();
    if (zombie.offScreen()) {
      zombies.splice(index, 1);
      lives--;
    }
  });

  if (Math.random() * 100 <= 1) {
    createZombie();
  }

  if (lives <= 0) {
    gameOver = true;
    if (score > highScore) highScore = score;
  }
}

function render() {
  drawBG();
  drawLives();
  drawScore();
  zombies.forEach((zombie) => zombie.draw());
  drawAim();
  if (gameOver) drawGameOver();
}

function gameLoop() {
  if (!gameOver) {
    update();
  }
  render();
  requestAnimationFrame(gameLoop);
}

canvas.addEventListener("mousemove", (event) => {
  const rect = canvas.getBoundingClientRect();
  cursorX = event.clientX - rect.left;
  cursorY = event.clientY - rect.top;
});

canvas.addEventListener("click", () => {
  if (gameOver) return;
  let flag = true;
  for (let i = zombies.length - 1; i >= 0; i--) {
    if (
      cursorX >= zombies[i].x &&
      cursorX <= zombies[i].x + zombieSpriteWidth &&
      cursorY >= zombies[i].y &&
      cursorY <= zombies[i].y + zombieSpriteHeight
    ) {
      zombies.splice(i, 1);
      score += 20;
      flag = false;
      break;
    }
  }
  if (flag && score >= 5) score -= 5;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
