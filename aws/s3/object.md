# S3 object
S3 내의 모든 존재는 객체로 취급한다.

## Basic terminology
- key : 객체의 이름
- version id : 키와 버전 id를 조합하여 객체를 고유하게 식별 가능
- value : 저장된 콘텐츠. 임의의 바이트 시퀀스로 0TB - 5TB의 크기를 가질 수 있음
- metadata : 객체에 관련된 정보를 담고 있는 key-value 페어
- Subresources : 하위 리소스 메커니즘을 통해 객체 관련 추가 정보를 저장
- Access control information : s3에 저장된 객체에 대한 접근 제어에 관한 정보

s3에 저장된 객체는 기본적으로 비공개이므로, 외부에서 접근하도록 하고 싶다면 공개로 설정하거나 서명된 url을 사용하여야 함

## Object key
## Object metadata
객체를 업로드 후에는 메타데이터를 수정할 수 없다. 수정하려면 복사본을 만들고 수정해야 한다.
### System defined metadata
1. 객체 생성 날짜 등의 정보는 시스템에서 제어하며 s3 만이 수정 가능하다.
2. 객체에 대해 구성된 스토리지 클래스, 서버측 암호화 사용 여부 등의 값은 사용자가 변경할 수 있는 시스템 메타 데이터이다.
http header와 유사한 포맷을 가지고 있음


### User defined metadata
객체를 `PUT`, `POST` 명령어로 생성할 때 http header를 지정하는 방식으로 사용자 정의 메타데이터를 생성할 수 있음. 다른 http header와 혼동되지 않기 위해 `x-amz-meta-` 접두어로 시작해야 함.

## [S3 Storage class](https://docs.aws.amazon.com/ko_kr/AmazonS3/latest/dev/storage-class-intro.html)