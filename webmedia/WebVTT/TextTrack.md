# TextTrack interface
## Properties
### mode
```TextTrack.mode``` 프로퍼티는 텍스트트랙의 현재 모드를 보여주는 property이다. 아래 3 값 중 하나이며 getter/setter로 동작한다.
- ```"disabled"``` : TextTrack을 disable한다. DOM에 표시되더라도 브라우저가 무시한다.
- ```"hidden"``` : 활성화 되어 있지만 표시되지 않는다. 
- ```"showing"``` : 활성화 되었으며 출력된다.