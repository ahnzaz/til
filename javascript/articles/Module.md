# javascript Module system
# Background
js 언어가 Browser 환경에서 벗어나 다양한 플랫폼으로 확장하기 시작하면서 기존 언어에 비해 부족한 점을 개선할 필요가 있었다.

C/Java등의 메이저 언어들은 모두 코드의 모듈화를 지원하고 있는데 js는 언어 자체적으로 이를 지원하고 있지는 않은 상태였다.

대신에 Browser의 `<script>` 태그를 통해 모듈화를 간접적으로 지원하고 있었는데 이는 js가 태생적으로 HTML 페이지의 보조적인 존재이며
browser 환경 내에서 동작한다는 가정 하에 설계되었기 때문일 것이다.

언어적 차원에서 module 지원의 필요성이 대두되었고 2009년 Mozilla의 엔지니어인 Kevin Dangoor가 최초 `ServerJS`라 불리던 `commonJS`의 원형이 되는 모듈 시스템 스펙을 발표하면서 본격적인 module 스펙이 논의되기 시작한다.

# CommonJS
## History
- 2009-01-29 [Kevin dangoor가 그의 블로그에서 처음 js가 server-side에서 동작하기 위해 갖추어야 할 것들을 제시하였다.](https://www.blueskyonmars.com/2009/01/29/what-server-side-javascript-needs/)
- 2009-01 ServerJS라는 이름의 그룹을 결성하였다.
- 2009-03 CommonJS API 0.1을 제정
- 2009-04 JSConf에서 처음으로 몇 개의 구현체를 발표함
- 2009-08 더 일반적인 환경을 강조하기 위해 그룹의 이름을 CommonJS로 변경함

[출처](http://www.commonjs.org/history/)

## Spec
- Module/1.1 specification - http://wiki.commonjs.org/wiki/Modules/1.1
### Module context
Module 내부에 `require`라는 function 형태의 자유 변수가 존재한다.
1. `require`는 모듈 식별자를 인자로 받아들인다.
2. `require`의 반환값은 외부 모듈이 export한 인터페이스이다.
3. 외부 모듈이 의존성을 갖는다면 의존성 해결을 위해 필요한 시간 때문에 외부 모듈의 실행이 완료되지 않았을 수 있다. 그러나 적어도 exported API는 현재 모듈이 실행되기 이전 외부 모듈이 준비한 export는 포함하여야 한다.
4. 요구 받은 모듈이 return 할 수 없다면 `require`은 error를 던져야 한다.
5. `require` function은 `main` property를 가질 수 있는데 이는 메인 프로그램의 `module` property와 동일한 객체를 바라보고 있다.
6. `require` function은 `path` property를 가질 수 있는데, 아래와 같은 특징을 지닌다.
   1. tbd;

Module 내부에 API를 노출하기 위한 `export` object가 존재한다.
1. 모듈은 `export` object를 반드시 exporting을 위한 용도로만 사용해야 한다.

Module 내부에 `module` object가 존재한다.
1. `id` read-only property가 존재한다. 각 모듈의 구분자로써 다른 모듈에 전달할 수 있으며 오리지널 모듈을 반환하도록 요구할 수 있다.
2. `uri` module이 생성된 시점에서 완전히 구성된 URI 값을 가지고 있다.


### Module identifier
1. 모듈 식별자는 slash('/')로 구분된 'term'으로 구성된 문자열이다.
2. 'term'은 camelCase, ".", ".."이다.
3. `.js` 등의 파일 확장자를 가져선 안된다.
4. 상대/절대적일 수 있으며 상대적 식별자는 ".", ".."로 시작하여야 한다.
5. 상대적 식별자는 `require`가 작성 및 호출된 곳의 식별자로부터 상대적이여야 합니다.

### Unspecified
아래 부분은 스펙에서 정의하지 않고 있습니다.
1. 모듈을 db, file system, factory function, link library 등 어느곳에 저장할지
2. 모듈 식별자 분석을 위해 module loader에서 `PATH`를 지원할지

### Sample
```javascript
// math.js
exports.add = function(){
    var sum = 0, i=0, args = arguments, l = arg.length;
    while(i < l){
        sum += args[i++];
    }
    
    return sum;
}

// increment.js
var add = require('math').add;
exports.increment = function(val){
    return add(val, 1);
}

// program.js
var inc = require('increment').increment;
var a = 1;
inc(a); // 2

module.id = "program"
```
## Implementation
- [RequireJS](https://requirejs.org/)
## Application
## Reference
- Official websites : http://www.commonjs.org/
- Official wiki pages : http://wiki.commonjs.org/wiki/CommonJS
- Official repository : https://github.com/commonjs/commonjs

# AMD
## History
CommonJS는 Server-side에서는 훌륭한 module loading spec이었지만 client-side의 async module 요구사항을 완벽하게 반영할 수 없었다. 이에 반박한 그룹의 일부가 떨어져 나가 별도로 제정된 스펙이 AMD이다. AMD는 client/server에 관계없이 모듈을 async 하게 호출 할 수 있는 스펙에 기반하였으며 양쪽 모두에서 동작하는 것을 목표료 하였다.
## Spec
### `define` function
`define`이라는 이름의 전역 자유 변수를 정의하며 function signature는 아래와 같다.
`define(id?, dependencies?, factory)`

#### id
정의하고자 하는 module의 id를 지정한다. optional하며 사용한다면 전역 레벨에서 절대적인 값을 가져야 한다.

#### dependencies
현재 모듈을 정의하기 위해서 의존성을 갖는 모듈을 열거합니다. 의존성 모듈은 factory로 전달되어 현재 모듈을 정의하는데 사용합니다.
의존성 모듈의 id는 상대적일 수 있습니다. 현재 모듈에 대해서 상대 참조로 의존성을 열거할 때 사용합니다.
의존성 모듈 목록에 `require`, `exports`, `module`이 정의되어 있다면 이는 CommonJS spec에 따른 해당 변수들을 가져오게 됩니다.
dependencies 값은 optional하며 생략될 경우 `["require", "exports", "module"]`을 기본값으로 사용합니다. factory funtion의 인자수가 3보다 적을 경우 loader가 인자수에 맞게 값을 선택하여 전달할 수 있습니다.

#### factory
모듈을 정의할 때 수행하는 factory입니다. function이라면 반드시 한번 호출되어야 하며, 객체라면 exported value로 할당해야 합니다.
factory function이 값을 반환한다면 module의 exporting value로 할당해야 합니다.

dependencies argument가 선언되어 있다면 module loader는 factory function의 의존성을 검사해서는 안된다.

### defind.amd property
구현체가 여러가지 정보를 표시할 수 있게 하는 global property

## Example
### Using require and exports
Sets up the module with ID of "alpha", that uses 
```javascript
define("alpha", ["require", "exports", "beta"], function(require, exports, beta){
    exports.verb = function (){
        return beta.verb();
        // or
        return require("beta").verb();
    }
})
```

## Implementation
### require
https://github.com/amdjs/amdjs-api/blob/master/require.md


## Application
## Reference
- [Offical repository](https://github.com/amdjs/amdjs-api)

# ES6 module
## History
TC39 자체적으로도 모듈을 표준화하려는 작업이 있었고 그 결과물이 ES6의 module로 제정되었다.

## Spec
### [export](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export)
- named export : 
  - 식별자를 export할 수 있다.
  - 한 모듈에서 여러 개 export 가능
  - 여러 값을 export할 때 유용함.
  - 가져갈 때에는 동일한 이름으로 가져가야 함

- default export
  - 식별자가 없이도 export 할 수 있다.
  - 한 모듈에서 하나만 export 가능
  - 가져올 때 아무 이름으로 변경 가능

```javascript
// Export identifiers
export let name1, name2, ..., nameN;
export let name1 = ..., name2 = ... ;
export function functionName(){};
export class ClassName{};

// Export as alias
export { name1, name2, ..., nameN};
export { variable1 as name1, variable2 as name2, ..., nameN};

// Destructing하여 export
export const {name1, name2:bar} = o;

// Default export
export default expression;
export default function (){}; // Also class, function*
export default function name1(){} // Also class, function*
export { name1 as default, ... };

// Combine module
export * from ...;
export * as name1 from ...;
export {name1, name2, ...} from ...;
export { import as name1, import2 as name2, ...} from ...;
export {default} from ...;

```

### [import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
다른 모듈에서 내보낸 바인딩을 가져올 때 사용함
- html 안에서 작성한 script는 `import`를 사용 불가능
- `<script>` 태그의 `nomodule` 속성을 사용해 하위 호환 가능
  - module을 지원하는 브라우저는 해당 태그를 사용하지 않음
  - module을 지원하지 못하는 브라우저는 해당 태그를 통해 구형으로 정의된 script 로드 가능

```javascript
import defaultExport from "module-name";
import * as name from "module-name";
import { export1 } from "module-name";
import { export1 as alias1 } from "module-name";
import { export1, export2 } from "module-name";
import { foo, bar } from "module-name/path/to/specific/un-exported/file";
import defaultExport, {export1 [, [ ... ] ]} from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import("module-name");
```

## Implementation
- ES6 스펙을 구현하고 있는 브라우저
- NodeJS에서도 실험적 기능으로(`.mjs` 확장자) 지원 중
## Application
## 비직관적 동작들
- module의 local scope는 module 최초 load시 한번만 수행되며 다른 곳에서 import에는 이미 export된 값들이 재활용된다.


# System
## History
Canopy tax라는 곳에서 지원하고 있는 dynamic module loader system.
AMD/CommonJS, ES6 module 그 어느것과도 다른 독자적인 module spec.
정확히 어떤 히스토리를 가지고 있는지 잘 모르겠음. 언급도 많이 되질 않는 걸 봐선 범용적으로 쓰이는 시스템은 아닌 듯
## Spec
## Implementation
## Application
## Reference
- [Official github repo](https://github.com/systemjs/systemjs)

# UMD

## History
js module spec이 여러개 난립하자 이를 통합하여 처리할 수 있는 design patten의 필요성이 대두되었고 이를 해결하기 위해 Universal module definition이 등장하였다.
Client/Server side 무관하게 모든 module loader 시스템에 대응하는 것을 목표로 개발하였다.

## Spec
- CommonJS의 `require`/`import`, AMD의 `define` object를 runtime에 체크하여 module loader 환경을 파악한 뒤 해당 환경에 맞는 module definition을 수행하는 design pattern이다.

## Implementation
- Webpack은?
- Typescript의 compilerOption 중 `module`을 `umd` 값으로 세팅하면 UMD pattern이 적용 된 module로 컴파일 한다.

## Application

### Reference
- [Official github repo](https://github.com/umdjs/umd)
