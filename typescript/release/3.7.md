# [Typescript 3.7 beta](https://devblogs.microsoft.com/typescript/announcing-typescript-3-7-beta/)

## Optional chaning
```
let x = foo?.bar.baz();
```
- Optional element access.
```typescript
function tryGetFirstElement<T>(arr?:T[]){
    return arr?.[0] // ? 다음에 .이 붙는게 포인트.
}
```
- Optional call
```typescript
async function makeRequest(url:string, log?:(msg:string)=>void){
    log?.(`Request start`); // 마찬가지로 ?

    const result = (await fetch(url)).toJson();

    log?.('Request');
}
```
Chaning의 결과물은 ```undefined```일 수 있으니 연속된 operation에 주의할 것

## Nullish Coalescing
```typescript
let x = foo ?? bar();
```

```typescript
function initializeAudio(){
    let volume = localStorage.volume || 0.5
}
```
```localStorage.volume``` 이 0일 경우 0.5로 세팅된다. 이를 방지하려면 ??를 사용해야 함

## Assertion functions
- assertion signature model
```typescript
function assert(condition:any, msg?:string): asserts condition{
    if(!condition){
        throw new AssertionError(msg);
    }
}
```
즉, ```asserts condition```이 반환값이 되는 것.

- expression도 지원한다.
```typescript
function asssertIsString(val:any):asserts val is string{
    if(typeof val !== "string"){
        throw new AssertsionError("Not a string!");
    }
}
```

```typescript
function isString(val:any):val is string{
    // ...
}
```
과 다른 점은 AssertionError를 던진다는 것.

```typescript
function assertIsDefined<T>(val: T): asserts val is NonNullable<T> {
    if (val === undefined || val === null) {
        throw new AssertionError(
            `Expected 'val' to be defined, but received ${val}`
        );
    }
}
```

## Better support for ```never```-returning functions
무슨말인지 잘 모르겠다..

## (More) Recursive type aliases.

