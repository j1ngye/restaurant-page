export function homePage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  h1.textContent = "Welcome to Los Pollos Hermanos";
  p.textContent = "Where great chicken and quality service come together.";
  contentDiv.appendChild(h1);
  contentDiv.appendChild(p);
}
