# [Template syntax](https://kr.vuejs.org/v2/guide/syntax.html)

Vue.js는 렌더링 된 DOM을 기본 Vue instance에 선언적으로 바인딩할 수 있는 HTML 기반의 템플릿 구문을 지원

내부적으로 템플릿을 가상 DOM 렌더링 함수로 컴파일

렌더링 함수를 직접 작성하거나 jsx 문법도 지원함

## Interpolation
### 문자열
```html
<span> 메시지 : {{ msg }} </span>
```

- `v-once` directive
```html
<span v-once>다시는 변경하지 않습니다 : {{ msg }}</span>
```

### Raw HTML
실제 HTML을 출력하려면 `v-html` directive를 사용해야 함.
```html
<p> Using mustaches : {{ rawHtml }}</p>
<p> Using v-html directive : <span v-html="rawHtml"></span></p>
```

### Attribute
HTML attribute에서는 `v-bind` directive를 사용
```html
<div v-bind:id="dynamicId"></div>
```

boolean 속성 사용 시 `true`인 경우 동작이 다름. `null`, `undefined`, `false`의 값일 경우 attribute 자체가 렌더링 되지 않음

### Javascript expression
데이터 바인딩 내에서 Javascript 표현식 사용 가능

> 템플릿 표현식은 샌드박스 처리되며 `Math`, `Date` 등의 표준 Global 객체에만 접근 가능. 사용자 정의 global 변수에 접근할 수 없음.

## Directive
`v-` 접두어가 붙은 특수 attribute. 값은 javscript 표현식이 되어야 함

### Arguments
`v-bind` directive는 HTML 속성을 반응적으로 갱신할 수 있음
```html
<a v-bind:href="url"> ... </a>
```

`v-on` directive는 listener를 할당할 수 있음
```html
<a v-on:click="doSomething"> ... </a>
```

### Dynamic arguments
javascript 표현식을 대괄호로 묶어 directive의 argument로 사용할 수도 있음
```html
<a v-bind:[attributeName]="url">...</a>
```

`attributeName`이 `href`인 경우 위 directive는 `v-bind:href`와 동일함

#### 동적 인자 값의 제약
`null`을 제외하고는 string이 전달될 것으로 가정함. `null`은 binding을 제거하는데 사용

#### 동적 인자 형식의 제약
몇몇 문자는 HTML의 속성명으로 적합하지 않으므로 `computed` 속성으로 변경하여 사용

in-DOM 템플릿(HTML파일에 템플릿을 직접 작성한 경우)에는 브라우저가 속성명을 모두 소문자로 치환하므로 주의

### 수식어
점으로 표시되는 특수 접미사로 디렉티브를 특별한 방법으로 바인딩 해야 함으로 나타냄. `.prevent` 수식어는 트리거된 이벤트에서 `event.preventDefault()`를 호출하도록 `v-on` directive에게 알려줌.
```html
<form v-on:submit.prevent="onSubmit"> ... <form>
```

## 약어
`v-` directive 중 가장 많이 사용하는 `v-bind`와 `v-on`에 대해 약어를 제공함

### `v-bind` 약어
```html
<a v-bind:href="href"> ... </a>

<a :href="href"> ... </a>
```

### `v-on` 약어
```html
<a v-on:click="doSomething"> ... </a>

<a @click="doSomethign"> ... </a>
```

`:`, `@` 모두 valid한 html attribute이며 브라우저에서 사용 가능하며 렌더링 되지 않음