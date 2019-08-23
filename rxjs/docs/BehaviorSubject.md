# [BehaviorSubject](https://rxjs-dev.firebaseapp.com/api/index/class/BehaviorSubject)
Subject를 상속한 클래스 중의 하나로 초기값을 필요로 하며 새로운 subscription마다 현재 값을 즉시 emit하는 subject이다.

```typescript
import { BehaviorSubject } from 'rxjs';

const observable = new BehaviorSubject(10);

observable.subscribe(console.log); // 10

observable.next(20);  // 20
observable.next(30);  // 30

observable.subscribe(console.log);  // 30
```