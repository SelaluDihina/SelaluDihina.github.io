document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter");
  const cards = document.querySelectorAll(".project-card[data-category]");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filters.forEach((item) => item.classList.toggle("active", item === button));
      cards.forEach((card) => {
        card.hidden = selected !== "all" && card.dataset.category !== selected;
      });
    });
  });
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
});