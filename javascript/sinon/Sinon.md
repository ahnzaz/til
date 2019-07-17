# Sinon
## Counter-intuitive behavior
- Fake server에서 respond하지 않은 URL은 실제 Host로 연결되지 않음
- ```respondWith``` function에 URL String을 넘길때 Protocol도 포함된 전체 URL을 전달해야 함.