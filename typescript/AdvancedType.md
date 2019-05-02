[source](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

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

### 사용자 지정 타입 보호(User defined typs guards)
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

### ```typeof``` 타입 보호
```typescript
function isNumber(x:any):x is number{
    return typeof x === "number";
}

function isString(x:any):x is string{
    return typeof x === "string";
}

function padLeft(value:string, padding:string |number){
    if(isNumber(padding){
        return Array(padding+1).join(" ") + value;
    }

    if(isString(padding)){
        return padding + value;
    }
    throw new Error(`Expected string or number , got ${padding}`);
}
```
위 처럼 Primitive type에 대해 매번 타입 체크를 진행하는 것은 상당히 피곤하다. 다행히도 Typescript는 아래 처럼 ```typeof``` 키워드에 의한 타입 보호를 지원한다.
```typescript
function padLeft(value:string, padding:string | number){
    if(typeof padding === 'number'){
        return Array(padding + 1).join(" ") + value;
    }
    
    if(typeof padding === "string"){
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}
```
```typeof``` 타입 보호는 ```typeof v === 'typename'```, ```typeof v !== 'typename'```의 두 가지 형태로 사용 가능하며 "number", "string", "boolean", "symbol"의 primitive type에 한해서만 사용할 수 있다. 다른 typename string와 비교도 가능하지만 타입 보호로써 동작하지는 않을 것이다.

### ```instanceof``` 타입 보호
```typeof``` 타입 보호와 유사하게 ```instanceof``` 타입 보호도 지원한다.

```typescript
interface Padder{
    getPadding():string
}

class SpaceRepeatingPadder implements Padder{
    constructor(private numSpaces:number){}
    getPaddingString(){
        return Array(this.numSpaces + 1).join(" ");
    }
}

class StringPadder implements Padder{
    constructor(private value:string){}
    getPaddingString(){
        return this.value;
    }
}

function getRandomPadder(){
    return Math.random() < 0.5 ?
            new SpaceRepeatingPadder(4):
            new StringPadder("  ");
}

let padder:Padder = getRandomPadder();
if(padder instanceof SpaceRepeatingPadder){
    padder;
}

if(padder instanceof StringPadder){
    padder;
}
```

## Nullable type
Typescript에는 ```null```과 ```undefined``` 두 개의 특수 타입이 존재한다. 변수의 타입이 결정된 뒤에도 타입 체커는 이 타입이 어느 타입에도 할당 될 수 있다고 판단한다. ```--strictNullChecks``` flag로 방지할 수 있다.
```typescript
let n = null;   // Possible

let s = "foo";
s = null;   // Error, null is not asignable to string;

let sn:string | null = "bar";
sn = null;  // possible

sb = undefined; // Error
```
Typescript에서도 Javascript와 동일하게 ```null```과 ```undefined```는 별도로 취급됩니다. 즉 ```string|null|```과 ```string|undefined```, ```string|undefined|null```은 모두 별개입니다.

- Partial class
- Required class
- Omit class
- Pick class
- Exclude?
- SubPartial?