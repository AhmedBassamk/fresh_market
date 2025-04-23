gsap.to(".cart-item", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out",
  });

  // ظهور السعر
  gsap.to(".price", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,
    ease: "power4.out",
  });

  // ظهور الأزرار في الـ cart-actions
  gsap.to(".cart-actions button", {
    opacity: 1,
    scale: 1,
    duration: 0.5,
    stagger: 0.2,  // التأثير على الأزرار واحد تلو الآخر
    ease: "back.out(1.7)",
  });

  // تأثير على زر زيادة أو تقليل الكمية
  gsap.fromTo("#quantityCounter", {
    opacity: 0,
    y: 20,
  }, {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power4.out",
  });

// تحريك الأزرار عند التفاعل
document.getElementById('increment').addEventListener('click', () => {
  gsap.to("#quantity", {
    scale: 1.2,
    duration: 0.2,
    yoyo: true, // يجعل التغيير يعود إلى الوضع الأصلي
    repeat: 1,
  });
});

document.getElementById('decrement').addEventListener('click', () => {
  gsap.to("#quantity", {
    scale: 0.8,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
  });
  });
  gsap.to(".summary-item", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,  // تأثير متسلسل بين العناصر
    ease: "power4.out",
  });

  // تأثير الزر "الاستمرار بالدفع" عند التحميل
  gsap.to(".button-summary", {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 0.5,  // تأخير لتظهر بشكل متأخر قليلاً
    ease: "power4.out",
  });