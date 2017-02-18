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
    $('input[name=antibot]').attr("placeholder", (randomTab[0] + "+" + randomTab[1] + "=" + "?"));
    // ukrywanie/pokazywanie antybota
    $('section.BotSection').hide();
    $('input[name=email]').focus(function () {
        $('section.BotSection').slideDown(300);
    });

});

/* Invitation */

// Zabezpieczenie wysyłki formularza antybotem
function antibot2(event) {
    return document.forms.mailsend.antibot.value == RandomValue;
}
// losowość zabezpieczenia antybot
var randomTab = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];
var RandomValue = randomTab[0] + randomTab[1];
