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


document.addEventListener("DOMContentLoaded", () => {

    const watchBtn = document.querySelector(".ai-btn");
    const modal = document.getElementById("watchModal");
    const closeBtn = document.querySelector(".close-modal");
    const video = document.getElementById("watchVideo");

    watchBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        video.src = "https://www.youtube.com/embed/dyCSv2d8spk?autoplay=1";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        video.src = "";
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            video.src = "";
        }
    });

});