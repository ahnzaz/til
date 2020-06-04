# Dependency Graph
webpack은 특정 파일이 어떠한 파일을 참조하더라도 의존성으로 판단한다. 이는 이미지나 web font같은 코드가 아닌 자원도 처리할 수 있게 한다.

webpack은 `entry points`부터 재귀적으로 의존성 그래프를 그려나간다.

> HTTP/1.1 환경에서는 파일 하나로 번들링하는 것이 최적이다. HTTP/2에서는 [`Code splitting`](https://webpack.js.org/guides/code-splitting/)을 통해 파일을 쪼갤 수 있다.

## Futher Reading
- [HTTP2 Aggressive Splitting example](https://github.com/webpack/webpack/tree/master/examples/http2-aggressive-splitting)
- [webpack && HTTP/2](https://medium.com/webpack/webpack-http-2-7083ec3f3ce6)