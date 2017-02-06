// insert document styles for contextual headings within sectioning elements
export default (document = window.document, tag = 'x-h', sizes = ['2em', '1.5em', '1.17em', '1em', '.83em', '.67em']) => {
	const sections = ['article', 'aside', 'nav', 'section'];
	const length = 4;
	const list   = [[tag], [], [], [], [], []];

	let a = -1; while (++a < length) {
		list[1].push(`${sections[a]} ${tag}`);

		let b = -1; while (++b < length) {
			list[2].push(`${sections[a]} ${sections[b]} ${tag}`);

			let c = -1; while (++c < length) {
				list[3].push(`${sections[a]} ${sections[b]} ${sections[c]} ${tag}`);

				let d = -1; while (++d < length) {
					list[4].push(`${sections[a]} ${sections[b]} ${sections[c]} ${sections[d]} ${tag}`);

					let e = -1; while (++e < length) {
						list[5].push(`${sections[a]} ${sections[b]} ${sections[c]} ${sections[d]} ${sections[e]} ${tag}`);
					}
				}
			}
		}
	}

	const cssText = list.reduce(
		(last, each, index) => `${last}${each.join(',')}{font-size:${sizes[index]}}`,
		''
	);

	const p = document.createElement('p');
	const parent = document.getElementsByTagName('head')[0];

	p.innerHTML = `x<style>${cssText}</style>`;

	parent.insertBefore(p.lastChild, parent.firstChild);
}
