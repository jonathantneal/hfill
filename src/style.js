const sections = ['article', 'aside', 'nav', 'section'];
const sectionsLength = sections.length;

// insert document styles for contextual headings within sectioning elements
export default (
	document = window.document,
	tag = 'x-h',
	sizes = ['2em', '1.5em', '1.17em', '1em', '.83em', '.67em']
) => {
	const p = document.createElement('p');
	const parent = document.getElementsByTagName('head')[0];

	const cssText = sizes.reduce(
		(rules, value, size) => {
			const total = Math.pow(sectionsLength, size);
			const result = [];

			for (let i = -1; ++i < total;) {
				const combo = [];

				for (let ii = i, j = -1; ++j < size;) {
					let modulus = ii % sectionsLength;

					combo.push(sections[modulus]);

					ii = (ii - modulus) / sectionsLength;
				}

				result.push(combo);
			}

			return `${ rules + result.map(
				(x) => x.length ? x.join(' ').concat(` ${ tag }`) : tag
			).join(',') }{font-size:${ sizes[size] }}`;
		},
		''
	);

	p.innerHTML = `x<style>${ tag }{display:block}${ cssText }</style>`;

	parent.insertBefore(p.lastChild, parent.firstChild);
}


