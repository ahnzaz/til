# Chrome 91

## New in Chrome 91

## [DevTools](https://developer.chrome.com/blog/new-in-devtools-91/)

### Web vitals information pop in the Performance panel.
Perfomance panel에서 Web vital 정보가 팝업으로 표시

### Visulize CSS scroll-snap
`scroll-snap-type`이 선언된 Element는 `scroll-snap` badge를 통해 시각효과를 토글할 수 있다.

### New memory inspector
`ArrayBuffer` 내부를 볼 수 있는 inspector가 새로 생김

### New badge settings pane in the Elements panel
`Badge settings`를 통해 badge 표시 여부 결정 가능

### Enhanced image preview with aspect ratio information
Image preview에 ratio information 등 정보 추가

### New network condition button with options to configure `Content-Encoding`s
`gzip` `brotli` 등의 `Conentent-Encoding` header를 설정할 수 있는 옵션 제공

### Style panel enhancement
#### New shortcut to view computed value in the Styles panel
computed value를 볼 수 있게됨

#### Support for the `accent-color` keyword
experimental css인 `accent-color` flag로 제공

### Categorize issue types with colors and icons
Issue 유형에 따라 색상/아이콘으로 구분
- Page errors(red)
- Upcoming breaking changes (yello)
- Possible improvements (blue)

### Delete trust tokens
Trust token을 삭제할 수 있게됨

### View details on blocked features in the Frame details view.
`Permission policy ` section에서 블럭된 feature 목록을 볼 수 있다.

### Filter experiments in the Experiments setting
`Experiments` setting에서 필터링 제공

### New `Vary Header` column in the Cache storage pane

### Source panel improvements
#### Support for new JavaScript features
[`private branch check`](https://v8.dev/features/private-brand-checks) 기능 제공

#### Enhanced support for breakpoints debugging
`Webpack` `Rollup` 등에 의해 분리된 코드에 breakpoint를 걸어도 제대로 동작하게 됨

#### Support hover preview with `[]` notation
배열 멤버 연산자를 통한 값에 hover preview가 동작하게 됨

#### Improved outline of HTML files
HTML file의 javascript function을 outline에서 제대로 보여준다.

#### Proper error stack traces for Wasm debugging
