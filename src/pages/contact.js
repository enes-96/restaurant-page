import "/src/styles/contact.css";
import illustrationContact from "../assets/images/illustration.png";

export default function contact() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.style.display = "grid";
  main.style.backgroundImage = "url(/src/assets/images/home-bg.png)";

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "contact-wrapper");
  main.appendChild(wrapper);

  const wrapperLeft = document.createElement("div");
  wrapperLeft.setAttribute("class", "wrapper-left");
  wrapper.appendChild(wrapperLeft);

  const contactImage = new Image();
  contactImage.src = illustrationContact;
  wrapperLeft.appendChild(contactImage);

  const contactText = document.createElement("p");
  contactText.setAttribute("class", "contact-text");
  contactText.textContent = "Contact Us";
  wrapperLeft.appendChild(contactText);

  const contactForm = document.createElement("form");
  contactForm.setAttribute("class", "contact-form");
  wrapper.appendChild(contactForm);

  function createFormElement(type, attr, plcholder) {
    const formElement = document.createElement("input");
    formElement.type = type;
    formElement.placeholder = plcholder;
    formElement.setAttribute("class", attr);
    contactForm.appendChild(formElement);
  }
  createFormElement("text", "name-input", "Name");
  createFormElement("number", "number-input", "Phone Number");
  createFormElement("email", "email-input", "Email");
  createFormElement("comment", "comment-input", "Comment");
  createFormElement("submit", "submit-btn");
}
