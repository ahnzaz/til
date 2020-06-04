# [Vue instance](https://kr.vuejs.org/v2/guide/instance.html)

## Vue instance 만들기
모든 Vue 앱은 `Vue` 함수로 새 Vue instance를 만드는것에서 시작합니다.

```js
var vm = new Vue({
    // 옵션
})
```
모든 Vue component는 확장된 Vue instance임

## 속성과 메소드
각 Vue instance는 `data`객체에 있는 값들을 프록시

단, 생성될 때 있는 값만 proxy함. 추후에 필요하다면 기본값으로 초기화 할 필요가 있음

`Object.freeze()`를 사용한다면 반응형 시스템이 추적할 수 없음.

데이터 속성 외의 필요한 메소드/속성은 `$` prefix로 제공

```js
var data = {a:1};

var vm = new Vue({
    el : "#example",
    data : data
});

vm.$data === data;
vm.$el === document.querySelector('#example');

vm.$watch('a', function(newVal, oldVal){
    // `vm.a` 변경 시 호출
})
```

## Instance lifecycle hook
- `created` : 인스턴스 생성될 때 호출
- `moundted` : 인스턴스가 DOM에 탑재될 때 호출
- `updated` : 인스턴스가 변경될 때 호출
- `destroyed` : 인스턴스가 DOM에서 폐기될 때 호출

> lifecycle callback은 arrow function사용을 지양. `this`가 binding되지 않게 됨.

## Life cycle diagram
![Vue instance life cycle diagram](https://kr.vuejs.org/images/lifecycle.png)