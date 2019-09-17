# [What's new in Chrome 77](https://developers.google.com/web/updates/2019/09/nic77)
## Feature

### Largest contentful paint
```load```나 ```DOMContentLoaded```등의 이벤트는 실제 사용자에게 보여지는 퍼포먼스에 대한 측정치가 될 수 없음.
- First paint
- First contentful paint
- First meaningful paint (FMP)
- Time to interactive (TTI)

**Largest Contentful Paint API**를 통해 실제 컨텐츠가 렌더링 된 시각을 토대로 퍼포먼스를 측정할 수 있음
```javascript
let lcp;
const po = new PerformanceObserver((eList)=>{
    const e = eList.getEntries();
    const last = e[e.length - 1];
    lcp = last.renderTime || last.loadTime;
});

const poOpts = {
    type : 'largest-contentful-paint',
    buffered: true
};

po.observe(poOpts);
```

```javascript
addEventListener('visibilitychange', function fn(){
    const visState = document.visibilityState;
    if(lcp && visState === 'hidden'){
        sendToAnalytics({lcp : lcp});
        removeEventListener('visibilitychange', fn, true);
    }
}, true);
```
[Reference](https://web.dev/largest-contentful-paint/)

### New forms capabilities.
폼을 커스터마이징하기 위해 그동안 ```<input>``` 태그를 히든으로 써왔음 이를 극복하기 위해 두 가지 기능이 추가됨.
#### The ```formdata``` event
```formdata``` event는 form submission을 캡쳐할 수 있음.
```javascript
const form = document.querySelector('form');
form.addEventListener('formdata', ({formData})=>{
    formData.append('my-input', myInputValue);
});
```

#### Form-associated custom elements
custom element와 native control간의 간극을 좁히기 위해 추가됨
```javascript
class MyCounter extends HTMLElement{
    static formAssociated = true;

    constructor(){
        super();
        this._internals = this.attachInternals();
        this._value = 0;
    }
}
```
[Reference](https://web.dev/more-capable-form-controls/)

### Native lazy loading
```html
<img src='image.jpg' loading="lazy">
```
만 하면 브라우저가 알아서 lazy loading해줌.. 개쩐다;
[Reference](https://web.dev/native-lazy-loading/)

### Chrome dev summit 2019
Dev summit 2019가 11월 11일 12일 개최 예정