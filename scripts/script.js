/**
 * Created by marcinpasiewicz on 08.01.17.
 */

// płynne przewijanie
$(function () {

$('.navbar-nav a').click(function (e) {
    e.preventDefault()
    $("html, body").animate({ scrollTop:$($(this).attr('href')).offset().top }, "slow");
})
});

// zmienny tytuł strony
    var siteTitles = [];

$(function () {

    var newTitle = ".swapp";

    $('.navbar-nav a').each(function () {
        siteTitles.push({
            "position": $($(this).attr('href')).offset().top-150,
            "title": $(this).attr('data-siteTitle')
        });
    });

    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();
        siteTitles.forEach(function (siteTitle) {
            if (scrollTop > siteTitle.position) {
                newTitle = siteTitle.title;
            }
        });

        // TODO: TU WSTAWIE AKCJE SCROLLA + coś zrobić z tym
        if( scrollTop < siteTitles[0].position ){
            $('.navbar-brand img').addClass('druga');
            $('.nav>li>a').addClass('pierwsza');

        }
        else {
            // changeMenuSize(2, 1.1, 0.01, 1.5);
            $('.nav>li>a').removeClass('pierwsza');
            $('.navbar-brand img').removeClass('druga');
        }

        $('title').text(newTitle);

    });
});
//
//
//     //operacje na rozmiarze paska nawigacji
// var $zmiennaA, $zmiennaB, $zmiennaB2, $zmiennaC;
//
// function changeMenuSize(padding, height, margin, font){
//     $('.nav>li>a').css('padding', $zmiennaA * padding);
//     $('.navbar-brand > img').css({'height': $zmiennaB * height, 'margin': $zmiennaB2 * margin});
//     $('Body').css('font-size', $zmiennaC * font);
// }
//
//
//
//         $zmiennaA = $('.nav>li>a').css('padding'),
//         $zmiennaB = $('.navbar-brand img').css('height'),
//         $zmiennaB2 = $('.navbar-brand img').css('margin'),
//         $zmiennaC = $('Body').css('font-size');
//
//     $zmiennaA = parseInt($zmiennaA);
//     $zmiennaB = parseInt($zmiennaB);
//     $zmiennaB2 = parseInt($zmiennaB2);
//     $zmiennaC = parseInt($zmiennaC);
//padding, height margin font
//     changeMenuSize(2, 1.1, 0.01, 1.5);
//
//
//
//     // substytut MediaQuery dla wielkości paska nav
//     $(window).resize(function(){
//         var largeScreen = $(document).width();
//         if( largeScreen < 1000 ){
//             changeMenuSize(1,1,1,1)
//         }
//         else if ( largeScreen >=1000 ) {        // błąd przy operacjach na zsuwaniu okna - program nie wie ktory warunek ugryzc
//             changeMenuSize(2, 1.1, 0.01, 1.5);
//         }
//     });

$(document).ready(function () {

    //matematyka dla zadania z antybota
    $ ('input[name=antibot]').attr("placeholder", (randomTab[0] + "+" + randomTab[1] + "=" + "?"));

    // ukrywanie/pokazywanie antybota
    $ ('section.BotSection').hide();
    $ ('input[name=email]').focus(function () {
        $('section.BotSection').show();
    });


}); // koniec f.ready

/* Invitation */

    // Zabezpieczenie wysyłki formularza antybotem
        function antibot2 (event) {
            return document.forms.mailsend.antibot.value == RandomValue;
        }
        // losowość zabezpieczenia antybot
        var randomTab = [Math.floor(Math.random()*10)+1, Math.floor(Math.random()*10)+1];
        var RandomValue = randomTab[0] + randomTab[1];
