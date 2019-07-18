var GUI = {};
GUI.win = $(window);
GUI._initHomeSlide = function(){
 if(typeof $.fn.slider !="udefined"){
    if($(".h-slider1").length==0) return;
    $('.h-slider1').slick({
        arrows: true,
        slidestoshow:1,
        dots: false,
        prevArrow:'<a class="fa fa-angle-left prev" aria-hidden="true"></a>',
        nextArrow:'<a class="fa fa-angle-right next" aria-hidden="true"></a>',
        //   autoplay: true,
        // autoplaySpeed: 3000,
    });
    
  }
}

GUI._initAvatarSlide = function(){
  if($(".slider-avatar").length==0) return;
  $('.slider-avatar').slick({
      arrows: false,
      slidestoshow:1,
      dots: true,
      //   autoplay: true,
      // autoplaySpeed: 3000,
  });
}
GUI._initMainMenu = function(){
  if($(".menu-btn").length==0) return;
  $('.menu-btn').click(function(){
    $('.main-nav').toggleClass('active');
    $('.menu-btn i').toggleClass('fa-times');
    $('.menu-btn i').toggleClass('fa-bars');
    $('.main-nav li>ul').removeClass('active');
    $('.main-nav li i').removeClass('fa-caret-up');
    $('.cate ul').removeClass('active');
  });

      $('.main-nav ul li ul').each(function(){
    $(this).parent('li').prepend('<i class="fa fa-caret-down" aria-hidden="true"></i>');
  });
   $('.main-nav>ul>li>i').click(function(){
    $(this).parent('li').children('ul').toggleClass('active');
    $(this).toggleClass('fa-caret-up');
  });
}
GUI._initFixed = function(){
    //Lấy chiều cao của thah menu
  var $navHeight=$("header").height();
  //Sự kiến scroll chạy khi người dùng cuộn trang
  $(window).scroll(function () {
       //Lấy vị trí của thanh cuộn
       var top = $(window).scrollTop();
       //Kiêm tra nếu như kếu xuống quá menu
       if (top > $navHeight) {
           //Thêm class vào body
           $("header").addClass('fixed');
       } else {
           //Xóa class khỏi body
         $("header").removeClass('fixed');
       }
  });
}
GUI._initSliderProduct = function(){
  if($(".slider-for").length==0) return;
  if($(".slider-nav").length==0) return;
     $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
     arrows: false,
    // centerMode: true,
    focusOnSelect: true,
    vertical: true,
  responsive: [
      {
          breakpoint: 991,
          settings: {
              vertical: false,
          }
      },
      ],
  });
}
GUI._initBackToTop = function(){

    GUI.win.scroll(function () {
      if ($(this).scrollTop() > 600){
          $(".back-to-top").show();
          $(".scroll-down").hide();
      } 
      else {
          $(".back-to-top").hide();
          $(".scroll-down").show();
      } 
      });
      $(".back-to-top").click(function () {
      $("body,html").animate({
          scrollTop: 0},600);
    }); 
}
GUI._initWow = function(){
  new WOW().init();
}
GUI.init = function(){
  GUI._initHomeSlide();
  GUI._initAvatarSlide();
  GUI._initMainMenu();
  GUI._initFixed();
  GUI._initSliderProduct();
  GUI._initBackToTop();
  GUI._initWow();
}
$(function() {
  GUI.init();
});
