export default {
	entry: 'index.js',
	dest: 'index.es5.js',
	format: 'iife',
	moduleName: 'hfill',
	sourceMap: 'index.es5.js.map',
	plugins: [
		require('rollup-plugin-node-resolve')(),
		require('rollup-plugin-commonjs')({
			include: 'node_modules/**'
		}),
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
		})
	]
};




