# [The Manifest](https://webpack.js.org/concepts/manifest/)

webpack으로 빌드하려는 사이트나 어플리케이션에는 일반적으로 다음 세 종류의 코드가 있습니다.

1. 소스코드
2. 소스가 의존성을 갖는 서드파티 라이브러리 또는 "vendor" 코드
3. 모듈간의 상호작용을 제어하는 webpack runtime과 manifest.

## Runtime
모듈화한 어플리케이션을 브라우저에서 실행하는 시점에 필요한 webpack의 코드 부분이다. 로딩과 resolving 로직이 들어있다. 브라우저에 이미 로드 된 코드는 물론 lazy-load할 코드를 연결할 수도 있다.

## Manifest
`optimization`으로 인해 잘게 쪼개지거나 필요한 모듈들을 webpack이 어떻게 관리할 것인가?에 대한 답으로 manifest가 필요하다.

컴파일러가 진입하고, resolve하고 매핑한 모듈의 상세 정보들을 서술해 놓은 것이 "manifest"이다. bundle한 후 browser에 탑재된 상태에서 모듈을 resolve하고 load하기 위해 사용한다. 어떤 모듈 로딩 시스템을 사용하든지 `import`, `requre` 구문은 `__webpack_require__`로 치환된다.

## The Problem
일반 사용자가 신경써야 하는가? 답은 No이다. 그러나 브라우저 캐시 등을 통해 퍼포먼스를 향상시키려면 본 프로세스를 이해할 필요가 있다.

Content hash를 통해 파일이 변경될 때 브라우저 캐시를 무효화할 수 있다. 다만 실제 내용을 변경하지 않았음에도 hash가 변경되는 것을 볼 수 있는데 이는 매 빌드마다 manifest와 runtime이 변경되기 때문이다.

- [ ] [manifest section](https://webpack.js.org/guides/output-management/#the-manifest)

## Further Reading
- [ ] [Seperating a Manifest](https://survivejs.com/webpack/optimizing/separating-manifest/)
- [ ] [Predicatble Long Term caching with webpack](https://medium.com/webpack/predictable-long-term-caching-with-webpack-d3eee1d3fa31)
- [ ] [Caching](https://webpack.js.org/guides/caching/)