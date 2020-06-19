var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var ytPlayerManager = (function YTPlayerManager() {
  var players = [],
    PLAYING = 1;

  function register(id) {
    players.push({
      id: id,
      player: makePlayer(id),
    });
  }

  function makePlayer(id) {
    return new YT.Player(id, {
      events: {
        onStateChange: function (event) {
          if (event.data == PLAYING) {
            videoPlaying(id);
          }
        },
      },
    });
  }

  function videoPlaying(id) {
    players.forEach(function (item) {
      if (item.id !== id) {
        item.player.pauseVideo();
      }
    });
  }

  return { register };
})();

function onYouTubeIframeAPIReady() {
  ytPlayerManager.register("rYumSLOp55c");
  ytPlayerManager.register("zBAbWel-8cw");
  ytPlayerManager.register("0QfXG_H0P2o");
}

let monogram = document.getElementsByClassName("background-img"),
  slideMenu = document.getElementsByClassName("sidebar"),
  slideMenuContainer = document.querySelector("section.info-tabs"),
  scrollContainer = document.querySelector("div.container"),
  scrollTopMax =
    scrollContainer.scrollTopMax ||
    document.getElementById("about").getBoundingClientRect().height * 3,
  adamSImg = document.querySelector(".adam-s"),
  scrollListItems = document.querySelectorAll("ul li");

// Initial animation event handling
monogram[0].addEventListener("animationstart", animationListener, false);
monogram[0].addEventListener("animationend", animationListener, false);
monogram[0].classList.add("slidein");

function animationListener(event) {
  let interval = 5000;
  if (screen.width < 646) {
    interval = 2500;
    console.log(interval);
  }
  if (event.type === "animationstart") {
    scrollContainer.style.overflowY = "hidden";
    setInterval(() => {
      scrollContainer.style.overflowY = "scroll";
    }, interval);
    Object.keys(slideMenu).forEach((el) => {
      slideMenu[el].classList.add("slideMenu");
    });
    adamSImg.classList.add("add-dat-fade");
  }
  if (event.type === "animationend") {
    document.body.style.position = "";
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
    slideMenuContainer.childNodes[1].children[0].style.fontSize = "2rem";
    slideMenuContainer.childNodes[3].style.color = "";
    slideMenuContainer.childNodes[3].children[0].style.fontSize = "";
    slideMenuContainer.childNodes[5].style.color = "";
    slideMenuContainer.childNodes[5].children[0].style.fontSize = "";
  } else if (
    scrollContainer.scrollTop >= (scrollTopMax / 4) * 2 &&
    scrollContainer.scrollTop <= (scrollTopMax / 4) * 3
  ) {
    slideMenuContainer.childNodes[1].style.color = "";
    slideMenuContainer.childNodes[1].children[0].style.fontSize = "";
    slideMenuContainer.childNodes[3].style.color = "red";
    slideMenuContainer.childNodes[3].children[0].style.fontSize = "2rem";
    slideMenuContainer.childNodes[5].style.color = "";
    slideMenuContainer.childNodes[5].children[0].style.fontSize = "";
  } else if (
    scrollContainer.scrollTop >= (scrollTopMax / 4) * 3 &&
    scrollContainer.scrollTop <= (scrollTopMax / 4) * 4
  ) {
    slideMenuContainer.childNodes[1].style.color = "";
    slideMenuContainer.childNodes[1].children[0].style.fontSize = "";
    slideMenuContainer.childNodes[3].style.color = "";
    slideMenuContainer.childNodes[3].children[0].style.fontSize = "";
    slideMenuContainer.childNodes[5].style.color = "red";
    slideMenuContainer.childNodes[5].children[0].style.fontSize = "2rem";
  } else {
    slideMenuContainer.childNodes[1].style.color = "";
    slideMenuContainer.childNodes[1].children[0].style.fontSize = "";
    slideMenuContainer.childNodes[3].style.color = "";
    slideMenuContainer.childNodes[3].children[0].style.fontSize = "";
    slideMenuContainer.childNodes[5].style.color = "";
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
  slideMenuContainer.style.visibility = "hidden";
};
modal.onclick = function (e) {
  modal.style.display = "none";
  slideMenuContainer.style.visibility = "visible";
};
// js for determining smartphone or not with resume modal
let resumeModalBtn = document.getElementById("resume-modal-btn");
let resumeModal = document.querySelector(".resume-modal");
if (screen.width >= 646) {
  resumeModalBtn.onclick = function () {
    resumeModal.style.display = "block";
    slideMenuContainer.style.visibility = "hidden";
  };
  resumeModal.onclick = function (e) {
    resumeModal.style.display = "none";
    slideMenuContainer.style.visibility = "visible";
  };
}
