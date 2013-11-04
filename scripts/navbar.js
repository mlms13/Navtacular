
$(function () {
    $('.navbar').each(function () {
        var $navbar = $(this),
            navbarRight = $navbar.offset().left + $navbar.outerWidth(); // right edge of the navbar

        // For each non-mega menu,
        // fix the alignment if it extends beyond the right edge of the navbar
        $navbar.find('.navbar-menu:not(.mega)').each(function () {
            var $menu = $(this),
                menuRight = $menu.offset().left + $menu.outerWidth(); // right edge of the menu

            // If the right edge of the menu extends past the right edge of the navbar...
            if (menuRight > navbarRight) {
                // ...add a special class so that our css can align the menu to the right
                $menu.parent().addClass('menu-align-right');
            }
        });
    });
});
