(function($) { // Begin jQuery

    $(document).ready(function() {
        var menu = $('nav > ul'),
            menuLink = $('#mobile-menu a');
        menuLink.on('click', function() {
            if (menu.hasClass('closed')) {
                menu.removeClass('closed');
                menu.addClass('open');
            } else {
                menu.removeClass('open');
                menu.addClass('closed');
            }
        });
    });

})(jQuery)
