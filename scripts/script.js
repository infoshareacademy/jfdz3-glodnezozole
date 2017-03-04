/**
 * Created by marcinpasiewicz on 08.01.17.
 */

// płynne przewijanie
$(function () {

    $('.navbar-nav a').click(function (e) {
        e.preventDefault();
        $("html, body").animate({scrollTop: $($(this).attr('href')).offset().top}, "slow");
    })
});

// zmienny tytuł strony
$(function () {
    var siteTitles = [];
    var newTitle = ".swapp";

    $('.navbar-nav a').each(function () {
        siteTitles.push({
            "position": $($(this).attr('href')).offset().top - 150,
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
        //modyfikacja gabarytu paska nawigacji
        if (scrollTop < siteTitles[0].position) {
            $('.navbar-brand img').removeClass('imgNormal');
            $('.navbar-brand img').addClass('imgMod');
            $('.nav>li>a').removeClass('linkNormal');
            $('.nav>li>a').addClass('linkMod'); // zrób grube
        } else {
            $('.nav>li>a').removeClass('linkMod');
            $('.nav>li>a').addClass('linkNormal');
            $('.navbar-brand img').removeClass('imgMod');
            $('.navbar-brand img').addClass('imgNormal');
        }
        $('title').text(newTitle);
    });

    //matematyka dla zadania z antybota
        var aBot = (randomTab[0] + "+" + randomTab[1] + "=" + "?");
    $('input[name=antibot]').attr({
        "placeholder": aBot,
        "title": aBot
    });

    // ukrywanie/pokazywanie antybota
    $('section.BotSection').hide();
    $('input[name=email]').focus(function () {
        $('section.BotSection').slideDown(300);
    });

    $('[data-toggle="botTooltip"]').tooltip();

    var botAnalysisIdInterval;

    function colorChange() {
        botAnalysisIdInterval = setInterval(borderColorChange, 500);
    }

    $("input[name=antibot]").click(colorChange);

    function borderColorChange() {

        if ((document.forms.mailsend.antibot.value) !==  RandomValue)
        {
                $("input[name=antibot]").focus(function () {
                $(this).addClass("wrongAnswer");

                console.log("test a");

                });
            // $("input[name=antibot]").trigger("focus");
            // $(window).trigger("focus");

        }
        else
        {
            $("input[name=antibot]").focus(function () {
                $(this).removeClass("wrongAnswer");
                
                console.log("test b");
                
            });
            // $(window).trigger("focus");
        }
    }

    function stopInterval (){
        clearInterval(botAnalysisIdInterval);
    }


// zatrzymanie intervalu jest konieczne? Jezeli formularz zostanie wysłany to strona sie odswiezy i samo powinno zniknąć ?
// czemu dopiero za 2 - 3 razem się koloruje
    // czemu nie akceptuje poprawnego wpisania znaków
    
 
}); // end of document ready

/* Invitation */

// Zabezpieczenie wysyłki formularza antybotem
function antibot2(event) {
    return document.forms.mailsend.antibot.value == RandomValue;
}
// losowość zabezpieczenia antybot
var randomTab = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];
var RandomValue = randomTab[0] + randomTab[1];
