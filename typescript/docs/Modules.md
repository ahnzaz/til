# [Modules](https://www.typescriptlang.org/docs/handbook/modules.html)
- Internal module => namespace
- External modules => module
```module {``` equals to ``` namespace {```

## Introduction
EMCA2015부터 module 개념이 javascript에 도입되었으며 typescript 역시 이 개념을 공유한다.

module은 독자적인 실행 scope를 가지고 ```export``` 구문을 통해 명시적으로 export 되지 않는 한 외부에 노출되지 않는다.

반대로 module에서 export된 변수, 클래스, function, interface 등 무엇이든지 사용하기 위해서는 import로 불러와야 한다.

모듈은 선언적이며 file level에서 import, export 구문으로 이루어진다.

모듈은 모듈 로더를 통해 import한다. 유명한 module loader로는 CommonJS module을 위한 Node.JS의 로더, 웹앱에서 사용하는 AMD Module을 위한 RequireJS 로더가 있다.

타입스크립트에서 import, export 구문이 있는 파일은 모듈로 취급되며 없는 파일은 global scope의 스크립트로 취급된다.

## Export

## import

## Import side-effect only
module export 없이 global scope로만 동작하는 script 들은 ```import 'extra.js``` 형식으로 import 하여 쓸 수 있다.

### Code Generation for Modules

### Working with other javascript libraries
### Ambient module
```typescript
declare module "url"{
    export interface Url{
        protocol?:string;
        hostname?:string;
        pathname?:string;
    }

    export function parse(urlStr:string, pareQueryString?:string, slashesDenoteHost?):Url;
}

declare module "path"{
    export function normalize(p:string):string;
    export function join(...paths:any[]):string;
    export var sep:string;
}
```

#### Wild card module declaration
non-javascript content를 import 하기 위한 모듈 선언문
```typescript
declare module 'xml!*'{
    const content:string;
    export default content
}

import xmlDoc from 'xml!./vast.xml';
xmlDoc.
```

### [Guidance for structuring modules](https://www.typescriptlang.org/docs/handbook/modules.html#guidance-for-structuring-modules)