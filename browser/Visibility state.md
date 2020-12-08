# [Visibility State API](https://www.w3.org/TR/page-visibility/)

## Issue
- safari, chrome 별로 visibility change시 동작 및 media 컨트롤이 다름, 아래 Test result 참조
- iOS Chrome에서 background 진입 시 `pause()`를 호출하여도, foreground 복귀 시 자동으로 resume됨, pause 유지하려면 onvisibilitychange에서 다음 tick에 `pause()`를 다시 호출해 줘야 함. `Promise.resolve()`로 불가, `setTimeout()` 써야함
- iOS 13.2.3 safari/chrome, hls 재생 중 bg->fg 복귀 시 재생 불가 현상
  - [Official sample](https://developer.apple.com/streaming/examples/advanced-stream-ts.html) 에서도 발생
  - 거의 100% 발생함

## Test result
`document.visibilityState` 각 플랫폼 별 동작 테스트 결과(비 직관적인 부분 *itallic* 처리)
- Date : 2020-12-08
- iOS(13.2.3), Safari
- Android(9), Chrome(86)

| Platform | Case           | visibilityState | Native media | `paused` | Desc |
| -------- | -------------- | --------------- | ------------ | -------- | ---- |
| iOS      | Tab background | `hidden`        | not paused   | false    |      |
|          | Tab foreground | `visible`       | Keep playing | false    |      |
|          | App background | `hidden`        | Paused       | *true*   |      |
|          | App foreground | `visible`       | Resumed      | true     |      |
| Android  | Tab background | `hidden`        | Paused       | false    |      |
|          | Tab foreground | `visible`       | Resumed      | true     |      |
|          | App background | `hidden`        | Paused       | *true*   |      |
|          | App foreground | `visible`       | Resumed      | true     |      |

App/Tab background/foreground 전환 시 동작 및 paused 값이 다르므로 유의할 것