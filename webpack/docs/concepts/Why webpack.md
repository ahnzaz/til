# [Why webpack](https://webpack.js.org/concepts/why-webpack/)
Bundler가 없었던 시절의 script는 아래와 같이 동작하였다.

- 필요한 기능마다 별도의 js file을 로드 - 네트워크 병목현상이 심함
- 아주 커다란 js file을 사용 - 코드 사용성, 가독성, 유지 관리 등등이 엉망

## IIFE's Immeidiately invoked function expressions
IIFE를 통해 scope 걱정 없이 library를 구성하는 것은 좋았지만 필요한 기능만을 추출하려고 한다면 어떤가? 단 하나의 기능을 위해서 `lodash` library 전체를 로드해야 했나? treeshaking은 어떻게 할것인가?

## Birth of Javascript MOdules happened thanks to Node.js
Node.js와 CommonJS의 등장 덕분에 브라우저 밖 환경에서 javascript를 다룰 수 있게 되었고, 모듈화와 번들링의 필요성이 대두되어 webpack이 등장할 수 있게 되었다.

## npm + Node.js + modules -- mass distribution
CommonJS는 브라우저에서 지원하지 않는다. 때문에 Webpack, browserify같은 번들러가 필요하다.

## ESM - ECMAScript Modules
ES에서 module을 지원 예정이다.

## Automati Dependency Collection
GOogle Closure compiler를 포함한 구형 태스크 러너는 의존성을 명시적으로 선언해야 한다. webpack같은 번들러는 의존성을 자동으로 탐지한다.

## Wouldn't it be nice...
ESM이 도입되기 전까지 webpack을 열심히 쓰자.