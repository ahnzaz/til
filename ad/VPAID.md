# VPAID
## Initialize
### VPAID Ad Unit
VAST를 사용하는 경우 VPAID 객체로 데이터를 전달하는 유일한 방법은 ```<AdParameters>``` 엘레먼트를 사용하는 것이다.
VAST context에서는 ```initAd()``` 메소드 호출로 Linear/NonLinear 광고를 로드한다.

### Event and tracking
Video player가 VPAID event를 받아 VAST내의 알맞은 Tracking URI로 request를 전달해야 한다.

### Click
아래는 Video player가 click을 처리하는 로직에 대해 설명한다.
- event.data.url이 optional
- event.data.playerHandle이 trued이며 e.data.url이
  - Not defined : VideoClicks/ClickThrough element를 사용
  - Defined : event.data.url 사용
- event.data.playerHandles === false인 경우, landing page를 오픈하면 안된다. AdUnit이 스스로 landing page를 새 윈도우에 열 것임.

Note : event.data.handles의 값과 관계없이, AdClickThru event 수신 시 ```<VideoClicks>```, ```<ClickTracking>```에 명시된 URI에 요청은 보내야 한다. (응답을 표시할 여부는 playerHandles flag에 달렸나 봄)

### Protocol