# javascript Module system
## Background
js 언어가 Browser 환경에서 벗어나 다양한 플랫폼으로 확장하기 시작하면서 기존 언어에 비해 부족한 점을 개선할 필요가 있었다.

C/Java등의 메이저 언어들은 모두 코드의 모듈화를 지원하고 있는데 js는 언어 자체적으로 이를 지원하고 있지는 않은 상태였다.

대신에 Browser의 `<script>` 태그를 통해 모듈화를 간접적으로 지원하고 있었는데 이는 js가 태생적으로 HTML 페이지의 보조적인 존재이며
browser 환경 내에서 동작한다는 가정 하에 설계되었기 때문일 것이다.

언어적 차원에서 module 지원의 필요성이 대두되었고 2009년 Mozilla의 엔지니어인 Kevin Dangoor가 최초 `ServerJS`라 불리던 `commonJS`의 원형이 되는 모듈 시스템 스펙을 발표하면서 본격적인 module 스펙이 논의되기 시작한다.

## CommonJS
### History
- 2009-01-29 [Kevin dangoor가 그의 블로그에서 처음 js가 server-side에서 동작하기 위해 갖추어야 할 것들을 제시하였다.](https://www.blueskyonmars.com/2009/01/29/what-server-side-javascript-needs/)
- 2009-01 ServerJS라는 이름의 그룹을 결성하였다.
- 2009-03 CommonJS API 0.1을 제정
- 2009-04 JSConf에서 처음으로 몇 개의 구현체를 발표함
- 2009-08 더 일반적인 환경을 강조하기 위해 그룹의 이름을 CommonJS로 변경함

[출처](http://www.commonjs.org/history/)

### Spec
- Module/1.1 specification - http://wiki.commonjs.org/wiki/Modules/1.1
#### Module context
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


#### Module identifier
1. 모듈 식별자는 slash('/')로 구분된 'term'으로 구성된 문자열이다.
2. 'term'은 camelCase, ".", ".."이다.
3. `.js` 등의 파일 확장자를 가져선 안된다.
4. 상대/절대적일 수 있으며 상대적 식별자는 ".", ".."로 시작하여야 한다.
5. 상대적 식별자는 `require`가 작성 및 호출된 곳의 식별자로부터 상대적이여야 합니다.

#### Unspecified
아래 부분은 스펙에서 정의하지 않고 있습니다.
1. 모듈을 db, file system, factory function, link library 등 어느곳에 저장할지
2. 모듈 식별자 분석을 위해 module loader에서 `PATH`를 지원할지

#### Sample
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
### Implementation
- [RequireJS](https://requirejs.org/)
### Application
### Reference
- Official websites : http://www.commonjs.org/
- Official wiki pages : http://wiki.commonjs.org/wiki/CommonJS
- Official repository : https://github.com/commonjs/commonjs

## AMD
### History
### Spec
### Implementation
### Application

## UMD
### History
### Spec
### Implementation
### Application

## ES6 module
### History
### Spec
### Implementation
### Application

## System
### History
### Spec
### Implementation
### Application