let monogram = document.getElementsByClassName("background-img"),
  slideMenu = document.getElementsByClassName("sidebar"),
  slideMenuContainer = document.querySelector("section.info-tabs"),
  scrollContainer = document.querySelector("div.container"),
  scrollTopMax =
    scrollContainer.scrollTopMax ||
    document.getElementById("about").getBoundingClientRect().height * 3,
  adamSImg = document.querySelector(".adam-s");

// Initial animation event handling
monogram[0].addEventListener("animationstart", animationListener, false);
monogram[0].addEventListener("animationend", animationListener, false);
monogram[0].classList.add("slidein");

function animationListener(event) {
  if (event.type === "animationstart") {
    Object.keys(slideMenu).forEach((el) => {
      slideMenu[el].classList.add("slideMenu");
    });
    adamSImg.classList.add("add-dat-fade");
  }
  if (event.type === "animationend") {
    adamSImg.classList.remove("add-dat-fade");
    adamSImg.classList.add("add-new-fade");
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
    if (screen.width <= 646) {
      slideMenuContainer.childNodes[1].children[0].style.fontSize = "3.4rem";
      slideMenuContainer.childNodes[3].children[0].style.fontSize = "";
      slideMenuContainer.childNodes[5].children[0].style.fontSize = "";
    } else {
      slideMenuContainer.childNodes[1].children[0].style.fontSize = "5rem";
      slideMenuContainer.childNodes[3].children[0].style.fontSize = "";
      slideMenuContainer.childNodes[5].children[0].style.fontSize = "";
    }
  } else if (
    scrollContainer.scrollTop >= (scrollTopMax / 4) * 2 &&
    scrollContainer.scrollTop <= (scrollTopMax / 4) * 3
  ) {
    slideMenuContainer.childNodes[1].style.color = "";
    slideMenuContainer.childNodes[3].style.color = "red";
    slideMenuContainer.childNodes[5].style.color = "";
    if (screen.width <= 646) {
      slideMenuContainer.childNodes[1].children[0].style.fontSize = "";
      slideMenuContainer.childNodes[3].children[0].style.fontSize = "3.4rem";
      slideMenuContainer.childNodes[5].children[0].style.fontSize = "";
    } else {
      slideMenuContainer.childNodes[1].children[0].style.fontSize = "";
      slideMenuContainer.childNodes[3].children[0].style.fontSize = "5rem";
      slideMenuContainer.childNodes[5].children[0].style.fontSize = "";
    }
  } else if (
    scrollContainer.scrollTop >= (scrollTopMax / 4) * 3 &&
    scrollContainer.scrollTop <= (scrollTopMax / 4) * 4
  ) {
    slideMenuContainer.childNodes[1].style.color = "";
    slideMenuContainer.childNodes[3].style.color = "";
    slideMenuContainer.childNodes[5].style.color = "red";
    if (screen.width <= 646) {
      slideMenuContainer.childNodes[1].children[0].style.fontSize = "";
      slideMenuContainer.childNodes[3].children[0].style.fontSize = "";
      slideMenuContainer.childNodes[5].children[0].style.fontSize = "3.4rem";
    } else {
      slideMenuContainer.childNodes[1].children[0].style.fontSize = "";
      slideMenuContainer.childNodes[3].children[0].style.fontSize = "";
      slideMenuContainer.childNodes[5].children[0].style.fontSize = "5rem";
    }
  } else {
    slideMenuContainer.childNodes[1].style.color = "";
    slideMenuContainer.childNodes[3].style.color = "";
    slideMenuContainer.childNodes[5].style.color = "";
    slideMenuContainer.childNodes[1].children[0].style.fontSize = "";
    slideMenuContainer.childNodes[3].children[0].style.fontSize = "";
    slideMenuContainer.childNodes[5].children[0].style.fontSize = "";
  }
}

window.addEventListener("resize", () => resizeWindow());
scrollContainer.addEventListener("scroll", () => scrollHandler());

// modal button action for CodeWars JS rank
let modalBtn = document.getElementById("javascript-modal-btn");
let modal = document.querySelector(".javascript-modal");
modalBtn.onclick = function () {
  modal.style.display = "block";
};
modal.onclick = function (e) {
  modal.style.display = "none";
};
let resumeModalBtn = document.getElementById("resume-modal-btn");
let resumeModal = document.querySelector(".resume-modal");
resumeModalBtn.onclick = function () {
  resumeModal.style.display = "block";
  slideMenuContainer.style.visibility = "hidden";
};
resumeModal.onclick = function (e) {
  resumeModal.style.display = "none";
  slideMenuContainer.style.visibility = "visible";
};
