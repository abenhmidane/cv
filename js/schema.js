const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Test Automation & Quality Engineering Blog",
  description:
    "Expert insights on Test Automation, DevOps, and Software Quality Engineering",
  url: "https://anouarbh.info",
  author: {
    "@type": "Person",
    name: "Anouar Ben Hmidane",
    jobTitle: "Test Automation Leader & Quality Engineering Entrepreneur",
    url: "https://anouarbh.info/about",
  },
};

document.querySelector("head").insertAdjacentHTML(
  "beforeend",
  `<script type="application/ld+json">
    ${JSON.stringify(blogSchema)}
  </script>`
);
