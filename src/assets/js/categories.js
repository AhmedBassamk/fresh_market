$(document).ready(function () {

gsap.registerPlugin(ScrollTrigger);

gsap.from(".pannerImg img", {
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  scrollTrigger: {
    trigger: ".pannerImg",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});
gsap.from(".categoriesCard", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".categories_cards",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  });  
  gsap.from(".swiper-container-animation .swiper-slide", {
  scrollTrigger: {
    trigger: ".swiper-container-animation",
    start: "top 80%",
  },
  opacity: 0,
  y: 50,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
});
document.querySelectorAll(".addButton").forEach((btn) => {
  btn.addEventListener("click", () => {
    gsap.fromTo(btn, 
      { scale: 1 }, 
      { scale: 1.2, duration: 0.2, yoyo: true, repeat: 1, ease: "power1.inOut" }
    );
  });
});
gsap.from(".container h2", {
  scrollTrigger: {
    trigger: ".container h2",
    start: "top 90%",
  },
  opacity: 0,
  y: -30,
  duration: 1,
  ease: "power2.out"
});
var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      navigation: {
        nextEl: ".next-slide",
        prevEl: ".prev-slide",
      },
      breakpoints: {
        1024: {
          slidesPerView: 5,
        },
        768: {
          slidesPerView: 4,
        },
        640: {
          slidesPerView: 3,
        },
        320: {
          slidesPerView: 2,
        },
      },
    });
  });
