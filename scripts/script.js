/**
 * Created by marcinpasiewicz on 08.01.17.
 */
$(function () {

$('.navbar-nav a').click(function () {
    $("html, body").animate({ scrollTop:$($(this).attr('href')).offset().top }, "slow");
})
});