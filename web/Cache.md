# Web cache의 종류
(출처 : https://www.letmecompile.com/http-cache-%ed%8a%9c%ed%86%a0%eb%a6%ac%ec%96%bc/)

## Browser cache
웹브라우져 혹은 HTTP요청을 하는 클라이언트 어플리케이션들이 내부적으로 갖고있는 캐시이다.

## Proxy cache
실제 서버가 있는곳이 아닌 네트워크 관리자에의해 네트워크상에 설치되는하는 캐시다.
일반적으로 큰회사나 ISP의 방화벽(firewall)에 설치된다.
shared cache의 일종으로 많은 수의 사용자들에 의해 공유되어 사용되며, 레이턴시와 트래픽을 줄이는데 매우 도움이된다.

## Gateway cache(reverse proxy cache)
네트워크상에 설치되지 않고 실제 서버의 관리자에의해 설치 및 운영된다.
실제 서버의 앞단에 설치되어 요청에대한 캐쉬 및 효율적인 분배를 통해 서버의 응답 성능을 좋게하고, scalable하게 만들어 준다.
로드밸런서 등을 사용해서 실제 서버가 아닌 gateway cache로 요청을 reroute한다.
CDN은 이런 gateway 캐시를 유료로 제공해주는 서비스라고 볼 수 있다.

# HTTP request/response header spec
캐시에 관련된 헤더는 freshness 체크 방식과 validation check 방식을 기술하는 두 종류로 구분할 수 있다.

- freshness : 현재 cache에 저장된 리소스가 만료되었는지 확인한다.
- validation : 현재 cache에 저장된 리소스가 최신인지 확인한다.

HTTP 버전과 request/repsonse에 따라 표준에 아래와 같이 명시되어 있다.

|type|HTTP 1.0||HTTP 1.1||
|--|--|--|--|--|
| | REQUEST | RESPONSE | REQUEST | RESPONSE |
|validation|```if-modified-since```|```last-modified```|```if-none-match```|```ETag```|
|freshness|```pragma```|```expire```|```cache-control```|```cache-control```|

HTTP 1.1은 하위호환을 지원하므로 브라우저는 HTTP 1.0 헤더도 해석하지만 1.1 Header가 있는 경우 우선한다.


## [```cache-control```](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cache-Control) header
```cache-control``` 헤더는 request/response 양 쪽에 모두 지정할 수 있으며, cache 동작 방식을 명시한다. request에 담긴 cache-control 헤더가 repsonse의 헤더를 결정하지 못하며 독립적이다.

### cache request directives
```
Cache-Control: max-age=<seconds>
Cache-Control: max-stale[=<seconds>]
Cache-Control: min-fresh=<seconds>
Cache-Control: no-cache 
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: only-if-cached
```

### cache response directives

```
Cache-Control: must-revalidate
Cache-Control: no-cache
Cache-Control: no-store
Cache-Control: no-transform
Cache-Control: public
Cache-Control: private
Cache-Control: proxy-revalidate
Cache-Control: max-age=<seconds>
Cache-Control: s-maxage=<seconds>
```

### cache 확장 directives
```
Cache-Control: immutable 
Cache-Control: stale-while-revalidate=<seconds>
Cache-Control: stale-if-error=<seconds>
```

### 각 directive 설명

#### 캐시 방식
- ```public``` : 어느 캐시라도 reponse 데이터를 캐시할 수 있습니다. ```Expires``` header나 ```max-age``` directive가 없어 cache 대상이 아니여도 캐시할 수 있습니다.
- ```private``` : 공유 캐시는 캐시할 수 없으며 단일 사용자 캐시에서만 캐시할 수 있습니다. private cache에 저장할 수는 있습니다.

- ```no-cache``` : 리소스 재검증 요청을 항상 서버에 전송하도록 강제합니다.

- ```no-store``` : request/response 데이터 중 아무것도 캐시하지 않습니다.

- ```only-if-cached``` : 항상 캐시만 사용하며 최신 데이터 존재 여부를 서버에 확인하지 않습니다.

#### 만료
- ```max-age=<seconds>``` : 리소스 만료 시점을 초 단위로 지정합니다. ```Expires``` header와는 다르게 request 시점을 기준으로 합니다.
- ```s-max-age=<seconds>``` : ```max-age```, ```Expires```헤더를 overwrite하지만 (proxy 등의) 공유 캐시에만 적용하며, private cache는 무시합니다.

- ```max-stale[=<seconds>]``` : 만료된 리소스를 클라이언트가 받아들일지 여부를 결정합니다. 리소스가 만료되어서는 안되는 시간을 초 단위로 지정할 수 있습니다.
- ```min-fresh=<seconds>``` : 클라이언트가 요청한 리소스가 지정한 시간 동안은 만료되지 않아야 함을 의미합니다.
- ```stale-while-revalidate=<seconds>``` 🔧  : 백그라운드에서 비동기적으로 신규 리소스를 체크하는 동안 만료된 리소스를 받아들일지 여부를 결정합니다. 초 단위로 지정한 값은 클라이언트가 만료된 리소스를 얼마만큼 오랫동안 받아들일지 나타냅니다.
- ```stale-if-error``` 🔧 : 신규 리소스 체크에 실패했을 때 만료된 리소스를 받아들일지 여부를 결정합니다. 초 단위로 지정한 값은 처음 만료된 시각으로부터 얼마나 오랫동안 만료된 리소스를 받아들일지 결정합니다.

#### 재검증 및 리로딩
- ```must-revalidate``` : 리소스가 만료된 후에는 원본 서버에서 리소스 검증이 성공하지 않는 한 캐시를 사용해선 안됩니다. (뉘앙스로는 원본 서버, 즉 CDN이라면 CDN에서 검증이 성공한다면 결국 동일한 리소스가 전송될 수도 있을 듯)
- ```proxy-revalidate``` : ```must-revalidate```와 동일하지만 proxy와 같은 공유 캐시에만 적용되며 private-cache는 무시합니다.
- ```immutable``` : 응답 데이터가 변경되지 않음을 명시합니다. 만료 후에도 서버에서 변경되지 않으므로 (```if-none-match```나 ```if-modified-since```와 같은 조건부 재전송을 수행하지 않습니다. 

## [```if-modified-since```](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Modified-Since) header

지정된 시각 이후에 변경된 경우 ```200```과 함께 신규 리소스를 전달합니다. 수정되지 않았다면 리소스 없이 ```304``` 코드로 응답합니다. if-unmodified-since```와는 다르게 ```GET```, ```HEAD```에서만 사용할 수 있습니다.

## [```if-unmodified-since```](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-Unmodified-Since)
```GET```, ```HEAD```의 경우에는 요청한 리소스를 반환합니다. ```PUT``` 등의 변경을 요구하는 method에 대해서는 주어진 시간 이후로 리소스가 수정되지 않는 경우에만 받아들입니다. 주어진 시간 이후에 수정이 가해졌을 경우 ```412```(Predication failed) 응답과 함께 요청을 거절합니다.

## [```last-modifed```](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Last-Modified) header

서버에서 리소스가 가장 마지막으로 수정된 시각을 담고 있는 header입니다. ```ETag``` header보다는 부정확하지만 예비용으로 사용합니다.

# Major browser의 캐싱 메커니즘

## no-cache, validation hit, cache-hit시 resources download 속도
![https://cyberx.tistory.com/9](https://t1.daumcdn.net/cfile/tistory/25523B505582259707)

## 일반적인 cache 메커니즘 및 대응 전략

https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=ko

출처 : https://cyberx.tistory.com/9

## 브라우저 request type (출처 : https://cyberx.tistory.com/9)
### unconditional
- 캐시된 파일이 없는 경우
- 사용자가 ctrl+f5로 새로고침 한 경우
- 링크, 이전/다음 버튼, 주소창에 입력 후 엔터를 치는 경우 (리소스가 fresh하다면 캐시를 사용함)

### conditional
- cache-control, expires가 만료된 경우
- cache가 저장될 때 vary header와 같이 전달된 경우
- meta tag를 통한 refresh인 경우
- js의 location을 통한 refresh인 경우
- 사용자가 새로고침(f5) 한 경우

conditional request가 발생한 경우에는 freshnes에 관계 없이 서버에 revalidation을 요청합니다.

- [```cache-control```과 ```Expires``` 둘 다 없다면 브라우저가 휴리스틱하게 신선도(freshness)를 계산할 수 있도록 표준에서 정의하고 있음(last-modified-since를 기반으로)](https://tools.ietf.org/html/rfc7234#section-4.2.2)

## 각 브라우저 별 휴리스틱 max-age 판단 방식
|브라우저|계산법|
|--|--|
|IE9|max-age = (Download time - Last-modified) * 0.1|
|Gecko|min(now + (now - last-modified)*0.1, 7 days)|
|Webkit|(creation value - last-modified)*0.1|
|Chromium|(date_value - last_modified)*0.1|


## Chrome 분석
https://cs.chromium.org/chromium/src/net/http/http_response_headers.cc?sq=package:chromium&dr=C&l=1009
last-modified 로부터 경과된 시간의 10%를 max-age로 지정한다.

## Firefox
https://dxr.mozilla.org/mozilla-central/source/netwerk/protocol/http/nsHttpResponseHead.cpp#743
last-modified로부터 경과된 시간의 10%와 7일 중 짧은 시간으로 지정한다.

## 요약

### 최적의 cache-control 정책 전략
https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=ko#%EC%B5%9C%EC%A0%81%EC%9D%98_cache-control_%EC%A0%95%EC%B1%85_%EC%A0%95%EC%9D%98
![최적의 Cache-Control 정책 정의](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/images/http-cache-decision-tree.png?hl=ko)

### 결론
> Many content owners incorrectly believe that omitting Cache-Control and Expires headers will prevent downstream caching. In fact, the opposite is true.

```cache-control```과 ```expires``` header가 둘 다 없어 브라우저 자의적으로 캐싱중인 상태와 versioning도 하지 않은 js/img 같은 static resource가 결합되면 최악의 시나리오를 만들어냄 -> 정확하게 현재 WebPlayer 4.x의 상황과 동일

# CDN 동작 방식
### Akamai Cache Purge 방식

#### 1. Invalidate (무효화)
- 퍼지 요청이 발생하면 엣지에 사용자 요청이 들어왔을때 오리진으로 If-Modified-Since 헤더(IMS)를 포함해 조건부 요청을 보냄
- 오리진에서 Last-Modified-Time(LMT)과 IMS를 비교, LMT가 미래의 시간이면 200과 컨텐츠를 전송, 과거 시간이면 304만 전송.
- L1 캐시군에서 200 또는 304 응답을 캐싱하고 나머지 캐시 네트워크가 단계적으로 이를 참조

#### 2. Deletion (삭제)
- 퍼지 요청이 발생하면 엣지는 더 이상 기존 캐시를 제공하지 않음
- 엣지에 사용자의 요청이 발생했을때 항상 오리진에 요청(IMS 미포함)
- 오리진의 응답이 L1 캐시군에 캐싱됨, 아카마이 캐시에 전파됨

### 국내/NGC CDN 퍼지 방식
- 아카마이의 Deletion 방식만 존재하고 wildcard 요청 불가(`Directory and extensions`와 동일한 옵션이 제공되지 않음)

### Naver CDN
[Purge 요청 페이지](http://control.cdn.navercorp.com/#purge/cache)
```
https://static-linetv-vodinfra.pstatic.net/resources/js/rmcplayer_g_loader_mobile.0.0.2.min.js
https://static-linetv-vodinfra.pstatic.net/resources/js/web_player_global_linetv_min.js
https://static-linetv-vodinfra.pstatic.net/resources/js/origin/rmcplayer_g_loader_mobile.0.0.2.js
https://static-linetv-vodinfra.pstatic.net/resources/js/origin/web_player_global_linetv.js
```
- Purge 완료 후 Request Header에 ```pragma: akamai-x-cache-on```를 전달하면
    - Cache hit
    ![EDE5E9ED-B74D-4BAF-A933-90E213A36334.png](https://yobi.navercorp.com/files/0a7056be-69b8-1ba6-8169-e122b765037a)
    - Refresh hit
    ![CAB67F2C-1E8E-4F96-9978-99EE9B843BDA.png](https://yobi.navercorp.com/files/0a7056be-69b8-1ba6-8169-e122eb36044d)
- 위와 같이 캐시 히트 여부를 Response header값으로 받을 수 있다.

### 현황
- 기존 플레이어 배포 시 Akamai의 ECCU를 통해 `Directory and extensions` 옵션을 선택해 퍼지를 수행했습니다. 확인결과 이 방법은 Invalidate 방식의 퍼지를 수행하고, 엣지의 L1 캐시 서버군이 오리진에 If-Modified-Since 헤더를 포함해 요청하면서 신규 버전이 반영됩니다.

- 롤백 시에도 동일하게 Invalidate 방식의 퍼지가 수행됩니다. 그러나 ndeploy에서 롤백 시 파일의 LMT까지 복원하므로 엣지가 IMS를 포함해 조건부 요청을 보내도 오리진이 304를 반환합니다. (이 상황에서 CDN 관리자 또는 배포 담당자가 fast-purge 툴의 deletion 방식으로 퍼지를 수행해 롤백을 적용합니다.)

- Deletion 방식으로 퍼지를 수행하더라도 오리진의 LMT가 과거 시간을 가리키고 있습니다. 이미 클라이언트에 캐싱된 파일은 배포 당일의 시간을 가리키고 있으므로, CDN에 요청이 들어오더라도 304(Not Modified) 응답을 통해 로컬 캐시를 사용합니다.

- 헤더에 Cache-Control: max-age 또는 Expires가 명시되어있지 않으므로 브라우저는 자체 휴리스틱을 통해 조건부 요청을 보낼 것인지 말것인지 결정합니다. 크롬의 경우 기존에 캐시 히트가 많이 발생할 수록 memory 또는 disk 캐시를 사용하는것으로 파악됩니다. (구체적인 내용은 보완 필요)

#### 대응
- [ ] A. ndeploy 배포 시나리오에서 Time Flag를 해제하면 배포 원본 서버의 변경 시간이 오리진에 적용되지 않습니다. 
- [ ] B. ECCU를 통한 퍼지가 아니라 오리진의 요청 로그를 통해 캐싱되고 있는 URL 목록을 획득, 이를 Fast-Purge 도구에서 Deletion 방식 퍼지를 수행합니다.
- [ ] C. 캐싱 동작을 예측/제어 가능하게끔 Cache-Control: max-age=* 헤더를 추가합니다. 다만 max-age를 설정하면 퍼지를 수행하더라도 브라우저가 로컬 캐시 만료까지 서버에 요청하지 않으므로 비용적인 부분과 성능적인 부분을 함께 점검해야합니다.
- [ ] D. 배포 방식을 버저닝 형태로 변경하고 서비스에서 변경된 버전으로 반영합니다.

_Originally posted by @lee-jeongho in https://oss.navercorp.com/WebPlayer/task/issues/430#issuecomment-3814953_

# 현재 WebPlayer 배포 시 cache 대응 법
- Response header에 ```cache-control```, ```expires``` 모두 없어 위에 언급한 브라우저 자체 휴리스틱 판단에 의한 캐싱 전략 사용할 것으로 추정

# 배포 시 취해야 할 cache-clear 전략
tbd;
