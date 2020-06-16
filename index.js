let monogram = document.getElementsByClassName("background-img"),
  slideMenu = document.getElementsByClassName("sidebar"),
  slideMenuContainer = document.querySelector("section.info-tabs"),
  scrollContainer = document.querySelector("div.container"),
  scrollTopMax =
    scrollContainer.scrollTopMax ||
    document.getElementById("about").getBoundingClientRect().height * 3;

// Initial animation event handling
monogram[0].addEventListener("animationstart", animationListener, false);
monogram[0].addEventListener("animationend", animationListener, false);
monogram[0].classList.add("slidein");

function animationListener(event) {
  if (event.type === "animationstart") {
    Object.keys(slideMenu).forEach((el) => {
      slideMenu[el].classList.add("slideMenu");
    });
  }
}
function resizeWindow() {
  return (scrollTopMax =
    scrollContainer.scrollTopMax ||
    document.getElementById("about").getBoundingClientRect().height * 3);
}
function scrollHandler() {
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
modal.onclick = function (e) {
  modal.style.display = "none";
};
