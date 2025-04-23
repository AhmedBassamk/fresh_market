gsap.registerPlugin(ScrollTrigger);

// 1) تأثير عند ظهور الصفحة على الصور والنصوص
gsap.from(".infoAboutFresh", {
  opacity: 0,
  y: 50,
  duration: 1.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".infoAboutFresh",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  },
});

gsap.from("img", {
  opacity: 0,
  scale: 0.8,
  duration: 1.5,
  ease: "power2.out",
  delay: 0.5,
  scrollTrigger: {
    trigger: "img",
    start: "top 80%",
    end: "bottom top",
    scrub: true,
  },
});

// 2) تأثير حركة الصورة عند المرور عليها
document.querySelector("img").addEventListener("mouseenter", () => {
  gsap.to("img", { scale: 1.1, duration: 0.3, ease: "power2.out" });
});
document.querySelector("img").addEventListener("mouseleave", () => {
  gsap.to("img", { scale: 1, duration: 0.3, ease: "power2.in" });
});

// 3) تأثير الحقول داخل النموذج
const inputs = document.querySelectorAll("input, textarea");
inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    gsap.to(input, {
      scale: 1.05,
      borderColor: "#064C50",
      duration: 0.3,
      ease: "power2.out",
    });
  });

  input.addEventListener("blur", () => {
    gsap.to(input, {
      scale: 1,
      borderColor: "#064C50",
      duration: 0.3,
      ease: "power2.in",
    });
  });
});

// 4) تأثير على الزر عند المرور عليه
const sendButton = document.querySelector("button");
sendButton.addEventListener("mouseenter", () => {
  gsap.to(sendButton, {
    scale: 1.1,
    duration: 0.3,
    ease: "power2.out",
  });
});
sendButton.addEventListener("mouseleave", () => {
  gsap.to(sendButton, {
    scale: 1,
    duration: 0.3,
    ease: "power2.in",
  });
});