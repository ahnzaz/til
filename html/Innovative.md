# 1908 워크샵 발표 근거 마련
## Streaming 내재화 및 고도화를 통한 Contents delivery 안정성
- HLS, LHLS, SHLS등 표준 논의 및 메이저 벤더들이 어디까지 고려하고 논의중인지 확인
- Youtube, Netflix, Twitch등의 live platform과 BitMovin등의 플레이어 벤더들은 어떻게 진행중인가.

## DRM, N-Screen 지원을 통한 상품성 확장 방향

# 다양한 Interactive Contents 지원을 통한 플레이어의 범용성 확장
- 경쟁사는 어디까지 지원중인가?
- WebVR, WebXR등의 표준
- Multitrack media
- 그 외에 어떤 콘텐츠들이 있는지?

## Low HLS
- 애플 발표 : https://developer.apple.com/videos/play/wwdc2019/502/
- lhls 확장 표준 : https://developer.apple.com/documentation/http_live_streaming/protocol_extension_for_low-latency_hls_preliminary_specification
- hls.js에서 구현 : https://medium.com/freshdevelopers/implementing-lhls-on-hls-js-4fc4558edff2
- wowza의 반응 : https://www.wowza.com/blog/apple-low-latency-hls

## Secure HLS


## DRM

## WebVR
- 170308 - Facebook 360 시작 : https://newsroom.fb.com/news/2017/03/introducing-facebook-360-for-gear-vr/
- vimeo 360 재생 시작 : https://www.theverge.com/2014/12/8/7353199/vimeo-is-now-offering-4k-video-downloads-but-wont-stream-just-yet
- vimeo 360 video 후편집 기능 지원 - https://vimeo.com/blog/post/360-degree-video-editing-process/


- BitMovin : DRM, MPEG-DASH, DASH Native, HLS Web-Based, HLS Native
- Multiplatform : Chromecast, appletv, amazon tv, android tv, samsung tv, xbox one, https://bitmovin.com/docs/player/articles/device-and-cross-browser-support
- DRM : Dash DRM, HLS Encryption 모든 플랫폼에서 전체 스펙 지원 중 : https://bitmovin.com/docs/player/articles/browser-drm-support
  
- JWPlayer : WideVine, PlayReady, FairPlay, AES-128


### BrightCove player 
#### DRM : https://support.brightcove.com/configuring-brightcove-player-drm
- MPEG-DASH with Native/EME supported CENC DRMs
HLS with FairPlay

#### [HLS](https://support.brightcove.com/hls-plugin)
#### 360, cardboad VR support


## Adaptive streaming support
### Player
| Player     | BitMovin | JWPlayer | BrightCove |
| ---------- | -------- | -------- | ---------- |
| HLS        | O        | O        | O          |
| HLS Native | O        | O        | O          |
| MPEG-DASH  | O        | O        | O          |

### Service
| Service    | Youtube | Netflix | Twitch |
| ---------- | ------- | ------- | ------ |
| HLS        | O       | O       | O      |
| HLS Native | O       | O       | O      |
| MPEG-DASH  | O       | O       | ?      |

## DRM
### Player
| Player    | BitMovin | JWPlayer | BrightCove |
| --------- | -------- | -------- | ---------- |
| HLSe      | O        | ?        | ?          |
| FairPlay  | O        | O        | O          |
| PlayReady | O        | O        | O          |
| WideVine  | O        | O        | O          |
### Service
| Service   | Youtube | Netflix | Twitch |
| --------- | ------- | ------- | ------ |
| HLSe      | O       | ?       | ?      |
| FairPlay  | O       | ?       | O      |
| PlayReady | O       | O       | O      |
| WideVine  | O       | O       | O      |

## N-Screen
### Player
| Player     | BitMovin | JWPlayer | BrightCove |
| ---------- | -------- | -------- | ---------- |
| ChromeCast | O        | O        | O          |
| Smart TV   | O        | O        | O          |
| DMP*       | O        | O        | O          |
### Service
| Service    | Youtube | Netflix | Twitch |
| ---------- | ------- | ------- | ------ |
| ChromeCast | O       | O       | O      |
| Smart TV   | O       | O       | ?      |
| DMP*       | O       | O       | ?      |
DMP : Digital media player(such as Apple TV, Android TV)

## 360/VR Video
### Player
| Player     | BitMovin | JWPlayer | BrightCove |
| ---------- | -------- | -------- | ---------- |
| 360 render | O        | O        | O          |
| VR render  | O        | ?        | O          |
### Service
| Service    | Youtube | Netflix | Twitch |
| ---------- | ------- | ------- | ------ |
| 360 render | O       | X       | X      |
| VR render  | O       | X       | X      |

## LHLS 지원 현황
- ['19년 06월 LHLS 발표](https://developer.apple.com/videos/play/wwdc2019/502/)
- [Wowza에서 분석 글 공개](https://www.wowza.com/blog/apple-low-latency-hls)
- 이후 업계에서 공개적으로 표명한 사안은 찾기 어려웠습니다.