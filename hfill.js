// polyfill contextual headings
export function observe(scope, rawtag) {
	const tag = rawtag ? rawtag.toLowerCase() : 'x-h';

	// polyfill existing contextual headings
	[].forEach.call(
		scope.getElementsByTagName(tag),
		polyfillContextualHeading
	);

	// polyfill new contextual headings
	(new MutationObserver(
		(mutations) => mutations.forEach(
			(mutation) => {
				[].forEach.call(
					mutation.addedNodes,
					(node) => {
						if (tag === node.nodeName.toLowerCase()) {
							polyfillContextualHeading(node);
						} else if (node.getElementsByTagName) {
							[].forEach.call(
								node.getElementsByTagName(tag),
								polyfillContextualHeading
							);
						}
					}
				);
			}
		)
	)).observe(
		scope,
		{
			childList: true,
			subtree: true
		}
	);

	// polyfill a contextual heading
	function polyfillContextualHeading(h) {
		// default level is 1
		let level = 1;

		// increase the level for each sectioning ancestor
		let ascend = h;

		while (ascend = ascend.parentElement) {
			if (sectionsMatch.test(ascend.nodeName)) {
				++level;
			} else if (ascend.nodeName.toLowerCase() === tag) {
				return;
			}
		}

		// assign the heading role and aria-level
		h.setAttribute('role', 'heading');
		h.setAttribute('aria-level', level);
	}
}

// style contextual headings
export function style(scope, rawtag, cssText, sizes) { // eslint-disable-line max-params
	const tag = rawtag ? rawtag.toLowerCase() : 'x-h';

	if (scope.querySelector('style#hfill-style')) {
		return;
	}

	const hstyle = document.createElement('style');

	hstyle.setAttribute('id', 'hfill-style');

	hstyle.textContent = [].concat(
		sizes || ['2em', '1.5em', '1.17em', '1em', '.83em', '.67em']
	).reduce(
		(css, value, level, levels) => { // eslint-disable-line max-params
			const total = Math.pow(sectionsLength, level);
			const selectors = [];

			for (let i = -1; ++i < total;) {
				const selector = [];

				for (let ii = i, j = -1; ++j < level;) {
					let modulus = ii % sectionsLength;

					selector.push(sections[modulus]);

					ii = (ii - modulus) / sectionsLength;
				}

				selectors.push(selector);
			}

			return `${ css + selectors.map(
				(x) => x.length ? x.join(' ').concat(` ${ tag }`) : tag
			).join(',') }{font-size:${ levels[level] }}`;
		},
		`${ tag }{${ cssText || 'display:block;font-weight:bold' }}`
	);

	scope.appendChild(hstyle);
}

// contextual heading sectioning elements
const sections = ['article', 'aside', 'nav', 'section'];
const sectionsMatch = RegExp(`^(${ sections.join('|') })$`, 'i');
const sectionsLength = sections.length;
