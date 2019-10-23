# What's new in Chrome 76
## Features
- Progressive web app 설치 버튼을 omnibox로 이동함
- Mobile에서 mini-infobar라 불리는 아래의 작은 다이얼로그를 추가함
  - ```beforeinstallprompt``` event에서 ```e.preventDefault()```를 호출하면 mini-infobar를 표시하지 않음
- PWA가 android에 설치될 경우 WebAPK를 요청하여 설치한다. 그 후 안드로이드가 자동으로 manifest를 체크해서 업데이트를 설치한다. 매일마다 수행
- Dark mode/Dark theme이 대부분 지원된다.
```css
@media (prefers-color-scheme:dark){
    body{
        color:white;
        background-color:black;
    }
}
```
- ```Promise.allSettled()``` Promise.all()과 유사하지만 모든 Promise가 settled 상태가 되기 전까지 대기한다.
- ```blob```을 위한 세 메소드 추가
```typescript
const test = await blob.text();
const aBuiff = await blob.arrayBuffer();
const stream = await blob.stream();
```
- Asynchronous clipboard API도 추가됨.

## [Dev tools](https://www.youtube.com/watch?v=GLUB2yzk0ZQ&list=PLNYkxOF6rcIBDSojZWBv4QJNoT4GNYzQD)
### Autocomplete with CSS values
CSS key를 잊었을 때 값을 입력하면 적절한 key를 찾아주는 기능

### New UI for network settings
이전 버전에서는 network panel이 줄어들면 몇 가지 옵션을 쓸 수 없었지만 이제는 자동으로 조절됨

### HAR import and export buttons
네트워크 로깅 후 결과 리포트를 HAR 파일로 export 하거나 import 할 수 있다
또한 HAR 파일이 websocket request message도 포함된다.

### Real-time total memory usage
Memory panel에서 전체 메모리 사용량을 실시간으로 보여줌

### Service worker port numbers
이전 버전에서는 어떤 서비스 워카가 어떤 포트인지 알 기 어려웟지만 이제는 타이틀에 표현해줌

### Inspect background fetch and background sync events
application panel에서 background fetch 내용을 알 수 있게 되었다.

### Experimental Puppeteer for Firefox project
Firefox, chrome의 동일한 node api로 puppeteer를 사용할 수 있게 되었다. 퍼펫티어가 뭘까.

##3 Screenshots + Accessibility Insights
[Accessibitiy Insights](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni) 익스텐션을 쓰면 tab order를 시각화 해주고 fullscreen 캡쳐가 된다.