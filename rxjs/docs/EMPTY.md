# [EMPTY](https://rxjs-dev.firebaseapp.com/api/index/const/EMPTY)
## Definition
```empty()``` 호출과 동일하게 아무 값도 emit하지 않는 Observable stream을 생성한다.
subscribe하는 즉시 complete를 호출한다.

## Examples
```typescript
import {EMPTY} from 'rxjs';
import {startWidh} from 'rxjs/operators';

const result = emtpy().pipe(startWith(7));
result.subscribe(console.log);
```