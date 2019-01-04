

var app = function () {
    'use strict';
    function NavBarActions() {
        $(".main_nav .nav_item").hover(function () {
            $(this).parent().find(".sub_nav").slideDown("fast"),
                $(this).parent().hover(function () { }, function () {
                    $(this).parent().find(".sub_nav").stop().slideUp()
                })
        })
        $(".main_nav li").click(function (){
            $(this).find('.selected').remove();
            $(this).addClass('selected');
        })
    }
    return {
        init: function () {
            NavBarActions();

        }
    };
}();

$(document).ready(function () {
    app.init();

    $(function () {
        $(window).scroll(function () {
            var e = $(window).scrollTop();
            e < 20 ? $("header .brd_bottom").css("display","none") : $("header .brd_bottom").removeAttr("style");
        }).scroll();
    })
});