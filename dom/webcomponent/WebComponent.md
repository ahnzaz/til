# [WebComponent](https://developer.mozilla.org/ko/docs/Web/Web_Components)

## Concepts
- Custom elements : 사용자 인터페이스에서 원하는대로 사용할 수 있도록 커스텀 엘리먼트의 형태와 그 동작을 정의할 수 있는 Javascript API set.
- Shadow DOM : 캡슐화한 "shadow" dom을 엘리먼트에 붙일 수 있는 API set. Document의 다른 부분의 영향 없이 element의 기능과 스타일을 격리할 수 있다.
- HTML templates : `<template>`, `<slot>` element를 통해 렌더링 되지 않는 템플릿 엘리먼틀르 선언할 수 있다. 이 엘리먼트를 재사용하여 커스텀 엘리먼트를 실제로 렌더링할 수 있음

## Usage
웹 컴포넌트를 구현하기 위한 기본 접근법은 아래와 같음
1. Class 문법을 사용하여 웹 컴포넌트 기능을 명시하는 클래스를 작성.
2. `CustomElementRegistry.define()`을 통해 새로운 커스텀 엘리먼트를 등록. 정의할 이름, 기능을 명시하는 클래스, 상속한 엘리먼트를 전달.
3. 필요한 경우, `Element.attachShadow()`를 통해 shadow DOM을 커스텀 엘리먼트에 전달. DOM method를 통해 자식 엘리먼트, 이벤트 리스너 등을 shadow DOM에 추가.
4. 필요한 경우, `<template>`, `<slot>`을 통해 HTML template를 정의. DOM method로 템플릿을 클론하고 shadow DOM에 추가.
5. 페이지의 원하는 곳 어디든지 커스텀 엘리먼트를 사용 가능.

커스텀 엘리먼트에는 두 종류가 있음.
- Autonomous cutom elements : 상속하지 않은 스탠드얼론 커스텀 엘리먼트. `<popup-info>`나 `document.createElement("popup-info")`등으로 생성할 수 있다.
- Customized built-in elements : 기본 HTML element를 상속한 커스텀 엘리먼트. 생성시 상속할 엘리먼트를 명시해야한다. 사용할 때에는 기본 엘리먼트 태그를 사용하되 `is` attribute를 통해 커스텀 엘리먼트 이름을 명시해야 한다. `<p is="word-count">`, `document.createElement('p', {is:"word-count"})`의 형태로 생성한다.

## Custom element
- `CustomElementRegistry` 커스텀 엘리먼트와 관련된 기능을 포함하며, 새로운 커스텀 엘리먼트를 등록하여 도큐먼트에서 사용할 수 있도록 해주는 `CustomElementRegistry.defind()` 메소드가 가장 주요합니다.
- `Window.customElements` `CustomElementRegistry` 객체에 대한 참조를 반환합니다.

### Lifecycle callback
커스텀 엘리먼트는 life cycle에 따라 callback function을 정의할 수 있다.

- `connectedCallback` : document DOM에 최초 부착될 때 호출
- `disconnectedCallback` : document DOM에서 분리될 때 호출
- `adoptedCallback` : 새 document로 이동할 때 호출
- `attributeChangedCallback` : Attribute가 추가/변경/삭제될 때 호출


### 커스텀 내장 엘리먼트 생성을 위한 확장 기능
- `is` 전역 HTML attribute : 표준 HTML 엘리먼트가 등록된 커스텀 내장 엘리먼트처럼 동작하도록 지정을 허용합니다.
- `Document.createElement()` 메소드의 `is` 옵션 : 주어진 등록된 커스텀 내장 엘리먼트처럼 동작하는 표준 HTML 엘리먼트의 인스턴스를 생성하는 것을 허용하니다.

### CSS 슈도 클래스
- `:defined`: 내장 엘리먼트와 `CustomElementRegistry.define()`으로 정의된 커스텀 엘리먼트를 포함해, 정의된 모든 엘리먼트와 일치합니다.
- `:host` : 대상 CSS를 내부에 포함하고 있는 shadow DOM의 shadow 호스트를 선택합니다.
- `:host()` : 대상 CSS를 내부에 포함하고 있는 shadow DOM의 shadow 호스트를 선택합니다.(따라서 shadow DOM 내부에서 커스텀 엘리먼트를 선택할 수 있습니다.) 함수의 파라미터로써 주어진 셀렉터가 shadow 호스트에 일치하는 경우에만 해당합니다.
- `:hsot-context()` : 대상 CSS를 내부에 포함하고 있는 shadow DOM의 shadow 호스트를 선택합니다. - 함수의 파라미터로써 주어진 셀렉터가 DOM 계층 내에 위치한 shadow 호스트의 조상에 일치하는 경우에만 해당합니다.

## Shadow DOM
`ShadowRoot`
shadow DOM 하위 트리의 루트 노드를 나타냅니다.

`DocumentOrShadowRoot`
도큐먼트와 shadow root 모두에서 사용가능한 기능을 정의하는 믹스인

`Element` 확장 기능
shadow DOM에 관련된 `Element` 인터페이스의 확장 기능입니다.
- `Element.attachShadow()` 메소드는 shadow DOM 트리를 지정된 엘리먼트에 추가합니다.
- `Element.shadowRoot` 프로퍼티는 지정된 엘리먼트에 추가된 shadow 루트를 반환합니다. 추가된 shadow 루트가 없을 경우 `null`을 반환합니다.

`Node` 추가 관련
- `Node.getRootNode()` 메소드는 사용 가능한 shadow 루트가 있을 경우 선택적으로 이를 포함하는 컨텍스트 객체의 루트를 반환합니다.
- `Node.isConnected` 프로퍼티는 노드가 직접 또는 간접적으로 컨텍스트 객체(예를 들면, 일반 DOM의 경우 `Document` 객체, shadow DOM의 경우 `ShadowRoot`)에 연결되어 있는지를 나타내는 boolean을 반환합니다.

`Event` 확장 기능
- `Event.composed` : 이벤트가 shadow DOM 영역을 거쳐 일반 DOm으로 전파되는지를 나타내는 `Boolean`을 반환합니다.
- `Event.compsedPath` : 이벤트의 패스(이벤트가 호출될 객체)를 반환합니다. shadow root가 `ShadowRoot.mode` closed로 생성된 경우 shadow 트리의 노드를 포함하지 않습니다.

## HTML template
`<template>`
도큐먼트가 처음 로드될 때 렌더링되지 않지만 JavaScript를 사용하는 런타임에 나타나는 HTML 조각을 포함합니다. 주로 커스텀 엘리먼트 구조의 기본으로 사용됩니다. 관련된 DOM 인터페이스로 `HTMLTemplateElement`가 있습니다.

`<slot>`
자신만의 마크업으로 채울 수 있는 웹 컴포넌트 내부의 placeholder입니다. 별도의 DOM트리로 생성하고 함께 보여줄 수 있게 해줍니다. 관련 DOM 인터페이스로 `HTMLSlotElement`가 있습니다.

`slot` 전역 HTML attribute
shadow DOM shadow 트리내의 slot을 엘리먼트로 할당합니다.

`Slotable`
`Element`와 `Text` 노드로 구현된 믹스인입니다. `<slot>` 엘리먼트의 컨텐츠로 만들기 위한 기능들을 정의합니다. 믹스인은 노드가 삽입된 슬롯의 참조를 반환하는 하나의 어트리뷰트 `Slotable.ssignedSlot`을 정의합니다.

`Element` 확장 기능
- `Element.slot`엘리먼트에 추가된 shadow DOM 슬롯의 이름을 반환합니다.

`slotchange` 이벤트
슬롯에 포함된 노드가 변경될 때 `HTMLSlotElement` 인스턴스(`<slot>` 엘리먼트)에서 실행됩니다.