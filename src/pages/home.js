import "/src/styles/home.css";

export default function home() {
  const main = document.createElement("main");
  document.body.appendChild(main);
  main.style.backgroundImage = "url(/src/assets/images/home-bg.png)";

  const homeWrapper = document.createElement("div");
  homeWrapper.setAttribute("class", "home-wrapper");
  main.appendChild(homeWrapper);

  const homeTitle = document.createElement("h1");
  homeTitle.textContent = "The Real Dealon Asian Food";
  homeWrapper.appendChild(homeTitle);

  const secondTitle = document.createElement("h4");
  secondTitle.textContent = "The noodle way serves authentic asian food";
  homeWrapper.appendChild(secondTitle);

  const homeButton = document.createElement("a");
  homeButton.textContent = "Menu";
  homeButton.setAttribute("class", "home-button");
  homeButton.href = "https://google.com";
  homeWrapper.appendChild(homeButton);
}
