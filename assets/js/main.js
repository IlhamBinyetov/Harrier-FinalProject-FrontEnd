$(document).ready(function () {


    $('.search-button').click(function (e) {
        e.preventDefault();
        $('.search-box').show();


    });



    $('.basket-section').hover(
        function () {
            $(".cart-menu").show(1000);
        },
        function () {
            $(".cart-menu").hide();
        },
    );

    $(".hamburger-section").hover(
        function () {
            $(".user-menu").show(1000);
        },
        function () {
            $(".user-menu").hide();
        },

    )
});