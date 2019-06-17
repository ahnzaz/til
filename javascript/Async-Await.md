# Async-Await
## Concept

## Nonintuitive Behavier
- Async function은 return 구문이 없더라도 기본적으로 ```Promise<void>```를 반환한다.
- 그러나 다른 함수가 반환한 Promise를 반환하려면 명시적으로 return을 선언해 주어야 한다.