const projectList = [
  {
    projectTitle: 'Multi-Post Stories',
    projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: '../image/featuer.png',
    liveLink: 'https://melashu.github.io/My-Portfolio/',
    liveSources: 'https://github.com/melashu/My-Portfolio',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: '../image/card1.png',
    liveLink: 'https://melashu.github.io/My-Portfolio/',
    liveSources: 'https://github.com/melashu/My-Portfolio',
  },
  {
    projectTitle: 'Data Dashboard Healthcare',
    projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: '../image/card2.png',
    liveLink: 'https://melashu.github.io/My-Portfolio/',
    liveSources: 'https://github.com/melashu/My-Portfolio',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: '../image/card3.png',
    liveLink: 'https://melashu.github.io/My-Portfolio/',
    liveSources: 'https://github.com/melashu/My-Portfolio',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: '../image/card4.png',
    liveLink: 'https://melashu.github.io/My-Portfolio/',
    liveSources: 'https://github.com/melashu/My-Portfolio',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: '../image/card33.png',
    liveLink: 'https://melashu.github.io/My-Portfolio/',
    liveSources: 'https://github.com/melashu/My-Portfolio',
  },
  {
    projectTitle: 'Profesional Art Printing Data',
    projectDiscription:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
    techTools: {
      html: 'HTML',
      bootstrap: 'Bootstrap',
      ruby: 'Ruby',
    },
    projectImage: '../image/card22.png',
    liveLink: 'https://melashu.github.io/My-Portfolio/',
    liveSources: 'https://github.com/melashu/My-Portfolio',
  },
];
const popup = document.getElementById('popup');
const projectButton = document.querySelectorAll('.card-button');
const header = document.querySelector('header');

const body = document.querySelector('body');

const socialIcon = document.getElementsByClassName('social-media')[0];
const storyButton = document.getElementsByClassName('story-button')[0];
const popupTitleContainer = document.createElement('div');
popupTitleContainer.className = 'popup-title-container';
const popupH2 = document.createElement('h2');
popupH2.className = 'popup-title';
const popupClose = document.createElement('span');
popupClose.className = 'popup-close-btn';
popupClose.id = 'popup-close-btn';
popupClose.innerHTML = '&times;';

function popupWindow(key) {
  window.scrollTo(0, 0);
  const project = projectList[key];

  popupH2.innerHTML = project.projectTitle;
  popupTitleContainer.appendChild(popupH2);
  popupTitleContainer.appendChild(popupClose);

  const temp = `<div class="popup-container">
            <ul class="tools" id="popup-tools">
                <li>${project.techTools.html}</li>
                <li>${project.techTools.bootstrap}</li>
                <li>${project.techTools.ruby}</li>
            </ul>
            <div class="popup-left-container">
                <div class="popup-img-container">
                    <img src="${project.projectImage}" alt="project image" class="popup-img">
                </div>
                <div class="popup-description-container">
                    <p class="popup-description" id="popup-description">${project.projectDiscription}</p>
                    <div class="popup-button">
                        <a href="${project.liveLink}" class="popup-btn submit-button" id="btn-live">See Live <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                        <a href="${project.liveSources}" class="popup-btn submit-button" id="btn-source">See Sources <i class="popup-btn-icon fa-brands fa-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
`;

  const popupContainerDOM = new DOMParser().parseFromString(temp, 'text/html');
  const x = popupContainerDOM.getElementsByClassName('popup-container')[0];
  x.insertBefore(popupTitleContainer, x.children[0]);
  body.style.overflowY = "hidden";
  popup.style.display = 'block';
  popup.appendChild(x);
  header.style.filter = 'blur(3px)';
  socialIcon.style.filter = 'blur(3px)';
}

projectButton.forEach((item) => {
  item.addEventListener('click', (obj) => {
    obj.preventDefault();
    const key = obj.target.dataset.id;
    popupWindow(key);
  });
});

storyButton.addEventListener('click', () => {
  popupWindow(0);
});

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
  header.style.filter = 'blur(0)';
  socialIcon.style.filter = 'blur(0)';
  body.style.overflowY = "visible";
});