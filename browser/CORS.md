# CORS(Cross-Origin resource sharing)
## Intro
회사에서 ```<video>```태그를 가지고 작업하고 있는데 ```crossorigin='anonymous'``` attribute를 제거하는 코드를 제거하였더니 비디오가 재생되지 않는 문제가 있었다. 막연히 ```crossorigin='anonymous'```는 same-origin policy를 무시하고 CORS가 가능하게 해줄거라 생각했었으나 반대였다.
CORS를 그동안 막연하게만 이해하고 있다는 걸 깨달아서 제대로 조사해야 겠다고 느껴서 문서로 남긴다.
## Why need this?
CORS에 대해 이해하기에 앞서 왜 이런 것이 필요한지부터 조사해 보았다.

### Same-origin policy
브라우저는 기본적으로 [Same-origin policy]를 따른다. Same-origin policy란 특정 한 origin에서 로드된 html 문서나 javascript는 해당 origin의 리소스에만 접근하도록 브라우저가 제한하는 정책이다.

웹이 발전하면서 과거와는 달리 html element와 XHR등이 다른 origin의 리소스를 불러오는 경우도 매우 많아졌는데 이를 악용한 악성코드들도 넘쳐나게 되면서 브라우저는 기본적으로 source의 origin과 다른 origin에 위치한 리소스를 신뢰하지 않게 된 것이다.

> [origin이란?](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy#Definition_of_an_origin)<br />
> IE는 port는 origin 구분에서 제외하는 모양이다.

origin은 ```document.domain```의 값을 변경함으로써 제한적으로 cross-origin을 지원할 수도 있다.

### Cross-origin
- Cross-origin write : 일반적으로 가능하다. link, redirects, form 제출등이 가능하다.
- Cross-origin read : 일반적으로 불가능하지만 embed로 뚫리는 일이 많다.
- Cross-origin embed : 일반적으로 가능하다.
  - ```<script src='...'></script>```로 로드된 Javascript의 문법적 에러 발생 시 에러의 자세한 정보를 ```window.onerror```로 알기 위해선 same-origin이여만 한다. 과거에는 이 허점을 이용해 [구글 메일 로그인 여부를 알아내는 등](https://blog.jeremiahgrossman.com/2006/12/i-know-if-youre-logged-in-anywhere.html) 보안 문제가 있었다고 한다.
  - ```<link rel='stylesheet' href='...'>```의 CSS
  - ```<img>``` tag
  - ```<video>```, ```<audio>``` tag
  - ```<object>```, ```<embed>```, ```<applet>```으로 불려진 플러그인
  - ```@font-face```
  - ```<frame>```, ```<iframe>```. ```X-Frame-option``` Header로 cross-origin frame을 막눈 것도 가능

### Cross-origin request 가능케 하려면?
CORS를 도입해야 한다.

### Cross-origin request 막으려면?
- Write : [CSRF](https://www.owasp.org/index.php/Cross-Site_Request_Forgery_%28CSRF%29) Token을 도입한다.
- Read : Embed되지 않게 한다.
- Embed : Embed되지 않게 하려면 위의 embed 대상 리소스로 해석되지 않게 한다. HTML은 ```<script>``` tag를 통해 javascript로 해석되지 않듯이 말이다.

## [JSONP](https://ko.wikipedia.org/wiki/JSONP)
JSONP는 여기서 다룰 대상이 아니므로 간략히 언급하자면
```<script>``` tag는 cross-origin embed가 가능하므로 API서버가 callback function으로 데이터를 감싸서 반환함으로써 브라우저를 통해 실행 가능하도록 하는 꼼수이다.

## [CORS]
이처럼 보안을 위해 [same-origin policy] 정책이 도입되었지만 현대의 웹은 원격 resource에 접근하는 일이 빈번하므로 이를 극복할 수 있는 수단이 필요했고 이것이 CORS 개념으로 정립되었다.

### CORS를 지원해야 할 Request
- XMLHttpRequest와 Fetch API
- Web fonts
- WebGL Texture
- ```drawImage()```를 통해 ```canvas```에 그려질 image/video frame.

### 동작 방식
CORS의 기본 개념은 Request header에 추가 헤더를 통해 cross-origin을 요청하고 서버 역시 헤더를 통해 요청한 origin이 resource에 접근할 수 있음을 명시함으로써 동작한다.


### HTML tag의 CORS

### 해결 전략


[same-origin policy]:(https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
[CORS]:(https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)