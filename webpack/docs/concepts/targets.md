# [Targets](https://webpack.js.org/concepts/targets/)
javascript는 서버/클라 양쪽에서 사용할 수 있으므로 디플로이 타겟을 설정할 수 있다.

> `target` property는 `output.libraryTarget` property와 헷갈리지 말아야 한다.

## Usage
**webpack.config.js**
```js
module.export = {
    target : 'node'
}
```

`node` 환경으로 컴파일하면 `fs`, `path` 같은 built-in module들은 컴파일하지 않는다.

## Multiple targets
`target` property는 여러개 문자열을 받진 않지만 configuration을 분리하여 동일한 library를 작성할 수 있다.

```js
const path = require('path');
const serverConfig = {
    target:'node',
    output:{
        path : path.resolve(__dirname, 'dist'),
        filename:'lib.node.js'
    }
}

const clientConfig = {
    target : 'web',
    output:{
        path:path.resolve(__dirname, 'dist'),
        filename: 'lib.js'
    }
}

module.exports = [ serverConfig, clientConfig ];
```

## Resources
- compare-webpack-target-bundles : testing, viewing different webpack targets
- Bolierplate of Electron-React application : electron's main process 샘플.