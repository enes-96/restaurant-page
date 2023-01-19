//Since we’re all set up to write our code in multiple files,
// let’s write this initial page-load function inside of its
//own module and then import and call it inside of index.js.
import header from "/src/pages/header.js";
import home from "/src/pages/home.js";
import menu from "/src/pages/menu.js";
import contact from "/src/pages/contact.js";
import about from "/src/pages/about.js";

header();
home();

document.getElementById("home-link").addEventListener("click", () => {
  home();
});
document.getElementById("menu-link").addEventListener("click", () => {
  menu();
});
document.getElementById("about-link").addEventListener("click", () => {
  about();
});
document.getElementById("contact-link").addEventListener("click", () => {
  contact();
});
