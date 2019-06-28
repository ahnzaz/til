[Documentation source](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

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

### [Type guards and type assertions](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-type-assertions)
Nullable type은 union을 기반으로 구현되었으므로 type guard를 통해 null을 제거할 수 있다.
```typescript
function f(sn:string|nulll):string{
    if(sn === null){
        return "default";
    }
    else{
        return sn;
    }
}
```

더 간단한 연산자로도 가능합니다.
```typescript
function f(sn:string|null):string{
    return sn || "default";
}
```

Compiler가 ```null``` 또는 ```undefined```를 제거할 수 없을 때 코드상에서 type assertion operator를 통해 강제로 제거할 수 있다. ```! : identifier!```는 ```identifier``` type에서 null, undefined를 제거하고 사용할 수 있게 해준다.
ES spec의 ```identifier?```와 유사한 듯

```typescript
function fixed(name:string|null):string{
    function postfix(epithet:string):string{
        return name!.charAt(0) + '. the ' + epithet;
    }
    name = name || 'Bob';
    return postfix("great");
}
```
예시에서 nested function을 사용하였는데 이는 compiler가 nested function은 외부에서 호출되지 않는 한 parameter check 등이 불가능하므로 compiler로 하여금 타입 체킹이 불가능 하도록 하기 위함이다.

## [Type aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases)
새로운 Type name을 정의한다. Interface와 유사하지만 primitive, union, tuples을 포함한 어떤 타입도 재정의가 가능하다.
```typescript
type Name = string;
type NameResolver = ()=>string;
type NameOrResolver = Name | NameResolver;
function getName(n:NameOrResolver):Name{
    if(typeof n === "string"){
        return n;
    }else{
        return n();
    }
}
```
Aliasing이 새로운 타입을 생성하는 것은 아니다. 단지 정의된 타입을 참조하는 이름을 만들 뿐이다. Primitive를 aliasing 하는 것은 documentation 이외에는 별로 유용하지 않다.

Type aliasing역시 generic 사용 가능하다.
```typescript
type Container<T> = {value : T};
```
```typescript
type Tree<T> = {
    value: T;
    left : Tree<T>;
    right : Tree<T>;
}
```

Intersection type과 혼용하면, 신기한 type도 정의할 수 있다.
```typescript
type LinkedList<T> = T & {next : LinkedList<T>};
interface Person{
    name : string
}

var people:LinkedList<Person>;
var s = people.name;
var s = people.next.name;
var s = people.next.next.name;
var s = people.next.next.next.name;
```
순환 선언은 불가능하다.
```typescript
type Yikes = Array<Yikes>;  // Error
```

### [Interfaces vs Type aliases](https://www.typescriptlang.org/docs/handbook/advanced-types.html#interfaces-vs-type-aliases)
위에서 언급하였듯이 type aliasing은 인터페이스와 유사하지만 다른 점이 몇몇 있다.

Interface는 어디서나 사용할 수 있는 새 타입을 생성하지만 Type aliasing은 그렇지 않다. 예를 들어 Error message에는 alias name을 사용할 수 없다.

아래 코드에서 ```interfaced function```에 마우스를 올리면 ```Interface``` 인터페이스를 반환한다고 표시되지만, ```aliased function```에 마우스를 올리면 Object literal을 반환한다고 표시될 것이다.

```typescript
type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;
```

역주) typescript 3.5.2기준으로 aliased function도 ```Alias type```을 반환한다고 표시된다. 업데이트 된 모양이다.

두 번째 더 중요한 차이점은 Type은 상속하거나 구현하거나, 반대로 상속 받거나 구현 되지도 못한다는 것이다. **소프트웨어는 확장에 대해 열려있어야 한다는 기조 아래 가능하다면 Type 대신에 Interface를 사용해야 한다.**

다른 한편 인터페이스로는 특정 형태를 설명할 수 없고 union이나 tuple type을 사용해야 한다면 type aliasing이 좋은 방법이다.

### [String literal type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#string-literal-types)
String literal type은 정확히 동일한 문자열의 값만 할당할 수 있는 type을 정의합니다.
```typescript
type Easing = "ease-in" | "ease-out" | "ease-in-out"
class UIElement{
    animate(dx:number, dy:number, easing:Easing){
        if(easing === "ease-in"){
            
        }else{

        }
    }
}
let button = new UIelement();
button.animate(0, 0, "easi-in");
button.animate(0, 0, "uneasy");
```

### [Numeric literal types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#numeric-literal-types)
수형 타입도 선언이 가능하다.
```typescript
function rollDice():1|2|3|4|5|6{
    ///
}
```

### [Enum member types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#enum-member-types)
Enum 멤버는 모든 멤버가 literal-초기화 될 때 타입을 갖게 된다.

### [Discriminated Unions](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions)
Singleton type, union type, type guard, type alias 등을 조합하여 Discriminated union이라는 복잡한 타입을 정의할 수 있습니다. Tagged union 또는 algebra data type이라 불리는 개념입니다. 함수형 프로그래밍에 매우 유용합니다. Typescript는 javascript 패턴을 구현하기 위해 빌드하였습니다.
1. Type은 일반적으로 하나의 타입을 가집니다. - discriminant
2. Type alias는 타입들을 union합니다. - union
3. 일반적인 속성에 대한 type guard

```typescript
interface Square{
    kind:"square",
    size:number,
}

interface Rectangle{
    kind:"rectangle",
    width:number,
    height:number,
}

interface Circle{
    kind:"Circle",
    radius:number,
}
```
먼저 union할 인터페이스를 선언합니다. 각 인터페이스는 ```kind```라는 다른 string literal type을 갖는 속성을 가지고 있습니다. ```kind``` property는 discriminant 또는 tag라 불립니다. 다른 속성들은 인터페이스마다 다릅니다. 각 인터페이스들이 현재는 상관관계가 없다는 점에 주목하세요. 이제 union합니다.

```typescript
type Shape = Square | Rectangle | Circle;
```

이제 discriminated union을 사용할 수 있습니다.
```typescript
function area(s: Shape) {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "rectangle":
      return s.height * s.width;
    case "square":
      return s.size * s.size;
  }
}
```

#### Exhaustiveness checking
Discriminated union에 대해 모두 체크하지 않았을 경우 compiler가 개발자에게 에러로 알려주게 할 수 있습니다. 위의 예제에서 Shape에 Triangle을 추가하였을 경우 area function에서 triangle을 처리하지 않았으므로 에러가 발생해야 하죠.

두 가지 방법이 있습니다 첫번째는 ```--strictNullChecks``` flag를 켜고 return type을 명시하는 것이죠

```typescript
function area(s: Shape):number {    // error: returns number | undefined
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "rectangle":
      return s.height * s.width;
    case "square":
      return s.size * s.size;
  }
}
```
```switch``` 구문이 더 이상 완벽하지 않으므로 Typescript compiler는 area function이 undefined를 반환할 수 있음을 인지하고 있습니다. 실제 반환값이 ```number | undefined```이므로 area function의 return type을 ```number```로만 선언할 경우 return type error를 발생합니다.

두 번째 방법은 ```never``` type을 사용하여 compiler에게 exhaustivenss를 체크하도록 하는 방법입니다.
```typescript
function assertNever(x:never):never{
    throw new Error("Unexpected object" + x);
}

function area(s: Shape):number {
  switch (s.kind) {
    case "circle":
      return Math.PI * s.radius ** 2;
    case "rectangle":
      return s.height * s.width;
    case "square":
      return s.size * s.size;
    default : return assertNever(s);    // error here if there are missing cases
  }
}
```
```assertNever``` function이 s의 타입을 ```never```로 간주합니다. case에 대한 처리를 깜빡한다면 ```s```는 실제 타입을 갖게 될 것이고 ```assertNever``` function이 에러를 뱉게 됩니다. 이 방법은 추가적인 function 정의가 필요하지만 더 명확한 방법입니다.


### TODO
- Partial class
- Required class
- Omit class
- Pick class
- Exclude?
- SubPartial?