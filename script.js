const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const question = document.getElementById("question");

const sadSound = document.getElementById("sadSound");
const cheerSound = document.getElementById("cheerSound");

let yesScale = 1;
let qIndex = 0;

const questions = [
  "Are you sure? 😏",
  "Ehmie… why are you like this 😭",
  "This is emotional abuse 😂",
  "Okay now you’re just being cute 😌",
  "You know you want to 💖"
];

// NO button — now static, but still responds by playing sadSound and growing YES
noBtn.addEventListener("click", () => {
  sadSound.currentTime = 0;
  sadSound.play();

  // Double YES button size each time NO is clicked
  yesScale *= 2;
  yesBtn.style.transform = `scale(${yesScale})`;
  yesBtn.style.transformOrigin = "center";

  // Change question text
  qIndex = (qIndex + 1) % questions.length;
  question.textContent = questions[qIndex];
});

// YES click
yesBtn.addEventListener("click", () => {
  cheerSound.currentTime = 0;
  cheerSound.play();
  setTimeout(() => {
    window.location.href = "yay.html";
  }, 400); // wait a moment for sound to play
});

// Floating hearts
setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 10 + 16 + "px";
  document.getElementById("hearts").appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}, 600);
