var createCard = function (title, filePath, link) {
    var wrapper = document.createElement("div");
    wrapper.classList.add("card-wrapper");
    var container = document.createElement("div");
    container.classList.add("card");
    var img = document.createElement("img");
    img.setAttribute("src", filePath);
    img.setAttribute("alt", "project screenshot");
    container.appendChild(img);
    var cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    var cardTitle = document.createElement("p");
    cardTitle.textContent = title;
    cardInfo.appendChild(cardTitle);
    var cardLink = document.createElement("a");
    cardLink.textContent = "View Project";
    cardLink.classList.add("card-link");
    cardLink.setAttribute("href", link);
    cardLink.setAttribute("target", "_blank");
    cardInfo.appendChild(cardLink);
    container.appendChild(cardInfo);
    wrapper.appendChild(container);
    return wrapper;
};
var createDesignCard = function (title, filePath, link) {
    var wrapper = document.createElement("div");
    wrapper.classList.add("card-wrapper");
    var container = document.createElement("div");
    container.classList.add("card");
    var img = document.createElement("img");
    img.setAttribute("src", filePath);
    img.setAttribute("alt", "project screenshot");
    container.appendChild(img);
    var cardInfo = document.createElement("div");
    cardInfo.classList.add("card-info");
    var cardTitle = document.createElement("p");
    cardTitle.textContent = title;
    cardInfo.appendChild(cardTitle);
    var cardLink = document.createElement("a");
    cardLink.textContent = "View Project";
    cardLink.classList.add("card-link");
    cardLink.setAttribute("href", link);
    cardInfo.appendChild(cardLink);
    container.appendChild(cardInfo);
    wrapper.appendChild(container);
    return wrapper;
};
var cardContainer = document.querySelector(".card-container");
function clearProjects() {
    cardContainer.textContent = "";
}
function displayDevWork() {
    cardContainer.appendChild(createCard("EverWash Overhaul", "./images/everwash.jpg", "https://www.everwash.com/"));
    cardContainer.appendChild(createCard("Job Tracker", "./images/job-tracker.png", "https://react-jobtracker.netlify.app/"));
    cardContainer.appendChild(createCard("Partners Landing Page", "./images/everwash-partners.jpg", "https://ew-redesign.netlify.app/wash-owners"));
    cardContainer.appendChild(createCard("NRCC Event Page", "./images/nrcc.jpg", "https://www.everwash.com/nrcc"));
    cardContainer.appendChild(createCard("Members Landing Page", "./images/everwash-members.jpg", "https://www.everwash.com/members"));
    cardContainer.appendChild(createCard("WordPress Recipe Blog", "./images/airfryertastes.jpg", "https://airfryertastes.com"));
}
displayDevWork();
var designCardContainer = document.querySelector(".design-projects");
function displayDesignWork() {
    designCardContainer.appendChild(createDesignCard("Washerly", "./images/washerly/washerly.png", "/projects/washerly.html"));
    designCardContainer.appendChild(createDesignCard("Tradepost", "./images/tradepost/tradepost.png", "/projects/tradepost.html"));
    designCardContainer.appendChild(createDesignCard("UniTutor", "./images/unitutor/cover-wide.png", "/projects/unitutor.html"));
    designCardContainer.appendChild(createDesignCard("Wazo", "./images/wazo/logo.png", "/projects/wazo.html"));
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
//# sourceMappingURL=script.js.map