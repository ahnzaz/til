# [Class and style binding](https://kr.vuejs.org/v2/guide/class-and-style.html)
Class와 style에 `v-bind`를 사용할 때 특별한 기능이 있음


## HTML Class 바인딩하기

### 객체 구문
클래스를 동적으로 toggle하기 위해 `v-bind:class` directive를 사용 가능함
```html
<div v-bind:class="{active:isActive}"> ... </div>
```
바인딩 한 객체는 inline일 필요는 없음. 객체를 반환하는 computed 속성도 가능

### 배열 구문
```html
<div v-bind:class="[activeClass, errorClass]"></div>
```
목록의 클래스를 토글하려면 삼항연산자를 사용.

### Component와 함께 사용하는 법
사용자 정의 컴포넌트에 `class` 속성을 사용하면 루트 엘리먼트의 클래스로 추가함. 기존 클래스를 덮어쓰지는 않음


## Inline style binding
