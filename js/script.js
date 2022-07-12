$(document).ready(function () {
    $('.question-section__item').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $(this).find('.hide-content').hide(400);
            $(this).find('.question-section__icon').text('+');
        } else {
            $(this).addClass('active');
            $(this).find('.hide-content').show(400);
            $(this).siblings().removeClass('active');
            $(this).siblings().find('.question-section__icon').text('+');
            $(this).siblings().find('.hide-content').hide(400);
            $(this).find('.question-section__icon').text('-');
        }
    })
});