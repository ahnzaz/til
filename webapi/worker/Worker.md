# [Worker API](https://developer.mozilla.org/ko/docs/Web/API/Web_Workers_API/basic_usage)

## Definition
워커는 자바스크립트 코드를 UI 스레드와 분리된 별도의 스레드에서 동작하게 하는 API다.
DOM Manipulation 및 StorageAPI등 몇 개 API를 사용할 수 없지만 거의 대부분의 Javascript code와 HTML5 API를 사용 가능

## Dedicated Worker

### Example
Worker thread로 넘긴 값을 10배하여 반환하는 워커 예제
- index.js
```javascript
if(window.Worker){
    const worker = new Worker('worker.js');
    
    worker.onmessage = event => {
        const result = event.data;
        console.log(result);
    }
    worker.postMessage(10);
}
```
- worker.js
```javascript
onmessage = event => {
    const param = event.data;
    
    postMessage(param * 10);
}
```

### Spec
- 워커로 전달된 파라미터는 same-origin policy를 따른다.
- 워커로 전달된 값은 복사된다. 공유되지 않는다.

### import another script
```javascript
onmessage = e=>{
    importScript('another.js');
}
```
```importScript```는 WorkerGlobal에만 있음. 로드 된 스크립트는 동기로 호출 됨

## Shared worker
```javascript
const worker = new SharedWorker('worker.js');
```
### Counter intuitive behavior
- Shared worker 내부에서는 debugger도 console도, window.alert도 안되며 Worker로 로드했을 때 script가 불려지는 것도 네트워크 패널에서 안보이는데.. 정작 로직은 잘 동작한다. 크롬만의 이슈인지 확인 필요.

### [About thread safety](https://developer.mozilla.org/ko/docs/Web/API/Web_Workers_API/basic_usage#About_thread_safety)
```Worker```는 실제 OS레벨 스레드 분기를 제공

## Trasfer data detail
### Trasfer ownership
- Transferable interface : ArrayBuffer등의 ```Transferable``` object는 워커 스레드로 소유권만 이전되며 복사되지 않는다. 하지만 소유권 이전 후에는 해당 reference를 통한 억세스가 불가능하다!

## Embedded worker
- non-excutable script tag를 DataURI를 통해 embedded하는 법. 재밌음

## Futher examples
나중에 시간나면 더 읽어볼 것