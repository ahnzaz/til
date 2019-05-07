# Compiler option
https://www.typescriptlang.org/docs/handbook/compiler-options.html
Compiler option에 대해 알아낸 정보들.

## module:string
Specify module code generation. Compile된 코드가 module을 다루는 방식을 정의한다.
- target === "ES3" | "ES5" ? "CommonJS" : "ES6"
- Possible value : "None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015", "ESNext"
- "--outFile" 지정 시 "AMD", "System만 가능하다.
- "ES6", "ES2015"는 target이 "ES5" 이하 일 경우에만 가능하다.

### Issue
"commonjs"로 지정하지 않으니 node_module의 module들은 찾을 수 없다고 compiler error가 뜬다.
해당 모듈이 typescript의 type을 지원하지 않기 때문인가 싶기도 한데 vue의 내부를 뒤져보니 types를 지원한다. 그럼 문제가 뭐지?

webpack의 external option처럼 외부 의존성의 경우 compile에서 스킵하려면 어떻게 해야 하지?