import Websitelogo from "../assets/images/nudeln.png";

export default function header() {
  const headerSection = document.createElement("header");
  const logo = new Image();
  logo.src = Websitelogo;
  headerSection.append(logo);
  document.body.appendChild(headerSection);
}
