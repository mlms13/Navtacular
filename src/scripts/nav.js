/* Calculate the right edge of the menu and align it to the right if needed */

$(function () {
    $('.navbar').each(function () {
        var $this = $(this),
            navbarRight = $this.offset().left + $this.outerWidth(); // The right edge of the navbar

        $this.find('li > div.menu:not(.wide)').each(function () {
            var $this = $(this),
                menuRight = $this.offset().left + $this.outerWidth(); // The right edge of the menu

            // If the right edge of the menu extends past the right edge of the navbar...
            if(menuRight > navbarRight) {
                // ...add a special class so that our css can align the menu to the right
                $this.parent().addClass('menu-align-right');
            }
        })
    });
});
