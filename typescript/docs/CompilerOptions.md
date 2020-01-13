# Compiler option
https://www.typescriptlang.org/docs/handbook/compiler-options.html
Compiler option에 대해 알아낸 정보들.

## module:string
Specify module code generation. Compile된 코드가 module을 다루는 방식을 정의한다.
- target === "ES3" | "ES5" ? "CommonJS" : "ES6"
- Possible value : "None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015", "ESNext"
- "--outFile" 지정 시 "AMD", "System만 가능하다.
- "ES6", "ES2015"는 target이 "ES5" 이하 일 경우에만 가능하다.

## --downlevelIteration
16bytes unicode가 포함된 string을 `for...of` iteration할 때 `target`을 `es3, es5`로 잡게 되면 제대로 된 code point를 참조하지 못해 하나의 character가 쪼개지는 문제점이 있다.

이를 해결하기 위해 typescript는 ``downlevelIteration` flag를 도입하여 `for...of` iteration을 올바르게 지원할 수 있는 옵션을 제공한다.

해당 플래그를 포함하여 compile시 `__value` 같은 helper function을 추가하게 되는데 컴파일된 개별 파일마다 helper function이 산재해 있는 것은 꽤나 큰 용량 낭비다.

[`tslib`](https://www.npmjs.com/package/tslib) package를 통해 typescript helper function을 동적으로 import할 수 있다. [사용법](https://www.npmjs.com/package/tslib#usage)


### Issue
"commonjs"로 지정하지 않으니 node_module의 module들은 찾을 수 없다고 compiler error가 뜬다.
해당 모듈이 typescript의 type을 지원하지 않기 때문인가 싶기도 한데 vue의 내부를 뒤져보니 types를 지원한다. 그럼 문제가 뭐지?
moduleResoltion을 "classic"이 아닌 "node"로 지정하니 위 이슈는 해결된다.

ts-loader를 통해서 compile시 module resolve가 되지 않는 이슈는 resolve.extension의 확장자에서 .을 빼먹어서 그렇네.

webpack의 external option처럼 외부 의존성의 경우 compile에서 스킵하려면 어떻게 해야 하지?