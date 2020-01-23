# [`entry` option](https://webpack.js.org/concepts/entry-points/)

`entry`는 webpack이 dependency graph를 그리기 위한 최초 진입점이 되는 파일.

단일 또는 multiple을 선언할 수 있으며 기본값은 `./src/index.js`이다.

## Single entry (Shorthand) Syntax
`entry : string | [string]`

```javascript
module.exports = {
    entry : 'path/to/my/entry/file.js'
}
```
위 코드는 아래 코드의 축약형이다.
```javascript
moduel.exports = {
    entry:{
        main : 'path/to/my/entry/file.js'
    }
}
```

`entry` field에 array를 전달하면 multi main files로 인식한다.

## Object syntax
`entry : { <entryChunkName> string | [string]}`

```js
module.exports = {
    entry : {
        app : './src/app.js',
        adminApp : './src/adminApp.js'
    }
}
```

**Scalable webpack configuration** 분할된 작은 단위의 webpack configuration filed을 필요에 따라 조합하여 하나의 큰 configruation file로 운영할 수 있다. 이는 webapck을 사용하는 일반적인 방법이다.

## Scenarios
아래는 실상황에서 사용할만한 `entry` 정의 시나리오이다.

### Seperate apps and vendor entries
Webpack version 4 미만에서는 vendor 파일들은 별도의 entry로 선언하여 별도의 파일로 번들링 하는 것이 일반적인 방법이었다. (`CommonsChungPlugin` field를 사용하여)

이 방법은 4 버전에서 폐기되었으며 대신에 `optimization.splitChunk` 옵션을 통해 벤더와 app module을 별도의 파일로 번들링하는 방식을 채택하였다. 더 이상 벤더 모듈을 별도 entry로 선언하면 안된다.

### Multi page application
```js
module.exports = {
    entry : {
        pageOne : './src/pageOne/index.js',
        pageTwo : './src/pageTwo/index.js',
        pageThree : './src/pageThree/index.js',
    }
}
```
webpack으로 하여금 세 개의 각기 다른 의존성 그래프를 생성하도록 선언한다.

multi-page appliaction에서 서버는 각각 다른 페이지와 애셋을 로드한다. `optimization.splitChuks`를 통해 각각의 스크립트에서 공유하는 module을 재 사용하도록 번들링 할 수 있다.

## Conclusion
`entry`는 webpack이 번들링할 파일들의 진입점을 지정하며 의존성 그래프의 시발점이 된다. `entry`에 선언 된 항목 하나당 한개의 의존성 그래프를 생성한다.