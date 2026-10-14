document.addEventListener("DOMContentLoaded", () => {
  // Search elements
  const searchInput = document.querySelector(
    'input[type="search"], input[placeholder*="Search"], input[placeholder*="search"]'
  );

  const toolCards = document.querySelectorAll(
    ".tool-card, .tool-card-link, [data-tool]"
  );

  const categoryButtons = document.querySelectorAll(
    "[data-category], .category-btn, .filter-btn"
  );

  // Search tools
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase().trim();

      toolCards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(query) ? "" : "none";
      });
    });
  }

  // Category filtering
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = (
        button.dataset.category ||
        button.dataset.filter ||
        button.textContent
      )
        .toLowerCase()
        .trim();

      categoryButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      toolCards.forEach((card) => {
        const cardCategory = (
         
