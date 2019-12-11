# Chrome 79
## [Dev tools](https://www.youtube.com/watch?v=VNkctDLYP6o)

## [Feature](https://developers.google.com/web/updates/2019/10/nic78)
### Maskable Icon
PWA 앱 인스톨 시 표시되는 아이콘에 mask를 씌울 수 있는 기능

### WebXR
새 WebXR device API 추가됨

### Origin trials
특정 오리진에서는 플래그를 켜지 않고도 chrome의 experimental feature를 사용할 수 있게 하는 기능

2 가지 기능이 추가되었다는데 뭐가 추가된건지 확인 필요

### [New wake lock API](web.dev/wakelock)
- Web page에서 디바이스의 wake lock을 요청할 수 있게 됨

### rendersubtree attribute
- 렌더 트리에서 특정 부분은 스킵해도 됨을 브라우저에게 알리는 용도. 렌더링을 스킵하여 브라우저 퍼포먼스를 향상시킴
- `rendersubtree="invisible"`로 설정하면 브라우저가 렌더링을 스킵함
- `activatable`로 설정하면