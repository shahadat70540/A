// This is Header Section Start Here
$(document).ready(function(){
    // THIS IS THE SLICKNAV SECTION START HERE
    $('').slicknav({
        'label' : '',
    });
    // THE SLICKNAV SECTION ENDS HERE
    // HIS IS THE SCROLLTOP SECTION START HERE
    $('body').materialScrollTop({
        duration: 1000,
        easing: 'swing',
    });
    // THE SCROLLTOP SECTION ENDS HERE
    $('html').smoothScroll(1500);
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
    // This is the Successes Rating Pogress Bar Section Start Here
    $('.pogress_bar_1').circleProgress({
        value: 1,
        size: 140,
        fill: {
        gradient: ["red", "blue"]
        },
        animation: true,
      });
    $('.pogress_bar_2').circleProgress({
        value: 1,
        size: 140,
        fill: {
        gradient: ["blue", "red"]
        },
        animation: true,
      });
    $('.pogress_bar_3').circleProgress({
        value: 1,
        size: 140,
        fill: {
        gradient: ["red", "blue"]
        },
        animation: true,
      });
    // This is the Successes Rating Pogress Bar Section End Here
    // This is the Line Pogress Bar Section Start Here
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
    // This is the Line Pogress Bar Section End Here
    
    // THIS IS THE SOCIL MEDIA SHARE SECTION START HERE
    $('.share-bar').share({
        pageTitle:'',
        pageDesc:'',
        position:'left',
        theme:'circle',
        channels: ['facebook', 'twitter', 'linkedin', 'email', 'pinterest',],
        popupWidth: 640,
        popupHeight: 528,
        animation: true,
        itemTriggerClass:'js-share',
    });
    // THE SOCIL MEDIA SHARE SECTION ENDS HERE
    new WOW().init();
});
// This is Header Section End Here