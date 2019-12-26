# [NEVER constant](https://rxjs-dev.firebaseapp.com/api/index/const/NEVER)
## Definition
아무런 값도 심지어 Complete도 emit하지 않는 Observable 객체를 반환한다.

## Examples
```typescript
import {NEVER} from 'rxjs';
import {startWith} from 'rxjs/operators';

function info()
{
    console.log('Will not be called');
}

const result = NEVER.pipe(startWith(7));
result.subscribe(x=>console.log(x), info, info);
```
위 코드의 실행 결과는 7만 출력한 후 ```info()```는 호출되지 않는다.