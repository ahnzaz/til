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

### [Polymorphic ```this``` type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#polymorphic-this-types)
Polymorphic ```this``` 타입은 클래스나 인터페이스를 가지고 있는 서브타입입니다. F-bounded 다형성이라 불립니다. 계층 구조의 인터페이스를 더 자연스럽게 표현하는 데 사용할 수 있습니다.
```typescript
class BasicCalculator{
    public constructor(protected value:number = 0){}

    public currentValue():number{
        return this.value;
    }

    public add(operand:number):this{
        this.value += operand;
        return this;
    }
    
    public multiply(operand:number):this{
        this.value *= operand;
        return this;
    }
}
let v = new BasicCalculator()
            .multiply(5)
            .add(1)
            .currentValue();
```

```typescript
class ScientificCalculator extends BasicCalculator{
    public constructor(value = 0){
        super(value);
    }

    public sin(){
        this.value = Math.sin(this.value);
        return this;
    }
}

let v = new ScientificCalculator()
            .multiply(5)
            .sin()
            .add(1)
            .currentValue();
```
```this``` type이 없다면 ScientificCalculator.multiply()는 ```Foo```type을 반환했을테니 ```sin()```을 호출할 수 없었을 겁니다.

### [Index types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types)
Index type을 사용하면 compiler로 하여금 동적 property name을 체크할 수 있게 합니다. 예를들어 Javasript에서 속성 값을 꺼내려면 아래와 같이 해야 합니다.
```javascript
function pluck(o, propertyNames){
    return propertyNames.map(n=>o[n]);
}
```

typescript에서 **index type query**와 **indexed access**를 사용하여 어떻게 하는지 보시죠.
```typescript
function pluck<T, K extends keyof T>(o:T, propertyNames:K[]):T[K][]{
    return propertyNames.map(n=>o[n]);
}

interface Car{
    manufacturer:string;
    model:string;
    year:2014
}

let taxi:Car = {
    manufacturer :'Toyota',
    model:'Camry',
    year:2014
};

let makeAndModel:string[] = pluck(taxi, ['manufacturer', 'model']);

let modelYear = pluck(taxi, ['model','year']);
```
컴파일러는 manufacturer와 model이 Car의 property인지 체크합니다. 위 예제에서 두 개의 새로운 type operator가 등장하는데 첫번째는 'keyof T' **index type query operator**라 불립니다. 임의의 타입 T에 대해 keyof T는 T의 public property name의 union입니다.
```typescript
let carProps:keyof Car; // 'manufacturer' | 'model' | 'year'
```
```keyof Car```을 ```'manufacturer' | 'model' | 'year'```로 대체할 수도 있지만 ```keyof Car```는 property 추가에 자동으로 반영된다는 점입니다.

두 번째 연산자는 ```T[K]```입니다. **indexed access operator**라 불리죠.

```typescript
function getProperty<T, K extends keyof T>(o:T, propertyName:K):T[K]{
    return o[propertyName];
}
```
o:T, propertyName:이기에 o[propertyName]:T[K]가 된다.
```typescript
let name:string = getProperty(taxi, 'manufacturer');
let age:number = getProperty(taxi, 'model');
```

#### [Index types and string index signatures](https://www.typescriptlang.org/docs/handbook/advanced-types.html#index-types-and-string-index-signatures)
keyof와 T[K]는 string index signature를 통해 동작합니다. string index signature를 가지고 있는 타입이 있다면 keyof T는 string일겁니다. ```T[string]```이 index signature의 type이 됩니다.

```typescript
interface Dictionary<T>{
    [key:string]:T;
}
let keys:keyof Dictionary<number>;      // string
let value:Dictionary<number>['foo'];    // number
```

### Mapped type
기존의 타입에서 각 프로퍼티들을 optional 값으로 변경합니다.
```typescript
interface PersonPartial{
    name?: string;
    age?:number;
}
```

```typescript
interface PersonReadonly{
    readonly name:string;
    readonly age:number;
}
```
typescript에서는 **mapped type**을 제공하여 이런 과정을 쉽게 구현할 수 있게 합니다. 기존 타입의 모든 property를 readonly로 변경하려면 ReadyOnly type을 사용하여 구현하면 됩니다.
```typescript
type ReadOnly<T> = {
    readonly [P in keyof T]:T[P];
}

type Partial<T> = {
    [P in keyof T]?:T[P];
}
```
사용할때는 아래와 같이
```typescript
type PersonPartial = Partial<Person>;
type ReadonlyPerson = ReadOnly<Person>;
```
이 문법은 member보다는 type 자체를 묘사합니다. member를 추가하고 싶다면 intersection type을 사용하면 됩니다.

```typescript
type PartialWithNewMember<T> = {
    [P in keyof T]?:T[P];
} & { newmember:boolean}

// this is error
type PartialWithNewMember<T> = {
    [P in keyof T]?:T[P];
    newMember :boolean;
}
```
가장 간단한 형태의 mapped type을 알아봅시다.
```typescript
type Keys = 'option1' | 'option2';
type Flags = {[K in Keys]:boolean};
```
이 문법은 ```for ... in```키워드와 index signature를 같이 쓴 경우와 유사합니다.
    1. type 변수 K
    2. string literal union ```Keys``` property name key union
    3. resulting type of property.
```typescript
type Flags = {
    option1:boolean;
    option2:boolean;
}
```
과 완전히 동일하다.

실 케이스에서는 ReadOnly와 Partial은 이미 있는 타입과 연관되어야 하므로 속성들을 일부 변조한다.
```typescript
type NullablePerson = {[P in keyof Person]:Person[P]|null}
type PartialPerson = {[P in keyof Person]?:Person[P]}
```
Generic을 쓰면 더 쉽다.
```typescript
type Nullable<T>  = {[P in keyof T]:T[P]|null};
type Partial<T> = {[p in keyof T]?:T[P]}
```
index type query를 사용하여 기존의 property를 복사하게 되면 compiler가 알아서 readonly등의 property signature를 그대로 유지해 주기 때문에 아주 간편하다. 예를 들어 ```Person.name```이 readonly였다면 ```Partial<Person>.name```은 readonly & optional이 될 것이다.

아래는 Proxy를 만드는 예제이다.
```typescript
type Proxy<T>= {
    get():T;
    set(value:T):void;
}

type Proxify<T> = {
    [P in keyof T]:Proxy<T[P]>
}

function proxify<T>(o:T):Proxify<T>{

}

let proxyProps = proxify(props);
```
ReadOnly와 Partial은 typescrip 표준 라이브러리에 Pick Record과 함께 존재한다.
```typescript
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type Record<K extends keyof any, T> = {
    [P in K]:T
}

```
ReadOnly, Partial Pick은 homomorphic하지만 Record는 아니다.
```typescript
type ThreeStringProps = Record<'prop1' | 'prop2'|'prop3', string>
```
Non-homomorphic type은 근본적으로 새로운 properties를 생성한다. 그러므로 property modifier까지 복사해 오는 것은 아니다.

#### [Inference from mapped type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#inference-from-mapped-types)
이제 타입 property를 wrap하는 법은 배웠습니다. unwrap은 매우 쉽습니다.
```typescript
function unproxify<T>(t:Proxify<T>):T{
    let result:T = {} as T;
    for(const k in t){
        result[k] = t[k].get();
    }

    return result;
}

let originalProps = unproxify(proxyProps);
```
이런 unwrapping 추론은 자기 동형[^1] mapped type에서만 사용 가능합니다. mapped type이 자기 동형이 아닌 경우 unwrapping하기 위해선 명시적인 타입 전달이 필요합니다.

### [Conditional type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#conditional-types)
Typescript 2.8부터 conditional type이 도입되었습니다. non-uniform type mapping이 가능해졌습니다. 조건절에 따라 다른 타입을 명시할 수 있게 합니다.

```
T extends U ? X : Y
```

위 type 정의는 X, Y type 또는 deffered로 결정됩니다. T나 U가 타입 변수를 가지고 있을 경우 X, Y, deffered 타입을 결정하기 위해서는 type system이 T가 항상 U에 할당될 수 있는지 판별하기 위해 충분한 근거가 있어야 합니다.

```typescript
declare function f<T extends boolean>(x:T):T extend true ? string:number;

let x = f(Math.random() < 0.5);
```

```typescript
type TypeName<T> = 
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T0 = TypeName<string>;
type T1 = TypeName<"a">;
type T2 = TypeName<true>;
type T3 = TypeName<()=>void>;
type T4 = TypeName<string[]>;
    
```

```typescript
interface Foo{
    propA : boolean;
    propB : boolean;
}

declare function f<T>(x:T) : T extends Foo ? string:number;

function foo<U>(x:U){
    let a = f(x);
    let b: string | number = a;
}
```
위 예제에서 f()의 반환값은 ```string | number``` 중 결정되지 않았으므로 ``` string | number ```의 타입 선언으로 값을 할당할 수 있다.

### [Distributive conditional types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#distributive-conditional-types)
Conditional type중에 checked type이 naked type인 경우에 Distributive conditional type이라고 호칭한다. Distributive conditional type은 인스턴스화 중에 자동으로 union type으로 분포된다. 예를들어 ```T extends U ? X : Y```를 T가 ```A | B | C```일때 인스턴스화하게 되면 ```A extends U ? X : Y | B extends U ? X : Y | C extends U ? X : Y```로 치환된다.

```typescript
type T10 = TypeName<string | (() => void)>; // "string" | "function"
type T12 = TypeName<string | string[] | undefined>;  // "string" | "object" | "undefined"
type T11 = TypeName<string[] | number[]>; // "object"
```
아.. 이거 뭔 말인지 영어 해석이 안되네..

### [Type inference in conditional types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-inference-in-conditional-types)
```infer``` keyword를 통해 타입을 추론할 수 있다.
```typescript
type ReturnType<T> = T extends (...args:any[])=> infer R ? R : any
```

conditional type 추론은 중첩될 수 있다.

```typescript
type Uncheked<T> = 
T extends (infer U)[] ? U:
T extends (...args:any[])=> infer U ? U :
T extends Promise<infer U> ? U :
T;

type T0 = Unpacked<string>; // string
type T1 = Unpacked<string[]>; // string
type T2 = Unpacked<() => string>; // string
type T3 = Unpacked<Promise<string>>; //string
type T4 = Unpacked<Promise<string>[]>; // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>>; // string
```
오버로드 선언 된 함수의 타입 추론은 가장 마지막에 선언된 함수에 한해 처리된다.

### [Predefined conditional type](https://www.typescriptlang.org/docs/handbook/advanced-types.html#predefined-conditional-types)
- ```Exclude<T, U>``` : exclude from T those types that are assignable to U
- ```Extract<T, U>``` : Extract from T those types that are assignable to U.
- ```NonNullable<T>``` : Exclude null and undefined from T,
- ```ReturnType<T>``` : Obtain return of function type.
- ```InstanceType<T>``` : Obtain instance type of a constructor function type;

### TODO
- Required class
- Omit class
- Exclude?
- SubPartial?


[^1]: 스스로의 property를 호환 가능한