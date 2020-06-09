let monogram = document.getElementsByClassName("background-img"),
  slideMenu = document.getElementsByClassName("sidebar");
slideMenuContainer = document.querySelector("section.info-tabs");
adamShappyLetters = document.getElementsByClassName("absoluteletters")[0]
  .children;
adamShappyLettersContainer = document.querySelectorAll(
  "section.absoluteletters"
);
scrollContainer = document.querySelector("div.container");
scrollTopMax =
  scrollContainer.scrollTopMax ||
  document.getElementById("about").getBoundingClientRect().height * 3;
// scrollTopMax = document.getElementById("three").getBoundingClientRect();
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
  if (event.type === "mouseover") {
    adamShappyLettersContainer[0].classList.remove("remove-after-hover");
    adamShappyLettersContainer[0].classList.add("addEffectIfHover");
  }
  if (event.type === "mouseout") {
    adamShappyLettersContainer[0].classList.remove("addEffectIfHover");
  }
}

function animationListener(event) {
  if (event.type === "animationstart") {
    Object.keys(slideMenu).forEach((el) => {
      slideMenu[el].classList.add("slideMenu");
    });

    // not currently using code below//
    if (event.type === "animationend") {
      Object.keys(adamShappyLetters).forEach((el) => {
        adamShappyLetters[el].classList.add("vibrate");
      });
    }
  }
}
function resizeWindow() {
  return (scrollTopMax =
    scrollContainer.scrollTopMax ||
    document.getElementById("about").getBoundingClientRect().height * 3);
}

function scrollHandler() {
  setTimeout(() => {
    if (
      scrollContainer.scrollTop >= scrollTopMax / 4 &&
      scrollContainer.scrollTop <= (scrollTopMax / 4) * 2
    ) {
      slideMenuContainer.childNodes[1].style.color = "red";
      slideMenuContainer.childNodes[3].style.color = "";
      slideMenuContainer.childNodes[5].style.color = "";
    } else if (
      scrollContainer.scrollTop >= (scrollTopMax / 4) * 2 &&
      scrollContainer.scrollTop <= (scrollTopMax / 4) * 3
    ) {
      slideMenuContainer.childNodes[1].style.color = "";
      slideMenuContainer.childNodes[3].style.color = "red";
      slideMenuContainer.childNodes[5].style.color = "";
    } else if (
      scrollContainer.scrollTop >= (scrollTopMax / 4) * 3 &&
      scrollContainer.scrollTop <= (scrollTopMax / 4) * 4
    ) {
      slideMenuContainer.childNodes[1].style.color = "";
      slideMenuContainer.childNodes[3].style.color = "";
      slideMenuContainer.childNodes[5].style.color = "red";
    } else {
      slideMenuContainer.childNodes[1].style.color = "";
      slideMenuContainer.childNodes[3].style.color = "";
      slideMenuContainer.childNodes[5].style.color = "";
    }
  }, 250);
}
window.addEventListener("resize", () => resizeWindow());
scrollContainer.addEventListener("scroll", () => scrollHandler());

// modal button action for CodeWars JS rank
let modalBtn = document.getElementById("modal-btn");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".close-btn");
modalBtn.onclick = function () {
  modal.style.display = "block";
};
closeBtn.onclick = function () {
  modal.style.display = "none";
};
modal.onclick = function (e) {
  // if (e.target == modal) {
    modal.style.display = "none";
  // }
};
