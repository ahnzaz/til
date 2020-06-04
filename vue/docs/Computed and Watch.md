# [computed and watch](https://kr.vuejs.org/v2/guide/computed.html)

## computed property
복잡한 로직이라면 `computed` 속성을 사용해야 함

### Basic example
```html
<div id="example">
    <p>원본 메시지 : "{{ message }}"</p>
    <p>역순으로 표시한 메시지 : "{{ reversedMessage }}" </p>
</div>
```

```js
var vm = new Vue({
    el : "#example",
    data : {
        message : '안녕하세요',
    },
    computed : {
        reversedMessage : function(){
            return this.message.split('').reverse().join();
        }
    }
})
```

### computed 속성의 캐싱 vs 메소드
computed 속성은 종속 대상이 변경되지 않는 한 함수를 여러번 호출해도 값을 caching할 뿐, 재 호출 하지 않음.

### computed 속성 vs watch 속성
명령적인 `watch` callback보다 계산된 속성인 `computed`를 사용하는 편이 좋음.

### computed 속성의 setter 함수
```js
computed : {
    fullname : {
        get : function(){
            return this.firstName + ' ' + this.lastName
        },
        set : function(newValue){
            var names = newValue.split(' ');

            this.firstName = names[0]
            this.lastName = names[names.length - 1];
        }
    }
}
```

## watch 속성
일반적으로는 `computed` 속성을 사용하는 편이 좋지만, 비동기 요청 또는 계산이 오래걸리는 조작이 필요할 경우에는 `watch`를 사용하는 편이 좋음. (스로틀이나 디바운스를 걸 때에도 좋을 듯)