# [Pluck Operator](https://rxjs-dev.firebaseapp.com/api/operators/pluck)


## Method signature
```typescript
pluck<T, R>(...properties:string[]):OperatorFunction<T, R>
```

## Parameter
properties : 소스에서 뽑아 낼 내장 속성들. property name을 chaining하듯이 뽑아낼 수 있다.
```undefined```라도 별 다른 error를 뱉어내지 않고 ```undefined``` 값을 반환해줌. 에러 처리할 때 편리할 듯

## Returns
```OperatorFunction<T, R>``` : 소스에서 프로퍼티 값들을 emit하는 새로운 Observable

## Description
``map```과 유사하지만 emit된 객체에서 특정 내장 속성 하나만을 추출한다는 특징이 있다.
![Description](https://rxjs-dev.firebaseapp.com/assets/images/marble-diagrams/pluck.png)

## [Example](https://stackblitz.com/run?devtoolsheight=50)
```typescript
import { fromEvent } from 'rxjs';
import { pluck } from 'rxjs/operators';


const clicks = fromEvent(document, 'click');
const tagNames = clicks.pipe(pluck('target', 'tagName'));
tagNames.subscribe(x => console.log(x)); // event.target.tagName
```