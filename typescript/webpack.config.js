const path = require("path");
// const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const PATH_SRC = 'src';
const PATH_BUNDLED = "dist";
const FILE_DIST = "bundle.js";

module.exports = {

    mode: "development",

    entry: {
        "typescript-index.ts": "./src/typescript-index.ts",
        // "typescript-index.js" : "./compiled/typescript-index.js",
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
        vue: "Vue",
        ace: "Ace",
    },

    output: {
        filename: FILE_DIST,
        path: path.resolve(__dirname, PATH_BUNDLED),
    }
}