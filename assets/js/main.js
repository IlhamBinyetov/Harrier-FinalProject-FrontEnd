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

    );

    $('.sel-example').select2({

    });

    $('#sel2').select2({
        disabled: true
    });


    //select part

    var select = $('#sel2'),
        cache = $('#sel2').clone();

    $("#sel1").change(function () {
        var id = $(this).val(),
            options = [];
        select.empty();
        $("#sel2").select2('enable');
        cache.find('option').each(function () {
            if (id === '0') {
                select.append($(this).clone());
            } else if ($(this).data('val') == id) {
                select.append($(this).clone());
            }
        });
    });


});

