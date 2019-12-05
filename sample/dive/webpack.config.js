const path = require('path');

module.exports = () => {
    return {
        mode: "development",

        entry: {
            // "index.ts": "./src/play-index.ts",
            // "vue-index.ts": "./src/vue-index.ts",
            "index.js": "./src/index.js",
        },

        resolve: {
            extensions: ['.js', '.jsx'],
        },

        // module: {
        //     rules: [
        //         {
        //             test: /(\.tsx?$|\.jsx?$)/,
        //             use: [
        //                 {
        //                     loader: 'ts-loader',
        //                 },
        //             ]
        //         }
        //     ]
        // },

        // externals: {
        //     vue: "Vue",
        // },

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, './html/js'),
        }
    }
}