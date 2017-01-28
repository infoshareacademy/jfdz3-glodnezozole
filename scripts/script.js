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

$(function () {

    var siteTitles = [];
    var newTitle = ".swapp";

    $('.navbar-nav a').each(function () {
        siteTitles.push({
            "position": $($(this).attr('href')).offset().top-150,
            "title": $(this).attr('data-siteTitle')
        });
    });

    $(window).scroll(function () {
        siteTitles.forEach(function (siteTitle) {
            if ($(window).scrollTop() > siteTitle.position) {
                newTitle = siteTitle.title;
            }
        });

        $('title').text(newTitle);

    });
});


/* Invitation */

    // Zabezpieczenie wysyłki formularza antybotem
    function antibot2 (event) {
        return document.forms.mailsend.antibot.value == RandomValue;
    }
    // losowość zabezpieczenia antybot
    var randomTab = [Math.floor(Math.random()*10)+1, Math.floor(Math.random()*10)+1];
    var RandomValue = randomTab[0] + randomTab[1];

$(document).ready(function () {

    $ ('input[name=antibot]').attr("placeholder", (randomTab[0] + "+" + randomTab[1] + "=" + "?"));

    // ukrywanie/pokazywanie antybota
    $ ('section.BotSection').hide();
    $ ('input[name=email]').focus(function () {
        $('section.BotSection').show();
    });

    /* Responsiwny pasek menu */

    // /*uzależnienie wystąpienia od roździelczośći*/
    // $(window).resize(function(){
    //     if ($('header').width() <= 1200 ){

            var zmiennaA = $('.nav>li>a').css('padding'),  //TODO: nadać prawidłowe nazwy zmiennym
                zmiennaB = $('.navbar-brand img').css('height'),
                zmiennaC = $('Body').css('font-size');

            // function testujacaPolozenieScrolla() {
            var test = {position : $(document).offset().top-150};


            // }
            $(window).load(function () {
            zmiennaA = parseInt(zmiennaA,10);
            zmiennaB = parseInt(zmiennaB,10);
            zmiennaC = parseInt(zmiennaB,10);

            $('.nav>li>a').css('padding',zmiennaA * 2);
            $('.navbar-brand > img').css({'height': zmiennaB * 1.1 , 'margin' : zmiennaB * 0.01 });
            $('Body').css('font-size',zmiennaC * 0.4);
            });

        // }   /// Nie działa :/
    // }); //koniec f.resize

}); // koniec f.ready

// $(document).on('scroll',function () {
// //    // function testujacaPolozenieScrolla() {
// var test = { position : $(document).offset().top-150 };
//     if ($(this).scrollTop()>test){
//         console.log("dodaj"); }
// });

//
// $(document).on('scroll',function () {
//
//    // if ($(this).scrollTop()>738) {
//    //     console.log("dodaj");
//    //  }
//    //  else if ($(this).scrollTop()<737){
//    //
//    //      console.log("odejmij")
//    //  }
//
//     // if ($ (this).scrollTop()
//
//     console.log("DecOfPosition.siteTitle.position");
//     var klucz1='siteTitle';
//     var klucz2='.position';
//     console.log("DecOfPosition.siteTitle.position");
// });