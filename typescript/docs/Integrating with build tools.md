# [Integrating with build tools](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html)
## Babel
### Install
```console
npm install @babel/cli @babel/core @babel/preset-typescript --save-dev
```
### .babel.rc
```console
{
    presets : ["@babel/preset-typescript"]
}
```

### Using command line interface
```console
./node_modules/.bin/babel --out-file bundle.js src/index.ts
```

### Excute Babel from the command line
```console
npm run build
```

## Webpack
### Install
```console
npm install ts-loader --save-dev
```

### Basic webpack.config.js when using WebPack 2
```javascript
module.exports = {
    entry: "./src/index.tsx",
    output : {
        path : '/',
        filename : "bundle.js"
    },
    resolve:{
        extensions:["ts"]
    }
}
```
