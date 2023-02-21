const mainContainer = document.querySelector("main");
const headerContainer = document.querySelector("header");

const navContainer = document.getElementsByClassName("nav-bar")[0];
const menuIcon = document.getElementById("menu-icon");
const btnClose = document.getElementById("btn-close");
const devName = document.getElementsByClassName("dev-name")[0];
const litsItem = document.querySelector("nav ul");
const menuItemList = document.querySelectorAll("nav ul li a");
menuIcon.addEventListener("click", () => {
  menuIcon.style.display = "none";
  mainContainer.style.display = "none";
  devName.style.display = "none";
  btnClose.style.display = "block";
  headerContainer.style.height = "100vh";
  headerContainer.style.alignItems = "flex-start";
  navContainer.style.display = "flex";
  navContainer.style.flexDirection = "column";
  navContainer.style.justifyContent = "space-between";
  navContainer.style.width = "100%";
  litsItem.style.display = "block";
  litsItem.style.alignItems = "initial";
  litsItem.style.width = "95%";
  litsItem.style.color = "#fff5e1";
});

function reveret() {
  menuIcon.style.display = "block";
  mainContainer.style.display = "block";
  devName.style.display = "block";
  btnClose.style.display = "none";
  navContainer.style.width = "auto";
  headerContainer.style.height = "48px";
  headerContainer.style.alignItems = "center";
  litsItem.style.display = "none";

}
btnClose.addEventListener("click", () => {
  reveret();
  window.location.reload();
});

menuItemList.forEach((item) => {
  item.addEventListener("click", (e) => {
    window.location = e.target.href;
    mainContainer.style.display = "block";

  });
});
