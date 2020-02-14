const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.js",
    },

    plugins: [
        new HtmlWebpackPlugin(),
    ],

    output: {
        filename: '[name].bundle.js',
        chunkFilename: "[name].chunk.js",
        path: path.resolve(__dirname, 'dist'),
    },

    devServer:{
        open:true,
    }
}