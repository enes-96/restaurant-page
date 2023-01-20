import "/src/styles/menu.css";
import noodleImage from "../assets/images/menu-item-image-0.jpg";

export default function menu() {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const menuTitle = document.createElement("h2");
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
  function createMenuItem(id, name, image) {
    const menuItems = document.createElement("div");
    menuItems.setAttribute("class", "menu-items");
    menuItems.setAttribute("id", `item-${id}`);
    wrapper.appendChild(menuItems);

    const itemTitle = document.createElement("h5");
    itemTitle.setAttribute("class", "item-title");
    itemTitle.textContent = name;
    menuItems.appendChild(itemTitle);

    const itemImage = new Image();
    itemImage.src = image;
    itemImage.setAttribute("class", "item-image");
    menuItems.appendChild(itemImage);
  }
  createMenuItem(1, "Pizza", noodleImage);
  createMenuItem(2, "Burger");
  createMenuItem(3, "Nudle");
  createMenuItem(4, "Döner");
}
