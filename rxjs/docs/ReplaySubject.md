# [ReplaySubject](https://rxjs-dev.firebaseapp.com/api/index/class/ReplaySubject)
Subject를 상속받은 클래스 중 하나로 Subscribe할 때 마다 이전의 값과 새로운 값 모두를 emit하는 Observable이다. 특정 개수의 값을 버퍼링하고 있다가 새 subscription이 들어오면 즉시 emit한다.

```typescript
import {ReplaySubject} from 'rxjs';

const observable = new ReplaySubject();

observable.next(10);
observable.next(20);
observable.next(30);

observable.subscribe(console.log);  // 10, 20, 30;

observable.next(40); // 40
observable.next(50); // 50

observable.subscribe(console.log);// 10, 20, 30, 40, 50
```

## Counter-intuitive behavior
```takeUntil```등의 operator와 조합할 경우 유의해야 한다. 과거의 값까지 모두 emit하므로 일반적인 사용법에서 벗어나기 때문이다.