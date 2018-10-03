$('#button-start').click(function () {
    $('.aside-first-check').animate({
        right: 0,
    }, 500);
    $('.footer').animate({
        width: '55%',
    }, 400)
});

$('.aside__check-button').click(function (e) {
    e.preventDefault();
    $('.aside__check-button').removeClass('active');
    $(event.target).addClass('active');
    $('.aside__next-button').css({
        'display': 'inline-block'
    });
    $('.first-check-result').css({
        'display': 'flex'
    });
    $('.first-check-result__percent').text($(event.target).attr('data-perc'));
    $('.first-check-result__text').text('Людей обращает внимание на '+$(event.target).attr('data-letter'));
});