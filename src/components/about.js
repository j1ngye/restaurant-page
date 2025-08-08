export function aboutPage() {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = "";

  const imgSrc =
    "https://resizing.flixster.com/qWcK7xCdKemnTJf3t8PQfCZ72iA=/375x210/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15867880_i_h10_aa.jpg";
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  h1.textContent = "About";
  p.textContent =
    "Los Pollos Hermanos is a beloved fast-food chain known for its crispy fried chicken and impeccable service. Its bright, inviting atmosphere makes it a community favorite, but beneath the surface, it's more than just a restaurant—it's a front for a much larger, secretive operation.";
  p.style.width = "500px";

  contentDiv.appendChild(h1);
  contentDiv.appendChild(p);
}
