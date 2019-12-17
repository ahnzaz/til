# Worklog

## 20191217
### TODO
- [x] TMK + PDQF 알고리즘 확인 보고서 전달
#### 통계
- [ ] 통계 모듈 대책 회의

#### 미리보기
- [ ] 미리보기 prototype PR 리뷰 중

## 20191216
- 워크숍 일정으로 업무 없음

## 20191213
### TODO
#### QoE
- 미리보기 PR 완성했으니 QoE부터 구현
- [ ] `throttle` 처리 추가 : `sampleTime` 넣어서 해결해야 함
- [ ] `paused` 발생 시 timer tick 처리

#### 미리보기 플레이어
- [ ] 미팅 잡아서 리뷰하고 피드백 반영, 일정 자체는 딜레이되었으므로 여기서 멈출 것

#### Study
- [ ] [Microtask in detph 읽어보기](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)

## 20191212
### TODO
#### 미리보기 플레이어
- [x] Viewport 표시기 observable util 만들기. (Polyfill 사용)
- [x] dns-prefetch 알아보기 및 적용
- [x] 리소스 2개 이상 확보해서 dns-prefetch 적용 확인

#### QoE
- [ ] `throttle` 처리 추가 : `sampleTime` 넣어서 해결해야 함
- [ ] `paused` 발생 시 timer tick 처리

#### Study
- [ ] [Microtask in detph 읽어보기](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)

## 20191211
### TODO
#### 미리보기 플레이어
- [ ] dns-prefetch 알아보기 및 적용
- [ ] 리소스 2개 이상 확보해서 dns-prefetch 적용 확인
- [x] bulk data에 gif, image preset 추가 (리소스 확인)

#### QoE
- [ ] `throttle` 처리 추가 : `sampleTime` 넣어서 해결해야 함
- [ ] `paused` 발생 시 timer tick 처리

#### Study
- [ ] [Microtask in detph 읽어보기](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)

## 20191210
### TODO
#### 미리보기 플레이어
- [ ] dns-prefetch 알아보기 및 적용
- [x]] 샘플 페이지 forking
- [x] bulk data mockup

#### QoE
- [ ] `throttle` 처리 추가 : `sampleTime` 넣어서 해결해야 함
- [ ] `paused` 처리


## 20191206
### TODO
#### QoE
- [ ] `paused` 처리
- [x]] time overlap 수정 방안 고민 : `subscribeOn`과 `asyncScheduler`를 통해 해결
- [ ] `throttle` 처리 추가 : `sampleTime` 넣어서 해결해야 함
#### PT
#### 기타 업무


## 20191205
### TODO
#### QoE
- [x] Code review 자료 만들기
  - QoE 특이 spec 설명
  - QoE module 전체 구조
  - 특이 사항에 대응하기 위한 구현체
  - 스펙 확장 시 수정 포인트
  - 남은 과제
#### PT
#### 기타 업무

## 20191204
### TODO
#### QoE
- [x] Smash test 보강
#### PT
- [ ] PT smash test 작성
#### 통계 전반
- [x] 리뷰 중에 개선 빠진 것 확인
- [ ] Multiple player test page 작성
#### Study
- [ ] GraphViz 사용법 익히기
#### 기타 업무
- [x] 동료 리뷰 및 C-Review
#### Review
QoE smash test를 재작성 하면서 단위 오류 등의 사소한 오류를 더 발견할 수 있었다. 확실히 e2e 테스트가 도움이 되는것은 맞는데 빠른 속도로 테스트 시나리오를 짜는데 익숙하기가 어렵게 느껴진다. 조금 더 연습을 해야 하나?

## 20191203
### TODO
#### QoE
- [x] Timing body test case 작성
- [x]] Measurements TC 작성
- [ ] Smash test 보강
#### PT
- [ ] PT smash test 작성
#### 통계 전반
- [ ] Multiple player test page 작성
#### Study
- [ ] GraphViz 사용법 익히기
#### 기타 업무
- [ ] 동료 리뷰 및 C-Review
- [ ] Immersive audio 강연 17:00 참석 -> 실패
- [X] 성교육/괴롭힘 방지 교육 참석
### Review
- Measurement 구성 요소를 mocking 하는데 시간이 조금 걸렸다. 대신에 fakeTimer와 Subject를 자유자재로 사용하여 TC를 작성하는데 익숙해졌다.
- Stroke plus를 통해 gesture input를 많이 만들어놔서 내일부터 작업 속도가 조금 더 빨라질 수 있겠다. 앞으로 유용한 액션을 많이 만들어 봐야겠다.


## 20191202ㅎ
### TODO
- [ ]: QoE unit test code 작성
### Review
- 오늘부터 work log를 작성해서 업무 반성을 해봐야겠다.
- [sinon faketimer](https://sinonjs.org/releases/latest/) API usage를 익히는데 시간을 조금 보냈다.
- ```[...new Array(n)]```이 mocha context에서는 제대로 동작을 안해서 상당한 시간을 소모했는데. 재현해보고 이유를 확인해야겠다.ㅎ