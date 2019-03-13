# What's new in Chrome 73
## PWA is available on MacOS
MacOS에서도 PWA 설치 및 이용 가능
## Signed HTTP Exchange
- WebPackage의 subset
- 콘텐츠의 origin과 전달 서버의 origin을 분리함으로써 User Agent로 하여금 원 소스의 origin에서 전달된 콘텐츠로 취급할 수 있게 하는 스펙
- 캐시서버에서 콘텐츠가 전달되더라도 퍼블리셔의 sign을 첨부함으로써 원 소스 origin임을 보장할 수 있음
## 만드는법
- Server Certificate에 [CanSignedHttpExchanges](https://wicg.github.io/webpackage/draft-yasskin-http-origin-signed-responses.html#cross-origin-cert-req) Extenstion이 추가되어야 함
- 현재(20190313) 기준 DigiCert에서만 발급 가능
- 인증서와 [Generator tool](https://github.com/WICG/webpackage/tree/master/go/signedexchange)을 사용해 sxg를 생성할 수 있음