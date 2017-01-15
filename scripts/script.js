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