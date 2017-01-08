/**
 * Created by marcinpasiewicz on 08.01.17.
 */

// płynne przewijanie
$(function () {

$('.navbar-nav a').click(function () {
    $("html, body").animate({ scrollTop:$($(this).attr('href')).offset().top }, "slow");
})
});

// zmienny tytuł strony

$(function () {

    var trailerPosition = $('#trailer').offset().top;
    var invitationPosition = $('#invitation').offset().top;
    var functionlistPosition = $('#functionlist').offset().top;
    var dreamTeamPosition = $('#dream_team').offset().top;

    $(window).scroll(function () {
        if ($(this).scrollTop() >= trailerPosition-100 && $(this).scrollTop() < invitationPosition-100) {
            $('title').text('Zajawka!');
        } else if ($(this).scrollTop() >= invitationPosition-100 && $(this).scrollTop() < functionlistPosition-100) {
            $('title').text('Zapraszamy');
        } else if ($(this).scrollTop() >= functionlistPosition-100 && $(this).scrollTop() < dreamTeamPosition-100) {
            $('title').text('Funkcje');
        } else if ($(this).scrollTop() >= dreamTeamPosition-100) {
            $('title').text('O nas');
        } else {
            $('title').text('.swapp');
        }
    });
});