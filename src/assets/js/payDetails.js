gsap.from("h1", {
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
  });

  gsap.from("p.text-[#848484]", {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.9,
    ease: "power2.out"
  });

  // زر "مجدول"
  gsap.from("button.bg-[#124634]", {
    opacity: 0,
    scale: 0.8,
    duration: 0.6,
    delay: 1.2,
    ease: "back.out(1.7)"
  });

  // عناصر التوصيل / التواصل / الطلب / الدفع
  gsap.from(".contact", {
    opacity: 0,
    y: 40,
    duration: 0.8,
    stagger: 0.2,
    delay: 1.4,
    ease: "power2.out"
  });
