# Entry point
- MediaPlayer

- MediaPlayer.initialize -> StreamController.load() -> ManifestLoader async success -> XLinkController.resolveManifestOnLoad() (Manifest resolve) -> `XLINK_READY` event -> ManifestLoader.onXlinkReady() -> `INTERNAL_MANIFEST_LOADED` event -> ManifestUpdate.update() 최초 manifest update -> TimeSyncController.initialize() -> `TIME_SYNCHRONIZATION_COMPLETED` event -> (ProtectionController 호출) -> StreamController.composeStreams() 스트림 구성 -> StreamController.switchStream() 특정 스트림으로 변경 -> openMediaSource() -> onMediaSourceOpen -> `SOURCE_INITIALIZED` event -> StreamController.activeStream() -> PlaybackController.play()

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

최초 fragment 요청 : `INITIAL_FRAGMENT_NEEDED`

# Stream
# Stream processor

# SourceBufferSink : SourceBuffer wrapper?

# Representation Handler

# DashHandler
- DashManifest 처리기