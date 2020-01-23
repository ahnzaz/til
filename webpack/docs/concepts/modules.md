# [modules](https://webpack.js.org/concepts/modules/)
modular programming에서 개발자는 module이라 불리는 기능 단위 chunk로 프로그램을 분리해야 한다.

각 모듈은 전체 프로그램 내에서 일관된 설계와 목적을 가져야 하며 단일한 추상화와 캡슐화되어 있어야 한다.

Node.js는 이러한 모듈식 프로그래밍을 적극적으로 도입/지원하는데 반해 웹에서의 모듈화는 더디게 진행되어 왔다. 때문에 이를 지원하는 다양한 모듈 시스템이 있었고 webpack은 이러한 상황에서 출발하였다.

## What is a webpack Module
Node.js module과 다르게 webpack module은 의존성을 다양하게 표현할 수 있다.

- ES2015 `import` 구문
- CommonJS `require()` 구문
- AMD `define`, `require` 구문
- css/sass/less file 내 `@import` 구문
- 스타일시트의 `url(...)`, HTML의 `<img src=...>`.

## Supported Module Types
웹팩은 다양한 언어와 loader를 통한 전처리기에서 작성한 모듈을 지원한다. *Loader*는 javascript가 아닌 모듈을 어떻게 다루어야 할지, 어떻게 번들링할지 정의한다. webpack community에서는 다양한 언어를 위한 loader를 공개하고 있다.
- `CoffeScript`
- `TypeScript`
- `ESNExt(Babel)`
- `Sass`
- `Less`
- `Stylus`
- `Elm`

## Futher Reading
[JavaScript Module System Showdown](https://auth0.com/blog/javascript-module-systems-showdown/)