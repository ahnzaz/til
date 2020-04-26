# [Core concepts](https://webpack.js.org/concepts/)

## Entry
webpack이 dependency graph를 작성하기 위해 최초로 참고하는 진입점에 해당하는 모듈.
기본 값은 `./src/index.js`이나 커스텀할 수 있고 여러개의 entry point를 갖는 것도 가능

## Output
번들한 파일을 생성할 디렉토리와 이름을 명시.
기본값은 `./dist/main.js`

## Loaders
webpack은 javscript와 JSON 파일 밖에 인식하지 못하므로 다른 타입의 파일을 webpack이 처리할 수 있는 valid한 module로 변경해 주는 외부 프로그램을 loader라 한다.

아래 두 프로퍼티를 갖는다.
- `test` : 어떤 파일을 타겟할 지 명시
- `use` : 변환 시 사용할 loader를 명시

loader에 관한 rule 작성 시 `module.rule` property에 정의해야 한다. root `rule`에 작성할 경우 webpack이 경고 메시지를 출력할 것임

정규 표현식을 사용할 경우 ""로 감싸지 말아야 한다.

## Plugins
Loader가 특정 파일의 변환에만 사용한다면 플러그인은 번들링 최적화, 애셋 관리, 환경변수 주입 등 다양한 방면에서 사용할 수 있는 외부 프로그램을 말한다.

사용하려면 `require()` 한 뒤 `plugin` array에 명시해야 한다. configuration에서 다른 방식으로 플러그인을 사용하는 경우 `new()`로 개별 인스턴스를 생성해야 할 것임.

## Mode
`mode`를 `production`, `developement`, `none` 등의 값으로 정의하면 각각의 환경에 맞게 번들링 과정을 최적화한다. 기본 값은 `production`임.

## Browser Compatibility
ES5가 지원되는 브라우저는 모두 지원함. (IE8 이하 제외)
`Promise`가 필요함

## Environment
Node.js 8.x 이상에서 동작 가능함