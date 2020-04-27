# HTMLVideoElement event
## [`waiting`](https://html.spec.whatwg.org/multipage/media.html#event-media-waiting)
### Behavior
### Counter-intuitive behavior
- 네트워크 속도가 느린 경우 첫 프레임조차 렌더링 되기 전 control을 통해 재생 시도하면 즉시 `waiting`이 발생할 수 있다. 이 경우 `readyState === 0(HAVE_NOTHING)`이므로 구분할 수 있다.