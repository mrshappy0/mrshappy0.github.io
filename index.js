let monogram = document.getElementsByClassName("background-img"),
  slideMenu = document.getElementsByClassName("sidebar");
  slideMenuContainer = document.querySelector("section.info-tabs")
adamShappyLetters = document.getElementsByClassName("absoluteletters")[0]
  .children;
adamShappyLettersContainer = document.querySelectorAll(
  "section.absoluteletters"
);
console.log(slideMenuContainer);
monogram[0].addEventListener("animationstart", animationListener, false);
monogram[0].addEventListener("animationend", animationListener, false);
monogram[0].classList.add("slidein");
adamShappyLettersContainer[0].addEventListener(
  "mouseover",
  removeInitialAnime,
  false
);
slideMenuContainer.addEventListener("mouseover", addHoverToAdamLetters, false);
slideMenuContainer.addEventListener("mouseout", addHoverToAdamLetters, false);

function removeInitialAnime(event) {
  if (event.type === "mouseover") {
    adamShappyLettersContainer[0].classList.remove("remove-after-hover");
  }
}

function addHoverToAdamLetters(event) {
  console.log("hit");
  if (event.type === "mouseover") {
    adamShappyLettersContainer[0].classList.remove("remove-after-hover");
    adamShappyLettersContainer[0].classList.add("addEffectIfHover");
  }
  if(event.type ==="mouseout"){
    adamShappyLettersContainer[0].classList.remove("addEffectIfHover");
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
