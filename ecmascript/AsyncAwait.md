# [Async and Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#The_async_keyword)
Promise를 간편하게 처리할 수 있는 문법슈가이다. ECMAScript 2017 스펙에 추가되었으며 비동기 코드를 마치 동기 코드처럼 작성하고 실행할 수 있게 하는 키워드들이다.

## [Async await 키워드 기본](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#The_basics_of_asyncawait)
### [Async keyword](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#The_async_keyword)
function 앞에 선언하여 function을 ```async function```으로 만든다.
```javascript
function hello(){return 'hello'};
hello();    // 'hello'
```

```javascript
async function hello(){return 'hello'}
hello(); // Promise<string>
```
즉 async function은 항상 Promise를 반환한다.

### [await keyword](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#The_await_keyword)
async function의 진정한 장점은 await keyword와 같이 쓰일 떄 발휘된다.
await keyword는 Promise를 반환하는 expression 앞에 사용되어 Promise가 fulfilled될 때 까지 코드 진행을 멈추고 대기하게 한다.
```javascript
async function hello(){
        return greeting = await Promise.resolve("string");
};
hello().then(alert);
```

## [async await로 코드 재작성](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#Rewriting_promise_code_with_asyncawait)
```javascript
fetch('coffe.jpg')
.then(response => response.blob())
.then(myBlob=>{
    let objectUrl = URL.createObjectURL(myBlob);
    let image = document.createImage('image');
    image.src = objectURL;
    document.body.appendChild(image);
})
.catch(e=>{
    conole.error();
})
```
위 코드를 async await를 통해 구현하면 아래와 같다.
```javascript
async function myfetch(){
    let response = await fetch('coffee.jpg');
    let myblob = await response.blob()
    // blah blah
}
myfetch();
```

### [어떻게 동작하는 거지?](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#But_how_does_it_work)
await keyword는 async function 안에서만 추가될 수 있다.

await keyword는 javascript 엔진으로 하여금 코드 실행을 멈추고 Promise가 fulfilled될 때까지 대기 후 fulfilled되면 진행을 재개한다. 그러므로 Promise가 반환되는 정확한 곳에 추가되어야 한다.
```javascript
let response = await fetch('coffe.jpg');
```

### [에러 핸들링 추가](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#Adding_error_handling)
await는 error를 throw하므로 try-catch로 잡아낼 수 있다.
```javascript
async function myFetch() {
  try {
    let response = await fetch('coffee.jpg');
    let myBlob = await response.blob();

    let objectURL = URL.createObjectURL(myBlob);
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
  } catch(e) {
    console.log(e);
  }
}

myFetch();
```

## [Promise.all() 처리](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#Awaiting_a_Promise.all())
async await는 Promise를 기반으로 작성되어 있으므로 Promise가 제공하는 모든 기능에 대응한다. Promise.all() 역시 await keyword를 통해 간단하게 대기할 수 있다.

## [async await의 단점](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await#The_downsides_of_asyncawait)
await를 걸게되면 내 코드는 중단되고 다른 Promise들이 수행될 때까지 대기하게 된다. 이는 코드를 느리게 만들며 개선하기 위한 몇가지 패턴이 있다.
...todo