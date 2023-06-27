$(document).ready(function () {
    //按鈕點擊觸發
    $("a.show-menu-btn").click(function () {
        $(".nav").addClass("active");
        $(".nav_bg").fadeIn(300);
    });
    $("a.btn02").click(function () {
        $("#lightbox_lightboxbg, #lightbox-1").fadeIn(300);
        $("#lightbox-1").center();
    });
    $("a.submit2").click(function () {
        $("#lightbox_lightboxbg, #lightbox-2").fadeIn(300);
        $("#lightbox-2").center();
    });
    
    $("a.detail").click(function () {
        $("#lightbox_lightboxbg, #lightbox-1").fadeIn(300);
        $("#lightbox-1").center();
    });
    // $("a.MJbtn01").click(function () {
    //     $("a.MJbtn01").addClass("active");
    //     $("a.MJbtn02").removeClass("active");
    //     $(".subtitle01").show();
    //     $(".subtitle02").hide();
    // });
    // $("a.MJbtn02").click(function () {
    //     $("a.MJbtn02").addClass("active");
    //     $("a.MJbtn01").removeClass("active");
    //     $(".subtitle02").show();
    //     $(".subtitle01").hide();
    // });

    //關閉鈕觸發
    $("a.lightbox_close,a.win_box_close").click(function () {
        $("#lightbox_lightboxbg, .lightbox ,.win_box").fadeOut(300);
    });
    $(".nav_bg").click(function () {
        $(".nav_bg").fadeOut(300);
        $(".nav").removeClass("active");
    });


});

//彈窗置中程式
(function ($) {
    $.fn.extend({
        center: function (options) {
            var options = $.extend(
                {
                    // Default values
                    inside: window, // element, center into window
                    transition: 0, // millisecond, transition time
                    minX: 0, // pixel, minimum left element value
                    minY: 0, // pixel, minimum top element value
                    withScrolling: false, // booleen, take care of the scrollbar (scrollTop)
                    vertical: true, // booleen, center vertical
                    horizontal: true, // booleen, center horizontal
                },
                options
            );
            return this.each(function () {
                var props = {
                    position: "fixed",
                };
                if (options.vertical) {
                    var top =
                        ($(options.inside).height() - $(this).outerHeight()) / 2;
                    if (options.withScrolling)
                        top += $(options.inside).scrollTop() || 0;
                    top = top > options.minY ? top : options.minY;
                    $.extend(props, {
                        top: top + "px",
                    });
                }
                if (options.horizontal) {
                    var left =
                        ($(options.inside).width() - $(this).outerWidth()) / 2;
                    if (options.withScrolling)
                        left += $(options.inside).scrollLeft() || 0;
                    left = left > options.minX ? left : options.minX;
                    $.extend(props, {
                        left: left + "px",
                    });
                }
                if (options.transition > 0)
                    $(this).animate(props, options.transition);
                else $(this).css(props);
                return $(this);
            });
        },
    });
})(jQuery);
