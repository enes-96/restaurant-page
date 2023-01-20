import "/src/styles/header.css";
import Websitelogo from "../assets/images/nudeln.png";
import { createImg } from "../index.js";

export default function header() {
  const headerSection = document.createElement("header");
  document.body.appendChild(headerSection);

  createImg(Websitelogo, "logo", headerSection);

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  headerSection.appendChild(wrapper);

  const linkList = document.createElement("ul");
  wrapper.appendChild(linkList);

  function createLink(itemId, itemText) {
    const headerItem = document.createElement("a");
    headerItem.setAttribute("class", "headerLinks");
    headerItem.setAttribute("id", itemId);
    linkList.appendChild(headerItem);
    headerItem.textContent = itemText;
  }
  createLink("home-link", "Home");
  createLink("menu-link", "Menu");
  createLink("about-link", "About");
  createLink("contact-link", "Contact");
}
