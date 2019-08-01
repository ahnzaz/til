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