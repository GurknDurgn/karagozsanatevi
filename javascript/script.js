//for navbar script -->

document.getElementById("toggleButton").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.toggle("hidden");
});
document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("mobileMenu").classList.add("hidden");
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
//<!-- for navbar -->
//<!-- for slider script-->

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active-dot"));

  slides[index].style.display = "block";
  dots[index].classList.add("active-dot");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);

// automatic switching (4sn)
setInterval(nextSlide, 4000);
//slider text
function updateContent() {
  const h1 = document.querySelector(".slider-title");
  const p = document.querySelector(".slider-text");

  if (window.innerWidth >= 768) {
    h1.textContent = "Traditional Music & Arts Organisations";
    p.textContent =
      "Karagöz Sanat Evi, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type..";
  } else {
    h1.textContent = "Lorem, ipsum.";
    p.textContent =
      "Karagöz Sanat Evi, is simply dummy text of the printing and typesetting industry. ...";
  }
}

window.addEventListener("DOMContentLoaded", updateContent);
window.addEventListener("resize", updateContent);

//<!-- for slider end -->
