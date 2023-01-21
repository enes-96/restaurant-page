import "/src/styles/home.css";
import menu from "/src/pages/menu.js";

export default function home() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.style.backgroundImage = "url(/src/assets/images/home-bg.png)";

  const homeWrapper = document.createElement("div");
  homeWrapper.setAttribute("class", "home-wrapper");
  main.appendChild(homeWrapper);

  function createTitle(titleType, titleText) {
    const homeTitle = document.createElement(titleType);
    homeTitle.textContent = titleText;
    homeWrapper.appendChild(homeTitle);
  }
  createTitle("h1", "The Real Dealon Asian Food");
  createTitle("h4", "The noodle way serves authentic asian food");

  const homeButton = document.createElement("a");
  homeButton.textContent = "Menu";
  homeButton.style.cursor = "pointer";
  homeButton.setAttribute("class", "home-button");
  homeWrapper.appendChild(homeButton);

  homeButton.addEventListener("click", menu);
}
