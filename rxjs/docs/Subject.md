# [Subject](https://rxjs-dev.firebaseapp.com/api/index/class/Subject)
여러 Observer에 multicast로 값을 emit할 수 있는 Observable의 특수 class이다. EventEmitter와 유사하다.

```typescript
class Subject<T> extends Observable implements SubscriptionLike {
  static create: Function
  constructor()
  observers: Observer<T>[]
  closed: false
  isStopped: false
  hasError: false
  thrownError: any
  lift<R>(operator: Operator<T, R>): Observable<R>
  next(value?: T)
  error(err: any)
  complete()
  unsubscribe()
  _trySubscribe(subscriber: Subscriber<T>): TeardownLogic
  _subscribe(subscriber: Subscriber<T>): Subscription
  asObservable(): Observable<T>
 
  // inherited from index/Observable
  static create: Function
  static if: typeof iif
  static throw: typeof throwError
  constructor(subscribe?: (this: Observable<T>, subscriber: Subscriber<T>) => TeardownLogic)
  _isScalar: boolean
  source: Observable<any>
  operator: Operator<any, T>
  lift<R>(operator: Operator<T, R>): Observable<R>
  subscribe(observerOrNext?: PartialObserver<T> | ((value: T) => void), error?: (error: any) => void, complete?: () => void): Subscription
  _trySubscribe(sink: Subscriber<T>): TeardownLogic
  forEach(next: (value: T) => void, promiseCtor?: PromiseConstructorLike): Promise<void>
  pipe(...operations: OperatorFunction<any, any>[]): Observable<any>
  toPromise(promiseCtor?: PromiseConstructorLike): Promise<T>
}
```

## Subclasses
- [BehaviorSubject](https://rxjs-dev.firebaseapp.com/api/index/class/BehaviorSubject)
- [ReplaySubject](https://rxjs-dev.firebaseapp.com/api/index/class/ReplaySubject)
- [AsyncSubject](https://rxjs-dev.firebaseapp.com/api/index/class/AsyncSubject)

## Description
모든 Subject는 Observable이자 Observer이다. Subscribe을 할 수도 있고 ```next```로 값을 emit할 수도 있다.

## Method
### ```lift()```
``` lift<R>(operator:Operator<T, R>):Observable<R>```

### ```asObservable```
Subject를 가지고 새로운 Observable를 만든다. 이를 통해 Observer-side 로직을 커스터마이징하여 격리할 수 있게 한다.

# [BehaviorSubject](https://rxjs-dev.firebaseapp.com/api/index/class/BehaviorSubject)
Subject의 아종으로 초기값이 필요하며 subscribe될 때마다 현재 값을 emit하는 Subject

# [ReplaySubject](https://rxjs-dev.firebaseapp.com/api/index/class/ReplaySubject)
새로 Subscribe하는 Observer에게 기존에 emit되었던 value도 모두 전달하는 Subject의 아종.

# [AsyncSubject](https://rxjs-dev.firebaseapp.com/api/index/class/AsyncSubject)
Observable이 complete된 후 마지막 값만 emit하는 Subject. 이거 쓸데가 있을까??
