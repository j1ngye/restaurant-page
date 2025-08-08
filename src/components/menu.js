import menu from "./food";

export function menuPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const h1 = document.createElement("h1");
  const ul = document.createElement("ul");
  menu.forEach((item) => {
    const listItem = document.createElement("li");
    const price = document.createElement("span");
    const container = document.createElement("div");
    const itemname = document.createElement("span");
    const description = document.createElement("p");
    itemname.textContent = item.name;
    price.textContent = "$" + item.price;
    description.textContent = item.description;
    container.classList.add("item-container");
    container.appendChild(itemname);
    container.appendChild(price);
    listItem.appendChild(container);
    listItem.appendChild(description);
    ul.appendChild(listItem);
  });
  h1.textContent = "Menu";

  contentDiv.appendChild(h1);
  contentDiv.appendChild(ul);
}
