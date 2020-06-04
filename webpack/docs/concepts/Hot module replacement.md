# [Hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/)

## How it works

### In the application
1. The application asks the HMR runtime to check updates.
2. The runtime asynchronously downloads the updates and notifies the applications.
3. The aplications then asks the runtime to apply the updates.
4. The runtime synchronoulsy applies the updates.

### Inthe Compliler
일반적인 자원외에 "update"를 추가로 emit하여 업데이트를 지원한다. "update"는

1. The updated manifest (JSON)
2. One or more updated chunks (Javascript)

### In a module
[`module.hot`](https://webpack.js.org/api/hot-module-replacement) interface

### In the Runtime