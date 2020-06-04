const path = require('path');

module.exports = function () {
    return {
        target: 'web',
        mode: 'development',
        entry: {
            'index.ts': './src/index.ts'
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
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

        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js'
        },

        devServer: {
            publicPath: "/",
            contentBase: path.join(__dirname, './static'),
            port: 8080,
            inline: true,
            hot: true,
        }
    }
}