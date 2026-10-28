document.addEventListener("DOMContentLoaded", () => {
  const filters = document.querySelectorAll(".filter");
  const projects = document.querySelectorAll(".project[data-category]");

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const chosen = button.dataset.filter;

      filters.forEach((filter) => {
        filter.classList.toggle("is-active", filter === button);
      });

      projects.forEach((project) => {
        project.hidden =
          chosen !== "all" &&
          project.dataset.category !== chosen;
      });
    });
  });

  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }
});