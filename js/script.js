// Load Page
// $(document).ready(function () {
//     console.log($('#app').children().offset().top);
// })

// window.onscroll = function () {
//     // var currentHeight = $('#app').find('*').Page
//     // if(window.scrollY + window.innerHeight > $){

//     // }

//     // console.log($('#app').children().offset().top);
// }

// function inViewport

// Mobile navbar button
$(document).ready(function () {
    $('.header-mobile__bars-icon').click(function () {
        $(this).hide();
        $('.header-mobile__close-icon').show();
        $('.header__navbar').fadeIn(400);
    })

    $('.header-mobile__close-icon').click(function () {
        $(this).hide();
        $('.header-mobile__bars-icon').show();
        $('.header__navbar').fadeOut(400);
    })
})

// Mobile Navbar Subnav
$(document).ready(function () {
    $('.mobile-navbar__btn').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.header-mobile__subnav').slideDown(300);
            $('.mobile-navbar__icon').removeClass('fa-angle-down');
            $('.mobile-navbar__icon').addClass('fa-angle-up');
        } else {
            $('.header-mobile__subnav').slideUp(300);
            $('.mobile-navbar__icon').removeClass('fa-angle-up');
            $('.mobile-navbar__icon').addClass('fa-angle-down');
        }
    })
})


// Sidebar item 
$(document).ready(function () {
    $('.design-sidebar__item').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

        // Mobile Img
        $(this).children('.design__picture-box--mobile').removeClass('hide');
        $(this).siblings().children('.design__picture-box--mobile').addClass('hide');

        // $('.active').scrollIntoView(true);
    })
})

// Sidebar Img
$(document).ready(showImage(event));
function showImage(event) {
    if (event) {
        $('.design__picture-box--' + `${event}`).removeClass('hide');
        $('.design__picture-box--' + `${event}`).siblings().addClass('hide');
    }
}

// Question hide content 
$(document).ready(function () {
    $('.question-content__item').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('.hide-content').hide(300);
            $(this).find('.question-content__icon').text('+');
        } else {
            $(this).addClass('active');
            $(this).find('.hide-content').show(300);
            $(this).siblings().removeClass('active');
            $(this).siblings().find('.question-content__icon').text('+');
            $(this).siblings().find('.hide-content').hide(300);
            $(this).find('.question-content__icon').text('-');
        }
    })

})