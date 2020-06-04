const path = require("path");

module.exports = () => {
    return {
        mode: "development",
        entry: {
            index: "./src/index.js",
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './bundle'),
        },

        devServer: {
            publicPath: "/live/",
            contentBase: path.resolve(__dirname, "./"),
            inline: true,
            port: 8080,
            inline: true,
        }
    }
}