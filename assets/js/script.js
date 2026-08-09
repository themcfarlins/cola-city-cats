const grid = document.getElementById("kitten-grid");

function renderKittens() {
  grid.innerHTML = window.kittens.map(k => `
    <article class="kitten-card">
      <img class="kitten-photo" src="assets/images/${k.photo}" alt="${k.name} - Cola City Cats kitten" loading="lazy">
      <div class="kitten-body">
        <div class="kitten-top">
          <div>
            <h3 class="kitten-name">${k.name}</h3>
            <div class="kitten-meta">${k.sex}${k.collar ? " • " + k.collar : ""} • Born May 9, 2026</div>
          </div>
          <span class="status">${k.status}</span>
        </div>
        <p class="kitten-description">${k.description}</p>
        <a class="kitten-link" href="#contact" data-kitten="${k.name}">Ask about ${k.name} →</a>
      </div>
    </article>
  `).join("");

  document.querySelectorAll("[data-kitten]").forEach(link => {
    link.addEventListener("click", () => {
      const message = document.querySelector('textarea[name="message"]');
      if (message) message.value = `Hi! I'm interested in ${link.dataset.kitten}. I'd love to learn more.`;
    });
  });
}

renderKittens();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

document.getElementById("year").textContent = new Date().getFullYear();
