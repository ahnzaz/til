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
타입을 특정 몇 개 중 하나로 결정됨을 명세할 때 사용한다. Library를 작성하거나 하는 작업 도중 paramter의 타입을 몇 가지로 제한할 경우가 있다. 전통적인 OOP 개념에선 타입 Hierarchy를 만들겠지만 Typescript는 Union type을 통해 이를 구현할 수 있다.
```typescript
function padLeft(value:string, padding:number | string){
    if(typeof padding === 'number'){
        // Do something with number padding
        return;
    }

    if(typeof padding === ='string'){
        // Do something with string padding.
        return;
    }
}
```
```padLeft```는 두 번째 파라미터 padding의 type이 ```number```또는 ```string```인 경우만 받아들인다. ```any```에 비해 받아들이는 타입의 종류를 제한하는 것이 가능하다.

Union type은 변수 선언이나 반환값에도 적용할 수 있는데 이 경우 몇가지 특별한 규칙이 있다.
- Union type으로 선언된 변수는 두 Type에 모두 존재하는 member만 사용할 수 있다.
```typescript
interface Bird{
    fly();
    egg():Crab;
}

interface Animal{
    egg():Animal;
    cantFly();
}
const whoami:Animal|Bird = returnAnimalorBird();
whoami.egg();   // No problem.
whoami.fly();   // Compile error
```

## 타입 보호 및 구분하기(Type guards and diffirenting types)
Union type으로 선언된 변수의 공통 member가 아닌 member에 접근하려면 type assertion이 필요하다.
```typescript
const whoami:Animal|Bird = returnAnimalorBird();
if(whoami.fly)  // Compile error
if((<Bird>whoami).fly){
    
}
```

## 사용자 지정 타입 보호(User defined typs guards)
TypeScript는 type guard라 불리는 표현식을 통해 주어진 값이 특정 타입인지 확인할 수 있게 한다.
```typescript
function isFish(pet:Fish|Bird):pet is Fish{
    return (<Fish>pet).canfly !== undefined;
}
if(isFish(whoami)){
    whoami.cantfly();   // No problem
}
```
```{parameterName} is {type}```으로 표현되는 구문은 값이 특정 타입인지만을 반환하는 간단한 형태의 funtion이다. Type guard function을 통과하게 되면 type casting 없이도 해당 타입의 member에 자유롭게 접근할 수 있다.

- Partial class
- Required class
- Omit class
- Pick class
- Exclude?
- SubPartial?