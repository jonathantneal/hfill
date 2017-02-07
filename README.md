# hfill [<img src="https://resources.whatwg.org/logo-dom.svg" alt="DOM Logo" width="90" height="90" align="right">][hfill]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[hfill] lets you use contextual headings in HTML, like the [proposed `<h>` element].

```html
<!-- before -->

<x-h>Heading</x-h>
<p>Content...</p>
<section>
  <x-h>Heading</x-h>
  <p>Content...</p>
  <section>
    <x-h>X Heading</x-h>
    <p>Content...</p>
  </section>
</section>
<section>
  <x-h>Heading</x-h>
  <p>Content...</p>
</section>

<!-- after -->

<x-h role="heading" aria-level="1">Heading</x-h>
<p>Content...</p>
<section>
  <x-h role="heading" aria-level="2">Heading</x-h>
  <p>Content...</p>
  <section>
    <x-h role="heading" aria-level="3">X Heading</x-h>
    <p>Content...</p>
  </section>
</section>
<section>
  <x-h role="heading" aria-level="2">Heading</x-h>
  <p>Content...</p>
</section>
```

Play with [hfill] in your browser right now at [CodePen].

The default `<x-h>` element is used to prevent stomping on the native namespace. This library is intended to produce contextual headings in JavaScript experiences. For JavaScript-free usage that may also improve seach engine crawling, see [posthtml-hfill].

## Usage

Install [hfill] to your project.

```sh
npm install jonathantneal/hfill
```

Import [hfill] as a resource.

```js
import hfill from 'hfill';
```

Use the `style` method to include a document stylesheet for contextual headings within sectioning elements.

```js
hfill.style(
  document, // document
  'x-h', // heading tag
  ['2em', '1.5em', '1.17em', '1em', '.83em', '.67em'] // heading font sizes
);
```

Use the `observer` method to watch the document for contextual headings and assign them the appropriate `role` and `aria-level`.

```js
hfill.observe(
  document, // document
  'x-h', // heading tag
);
```

You may choose to use a different heading tag while we wait for the [proposed `<h>` element]. Alternative suggestions include `html-h`, `x-heading`, or `contextual-heading`. The entire script, including the observer and customizable styles is 731 bytes.

## API

### observe

```js
observe(document, tag)
```

Watches the document for contextual headings and assigns them the appropriate `role` and `aria-level`.

- `document`: document being observed (default is `window.document`).
- `tag`: tag used by contextual headings (default is `x-h`).

### style

```js
style(document, tag, sizes)
```

Inserts a document stylesheet for contextual headings within sectioning elements.

- `document`: document being styled (default is `window.document`).
- `tag`: tag used by contextual headings (default is `x-h`).
- `styles`: font sizes given to headings by depth (default is `['2em', '1.5em', '1.17em', '1em']`).

---

[npm-url]: https://www.npmjs.com/package/hfill
[npm-img]: https://img.shields.io/npm/v/hfill.svg
[cli-url]: https://travis-ci.org/jonathantneal/hfill
[cli-img]: https://img.shields.io/travis/jonathantneal/hfill.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/hfill.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[CodePen]: http://codepen.io/jonneal/pen/wgombw
[hfill]: https://github.com/jonathantneal/hfill
[posthtml-hfill]: https://github.com/jonathantneal/posthtml-hfill
[proposed `<h>` element]: https://github.com/w3c/html/issues/774
