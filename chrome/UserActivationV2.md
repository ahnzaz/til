# User Activation V2
[원본 mustaqahmed@chromium.org/UAv2](https://github.com/mustaqahmed/user-activation-v2)
## 소개
### User Activation이란?
사용자가 타이핑, 마우스 클릭 등으로 페이지와 실질적으로 인터랙션 중임을 의미하는 용어이다.
브라우저는 abusable API 사용을 통제하고 User Activation을 통해서만 허가할 수 있다. 대표적으로 window.open() 등이 있다. 브라우저는 점점 더 User activation gated한 API들을 만들어 냈고
### 작금의 문제
브라우저들은 user activation에 의존적인 API를 점점 더 만들어 내서 웹 상황은 헬. 예를 들어 Pop-up block 로직만 해도 [무수히 많은 분기](https://docs.google.com/document/d/1hYRTEkfWDl-KO4Y6cG469FBC3nyBy9_SYItZ1EEsXUA/edit)를 만들어 내고 있다.
HTML 표준은 스펙만 정의할 뿐, 세부 구현에는 관여하지 않기 때문에 해결책이 될 수 없음.
### 그래서 어쩌라고?
새로 도입된 UAv2는 cross-browser환경에서 구현하기 쉽도록 UserActivation model을 새로 정의하였다.

## 새 모델 상세
### Frame마다 Two-bit state
- HasSeenUserActivation : Sticky bit로 최초 User activation에서 set되고 해제되지 않는다. ```<video> autoplay``` attribute나 Navigator.vibrate()등에 쓰여짐
- HasConsumableUserActivation : transient bit로 User activation마다 set되나 Activation consuming API에 의해 rest되거나 일정 시간마다 reset된다.
### Frame에 상태전파
- 특정 프레임에서 User activation될 때 상위의 모든 frame의 window 객체에 User activated된다.
- transient bit가 reset될 때는 frame tree에 있는 모든 window객체에서 bit가 해제된다.
### 주요 기능 변경
- 기존의 프로세스별 제스쳐 토큰을 이용한 방식에서 위 처럼 프레임별 비트로 변경되었다. 이를 통해
    1. User API마다 Token을 관리할 필요성 사라짐
    2. User activation이 Stack scope에서 Frame scope로 변경됨
    3. 만료 시간 내의 여러 User activation이 하나로 합쳐짐
### User activation API 분류
User activation에 의존성이 높은 순으로 API를 분류하면 아래와 같다.
- Transient activation consuming APIs : Transient bit가 set되어 있어야 하며 매 호출시 마다 transient bit를 reset하여 반복호출 하기 어렵다. windows.open()등
- Transient activation gated APIs : Transient bit가 필요하나 reset하지 않는다. ```Element.requestFullScreen()```등.
- Sticky activation gated APIs : Sticky activation bit만 필요하다. 최초 User activation만 block된다.