# [Plugins](https://webpack.js.org/concepts/plugins)
플러그인은 webpack의 중추로 webpack 자체도 built-in plugin으로써 동작하는 형태를 가지고 있다.
loader가 할 수 없는 것들을 수행한다.

## Anatomy
plugin은 `apply` method를 가지고 있는 js 객체이다. `apply` method는 webpack compiler가 호출하며 compilation cycle의 모든 과정에 개입할 수 있다.

ConsoleLogOnBuildWebpackPlugin.js
```javascript
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin{
    apply(compiler){
        compiler.hooks.run.tap(pluginName, complication => {
            console.log('The webpack build process is starting!!!');
        })
    }
}
```

## Usage
plugin은 argument와 option을 받으므로 `new` 인스턴스를 webpack configuration에 전달해야 한다.

### Configuration
webpack.config.js
```js
const HTmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry : './path/to/my/entry/file.js',
    output : {
        filename : 'my-first-webpack.bundle.js',
        path : path.resolve(__dirname, 'dist')
    },

    module : {
        rules : [
            {
                test : /\.(js|jsx)$/,
                use : 'babel-loader'
            }
        ]
    },

    plugins : [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlguin({template:'./src/index.html'})
    ]
}
```

### Node API
Node API사용시 `plugins` property를 통해 전달 가능
some-node-script.js
```js
const webpack = require('webpack');
const configuration = require('./webpack.config.js');

let compiler = webpack(configuration);

new webpack.ProgressPlugin().apply(compiler);

compiler.run(function(err, stats){
    // ...
})
```

webpack source code에 예제 configruation이 많으니 참고