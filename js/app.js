$(".banner-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // arrows: false,
    autoplaySpeed: 2000,
    fade: true
    // dots: true
})

// $(".allx").slick({
//     dots: true,
//     infinite: true,
//     // speed: 300,
//     arrows: false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//         {
//             breakpoint: 1024,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 infinite: true,
//                 dots: true
//             }
//         },
//         {
//             breakpoint: 600,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 480,
//             settings: {
//                 slidesToShow: 1.2,
//                 centerMode: true,
//                 slidesToScroll: 1
//             }
//         }
//         // You can unslick at a given breakpoint now by adding:
//         // settings: "unslick"
//         // instead of a settings object
//     ]
// })

$('[data-fancybox="gallery"]').fancybox({
    buttons: [
        "slideShow",
        "thumbs",
        "zoom",
        "fullScreen",
        "share",
        "close"
    ],
    loop: false,
    protect: true
});