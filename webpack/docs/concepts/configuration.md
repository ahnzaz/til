# [Configuration](https://webpack.js.org/concepts/configuration)
webpack의 configuration 파일은 configuration object를 export하는 js file이다.

Node.js의 CommonJS spec을 따르는 파일이므로 아래가 가능하다.

- `require()`를 통한 다른 파일 import
- `require()`를 통한 npm의 utility 사용
- `?:` 같은 javascript control flow 사용
- 상수 사용
- configuration의 일부분을 function으로 떼어놓기

아래 항목은 지양해야 한다.
- webpack cli를 사용하더라도 CLI 인자 접근은 자제, (`--env`로 대체)
- 비결정론적인 값 export. 멱등성을 가져야 함.
- 설정 파일 분리하지 않고 길게 작성하는 경우

## Single Configuration
**webpack.config.js**
```js
var path = require('path');

module.exports = {
    mode : 'development',
    entry : './foo.js',
    output :{
        path: path.resolve(__dirname, 'dist'),
        filename : 'foo.bundle.js',
    }
}
```
## Multiple Targets
[Exporting multiple configuration](https://webpack.js.org/configuration/configuration-types/#exporting-multiple-configurations)

## Using other Configuration Languages
[Configuration language](https://webpack.js.org/configuration/configuration-languages/)