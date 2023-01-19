import "/src/styles/header.css";
import Websitelogo from "../assets/images/nudeln.png";

export default function header() {
  const headerSection = document.createElement("header");
  document.body.appendChild(headerSection);

  const logo = new Image();
  logo.src = Websitelogo;
  logo.setAttribute("class", "logo");
  headerSection.appendChild(logo);

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "wrapper");
  headerSection.appendChild(wrapper);

  const linkList = document.createElement("ul");
  wrapper.appendChild(linkList);

  const homeLink = document.createElement("a");
  homeLink.setAttribute("class", "headerLinks");
  homeLink.setAttribute("id", "home-link");
  linkList.appendChild(homeLink);
  homeLink.innerText = "Home";

  const menuLink = document.createElement("a");
  menuLink.setAttribute("class", "headerLinks");
  menuLink.setAttribute("id", "menu-link");
  linkList.appendChild(menuLink);
  menuLink.innerText = "Menu";

  const aboutLink = document.createElement("a");
  aboutLink.setAttribute("class", "headerLinks");
  aboutLink.setAttribute("id", "about-link");
  linkList.appendChild(aboutLink);
  aboutLink.innerText = "About";

  const contactLink = document.createElement("a");
  contactLink.setAttribute("class", "headerLinks");
  contactLink.setAttribute("id", "contact-link");
  linkList.appendChild(contactLink);
  contactLink.innerText = "Contact";
}
