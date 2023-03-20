/* eslint-disable */
const projectList = [
  {
    projectTitle: "Tv Show",
    projectDiscription:
      "This app shows a series of TV shows from a TV-maze API. Users can put their comments and like on the show they want.",
    detailDescription:
      "This app shows a series of TV shows from a TV-maze API. Users can put their comments and like on the show they want. Users can check the previous comments and the number of likes given by others.",
    techTools: {
      javascript: "JavaScript",
      css: "CSS",
      html: "HTML",
    },
    projectImage: "./image/tvshow.webp",
    liveLink: "https://john-kibirige.github.io/tv-maze/",
    liveSources: "https://github.com/melashu/Tv-Show",
  },
  {
    projectTitle: "Bookstore",
    projectDiscription:
      "This app was built using react. It enables users to add new books to the API. Users can track their reading status and can filter books by category.",
    detailDescription:
      "Bookstore is a web app which enable the user to record books by title and their author to the exteranl API. Users can also track their reading progress.",
    techTools: {
      react: "React",
      redux: "Redux",
      bootstrap: "CSS",
    },
    projectImage: "./image/bookstore.webp",
    liveLink: "https://bookstoreapps.netlify.app/",
    liveSources: "https://github.com/melashu/Bookstore",
  },
  {
    projectTitle: "kCinema",
    projectDiscription:
      " kCinema is a movie store app. The app was built using react, react-redux, Axios, CSS, and external APIs.I used Axios to fetch remote API dates.",
    detailDescription:
      "kCinema is a movie store app. The app was built using react, react-redux, Axios, CSS, and external APIs.I used Axios to fetch remote API dates. The app enables users to filter our serious movies using a dropdown button. Users can search for any film by entering the movie title in the search box. Users can see the details of each movie.",
    techTools: {
      javascript: "JavaScript",
      bootstrap: "Bootstrap",
      react: "React",
      redux: "Redux",
    },
    projectImage: "./image/kciniema.webp",
    liveLink: "https://kcinema.netlify.app/",
    liveSources: "https://github.com/melashu/kCinema",
  },
  {
    projectTitle: "Space Travelers Hub",
    projectDiscription:
      "It is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets.",
    detailDescription:
      "It is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    techTools: {
      react: "React",
      redux: "Redux",
      bootstrap: "Bootstrap",
    },
    projectImage: "./image/space.webp",
    liveLink: "https://spacehubs.netlify.app/",
    liveSources: "https://github.com/melashu/Space-Travelers-Hub",
  },

  {
    projectTitle: "Live Crypto",
    projectDiscription:
      "Live Crypto is a real-time crypto pricing prediction app that provides information to users by collecting data from thousands of markets.",
    detailDescription:
      "Live Crypto is a real-time crypto pricing prediction app by fetches data from CoinCap API. Live Crypto provides information to users by collecting exchange data from thousands of markets. Users can access transparent and accurate data on asset price and availability.",
    techTools: {
      react: "React",
      scss: "SCSS",
      redux: "Redux",
      mui: "Material UI",
    },
    projectImage: "./image/crypto.webp",
    liveLink: "https://live-cryptos.netlify.app/",
    liveSources: "https://github.com/melashu/livecrypto",
  },
  {
    projectTitle: "My Recipe",
    projectDiscription:
      "The app will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have.",
    detailDescription:
      "This recipe app keeps track of all your recipes, ingredients, and inventory. It will allow you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe. The application is built using the Ruby on Rails framework.",
    techTools: {
      ruby: "Ruby on Rails",
      poatgres: "Postgress",
      bootstrap: "Bootstrap",
    },
    projectImage: "./image/recipe1.webp",
    liveLink: "https://recipe-nn14.onrender.com/recipes",
    liveSources: "https://github.com/melashu/Recipe-app",
  },
  {
    projectTitle: "Btracker",
    projectDiscription:
      "This is mobile first a web app where you can manage your budget and you have a list of transactions associated with a category.",
    detailDescription:
      "This is mobile first a web app where you can manage your budget and you have a list of transactions associated with a category. so that you can see how much money you spent and on what. The application built with Ruby on Rails.",
    techTools: {
      ruby: "Ruby on Rails",
      poatgres: "Postgress",
      bootstrap: "Bootstrap",
    },
    projectImage: "./image/Btracker.webp",
    liveLink: "https://github.com/melashu/Btracker",
    liveSources: "https://github.com/melashu/Btracker",
  },
];
const popup = document.getElementById("popup");
const cardSection = document.querySelector(".card-section");

const header = document.querySelector("header");

const body = document.querySelector("body");

const socialIcon = document.getElementsByClassName("social-media")[0];
const popupTitleContainer = document.createElement("div");
const storySection = document.querySelector(".feature-section");
popupTitleContainer.className = "popup-title-container";
const popupH2 = document.createElement("h2");
popupH2.className = "popup-title";
const popupClose = document.createElement("span");
popupClose.className = "popup-close-btn";
popupClose.id = "popup-close-btn";
popupClose.innerHTML = "&times;";

function popupWindow(key) {
  window.scrollTo(0, 0);
  const project = projectList[key];
  popupH2.innerHTML = project.projectTitle;
  popupTitleContainer.appendChild(popupH2);
  popupTitleContainer.appendChild(popupClose);

  const temp = `<div class="popup-container">
            <ul class="tech-tools" id="popup-tools">
${Object.values(project.techTools).map((tech) => `<li>${tech}</li>`)}
            </ul>
            <div class="popup-left-container">
                <div class="popup-img-container">
                    <img src="${
                      project.projectImage
                    }" alt="project image" class="popup-img">
                </div>
                <div class="popup-description-container">
                    <p class="popup-description" id="popup-description">${
                      project.detailDescription
                    }</p>
                    <div class="popup-button">
                        <a href="${
                          project.liveLink
                        }" class="popup-btn submit-button" target="_blank" id="btn-live">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        <a href="${
                          project.liveSources
                        }" class="popup-btn submit-button" target="_blank" id="btn-source">See Sources <i class="popup-btn-icon fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
`;

  const popupContainerDOM = new DOMParser().parseFromString(temp, "text/html");
  const x = popupContainerDOM.getElementsByClassName("popup-container")[0];
  x.insertBefore(popupTitleContainer, x.children[0]);
  body.style.overflowY = "hidden";
  popup.style.display = "block";
  popup.innerHTML = "";
  popup.appendChild(x);
  header.style.filter = "blur(3px)";
  socialIcon.style.filter = "blur(3px)";
}

popupClose.addEventListener("click", () => {
  popup.style.display = "none";
  header.style.filter = "blur(0)";
  socialIcon.style.filter = "blur(0)";
  body.style.overflowY = "visible";
  location.href = "#work";
});

storySection.innerHTML = ` 
       <figure class="feature-image">
                    <img src=${
                      projectList[projectList.length - 1].projectImage
                    } alt="featuer image" />
                </figure>
                <div class="story-section">
                    <h2 class="story-title">${
                      projectList[projectList.length - 1].projectTitle
                    }</h2>
                    <p class="story-description">
                     ${projectList[projectList.length - 1].detailDescription}
                    </p>
                    <ul class="tech-tools">
                    ${Object.values(
                      projectList[projectList.length - 1].techTools
                    ).map((tech) => `<li>${tech}</li>`)}
                    </ul>
                    <button type="button" class="story-button" data-id="0">See Project</button>
                                  </div>
 `;
{/* <p class="card-description">${eachCard.projectDiscription}</p>; */}
storySection.addEventListener("click", (event) => {
  if (event.target.classList.contains("story-button")) {
    popupWindow(projectList.length - 1);
  }
});

for (let index = projectList.length - 1; index >= 0; index -= 1) {
  const eachCard = projectList[index];

  const template = `       
               <article class="card">
                    <div class="card-body">
                
                    <img class="card-img" alt="${eachCard.projectTitle}" src="${
    eachCard.projectImage
  }" width="300" height="250"/>

                    </div>
                   <div>
                        <h2 class="card-title">${eachCard.projectTitle}</h2>
                        
                        <ul class="tech-tools">
                        
                        ${Object.values(eachCard.techTools).map(
                          (tech) => `<li>${tech}</li>`
                        )}
                                                  </ul>
                    <a class="card-button" data-id="1" href="#" rel="noopener"> See Project </a>
                   </div>
                </article>
                
               `;
  const cardDOM = new DOMParser().parseFromString(template, "text/html");
  const card = cardDOM.querySelector("article");
  const cardButton = cardDOM.querySelector(".card-button");
  cardButton.addEventListener("click", () => {
    popupWindow(index);
  });

  // const cardBody = cardDOM.querySelector(".card-body");

  // cardBody.style.backgroundImage = `url(${eachCard.projectImage})`;
  cardSection.appendChild(card);
}
