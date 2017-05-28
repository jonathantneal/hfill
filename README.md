# hfill [<img src="https://resources.whatwg.org/logo-dom.svg" alt="DOM Logo" width="90" height="90" align="right">][hfill]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Tweet About This][soc-img]][soc-url]

[hfill] lets you use [the speculative `h` element] in HTML.

The `h` element would allow web authors to provide contextual headings without
specifying an explicit level.

```html
<body>
  <h>This is a top level heading</h>
  <p>....</p>
  <section>
    <h>This is a second-level heading</h>
    <p>....</p>
    <section>
      <h>This is a third-level heading</h>
      <p>....</p>
    </section>
  </section>
  <section>
    <p>....</p>
    <h>This is another second-level heading</h>
    <p>....</p>
  </section>
</body>
```

**[Try it right now using CodePen]**

---

**[hfill] is a [speculative polyfill] which emulates a proposed feature of the
web platform. Therefore, it should only be used in real production situations
as `x-h` and not `h`, as the later would otherwise risk creating problems for
the development of the Web if it became widely used prior to standardization
and implementation.**

---

## Usage

Add [hfill] to your build tool:

```bash
npm install hfill --save-dev
```

Import [hfill] as a resource.

```js
import hfill from 'hfill';
```

---

### observe

The `observe` method watches contextual heading elements.

```js
hfill.observe(
  document.documentElement // where contextual headings will be observed
  'x-h' // tag name of contextual headings
);
```

The `observe` method will assign a `role` of `heading` to the contextual
heading, if it does not already have one. It will then assign an `aria-level`
corresponding to the heading’s [outline depth], which is its number of
`article`, `aside`, `nav`, or `section` ancestors.

Example:

```html
<body>
  <x-h role="heading" aria-level="1">This is a top level heading</x-h>
  <p>....</p>
  <section>
    <x-h role="heading" aria-level="2">This is a second-level heading</x-h>
    <p>....</p>
    <section>
      <x-h role="heading" aria-level="3">This is a third-level heading</x-h>
      <p>....</p>
    </section>
  </section>
</body>
```

---

### style

The `style` method adds styles for contextual heading elements.

```js
hfill.style(
  document.head, // where <style> will be appended
  'x-h' // tag name of contextual headings
  'font-style:italic' // optional styles (otherwise display:block;font-weight:bold)
  ['2em', '1.5em', '1em'] // optional heading sizes (otherwise 2em,1.5em,1.17em,1em,.83em,.67em)
);
```

Example:

```html
<style id="hfill-style">x-h{display:block;font-weight:bold}/* ... level-based styles */</style>
```

Level-based styles only use elements to maintain minimal CSS specificity.

```css
x-h {
  font-size: 2em;
}

article x-h, aside x-h, nav x-h, section x-h {
  font-size: 1.5em;
}

article article x-h, article aside x-h, article nav x-h, article section x-h,
aside article x-h, aside aside x-h, aside nav x-h, aside section x-h,
nav article x-h, nav aside x-h, nav nav x-h, nav section x-h,
section article x-h, section aside x-h, section nav x-h, section section x-h {
  font-size: 1.17em;
}

/* etc. */
```

---

[hfill] is 665 bytes when ES5 transpiled, minified, and gzipped.

[npm-url]: https://www.npmjs.com/package/hfill
[npm-img]: https://img.shields.io/npm/v/hfill.svg
[cli-url]: https://travis-ci.org/jonathantneal/hfill
[cli-img]: https://img.shields.io/travis/jonathantneal/hfill.svg
[soc-url]: https://twitter.com/intent/tweet?text=A%20speculative%20polyfill%20to%20use%20the%20h%20element%20in%20HTML%20https%3A%2F%2Fgithub.com%2Fjonathantneal%2Fhfill
[soc-img]: https://img.shields.io/twitter/url/http/shields.io.svg?style=social

[hfill]: https://github.com/jonathantneal/hfill
[the speculative `h` element]: https://jonathantneal.github.io/h-element-spec/
[Try it right now using CodePen]: https://jonathantneal.github.io/hfill/
[speculative polyfill]: https://w3ctag.github.io/polyfills/#nomenclature-what-is-a-polyfill-
[outline depth]: https://w3c.github.io/html/sections.html#outline-depth
