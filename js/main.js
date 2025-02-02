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

// Track blog post clicks
document.querySelectorAll(".blog-card a, .featured-post a").forEach((link) => {
  link.addEventListener("click", function () {
    gtag("event", "post_click", {
      post_title: this.querySelector("h3").textContent,
      post_url: this.getAttribute("href"),
    });
  });
});

// Track social link clicks
document.querySelectorAll(".connect-link").forEach((link) => {
  link.addEventListener("click", function () {
    gtag("event", "social_click", {
      social_type: this.querySelector("span").textContent,
      social_url: this.getAttribute("href"),
    });
  });
});

// Track time spent on blog posts
if (document.querySelector(".post-container")) {
  let startTime = Date.now();
  window.addEventListener("beforeunload", () => {
    let timeSpent = Math.round((Date.now() - startTime) / 1000);
    gtag("event", "time_spent", {
      page_type: "blog_post",
      page_title: document.title,
      time_seconds: timeSpent,
    });
  });
}
