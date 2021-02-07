# Chrome pseudo selector

## `-webkit-media-text-track-container`
네이티브 자막 `<div>` container 부분. css styling하였더니 `<div>`가 사라져 보이질 않음. devTool로 element styling은 가능하나 .css styling은 불가

## `-webkit-media-text-track-display`
자막 백그라운드 그려지는 부분. 여기를 스타일링해서 좌우 여백을 부여하였음. `border-radius` 값은 `!important`로 되어 있어서 그런지 재정의가 안됨. (버그일수도)