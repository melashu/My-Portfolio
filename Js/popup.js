const projectList = [
    {
      projectTitle: "Multi-Post Stories",
      projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      techTools: {
        html: "HTML",
        bootstrap: "Bootstrap",
        ruby: "Ruby",
      },
      projectImage: "../image/featuer.png",
      liveLink: "https://melashu.github.io/My-Portfolio/",
      liveSources: "https://github.com/melashu/My-Portfolio",
    },
    {
      projectTitle: "Profesional Art Printing Data",
      projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      techTools: {
        html: "HTML",
        bootstrap: "Bootstrap",
        ruby: "Ruby",
      },
      projectImage: "../image/card1.png",
      liveLink: "https://melashu.github.io/My-Portfolio/",
      liveSources: "https://github.com/melashu/My-Portfolio",
    },
    {
      projectTitle: "Data Dashboard Healthcare",
      projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      techTools: {
        html: "HTML",
        bootstrap: "Bootstrap",
        ruby: "Ruby",
      },
      projectImage: "../image/card2.png",
      liveLink: "https://melashu.github.io/My-Portfolio/",
      liveSources: "https://github.com/melashu/My-Portfolio",
    },
    {
      projectTitle: "Profesional Art Printing Data",
      projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      techTools: {
        html: "HTML",
        bootstrap: "Bootstrap",
        ruby: "Ruby",
      },
      projectImage: "../image/card3.png",
      liveLink: "https://melashu.github.io/My-Portfolio/",
      liveSources: "https://github.com/melashu/My-Portfolio",
    },
    {
      projectTitle: "Profesional Art Printing Data",
      projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      techTools: {
        html: "HTML",
        bootstrap: "Bootstrap",
        ruby: "Ruby",
      },
      projectImage: "../image/card4.png",
      liveLink: "https://melashu.github.io/My-Portfolio/",
      liveSources: "https://github.com/melashu/My-Portfolio",
    },
    {
      projectTitle: "Profesional Art Printing Data",
      projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      techTools: {
        html: "HTML",
        bootstrap: "Bootstrap",
        ruby: "Ruby",
      },
      projectImage: "../image/card33.png",
      liveLink: "https://melashu.github.io/My-Portfolio/",
      liveSources: "https://github.com/melashu/My-Portfolio",
    },
    {
      projectTitle: "Profesional Art Printing Data",
      projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
      techTools: {
        html: "HTML",
        bootstrap: "Bootstrap",
        ruby: "Ruby",
      },
      projectImage: "../image/card22.png",
      liveLink: "https://melashu.github.io/My-Portfolio/",
      liveSources: "https://github.com/melashu/My-Portfolio",
    },
  ];
  const popup = document.getElementById("popup");
const projectButton = document.querySelectorAll(".card-button");
const header = document.querySelector("header");
const main = document.querySelector("main");

const socialIcon = document.getElementsByClassName("social-media")[0];
const storyButton = document.getElementsByClassName("story-button")[0];
const popupTitleContainer = document.createElement("div");
popupTitleContainer.className = "popup-title-container";
const popupH2 = document.createElement("h2");
popupH2.className = "popup-title";
const popupClose = document.createElement("span");
popupClose.className = "popup-close-btn";
popupClose.id = "popup-close-btn";
popupClose.innerHTML = "&times;";

projectButton.forEach((item) => {
  item.addEventListener("click", (obj) => {
    obj.preventDefault();
    let key = obj.target.dataset.id;
    popupWindow(key);
  });
});

storyButton.addEventListener("click", () => {
  popupWindow(0);
});