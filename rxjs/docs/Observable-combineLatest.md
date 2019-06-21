# [CombineLatest API](https://rxjs-dev.firebaseapp.com/api/index/function/combineLatest)

## Definition
여러 개의 Observable을 합치되, emission이 발생할 때마다 각 Observable에서 마지막으로 emit한 value를 모두 합쳐서 하나의 배열로 전달하는 Observable을 생성한다.

## Signature
```typescript
combineLatest<O extends ObservableInput<any>, R>(...observables:(O | ((...values:ObservedValueOf<O>[])=>R) | ScheudulerLike)[]:Observable<R>
```

## Parameter
| Name | Description |
|--|--|
| observables | 합칠 Observables |

## Returns
Observable<R> : 인자로 주어진 각 Observable이 마지막으로 emit한 값의 배열들을 emit하는 새로운 Observable

## Description
![combineLatest](https://rxjs-dev.firebaseapp.com/assets/images/marble-diagrams/combineLatest.png)
- n개의 Observable을 combine하면 항상 n 크기의 배열을 emit한다.
- 인자로 Observable의 array 또는 여러 Observable을 param으로 받지만 Array 형태가 좋다.
- n개의 Observable이 emit한 이후에야 emit한다. **즉 특정 Observable이 다른 Observable들이 emit하기 전에 여러 값을 이미 emit했다면 마지막 값을 제외한 나머지는 소실된다는 의미이다.**
- 반대로 어느 Observable이 아무 값도 emit하지 않은 채 complete된다면 combine Observable도 아무 값도 emit하지 못하고 종료됨을 의미한다.
- 물론 아무 값도 emit하지 않으면서 complete도 되지 않으면 combine observable도 아무 동작 하지 못한다.
- 전달 된 모든 Observable이 complete 되어야만 complete된다.
- 한 Observable이라도 에러를 내면 combine observable은 멈추고 다른 observable은 unsubscribe된다.

## Examples
### Combine two timer Observables
```typescript
import { combineLatest, timer } from 'rxjs';

const firstTimer = timer(0, 1000);
const secondTimer = timer(500, 1000);
const combinedTimers = combineLatest(firstTimer, secondTimer);
combinedTimers.subscribe(value => console.log(value));
```