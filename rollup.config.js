const rollupPluginCommonJS = require('rollup-plugin-commonjs');
const rollupPluginNodeResolve = require('rollup-plugin-node-resolve');

export default {
    input: 'node_modules/assert/assert.js',
    output: {
        file: 'assert.js',
        format:'es'
    },
    plugins: [
        rollupPluginNodeResolve({
            preferBuiltins: false,
            browser: true
        }),
        rollupPluginCommonJS()
    ]
}
