const dropdowns = document.querySelectorAll(".dropdown-toggle");

dropdowns.forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();

    const parent = toggle.parentElement;

    document.querySelectorAll(".dropdown").forEach(item => {
      if (item !== parent) {
        item.classList.remove("active");
      }
    });

    parent.classList.toggle("active");
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach(item => {
      item.classList.remove("active");
    });
  }
});
/* */
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");

mobileDropdowns.forEach(dropdown => {
  const trigger = dropdown.querySelector("span");

  trigger.addEventListener("click", () => {
  
    mobileDropdowns.forEach(d => {
      if (d !== dropdown) {
        d.classList.remove("active");
      }
    });

    dropdown.classList.toggle("active");
  });
});

document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});

/* AI feature image swap */
document.querySelectorAll(".ai-flashcards").forEach(section => {
  const features = section.querySelectorAll(".ai-feature");
  const previewImage = section.querySelector(".ai-image img");

  features.forEach(feature => {
    feature.addEventListener("mouseenter", () => {
 
      features.forEach(f => f.classList.remove("active"));

      feature.classList.add("active");

      const newImage = feature.dataset.image;
      previewImage.src = newImage;
    });
  });
});
