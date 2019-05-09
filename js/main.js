$(window).scroll(function() {
    var nav = $('#Newnavbar');
    var top = 800;
    if ($(window).scrollTop() >= top) {

        nav.addClass('darkhader');

    } else {
        nav.removeClass('fixed');
    }
});