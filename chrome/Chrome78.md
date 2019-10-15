# [Chrome 78 - What's new in DevTools](https://www.youtube.com/watch?v=VNkctDLYP6o)

## Multi-client support in the audios panel
- Audit panel을 사용하면 웹페이지 퍼포먼스를 프로파일링하여 점수를 보여주고, 주요 문제점을 표시하고 그에 대한 해결책을 제시해준다.
- Request blocking, ajax 요청이나 script load 요청 등 네트워크 리퀘스트를 block할 수 있는 기능

## Payment handler debugging
- Payment API 조사 필요
- Payment handler debugging을 사용하면 devTool이 종료되어 있어도 3일간의 payment event를 녹화할 수 있다. 왜 3일을 했을까? 이유가 있을 듯

## Lighthouse 5.2 in the audits panel

## Largest contentful paint in the performance panel
- Performance panel에서 ```LCP``` 마커를 클릭하면 Largest content paintful event가 발생한 엘리먼트를 확인할 수 있다.
- LCP가 항상 가장 큰 엘리먼트를 표현하는 건 아닌 듯. 기준을 조사할 필요가 있어보임

## File devTools issues from the main menu
- 메인 메뉴에서 바로 devTool 이슈를 파일링 할 수 있는 기능 추가