Navtacular (almost version 1.0)
==============

Description
------------------------

**Note:** The documentation below isn't quite accurate yet, but it will be in the very near future. For now, see demo.html if you have questions about setting up Navtacular.

Navtacular (recently renamed from css-navbar -- yuck what a boring name!) is a robust, easy-to-use navigation system. Built with logically structured HTML and CSS, Navtacular can be easily customized for use in any website.

Features
------------------------

- Dropdown menus, and menus inside of other menus
- Mobile friendliness, thanks to good, sound responsive deisgn
- Minimal Javascript, so all navigation will still be functional if Javascript is disabled
- Multiple themes, and easy theme support using a LESS template
- Basic support for all modern browsers, including IE7+

Getting Started
-------------------------

1. For best results, you'll want to include a build of [modernizr.js](http://modernizr.com/download/) that tests for Flexbox support.
2. Include the compiled navtacular.css file in your project, or customize the LESS files and build your own variation.
3. Form your HTML thusly:

```html
<nav class="navtacular">
  <h1>Navigation</h1>
  <ul>
    <li><a href="#">Home</a></li>
    <li>
      <a href="#">Home</a>
      <div class="menu">
        <ul>
          <li><a href="#">More Links</a></li>
          <li><a href="#">More Links</a></li>
        </ul>
      </div>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```
