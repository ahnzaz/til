const path = require("path");

const DIR_BUNDLED = "dist";
const FILE_BUNDLED = "bundle.js";

module.exports = {

    mode: "development",

    entry: {
        // "index.ts": "./src/play-index.ts",
        "vue-index.ts": "./src/vue-index.ts",
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
    },

    output: {
        filename: FILE_BUNDLED,
        path: path.resolve(__dirname, DIR_BUNDLED),
    }
}