# [Conditional rendering](https://kr.vuejs.org/v2/guide/conditional.html)

## `v-if`
`v-if` directive를 통해 조건부 블록을 작성할 수 있음
```html
<h1 v-if="ok"> yes </h1>
```

`v-else` directive를 통해 else 조건을 걸 수 있음
```html
<h1 v-if="ok">yes</h1>
<h1 v-else>NO</h1>
```

### `<template>`에 `v-if` 조건부 그룹 만들기
```html
<template v-if="ok">
    <h1>Title</h1>
    <p> Paragraph 1 </p>
    <p> Paragraph 2 </p>
</template>
```

### `v-else`
`v-else` directive는 `v-if` 또는 `v-else-if` 바로 뒤에서만 사용 가능합니다.

### `v-else-if`
> 2.1.0 부터 추가됨

### `key`를 이용한 재사용 가능한 엘리먼트 제어
두 엘리먼트를 구분 할 필요가 있는 경우 `key` directive를 통해 구분함

## `v-show`
엘리먼트를 조건부로 표식하기 위한 또 다른 directive
```html
<h1 v-show="ok">안녕하세요!</h1>
```
`v-show` 엘리먼트는 항상 렌더링되고 DOM에 남아있음. 단지 `display` 속성을 toggle 할 뿐임

> `<template>` 구문을 지원하지 않으며 `v-else`와 동작하지 않음

## `v-if` vs `v-show`
`v-if`는 이벤트 리스너와 자식 컴포넌트가 적절하게 제거/재생성되므로 진짜 조건부 렌더링.

lazy load하므로 최초로 true로 되지 않는 한 렌더링 되지 않음

`v-show`는 CSS 기반 토글만을 제공
`v-if`는 토글 비용이 높고 `v-show`는 초기 렌더링 비용이 크므로 컴포넌트의 특성에 따라 사용할 것


## `v-if` vs `v-for`
`v-for`가 `v-if`보다 우선순위가 높음.