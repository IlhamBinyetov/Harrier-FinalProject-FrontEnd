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
            $(".user-menu").show();
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

    $('.car-pics').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        touchMove: false
    });

    // $('#countdown').countdown({
    //     date: '19/11/2022 23:59:59'
    // }, function () {
    //     alert('Saam mekim!');
    // });



    // Set the date we're counting down to
    var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".days").html(days);
        $(".hours").html(hours);
        $(".minutes").html(minutes);
        $(".seconds").html(seconds);




        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);




});

