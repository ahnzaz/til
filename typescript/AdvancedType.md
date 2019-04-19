# Advanced Types
Typescript가 지원하는 고급 타입형에 대해 설명한다.
## Intersection types
Intersection type은 여러 개의 타입을 하나로 합친 개념이다.
```typescript Persion & Serializable & Loggable ``` Type은 Person이면서 Serializable하고 Loggable한 타입이다.
```typescript
// Source : https://www.typescriptlang.org/docs/handbook/advanced-types.html
function extend<First, Second>(first: First, second: Second): First & Second {
    const result: Partial<First & Second> = {};
    for (const prop in first) {
        if (first.hasOwnProperty(prop)) {
            (<First>result)[prop] = first[prop];
        }
    }
    for (const prop in second) {
        if (second.hasOwnProperty(prop)) {
            (<Second>result)[prop] = second[prop];
        }
    }
    return <First & Second>result;
}
```

## Union Types
타입을 특정 몇 개 중 하나로 결정됨을 명세할 때 사용한다.
```typescript
function padLeft(value:string, padding:number | string){

}
```

## Type guards and diffirentiating types


- Partial class
- Required class
- Omit class
- Pick class
- Exclude?
- SubPartial?