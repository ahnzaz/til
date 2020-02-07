# Shadow DOM
Shadom DOM이란 일반적인 DOM tree의 요소들에 영향을 받지 않는 엘리먼트들로 구성된 tree를 추가하기 위한 개념이다. 이 Shadow-tree는 일반적인 DOM tree에서는 가려져서 보이지 않게 된다.

## Concepts
- Shadow host : Shadow DOM이 부착되는 일반적인 DOM element.
- Shadow tree : Shadow DOM 내부의 DOM tree.
- Shadow boundary : Shadow DOM이 끝나고 일반적인 DOM이 시작되는 경계면
- Shadow root : Shadow tree의 Root node.

## Basic usages
`Element.attachShadow()`함수를 통해 어느 엘리먼트에나 Shadow root를 붙일 수 있음