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
        animation: true,
      });
    $('.pogress_bar_2').circleProgress({
        value: 1,
        size: 150,
        fill: {
        gradient: ["rgb(22 55 238 )", "#F70000"]
        },
        animation: true,
      });
    $('.pogress_bar_3').circleProgress({
        value: 1,
        size: 150,
        fill: {
        gradient: ["#F70000", "rgb(22 55 238 )"]
        },
        animation: true,
      });
    // THE ABOUT SECTION PROGRESBAR ENDS HERE
});