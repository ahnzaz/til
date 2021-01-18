# rush.js cheatsheet

### `rush install`
- 의존성을 설치, 설치된 의존성을 업데이트 하지 않음

### `rush update`
- `package.json` file이 변경되면 실행
- `rush install`과 다른 점은 의존성을 업데이트함

### `rush update --purge`
의존성 관리에 문제가 생겼다고 판단될 때 실행. 모든 의존성 설치를 제거하고 재설치한다.

### `rush clean`