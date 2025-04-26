  // payment page
  $(('.nextStepButton')).click(() => {
    $('.nextStepButton').parent().hide();
    $('.shippingHeaders').hide();
    $('.shahen').fadeIn();
    $('.step1Overview').fadeIn();
    $('.step2').fadeIn();
  })
// payment steps
$('input[name="address"]').each(function (indexInArray, valueOfElement) {
  $(valueOfElement).change((e) => {
    var address = $(valueOfElement).val()
    console.log(address);
    var position = address.indexOf(",")
    var name = address.substring(0, position)
    var number = address.substring(position + 1).trim()
    $('.shippingDetails').text(name)
    $('.shippingDetails2').text(number)
  });
});


$('input[name="way"]').each(function (indexInArray, valueOfElement) {
  $(valueOfElement).change((e) => {
    var way = $(valueOfElement).val()
    console.log(way);
  });
});

$('input[name="ctime"]').each(function (indexInArray, valueOfElement) {
  $(valueOfElement).change((e) => {
    var ctime = $(valueOfElement).val()
    console.log(ctime);
    $('.time_').text(ctime)

  });
});
$('input[name="shippingDate"]').change(function () {
  var shippingDate = $(this).val();
  console.log(shippingDate);

  if (shippingDate) {
    var dateObj = new Date(shippingDate);
    var days = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    var dayName = days[dateObj.getDay()];

    $('.day').text(shippingDate + " - " + dayName);
  } else {
    $('.day').text("");
  }
});



gsap.from(".shippingHeaders", {
    opacity: 0,
    y: -50,
    duration: 0.8,
    ease: "power3.out"
  });

  gsap.from(".shippingAddress", {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 0.2,
    ease: "power2.out"
  });

  gsap.from(".shippingWay", {
    opacity: 0,
    x: -100,
    duration: 1,
    delay: 0.4,
    ease: "power2.out"
  });

  gsap.from(".shippingTime", {
    opacity: 0,
    y: 80,
    duration: 1,
    delay: 0.6,
    ease: "power2.out"
  });

  gsap.from(".nextStepButton", {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    delay: 1,
    ease: "back.out(1.7)"
  });

  // إضافة تأثير على عناصر الراديو عند الظهور
  gsap.utils.toArray(".radioInputChoose").forEach((el, i) => {
    gsap.from(el, {
      opacity: 0,
      y: 30,
      duration: 0.6,
      delay: 0.3 + i * 0.15,
      ease: "power1.out"
    });
  });

  // عند الضغط على "حدد موعد" تظهر chooseTime بأنيميشن
  document.getElementById("time1").addEventListener("change", function () {
    const chooseTime = document.querySelector(".chooseTime");
    chooseTime.classList.remove("hidden");
    gsap.fromTo(chooseTime,
      { height: 0, opacity: 0 },
      {
        height: "auto",
        opacity: 1,
        duration: 0.7,
        ease: "power2.out"
      }
    );
  });

  // لو رجع اختار "في أقرب وقت"
  document.getElementById("time").addEventListener("change", function () {
    const chooseTime = document.querySelector(".chooseTime");
    gsap.to(chooseTime, {
      height: 0,
      opacity: 0,
      duration: 0.5,
      onComplete: () => chooseTime.classList.add("hidden")
    });
  });
  gsap.from(".order-summary", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out"
  });

  // أنيميشن العناصر داخل الطلب
  gsap.from(".order-item", {
    duration: 0.8,
    opacity: 0,
    x: 100,
    stagger: 0.2,
    ease: "power2.out",
    delay: 0.3
  });
  $('input[name="time"]').each(function (indexInArray, valueOfElement) {
    $(valueOfElement).change((e) => {
      var time = $(valueOfElement).val()
      console.log(time);
      if (time === 'حدد موعد') {
        $('.chooseTime').fadeIn();
        console.log(time);

      } else {
        console.log(time + 'else');
        $('.chooseTime').fadeOut();
      }
    });
  });
   $('.shippingTime').hide();
  $('input[name="way"]').change(function (e) { 
    e.preventDefault();
    if ($(this).val() === "الشحن المنزلي") {
      $('.shippingTime').fadeIn();
    } else {
      $('.shippingTime').fadeOut();
    $('.chooseTime').fadeOut();

    }
  });
  