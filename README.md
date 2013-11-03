Navtacular 2.0
==============

Description
------------------------

**Note:** Navtacular is going through some major changes. The code is getting smaller and much easier to understand (and override) without any major loss in functionality.

Navtacular is a robust, easy-to-use navigation system. Built with logically structured HTML and CSS, Navtacular can be easily customized for use in any website.

Features
------------------------

- Fully responsive, mobile-first
- Dropdown menus, including wide menus and "mega" menus
- Javascript is an optional enhancement (except for old IE)
- Easy theming, and several themes included by default
- Basic support for all modern browsers, including IE7+

Using Navtacular
-------------------------

You'll probably want to include the following, depending on the browsers you want to support:

1. A build of [Modernizr.js](http://modernizr.com/download/) that tests for display-table (to provide a better fallback for IE7)
2. The `html5shiv`, if you plan on using a `nav` element and you want to support IE < 9. `html5shiv` is included with Modernizr
3. jQuery, if you want to provide a better experience to mobile browsers that have Javascript enabled

Structure your HTML thusly:

```html
<nav class="navbar">
  <h1class="navbar-label">Navigation</h1>
  <ul class="navbar-list">
    <li class="navbar-item"><a class="navbar-link" href="#">Home</a></li>
    <li class="navbar-item">
      <a class="navbar-link" href="#">Home</a>
      <section class="navbar-menu">
        <ul>
          <li><a href="#">More Links</a></li>
          <li><a href="#">More Links</a></li>
        </ul>
      </section>
    </li>
    <li class="navbar-item"><a class="navbar-link" href="#">Contact</a></li>
  </ul>
</nav>
```

Admittedly, that's a lot of classes.  The structure is inspired by [BEM](http://bem.info/), and while it makes the markup a little more verbose, it makes the CSS much, much simpler (and easier to override).

You could accomplish the same thing without all the classes (just look at Navtacular 1.0), but you end up with a lot of parent-child selecting in your CSS, which causes all sorts of specificity headaches.
