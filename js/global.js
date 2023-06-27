
$(document).ready(function() {


    if ($('body').width() > 992) {
        $('.header .nav ul li').hover(function() {
            $(this).toggleClass('current')
        })
    } else {
        $('.header .nav ul li').click(function() {
            $('.header .nav ul li').not($(this)).removeClass('current')
            $(this).toggleClass('current')
        })
    }



});