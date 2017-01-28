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
        var scrollTop = $(window).scrollTop;
        siteTitles.forEach(function (siteTitle) {
            if (scrollTop > siteTitle.position) {
                newTitle = siteTitle.title;
            }
        });

        if( scrollTop > siteTitles[0].position ){
            changeMenuSize()
        }

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

var $zmiennaA, $zmiennaB, $zmiennaB2, $zmiennaC;

function changeMenuSize(padding, height, margin, font){
    $('.nav>li>a').css('padding', $zmiennaA * padding);
    $('.navbar-brand > img').css({'height': $zmiennaB * height, 'margin': $zmiennaB2 * margin});
    $('Body').css('font-size', $zmiennaC * font);
}

$(document).ready(function () {

    $ ('input[name=antibot]').attr("placeholder", (randomTab[0] + "+" + randomTab[1] + "=" + "?"));

    // ukrywanie/pokazywanie antybota
    $ ('section.BotSection').hide();
    $ ('input[name=email]').focus(function () {
        $('section.BotSection').show();
    });

    $zmiennaA = $('.nav>li>a').css('padding'),  //TODO: nadać prawidłowe nazwy zmiennym
        $zmiennaB = $('.navbar-brand img').css('height'),
        $zmiennaB2 = $('.navbar-brand img').css('margin'),
        $zmiennaC = $('Body').css('font-size');
    $zmiennaA = parseInt($zmiennaA);
    $zmiennaB = parseInt($zmiennaB);
    $zmiennaB2 = parseInt($zmiennaB2);
    $zmiennaC = parseInt($zmiennaC);

    /* Responsiwny pasek menu */

    // /*uzależnienie wystąpienia od roździelczośći*/
    // $(window).resize(function(){
    //     if ($('header').width() <= 1200 ){


    // }
    // $(window).load(function () {
                                                    //skopiowac ponizsze elementy a na wskazanej pozycji je podmienić
        //     $('span.pq').each(function() {
        //         var quote=$(this).clone();
        //         quote.removeClass('pq');
        //         quote.addClass('pullquote');
        //         $(this).before(quote);
        //     }); // Koniec funkcji each.


   changeMenuSize(2, 1.1, 0.01, 1.5);
// });



    //
    // $(document) .scroll(function () {
    //     if ($(this).scrollTop()>700) {
    // //     if ($(this).scrollTop()>738) {
    // //    console.log("dodaj");
    //         $('.nav>li>a').css('padding', zmiennaA / 2);
    //         $('.navbar-brand > img').css({'height': zmiennaB / 1.1, 'margin': zmiennaB / 0.01});
    //         $('Body').css('font-size', zmiennaC / 0.4);
    //     }
    // });



       //
//    //  }
    // $('.nabar-nav a').scroll(function () {
    //     if  ($(this).scroll()>offset().top) {
    //         console.log("dodaj");



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