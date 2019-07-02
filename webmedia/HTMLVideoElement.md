# HTMLVideoElement
## Nonintuitive behavior
- ```currentTime``` property에 동일한 값을 지정하여도 ```timeupdate``` event가 계속해서 발생한다.

## Properties
### poster:string
- ```poster``` 값에 ```null```이나 ```undefined```를 넣어도 그 이름의 resource를 찾으려고 시도한다. 때문에 ```./null```이름의 이미지 리소스를 준비하면 해당 파일을 포스터로 삼는다!.