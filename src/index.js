import "./styles.css";
import { homePage } from "./components/home";
import { menuPage } from "./components/menu";
import { aboutPage } from "./components/about";
const nav = document.querySelector("nav");
homePage();
nav.addEventListener("click", (e) => {
  const btnClassName = e.target.className;
  switch (btnClassName) {
    case "home-btn":
      homePage();
      break;
    case "menu-btn":
      menuPage();
      break;
    case "about-btn":
      aboutPage();
      break;
  }
});
