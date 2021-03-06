# [Compiler option](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
Compiler option에 대해 알아낸 정보들.

## `allowJs`
| Option    | Type    | Default | Description                          |
| --------- | ------- | ------- | ------------------------------------ |
| --allowJs | boolean | false   | Allow JavaScript file to be compiled |

.js file도 compile에 포함되게 한다.

- [x] 일반적인 code는 컴파일 할 거리가 없으므로 변화가 없을 것으로 예상
  - Target에 따라서 compile 됨
- [x] module 선언 등은 `module` option에 따라 달라질 듯
  - ESModule은 `amd`, `commonjs`등으로 변환되나 이미 `commonjs`로 되어 있는건 변하지 않는 듯?

## `allowSyntheticDefaultImports`
| Option                          | Type    | Default                                  | Description                                                                                                 |
| ------------------------------- | ------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| --allowSynttheticDefaultImports | boolean | module === "system" or --esModuleInterop | Allow default imports from module with no default export. This does not affect code emit, just typechecking |

Default export가 없는 module에서 default import를 허용할지 여부.

- [x] 어떤 의미인지 sample code를 통해 알아봐야 함
  - default export가 없는 경우 export 한 identifier들을 member field로 가지는 object를 default export함.

## `allowUmdGlobalAccess`
| Option                 | Type    | Default | Description                             |
| ---------------------- | ------- | ------- | --------------------------------------- |
| --allowUmdGlobalAccess | boolean | false   | Allow accessing UMD globals from module |

Module 내부에서 UMD global에 억세스 허용할지 여부를 결정

- [ ] compile code에 어떤 변화가 발생하는지 확인 필요
  - 모르겠다.

## `allowUnreachableCode`
| Option                 | Type    | Default | Description                              |
| ---------------------- | ------- | ------- | ---------------------------------------- |
| --allowUnreachableCode | boolean | false   | Do not report errors on unreachable code |

unreachable code를 컴파일 시 허용할지 결정

- [ ] 아마 vsc IDE 차원에서 에러가 발생할 듯

## `allowUnusedLabels`
| Option              | Type    | Default | Description                           |
| ------------------- | ------- | ------- | ------------------------------------- |
| --allowUnusedLabels | boolean | false   | Do not report errors on unused labels |

- [x] label:for loop에 붙이는 이름

## `alwaysStrict`
| Option         | Type    | Default | Description                                                     |
| -------------- | ------- | ------- | --------------------------------------------------------------- |
| --alwaysStrict | boolean | false   | Parse in strict mode and emit "use strict" for each source file |

- [ ] "strict mode"시 어떤 효과가 발생하는지 아직 확실하게 모름 알아둬야 한다.

## `baseUrl`
| Option    | Type   | Default | Description                                          |
| --------- | ------ | ------- | ---------------------------------------------------- |
| --baseUrl | string |         | Base directory to resolve non-relative module names. |

상대경로가 아닌 module 선언을 참조할 base directory.

- [ ] `node_modules`를 이걸 통해 참조할 수도 있나?

## `build`
| Option  | Type    | Default | Description                                                                                                                                      |
| ------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| --build | boolean | false   | Builds this project and all of its dependencies specified by Project references. Note that this flag is not compatible with others on this page. |

`tsc --build`로 build 수행. 다른 flag와 혼용 될 수 없고 `tsconfig.json` 파일을 참조하여 빌드 수행

## `charset`
| Option    | Type   | Default | Description                          |
| --------- | ------ | ------- | ------------------------------------ |
| --charset | string | "utf-8" | The character set of the input files |

입력 파일의 캐릭터 셋

## `checkJs`
| Option    | Type    | Default | Description                                                        |
| --------- | ------- | ------- | ------------------------------------------------------------------ |
| --checkJs | boolean | false   | Report errors in `.js` files. Use in conjunction with `--allowJs`. |

`allowJs === true`인 경우 `.js` 파일 내의 에러도 리포트한다.

## `composite`
| Option      | Type    | Default | Description                                                                                              |
| ----------- | ------- | ------- | -------------------------------------------------------------------------------------------------------- |
| --composite | boolean | true    | Ensure TypesScript can determine where to find the outputs of the referenced project to compile project. |

Typescript가 referenced project를 어디서 찾을 지 결정할 수 있게 한다.

- [ ] 뭔 소린지? referenced project가 뭔지 알아볼 필요 있음

## `declaration`
| Option        | Type    | Default | Description                         |
| ------------- | ------- | ------- | ----------------------------------- |
| --declaration | boolean | true    | Generates correspoding `.d.ts` file |

알맞은 `.d.ts` 파일 생성.

- [ ] `.d.ts` file이 어떤 역할인지 아직 명확히 이해하지 못했음

## `declarationDir`
| Option           | Type   | Default | Description                                       |
| ---------------- | ------ | ------- | ------------------------------------------------- |
| --declarationDir | string |         | output directory for generated declarations files |

`.d.ts` 파일의 생성 위치 결정

## `diagnostics`
| Option        | Type    | Default | Description                 |
| ------------- | ------- | ------- | --------------------------- |
| --diagnostics | boolean | false   | Show diagnostic information |

진단 결과 출력

```
Files:            9
Lines:        24962
Nodes:       112243
Identifiers:  41107
Symbols:      27982
Types:         9294
Memory used: 84694K
I/O read:     0.00s
I/O write:    0.01s
Parse time:   0.30s
Bind time:    0.11s
Check time:   0.68s
Emit time:    0.03s
Total time:   1.12s
```

## `disableSizeLimit`
| Option             | Type    | Default | Description                                   |
| ------------------ | ------- | ------- | --------------------------------------------- |
| --disableSizeLimit | boolean | false   | Disable size limitation on JavaScript project |

Javascript project의 크기 제한 해제

- [x] JavaScript project에 크기 제한이 있었나 보네. 관련 내용 파악할 것
  - tsfile이 아닌 js파일은 전체 20MB의 사이즈 제한이 있음. 그 제한을 해제할 때 사용하는 플래그
  - https://github.com/microsoft/TypeScript/issues/7444#issuecomment-197064666

## `downlevelIteration`
| Option               | Type    | Default | Description                                                                                          |
| -------------------- | ------- | ------- | ---------------------------------------------------------------------------------------------------- |
| --downlevelIteration | boolean | false   | Provide full support for iterables in `for...of`, spread and destructuring when targeting ES5 or ES3 |

Spread/destructuring 시 `for...of` 구문이 ES5/ES3 환경으로 제대로 컴파일 되도록 함. 켤 경우 코드 연산량 증가. 끌 경우 unicode 등 일부 데이터가 제대로 iteration 되지 않음.

- [ ] 영향 받는 케이스 더 확인할 것
- [ ] 정확히 어떻게 iteration이 수행되는지 코드레벨로 확인 필요

16bytes unicode가 포함된 string을 `for...of` iteration할 때 `target`을 `es3, es5`로 잡게 되면 제대로 된 code point를 참조하지 못해 하나의 character가 쪼개지는 문제점이 있다.

이를 해결하기 위해 typescript는 ``downlevelIteration` flag를 도입하여 `for...of` iteration을 올바르게 지원할 수 있는 옵션을 제공한다.

해당 플래그를 포함하여 compile시 `__value` 같은 helper function을 추가하게 되는데 컴파일된 개별 파일마다 helper function이 산재해 있는 것은 꽤나 큰 용량 낭비다.

[`tslib`](https://www.npmjs.com/package/tslib) package를 통해 typescript helper function을 동적으로 import할 수 있다. [사용법](https://www.npmjs.com/package/tslib#usage)

## `emitBOM`
| Option    | Type    | Default | Description                                                         |
| --------- | ------- | ------- | ------------------------------------------------------------------- |
| --emitBOM | boolean | false   | Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files |

결과물 파일 처음에 BOM 삽입

- [x] BOM 값 뭔지 확인 필요
  - `0xEF 0xBB 0xBF`
  - `.ts` file의 구분자가 아니였음.


## `emitDeclarationOnly`
| Option                | Type    | Default | Description                          |
| --------------------- | ------- | ------- | ------------------------------------ |
| --emitDeclarationOnly | boolean | false   | Only emit `.d.ts` declarations files |

`.d.ts` file만 생성함

- [x] 결과물 확인 필요
  - Signature만 선언되어 있는 `.d.ts` 파일만 생성됨
  - `.d.ts` file이 있든 없든 생성됨.

## emitDecoratorMetadata
| Option                  | Type    | Default | Description                                                                                                                                        |
| ----------------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| --emitDecoratorMetadata | boolean | false   | Emit design-type metadata for decorated declarations in source. See [issue #2577](https://github.com/Microsoft/TypeScript/issues/2577) for details |

Decorator 선언부의 metadata emit

- [ ] metadata가 뭔지 확인 필요

## esModuleInterop
| Option            | Type    | Default | Description                                                                                                                                                          |
| ----------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --esmoduleInterop | boolean | false   | Emit `__importStar` and `__importDefault` helpers for runtime babel ecosystem compatibility and enable `--allowSyntheticDefaultImports` for typesystem compatibility |

`__importStar` 및 `__importDefault` helper를 추가하여 babel 환경과 호환하고 typesystem 호환을 위해 `--allowSyntehticDefaultImports` 옵션을 켬.

- [ ] babel과 어떤 호환성을 갖추는지 확인 필요
- [ ] typesystem이 정확히 무엇인지 확인 필요. typescript system인가?

## experimentalDecorators
| Option                   | Type    | Default | Description                                    |
| ------------------------ | ------- | ------- | ---------------------------------------------- |
| --experimentalDecorators | boolean | false   | Enables experimental support for ES decorators |

decorator 사용함

## extendedDiagnostics
| Option                | Type    | Default | Description                         |
| --------------------- | ------- | ------- | ----------------------------------- |
| --extendedDiagnostics | boolean | false   | Show verbose diagnostic information |

Diagnostic을 더 자세히 표현

- [ ] 마찬가지로 어떤 정보가 추가 제공되는지 확인 필요

## forceConsistentCasingInFileName
| Option                             | Type    | Default | Description                                    |
| ---------------------------------- | ------- | ------- | ---------------------------------------------- |
| --forceconsistentCasingInFileNames | boolean | false   | Disallow inconsistently-cased to the same file |

동일한 파일에 서로 다른 case를 통해 import한 경우 방지

## generateCpuProfile
| Option               | Type   | Default            | Description                                                                                                                                                                          |
| -------------------- | ------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| --generateCpuProfile | string | profile.cpuprofile | Generates a cpu profiles at the given path. Passing an existing directory name instead of a file path will cause a timestamp-named profile to be generated in that directory instead |

주어진 디렉토리에 cpu profile을 기록함

- [ ] 어떤 내용이 담겨있는지 확인 필요

## importHelper
| Option          | Type    | Default | Description                                                    |
| --------------- | ------- | ------- | -------------------------------------------------------------- |
| --importHelpers | boolean | false   | Import emit helpers (e.g. __extends, __rest, etc..) from tslib |

`__extends`, `__rest` 같은 `tslib` library의 헬퍼 함수를 import한다.

- [ ] `tslib`에 어떤 helper function이 들어있는지 확인하고 역할도 작성할 것

## incremental
| Option        | Type    | Default                                         | Description                                                                                                                                                        |
| ------------- | ------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| --incremental | boolean | `true` if `composite` is on, `false` otherwise. | Enable incremental compiliation by reading/writing information from prior compilations to a file on dist. This file is controlled by the `--tsBuildInfoFile` flag. |

이전 컴파일에 대한 정보를 기록한 파일을 기반으로 차분 컴파일을 지원한다.

- [ ] compile info file에 어떤 내용이 들어가는지 확인
- [ ] 실제로 incremental compile을 해보면서 동작 확인

## inlineSourceMap
| Option            | Type    | Default | Description                                                          |
| ----------------- | ------- | ------- | -------------------------------------------------------------------- |
| --inlineSourceMap | boolean | false   | Emit a single file with source maps instead of having a searate file |

- sourceMap을 별도로 분리하지 않고 컴파일 된 파일에 포함한다.

## init
| Option | Type | Default | Description                                                         |
| ------ | ---- | ------- | ------------------------------------------------------------------- |
| --init |      |         | Initializes a TypeScript project and creates a `tsconfig.json` file |

Typescript project를 초기화 하고 `tsconfig.json` 파일을 생성

- [ ] 혹시 더 자세하게 설명된 자료 있으면 공부할 것

## isolateModules
| Option           | Type    | Default | Description                                                                                                                                        |
| ---------------- | ------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| --isolateModules | boolean | false   | Perform additional checks to ensure that separate compilation(such as with `transpileModule` or @babel/plugin-transform-typescript) would be safe. |

분리형 컴파일이 안전할 지 추가로 체크한다.

- [ ] 어떤 내용인지 잘 모르겠음. 추가적인 내용 및 동작 확인 필요

## jsx
| Option | Type   | Default    | Description                                                                                                                       |
| ------ | ------ | ---------- | --------------------------------------------------------------------------------------------------------------------------------- |
| --jsx  | string | "preserve" | Support JSX in `.tsx` files:"react", "preserve", "react-native". See [JSX](https://www.typescriptlang.org/docs/handbook/jsx.html) |

`.tsx` file 내의 jsx 문법을 지원한다.

- [ ] 각 옵션들이 어떤 내용인지 확인 필요

## jsxFactory
| Option       | Type   | Default               | Description                                                                                               |
| ------------ | ------ | --------------------- | --------------------------------------------------------------------------------------------------------- |
| --jsxFactory | string | "React.createElement" | Specify the JSX factory function to use when targeting react JSX emit, e.g. `React.createElement` or `h`. |

react jsx를 emit할 때 JSX factory를 지정한다.

- [ ] h가 뭔지 확인 필요

## keyofStringsOnly
| Option             | Type    | Default | Description                                                                  |
| ------------------ | ------- | ------- | ---------------------------------------------------------------------------- |
| --keyofStringsOnly | boolean | false   | Resolve `keyof` to string valued property names only (no numbers or symbols) |

`keyof` 연산자를 문자열을 키로 가지는 값으로만 한정한다. (숫자형, 심볼 제외)

- [ ] 이해는 하겠는데 정확히 어떻게 동작할 지 모르겠음(결과값이). 확인 필요

## useDefineForClassFields
| Option                    | Type    | Default | Description                                          |
| ------------------------- | ------- | ------- | ---------------------------------------------------- |
| --useDefineForClassFields | boolean | false   | Emit class fields with ECMAScript standard semantics |

- Class field를 ECMAScript 표준 방식으로 emit한다.

- [ ] true/false 차이 확인 필요

## lib
| Option | Type     | Default | Description                                              |
| ------ | -------- | ------- | -------------------------------------------------------- |
| --lib  | string[] | default | List of library files to be included in the compilation. |

포함할 library를 선택한다.

- [ ] 모두 알아볼 필요는 없고, 직관적으로 내용을 알 수 없는 library만 확인 필요
- [ ] ScriptHost

## listEmittedFiles
| Option             | Type    | Default | Description                                            |
| ------------------ | ------- | ------- | ------------------------------------------------------ |
| --listEmittedFiles | boolean | false   | Print names of generated files part of the compilation |

emit한 파일들 목록을 출력한다. 그래 이런 옵션이 필요했어.

- [ ] true로 설정 시 출력하는 내용 확인

## listFiles
| Option      | Type    | Default | Description                                  |
| ----------- | ------- | ------- | -------------------------------------------- |
| --listFiles | boolean | false   | Print names of files part of the compilation |

Emit 대상 파일들을 컴파일 과정 도중 출력한다.

- [ ] 위와 어떤 차이가 있는지 확인 필요

## locale
| Option   | Type   | Default             | Description                                           |
| -------- | ------ | ------------------- | ----------------------------------------------------- |
| --locale | string | (platform specific) | The locale to use to show error messages, e.g. en-us. |

에러 메시지를 표기할 언어를 선택한다. 한국어도 가능하네.

- [ ] 한국어로 설정해서 확인 필요

## mapRoot
| Option    | Type   | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------- | ------ | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --mapRoot | string |         | Specifies the location where debugger should locate map files instead of generated locations. User this flag if the .map files will be located at run-time in a different location than the .js files. The location specified will be embedded in the sourceMap to direct the debugger where the map files will be located. This flag will now create the specified  path and generate the map files in that location. instead, creatre a post build step that moves the files to the specified path. |

디버거가 소스맵을 참조할 경로를 따로 지정해야 할 경우 사용

## maxNodeModuleJsDepth
| Option                 | Type   | Default | Description                                                                                                              |
| ---------------------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------------ |
| --maxNodeModuleJsDepth | number | 0       | The maximum dependency depth to search under node_modules and load JavaScript files. only applicapable with `--allowJs`. |

node_modules 하위 javascript file을 몇 번째 깊이까지 탐색할 지 지정

## moduleResolution
| Option             | Type   | Default                                                    | Description                                                                                                                                                                                                                    |
| ------------------ | ------ | ---------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| --moduleResolution | string | module === "AMD" or "System" or "ES6" ? "Classic" : "Node" | Determine how modules get resolve. Either "Node" for Node.js/io.js style resolution, or "Classic". See [Module Resolution documentation](https://www.typescriptlang.org/docs/handbook/module-resolution.html) for more detail. |

모듈 resolve 방식을 결정한다. "Node"로 지정하면 `node_modules` directory를 탐색한다.

## newLine
| Option    | Type   | Default             | Description                                                                                          |
| --------- | ------ | ------------------- | ---------------------------------------------------------------------------------------------------- |
| --newLine | string | (platform specific) | Use the specified end of line sequence to be used when emitting files: "crlf"(window) or "lf"(unix). |

원하는 개행 문자를 emit시에 삽입

## noEmit
| Option   | Type    | Default | Description          |
| -------- | ------- | ------- | -------------------- |
| --noEmit | boolean | false   | Do not emit outputs. |

결과물을 emit하지 않음. 아마 컴파일 테스트나 그런 용도일듯

## --noEmitHelpers
| Option          | Type    | Default | Description                                                                  |
| --------------- | ------- | ------- | ---------------------------------------------------------------------------- |
| --noEmitHelpers | boolean | false   | Do not generate custom helper functions like `__extends` in compiled output. |

custom helper를 emit하지 않음

## noEmitOnError
| Option          | Type    | Default | Description                                      |
| --------------- | ------- | ------- | ------------------------------------------------ |
| --noEmitOnError | boolean | fasle   | Do not emit outputs if any errors were reported. |

Error발생시 emit하지 않음.

## noErrorTruncation
| Option              | Type    | Default | Description                     |
| ------------------- | ------- | ------- | ------------------------------- |
| --noErrorTruncation | boolean | false   | Do not truncate error messages. |

에러 메세지를 줄이지 않음

## noFallthroughCaseInSwitch
Switch 구문에 빠진 case가 있는 경우 에러 발생

## noImplicitAny
암시적 `any` type에 대해 에러 발생

## noImplicitReturns
함수의 모든 경우의 수에서 return 값이 없을 경우 에러 발생

## noImplicitThis
암시적 `any` type으로 `this`를 사용할 경우 에러 발생

## noLib
기본 라이브러리 (`lib.d.ts` file) 인클루드 하지 않음

## noResolve
Compile한 파일에 triple-slash reference 삽입하지 않음

## noStrictGenericChecks
Function type에서 generic signature에 대한 엄격한 검사를 해제

## noUnusedLocals
사용하지 않은 local에 대해 에러

- [ ] local이 뭐지? 로컬 변수인가?

## noUnusedParameters
사용하지 않은 파라미터 에러

## outDir
결과물 directory를 지정

## outFile
결과물 파일을 하나로 결합 컴파일러에 전달된 파일 순으로 순서를 정함

- [ ] [output file order documentation](https://github.com/Microsoft/TypeScript/wiki/FAQ#how-do-i-control-file-ordering-in-combined-output---out-)

## paths
Module 이름과 위치를 참조할 path를 전달

## preserveConstEnums
Const enum 선언을 삭제하지 않음

- [ ] [const enums documentation](https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#94-constant-enum-declarations)

## preserveWatchOutput
Watch mode에서 screen을 클리어 하는 대신 지나간 콘솔 출력물을 남겨둔다.

## pretty
Stylize errors and messages using color and context.
에러와 메시지를 색상으로 보여준다.

- [ ] 해봐야 할듯.

## project
`tsconfig.js` file로 프로젝트를 빌드한다.

- [ ] [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

## removeComments
`/*!`로 시작하는 copyright comment를 제외하고 모든 주석을 제거한다.

## resolveJsonModule
`.json` 확장자가 붙은 모듈을 include한다.

- [ ] 기본값이 false라면 안한다는 말인가?

## rootDir
Input file의 root direction를 지정한다. `--outDir`로 결과물 디렉토리를 조정할 경우에만 사용한다.

## rootDirs
Root folder의 목록이다.

- [ ] [Module resolution documentation](https://www.typescriptlang.org/docs/handbook/module-resolution.html#virtual-directories-with-rootdirs)

## showConfigs
결과물에 실제 적용한 config file을 보여준다.

- [ ] 어떻게 떨어지는 지 확인 필요

## skipLibCheck
Declaration file에서는 타입 체크를 하지 않는다.

## sourceMap
`.map` file을 생성한다.

## sourceRoot
소스 파일이 runtime 위치가 design time과 다를 경우 명시한다. 지정한 위치는 sourceMap에 포함되어 소스 파일이 있는 디버거를 지시함.

## strict
엄격한 타입 체크 플래그를 모두 켠다.

## strictBindCallApply
`bind`, `call`, `apply` method 호출을 엄격하게 체크한다.

- [ ] 뭘 엄격하게 한다는 건지?

## strictFunctionTypes
Function type의 bivariant type check를 해제한다.
- [ ] 샘플코드를 봐야 할듯

## strictPropertyInitialization
undefined가 아닌 class property는 생성자에서 반드시 초기화 해야 한다.
`--strictNullCheck`가 켜져 있어야만 유의미함

## strictNullChecks
`null`과 `undefined`는 해당 타입과 `any` type에만 할당할 수 있다. `undefined`는 `void` type에도 할당 가능

## suppressExcessPropertyErrors
객체 리터럴에 대한 과한 속성 검사를 방지함.

-[ ] 무슨 내용일까.

## target
타겟 ECMAScript version을 명시

`ESNext`는 [ES proposed](https://github.com/tc39/proposals)를 참조

## traceResolution
Module resolution log를 찍는다.

## tsBuildInfoFile
차분 빌드 정보를 담을 파일을 명시

## types
인클루드 할 타입 선언의 목록.

- [ ] [@types](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#types-typeroots-and-types)

## typeRoots
인클루드 할 타입이 담긴 디렉토리의 목록

## version
Compiler 버전 출력

## watch
Watch mode로 빌드. 입력 파일이 변경 할 때마다 빌드를 수행

- [ ] 실제로 해보기


| Option | Type | Default | Description |
| ------ | ---- | ------- | ----------- |
| --     | type | default | desc        |




## module:string
Specify module code generation. Compile된 코드가 module을 다루는 방식을 정의한다.
- target === "ES3" | "ES5" ? "CommonJS" : "ES6"
- Possible value : "None", "CommonJS", "AMD", "System", "UMD", "ES6", "ES2015", "ESNext"
- "--outFile" 지정 시 "AMD", "System만 가능하다.
- "ES6", "ES2015"는 target이 "ES5" 이하 일 경우에만 가능하다.


### Issue
"commonjs"로 지정하지 않으니 node_module의 module들은 찾을 수 없다고 compiler error가 뜬다.
해당 모듈이 typescript의 type을 지원하지 않기 때문인가 싶기도 한데 vue의 내부를 뒤져보니 types를 지원한다. 그럼 문제가 뭐지?
moduleResoltion을 "classic"이 아닌 "node"로 지정하니 위 이슈는 해결된다.

ts-loader를 통해서 compile시 module resolve가 되지 않는 이슈는 resolve.extension의 확장자에서 .을 빼먹어서 그렇네.

webpack의 external option처럼 외부 의존성의 경우 compile에서 스킵하려면 어떻게 해야 하지?