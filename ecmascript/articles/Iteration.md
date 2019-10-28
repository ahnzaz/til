# Iteration
## [```for...of``` loop](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for...of)
### 정의
반복 가능한 객체 (Array, Map, Set, String, TypedArray, arguments)객체에 대해 반복하고 각 개별 값에 대해 실행하는 구문이 있는 루프를 생성
### DOM Collection에 대한 반복
```NodeList```같은 DOM Collection에 대해 반복
### 생성기에 대한 반복
generator를 반복할 수 있음
```
function* fibonacci() { // 생성기 함수
  let [prev, curr] = [1, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}

for (let n of fibonacci()) {
  console.log(n);
  // 1000에서 수열을 자름
  if (n >= 1000) {
    break;
  }
}
```
### 다른 반복 가능 객체에 대한 반복
iterable 프로토콜을 명시적으로 구현하는 객체도 반복 가능
```javascript
var iterable = {
    [Symbol.iterator]() {
        return {
            i:0,
            next(){
                if(this.i < 3){
                    return {value:this.i++, done:false};
                }
                return {value:undefined, done:true};
            }
        }
    }
}

for (var value of iterable){
    console.log(value);
}
```

### ```for...in```과의 차이점
- ```for...in``` : 객체의 열거 가능한 모든 속성을 반복함
- ```for...of``` : Collection 전용, [Symbol.iterator] 속성이 있는 모든 컬렉션 요소.

## Iteration protocol
ES6에 새로운 문법과 built-in 객체 뿐만 아니라 프로토콜(표현법)도 추가되었다. 일정 규칙만 충족한다면 어떠한 객체에서도 구현 가능.
### Iterable protocol
어떠한 value들이 iteration되는 것과 같은 loop 동작을 정의한다. ```Array```, ```Map```등은 built-in iterable객체들이다.

| Property                | Value                                                        |
| ----------------------- | ------------------------------------------------------------ |
| ```[Symbol.iterator]``` | Object를 반환하는, arguments 없는 function, iterator protocol을 따른다. |

어떤 객체가 반복되어야 한다면 이 객체의 ```@@iterator``` 메소드가 인수없이 호출되고, 반환된 iterator는 반복을 통해서 획득할 값들을 얻을 때 사용합니다.

### Iterator protocol
iterator protocol은 value들의 시퀀스를 만드는 표준 방법을 정의합니다.
객체가 ```next()``` 메소드를 가지고 있고 아래의 규칙에 따라 구현되었다면 그 객체는 iterator이다.

| Property   | Value                                                                                                                                                                                                                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ```next``` | 아래 2개의 속성들을 가진 object 를 반환하는 arguments 없는 함수 :<br /> ```done``` (boolean)<br />Iterator(반복자)가 마지막 반복 작업을 마쳤을 경우 true. 만약 iterator(반복자)에 return 값이 있다면 value의 값으로 지정된다. 반환 값에 대한 설명은 여기.<br />Iterator(반복자)의 작업이 남아있을 경우 false. Iterator(반복자)에 done 프로퍼티 자체를 특정짓지 않은 것과 동일하다.<br />```value``` - Iterator(반복자)으로부터 반환되는 모든 자바스크립트 값이며 done이 true일 경우 생략될 수 있다. |

몇몇 iterator들은 iterable이다.
```javascript
var someArray = [1, 5, 7];
var somArrayEntries = someArray.entries();

someArrayEntries.toString();    // "[object Array Iterator]"
someArrayEntries === someArrayEntries[Symbol.iterator]();   // true
```

### Iteration protocol 사용 예시
String은 built-in iterable 객체 중 하나이다.

```spread operator```같은 내장 구조들은 실제로는 동일한 iteration protocol을 사용한다.
```javascript
[...someString] // "h", "i"
```

- 사용자만의 ```@@iterator```를 특정함으로써 원하는 반복 행위를 설정할 수 있다.
```javascript
var someString = new String("hi");

someString[Symbol.iterator] = function(){
    return {
        next : function(){
            if(this._first){
                this._first = false;
                return {value:"bye", done:false};
            }else{
                return {done:true};
            }
        },
        _first : true,
    }
}
```

### Iterable 예시
#### 내장 Iterables
```String, Array, TypedArray, Map, Set```은 모두 내장 iterable이다. 프로토타입이 모두 @@iterator 메소드를 가지고 있기 때문

#### 사용자 정의된 iterables
고유한 iterable을 만들 수 있다.
```javascript
var myIterable = {};
myIterable[Symbol.iterator] = function*(){
    yield 1;
    yield 2;
    yield 3;
};

[...myIterable];    // [1, 2, 3];
```

#### Iterable을 허용하는 내장 API들
```Map, WeakMap, Set, WeakSet```
```javascript
var myObj = {};
new Map([[1,"a"],[2,"b"],[3,"c"]]).get(2);               // "b"
new WeakMap([[{},"a"],[myObj,"b"],[{},"c"]]).get(myObj); // "b"
new Set([1, 2, 3]).has(3);                               // true
new Set("123").has("2");                                 // true
new WeakSet(function*() {
    yield {};
    yield myObj;
    yield {};
}()).has(myObj);                                         // true
```
Promise.all(iterable), Promise.race(iterable), Array.from()도 해당한다.

#### Iterable과 함께 사용되는 문법
```for-of``` 루프, ```spread operator```, ```yield*```, ```destructing assignment```는 iterable과 함께 사용되는 구문(statements)과 표현(expression)이다.

#### 잘 정의되지 못한 iterables
iterable의 ```@@iterator```가 iterator 객체를 반환하지 않는다면, 잘 정의되지 못한 iterable이라 할 수 있다.

### generator object는 iterator 또는 iterable인가?
generator object는 iterator이면서 iterable합니다.

## 반복기 및 생성기
반복 개념을 핵심 언어 내로 바로 가져와 ```for...of``` 루프의 동작을 사용자가 정의하는 메커니즘

### 반복자(Iterator)
시퀀스를 정의하고 종료시의 반환값을 잠재적으로 정의하는 객체.

### Generator functions
반복자를 만들때 내부에서 상태를 유지해야 하기 때문에 주의해서 프로그래밍 해야 한다. 하지만 generator function을 사용한다면 대안이 될 수 있다. 실행이 연속적이지 않은 함수를 작성할 수 있기 때문이다.

```next()```를 호출하면 ```yield``` 구문까지 실행되고 값을 반환 함.
```javascript
function* makeRangeIterator(start = 0, end = Infinity, step = 1){
    let n = 0;
    for(let i=start;i<end;i+=step){
        n++;
        yield i;
    }
    return n;
}
```

### Iterables
#### 사용자 정의 iterables
```javascript
var myIterable = {
    *[Symbol.iterator]
}
```

### Generator 심화
```next()``` 메서드는 생성기 내부 상태를 수정하는데 쓰일 수 있는 값도 전달받을 수 있음. 전달되는 값은 생성기가 중단된 마지막 ```yield```식의 결과로 처리됨.

## ```function*```
```function*``` 구문은 generator를 반환하는 함수를 선언하는 구문이다.

## Generator
```Generator.prototype.next()```
```yield``` 표현을 통해 yield된 값을 반환합니다.

```Generator.prototype.return()```
주어진 값을 반환하고 생성기를 종료합니다.

```Generator.prototype.throw()```
생성기로 error를 throw합니다.

# Async iteration
## ```for await...of```
Async iterable 객체를 순회하는 루프를 생성해 내는 구문
```javascript
for await(variable of iterable){
    statement
}
```
### Iterating over async iterable
```javascript
var asyncIterable = {
    [Symbol.asyncIterator](){
        return {
            i : 0,
            next(){
                if(this.i < 3){
                    return Promise.resolve({value:this.i++, done:false});
                }

                return Promise.resolve({done:true)};
            }
        }
    }
}

(async function(){
    for await (let num of asyncIterable){
        console.log(num);
    }
})();
```

### Iterating over async generators
```javascript
async function* asyncGenerator(){
    var i =0;
    while(i < 3){
        yield i++;
    }
}

(async function(){
    for await(let num of asyncGenerator()){
        console.log(num);
    }
})
```