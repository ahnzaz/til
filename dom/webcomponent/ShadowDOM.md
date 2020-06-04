# Shadow DOM
Shadom DOM이란 일반적인 DOM tree의 요소들에 영향을 받지 않는 엘리먼트들로 구성된 tree를 추가하기 위한 개념이다. 이 Shadow-tree는 일반적인 DOM tree에서는 가려져서 보이지 않게 된다.

## Concepts
- Shadow host : Shadow DOM이 부착되는 일반적인 DOM element.
- Shadow tree : Shadow DOM 내부의 DOM tree.
- Shadow boundary : Shadow DOM이 끝나고 일반적인 DOM이 시작되는 경계면
- Shadow root : Shadow tree의 Root node.

## Basic usages
`Element.attachShadow()`함수를 통해 어느 엘리먼트에나 Shadow root를 붙일 수 있음
```js
let shadow = elementRef.attachShadow({mode:'open'});
let shadow = elementRef.attachShadow({mode:'closed'});
```
`open`은 Main page context에서 javascript를 통해 shadow DOM에 접근할 수 있음을 의미합니다.
```js
let myShadowDom = myCustomElem.shadowRoot;
```

`mode : closed`로 붙일 경우 외부에서 shadow DOM에 접근할 수 없으며 `myCustomElem.shadowRoot`는 `null`을 반환합니다. 이는 `<video>` 등 shadow root를 가지고 있는 빌트인 엘리먼트등이 해당한다.

커스텀 엘리먼트의 생성자에서 shadow root를 붙일 경우 아래와 같이 사용한다.

```js
let shadow = this.attachShadow({mode : 'open'});
```

shadow dom에 일반 dom API를 사용하여 엘리먼트를 다룰 수 있다.
```js
var para = document.createElement('p');
shadow.appendChild(para);
```

# Working through a simple example.
## Creating the shadow root
## Creating the shadow DOM structure
## Styling the shadow DOM
## Attaching the shadow DOM to the shadow root
## Using our custom element


# [ShadowRoot interface API](https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot)
## Properties
`ShadowRoot.delegatesFocus` (read only)
Shadow가 attach될 때 delegateFocus 지정 여부를 boolean값으로 반환한다.

`ShadowRoot.host` (read only)
`ShadowRoot`가 attach된 DOM element의 참조를 반환한다.

`ShadowRoot.innerHTML`
ShadowRoot내의 DOM tree를 반환하거나 설정한다.

`ShadowRoot.mode` (read only)
`mode` 값을 반환한다.

## Properties inlucded from DocumentOrShadowRoot
`activeElement`
Shadow tree 내에 focus를 가지고 있는 `Element`를 반환.

`styleSheets`
명시적으로 연결된 `StyleSheetList`객체를 반환.

## Methods
`getSelection()`
사용자가 선택한 text 범위를 `Selection`객체로 반환

`elementFromPoint()`
지정된 범위의 탑 element를 반환.

`elementsFromPoint()`
지정된 범위의 모든 element를 반환.

`caretPositionFromPoint()`
지정된 범위에서 caret의 위치를 `CaretPosition` 객체로 반환함.