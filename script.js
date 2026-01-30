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

const mobileMenu = document.getElementById("mobileMenu");
const header = document.querySelector(".header");
const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const heroBottom = hero.offsetHeight;

  if (window.scrollY > heroBottom) {
    header.classList.add("scrolled");
    mobileMenu.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    mobileMenu.classList.remove("scrolled");
  }
});

/* */
const hamburger = document.getElementById("hamburger");

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
const features = document.querySelectorAll(".ai-feature");
const previewImage = document.getElementById("aiPreview");

features.forEach((feature) => {
  feature.addEventListener("mouseenter", () => {

    features.forEach((f) => f.classList.remove("active"));

    feature.classList.add("active");

    const newImage = feature.getAttribute("data-image");
    previewImage.src = newImage;
  });
});

/* FAQ accordion */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const button = item.querySelector(".toggle");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("active");

    faqItems.forEach(i => {
      i.classList.remove("active");
      i.querySelector(".toggle").textContent = "+";
    });

    if (!isOpen) {
      item.classList.add("active");
      button.textContent = "−";
    }
  });
});

