# Entry point
- MediaPlayer

# StreamController
- load(manifest)
- autoplay 관장
- manifestUpdater
- eventController
- 최초 Manifest update -> `onManifestUpdated()` -> TimeSyncController initialize -> `TIME_SYNCHRONIZATION_COMPLETED` event -> composeStreams -> attachSource -> openSource -> `SOURCE_INITIALIZED`

`onMediaSourceOpen` -> autoplay

# XLinkController
- 파싱된 Manifest의 XML 문법 처리
## .resolveManifestOnLoad()
- Period, AdaptationSet까지 파싱한 뒤 `XLINK_READY` event 발신
  - ManifestLoader에서 `INTERNAL_MANIFEST_LOADED` event 발신


# PlaybackController

# MediaSourceController
- MediaSources 담당

ManifestLoader에서 mpd 로드 한 후 XLinkController.resolveManifestOnLoad()호출

# ManifestUpdate
- `INTERNAL_MANIFEST_LOADED` 이벤트를 받아 manifest update 시작
- `refreshManifest()` : Manifest refreshing

# TimeSyncController
- [ ] 

# Util
X2JS : XML <-> JSON converter

# Schedule Controller
- 재생에 맞추어 fragment 로드
## `.schedule()`
- 스케쥴 콜백

# Stream
# Stream processor