$(document).ready(function () {
gsap.to(".commentProductCard", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out",
  });

  // الأنيميشن لظهور التقييمات
  gsap.to(".rates", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,  // تأخير طفيف لظهور التقييمات
    ease: "power4.out",
  });

  // الأنيميشن للنجمات
  gsap.to(".stars img", {
    opacity: 1,
    scale: 1,
    duration: 1,
    delay: 1,
    stagger: 0.1,  // التأثير على النجمات واحدًا تلو الآخر
    ease: "back.out(1.7)",
  });

  // تحريك شريط التقييم
  gsap.fromTo(".rates div", {
    width: "0%",
  }, {
    width: (index, target) => target.style.width, // استخدام العرض الموجود
    duration: 1.5,
    ease: "power2.out",
    stagger: 0.1,  // تأخير بين الشرائط
  });

// الأنيميشن عند التمرير
gsap.utils.toArray('.commentProductCard').forEach(card => {
  gsap.fromTo(card, {
    opacity: 0,
    y: 50,
  }, {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: card,
      start: "top 80%",  // يبدأ عندما يصل العنصر إلى 80% من الشاشة
      end: "top 30%",
      scrub: true,  // التأثير يكون سلسًا مع التمرير
    }
  });
  });
});
