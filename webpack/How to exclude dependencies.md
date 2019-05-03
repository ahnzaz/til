# How to exclude module dependencies from bundling
[Link](https://webpack.js.org/configuration/externals/)
```javascript
{
    moduleName : externalName
}
```
import할 module name을 root namespace의 External Name을 참조하게끔 치환하고 module은 bundling하지 않는다.