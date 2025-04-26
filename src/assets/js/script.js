$(document).ready(function () {
  $(".loader").fadeOut();
  // hamburger menu click
  $('.hamburger').click(() => {
    $('.menu').toggleClass('translate-x-full');
  })
  $(document).click(function (event) {
    if (!$(event.target).closest('.menu, .hamburger').length) {
      $('.menu').addClass('translate-x-full'); // إخفاء القائمة
    }
  });
 
  // forget password code
  const codeInputs = document.querySelectorAll(".code-input");
  codeInputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
      if (input.value.length === 1 && index < codeInputs.length - 1) {
        codeInputs[index + 1].focus();
      }
    });
    // delete inputs value
    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" && input.value === "" && index > 0) {
        codeInputs[index - 1].focus();
      }
    });
  });
  // اعلام الدول
  const countrySelect = document.getElementById("countryCode");
  const flagIcon = document.getElementById("flagIcon");
  if (countrySelect) {
    const updateFlag = () => {
      const selectedOption = countrySelect.options[countrySelect.selectedIndex];
      const countryCode = selectedOption.getAttribute("data-flag");
      flagIcon.src = `https://flagcdn.com/w40/${countryCode}.png`;
    };
    countrySelect.addEventListener("change", updateFlag);
  }
  let count = 1;
  $(".addButton").each((index, element) => {
    $(element).click(function () {
      let card = $(this).closest(".product-card");
      let counterContainer = card.find(".counterContainer");
      let counter = card.find(".counter");
      let increaseBtn = card.find(".increase");
      let decreaseBtn = card.find(".decrease");
      let count = 1;
      $(this).hide();
      counterContainer.removeClass("hidden");
      increaseBtn.off("click").on("click", function () {
        count++;
        counter.text(count);
      });
      decreaseBtn.off("click").on("click", function () {
        if (count > 1) {
          count--;
          counter.text(count);
        } else {
          counterContainer.addClass("hidden");
          card.find(".addButton").show();
          count = 1;
        }
      });
    });
  });
  // tabs
  $(".tab").click(function () {
    $(".tab").removeClass("tab-active");
    $(this).addClass("tab-active");
    $(".tab-content").addClass("hidden");
    const tabId = $(this).data("tab");
    $("#" + tabId).removeClass("hidden");
  });
  const addListBtn = document.querySelector('.addListBtn');
  const addListPopup = document.querySelector('.add-list-popup');
  const closePopupBtn = document.querySelector('.closePopupBtn');
  const saveListBtn = document.querySelector('.saveListBtn');
  const listsContainer = document.querySelector('.lists-container');
  
  if (addListBtn) {
    addListBtn.addEventListener('click', () => {
      addListPopup.classList.remove('hidden');
    });
  }
  
  if (closePopupBtn) {
    closePopupBtn.addEventListener('click', () => {
      addListPopup.classList.add('hidden');
    });
  }
  
  if (saveListBtn) {
    saveListBtn.addEventListener('click', () => {
      const listName = document.querySelector('.add-list-popup input').value;
      if (listName) {
        const newList = `
                 <div data-target="list" class="links_ cursor-pointer list-items w-full bg-[#F4F4F4] border border-[#E3E3E3] flex justify-between items-center rounded-xl p-4 my-4">
                   <div class="flex w-full justify-between">
                     <p class="text-[#1A1A1A] w-1/3 text-start font-medium">${listName}</p>
                     <p class="text-[#1A1A1A] w-1/3 text-start font-medium">1 المنتجات </p>
                     <div class="flex justify-start w-1/3 text-start items-center gap-12 whitespace-nowrap">
                       <p class="text-[#1A1A1A] font-medium">أنت فقط</p>
                       <div class="left">
                         <button class="text-[#8C8C8C]">تعديل</button>
                       <span>|</span>
                       <button class="deleteBtn text-[#FF816C]">حذف</button>
                       </div>
                     </div>
                   </div>
                 </button>
        `;
        listsContainer.insertAdjacentHTML('beforeend', newList);
        addListPopup.classList.add('hidden');
        document.querySelector('.add-list-popup input').value = '';
      }
    });
  }
  // Delete popup functionality
  const deleteButtons = document.querySelectorAll('.deleteBtn');
  const deletePopup = document.querySelector('.delete_popup_');
  const deleteConfirmBtn = document.querySelector('.deleteConfirmBtn');
  const closeDeleteBtn = document.querySelector('.closeDeleteBtn');
  if (deleteButtons) {
      $(document).on('click', '.deleteBtn', function(e) {
        e.preventDefault();
        e.stopPropagation();
        deletePopup.classList.remove('hidden');
        deletePopup.setAttribute('data-target-list', $(this).closest('[data-target="list"]').index());
        const targetIndex = deletePopup.getAttribute('data-target-list');
      console.log(targetIndex);
      });
  }
   if (closeDeleteBtn) {
     closeDeleteBtn.addEventListener('click', () => {
       deletePopup.classList.add('hidden');
     });
   }
   if (deleteConfirmBtn) {
    deleteConfirmBtn.addEventListener('click', () => {
      const targetIndex = deletePopup.getAttribute('data-target-list');
      console.log(targetIndex);
      const listItems = document.querySelectorAll('[data-target="list"]');
      if (listItems[targetIndex]) {
        listItems[targetIndex].remove();
      }
      deletePopup.classList.add('hidden');
    });
  }
  //accordion
  $('.accordion-title').click(function () {
    const item = $(this).closest('.accordion-item');
    const content = item.find('.accordion-content');
    $('.accordion-item').not(item).removeClass('active');
    $('.accordion-item').not(item).find('.accordion-content').slideUp();
    $('.accordion-item').not(item).find('.rotate').removeClass('rotate-90');
    content.slideToggle();
    $(this).find('.rotate').toggleClass('rotate-90');
  });
 // add to cart successfuly Functionality
 $('.addedIsSuccess').hide()
  $('#addToCartButton').click(function () {
    $(this).addClass('hidden');
    $('#quantityCounter').removeClass('hidden');
    $('.addedIsSuccess').fadeIn();
    setTimeout(() => {
      $('.addedIsSuccess').fadeOut();
    }, 3000);
  });
  let quantity = 1;

  $('#increment').click(function () {
    console.log('hfhdgfh');
    quantity++;
    $('#quantity').text(quantity);
  });

  $('#decrement').click(function () {
    if (quantity > 0) {
      quantity--;
      $('#quantity').text(quantity);

    }
  });
  // product details.
  // عرض المزيد من التعليقات
  const reviews = [{
      user: "عمرو",
      date: "11/05/23",
      text: "منتج ممتاز، الجودة رائعة والتوصيل سريع جداً."
    },
    {
      user: "علي",
      date: "10/05/23",
      text: "منتج ممتاز، السعر مناسب والتوصيل جيد."
    },
    {
      user: "سامي",
      date: "09/05/23",
      text: "منتج جيد ولكن التغليف يمكن أن يكون أفضل."
    },
    {
      user: "خالد",
      date: "08/05/23",
      text: "جيد لكن ليس كما توقعت."
    },
    {
      user: "يوسف",
      date: "07/05/23",
      text: "منتج متوسط، يوجد خيارات أفضل."
    },
    {
      user: "حسن",
      date: "06/05/23",
      text: "منتج سيء، الجودة رديئة."
    }
  ];

//   let visibleReviews = 3;
//   const reviewsContainer = document.getElementById("reviews-container");
//   const loadMoreButton = document.getElementById("load-more");
//   // دالة لعرض المراجعات
//   function displayReviews() {
//     reviewsContainer.innerHTML = "";
//     for (let i = 0; i < visibleReviews; i++) {
//       if (i >= reviews.length) break;
//       const review = reviews[i];
//       const reviewElement = document.createElement("div");
//       reviewElement.innerHTML = `
//         <div class="p-4 border-b border-gray-100">
//           <div class="w-full md:w-1/3">
//           <div class="flex items-start justify-between mb-3">
//     <div class="flex justify-between items-start gap-2">
//       <div class="relative">
//         <div class="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
//        <img src="../../assets/images/cart.png" alt="">
//         </div>
//       </div>
//       <div class="ml-3">
//         <h3 class="font-semibold text-gray-800">${review.user}.</h3>
//         <p class="text-gray-500 text-xs">${review.date}</p>
//       </div>
//     </div>
//     <div class="bg-[#F2F7F7] text-[#405354] text-xs py-1 px-3 rounded-full flex justify-center items-center gap-1"> <img src="../../assets/images/checked 3.png" alt=""> طلبية مؤكدة</div>
//   </div>
//   <div class="flex justify-start items-center gap-1 mb-1">
//       <img src="../../assets/images/star-7 1.png" class="w-4" alt="">
//       <img src="../../assets/images/star-7 1.png" class="w-4" alt="">
//       <img src="../../assets/images/star-7 1.png" class="w-4" alt="">
//       <img src="../../assets/images/star-7 1.png" class="w-4" alt="">
//       <img src="../../assets/images/star-7 1.png" class="w-4" alt="">
//   </div>
//   <div class="">
//     <h4 class="font-semibold text-gray-800">منتج ممتاز</h4>
//     <p class="text-gray-600 text-sm">${review.text}</p>
//   </div>

//   <div class="mt-3">
//     <button class="rounded-lg py-1 px-6 cursor-pointer border border-[#7D9A9B] flex justify-between items-center gap-2 text-[#7D9A9B]">
//        <img src="../../assets/images/like.png" alt="">
//       مفيد
//     </button>
//   </div>
// </div>
// </div>
//           `;
//       reviewsContainer.append(reviewElement);
//     }

//     if (visibleReviews >= reviews.length) {
//       loadMoreButton.style.display = "none";
//     }
//   }
//   if (loadMoreButton) {
//     loadMoreButton.addEventListener("click", function () {
//       visibleReviews += 3;
//       displayReviews();
//     });
//   }
//   if (window.location == 'http://127.0.0.1:5500/src/pages/website/productDetails.html') {
//     displayReviews();
//   }
  // tabs
  $(".links_").click(function (e) {
    e.preventDefault();
    $('.links_').removeClass('bg-[#F5FAFA]');
    $(this).addClass('bg-[#F5FAFA]');
    const target = $(this).data("target");
    $(".content-section").addClass("hidden");
    $("#" + target).removeClass("hidden");
  });
  // ربط المنيو بروابط صفحة الاعدادات
  var menuLinks = [
    { id: "accountInformationLink", section: "account-info" },
    { id: "myOrdersLink", section: "orders" },
    { id: "saveProductLink", section: "list-of-sales" },
    { id: "myWalletLink", section: "saved-products" },
    { id: "addressLink", section: "address" }
  ];
  menuLinks.forEach(link => {
    $("." + link.id).click(function (e) {
      e.preventDefault();
      window.location.href = `/src/pages/website/sittings.html?section=${link.section}`;
    });
  });
  // popup
  $('.canceledOrderBtn').click(function () {
    $('._popup_').fadeIn().css('display', 'flex');;
  })
  $('.closeBtn').click(function () {
    $('._popup_').fadeOut();
    console.log('click');
  })
  $('._popup_').click(function (event) {
    if (event.target === this) {
      $(this).fadeOut();
    }
  });
  $('.searchInput').click(function () {
    $('.searchPopup').removeClass('hidden')
  })
  $('.searchInput').keydown(function () {
    console.log('click');
    $('.searchPopup').addClass('hidden')
    $('.searchPopupOnChange').removeClass('hidden')
  })
  $(document).click(function (event) {
    if (!$(event.target).closest('.searchInput, .searchPopup, .searchPopupOnChange').length) {
      $('.searchPopup').addClass('hidden');
      $('.searchPopupOnChange').addClass('hidden');
    }
  });
  // popup cart add favourate lists
  function addElement() {
    if ($('.addElement').find('input').length === 0) {
      var element = `
        <label for="name" class="text-[#485051] font-medium block mt-3">إنشاء قائمة جديدة</label>
        <input type="text" id="name" class="productList w-full mt-2 border border-[#E4E7E7] rounded-md py-2 px-5">`;
      $('.addElement').append(element);
      $('.addElement').removeClass('hidden');
    }
  }
  // popup cart add favourate lists continue
  $('.addProductBtn').click(function () {
    if ($(this).hasClass('addProductBtn')) {
      $('.lists').addClass('hidden');
      $(this).removeClass('addProductBtn').addClass('saveProductBtn2').text('حفظ');
      addElement();
    } else if ($(this).hasClass('saveProductBtn2')) {
      var inputVal = $('.productList').val();
      if (!inputVal) return;
  
      let getLists = JSON.parse(localStorage.getItem('listsName')) || [];
      if (!Array.isArray(getLists)) getLists = [];
  
      let exists = getLists.some(obj => obj.name === inputVal);
      if (!exists) {
        var newItem = { name: inputVal, count: 0 };
        getLists.push(newItem);
        localStorage.setItem('listsName', JSON.stringify(getLists));
        var newElement = `
          <div class="showLists col-span-2 mt-2 border rounded-md grid grid-cols-2 py-3 px-4 bg-white border-[#E4E7E7]">
            <p class="inputValue">${inputVal}</p>
            <div class="flex justify-between items-center">
              <p><span class="counter_">0</span> منتجات</p>
              <button data-counter="0" class="countBtn w-7 h-7 flex cursor-pointer justify-center items-center font-bold text-2xl rounded-full border border-[#064C50] text-[#064C50]">
                <span class="-translate-y-0.5">+</span>
              </button>
            </div>
          </div>`;
        $('.lists').append(newElement);
      }
  
      $('.addElement').addClass('hidden');
      $('.lists').removeClass('hidden');
      $(this).removeClass('saveProductBtn2').addClass('addProductBtn').text('إضافة قائمة');
      $('.addElement').empty();
    }
  });
  // popup cart add favourate lists continue
  // عند الضغط على زر زيادة المنتج
  $(document).on('click', '.countBtn', function (e) {
    e.preventDefault();
    var $container = $(this).closest('.showLists');
    var currentCounter = parseInt($container.find('.counter_').text()) || 0;
    currentCounter++;
  
    $container.find('.counter_').text(currentCounter);
    var listName = $container.find('.inputValue').text();
  
    let items = JSON.parse(localStorage.getItem('listsName')) || [];
    if (!Array.isArray(items)) items = [];
  
    // إذا العنصر موجود حدث العدد فقط
    let index = items.findIndex(obj => obj.name === listName);
    if (index !== -1) {
      items[index].count = currentCounter;
    } else {
      // لو مش موجود (احتياط)
      items.push({ name: listName, count: currentCounter });
    }
    localStorage.setItem('listsName', JSON.stringify(items));
  
    // تغيير الشكل
    $container.removeClass('bg-white border-[#E4E7E7]')
      .addClass('bg-[#E1E5E5] border-[#064C50]');
    $(this).removeClass('border-[#064C50]').addClass('border-[#11B14B]');
    $(this).empty().append(`<img src="../../assets/images/element.png" alt="">`);
  });
  // popup cart add favourate lists continue
  // تحميل العناصر من التخزين
  var getLists = JSON.parse(localStorage.getItem('listsName')) || [];
  if (!Array.isArray(getLists)) getLists = [];
  getLists.forEach(item => {
    var ele = `
      <div class="showLists col-span-2 mt-2 border rounded-md grid grid-cols-2 py-3 px-4 ${item.count > 0 ? 'bg-[#E1E5E5] border-[#064C50]' : 'bg-white border-[#E4E7E7]'}">
        <p class="inputValue">${item.name}</p>
        <div class="flex justify-between items-center">
          <p><span class="counter_">${item.count}</span> منتجات</p>
          <button data-counter="${item.count}" class="countBtn w-7 h-7 flex cursor-pointer justify-center items-center font-bold text-2xl rounded-full border ${item.count > 0 ? 'border-[#11B14B]' : 'border-[#064C50]'} text-[#064C50]">
            <img src="../../assets/images/element.png" alt="">
          </button>
        </div>
      </div>`;
    $('.lists').append(ele);
  });
  $(".closePopup").click(function(){
    $('.mainPopups').fadeOut();
  })
  // عرض البوب اب السابقة
  $(".addToListBtn").click(function(){
    $('.mainPopups').fadeIn();
    $('.mainPopups').css('display' , 'flex')
    
  })

  // dashboard script
  $(".tableTab").click(function (e) {
    e.preventDefault()
    $('.tableTab').removeClass('border-b-2 border-[#064C50]')
    $(this).addClass('border-b-2 border-[#064C50]')
    let id = $(this).data("id");
    $(".content-section1").addClass("hidden");
    $("#" + id).removeClass("hidden");
  });

  const selectedContainer = document.getElementById("selected-container");
  const searchInput = document.getElementById("search-input");
  const dropdown = document.getElementById("dropdown");
  const toggleDropdown = document.getElementById("toggle-dropdown");
  // hide or show password
  $(".eye").click(function (e) {
    e.preventDefault();
    let passwordField = $(this).closest(".relative").find(".password")[0];

    if (passwordField.type === "password") {
      passwordField.type = "text";
      $(this).find("i").removeClass("fa-eye-slash").addClass("fa-eye");
    } else {
      passwordField.type = "password";
      $(this).find("i").removeClass("fa-eye").addClass("fa-eye-slash");
    }
  });
  // popups code
  // function hideAllPopups() {
  //   $('.editAnswerPopup, popupMain, .editLevelPopup,.editQuestionPopup, .editSurveyPopup, .editCompanyPopup, .editTutorPopup ,.addNewLevelPopup,.addNewAnswerPopup, .addNewQuestionPopup, .addNewSurveyPopup, .addNewCompanyPopup').addClass('hidden');
  // }
  // $('.editTutorBtn').click(function (e) {
  //   e.preventDefault();
  //   hideAllPopups();
  //   $('.editTutorPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // })
  // $('.editCompanyBtn').click(function (e) {
  //   e.preventDefault();
  //   hideAllPopups();
  //   $('.editCompanyPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // })
  // $('.editAnswer').click(function () {
  //   hideAllPopups();
  //   $('.editAnswerPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // });
  // $('.editLevel').click(function () {
  //   hideAllPopups();
  //   $('.editLevelPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // });
  // $('.editQuestion').click(function () {
  //   hideAllPopups();
  //   $('.editQuestionPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // });
  // $('.editSurvey').click(function () {
  //   hideAllPopups();
  //   $('.editSurveyPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // });
  // $('.editCompany').click(function () {
  //   hideAllPopups();
  //   $('.editCompanyPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // });
  // $('.addNewLevel').click(function () {
  //   hideAllPopups();
  //   $('.addNewLevelPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // });
  // $('.addNewAnswer').click(function () {
  //   hideAllPopups();
  //   $('.addNewAnswerPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // });
  // $('.addNewQuestion').click(function () {
  //   hideAllPopups();
  //   $('.addNewQuestionPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // });
  // $('.addNewSurvey').click(function () {
  //   hideAllPopups();
  //   $('.addNewSurveyPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // });
  // $('.addNewCompany').click(function () {
  //   hideAllPopups();
  //   $('.addNewCompanyPopup').removeClass('hidden');
  //   $('.popupMain').removeClass('hidden');
  // });
  $('.fixed').click(function (event) {
    if ($(event.target).hasClass('fixed')) {
      hideAllPopups();
      $('.popupMain').addClass('hidden');
    }
  });
  // accordion
  $('.company-header, .survey-header, .question-header').click(function () {
    $(this).next('.content').slideToggle(200);
    $(this).find('.toggle-icon').toggleClass('rotate-180');
    $(this).toggleClass('bg');
  });
  // modal code
  var modal = document.getElementById('openModal');
  var modal1 = document.getElementById('modal');
  if (modal) {
    modal.addEventListener('click', function () {
      document.getElementById('modal').classList.remove('hidden');
    });

    modal1.addEventListener('click', function (e) {
      // console.log('sdlgdslvlo');
      if (e.target === this || e.target.id === 'closeModal') {
        this.classList.add('hidden');
      } else {

      }
    });
  }
  // sidebar toggle
  const sidebar = document.getElementById("sidebar");
  const toggleSidebar = document.getElementById("toggleSidebar");
  if (sidebar) {
    toggleSidebar.addEventListener("click", () => {
      console.log('amfamkckk');
      sidebar.classList.toggle("translate-x-full");
    });
  }
  var welcome = document.querySelector('.welcome')
  if (welcome) {
    var show = setTimeout(() => {
      $(welcome).fadeIn()
    }, 2000);
    setTimeout(() => {
      $(welcome).fadeOut()

    }, 5000);
  }
  // upload edit img in profile
  const fileInput = document.getElementById("fileInput");
  const profileImage = document.getElementById("profileImage");

  if (fileInput) {
    fileInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }

  $('.elevator').hide()
  $('.elevator').click(function (e) {
      e.preventDefault()
    })
   $(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
      $('.elevator').fadeIn();
    } else {
      $('.elevator').fadeOut();
    }
  });
  
  // animations
  AOS.init();

});
