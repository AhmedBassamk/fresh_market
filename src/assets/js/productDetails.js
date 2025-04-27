$(document).ready(function () {
 
 // عرض الصورة للمنتج مع امكانية اضافة فيديو
 var top_sec = document.querySelectorAll(".card_img, .card_video");
 var top_show_img = document.querySelector(".top_show");
 var top_show_video = document.querySelector("video.top_show");

 Array.from(top_sec).forEach((elements) => {
   elements.addEventListener("click", function (eo) {
     if (elements.tagName === 'IMG') {
       top_show_img.src = elements.src;
       top_show_img.style.display = 'block';
       top_show_video.style.display = 'none';
     } else if (elements.tagName === 'VIDEO') {
       top_show_video.src = elements.src;
       top_show_video.style.display = 'block';
       top_show_img.style.display = 'none';
     }
   });
 });

 
gsap.registerPlugin(ScrollTrigger);

    // الصورة الكبيرة
    gsap.from(".show__img", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".show__img",
        start: "top 80%",
      }
    });

    // معلومات المنتج الأساسية
    gsap.from(".text-2xl, .text-3xl, .text-base, .text-sm, .text-[#E66A63]", {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text-2xl",
        start: "top 85%",
      }
    });

    // زر أضف للسلة + العداد
    gsap.from("#addToCartButton, #quantityCounter", {
      opacity: 0,
      scale: 0.8,
      duration: 0.7,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: "#addToCartButton",
        start: "top 85%",
      }
    });
  
      // تأخير الأنيميشن لكل منتج لجعلها تظهر بشكل تدريجي
      gsap.to('.product-card', {
        opacity: 1,
        y: 0, // العودة إلى وضعها الطبيعي
        duration: 0.8,
        delay: index * 0.2, // التأخير بين المنتجات
        ease: "power3.out",
      });

    // عند تمرير الصفحة، يمكننا إضافة تأثيرات مثل التمرير
    gsap.utils.toArray('.product-card').forEach(card => {
      gsap.fromTo(card, {
        opacity: 0,
        y: 50,
      }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 80%", // يبدأ عندما يصل العنصر إلى 80% من الشاشة
          end: "top 30%",
          scrub: true, // التأثير سيكون سلسًا مع التمرير
        }
      });
    });
  });
