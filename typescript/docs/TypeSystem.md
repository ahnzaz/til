# [Typescript type system](https://basarat.gitbooks.io/typescript/docs/why-typescript.html)
- Javascript에 optional type system 제공
- Javascript 차기 버전 기능을 현재 Javascript engine에 제공

## Typescript type system
javascript에 왜 type을 추가하는가?

# Ambient declaration
Javascript의 모듈을 Typescript에서 사용하기 용이하도록 Typescript 문법으로 type만 선언하는 것

## Configure type root directory
tsconfig.json - typeRoots property

## 작성법
- @types 안에 해당 모듈 directory 생성
- 생성한 디렉토리 안에 index.d.ts 생성
- export할 타입의 인터페이스 선언
- 해당 인터페이스 타입의 변수(상수여도 무방) 선언
- export 선언
- 함수나 생성자도 interface로 선언 가능
- 오버로딩 가능
- 