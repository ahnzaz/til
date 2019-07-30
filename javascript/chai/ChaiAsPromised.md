# [Chai assertions for Promises](https://www.chaijs.com/plugins/chai-as-promised/)
Chai as promised는 Promise를 이용한 assertion을 사용할 수 있게 하는 확장 라이브러리다.

## Installation
```npm i chai-as-promised```

## Description
```typescript
doSomethingAsync().then(result=>{
    result.should.equal("foo");
    done();
}, err=>{
    done(err);
})
```
대신에
```typescript
return doSomethingAsync().should.eventually.equal("foo");
```
로 표현하게 할 수 있다.

return을 사용할 수 없거나 권장되지 않는 환경에서는 아래와 같이 할 수 있다.

```typescript
doSomethingAsync().should.eventually.equal("foo").notify(done);
```
```return```/```notify``` 둘 중의 하나는 반드시 사용해야 한다.

## How to use
### should/expect interface
```eventually``` property가 매우 유용함
```typescript
(2+2).should.equal(4);

// becomes
return Promise.resolve(2+2).should.eventually.equal(4);

expect({foo:"bar"}).to.have.property("foo");

// becomes
return expect(Promise.resolve({foo:"bar"})).to.eventually.have.property("foo");
```
아래의 Promise 특화 인터페이스 참조.
```typescript
return promise.should.be.fulfilled;
return promise.should.eventually.deep.equal("foo");
return promise.should.become("foo");
return promise.should.be.rejected;
return promise.should.be.rejectedWith(Error);
```

### assert interface
```typescript
assert.equal(2+2, 4, "this had better true");

// becomes
return assert.eventually.equal(Promise.resolve(2+2), 4);
```

### Progress callbacks
CaP에는 promise progress callback을 위한 적절한 테스팅 도구는 없다. Property 테스트가 필요한 경우 sinon.js와 연동하는 것이 더 나을 것이다.

```typescript
var progressSpy = sinon.spy();

return promise.then(null, null, progressspy).then(()=>{
    progressspy.should.have.been.calledWith("33%");
    progressspy.should.have.been.calledWith("37%");
    progressspy.should.have.been.calledThrice;
});
```

### Customizing output promises
기본적으로 cap로 리턴된 Promise객체는 일반적인 chai assertion object로 하나의 then method를 지닌 객체입니다. 추가적인 인터페이스를 제공하려면 ```chaiAsPromised.transferPromiseness```를 상속받으면 된다.

```typescript
chaiAsPromised.transferPromiseness = function(assertion, promise){
    assertion.then = promise.then.bind(promise);
    assertion.finally = promise.finally.bind(promise);
    assertion.done = promise.done.bind(promise);
}
```

### Transforming arguments to the Asserters
```typescript
chaiAsPromised.transformAssertersArgs = args=>{
    return args.map(x => x+1);
}

Promise.resolve(2).should.eventually.equal(2); // now failed!
Promise.resolve(3).should.eventually.equal(2); // now Pass!!
```
위 변환 역시 비동기적일 수 있다.

### Compatibility