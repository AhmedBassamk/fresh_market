$('#filterToggle').click(function () {
    $('.filterContent').slideToggle();
    console.log('asfkmkdmsdk');
    
  });

  // Handle menu visibility on screen resize
  $(window).resize(function () {
    if ($(window).width() >= 1024) {
      $('#sideMenu').show();
    }
  });