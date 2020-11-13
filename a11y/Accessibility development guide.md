# 접근성 개발 가이드

## [WAI-ARIA 기본](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)

## 스크린 리더 사용법
### 가상 커서
일반적으로 브라우저는 tab키를 통해 focussable element간을 탐색할 수 있다.
스크린리더는 가상커서를 통해 브라우저가 포커싱하지 않는 element라도 텍스트를 인식할 수 있는 항목이라면 커서를 가게끔 할 수 있다. 이를 가상커서라고 하며 스크린리더마다 가상 커서의 동작 및 조작 방식은 상이하다.

#### 센스리더
`ctrl + shift + F11` : 가상 커서 켜기
`ctrl + shift + F12` : 가상 커서 끄기
`ctrl + shift + F9`로 가상 커서 설정을 여러 포커스 동기화를 켜면 tab키를 통한 포커스 이동과 가상커서를 동기화 할 수 있다.

#### 보이스오버
`ctrl + option + right/left` : 가상 커서 탐색

## Markup semantic
### Meaningful markup
가장 간단하게 접근성을 높이는 마크업 작성법은 올바른 태그를 사용하는 것이다.

버튼을 사용하려면 `<button>` tag를 사용한다. `<div>` tag를 사용해서 버튼을 구현할 경우 아래와 같다.

```html
<div role="button" tabindex="0" onclick="doSomething" onkeydown="e=>{switch(e.keyCode){...}}">
    <span>Click me!</span>
</div>
```

반면에 `<button>` tag를 사용할 경우 아래만으로 충분하다.

```html
<button>
    Click me!
</button>
```

### ARIA role
스타일 구성 또는 복잡한 element component의 필요에 의해 적절한 semantic element 사용이 어려울 때 `role` attribute를 사용해 element의 역할을 명시할 수 있다. 이를 통해 스크린리더에게 element를 다루는 방법을 명확히 지시할 수 있다.

#### `none` role
```html
<button role="none">
    <span role="button">{{click me!}}</span>
</button>
```
semantic element가 가지는 역할을 무효화한다. element의 의미는 제거하고 내용만 남긴다.
다른 방식으로 semantic을 명시해야 할 필요가 있을 때 native 동작을 disable하는 용도로 사용한다.

#### `button` role
```html
<div role="button" />
```
버튼으로 지정한다.
`enter`, `space`키에 대한 event가 연결되지 않으므로 후술할 작업을 추가해야 한다.

#### `menu` role
```html
<ul role="menu" />
```
하위 `menuitem` 항목을을 아이템으로 가지는 메뉴로 지정한다.

#### `menuitem` role
```html
<ul role="menu">
    <li role="none">
        <span role="menuitem">{{ content }}</span>
    </li>
</ul>
```

## Tab order
브라우저는 사용자와 인터랙션이 가능한 element들이 focus를 가질 수 있게 한다.

Focus는 기본적으로 markup에 작성된 순서대로 이동하나, `tabindex` attribute를 통해 인위적으로 조절할 수 있다.

`tabindex` attribute는 또한 일반적으로 focus를 가지지 못하는 `<div>` element등이 focus를 가지게 하거나, 반대로 일반적으로 focus를 가지는 `<button>` 등의 element에 포커스가 가지 않게 할 수 있다.

### `tabindex` attribute
| value      | Description                                                                       |
|------------|-----------------------------------------------------------------------------------|
| "0"        | Focussable 속성을 부여하며 일반적인 tab order를 따르도록 한다.                                      |
| "-1"       | Focussable 속성을 부여하지만 `tab`키로 focus를 가지지 않으며 `focus()` 메소드를 호출하였을 경우에만 focus를 가진다. |
| 1 <= value | tab order를 뛰어넘어 주어진 값 만큼 우선적으로 위치한다. 일반적으로 안티 패턴으로 취급한다.                          |


## Keyboard control
디스플레이와 마우스의 정상적인 이용이 어려운 시각적 장애에 대한 접근성을 제공하기 위해 모든 조작은 키보드로도 가능해야 한다.

[Native 키보드 조작 예시](https://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)

### `menuitem`
키보드 위/아래 키로 탐색이 가능해야 한다.

```html
<div>
    <ul role="menu">
        <li role="menuitem" onkeydown="onItemKeyDown">
            {{ content}}
        </li>
        ...
    </ul>
</div>

<script>
function onItemKeyDown(e){
    switch(e.keyCode){
        case KeyCode.ARROW_UP:{
            // focus to previous item
            break;
        }

        case KeyCode.ARROW_DOWN:{
            // focus to next item
            break;
        }
    }
}
</script>
```

### `button`
`space`, `enter`로 동작이 가능해야 한다. `<button>` element의 경우 자동으로 `space`, `enter` 키 입력이 `onclick` listener와 연결된다. 그러나 `role="button"`으로 지정한 element의 경우 자동으로 연결되지 않기 때문에 아래와 같이 `keydown` event를 `onclick` listener와 연결하여야 한다.

```html
<div id="button1" role="button" onclick="onClick()">
    {{ contents }}
</div>

<script>
const button1 = document.querySelector('#button1');

button1.addEventlistener('keydown', (e)=>{
    switch(e.keyCode){
        case KeyCode.SPACE :
        case KeyCode.ENTER :{
            button1.click();
        }
    }
});
</script>
```

### `dropdown`
위/아래키로 item list를 확장하고 이전/다음항목으로 이동할 수 있어야 한다.

# [aria](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

## `aria-*` attributes

### `aria-label`
현재 element의 설명을 나타낸다. 일반적으로 focus가 간 시점에서 스크린리더가 읽는 값이 된다. 가능한한 element내에 대체 가능한 text content가 없는 경우 사용해야 한다. 있다면 아래의 `aria-labelledby` attribute를 사용한다.

### `aria-labelledby`
element내에 대표 text content가 있는 경우 `id list`를 명시하여 스크린리더로 하여금 해당 text content를 읽도록 한다.

### `aria-expanded`
확장성을 갖는 element임을 나타낸다. `true/false`로 확장 여부를 표시한다.

### `aria-pressed`
Toggle button류의 element에서 눌려졌음을 나타낸다.

### `aria-hidden`
화면에는 나타내지만 스크린리더로 하여금 무시하고자 할 경우 사용한다.

### `aria-disabled`
현재 동작하지 않는 element임을 나타낸다.

### `aria-haspopup`
element가 팝업 엘리먼트 또는 윈도우를 가지고 있음을 나타낸다.

### `aria-valuenow`
`slider`, `progressbar` 등의 element의 현재 값을 나타낸다.

### `aria-valuemin`
`slider`, `progressbar` 등의 element의 최소 값을 나타낸다.

### `aria-valuemax`
`slider`, `progressbar` 등의 element의 최대 값을 나타낸다.

### `aria-valuetext`
`slider`, `progressbar` 등의 현재 값을 텍스트 메시지로 나타낸다.

### `aria-live`
값이 동적으로 업데이트 될 수 있는 영역으로 지정한다. 자동으로 갱신되는 Slider, Ajax를 통해 업데이트될 수 있는 영역등에 지정한다. 아래와 같은 값을 가진다.

| value       | desc                                  |
|-------------|---------------------------------------|
| "off"       | 값이 업데이트되더라도 사용자에게 알리지 않는다.            |
| "polite"    | 스크린리더가 현재 읽고있는 메시지를 방해하지 않고 나중에 알려준다. |
| "assertive" | 스크린리더가 읽고 있는 메시지를 중단하고 즉시 알려준다.       |

## Player가 제공하는 접근성
이하는 WebPlayer가 제공하고있는 접근성 기능을 설명한다.

### Button 상태 및 기능
#### 일반 버튼
이전/다음 영상 버튼처럼 하나의 상태와 기능을 가지는 버튼은 아래와 같은 접근성을 제공한다.
- 버튼 기능 메시지 음독

#### 토글 버튼
재생/일시정지, 볼륨, 전체화면 등 두 가지 상반되는 상태를 가지는 Toggle button은 다음의 접근성을 제공한다.

- `aria-pressed` 상태
- `aria-pressed` 값에 따른 현재 상태 메시지 음독
- `aria-pressed` 값에 따른 클릭 시 기능 메시지 음독

### Progress slider
영상의 현재 재생 시간을 표시하는 ProgressSlider는 아래의 접근성을 제공한다.

- `aria-valuemin` : 재생시간 0
- `aria-valuenow` : 현재 재생 시간(초 단위)
- `aria-valuemax` : 영상 전체 길이(초 단위)
- `aria-valuetext` : 현재 재생시간/전체 길이를 다음 형태로 제공 (hh시간 mm분 xx초 hh시간 mm분 xx초)
- focus를 가지는 동안 키보드에 의한 시킹 시 `aria-valuetext` 음독

### Volume slider
VolumeSlider는 아래의 접근성을 제공한다.

- `aria-valuemin` : 볼륨 0
- `aria-valuenow` : 현재 볼륨(% 단위)
- `aria-valuemax` : 볼륨 100
- `aria-valuetext` : 현재 볼륨을 다음 형태로 제공 (vv퍼센트 볼륨)
- focus를 가지는 동안 키보드에 의한 볼륨 조절 시 `aria-valuetext` 음독

### 설정 메뉴
- 설정 메뉴 항목을 `menu`, `menuitem` role로 제공한다.
- 항복간 위/아래키로 탐색이 가능하다.
- space/enter로 하위 항목 진입 및 값 선택이 가능하다.
- esc키로 이전 항목으로 이동 또는 설정 메뉴를 닫는다.