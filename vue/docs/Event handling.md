# [Event handling](https://kr.vuejs.org/v2/guide/events.html)

## 이벤트 청취
`v-on` directive를 사용하여 DOM 이벤트를 듣고 트리거 될 때 JavaScript를 실행할 수 있습니다.

## 메소드 이벤트 핸들러
`v-on` directive에 method 이름을 전달할 수 있음

## 인라인 메소드 핸들러
inline javscript 구문을 전달할 수도 있음

인라인 명령문 핸들러에서 원본 DOM 이벤트에 접근해야 할 경우 `$event` 변수를 사용해 메소드에 전달 가능

## 이벤트 수식어
`event.preventDefault()`, `event.stopPropagation()`을 호출하는 건 매우 보편적. `v-on` 이벤트에 접미 수식어를 제공하여 처리함

- `.stop`
- `.prevent`
- `.capture`
- `.self` : `event.target`이 엘리먼트 자체인 경우에만 트리거를 처리함. 자식인 경우 안됨.
- `.once`
- `.passive`

수식어는 체이닝이 가능함

> 수식어를 사용할때 순서에 주의해야 관련 코드가 동일한 순서대로 생성 됨. `click.prevent.self`는 모든 클릭을 다 막을 수 있지만 `click.self.prevent`는 엘리먼트 자체에 대한 클릭만 방지함

### 2.1.4에 추가
`.once` 수식어는 component event에서도 사용 가능

### 2.3.0+ 이후 추가됨
`.passive` 수식어는 기본 동작을 멈추지 않는 다는 것을 브라우저에 선언함

> 즉 `.passive`와 `.prevent`를 동시에 사용할 수 없음

## 키 수식어
키보드 이벤트를 청취할 때 키 코드를 위해 키 수식어를 추가 가능

### key codes
`keyCode` attribute로 키 코드를 특정할 수 있다.

- `.enter`
- `.tab`
- `.delete` (delete와 backspace를 모두 캡쳐)
- `.esc`
- `.space`
- `.up`
- `.down`
- `.left`
- `.right`

> `.esc`와 모든 화살표 키는 IE9에서 일관성 없는 `key`값을 가지고 있으므로 IE9를 지원해야 하는 경우 내장 별칭 사용해야 함

전역 `config.keyCodes`객체를 통해 사용자 지정 키 수식어 별칭을 사용할 수 있음

## 시스템 수식어 키 목록
- `.ctrl`
- `.alt`
- `.shift`
- `.meta`

> 맥 키보드에서 meta는 command키.

## `.exact` 수식어
`.exact` 수식어는 정확한 조합인 경우에만 실행되야 하는 경우 사용하는 수식어

## 마우스 버튼 수식어
- `.left`
- `.right`
- `.middle`
특정 마우스 버튼에 의해 트리거 된 이벤트로 핸들러를 제한

## 왜 HTML로 된 리스너를 사용합니까?
1. HTML 템플릿을 간단히 하여 JavaScript 코드 내에서 핸들러 함수 구현을 찾는 것이 더 쉽습니다.
2. JavaScript 이벤트 리스너를 수동으로 연결할 필요가 없으므로 ViewModel 코드는 순수 로직과 DOm이 필요하지 않습니다.
3. ViewModel이 파기되면 모든 이벤트 리스너가 자동으로 제거됩니다. 이벤트 제거에 대한 걱정이 필요없음.