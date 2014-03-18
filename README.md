Navtacular 2.0
==============

Navtacular is a robust, easy-to-use navigation system. Built with logically structured HTML and CSS, Navtacular can be easily customized for use in any website.

Features
------------------------

- Fully responsive, mobile-first
- Dropdown menus, including wide menus and "mega" menus
- Javascript is an optional enhancement (except for old IE)
- Easy theming, and several themes included by default
- Basic support for all modern browsers, including IE7+
- Just under 2KB CSS gzipped (plus ~120 lines of optional Javascript)

Using Navtacular
-------------------------

Navtacular should work well on its own in modern browsers, but to get the most out of it (and to fallback nicely for old browsers), there are some dependencies:

1. A build of [Modernizr.js](http://modernizr.com/download/) that tests for display-table, flexbox, and flexbox-legacy
2. The `html5shiv`, if you plan on using a `nav` element and you want to support IE < 9. `html5shiv` is included with Modernizr
3. [Respond.js](https://github.com/scottjehl/Respond), if you don't want old IE to use the mobile layout
4. jQuery, if you want to provide a better experience to mobile browsers that have Javascript enabled
5. An icon font (like [FontAwesome](http://fontawesome.io/)) that includes icons named `icon-reorder` and `icon-caret-down`. The demo includes a simple icon font if you are not already using one.

Structure your HTML thusly:

```html
<nav class="navtacular">
  <h1 class="navtacular-label">Navigation</h1>
  <ul class="navtacular-list">
    <li class="navtacular-item"><a class="navtacular-link" href="#">Home</a></li>
    <li class="navtacular-item">
      <a class="navtacular-link" href="#">Home</a>
      <section class="navtacular-menu">
        <section class="navtacular-menu-group">
          <ul>
            <li><a href="#">More Links</a></li>
            <li><a href="#">More Links</a></li>
          </ul>
        </section>
      </section>
    </li>
    <li class="navtacular-item"><a class="navtacular-link" href="#">Contact</a></li>
  </ul>
</nav>
```

Admittedly, that's a lot of classes.  The structure is inspired by [BEM](http://bem.info/), and while it makes the markup a little more verbose, it makes the CSS much, much simpler (and easier to override).

You could accomplish the same thing without all the classes (just look at Navtacular 1.0), but you end up with a lot of parent-child selecting in your CSS, which causes all sorts of specificity headaches.

Browser Support
-------------------------

- Modern desktop browsers (Chrome, Firefox, Opera, IE10+, and Safari) are fully supported. With JS enabled, they will use Flexbox.
- IE9 uses `display: table`. The JS-enabled responsive nav requires Respond.js
- IE8 uses `display: table` and depends on JS
- IE7 falls back to `float: left` and depends on JS
- iOS 6+ and Chrome for Android have both been tested with JS and work as expected (nav slides in from the right). With JS disabled, nav should be blocky but functional.

Options and Customization
-------------------------

Navtacular 2 includes four themes: dark, tan, blue and simple. You can include these themes by adding the class `navtacular-theme-<color>` to your root `.navtacular` element.

Menu appearance can be controlled by adding an additional class to the `.navtacular-menu` item:

| Class   | Description |
|---------|-------------|
| `.cols` | All `.navtacular-menu-group` children will be arranged in columns. |
| `.mega` | Similar to `.cols`, but the menu will also stretch to the full width of the navbar. |

In order to allow the menu to slide out when on small screens, the js plugin needs to know what holds the content. If you have the navbar nested more than one level past a content container, you will need to specify what element to move when on small screens. This is set when calling the js plugin.

| Option | Value |
|--------|-------|
| `navParent` | jQuery object or selector |

```
$(document).ready( function() {
  $('.navtacular').navtacular({
    navParent: '.container'
  });
});
```

Contributing
-------------------------

If you want to help out with development, it will be much appreciated.  Assuming you already have [Node](http://nodejs.org/) and [NPM](https://npmjs.org/) installed, you'll want to install [Gulp](http://gulpjs.com/) globally: `npm install -g gulp`

After you have Gulp installed, run `npm install` inside the Navtacular directory to install all dependencies.  Then, you can run `gulp` to build the project or `gulp server` to start up a simple server, open your default browser to the Navtacular demo page, and automatically reload the page when changes are saved.

Open a pull request with your changes when you're ready.  No need to minify first; I only intentionally minify when making a new release.
