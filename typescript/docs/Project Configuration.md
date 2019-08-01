# [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
## Overview
```tsconfig.json``` 파일이 있다는 것은 현재 디렉토리가 typescript project의 root directory라는 의미입니다. tsconfig.json파일은 컴파일에 필요한 option들을 가지고 있으며 컴파일은 아래의 방법으로 이루어집니다.

## Using tsconfig.json
- input file없이 ```tsc```를 실행하면 현재 디렉토리부터 상위 디렉토리 체인으로 tsconfig.json 파일을 찾습니다.
- input file없이 ```tsc --project/-p``` 옵션은 tsconfig.json파일의 위치를 넘겨줍니다.

## Examples
- Using the "files" property
```json
{
    "compilerOptions":{
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "sourceMap": true
    },
    "files": [
        "core.ts",
        "sys.ts",
        "types.ts",
        "scanner.ts",
        "parser.ts",
        "utilities.ts",
        "binder.ts",
        "checker.ts",
        "emitter.ts",
        "program.ts",
        "commandLineParser.ts",
        "tsc.ts",
        "diagnosticInformationMap.generated.ts"
    ]
}
```

- "include", "exclude" property를 사용하는 예제
```json
{
    "compilerOptions": {
        "module": "system",
        "noImplicitAny": true,
        "removeComments": true,
        "preserveConstEnums": true,
        "outFile": "../../built/local/tsc.js",
        "sourceMap": true
    },
    "include": [
        "src/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}
```
위와 같이 단일 ```outFile```로 compile하니 module형태로 번들링된 파일이 떨어진다.

## Details
```compilerOption``` 는 컴파일 옵션이다.
```files``` property는 상대/절대 경로 파일 목록을 전달한다. ```include```, ```exclude``` property는 glob-like 패턴을 받는다. 
- * 0+
- ? single character
- **/ 하위 디렉토리 재귀적 참조
glob-pattern에 ```*```, ```.*```를 작성하는 경우 지원하는 확장자만 받아들인다. 기본적으로 *.ts, *.tsx, ```allowJs```이 true인 경우 .js, .jsx

include와 file둘 다 없는 경우 기본적으로 excluede를 제외한 현재/하위 디렉토리의 모든 ts file을 compile한다. allowJs true인 경우 js파일도.

files와 include가 정의되어 있는 경우 둘 다 union으로 include한다.
outdir에 선언된 디렉토리와 exclude 파일은 제외한다.

include 보다는 exclude가 우선하며 exclude보다는 files가 우선한다. ```exclude``` property는 기본값으로 ```node_modules``` ```bower_components```, ```jspm_packages``` ```<outdir>```를 무시한다.

files와 include에 속한 파일들이 참조한 파일들도 모두 포함된다. A가 B를 참조할 경우 A가 exclude되지 않는 한 B를 제외할 방법은 없다. (exclude에 넣어도 된다는 의미인듯?)

결과물이 될 수 있는 파일은 include하지 않는다. index.ts를 include할 경우 index.d.ts나 index.js는 exclude된다.

tsconfig.json파일은 비어 있을 수 있다. 모든 값이 기본값이 적용된다.

### @types, typeRoots and types
기본값으로 모든 가시 "@types" 패키지가 컴파일에 포함된다. 상위에 있는 모든 ```node_modules/@types```도 가시범위에 포함된다.

```typeRoots```가 지정되어 있을 경우 해당 디렉토리 이하의 값만 include된다.
```typescript
{
    "compilerOptions":{
        "typeRoots" : ["./typings"],
    }
}
```
위 설정은 ```./typings``` package만 참조하고 ./node_modules/@types는 무시한다.

types option이 지정된 경우 해당 패키지만 include한다.
```typescript
{
    "compilerOptions":{
        "types" : ["node", "lodash", "express"]
    }
}
```
위 설정은 ./node_module/@types/node, ./node_modules/@types/lodash, ./node_modules/@types/express만 include한다.

**types package는 index.d.ts파일을 가진 디렉토리 또는 ```types``` field가 있는 package.json 파일이 포함된 디렉토리이다.**

```"types":[]```를 정의하여 ```@types``` 패키지의 자동 include를 막을 수 있다.

유의해야 할 점은 자동 include는 파일을 global 선언으로 사용한 경우에만 중요하다는 것이다. (module 선언으로는 의미없음) ```import "foo"```로 module을 찾는 경우 여전히 typescript는 node_modules & node_modules/@types를 찾아다닐 것임.

### Configuration inheritance with ```extends```
tsconfig.json 파일은 extends 키워드로 다른 속성을 상속받을 수 있다. extends property는 compilerOptions, files등과 함께 최상위 property로 상속 받을 다른 configuration 파일의 패스를 전달한다.

상위 config가 먼저 로드되고 상속받은 config 파일이 override하며 순환참조가 발생할 경우 에러난다.

상대 경로로 참조된 파일들은 원래 있던 config 파일에서 상대 경로로 참조된다.

configs/base.json
```typescript
{
    compilerOptions : {
        noImplicityAny : true,
        strictNullChecks : true,
    }
}
```

tsconfig.json
```typescript
{
    "extends" : "./configs/base.json",
    "files":[
        "main.ts",
        "supplemental.ts"
    ]
}
```

tsconfig.nostrictnull.json
```typescript
{
    extends : "./tsconfig",
    compilerOptions:{
        "strictNullChecks": false,
    }
}
```

### comileOnSave
```compileOnSave``` property는 IDE로 하여금 저장할때마다 compile하도록 시그널을 날린다.

### Schema
[tsconfig.json schema](http://json.schemastore.org/tsconfig)