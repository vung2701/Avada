$(document).ready(function () {

    // Question hide content 
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

    // Mobile navbar button
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

    // Header Mobile Subnav
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
});