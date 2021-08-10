$(window).on('scroll', function () {
    var $nav = $('.page-header'),
        scroll = $(this).scrollTop();

    if (scroll > 10) {
        $nav.addClass('header-stand');
    } else {
        $nav.removeClass('header-stand');
    }
});