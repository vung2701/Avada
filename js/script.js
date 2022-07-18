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
    $('.header-mobile__icon').click(function () {
        $(this).toggleClass('fa-bars');
        $(this).toggleClass('fa-xmark');
        if ($(this).hasClass('fa-xmark')) {
            $('.header__navbar').fadeIn(300);
        } else {
            $('.header__navbar').fadeOut(300);
        }
    })

    // Header Mobile Subnav
    $('.mobile-navbar__btn').click(function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.header-mobile__subnav').slideDown(300);
        } else {
            $('.header-mobile__subnav').slideUp(300);
        }
    })
});