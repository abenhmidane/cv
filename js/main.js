// Intersection Observer for section animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  }
);

document.querySelectorAll("section").forEach((section) => {
  observer.observe(section);
});

// Mouse movement effect for grid background
document.addEventListener("mousemove", (e) => {
  const grid = document.querySelector(".grid-bg");
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  grid.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
});
