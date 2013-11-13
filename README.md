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
- Just under 1KB CSS, gzipped (plus ~70 lines of optional Javascript)

Using Navtacular
-------------------------

Navtacular should work well on its own in modern browsers, but to get the most out of it (and to fallback nicely for old browsers), there are some dependencies:

1. A build of [Modernizr.js](http://modernizr.com/download/) that tests for display-table, flexbox, and flexbox-legacy
2. The `html5shiv`, if you plan on using a `nav` element and you want to support IE < 9. `html5shiv` is included with Modernizr
3. [Respond.js](https://github.com/scottjehl/Respond), if you don't want old IE to use the mobile layout
4. jQuery, if you want to provide a better experience to mobile browsers that have Javascript enabled

Structure your HTML thusly:

```html
<nav class="navbar">
  <h1 class="navbar-label">Navigation</h1>
  <ul class="navbar-list">
    <li class="navbar-item"><a class="navbar-link" href="#">Home</a></li>
    <li class="navbar-item">
      <a class="navbar-link" href="#">Home</a>
      <section class="navbar-menu">
        <section class="navbar-menu-group">
          <ul>
            <li><a href="#">More Links</a></li>
            <li><a href="#">More Links</a></li>
          </ul>
        </section>
      </section>
    </li>
    <li class="navbar-item"><a class="navbar-link" href="#">Contact</a></li>
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

Navtacular 2 currenly includes only one theme: dark. You can include this theme by adding the class `navbar-theme-dark` to your root `.navbar` element. A tan theme was developed for Navtacular 1, and it will be udpated soon.

Menu appearance can be controlled by adding an additional class to the `.navbar-menu` item:

| Class   | Description |
|---------|-------------|
| `.cols` | All `.navbar-menu-group` children will be arranged in columns. |
| `.mega` | Similar to `.cols`, but the menu will also stretch to the full width of the navbar. |
