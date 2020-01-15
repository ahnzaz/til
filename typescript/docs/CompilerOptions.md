# [Compiler option](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
Compiler option에 대해 알아낸 정보들.

## `allowJs`
|Option|Type|Default|Description|
|--|--|--|--|
|--allowJs|boolean|false|Allow JavaScript file to be compiled|

.js file도 compile에 포함되게 한다.

- [ ] 일반적인 code는 컴파일 할 거리가 없으므로 변화가 없을 것으로 예상
- [ ] module 선언 등은 `module` option에 따라 달라질 듯

## `allowSyntheticDefaultImports`
|Option|Type|Default|Description|
|--|--|--|--|
|--allowSynttheticDefaultImports|boolean|module === "system" or --esModuleInterop|Allow default imports from module with no default export. This does not affect code emit, just typechecking|

Default export가 없는 module에서 default import를 허용할지 여부.

- [ ] 어떤 의미인지 sample code를 통해 알아봐야 함

## `allowUmdGlobalAccess`
|Option|Type|Default|Description|
|--|--|--|--|
|--allowUmdGlobalAccess|boolean|false|Allow accessing UMD globals from module|

Module 내부에서 UMD global에 억세스 허용할지 여부를 결정

- [ ] compile code에 어떤 변화가 발생하는지 확인 필요

## `allowUnreachableCode`
|Option|Type|Default|Description|
|--|--|--|--|
|--allowUnreachableCode|boolean|false|Do not report errors on unreachable code|

unreachable code를 컴파일 시 허용할지 결정

- [ ] 아마 vsc IDE 차원에서 에러가 발생할 듯

## `allowUnusedLabels`
|Option|Type|Default|Description|
|--|--|--|--|
|--allowUnusedLabels|boolean|false|Do not report errors on unused labels|

- [ ] label이 뭐지?

## `alwaysStrict`
|Option|Type|Default|Description|
|--|--|--|--|
|--alwaysStrict|boolean|false|Parse in strict mode and emit "use strict" for each source file|

- [ ] "strict mode"시 어떤 효과가 발생하는지 아직 확실하게 모름 알아둬야 한다.

## `baseUrl`
|Option|Type|Default|Description|
|--|--|--|--|
|--baseUrl|string||Base directory to resolve non-relative module names.|

상대경로가 아닌 module 선언을 참조할 base directory.

- [ ] `node_modules`를 이걸 통해 참조할 수도 있나?

## `build`
|Option|Type|Default|Description|
|--|--|--|--|
|--build|boolean|false|Builds this project and all of its dependencies specified by Project references. Note that this flag is not compatible with others on this page.|

`tsc --build`로 build 수행. 다른 flag와 혼용 될 수 없고 `tsconfig.json` 파일을 참조하여 빌드 수행

## `charset`
|Option|Type|Default|Description|
|--|--|--|--|
|--charset|string|"utf-8"|The character set of the input files|

입력 파일의 캐릭터 셋

## `checkJs`
|Option|Type|Default|Description|
|--|--|--|--|
|--checkJs|boolean|false|Report errors in `.js` files. Use in conjunction with `--allowJs`.|

`allowJs === true`인 경우 `.js` 파일 내의 에러도 리포트한다.

## `composite`
|Option|Type|Default|Description|
|--|--|--|--|
|--composite|boolean|true|Ensure TypesScript can determine where to find the outputs of the referenced project to compile project.|

Typescript가 referenced project를 어디서 찾을 지 결정할 수 있게 한다.

- [ ] 뭔 소린지? referenced project가 뭔지 알아볼 필요 있음

## `declaration`
|Option|Type|Default|Description|
|--|--|--|--|
|--declaration|boolean|true|Generates correspoding `.d.ts` file|

알맞은 `.d.ts` 파일 생성.

- [ ] `.d.ts` file이 어떤 역할인지 아직 명확히 이해하지 못했음

## `declarationDir`
|Option|Type|Default|Description|
|--|--|--|--|
|--declarationDir|string||output directory for generated declarations files|

`.d.ts` 파일의 생성 위치 결정

## `diagnostics`
|Option|Type|Default|Description|
|--|--|--|--|
|--diagnostics|boolean|false|Show diagnostic information|

진단 결과 출력

- [ ] 어떤 효과가 있는지 확인 필요. 아마 compile 시 console output 일듯?

## `disableSizeLimit`
|Option|Type|Default|Description|
|--|--|--|--|
|--disableSizeLimit|boolean|false|Disable size limitation on JavaScript project|

Javascript project의 크기 제한 해제

- [ ] JavaScript project에 크기 제한이 있었나 보네. 관련 내용 파악할 것

## `downlevelIteration`
|Option|Type|Default|Description|
|--|--|--|--|
|--downlevelIteration|boolean|false|Provide full support for iterables in `for...of`, spread and destructuring when targeting ES5 or ES3|

Spread/destructuring 시 `for...of` 구문이 ES5/ES3 환경으로 제대로 컴파일 되도록 함. 켤 경우 코드 연산량 증가. 끌 경우 unicode 등 일부 데이터가 제대로 iteration 되지 않음.

- [ ] 영향 받는 케이스 더 확인할 것
- [ ] 정확히 어떻게 iteration이 수행되는지 코드레벨로 확인 필요

## `emitBOM`
|Option|Type|Default|Description|
|--|--|--|--|
|--emitBOM|boolean|false|Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files|

결과물 파일 처음에 BOM 삽입

- [ ] BOM 값 뭔지 확인 필요


## `emitDeclarationOnly`
|Option|Type|Default|Description|
|--|--|--|--|
|--emitDeclarationOnly|boolean|false|Only emit `.d.ts` declarations files|

`.d.ts` file만 생성함

- [ ] 결과물 확인 필요

## emitDecoratorMetadata
|Option|Type|Default|Description|
|--|--|--|--|
|--emitDecoratorMetadata|boolean|false|Emit design-type metadata for decorated declarations in source. See [issue #2577](https://github.com/Microsoft/TypeScript/issues/2577) for details|

Decorator 선언부의 metadata emit

- [ ] metadata가 뭔지 확인 필요

## esModuleInterop
|Option|Type|Default|Description|
|--|--|--|--|
|--esmoduleInterop|boolean|false|Emit `__importStar` and `__importDefault` helpers for runtime babel ecosystem compatibility and enable `--allowSyntheticDefaultImports` for typesystem compatibility|

`__importStar` 및 `__importDefault` helper를 추가하여 babel 환경과 호환하고 typesystem 호환을 위해 `--allowSyntehticDefaultImports` 옵션을 켬.

- [ ] babel과 어떤 호환성을 갖추는지 확인 필요
- [ ] typesystem이 정확히 무엇인지 확인 필요. typescript system인가?

## experimentalDecorators
|Option|Type|Default|Description|
|--|--|--|--|
|--experimentalDecorators|boolean|false|Enables experimental support for ES decorators|

decorator 사용함

## extendedDiagnostics
|Option|Type|Default|Description|
|--|--|--|--|
|--extendedDiagnostics|boolean|false|Show verbose diagnostic information|

Diagnostic을 더 자세히 표현

- [ ] 마찬가지로 어떤 정보가 추가 제공되는지 확인 필요

## forceConsistentCasingInFileName
|Option|Type|Default|Description|
|--|--|--|--|
|--forceconsistentCasingInFileNames|boolean|false|Disallow inconsistently-cased to the same file|

동일한 파일에 서로 다른 case를 통해 import한 경우 방지

## generateCpuProfile
|Option|Type|Default|Description|
|--|--|--|--|
|--generateCpuProfile|string|profile.cpuprofile|Generates a cpu profiles at the given path. Passing an existing directory name instead of a file path will cause a timestamp-named profile to be generated in that directory instead|

주어진 디렉토리에 cpu profile을 기록함

- [ ] 어떤 내용이 담겨있는지 확인 필요

|Option|Type|Default|Description|
|--|--|--|--|
|--|type|default|desc|



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