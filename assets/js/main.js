"use strict"

$(document).ready(function () {


    $('.search-button').click(function (e) {
        e.preventDefault();
        $('.search-section').show();
        $('.search-section').css('visibility', 'visible');
        $(this).hide();


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
        if (id != 0) {

            $("#sel2").select2('enable');

        }
        else {
            select.empty();
            $('#sel2').select2({
                disabled: true
            });
        }


        cache.find('option').each(function () {
            if (id === '0') {
                select.append($(this).clone());

            } else if ($(this).data('val') == id) {
                select.append($(this).clone());
            }
        });
    });


    if ("#sel1") {

    }

    $('.car-pics').slick({
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        touchMove: false
    });

    $('.brand-pics').slick({
        dots: false,
        slidesToShow: 6,
        slidesToScroll: 1,
        touchMove: false
    });
    $('.deals-footer').slick({
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        touchMove: false
    });

    $('.car-pics-slide').slick({
        dots: false,
        slidesToShow: 3,
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




    //custom-hamburger-menu

    $(".custom-hamburger-list").click(function () {
        $(".menu-list").toggle();


    });



    //scroll down effect

    let mybutton = document.getElementById("btn-back-to-top");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    mybutton.addEventListener("click", backToTop);

    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }





});

//testimonial section
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}



//----------------------------------------//

