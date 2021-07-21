$(document).ready(function () {


  $('#slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '.next',
    prevArrow: '.prev',
    dots: true,
    autoplay: true,
  })

  // $('.blocks').slick({
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: '.next',
  //   prevArrow: '.prev',
  //   dots: true,
  //   // autoplay: true,
  //   autoplaySpeed: 500,

  // })


  $(window).scroll(function () {
    var scrolling = $(this).scrollTop()

    if (scrolling >= 100) {
      $(".navigation").addClass("nav_bg");
    }
  });


  // $('.themesA').slick({
    // centerMode: true,
    // centerPadding: '60px',
    // slidesToShow: 3,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 3
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //       centerMode: true,
    //       centerPadding: '40px',
    //       slidesToShow: 1
    //     }
    //   }
    // ]
  // });
      
  $('.container').carousel({

    // the number of images to display
    num: 3, 
    
    // max width of the active image
    maxWidth: 800,
    
    // min width of the active image
    maxHeight: 500, 
    
    // enable auto play
    autoPlay: true,
    
    // autoplay interval
    showTime: 2000,
    
    // animation speed
    animationTime: 300,
    
    // 0.0 - 1.0
    scale: 0.8,
    
    // the distance between image
    distance: 100
    
    });

    var mixer = mixitup('.blockS');



    // venubox

    $('.venobox').venobox(); 



    $('.counter').counterUp({
      delay: 10,
      time: 1000
  });

});


$(document).ready(function()

{



  $('.Blocks').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.none',
    prevArrow: '.no',
    dots: true,
    // autoplay: true,
    autoplaySpeed: 500,

  })



})


window.addEventListener("scroll", function() {
  let navArea = document.getElementById("navigation");
  
  if (window.pageYOffset > 0) {
  navArea.classList.add("is-sticky");
  } else {
  navArea.classList.remove("is-sticky");
  }
  });
  