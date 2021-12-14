$(document).ready(function(){
//type-js.............
    var typed = new Typed('.type', {
        strings: [
            'Designer.',
            'Founder.',
            'Developer.'
        ],
        typeSpeed: 70,
        backSpeed: 70,
        loop: true,
        cursorChar: ''
    });



//animation.............
    new WOW().init();




// owl-carousel....................
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        smartSpeed:700,
        responsive:{
            0:{
                items:1
            },
            400:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })





// isotop.....................
    var $grid = $('.portfolio-box').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
        columnWidth: 1
        }
    })

    // filter items on button click
    $('.portfolio-menu').on( 'click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // menu active class js
    $('.portfolio-menu li').click(function(){
        $('li').removeClass('active');
        $(this).addClass('active')
    });





// hover 3d..........................
    $(".about-me").hover3d({
        selector: ".about-img-shape",
        shine: false,
        sensitivity: 20,
    });

    $(".about-me").hover3d({
        selector: ".about-shape",
        shine: false,
        sensitivity: 20,
    });

    $(".skill-education").hover3d({
        selector: ".skill-edu-shape",
        shine: false,
        sensitivity: 15,
    });

    $(".experince").hover3d({
        selector: ".experience-shape",
        shine: false,
        sensitivity: 15,
    });

    $(".contact").hover3d({
        selector: ".contact-shape-1",
        shine: false,
        sensitivity: 15,
    });

    $(".contact").hover3d({
        selector: ".contact-shape-2",
        shine: false,
        sensitivity: 15,
    });

    $(".blog").hover3d({
        selector: ".blog-shape",
        shine: false,
        sensitivity: 20,
    });








// offcanvas menu................
    $('.menu-trigger').click(function(){
        $('.offcanvas-menu').addClass('active');
        $('.offcanvas-overlay').addClass('active');
    })

    $('.menu-close, .offcanvas-overlay').click(function(){
        $('.offcanvas-menu').removeClass('active');
        $('.offcanvas-overlay').removeClass('active');
    })




// stycky header.................
    $(window).scroll(function(){
        if($(window).scrollTop()){
            $('header').addClass('neel');
        }else{
            $('header').removeClass('neel')
        }
    })





// progress bar................
    $('.skills-single').easyPieChart({
        barColor: '#6928D9',
        trackColor: '#15154C',
        scaleLength: false,
        lineCap: 'square',
        lineWidth: 10,
        size: 200,
        animate: 2000
    });






// multi-layer-parallax-effact..........
    $(window).parallaxmouse({
        elms: [
            // {el: $('#layer-1'), rate: 0.2},
            {el: $('#layer-2'), rate: 0.2},
            {el: $('#layer-3'), rate: 0.2},
            {el: $('#layer-4'), rate: 0.2},
            {el: $('#layer-5'), rate: 0.2},
        ]
    });

})







































// (function ($) {
//     "use strict";

//     // SmoothScroll
//     var scroll = new SmoothScroll('a[href*="#"]', {
//       speed: 900,
//       speedAsDuration: true
//     });

//     // stycky header
//     $(window).on('scroll', function(){
//       if($(window).scrollTop()){
//         $('header').addClass('neel');
//       }
//       else
//       {
//         $('header').removeClass('neel');
//       }

//     })

//     // offcanvas menu
//     $(".menu-trigger img").on('click', function(){
//       $(".offcanvas-menu").addClass("active");
//       $(".offcanvas-menu-overlay").addClass("active");
//     });

//     $(".menu-close, .offcanvas-menu-overlay").on('click', function(){
//       $(".offcanvas-menu").removeClass("active");
//       $(".offcanvas-menu-overlay").removeClass("active");
//     });

//     // parallax JS
//     var scene = document.getElementById('home-parallax');
//     var parallaxInstance = new Parallax(scene);

//     // typed JS
//     var typed = new Typed(".type", {
//       strings: [
//         "Designer.",
//         "Founder."
//       ],
//       typeSpeed: 70,
//       backSpeed: 70,
//       loop: true,
//       cursorChar: '',
//     });

//     // hover 3d
//     $(".about").hover3d({
//       selector: ".about-img-shape",
//       shine: false,
//       sensitivity: 20,
//     });
//     //  

//      // hover 3d
//     $(".about").hover3d({
//       selector: ".about-shape",
//       shine: false,
//       sensitivity: 30,
//     });

//     // hover 3d
//     $(".skill-edu").hover3d({
//       selector: ".skill-edu-shape",
//       shine: false,
//       sensitivity: 20,
//     });

//     // hover 3d
//     $(".experience").hover3d({
//       selector: ".experience-shape",
//       shine: false,
//       sensitivity: 30,
//     });

//     // hover 3d
//     $(".contact").hover3d({
//       selector: ".contact-shape-1",
//       shine: false,
//       sensitivity: 30,
//     });

//     // hover 3d
//     $(".contact").hover3d({
//       selector: ".contact-shape-2",
//       shine: false,
//       sensitivity: 30,
//     });

//     // hover 3d
//     $(".blog").hover3d({
//       selector: ".blog-shape",
//       shine: false,
//       sensitivity: 30,
//     });
    
//     // circle-progress-1
//     $('#uiux-progress').circleProgress({
//       value: 0.73,
//       size: 200,
//       fill: "#6928d9",
//       thickness: 10,
//       emptyFill: "#15154c",
//       startAngle: -1.55,
//     }).on('circle-animation-progress', function(event, progress) {
//       $(this).find('.progress-percentage').html(Math.round(73 * progress) + '<i>%</i>');
//     });

//      // circle-progress-2
//     $('#development-progress').circleProgress({
//       value: 0.85,
//       size: 200,
//       fill: "#1573ff",
//       thickness: 10,
//       emptyFill: "#15154c",
//       startAngle: -1.55,
//     }).on('circle-animation-progress', function(event, progress) {
//       $(this).find('.progress-percentage').html(Math.round(85 * progress) + '<i>%</i>');
//     });

//      // circle-progress-3
//     $('#branding-progress').circleProgress({
//       value: 0.48,
//       size: 200,
//       fill: "#16ffdb",
//       thickness: 10,
//       emptyFill: "#15154c",
//       startAngle: -1.55,
//     }).on('circle-animation-progress', function(event, progress) {
//       $(this).find('.progress-percentage').html(Math.round(48 * progress) + '<i>%</i>');
//     });

//      // circle-progress-4
//     $('#design-progress').circleProgress({
//       value: 0.69,
//       size: 200,
//       fill: "#baff26",
//       thickness: 10,
//       emptyFill: "#15154c",
//       startAngle: -1.55,
//     }).on('circle-animation-progress', function(event, progress) {
//       $(this).find('.progress-percentage').html(Math.round(69 * progress) + '<i>%</i>');
//     });

//     // Isotope-Filtering
//     // init Isotope
//     var $grid = $('.portfolio-grid').isotope({
//       itemSelector: '.portfolio-item',
//       percentPosition: true,
//       masonry: {
//         // use outer width of grid-sizer for columnWidth
//         columnWidth: 1
//       }
//     });
//     // filter items on button click
//     $('.portfolio-menu').on( 'click', 'li', function() {
//       var filterValue = $(this).attr('data-filter');
//       $grid.isotope({ filter: filterValue });
//     });

//     // active JS
//     $('.portfolio-menu li').on('click',function(){
//       $('li').removeClass('active');
//       $(this).addClass('active')
//     });

//     // Fancy-box
//     $('[data-fancybox="gallery"]').fancybox({
//       animationEffect: "zoom-in-out",
//       transitionEffect: "slide",
     
//     });

//     // Owl-Carousel
//     $('.sponsor').owlCarousel({
//         loop:true,
//         margin:10,
//         nav:false,
//         responsive:{
//             0:{
//                 items:3
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:5
//             }
//         }
//     });

//     // wow JS
//     new WOW().init();


// })(jQuery);	

