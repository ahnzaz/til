# Promise.prototype.finally
https://github.com/tc39/proposal-promise-finally
## Spec
Promise가 settled(fulfilled 또는 rejected)되었을 때 실행되는 callback function을 정의
## Rationale
기본적인 목표는 작업을 정리(clean up)할때 사용한다. Loading spinner를 제거하거나, 열었던 파일을 모두 닫거나, 성공/실패와 무관하게 로깅을 할 때 필요하다.
### ```.then(f, f)```로는 안되나?
- Inline function은 한번밖에 전달하지 못하므로 동일한 함수를 두 번 선언해야 하는 문제가 있다.
- finnaly callback은 argument를 가지지 않는다. 성공 실패 여부에 아무 관계가 없을 때에만 사용해야 하며 그렇기 때문에 인자를 가지지 않는다.
### Naming
