# [npmrc](https://docs.npmjs.com/configuring-npm/npmrc.html)

## 특정 scope의 패키지에 대해서 registry를 선언하고 싶을 때
`.npmrc`에 아래와 같은 설정을 추가한다.

```
@myscope:registry=https://myown.registry.com
```