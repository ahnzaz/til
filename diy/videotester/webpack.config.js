const path = require("path");

module.exports = function () {
    return {
        target: "web",
        mode: "development",
        entry: {
            "index": "./src/index.tsx",
        },
        resolve: {
            // modules: [path.resolve(__dirname, PATH_SRC), path.resolve(__dirname, 'node_modules')],
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
            // plugins: [new TsconfigPathsPlugin({ /*configFile: "./path/to/tsconfig.json" */ })]
        },

        module: {
            rules: [
                {
                    test: /(\.tsx?$|\.jsx?$)/,
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                    ]
                }
            ]
        },

        externals: {
            "react": "React",
            "react-dom": "ReactDOM",
            "@material-ui/core": "MaterialUI",
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './dist'),
        },

        devServer: {
            publicPath: "/dist/",
            contentBase: path.join(__dirname, './static'),
            port: 8080,
            inline: true,
            hot: true,
        }
    }
}