# [Merge observable](https://rxjs-dev.firebaseapp.com/api/index/function/merge)
주어진 input observable을 합쳐 모든 emission을 동시에 전달하는 하나의 Observable을 생성한다.

## Signature
```typescript
merge<T, R>(...observables:Array<ObservableInput<any> | SchedulerLike | number>):Observable<R>
```

## Parameter
| name | description |
|--|--|
| observable | 합칠 observable|

## Returns
```Observable<R>``` : 합쳐진 Observable의 모든 emission을 전달하는 새로운 Observable

## Description
![Merge description](https://rxjs-dev.firebaseapp.com/assets/images/marble-diagrams/merge.png)

## Examples
### Simple example
```typescript
import {merge, fromEvent, interval} from 'rxjs';

const clicks = fromEvent(document, 'click');
const timer = interval(100);
const clicksOrTimer = merge(clicks, timer);
clickstOrTimer.subscribe(x=>console.log(x));
```

### Concurrency example
```typescript
import { merge, interval } from 'rxjs';
import { take } from 'rxjs/operators'

const timer1 = interval(1000).pipe(take(10));
const timer2 = interval(2000).pipe(take(6));
const timer3 = interval(500).pipe(take(10));
const concurrent = 2;
const merged = merge(timer1, timer2, timer3, concurrent);
merge.subscribe(x => console.log(x));
```
concurrent는 동시에 받아들일 observable의 개수이다. queue?가 비어있으면 추가적인 Observable은 subscribe하지 않으므로 모두 무시된다.