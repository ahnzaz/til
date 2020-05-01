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