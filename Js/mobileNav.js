let mainContainer = document.querySelector("main");
let headerContainer = document.querySelector("header");

let navContainer = document.getElementsByClassName("nav-bar")[0];
let mainBox = document.getElementById("mail-box");
let menuIcon = document.getElementById("menu-icon");
let btnClose = document.getElementById("btn-close");
let devName = document.getElementsByClassName("dev-name")[0];
let litsItem = document.querySelector("nav ul");

menuIcon.addEventListener("click", () => {
  /***
   * Lets hidden some element
   */
  menuIcon.style.display = "none";
  mainContainer.style.display = "none";
  devName.style.display = "none";
  mainBox.style.display = "none";

  btnClose.style.display = "block";

  headerContainer.style.height = "100vh";
  headerContainer.style.alignItems = "flex-start";

  navContainer.style.display = "flex";
  navContainer.style.flexDirection = "column";
  navContainer.style.justifyContent = "space-between";
  navContainer.style.width = "100%";

  litsItem.style.display = "block";
  litsItem.style.alignItems = "initial";
  litsItem.style.width = "90%";
  litsItem.style.color = "#fff5e1";
});

btnClose.addEventListener("click", () => {
  menuIcon.style.display = "block";
  mainContainer.style.display = "block";
  devName.style.display = "block";
  mainBox.style.display = "block";

  btnClose.style.display = "none";

  navContainer.style.width = "auto";
  litsItem.style.display = "none";

});
