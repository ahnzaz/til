# Webpack initialization
## Installation
```console
$ npm i --save-dev webpack
```

## Configuration
```console
$ > webpack.config.js
```

### Configure options
#### [resolve](https://webpack.js.org/configuration/resolve/)
모듈을 찾는 방법을 정의한다.
##### resolve.alias : Object
```import```, ```require```구문에서 특정 모듈을 찾기 쉽게 ```alias```를 지정한다.
```javascript
module.exports = {
    resolve:{
        alias:{
            Utilities : path.resolve(__dirname, 'src/utilities/'),
            Templates : path.resolve(__dirname, 'src/templates/'),
        }
    }
}
```
이제 상대 경로 대신에 alias를 사용할 수 있다.
```javascript
import Utility from '../../utilities/utility';

import Utility from 'Utilities';
```

Alias 끝에 ```$```를 붙여서 정확하게 일치한 이름만 찾도록 할 수도 있다.
```javascript
module.exports ={
    resolve:{
        alias : {
            xyz$ : path.resolve(__dirname, 'path/to/files.js');
        }
    }
};

import Test1 from 'xyz';        // Match to 'xyz$'
import Test2 from 'xyz/file.js' // Normali resolution
```