$(function(){
    
    //scrolling navbar add
 $(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if(scrolling > 200){
        $('.navbar').addClass('navBg');
    }else{
        $('.navbar').removeClass('navBg');
    }
}); 
   
   
    
  //animation scroll js====

var html_body = $('html, body');
$('.collapse a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 113
            }, 1500);
            return false;
        }
    }
});   
    
    
//back to top button
    $('.back_top').click(function(){
        $('html,body').animate({scrollTop:0},1500);
    });
    
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling >300){
            $('.back_top').fadeIn();
        }else{
            $('.back_top').fadeOut();
        }
    }); 
    
    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    }); 
    
    // wow js activation code
        new WOW().init(); 
    
    // venobox  activeson cod------
        $('.venobox').venobox();
    
    
    
    // feedback slider
$('.testimonial_slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    }
  ]  
});
    
 
      // feedback slider
$('.last_item').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow:'.left2',
  nextArrow:'.right2',
  autoplaySpeed: 2000,
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    }
  ]  
});
    
 
    
    
    
 
    
    
    
});