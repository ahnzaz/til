# [List rendering](https://kr.vuejs.org/v2/guide/list.html)

## `v-for`로 엘리먼트에 배열 매핑하기
`item in items` 형태의 특수 문법을 사용함. `items`는 바인딩 된 데이터 객체의 원본 데이터 배열. `item`는 iteration 객체를 지칭하는 alias

### 기본 사용 방법
```html
<ul id="example-1">
    <li v-for="item in items">
        {{ item.message }}
    </li>
</ul>
```

```js
var example1 = new Vue({
    el : '#example-1',
    data : {
        items : {
            { message : 'Foo'},
            { message : 'Bar'}
        }
    }
})
```

`v-for` 블록 안에서 부모 스코프의 모든 권한을 가짐. 또한 두 번째 인자로 index를 받을 수 있음
```html
<ul id="example-2">
    <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message}}
    </li>
</ul>
```

`in` 대신 `of`를 사용하여 js의 iteration과 유사하게 동작하게 할 수 있음.

## `v-for`와 객체
객체의 속성도 반복 가능, 두번째 인자로 키를, 세번째 인자로 index를 전달 가능

> Object.keys()의 키 나열 순서대로 결정되며 js 엔진에 따라 동일하지 않을 수 있음

## Maintaining State
데이터 항목의 순서가 변경된 경우 DOM 요소를 이동하는 대신에 각 요소를 적절한 위치에 patch하고 렌더링할 내용을 반영하는지 결정.

이 기본 모드는 효율적이지만 목록의 출력 결과가 하위 컴포넌트 상태 또는 임시 DOM 상태(예 : 폼 input)에 의존하지 않는 경웨 적합

개별 DOM 노드들을 추적하고 기존 엘리먼트를 재사용, 재 정렬하기 위해서는 `v-for`의 각 항목들에 고유한 key 속성을 제공.

> primitive type만을 key로 사용할 것

## 배열 변경 감지
### 변이 메소드
`Array.prototype`의 메소드 중 배열 변화를 유발하는 아래 메소드를 래핑하여 vue에서 뷰 갱인을 트리거한다.
- `push()`
- `pop()`
- `shift()`
- `unshift()`
- `splice()`
- `sort()`
- `reverse()`

### 배열 대체
`filter()`, `concat()`, `slice()`는 새 배열을 반환하므로 원본 데이터의 배열을 새 배열로 교환하면 vue는 스마트한 방법으로 배열의 뷰를 효율적으로 렌더링한다.

### 주의 사항
1. 인덱스로 배열에 있는 항목을 직접 설정하는 경우
2. 배열 길이를 수정하는 경우
위의 경우 js의 한계로 반응형 시스템이 디텍팅 할 수 없다.

1의 경우
```js
Vue.set(vm.items, indexOfItem, newValue)
vm.items.splice(indexOfItem, 1, newValue)
```
`set`또는 `splice`를 통해 변경해야 함

vue instance의 `$set()` 함수로도 트리거할 수 있음

2의 경우 `splice()`를 사용합니다.

## 객체 변경 감지에 관한 주의사항
Vue는 속성 추가 및 삭제를 감지하지 못합니다.
`Vue.set(object, propertyName, value)` 메소드를 사용하여 중첩된 객체에 반응형 속성을 추가할 수 잇음

`vm.$set()`으로도 추가할 수 있음
`Object.assign()`으로 추가할 경우 아래와 같이 사용할 것

```js
vm.userProfile = Object.assign({}, vm.userProfile, {
    age:27,
    favoriteColor : 'Vue green'
})
```

## 필터링 / 정렬 된 결과 표시하기
원본 데이터를 실제로 변경하거나 재설정 하지 않고 필터링/정렬된 버전을 보여줄 필요가 있을 경우 computed 속성을 사용한다.
계산된 속성을 실행하 수 없는 상황이라면 `v-for` directive에서 함수를 호출할 수도 있다.
```html
<li v-for="n in even(numbers)">{{ n }}</li>
```

## Range `v-for`
`v-for`에 숫자 사용 가능

## `v-for` template
`v-if`와 마찬가지로 `<template>` 태그를 통해 그룹화 할 수 있음.

## `v-for`, `v-if`
> `v-for`와 `v-if`를 둘 다 사용하는 건 추천하지 않는다.
둘 다 있는 경우 `v-for`가 `v-if`보다 높은 우선순위를 갖습니다.

## `v-for`와 컴포넌트
사용자 정의 컴포넌트에 직접 사용할 수 있음