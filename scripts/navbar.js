function handleMobileNav() {
    var $navbar = $('.navbar');

    if (!window.matchMedia || !window.matchMedia('(max-width: 630px)').matches) {
        return;
    }

    // make sure .navbar-label exists
    if ($navbar.has('.navbar-label').length === 0) {
        $navbar.prepend('<h1 class="navbar-label">Navigation</h1>');
    }
    // find all items that have a child menu
    $('.navbar-item').each(function () {
        var $item = $(this),
            $link = $item.find('.navbar-link');

        if ($item.has('.navbar-menu').length > 0) {
            // add a dropdown icon
            if ($link.has('.icon-caret-down').length === 0) {
                $link.append('<i class="icon-caret-down"></i>');
            }
            // and make the link toggle the menu
            $link.on('click', function () {
                var $nextMenu = $(this).next('.navbar-menu');

                if ($nextMenu.is(':visible')) {
                    $nextMenu.slideUp();
                } else {
                    $navbar.find('.navbar-menu').slideUp();
                    $nextMenu.slideDown();
                }
            });
        }
    });

    // handle toggling the menu
    $navbar.find('.navbar-label').on('click touchstart', function () {
        $('html').toggleClass('nav-visible');
        return false;
    });
    $navbar.on('click touchstart', function (e) {
        e.stopPropagation();
    });
    $(document).on('click touchstart', function () {
        $('html').removeClass('nav-visible');
    });
}


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
    handleMobileNav();
});

$(window).on('resize', function () {
    handleMobileNav();
});
