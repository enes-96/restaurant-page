import "/src/styles/menu.css";

export default function menu() {
  const menuTitle = document.createElement("h2");
  menuTitle.textContent = "Our Way, Our Menu";
  document.body.appendChild(menuTitle);
}
