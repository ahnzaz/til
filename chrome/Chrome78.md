# Chrome 78
## [Dev tools](https://www.youtube.com/watch?v=VNkctDLYP6o)
### Multi-client support in the audios panel
- Audit panel을 사용하면 웹페이지 퍼포먼스를 프로파일링하여 점수를 보여주고, 주요 문제점을 표시하고 그에 대한 해결책을 제시해준다.
- Request blocking, ajax 요청이나 script load 요청 등 네트워크 리퀘스트를 block할 수 있는 기능

### Payment handler debugging
- Payment API 조사 필요
- Payment handler debugging을 사용하면 devTool이 종료되어 있어도 3일간의 payment event를 녹화할 수 있다. 왜 3일을 했을까? 이유가 있을 듯

### Lighthouse 5.2 in the audits panel

### Largest contentful paint in the performance panel
- Performance panel에서 ```LCP``` 마커를 클릭하면 Largest content paintful event가 발생한 엘리먼트를 확인할 수 있다.
- LCP가 항상 가장 큰 엘리먼트를 표현하는 건 아닌 듯. 기준을 조사할 필요가 있어보임

### File devTools issues from the main menu
- 메인 메뉴에서 바로 devTool 이슈를 파일링 할 수 있는 기능 추가

## [Feature](https://developers.google.com/web/updates/2019/10/nic78)
### CSS Properties and Values API
Custom properties라 불리는 CSS variables 기능 도임
CSS에 커스텀 프로퍼티와 값을 정의하여 다른 CSS에서 런타임에 사용할 수 있음
```css
html{
    --my-color:url('not-a-color'); // Opps, not a color!
}
.thing {
    color : var(--my-color);
}
```

```javascript
window.CSS.registerProperty({
    name:'--my-color',
    syntax:'<color>',
    inherits : false,
    initialValue : 'black'
});
```

### Fresher service workers
```importScripts()```로 임포트 된 스크립트에 대해 서비스워커에서 byte-for-byte 체크하여 변동사항이 있으면 스크립트를 리프레시함
이전에는 url에 version등을 추가하거나 해서 새로고침하는 수 밖에 없었음
Chrome 78부터는 ```importScripts()```로 임포트 된 스크립트를 실시간으로 서비스 워커에서 바이트단위로 체크해서 변경되면 업데이트 함

### New origin trials
실험적인 기능이나 API를 테스트 할 수 있는 환경. 일반적으로 사용자가 flag를 켜야만 테스트 해 볼 수 있으나 origin trial에 origin을 등록하면 해당 origin에서는 실험적인 기능이 flag 요청 없이도 동작한다.

### Native file system
Chrome78부터 Origin trial로, 80부터 본격적으로 실행됨
Native file system access API 도입

### SMS receiver
Device에 수신된 SMS를 가져올 수 있는 API 추가.