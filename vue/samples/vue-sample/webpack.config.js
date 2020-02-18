const path = require('path');

module.exports = (env) => {
    return {
        mode: "development",
        entry: `./src/index.js`,
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },

        externals: {
            vue: 'Vue',
        },

        devServer: {
            publicPath: '/dist/',
            contentBase: path.resolve(__dirname, 'output'),
        }
    }
}