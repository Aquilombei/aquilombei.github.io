window.lucide?.createIcons();
const menuButton = document.querySelector(".menu-button"),
  menu = document.querySelector("#menu");
menuButton?.addEventListener("click", () => {
  const o = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(o));
});
menu?.querySelectorAll("a").forEach((l) =>
  l.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  }),
);
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
if (reducedMotion)
  document
    .querySelectorAll(".reveal")
    .forEach((i) => i.classList.add("visible"));
else {
  const observer = new IntersectionObserver(
    (es) =>
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          observer.unobserve(e.target);
        }
      }),
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((i) => observer.observe(i));
}
