import "/src/styles/about.css";

export default function about() {
  const main = document.querySelector("main");
  main.innerHTML = "";
  main.style.display = "block";
  main.style.backgroundImage = "url(/src/assets/images/about-bg.jpg)";
  main.style.backgroundSize = "cover";

  const wrapper = document.createElement("div");
  wrapper.setAttribute("class", "about-wrapper");
  main.appendChild(wrapper);

  function createAboutText(itemType, itemClass, itemText) {
    const aboutItem = document.createElement(itemType);
    aboutItem.setAttribute("class", itemClass);
    aboutItem.innerHTML = itemText;
    wrapper.appendChild(aboutItem);
  }

  createAboutText(
    "h2",
    "about-title",
    `Fresh. <br> Authentic. <br> Simple. <br>`
  );
  createAboutText(
    "h6",
    "about-sec-title",
    "We’re bringing flavors from the east - to your plate."
  );
  createAboutText(
    "p",
    "about-descr",
    "Located near Osaka’s Kitashinchi nightlife district and the business town of Nakanoshima, Yakitori Ichimatsu puts a spell on chicken lovers. The modern chic exterior in black tones makes way for an interior with counter seating and a semi-private room where the charcoal grill takes center stage, so all can admire the skillful preparation. Chef Takeda’s career started with an ambitious goal of going independent after just one year of training. The restaurant he created then still operates, but his attention now is on Yakitori Ichimatsu, which began its days in Kitashinchi and moved to Nakanoshima eight years ago. Motivated by a desire to create more authentic yakitori, the move has meant a departure from the highly innovative yakitori cuisine served in the restaurant’s Kitashinchi days. Chef Takeda wanted to create a space that fostered guests’ relaxed enjoyment of his cuisine and allowed for closer communication between chef and guest, to share the stories of the various chicken parts and the best way to eat them. The formula is clearly a success, as Chef Takeda is now the proud recipient of a Michelin star."
  );
}
