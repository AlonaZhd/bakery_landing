const swiper = new Swiper(".swiper-container", {
    loop: true,
    // Default parameters
    slidesPerView: 1,
    spaceBetween: 20,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 480px
        560: {
            slidesPerView: 2,
        },
        // when window width is >= 640px
        1024: {
            slidesPerView: 3,
        },
    },

    // If we need pagination
    pagination: {
        el: ".pagination",
        bulletClass: "pagination__button",
        bulletActiveClass: "pagination__button--active",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".carousel-button.next",
        prevEl: ".carousel-button.prev",
    },

    // // And if we need scrollbar
    // scrollbar: {
    //     el: ".swiper-scrollbar",
    // },
});
