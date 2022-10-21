/* eslint-disable */
const projectList = [
  {
    projectTitle: "MDS",
    projectDiscription:
      " This website demonstrate a services delivered by a technology firm called MDS.",
    detailDescription:
      " The website demonstrate a services delivered by a technology firm called Mount Digital solution. It is accessible in both mobile and desktop devices.",
    techTools: {
      javascript: "JavaScript",
      bootstrap: "HTML",
      react: "CSS",
    },
    projectImage: "./image/mds.png",
    liveLink: "https://melashu.github.io/Mount-Digital-Solution/index.html",
    liveSources: "https://github.com/melashu/Mount-Digital-Solution",
  },
  {
    projectTitle: "Tv Show",
    projectDiscription:
      " This app show a serious of TV shows from a TV-maze API.",
    detailDescription:
      " This app show a serious of TV shows from a TV-maze API. Users can put their comment and like to the show they want. and uses can check the previous comments and number of likes given by others.",
    techTools: {
      javascript: "JavaScript",
      bootstrap: "HTML",
      react: "CSS",
    },
    projectImage: "./image/tvshow.png",
    liveLink: "https://john-kibirige.github.io/tv-maze/",
    liveSources: "https://github.com/melashu/Tv-Show",
  },
  {
    projectTitle: "Bookstore",
    projectDiscription:
      "Bookstore is a web app which enable the user to record books by title and their author to the exteranl API.",
    detailDescription:
      "Bookstore is a web app which enable the user to record books by title and their author to the exteranl API. Users can also track their reading progress.",
    techTools: {
      javascript: "React",
      bootstrap: "CSS",
      react: "JSX",
    },
    projectImage: "./image/bookstore.png",
    liveLink: "https://bookstoreapps.netlify.app/",
    liveSources: "https://github.com/melashu/Bookstore",
  },
  {
    projectTitle: "kCinema",
    projectDiscription:
      " kCinema is a movie store app. It is built using react, react-redux, axios, CSS, and using external APIs.",
    detailDescription:
      "kCinema is a movie store app. It is built using react, react-redux, axios, CSS, and using external APIs.I use Axios to fetch remote API dates. It is connected with www.omdbapi.com/ API (It provides information about movies). The app enables us to filter our serious movies using a dropdown button. Users can search for any movie by entering the movie title in the search box. Users can see the details of each movie. Users can access both English and Amharic movies.",
    techTools: {
      javascript: "JavaScript",
      bootstrap: "Bootstrap",
      react: "React",
      redux: "Redux",
    },
    projectImage: "./image/kcinema.png",
    liveLink: "https://kcinema.netlify.app/",
    liveSources: "https://github.com/melashu/kCinema",
  },
  {
    projectTitle: "Space-Travelers-Hub",
    projectDiscription:
      " This is a web application for a company that provides commercial and scientific space travel services. ",
    detailDescription:
      "This is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.",
    techTools: {
      html: "HTML",
      javascript: "JavaScript",
      bootstrap: "Bootstrap",
      react: "React",
    },
    projectImage: "./image/space.png",
    liveLink: "https://spacehubs.netlify.app/",
    liveSources: "https://github.com/melashu/Space-Travelers-Hub",
  },
  {
    projectTitle: "Fruit Info",
    projectDiscription:
      " Fruitinfo is integrated with Fruityvice API. Fruitinfo is provides data for all kinds of fruit!  ",
    detailDescription:
      "Fruitinfo is integrated with Fruityvice API. Fruitinfo is provides data for all kinds of fruit! Users can use Fruitinfo to find out interesting information about fruit and educate yourself.",
    techTools: {
      react: "React",
      scss: "SCSS",
      redux: "Redux",
      mui: "Material UI",
    },
    projectImage: "./image/fruit.png",
    liveLink: "https://github.com/melashu/Fruitinfo/tree/feature-branch",
    liveSources: "https://github.com/melashu/Fruitinfo/tree/feature-branch",
  },
  {
    projectTitle: "Live Crypto",
    projectDiscription:
      " Live crypto is a real-time crypto pricing predication app. It fetch real-time data from CoinCap API. ",
    detailDescription:
      "Live crypto is a real-time crypto pricing predication app. It display the real-time crypto prices by fetch data from CoinCap API. It provide information to users by collecting exchange data from thousands of markets, Users can access transparent and accurate data on asset price and availability.",
    techTools: {
      react: "React",
      scss: "SCSS",
      redux: "Redux",
      mui: "Material UI",
    },
    projectImage: "./image/crypto.jpg",
    liveLink: "https://live-cryptos.netlify.app/",
    liveSources: "https://github.com/melashu/livecrypto",
  },
  {
    projectTitle: "MDS Back office",
    projectDiscription:
      " MDS admin back office is a sales management admin app that enables the admins to manage everything.",
    detailDescription:
      "MDS admin back office is a sales management admin dashboard app that enables the administrator, to add and remove users, can track deliveries and orders, can add and remove products, view details of each product and each user, check the company's revenue and handle notifications and messages.",
    techTools: {
      react: "React",
      scss: "SCSS",
      redux: "Redux",
      mui: "Material UI",
    },
    projectImage: "./image/mds-light.png",
    liveLink: "https://mdsadmin.netlify.app/",
    liveSources: "https://github.com/melashu/Salse-management-admin-Backoffice",
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
                    } alt="featuer image">
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
                
                    <img class="card-img" src="${eachCard.projectImage}"/>

                    </div>
                   <div>
                        <h2 class="card-title">${eachCard.projectTitle}</h2>
                        <p class="card-description">
                            ${eachCard.projectDiscription}
                        </p>
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
