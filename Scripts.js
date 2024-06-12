"use strict";
function website() {
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".score").textContent = 20;
  document.querySelector("h1").textContent = "Guess MY Number !";
  let guessed = 0;
  const randomNum = Math.trunc(Math.random() * 20 + 1);
  console.log(randomNum);
  let realScore = Number(document.querySelector(".score").textContent);
  let realHighScore = Number(document.querySelector(".highscore").textContent);

  const check = document.querySelector(".check");
  check.addEventListener("click", function () {
    guessed = Number(document.querySelector(".guess")?.value);
    if (guessed === randomNum) {
      document.querySelector(".message").textContent = "WOW CORRECT NUMBER..";
      document.querySelector("h1").textContent = "GG YOU WON";
      document.querySelector("body").style.backgroundColor = "green";
      if (realScore > realHighScore) {
        document.querySelector(".highscore").textContent = realScore;
      }
    }

    if (!guessed) {
      document.querySelector(".message").textContent = "NO INPUT !";
    }

    if (guessed < randomNum) {
      document.querySelector("h1").textContent = "GO HIGHER....";
      document.querySelector(".score").textContent = --realScore;
    }
    if (guessed > randomNum) {
      document.querySelector("h1").textContent = "GO LOWER....";
      document.querySelector(".score").textContent = --realScore;
    }
  });
}
const hel = document.querySelector(".again");
hel.addEventListener("click", function () {
  //directly doing website() would call it
  website();
});
website();
