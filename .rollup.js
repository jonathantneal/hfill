export default {
	entry: 'hfill.js',
	dest: 'hfill.es5.js',
	format: 'iife',
	moduleName: 'hfill',
	sourceMap: 'hfill.es5.js.map',
	plugins: [
		require('rollup-plugin-babel')({
			babelrc: false,
			presets: [
				[
					require('babel-preset-env'),
					{
						modules: false
					}
				]
			]
		}),
		require('rollup-plugin-uglify')()
	]
};
