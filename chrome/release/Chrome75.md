# What's new in Chrome 75
## Feature
### Desynchronized canvas
- Canvas에 drawing할 때 DOM UI 업데이트와의 간격 때문에 latency가 생긴다.
- canvas 생성시에 ```desynchronize : true```로 값을 주면 비동기로 인해 latency가 줄어든 canvas가 생긴다.
- 원리는 잘 모르겠음
- [Platform link](https://www.chromestatus.com/feature/6360971442388992)

### Web share API
- OS의 Share 기능(And, ios의 모바일 OS에서만 가능할 듯?)을 WebAPI로 사용할 수 있는 기능
- 75부터 File sharing이 가능해졌다. audo, image, video가 가능하고 앞으로 더 많은 파일이 지원 가능할 듯.
- 아래 code로 사용 가능 여부 확인
- https://developers.google.com/web/updates/2019/06/nic75
```javascript
const webShareAvailable = {
	links : 'shared' in navigator,
	files : 'canShare' in navigator
}
```

## Dev tools
### Meaningful preset values when autocompleting CSS functions
- CSS 값이 function인 경우 default value를 표기해줌으로써 function임을 알려줌

### Clear site data from the command menu
- 기존의 site data를 clear하기 위해서는 application에서 수행해야 했다.
- command에서 clear resource를 통해 clear할 수 있음

### View all IndexedDB databases
- 별도의 Iframe context에 저장된 IndexedDB도 한번에 볼 수 있게 됨

### view uncompressed size on hover
- Network panel에서 각 리소스에 마우스 올리면 압축전 사이즈를 알 수 있음
- 기존에는 uncompress와 compressed를 동시에 보여주고 있었음

### Inline breakpoints
- 야 드디어 한줄에서 function call마다 inline breakpoint를 걸 수 있게 되었다!

### Disable the detailed inspect tooltip
- Ctrl(command)누르고 있으면 tooltip 임시적으로 disable됨. 옵션에서 아예 끌 수도 있음

### Enable tab moves focus
- Ctrl + [으로 inspect tab 변경 가능

### Bonus tip
- Command menu로 dark/light mode 쉽게 변경 가능