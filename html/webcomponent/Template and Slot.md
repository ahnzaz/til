# [<template>](https://developer.mozilla.org/ko/docs/Web/HTML/Element/template)
HTML <template> 요소는 페이지를 불러온 순간 즉시 그려지지는 않지만, 이후 JavaScript를 사용해 인스턴스를 생성할 수 있는 HTML 코드를 담을 방법을 제공한다.

구문 분석기가 `<template>`요소를 읽기는 하지만 유효성을 검증할 뿐 렌더링 하지는 않는다.

## Attributes
Global attributes만을 포함함

`HTMLTemplateElement` interface는 `content` property를 가짐. 템플릿이 표현하는 DOM subtree를 가지는 read-only `DocumentFragment`를 반환함.

# [<slot>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot)
HTML `<slot>` element는 web component 내부 중 일부를 고유의 마크업으로 치환하여 분리된 DOM tree와 함께 표현할 수 있는 방법을 제공하는 Web Component의 기술.

## Attributes
Global attributes 포함

`name`
슬롯 이름

# Using template and slot
`<template>`과 `<slot>`을 사용하여 web component의 shadow DOM을 전개하는 방법에 대해 알아본다.

## The truth about templates
특정 마크업 구조를 페이지 내에서 반복적으로 사용한다면, 별도로 분리하여 반복 사용하는것이 효율적이다. 이전의 웹 환경에서도 가능했지만 최근에는 `<template>` 엘리먼트를 통해 더 명시적으로 선언할 수 있다.
```html
<template id="my-paragraph">
    <p>My paragraph</p>
</template>
```

```js
let template = document.getElementById('my-paragraph');
let templateContent = template.content;

document.body.appendChild(templateContent);
```
`template.content`를 append 할 수 있는 곳은 한곳 뿐. 여러곳에 쓰려면 `cloneNode()`로 복제해야 함.

## Using templates with web components
```js
customElements.define('my-paragraph', class extends HTMLElement{
    constructor(){
        super();
        let template = document.getElementById('my-paragraph');
        let templateContent = template.content;
        
        const shadowRoot = this.attachShadow({mode:'open'}).appendChild(templateContent.cloneNode(true));
    }
})
```
`Node.cloneNode()`를 통해 노드를 클론하고 shadow root에 append하였다는 점에 주목.

`<style>` tag를 통해 격리될 내장 스타일을 지정할 수도 있음.

## Adding flexibility with slots
`<slot>`은 이름으로 구분하며 template markup내에서 플레이스홀더로 사용할 수 있다.
```html
<p><slot name="my-text">My default text</slot></p>
```

slot의 컨텐츠를 재정의하려면 `<my-paragraph>` element내에 `slot` attribute를 가진 엘리먼트를 선언하면 된다.
```html
<my-paragraph>
    <span slot="my-text">Let's have some different text!</span>
</my-paragraph>
```
완전히 markup이 대체되는 것이 아니라 `reveal` 이라는 이름으로 마치 링크 레퍼런스가 붙네.

## A more involved example
`<template>` tag 없이 `<slot>` tag를 단독으로 사용할 수도 있다. 