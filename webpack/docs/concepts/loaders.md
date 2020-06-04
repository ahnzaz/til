# Loaders
로더는 module의 소스코드를 변환할 때 사용한다. `import`나 "load"하는 시점에 전처리기로써 동작한다. 로더는 다른 build tool의 "tasks"에 해당하며 front-end 빌드 과정에서 강력한 도구로 활용할 수 있다. (Typescript 같은)다른 언어를 javascript로 변환하거나 image 같은 바이너리를 DataURI로 변환할 수도 있다. 심지어 CSS file을 JavaScript module로 `import`할 수도 있다.

## Example
CSS와 Typescript를 javascript로 변환하는 예제를 살펴보자.

```console
npm install --save-dev css-loader
npm install --save-dev ts-loader
```

webpack.config.js
```javascript
module.exports = {
    module :{
        rules : [
            { test:/\.css/, use:'css-loader' },
            { test:/\.ts/, use:'ts-loader' }
        ]
    }
}
```

## Using loaders
loader를 사용하는 세가지 방법은 아래와 같다.
- Configuration(추천) : **webpack.config.js** file에 명세
- Inline : 각 `import` 구문에 명세
- CLI : shell command 호출 시 명세

## Configuration
webpack configuration의 `module.rules`에서 loader 사용을 명세할 수 있다.

Loader는 오른쪽에서 왼쪽으로 (위에서 아래로) 평가하고 실행한다.

```javascript
module.exports = {
    module : {
        rules:[
            {
                test : /\.css$/,
                use :s[
                    // style-loader
                    { loader : 'style-loader' },
                    // css-loader
                    {
                        loader : 'css-loader',
                        options: {
                            modules : true,
                        }
                    },
                    // sass-loader
                   { loader : 'sass-loader' }
                ]
            }
        ]
    }
}
```

## Inline
`import` 구문에 loader를 며이할 수도 있다. `!`로 loader를 구분하며 현재 디렉토리에서 상대 참조한다.

```javascript
import Styles from 'style-loader!css-loader?modules!./styles.css';
```
configuration에 정의된 pre-loader/post-loader를 override할 수도 있다.

- `!` 접두어는 설정된 normal loader를 모두 해제한다.
```javascript
import Styles from '!style-loader!css-loader?modules!./styles.css';
```

- `!!` 접두어는 설정된 모든 로더(pre-loader, loaders, post-loaders)를 해제한다.
```javascript
import Styles from '!!style-loader!css-loader?modules!./style.css'
```

- `-!` 접두어는 pre-loader와 loaders를 해제하고 post-loader는 그대로 둔다.
```js
import Styles from '-!style-loader!css-loader?modules!./styles.css';
```

옵션을 query parameter또는 JSON 객체의 형태로 전달할 수 있다.

## CLI
```bash
webpack --module-bind jade-loader --module-bind 'css=style-loder!css-loader'
```

## Loader Features
- Loader는 chaining될 수 있으며 역순으로 수행된다. 마지막 loader는 js file을 생성해야 webpack에서 받을 수 있다.
- sync/async 모두 가능하다.
- Node.js에서 가능한 모든 것들이 가능하다.
- `options` object로 옵션 지정이 가능하다.
- normal loader는 `package.json` `loader`field의 `main`외 로더를 export할 수 있다.
- Plugin으로 loader에 더 많은 기능을 넣을 수 있다.
- loader가 별도의 파일을 emit할 수 있다.

## Resolving loaders
loader는 표준 module resolution 시스템을 따르며 module path에서 참조할 수 있다.
일반적으로 `xxx-loader`의 형태를 가진다. ["Writing a Loader"](https://webpack.js.org/contribute/writing-a-loader/) 참조