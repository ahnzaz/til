# [Component](https://kr.vuejs.org/v2/guide/components.html)

## 컴포넌트가 무엇인가요?
기본 HTML 엘리먼트를 확장하여 재사용 가능한 코드를 캡슐화
`is` attribute로 확장된 native HTML element를 나타낼 수도 있음.

Vue component는 vue instance가 제공하는 모든 옵션 객체, 라이프사이클 훅을 사용할 수 있음

## Component 사용하기
### 전역 등록
```js
Vue.component('my-component', {
    // 옵션
})
```

### 지역 등록
컴포넌트를 `components` 인스턴스 옵션으로 등록하여 다른 인스턴스/컴포넌트의 범위에서만 사용할 수 있는 컴포넌트를 만들 수 있습니다.

```js
var child = {
    template: '<div>사용자 정의 컴포넌트입니다!.</div>'
}

new Vue({
    // ...
    components : {
        // <my-component>는 상위 템플릿에서만 사용할 수 있음.
        'my-component' : Child
    }
})
```

### DOM 템플릿 구문 분석 경고
DOM을 템플릿으로 사용할 때 Vue는 템플릿 콘텐츠만 가져올 수 있기 때문에 HTML이 작동하는 방식에 고유한 몇 가지 제한 사항이 적용됩니다.
`is` attribute를 사용하여 확장함으로써 해결할 수 있음.

### `data`는 반드시 함수여야 함

### 컴포넌트 작성
부모 자식 관계에서 의사소통도 필요하지만 명확히 정의된 인터페이스를 통해 가능한 한 분리 상태를 유지하는 것도 중요함.
![props는 아래로, events는 위로](https://kr.vuejs.org/images/props-events.png)

## Props
### Props로 데이터 전달하기
모든 컴포넌트 인스턴스에는 자체 격리 된 범위가 있음. `props` 옵션을 통해 하위 컴포넌트로 데이터를 전달.

```js
Vue.component('child', {
    props:['message'],
})
```
```html
<child message="안녕하세요!"></child>
```

### camelCase vs. kebab-case
문자열이 아닌 template을 사용할 때 kebab-case를 사용해야 함.

### 동적 Props
`v-bind`를 사용하여 부모의 데이터에 props를 동적으로 바인딩 가능. 상위에서 업데이트 될 때마다 하위 데이터로도 전달됩니다.

### literal vs dynamic
javascript 표현식으로 전달되도록 `v-bind` directive를 사용해야 함

### 단방향 데이터 흐름
모든 props는 하위 속성과 상위 속성 사이의 단방향 바인딩을 형성합니다.

1. prop의 초기 값을 초기값으로 사용하는 로컬 데이터 속성을 정의
```js
{
    props : ['initialCounter'],
    data : function(){
        return{
            counter : this.initialCounter
        }
    }
}
```

3. prop 값으로부터 계산된 속성을 정의
```js
{
    props : ['size'],
    computed : {
        normalizedSize : function(){
            return this.size.trim().toLowerCase()
        }
    }
}
```

> prop가 배열이나 객체의 경우 하위에서 부모 상태를 변경하면 부모 상태에 영향을 줍니다.

### Prop 검증
validator를 지정할 수 있음

## Props가 아닌 속성
컴포넌트로 전달되지만 정의되지 않는 props

컴포넌트 라이브러리를 만드는 경우 루트 요소에 추가되는 임의의 속성을 허용해야 함.

### 존재하는 속성 교체/병합
vue가 알아서 `class`, `style` attribute를 병합할 것

### `v-on`을 이용한 사용자 지정 이벤트
- `$on(eventName)`을 사용하여 이벤트를 감지
- `$emit(eventName)`을 사용하여 이벤트를 트리거

부모 컴포넌트는 자식 컴포넌트가 사용되는 템플릿에서 직접 `v-on`을 사용하여 자식 컴포넌트에서 보내진 이벤트를 청취할 수 있음

> `$on`은 자식에서 호출한 이벤트는 감지하지 못하니 `v-on`을 템플릿에 반드시 지정해야 함

#### 컴포넌트에 네이티브 이벤트 바인딩
컴포넌트 루트 엘리먼트에서 네이티브 이벤트를 수신하려는 경우 `v-on`에 `.native` 수식자를 사용

### `.sync` 수식어
양방향 바인딩을 위한 수식어. 자동으로 `v-on`으로 확장됨
```html
<comp :foo.sync="bar"></comp>
```
는 아래와 동일
```html
<comp :foo="bar" @update:foo="val => bar = val"></comp>
```
하위 컴포넌트가 `foo`를 갱신하려면 이벤트를 발신
```js
this.$emit('update:foo', newValue);
```

### 사용자 정의 이벤트를 사용하여 폼 입력 컴포넌트 만들기
`v-model`에서 작동하는 사용자 정의 입력을 만드는데 사용할 수 있음
```html
<custom-input
    :value="something"
    @input="value =? { something = value }">
</custom-input>
>
```
따라서 `v-model`을 사용하는 컴포넌트는
- `value` prop을 가짐
- 새로운 값으로 `input` 이벤트를 발신

### 컴포넌트의 `v-model` 사용자 정의

### 비 부모-자식간 통신
비어있는 vue instance를 중앙 이벤트 버스로 사용할 수 있음

```js
var bus = new Vue();

bus.$emit('id-selected', 1);

bus.$on('id-selected', function(id){

})
```

## 슬롯을 사용한 컨텐츠 배포
부모의 "content"와 컴포넌트의 자체 템플릿을 섞는 방법이 필요함. web component spec의 `<slot>`을 사용하여 배포판 역할을 수행

### 범위 컴파일
내용이 컴파일되는 범위를 명확히 함

> 상위 템플릿의 모든 내용은 상위 범위로 컴파일됨. 하위 템플릿의 모든 내용은 하위 범위에서 컴파일

부모 템플릿의 하위 속성/메소드에 디렉티브를 바인딩 하려는 실수. 상위 템플릿은 하위 컴포넌트의 상태를 인식하지 못함.

루트 노드에서 하위 범위 디렉티브를 바인딩 해야 하는 경우에는 하위 컴포넌트의 자체 템플릿에서 하위 범위 디렉티브를 바인딩해야함

### 단일 슬롯
하위 컴포넌트 템플릿에 최소 하나의 `<slot>` 콘텐츠가 있지 않으면 부모 컴포넌트가 삽입한 콘텐츠가 삭제됨.

하나의 `<slot>`만 있는 경우 부모 component에서 삽입한 내용이 단일 slot내에 모두 렌더링 됨

### 이름을 가지는 슬롯
`<slot>`은 `name` attribute을 통해 slot을 구분할 수 있음

### 범위를 가지는 슬롯
> 2.1.0에 추가

이미 렌더링 된 엘리먼트 대신 재사용 가능한 템플릿으로 작동하는 특별한 유형의 슬롯
```html
<div class="child">
    <slot text="hello from child"></slot>
</div>
```
부모는 `slot-scope`를 가진 `<template>` 엘리먼트가 있어야 함 `slot-scope`의 값은 자식으로부터 전달된 props 객체를 담고 있는 임시 변수 이름
```html
<div class="parent">
    <child>
        <template slot-scope="propr">
            <span> hello from parent </span>
            <span> {{ props.text }} </span>
        </template>
    </child>
</div>
```

#### destructuring
`slot-scope`의 값에 destructuring을 사용할 수 있음

## 동적 컴포넌트
`<component>` 엘리먼트를 사용하여 `is` 속성에 여러 컴포넌트를 동적으로 바인드 할 수 있음

컴포넌트 객체에 직접 바인딩 할 수도 있음

### keep-alive
`<keep-alive>`엘리먼트에 래핑하여 컴포넌트의 상태를 보존하거나 다시 렌더링하지 않게 할 수 있다.

## 기타
### 재사용 가능한 컴포넌트 제작하기
깨끗한 공용 인터페이스를 정의해야 하며 사용된 컨텍스트에 대한 가정을 하지 않아야 함

- Props는 외부 환경에서 데이터를 컴포넌트로 전달하도록 허용.
- Event를 통해 컴포넌트가 외부 환경에 사이드이펙트를 발생할 수 있게 함.
- Slot을 사용하여 외부 환경에서 추가 컨텐츠가 포함된 컴포넌트를 작성할 수 있게 함.

### 자식 컴포넌트 참조
`ref`를 이용해 참조 컴포넌트 ID를 자식 컴포넌트에 할당
```html
<div id="parent">
    <user-profile ref="profile"></user-profile>
</div>
```

```js
var parent = new Vue({el:'#parent'});

var child = parent.$refs.profile
```

> $refs는 렌더링 된 후에 채워지며 반응적이지 않음. 템플릿이나 computed 속성에 사용하지 않아야 함

### 비동기 컴포넌트
```js
Vue.component('async-example', function(resolve, reject){
    setTimeout(function(){
        resolve({
            template:'<div>I am async!</div>'
        })
    }, 1000)
})
```

### [고급 비동기 컴포넌트](https://kr.vuejs.org/v2/guide/components.html#%EA%B3%A0%EA%B8%89-%EB%B9%84%EB%8F%99%EA%B8%B0-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)

### [컴포넌트 이름 규약](https://kr.vuejs.org/v2/guide/components.html#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9D%B4%EB%A6%84-%EA%B7%9C%EC%95%BD)

### 재귀 컴포넌트

### 컴포넌트 사이의 순환 참조
`beforeCreate` hook에서 하위 자식 컴포넌트를 require할 수 있음

### inline template

### X-Templates

### `v-once`를 이용한 비용이 적게드는 정적 컴포넌트