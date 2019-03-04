# Chrome Auto Play policy
[Link](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes)
## 정책 변경 배경
- Web환경에 Video/Audio가 다수 추가되면서 Audio로 인한 사용자 경험에 방해가 되는 경우가 많아졌음.
  - 예) 원치 않는 영상 자동 재생, 시끄러운 광고, 보이지 않고 소리만 나는 스팸 등
## Chrome의 자동 재생 정책
- 음소거 자동 재생은 항상 허용됨
- 소리 자동 재생은 다음의 경우에 한해서 가능
  - 클릭, 터치 등으로 해당 도메인에 유저가 반응한 경우
  - PC에서 [MEI](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes#mei)가 임계점을 넘은 경우, 사용자가 특정 도메인에서 Video를 자주 봐 왔던 경우
  - Mobile에서 사용자가 특정 페이지를 홈스크린에 추가한 경우
- Top Frame에서 하위 iframe에 자동 재생 권한을 승계할 수 있음
## Media Engagement Index
- MEI는 각 사이트에서 사용자의 미디어 재생 경향을 학습하여 점수를 매김
- 아래의 경우에 한해서 점수 가산
  - 7초 이상 영상/소리 재생
  - 음소거가 아님
  - Tab with video is active(무슨 의미인지 정확히 모르겠음)
  - 비디오 엘레먼트의 크기가 200*140 픽셀 이상
- Upper thresold를 넘어야 되는건가? 잘 모르겠음
