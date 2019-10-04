$(document).ready(function () {
    $("#loginbutton").click(function () {
        $('#loginModal').modal('show');
    });
    $("#reservebutton").click(function () {
        $('#ReserveModal').modal('show');
    });

    $("#mycarousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')) {
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });

});


$('input.radio[type=button]').click(function () {
    $('input.radio[type=button]').css({ "box-shadow": "none" });
    if ($(this).attr('id') == 'smoking') {
        $(this).css({ "box-shadow": "1px 1px 8px red" })
    }
    if ($(this).attr('id') == 'nonsmoking') {
        $(this).css({ "box-shadow": "1px 1px 8px green" })
    }
});

