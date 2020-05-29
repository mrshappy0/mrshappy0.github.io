let monogram = document.getElementsByClassName("background-img"),
    slideMenu = document.getElementsByClassName("sidebar");
    adamShappyLetters = document.getElementsByClassName("absoluteletters")[0].children
    console.log(adamShappyLetters)
monogram[0].addEventListener("animationstart", animationListener, false);
monogram[0].addEventListener("animationend", animationListener, false);
monogram[0].classList.add("slidein");

function animationListener(event) {
  if (event.type === "animationstart") {
    Object.keys(slideMenu).forEach((el) => {
      slideMenu[el].classList.add("slideMenu");
    });
  if (event.type === "animationend"){
    Object.keys(adamShappyLetters).forEach((el) => {
      adamShappyLetters[el].classList.add("vibrate");
      console.log(adamShappyLetters[el].classList)
    });
  }
  }
}
