(function ($) {
    $.fn.navtacular = function () {
        var $navbar = this,
            dragging = false;

        function handleMobileNav() {

            $('.navbar-link').off('click.navtacular');

            if ( $(window).width() > 630 ) {
                return;
            }

            // find all items that have a child menu
            $navbar.find('.navbar-menu').each(function () {
                var $menu = $(this),
                    $link = $menu.prev('.navbar-link');

                // and make the link toggle the menu
                $link.on('click.navtacular', function () {
                    if ($menu.is(':visible')) {
                        $menu.slideUp();
                    } else {
                        $navbar.find('.navbar-menu').slideUp();
                        $menu.slideDown();
                    }
                });
            });
        }

        function alignRightMenus() {
            var navbarRight = $navbar.offset().left + $navbar.outerWidth(); // right edge of the navbar

            // For each non-mega menu,
            // fix the alignment if it extends beyond the right edge of the navbar
            $navbar.find('.navbar-menu').not('.mega').each(function () {
                var $menu = $(this),
                    menuRight = $menu.offset().left + $menu.outerWidth(); // right edge of the menu

                // If the right edge of the menu extends past the right edge of the navbar...
                if (menuRight > navbarRight) {
                    // ...add a special class so that our css can align the menu to the right
                    $menu.parent().addClass('menu-align-right');
                } else {
                    $menu.parent().removeClass('menu-align-right');
                }
            });
        }

        $(window).on('resize', function () {
            handleMobileNav();
            alignRightMenus();
        });

        // handle toggling the menu
        $navbar.find('.navbar-label').on('click', function () {
            $('html').toggleClass('nav-visible');
            return false;
        });
        $navbar.on('click touchend', function (e) {
            e.stopPropagation();
        });
        $(document).on('touchmove', function () {
            // set the `dragging` flag so that touchend doesn't try to do its thing
            dragging = true;
        });
        $(document).on('click touchend', function () {
            if (!dragging) {
                $('html').removeClass('nav-visible');
            }
            dragging = false;
        });

        return this.each(function () {
            var $navbar = $(this), // the current navbar while looping through each
                $menus = $navbar.find('.navbar-menu');

            // make sure .navbar-label exists
            if ($navbar.has('.navbar-label').length === 0) {
                $navbar.prepend('<h1 class="navbar-label">Navigation</h1>');
            }

            // make sure .navbar-cover exists
            if ($navbar.has('.navbar-cover').length === 0) {
                $navbar.after('<div class="navbar-cover">&nbsp;</div>');
            }

            // add a dropdown icon (will only be displayed on mobile devices)
            $menus.each(function () {
                var $link = $(this).prev('.navbar-link');

                if ($link.has('.icon-caret-down').length === 0) {
                    $link.append('<i class="icon-caret-down"></i>');
                }
            });

            handleMobileNav();
            alignRightMenus();
        });
    };

    $(document).ready( function() {
        $('.navbar').navtacular();
    });
}(jQuery));