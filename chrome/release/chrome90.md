# Chrome 90

## [New in Chrome90](https://developer.chrome.com/blog/new-in-chrome-90/)

### Prevent overflow with `overflow: clip`
`overflow: hidden`에 비해 퍼포먼스도 높고, 프로그래밍에 의한 스크롤에도 숨겨질 수 있도록 추가됨
`overflow-clip-margin` attribute를 통해 clip margin을 줄 수 있음

[예시](https://petele-css-is-awesome.glitch.me/)

### Feature Policy is now Permissions Policy
`Feature-policy` HTTP 헤더가 `Permissions-Policy` 헤더로 변경됨

### Declarative Shadow DOM
HTML 만을 통해 Shadow root element를 선언할 수 있게 됨
```html
<host-element>
  <template shadowroot="open">
    <slot></slot>
  </template>
  <h2>Light content</h2>
</host-element>
```
아래와 같이 렌더링
```html
<host-element>
  #shadow-root (open)
  <slot>
    ↳
    <h2>Light content</h2>
  </slot>
</host-element>
```

https://web.dev/declarative-shadow-dom/

### AV1 Encoder 탑재
https://www.chromestatus.com/feature/6206321818861568


## [What's new in DevTools](https://www.youtube.com/watch?v=kOodTLAjPsE)

### Dedicated CSS flexbox debugging tool
`flexbox` div를 개별적으로 디버깅 할 수 있게 됨

### New core web vitals overlay
`Show rendering` -> `Core web vitals`

### Moved issue counts to the Console status bar

### New trusted tokens pane in the Application panel
Trusted-token을 application panel에서 볼 수 있게 됨

### Emulate the CSS color-gamut media feature
컬러 가뭇을 에뮬레이트 할 수 있게 됨

### Improved progressive Web apps tooling
https://web.dev/add-manifest

