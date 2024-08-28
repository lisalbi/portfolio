const createCard  = (title: string, filePath: string, link : string) : HTMLElement => {
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
const createDesignCard = (title: string, filePath: string, link : string) : HTMLElement => {
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
  cardInfo.appendChild(cardLink);

  container.appendChild(cardInfo);
  wrapper.appendChild(container);
  return wrapper;
};

const cardContainer = document.querySelector(".card-container");

function clearProjects() {
  cardContainer.textContent = "";
}

function displayDevWork() {
  cardContainer.appendChild(
    createCard(
      "EverWash Overhaul",
      "./images/everwash.jpg",
      "https://www.everwash.com/"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Job Tracker",
      "./images/job-tracker.png",
      "https://react-jobtracker.netlify.app/"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Partners Landing Page",
      "./images/everwash-partners.jpg",
      "https://ew-redesign.netlify.app/wash-owners"
    )
  );
  cardContainer.appendChild(
    createCard(
      "NRCC Event Page",
      "./images/nrcc.jpg",
      "https://www.everwash.com/nrcc"
    )
  );
  cardContainer.appendChild(
    createCard(
      "Members Landing Page",
      "./images/everwash-members.jpg",
      "https://www.everwash.com/members"
    )
  );
  cardContainer.appendChild(
    createCard(
      "WordPress Recipe Blog",
      "./images/airfryertastes.jpg",
      "https://airfryertastes.com"
    )
  );
  // cardContainer.appendChild(
  //   createCard(
  //     "Asahi Sushi",
  //     "./images/sushi.png",
  //     "https://lisalbi.github.io/restauraunt/"
  //   )
  // );
  // cardContainer.appendChild(
  //   createCard(
  //     "Calculator",
  //     "./images/calculator.png",
  //     "https://lisalbi.github.io/calculator/"
  //   )
  // );
  // cardContainer.appendChild(
  //   createCard(
  //     "Tic Tac Toe",
  //     "./images/tic-tac-toe.png",
  //     "https://lisalbi.github.io/tic-tac-toe/"
  //   )
  // );
  // cardContainer.appendChild(
  //   createCard(
  //     "Etch-A-Sketch",
  //     "./images/etch-a-sketch.png",
  //     "https://lisalbi.github.io/etch-a-sketch/"
  //   )
  // );
  // cardContainer.appendChild(
  //   createCard(
  //     "Rock Paper Scissors",
  //     "./images/rock-paper-scissors.png",
  //     "https://lisalbi.github.io/rock-paper-scissors/"
  //   )
  // );
}
displayDevWork();

const designCardContainer = document.querySelector(".design-projects");
function displayDesignWork() {
  designCardContainer.appendChild(
    createDesignCard(
      "Washerly",
      "./images/washerly/washerly.png",
      "/projects/washerly.html"
    )
  );
  designCardContainer.appendChild(
    createDesignCard(
      "Tradepost",
      "./images/tradepost/tradepost.png",
      "/projects/tradepost.html"
    )
  );
  designCardContainer.appendChild(
    createDesignCard(
      "UniTutor",
      "./images/unitutor/cover-wide.png",
      "/projects/unitutor.html"
    )
  );
  designCardContainer.appendChild(
    createDesignCard("Wazo", "./images/wazo/logo.png", "/projects/wazo.html")
  );
  // designCardContainer.appendChild(
  //   createDesignCard("Amplification Project", "./images/amplification.png", "")
  // );

  // cardContainer.appendChild(
  //   createDesignCard("Hydration No Sweat", "./images/hydration.png", "")
  // );
}

displayDesignWork();

$(window).scroll(function () {
  $(".slideanim").each(function () {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 1000) {
      $(this).addClass("slide");
    }
  });
});

