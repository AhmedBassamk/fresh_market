  // Add mobile menu toggle functionality
  $('#mobileMenuToggle').click(function () {
    $('#sideMenu').slideToggle();
  });

  // Handle menu visibility on screen resize
  $(window).resize(function () {
    if ($(window).width() >= 1024) {
      $('#sideMenu').show();
    }
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
  gsap.to(".account-box", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power4.out",  // تأثير حركي سلس
});