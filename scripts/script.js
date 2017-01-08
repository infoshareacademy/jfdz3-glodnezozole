/**
 * Created by marcinpasiewicz on 08.01.17.
 */
$(function () {

$('.navbar-nav a').click(function () {
    $("html, body").animate({ scrollTop:$($(this).attr('href')).offset().top }, "slow");
})
});


/* Invitation */

function antibot2 (event) {

    return document.forms.mailsend.antibot.value=='5';
}

//////