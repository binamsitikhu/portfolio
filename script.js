$(document).ready(function() {
    $('nav ul li a').on('click', function(event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    $('#contact-form').on('submit', function(event) {
        event.preventDefault();
        alert('Thank you for contacting me, ' + $('#name').val() + '!');

    });
});
