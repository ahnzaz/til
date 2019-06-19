# [Tap operator](https://rxjs-dev.firebaseapp.com/api/operators/tap)
Source observable의 모든 emission에 대해 특정 로직을 수행한다. 그리고 Source observable을 그대로 다음 stream으로 전달한다.
```typescript
function tap<T>(nextObserver?:PartialObserver<T> | ((x:T)=>void)), error?:(e:any)=>void, complete?:()=>void):MonoTypeOperatorFunction
```

## Parameter
## Returns
```MonoTypeOperatorFunction<T>``` : 전달된 Source Observable과 동일한 Observable

## Desription
> 모든 emission에 대해 특정 로직을 수행, 에러가 발생하지 않는 한 Source observable을 그대로 반환

subscribe와 다르게 tap에서 반환된 Observable이 subscribe되지 않는 한 tap에서 정의 된 function역시 동작하지 않음

## Example
```typescript
import { fromEvent } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const positions = clicks.pipe(
    tap(ev => console.log(ev)),
    map(ev => ev.clientX),
);

positions.subscribe(x => console.log(x));
```

## See also
- [map](https://rxjs-dev.firebaseapp.com/api/operators/map)
- [Observable](https://rxjs-dev.firebaseapp.com/api/index/class/Observable#subscribe)