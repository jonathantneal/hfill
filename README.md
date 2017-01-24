# `<h>` [<img src="https://resources.whatwg.org/logo-dom.svg" alt="HTML Logo" width="90" height="90" align="right">][`<h>`]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[`<h>`] lets you use custom heading elements, like the [proposed `<h>` element].

```html
<!-- before -->

<h>Heading</h>

<section>
	<h>Heading</h>
</section>

<!-- after -->

<h aria-level="1">Heading</h>

<section>
	<h aria-level="2">Heading</h>
</section>
```

[npm-url]: https://www.npmjs.com/package/h-element
[npm-img]: https://img.shields.io/npm/v/h-element.svg
[cli-url]: https://travis-ci.org/jonathantneal/h-element
[cli-img]: https://img.shields.io/travis/jonathantneal/h-element.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/h-element.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[h element]: https://github.com/jonathantneal/h-element
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
[proposed `<h>` element]: https://github.com/w3c/html/issues/774
