const MOBILE_NAV_QUERY = "(max-width: 46rem)";

export function initialiseNavigation() {
  const navigationButton = document.querySelector(".nav-toggle");
  const navigationMenu = document.querySelector("#nav-menu");

  if (!navigationButton || !navigationMenu) return;

  const closeMenu = ({ returnFocus = false } = {}) => {
    navigationButton.setAttribute("aria-expanded", "false");
    navigationMenu.dataset.open = "false";
    if (returnFocus) navigationButton.focus();
  };

  navigationButton.addEventListener("click", () => {
    const isOpen = navigationButton.getAttribute("aria-expanded") === "true";
    navigationButton.setAttribute("aria-expanded", String(!isOpen));
    navigationMenu.dataset.open = String(!isOpen);
  });

  navigationMenu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navigationButton.getAttribute("aria-expanded") === "true") {
      closeMenu({ returnFocus: true });
    }
  });

  window.matchMedia(MOBILE_NAV_QUERY).addEventListener("change", (event) => {
    if (!event.matches) closeMenu();
  });
}
