# Perceptual Hash
Perceptual hash란 멀티미디어 데이터를 해싱하는데 사용하는 알고리즘의 총칭이다. 멀티미디어 파일 내용의 특징을 가지도록 해싱하기 위하여 일반적인 해싱 알고리즘과는 몇 가지 차이점을 갖는다.
- 암호 해시가 눈사태 효과로 인해 데이터가 조금만 달라져도 해싱값이 완전히 달라지는데 반해 perceptual hash는 유사한 내용/특징을 가지는 멀티미디어 파일이라면 해싱 결과도 유사성을 갖는다.
- 미디어 데이터의 유사도를 판별하여 저작권 위반, 디지털 포렌식 등에 사용한다.

## DCT based hash function
- Low frequency에 이미지 데이터의 특징이 집중되어 있음을 활용
- Blur, 이미지 확대/축소, 디테일 증가/감소 등의 변화에 강함

## Marr-Hildreth operator based
- Edge detection 기반
- 밝기 변화 이미지 전체의 level이 동시에 변화해도 edge는 변하지 않음을 활용
- 텍스쳐 노이즈의 변화에 강함

## Radical variance based hash
- 방사형으로 DCT를 계산
- 이미지 회전 변화에 강함

## Block mean value based hash
- 이미지를 정규화 후 단위 블럭으로 쪼개어 알고리즘으로 도출한 값의 중간값으로 해싱