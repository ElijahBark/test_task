$(document).ready(function () {
    $('#button-start').click(function () {
        $('.aside-first-check').animate({
            right: 0,
        }, 500,function () {
            $('.aside-start').css({
                display:'none'
            })
        });
        $('.footer').animate({
            width: '55%',
        }, 500)
        $('.footer__menu').animate({
            width: '65%',
        }, 500)
    });


    $('.aside__check-button').click(function (e) {
        e.preventDefault();
        $('.aside__check-button').removeClass('active');
        $(event.target).addClass('active');
        $('.aside__next-button').addClass('active');
        $('.first-check-result').addClass('active');
        $('.first-check-result__percent').text($(event.target).attr('data-perc'));
        $('.first-check-result__text').text('Людей обращает внимание на '+$(event.target).attr('data-letter'));
    });

    $('#continue').click(function () {
        $('.first-check-result').removeClass('active');
        $('.aside-reg-form').animate({
            right: 0,
        }, 500,function () {
            $('.aside-first-check').css({
                display:'none'
            })
        });
    });

    let radioFlag;
    let name = $('#user-name');
    let nameFlag;
    let email = $('#email');
    let reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    let emailFlag;
    let pass = $('#password');
    let passFlag;
    let checkBoxFlag;



    $('#reg-form-continue').click(function (e) {
        e.preventDefault();

        if (!nameFlag) {
            name.css({
                'borderColor': 'red',
            }).val('').attr('placeholder','Введите своё имя');
        }

        if (!emailFlag) {
            email.css({
                'borderColor': 'red',
            }).val('').attr('placeholder','Неверный формат email');
        }


        if (!passFlag) {
            pass.css({
                'borderColor': 'red',
            }).val('').attr('placeholder','Придумайте новый пароль');
        }


    });

    $('input').keyup(function (e) {
        $(e.target).attr('style','').attr('placeholder','');
        confirmValidation();
    });
    $(document).on('click','[type="checkbox"],[type="radio"]', function () {
        confirmValidation();
    });

    function confirmValidation() {
        checkBoxFlag = $('.aside-reg-form__checkbox:checked').length === 1;
        radioFlag = $('.aside-reg-form__radio:checked').length === 1;
        nameFlag = /^([А-Яа-яA-Za-z\s]+){3,20}$/.test(name.val());
        emailFlag = reg.test(email.val());
        passFlag =  /^[A-Za-z]\w{7,15}$/.test(pass.val());

        if (radioFlag && nameFlag && passFlag && emailFlag && checkBoxFlag) {
            $('#reg-form-continue').addClass('active');
        } else {
            $('#reg-form-continue').removeClass('active');
        }
    }


});



