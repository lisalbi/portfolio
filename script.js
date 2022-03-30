const createCard = (title, filePath, link) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("card-wrapper");

  const container = document.createElement("div");
  container.classList.add("card");

  const img = document.createElement("img");
  img.setAttribute("src", filePath);
  img.setAttribute("alt", "project screenshot");
  container.appendChild(img);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const cardTitle = document.createElement("p");
  cardTitle.textContent = title;
  cardInfo.appendChild(cardTitle);

  const cardLink = document.createElement("a");
  cardLink.textContent = "View Project";
  cardLink.classList.add("card-link");
  cardLink.setAttribute("href", link);
  cardLink.setAttribute("target", "_blank");
  cardInfo.appendChild(cardLink);

  container.appendChild(cardInfo);
  wrapper.appendChild(container);
  return wrapper;
};

const cardContainer = document.querySelector(".card-container");

const displayDevBtn = document.querySelector("#displayDevBtn");
const displayDesignBtn = document.querySelector("#displayDesignBtn");

displayDevBtn.addEventListener("click", function () {
  clearProjects();
  displayDevWork();
  displayDevBtn.classList.add("active");
  displayDesignBtn.classList.remove("active");
});
displayDesignBtn.addEventListener("click", function () {
  clearProjects();
  displayDesignWork();
  displayDesignBtn.classList.add("active");
  displayDevBtn.classList.remove("active");
});

function clearProjects() {
  cardContainer.textContent = "";
}

function displayDevWork() {
  cardContainer.appendChild(
    createCard(
      "EverWash Overhaul",
      "./images/everwash.png",
      "https://www.everwash.com/"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Asahi Sushi",
      "./images/sushi.png",
      "https://lisalbi.github.io/restauraunt/"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Calculator",
      "./images/calculator.png",
      "https://lisalbi.github.io/calculator/"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Tic Tac Toe",
      "./images/tic-tac-toe.png",
      "https://lisalbi.github.io/tic-tac-toe/"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Etch-A-Sketch",
      "./images/etch-a-sketch.png",
      "https://lisalbi.github.io/etch-a-sketch/"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Rock Paper Scissors",
      "./images/rock-paper-scissors.png",
      "https://lisalbi.github.io/rock-paper-scissors/"
    )
  );
}
displayDevWork();
displayDevBtn.classList.add("active");

function displayDesignWork() {
  cardContainer.appendChild(
    createCard("UniTutor", "./images/unitutor.png", "")
  );
  cardContainer.appendChild(
    createCard("Washerly", "./images/washerly.png", "")
  );
  cardContainer.appendChild(
    createCard("Amplification Project", "./images/amplification.png", "")
  );
  cardContainer.appendChild(createCard("Wazo", "./images/wazo.png", ""));
  cardContainer.appendChild(
    createCard("Tradepost", "./images/tradepost.png", "")
  );
  cardContainer.appendChild(
    createCard("Hydration No Sweat", "./images/hydration.png", "")
  );
}

$(window).scroll(function () {
  $(".slideanim").each(function () {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 1000) {
      $(this).addClass("slide");
    }
  });
});

const marker = document.querySelector("#marker");
const navItem = document.querySelectorAll(".nav a");
let currentMarker = navItem[0];

function moveMarker(e = currentMarker) {
  marker.style.transition = "0.5s";
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
  marker.style.transition = "0s";
}

navItem.forEach((link) => {
  link.addEventListener("click", (e) => {
    currentMarker = e.target;
    moveMarker(e.target);
  });
});

function resizeMarker() {
  marker.style.left = currentMarker.offsetLeft + "px";
  marker.style.width = currentMarker.offsetWidth + "px";
}

resizeMarker();

window.onresize = resizeMarker;
