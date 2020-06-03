let monogram = document.getElementsByClassName("background-img"),
  slideMenu = document.getElementsByClassName("sidebar");
adamShappyLetters = document.getElementsByClassName("absoluteletters")[0]
  .children;
adamShappyLettersContainer = document.querySelectorAll("section.absoluteletters");
console.log(adamShappyLettersContainer);
monogram[0].addEventListener("animationstart", animationListener, false);
monogram[0].addEventListener("animationend", animationListener, false);
monogram[0].classList.add("slidein");
adamShappyLettersContainer[0].addEventListener("mouseover", removeInitialAnime, false);

function removeInitialAnime(event) {
  if (event.type === "mouseover") {
    console.log(adamShappyLettersContainer[0].classList[1]);
    adamShappyLettersContainer[0].classList.remove("remove-after-hover")
  }
}

function animationListener(event) {
  if (event.type === "animationstart") {
    Object.keys(slideMenu).forEach((el) => {
      slideMenu[el].classList.add("slideMenu");
    });
    if (event.type === "animationend") {
      Object.keys(adamShappyLetters).forEach((el) => {
        adamShappyLetters[el].classList.add("vibrate");
        console.log(adamShappyLetters[el].classList);
      });
    }
  }
}
