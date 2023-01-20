import "/src/styles/menu.css";
import noodleImage from "../assets/images/menu-item-image-0.jpg";
import friedPorgImage from "../assets/images/pan-fried-.jpg";
import beefSoup from "../assets/images/beefsoup.jpg";
import { createImg } from "../index.js";

export default function menu() {
  const main = document.querySelector("main");
  main.style.display = "block";
  main.innerHTML = "";
  main.style.backgroundImage = "url(/src/assets/images/home-bg.png)";

  function createDom(itemTag, itemClass, itemText) {
    const domItem = document.createElement(itemTag);
    domItem.setAttribute("class", itemClass);
    domItem.textContent = itemText;
    main.appendChild(domItem);
  }
  createDom("h2", "menu-title", "Our Way, Our Menu");
  createDom("p", "menu-second-title", "Small menu, endless flavours");
  createDom("h3", "wrapper-title", "Øur Menu");

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "menu-wrapper");
  main.appendChild(wrapper);

  function createMenuItem(name, image, price) {
    const menuItems = document.createElement("div");
    menuItems.setAttribute("class", "menu-items");
    wrapper.appendChild(menuItems);

    const itemTitle = document.createElement("h5");
    itemTitle.setAttribute("class", "item-title");
    itemTitle.textContent = name;
    menuItems.appendChild(itemTitle);

    createImg(image, "item-image", menuItems);

    const itemPrice = document.createElement("p");
    itemPrice.setAttribute("class", "item-price");
    itemPrice.textContent = `€ ${price}`;
    menuItems.appendChild(itemPrice);
  }
  createMenuItem("Sumo Noodle", noodleImage, 15);
  createMenuItem("Fried pork dumplings", friedPorgImage, 11);
  createMenuItem("Beef Soup", beefSoup, 14);
}
