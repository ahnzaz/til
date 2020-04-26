# Sending custom message from sender to receiver

## Receiver API
- [Message type 중 커스텀 메시지 필드 존재](https://developers.google.com/cast/docs/reference/caf_receiver/cast.framework.messages#.MessageType)

## Sender API - Android
- [Sender API 중 네임스페이스 정의하여 메시지 전송하는 API 존재](https://developers.google.com/android/reference/com/google/android/gms/cast/framework/CastSession.html#sendMessage(java.lang.String,%20java.lang.String)

## Sender API - chrome
- [마찬가지로 sendMessage 존재.](https://developers.google.com/cast/docs/reference/chrome/cast.framework.CastSession#sendMessage) 이걸로 해볼 수 있을 듯 한데 주말에 해봐야 할듯

지원하는 타입은 string 뿐이지만 이 두개가 연결되어 있을 것으로 추정되는데