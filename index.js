let monogram = document.getElementsByClassName("background-img"),
  slideMenu = document.getElementsByClassName("sidebar");
monogram[0].addEventListener("animationstart", slideListener, false);
monogram[0].addEventListener("animationend", slideListener, false);
monogram[0].classList.add("slidein");

function slideListener(event) {
  if (event.type === "animationstart") {
    console.log(slideMenu);
    Object.keys(slideMenu).forEach((el) => {
      console.log(slideMenu[el]);
      slideMenu[el].classList.add("slideMenu");
      console.log(slideMenu[el].classList);
    });
  }
}
