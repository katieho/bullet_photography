$(document).ready(function() {

    // jumping to sections
    var $bodytag = $('html, body');
    var sections = ['ready', 'aim', 'fire'];
    sections.forEach(function (section) {
        $('.goto-'+section).click(function (e) {
            $bodytag.animate({
                scrollTop: $('#'+section).offset().top
            }, 400);
        });
    });

});