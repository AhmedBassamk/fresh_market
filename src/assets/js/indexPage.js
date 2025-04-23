gsap.registerPlugin(ScrollTrigger);

// بانر العنوان
gsap.to(".pannerTitle", {
  scrollTrigger: {
    trigger: ".panner",
    start: "top 80%",
  },
  opacity: 1,
  x: 0,
  duration: 1,
  ease: "power3.out",
});

// صورة البانر
gsap.to(".fruit", {
  scrollTrigger: {
    trigger: ".panner",
    start: "top 80%",
  },
  opacity: 1,
  y: 0,
  duration: 1.2,
  delay: 0.3,
  ease: "back.out(1.7)",
});

// زر البانر
gsap.to(".panner button", {
  scrollTrigger: {
    trigger: ".panner",
    start: "top 80%",
  },
  opacity: 1,
  x: 0,
  duration: 1,
  delay: 0.6,
  ease: "power3.out",
});

// كروت السلايدر
gsap.utils.toArray(".swiper-slide").forEach((slide, i) => {
  gsap.to(slide, {
    scrollTrigger: {
      trigger: slide,
      start: "top 95%",
    },
    opacity: 1,
    y: 0,
    duration: 0.8,
    delay: i * 0.2,
    ease: "power2.out",
  });
});
gsap.from(".maraka", {
  scrollTrigger: {
    trigger: ".maraka", // العنصر المستهدف
    start: "top 80%",    // يبدأ التأثير عندما يصل الجزء العلوي من العنصر إلى 80% من الشاشة
    end: "bottom top",   // ينتهي عندما يخرج العنصر من الشاشة
    scrub: 0.5,          // يرتبط التأثير بالتمرير (يعمل بسلاسة)
    markers: false,      // يمكن تفعيلها للمساعدة في تحديد البداية والنهاية
  },
  opacity: 0,            // يبدأ العنصر شفافًا
  scale: 0.7,            // يبدأ العنصر بحجم أصغر
  rotation: -45,         // يبدأ العنصر بدوران بسيط
  x: -100,               // يبدأ العنصر بعيدًا من اليسار
  y: 100,                // يبدأ العنصر بعيدًا من الأسفل
  duration: 1.5,         // مدة الأنيميشن
  ease: "power4.out",    // إنتقال سلس وحركة فاخرة
  stagger: 0.2,          // إضافة التأخير بين العناصر لتظهر بشكل متتابع
});
gsap.from(".ads img", {
  scrollTrigger: {
    trigger: ".ads img", // العنصر المستهدف
    start: "top 80%",    // يبدأ التأثير عندما يصل الجزء العلوي من العنصر إلى 80% من الشاشة
    end: "bottom top",   // ينتهي عندما يخرج العنصر من الشاشة
    scrub: 0.5,          // يرتبط التأثير بالتمرير (يعمل بسلاسة)
    markers: false,      // يمكن تفعيلها للمساعدة في تحديد البداية والنهاية
  },
  opacity: 0,            // تبدأ الصور شفافّة
  scale: 0.9,            // تبدأ الصور بحجم أصغر ثم تكبر تدريجيًا
  y: 100,                // تبدأ الصور من الأسفل
  rotation: 10,          // إضافة تأثير دوران بسيط
  duration: 1.5,         // مدة الأنيميشن
  ease: "power4.out",    // إنتقال سلس وحركة فاخرة
  stagger: 0.2,          // إضافة التأخير بين الصور لتظهر بشكل متتابع
});
gsap.from(".imgSec", {
  scrollTrigger: {
    trigger: ".imgSec", // العنصر المستهدف
    start: "top 80%",    // يبدأ التأثير عندما يصل الجزء العلوي من العنصر إلى 80% من الشاشة
    end: "bottom top",   // ينتهي عندما يخرج العنصر من الشاشة
    scrub: 0.5,          // يرتبط التأثير بالتمرير (يعمل بسلاسة)
    markers: false,      // يمكن تفعيلها للمساعدة في تحديد البداية والنهاية
  },
  opacity: 0,            // تبدأ الصور شفافّة
  scale: 0.9,            // تبدأ الصور بحجم أصغر ثم تكبر تدريجيًا
  y: 100,                // تبدأ الصور من الأسفل
  rotation: 10,          // إضافة تأثير دوران بسيط
  duration: 1.5,         // مدة الأنيميشن
  ease: "power4.out",    // إنتقال سلس وحركة فاخرة
  stagger: 0.2,          // إضافة التأخير بين الصور لتظهر بشكل متتابع
});
gsap.from(".accordion-item", {
  scrollTrigger: {
    trigger: ".accordion-item",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "power4.out"
});
gsap.from(".comment", {
  scrollTrigger: {
    trigger: ".comment",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power4.out",
  stagger: 0.3
});

// الصور الجانبية تطلع بشكل ناعم
gsap.from(".overviewPeopleImage", {
  scrollTrigger: {
    trigger: ".overviewPeopleImage",
    start: "top 90%",
    toggleActions: "play none none none"
  },
  scale: 0.8,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
  stagger: 0.2
});

// لمعة خفيفة تمر على الكرت
document.querySelectorAll(".comment").forEach((el) => {
  const shine = document.createElement("div");
  shine.classList.add("shine-effect");
  el.appendChild(shine);

  gsap.fromTo(
    shine,
    { left: "-100%" },
    {
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
      left: "120%",
      duration: 1.5,
      ease: "power2.out",
      delay: 0.4
    }
  );
});

// Simple elevator usage.
var elementButton = document.querySelector('.elevator');
var elevator = new Elevator({
  element: elementButton,
  mainAudio: '../../assets/music/elevator.mp3', // Music from http://www.bensound.com/
  endAudio: '../../assets/music/ding.mp3'
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
    612: {
      slidesPerView: 3,
    },
    410: {
      slidesPerView: 2,
    },
    100: {
      slidesPerView: 1,
    }
  },
});