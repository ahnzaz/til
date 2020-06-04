# DRM
![image](https://www.muvi.com/wp-content/uploads/2015/07/Mobi.jpg)

## Basic architecture

### Server-side
- Encrypted Media
- Key
- License server

### Client-side
- Content Decryption module
- EME (Interface)
- DRM Player (Application)

## DRM Solution
- License Server
- Encryption software
- CDM

- CDM이 HardWare, OS, Browser Plug-In등의 형태로 제공되며 플랫폼, 제공자마다 모두 다르기 때문에 서버측에서 다양한 플랫폼에 대응하는 DRM 솔루션을 제공해야 함

# MPEG Common encryption
콘텐츠 보호를 위해 암호화 미디어 포맷 규격

- 일반적인 암호화는 데이터 유형에 무관하게 전체 비트스트림을 암호화 규격에 맞추어 암호화
- MPEG Common encryption은 미디어 전송/복호화의 효율을 위해 MPEG 포맷 하에 각 stream 조각을 암호화, 메타를 추가한 MPEG 포맷의 확장 개념
- 128bit Key를 사용 AES 암복호화 (비대칭키를 사용하면 복호화-디코딩에 충분한 퍼포먼스를 확보하지 못할 것으로 추정)

# EME
Encrypted media를 재생하기 위한 복호화 Interface를 제공하는 HTML 확장 표준

![eme architecture](https://www.w3.org/TR/encrypted-media/stack_overview.svg)

| Phase                      | Subject | Event       | Description                      |
| -------------------------- | ------- | ----------- | -------------------------------- |
| Video source 주입          | Player  |             |                                  |
| 암호화 미디어 탐지        | Element | `encrypted` |                                  |
| Media Key Interface 생성  | Player  |             |                                  |
| Media session 생성         | Player  |             |                                  |
| Key request 객체 생성      | Player  |             |                                  |
| 라이선스 요청              | Element | `message`   | 통신은 Element에서 수행          |
| 키 라이선스 업데이트       | Player  |             | License 포매팅을 Player에서 수행 |
| 미디어 복호화 및 재생 시작 |         |             |                                  |

- Key가 노출되지 않는 것도 아닌데 왜 Request를 Element에서 수행하는가?