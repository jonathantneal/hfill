# hfill [<img src="https://resources.whatwg.org/logo-dom.svg" alt="DOM Logo" width="90" height="90" align="right">][hfill]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[hfill] lets you use custom heading elements, like the [proposed `<h>` element].

```html
<!-- before -->

<x-h>Heading</x-h>

<section>
	<x-h>Heading</x-h>
</section>

<!-- after -->

<x-h role="heading" aria-level="1">Heading</x-h>

<section>
	<x-h role="heading" aria-level="2">Heading</x-h>
</section>
```

A custom `<x-h>` element is used to prevent stomping on the native namespace.

## Usage

Install [hfill] to your project.

```sh
npm install jonathantneal/hfill
```

Import [hfill] as a resource.

```js
import hfill from 'hfill';
```

Use the `style` method to include a document stylesheet for custom headings within sectioning elements.

```js
hfill.style(
  document, // document
  'x-h', // heading tag
  [2, 1.5, 1.17, 1, .83, .67] // heading font sizes
);
```

Use the `observer` method to watch the document for custom headings and assign them the appropriate `role` and `aria-level`.

```js
hfill.observe(
  document, // target document
  'x-h', // target heading tag
);
```

You may choose to use a different heading tag while we wait for the [proposed `<h>` element]. Some alternative suggestions might include `html-h`, `x-heading`, or `contextual-heading`.

## API

### observe

```js
observe(document, tag)
```

Watches the document for custom headings and assigns them the appropriate `role` and `aria-level`.

- `document`: target document (default is `window.document`).
- `tag`: custom tag (default is `x-h`).

### style

```js
style(document, tag, sizes)
```

Includes a document stylesheet for custom headings within sectioning elements.

```js
hfill.style(
  document, // document
  'x-h', // heading tag
  [2, 1.5, 1.17, 1, .83, .67] // heading font sizes
);
```

- `document`: target document (default is `window.document`).
- `tag`: custom tag (default is `x-h`).
- `styles`: font sizes per sectioning depth (default is `[2, 1.5, 1.17, 1, .83, .67]`).

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

[hfill]: https://github.com/jonathantneal/hfill
[proposed `<h>` element]: https://github.com/w3c/html/issues/774
