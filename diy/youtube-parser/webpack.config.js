const path = require('path');

module.exports = function () {
    return {
        entry: {
            'index.js': "./index.js"
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist/js'),
        }
    }
}