# Subsume JSON (a.k.a JSON ⊂ ECMASCript)
## Status
- 2019.02.19 기준 Stage-4, ES2019에 표준으로 도입될 예정
## 도입 근거
- JSON 표준은 ECMAScript의 JSON.parse를 통해 완벽하게 구현된 것으로 알려져 있지만 사실은 그렇지 않다. [Line seprator](https://unicode-table.com/en/2028/), [Paragraph seperator](https://unicode-table.com/en/2029/) 등을 해석할 수 없어서 구현과 사용 양 측에서 애로사항이 꽃피는 중이다.
## Solution
- JSON 문법은 [ECMA-404](https://www.ecma-international.org/publications/standards/Ecma-404.htm)에서 정의되었고 [RFC-7159](https://tools.ietf.org/html/rfc7159)에서 확정되었지만 ECMA-262는 Line separator와 Paragraph separator를 포함할 수 있도록 확장할 수 있다.
## Examples
```js
const LS = " ";
const PS = eval("'\u2029'");
```
## 그 외
- 하위 호환을 지원하며 사용자가 느끼기에는 LS와 PS가 포함된 String을 JSON객체로 Parsing할 때 더 이상 Syntax error가 발생하지 않을 뿐이다.
- Regexp에서는 지원되지 않는다. Regexp는 JSON이 아니기 때문이다.
- Template Literal에서는 이미 지원되고 있다.
- Validity 
## 구현체
- [V8](https://bugs.chromium.org/p/v8/issues/detail?id=7418), Chrome 66+
- [Javascript Core](https://developer.apple.com/safari/technology-preview/release-notes/#release-49), Safari TP49+
- [Babel](https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-json-strings)