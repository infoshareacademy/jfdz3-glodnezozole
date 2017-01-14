/**
 * Created by marcinpasiewicz on 08.01.17.
 */
$(function () {

$('.navbar-nav a').click(function () {
    $("html, body").animate({ scrollTop:$($(this).attr('href')).offset().top }, "slow");
})
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
    });

///
