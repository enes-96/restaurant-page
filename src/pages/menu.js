import "/src/styles/menu.css";
import noodleImage from "../assets/images/menu-item-image-0.jpg";
import friedPorgImage from "../assets/images/pan-fried-.jpg";
import beefSoup from "../assets/images/beefsoup.jpg";

export default function menu() {
  const main = document.querySelector("main");
  main.style.display = "block";
  main.innerHTML = "";
  main.style.backgroundImage = "url(/src/assets/images/home-bg.png)";

  const menuTitle = document.createElement("h2");
  menuTitle.setAttribute("class", "menu-title");
  menuTitle.textContent = "Our Way, Our Menu";
  main.appendChild(menuTitle);

  const secondTitle = document.createElement("p");
  secondTitle.setAttribute("class", "menu-second-title");
  secondTitle.textContent = "Small menu, endless flavours";
  main.appendChild(secondTitle);

  const wrapperTitle = document.createElement("h3");
  wrapperTitle.setAttribute("class", "wrapper-title");
  wrapperTitle.textContent = "Øur Menu";
  main.appendChild(wrapperTitle);

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "menu-wrapper");
  main.appendChild(wrapper);
  //-----------------------------------------------------
  function createMenuItem(name, image, price) {
    const menuItems = document.createElement("div");
    menuItems.setAttribute("class", "menu-items");
    wrapper.appendChild(menuItems);

    const itemTitle = document.createElement("h5");
    itemTitle.setAttribute("class", "item-title");
    itemTitle.textContent = name;
    menuItems.appendChild(itemTitle);

    const itemImage = new Image();
    itemImage.src = image;
    itemImage.setAttribute("class", "item-image");
    menuItems.appendChild(itemImage);

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("class", "item-price");
    itemPrice.textContent = `€ ${price}`;
    menuItems.appendChild(itemPrice);
  }
  createMenuItem("Sumo Noodle", noodleImage, 15);
  createMenuItem("Fried pork dumplings", friedPorgImage, 11);
  createMenuItem("Beef Soup", beefSoup, 14);
}
