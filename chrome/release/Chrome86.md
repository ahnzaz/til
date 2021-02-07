# [DevTools](https://developers.google.com/web/updates/2020/08/devtools)
## New media panel
`Media panel`에서 video playback 정보를 표시할 수 있게 되었다.

`chrome://media-internals`에서 미디어 관련한 디버깅 정보 확인 가능

frame 디코드 정보, drop frame, player 에러 등에 대한 자세한 정보 확인 가능

## Capture node screenshots via Elements panel context menu
element panel에서 오른 클릭으로 `Capture node screenshot` 가능

## Issues tab updates
Console panel에서 이슈 경고바가 일반 메시지로 대체됨
`third-party cookie issue` 체크박스를 체크하면 해당 이슈도 볼 수 있음

## Emulate missing local fonts
`Rendering tab`에서 `Disable local fonts` 기능으로 `@font-face`에서 누락된 `local()` 폰트 소스를 에뮬레이트 할 수 있다.

local font를 disable하면 아래와 같은 장점이 있다.
- web font 로딩 퍼포먼스 측정, 최적화가 쉬움
- `@font-face` rule 오류 확인이 쉬움
- web font와 local 버전 차이점 파악이 쉬움

## Emulate inactive users
[`Idle detection API`](https://web.dev/idle-detection)를 통해 비활성 사용자를 체크하고 idle state 변경을 탐지하여 반응할 수 있다. `Sensors` 탭에서 idle state를 에뮬레이트 할 수 있다.

## Emulate `prefers-reduced-data`
`prefers-reduced-data` media query는 사용자가 데이터 절약을 위해 대체 콘텐츠를 선호하는지 여부를 알 수 있음

![Emulate prefers-reduced-data](https://developers.google.com/web/updates/images/2020/08/emulate-prefers-reduced-data.png)

## Support for new Javascript features
- `logical assignment operators`
- Pretty-print [numeric seperator](https://v8.dev/features/numeric-separators)

## Lighthouse 6.2 in the Lighthouse panel

## Deprecation of "other origins" listing in the Service Workers pane
`chrome://serviceworker-internals/?devtools` tab에서 다른 origin에서 시작된 service worker의 전체 목록을 확인할 수 있다.
Application panel > Service workers에 있던 동일한 내용의 기존 항목은 제거되었음

## Show coverage summary fr filtered items
Coverage tab에 필터가 적용되면 이제 DevTool에서 커버리지 정보를 동적으로 재산출하여 표시한다. 이전에는 Coverage 탭에서 전체 커버리지 정보를 일괄적으로 표시하였다.

## New frame details view in Application panel