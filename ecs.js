$(document).ready(function () {

    //When User Scroll
    $(window).scroll(function () {
        setInterval(function () {
            $('#bttBtn').css('animation', 'bttAnimation 400ms ease-out forwards');
        }, 3000);
    });

    //Back To Top Button
    $('#bttBtn').click(function () {
        $('html,body').scrollTop(0);
    });

    //Filter Settings
    $('#categoriesFilter').hide();
    $('#brandsFilter').hide();
    $('#sizesFilter').hide();
    $('#pricesFilter').hide();

    $('#categoriesMobileFilter').hide();
    $('#brandsMobileFilter').hide();
    $('#sizesMobileFilter').hide();
    $('#pricesMobileFilter').hide();

    $('#categoriesBtn').click(function () {
        $('#categoriesFilter').fadeToggle();
    });

    $('#brandsBtn').click(function () {
        $('#brandsFilter').fadeToggle();
    });

    $('#sizesBtn').click(function () {
        $('#sizesFilter').fadeToggle();
    });

    $('#pricesBtn').click(function () {
        $('#pricesFilter').fadeToggle();
    });

    //Filter Settings For Mobile
    $('#categoriesMobileBtn').click(function () {
        $('#categoriesMobileFilter').fadeToggle();
    });

    $('#brandsMobileBtn').click(function () {
        $('#brandsMobileFilter').fadeToggle();
    });

    $('#sizesMobileBtn').click(function () {
        $('#sizesMobileFilter').fadeToggle();
    });

    $('#pricesMobileBtn').click(function () {
        $('#pricesMobileFilter').fadeToggle();
    });

    //Images In Product View
    $('.productAnotherImage').click(function () {
        $('.productAnotherImage').removeClass('border');
        $(this).addClass('border');
    });

    //Favourite Product
    $('#heartItem').click(function () {
        $('#heartItem i').toggleClass('fa-regular');
        $('#heartItem i').toggleClass('fa-solid');
    });

    //Password SHow/Hide
    $('#pswShowHide').click(function () {
        $('#eye').toggleClass('fa-eye');
        $('#eye').toggleClass('fa-eye-slash');
        if ($('#eye').hasClass('fa-eye')) {
            $('#password').prop('type', 'password')
            $('#passwordConfirm').prop('type', 'password')
            $('#eyeLabel').html('show password');
        }
        else {
            $('#password').prop('type', 'text')
            $('#passwordConfirm').prop('type', 'text')
            $('#eyeLabel').html('hide password');
        }
    });

});