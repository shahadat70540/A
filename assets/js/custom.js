$(document).ready(function(){
    // THIS IS THE HEADER SECTION NAVIGATION SLICKNAV START HERE
    $('.nav_main_nav').slicknav({
        label: '',
        duration: 1000,
        easingOpen: "easeOutBounce",
        prependTo:'.nav_main2',
        closeOnClick: true,
    });
    // THE HEADER SECTION NAVIGATION SLICKNAV ENDS HERE
    // THIS IS THE SOCIL MEDIA SHARE SECTION START HERE
    $('.share-bar').share({
        pageTitle:'',
        pageDesc:'',
        position:'right',
        theme:'circle',
        channels: ['facebook', 'twitter', 'linkedin', 'email', 'pinterest',],
        popupWidth: 640,
        popupHeight: 528,
        animation: true,
        itemTriggerClass:'js-share',
    });
    // THE SOCIL MEDIA SHARE SECTION ENDS HERE
    // THIS IS THE ABOUT SECTION PROGRESBAR START HERE
    $('.pogress_bar_1').circleProgress({
        value: 1,
        size: 150,
        fill: {
        gradient: ["#F70000", "rgb(22 55 238 )"]
        },
        animation: { duration: 5000, easing: "circleProgressEasing" },
        animationStartValue: 0.0,
      });
    $('.pogress_bar_2').circleProgress({
        value: 1,
        size: 150,
        fill: {
        gradient: ["rgb(22 55 238 )", "#F70000"]
        },
        animation: { duration: 5000, easing: "circleProgressEasing" },
        animationStartValue: 0.0,
      });
    $('.pogress_bar_3').circleProgress({
        value: 1,
        size: 150,
        fill: {
        gradient: ["#F70000", "rgb(22 55 238 )"]
        },
        animation: { duration: 5000, easing: "circleProgressEasing" },
        animationStartValue: 0.0,
      });
    // THE ABOUT SECTION PROGRESBAR ENDS HERE
    // This is the Client's Love Section Start Here
    $('.carousel').owlCarousel({
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      loop: true,
      autoplayHoverPause: true,
      smartSpeed: 3000,
      nav: true,
    });
    // This is the Client's Love Section End Here

    // THIS IS THE SKILL RATING BAR SECTION START HERE
    $('.pogress_bar_4').LineProgressbar({
      percentage: 90,
      fillBackgroundColor: 'orange',
      height: '10px',
      radius: '15px',
      animation: true,
      ShowProgressCount: true,
      duration: 3000,
    });
    $('.pogress_bar_5').LineProgressbar({
        percentage: 95,
        fillBackgroundColor: 'orange',
        height: '10px',
        radius: '15px',
        animation: true,
        ShowProgressCount: true,
        duration: 3000,
    });
    $('.pogress_bar_6').LineProgressbar({
        percentage: 60,
        fillBackgroundColor: 'orange',
        height: '10px',
        radius: '15px',
        animation: true,
        ShowProgressCount: true,
        duration: 3000,
    });
    $('.pogress_bar_7').LineProgressbar({
        percentage: 80,
        fillBackgroundColor: 'orange',
        height: '10px',
        radius: '15px',
        animation: true,
        ShowProgressCount: true,
        duration: 3000,
    });
    $('.pogress_bar_8').LineProgressbar({
        percentage: 60,
        fillBackgroundColor: 'orange',
        height: '10px',
        radius: '15px',
        animation: true,
        ShowProgressCount: true,
        duration: 3000,
    });
    $('.pogress_bar_9').LineProgressbar({
        percentage: 50,
        fillBackgroundColor: 'orange',
        height: '10px',
        radius: '15px',
        animation: true,
        ShowProgressCount: true,
        duration: 3000,
    });
    $('.pogress_bar_10').LineProgressbar({
        percentage: 30,
        fillBackgroundColor: 'orange',
        height: '10px',
        radius: '15px',
        animation: true,
        ShowProgressCount: true,
        duration: 3000,
    });
    $('.pogress_bar_11').LineProgressbar({
        percentage: 95,
        fillBackgroundColor: 'orange',
        height: '10px',
        radius: '15px',
        animation: true,
        ShowProgressCount: true,
        duration: 3000,
    });
    // THE SKILL RATING BAR SECTION ENDS HERE
    // THIS IS THE SMOOTH SCROLL START HERE
    $('html').smoothScroll(600);
    // THE SMOOTH SCROLL ENDS HERE
    // HIS IS THE SCROLLTOP SECTION START HERE
    $('body').materialScrollTop({
      duration: 1000,
      easing: 'swing',
    });
    // THE SCROLLTOP SECTION ENDS HERE
    // THE WOW JS START HERE
    new WOW().init({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();
    // THE WOW JS ENDS HERE
});