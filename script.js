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
