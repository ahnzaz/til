# [New in Chrome 87](https://developer.chrome.com/blog/new-in-chrome-87/)

## Camera pan, tilt, zoom

## Range requests and service workers
서비스 워커 안에서 `Ragne request`가 잘 동작하지 않았는데 수정됨

## Origin Trial: Font access API

## And more 
- Transferable Streams - ReadableStream, WritableStream, and TransformStream objects can now be passed as arguments to postMessage().
- We've implemented the most granular flow-relative features of the CSS Logical Properties and Values spec, including shorthands and offsets to make these logical properties and values a bit easier to write. For example, a single margin-block property can replace separate margin-block-start and margin-block-end rules.
- New @font-face descriptors have been added to ascent-override, descent-override, and line-gap-override to override metrics of the font.
- There are several new text-decoration and underline properties.
- And there are a number of changes related to cross-origin isolation.

# [DevTools](https://developers.google.com/web/updates/2020/10/devtools)

## New CSS Grid debugging tools
HTMLElement가 `display:grid`나 `display:inline-grid`가 있을때 `grid` badge가 생기며 토글해볼 수 있음

## New WebAuthn tab
Web Authentication API를 테스트할 수 있음

## Move tools between top and bottom panel
tool을 위아래로 옮길 수 있음

## Elements panel updates
### View the Computed sidebar pane in the Styles pane
`Computed` 사이드바 디폴트로 보임

### Grouping CSS properties in the Computed pane
`Computed` pane에서 CSS 그루핑할 수 있음

## Lighthouse 6.4 in the Lighthouse panel

## performance.mark() events in the Timings section
Peformance recoding에서 `performance.mark()` event가 기록됨

## New resource-type and url filters in the Network panel
Network panel에서 `resource-type:`, `image:` filter 사용 가능

## Frame details view updates
### Display COEP and COOP reporting to endpoint

### Display COEP and COOP `report-only` mode

## Deprecation of Settings in the More tools menu
Setting menu main panel로 옮겨짐

## Experimental features
### View and fix color contrast issues in the CSS Overview panel
color contrast 확인 가능

### Customize keyboard shortcuts in DevTools
DevTools 키보드 단축키 변경 가능