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

## Lifecycle callback
커스텀 엘리먼트는 life cycle에 따라 callback function을 정의할 수 있다.

- `connectedCallback` : document DOM에 최초 부착될 때 호출
- `disconnectedCallback` : document DOM에서 분리될 때 호출
- `adoptedCallback` : 새 document로 이동할 때 호출
- `attributeChangedCallback` : Attribute가 추가/변경/삭제될 때 호출