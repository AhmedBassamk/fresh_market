 // Map functionality
      // let map;
      // let marker;
      // let selectedLocation = null;

      // function initMap() {
      //   map = new google.maps.Map(document.getElementById('map'), {
      //     center: { lat: 31.5017, lng: 34.4668 }, // Default center (Gaza)
      //     zoom: 12
      //   });

      //   map.addListener('click', (event) => {
      //     if (marker) marker.setMap(null);
      //     marker = new google.maps.Marker({
      //       position: event.latLng,
      //       map: map
      //     });
      //     selectedLocation = event.latLng;
      //   });
      // }
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".about-section img", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: -100,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out"
  });

  // Animation for text
  gsap.from(".infoAboutFresh", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: 100,
    opacity: 0,
    duration: 1.5,
    delay: 0.3,
    ease: "power3.out"
  });

  // Hover effect on image
  const img = document.querySelector(".about-section img");
  img.addEventListener("mouseenter", () => {
    gsap.to(img, { scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)", duration: 0.4 });
  });
  img.addEventListener("mouseleave", () => {
    gsap.to(img, { scale: 1, boxShadow: "none", duration: 0.4 });
  });

  // Click effect on text
  const text = document.querySelector(".infoAboutFresh");
  text.addEventListener("click", () => {
    gsap.fromTo(text, { backgroundColor: "#fefefe" }, { backgroundColor: "transparent", duration: 0.6 });
  });
   // عنوان "مهمتنا"
   gsap.from(".ourMission h1", {
    scrollTrigger: {
      trigger: ".ourMission",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  // الفقرة تحت العنوان
  gsap.from(".ourMission > p", {
    scrollTrigger: {
      trigger: ".ourMission",
      start: "top 80%"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
  });

  // بطاقات "مهمتنا"
  gsap.from(".missionCards .card", {
    scrollTrigger: {
      trigger: ".missionCards",
      start: "top 85%"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  // Hover على الصور
  document.querySelectorAll(".card .image img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
      gsap.to(img, { scale: 1.05, duration: 0.3, ease: "power2.out" });
    });
    img.addEventListener("mouseleave", () => {
      gsap.to(img, { scale: 1, duration: 0.3, ease: "power2.out" });
    });
  });

  // Click تأثير بسيط على البطاقة
  document.querySelectorAll(".missionCards .card").forEach((card) => {
    card.addEventListener("click", () => {
      gsap.fromTo(card, 
        { scale: 1 },
        { scale: 0.97, duration: 0.1, yoyo: true, repeat: 1, ease: "power1.inOut" }
      );
    });
  });    
  gsap.from(".img_", {
    scrollTrigger: {
      trigger: ".infoAboutFresh",
      start: "top 85%",
    },
    x: 100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.from(".coreValuesImg", {
    scrollTrigger: {
      trigger: ".coreValuesSection",
      start: "top 85%",
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });

  // العنوان يظهر من فوق
  gsap.from(".coreValuesInfo h1", {
    scrollTrigger: {
      trigger: ".coreValuesInfo",
      start: "top 85%",
    },
    y: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // العناصر وحدة وحدة
  gsap.from(".coreValuesInfo ul li", {
    scrollTrigger: {
      trigger: ".coreValuesInfo",
      start: "top 85%",
    },
    x: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: "power2.out"
  });

  // click تأثير بسيط
  document.querySelectorAll(".coreValuesInfo ul li").forEach((item) => {
    item.addEventListener("click", () => {
      gsap.fromTo(item,
        { x: 0 },
        { x: -10, duration: 0.1, yoyo: true, repeat: 1, ease: "power1.inOut" }
      );
    });
  });

  // Hover عالصورة
  const valuesImg = document.querySelector(".coreValuesImg");
  valuesImg.addEventListener("mouseenter", () => {
    gsap.to(valuesImg, { scale: 1.03, duration: 0.3, ease: "power2.out" });
  });
  valuesImg.addEventListener("mouseleave", () => {
    gsap.to(valuesImg, { scale: 1, duration: 0.3, ease: "power2.out" });
  });
  // العنوان والفقرات
  gsap.from(".infoAboutFresh h1", {
    scrollTrigger: {
      trigger: ".infoAboutFresh",
      start: "top 85%"
    },
    x: -80,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });

  // كل عنصر من عناصر القائمة يظهر تدريجياً
  gsap.from(".infoAboutFresh ul li", {
    scrollTrigger: {
      trigger: ".infoAboutFresh",
      start: "top 85%"
    },
    x: -50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.2,
    delay: 0.2,
    ease: "power2.out"
  });

  // Hover تأثير بسيط للصورة
  const cultureImg = document.querySelector(".img_");
  cultureImg.addEventListener("mouseenter", () => {
    gsap.to(cultureImg, { scale: 1.03, duration: 0.3, ease: "power2.out" });
  });
  cultureImg.addEventListener("mouseleave", () => {
    gsap.to(cultureImg, { scale: 1, duration: 0.3, ease: "power2.out" });
  });

  // Click تأثير على عناصر القائمة
  document.querySelectorAll(".infoAboutFresh ul li").forEach((item) => {
    item.addEventListener("click", () => {
      gsap.fromTo(item,
        { x: 0 },
        { x: 10, duration: 0.1, yoyo: true, repeat: 1, ease: "power1.inOut" }
      );
    });
  });

  // DOM Elements
      const addLocationBtn = document.querySelector('.mapPopupBtn');
      const mapPopup = document.querySelector('.map_popup_');
      const closeMapBtns = document.querySelectorAll('.closeMapBtn');
      const confirmLocationBtn = document.getElementById('confirmLocation');
      const locationPlaceholder = document.querySelector('.flex.justify-center.items-center.bg-\\[\\#F5FAFA\\]');

      // Event Listeners
      addLocationBtn.addEventListener('click', () => {
        mapPopup.classList.remove('hidden');
      });

      closeMapBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          mapPopup.classList.add('hidden');
        });
      });

      confirmLocationBtn.addEventListener('click', () => {
        locationPlaceholder.innerHTML = `
        <div class="w-full h-full relative">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108861.88804451965!2d34.45217755!3d31.5017167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2s!4v1674129238260!5m2!1sen!2s" 
            width="100%" 
            height="155" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          <button class="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md" onclick="resetLocation()">
            <img src="../../assets/images/edit_.png" alt="edit" class="w-4 h-4">
          </button>
        </div>
      `;
        mapPopup.classList.add('hidden');
      });

      function resetLocation() {
        locationPlaceholder.innerHTML = `<p class="text-lg font-medium text-[#000000]">لا يوجد موقع</p>`;
      }
     