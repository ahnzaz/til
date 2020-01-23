# Modlule Resolution
Resolver는 절대경로 상의 모듈의 위치를 가져오는 라이브러리이다. 의존성을 위해 특정 모듈에서 아래와 같이 다른 모듈을 참조할 수 있다.

```js
import foo from 'path/to/module';

require('path/to/module');
```

resolver는 webpack으로 하여금 모듈을 찾게 해준다. webpack은 번들링 할 때 module을 찾을 때 enhanced-resolve를 사용한다.

## Resolving rules in webpack
`enhanced-resolve`를 통해 3 종류의 file path를 처리한다.

### Absolute paths
```js
import '/home/me/file';

import 'C:\\Users\\me\\file';
```
절대경로는 더 이상 정보가 필요없다.

## Relative paths
```js
import '../src/file1';
import './file2';
```
상대경로 참조는 `import`, `require`가 존재하는 위치에서 상대 경로를 참조한다.

## Module paths
```js
import 'module';
import 'module/lib/file';
```

`resolve.modules` 에 정의된 모든 디렉토리를 찾는다. 원본 모듈 패스를 `resolve.alias` option으로 대체 경로를 만들 수 있다.

resolver가 찾은 경로가 파일인경우

- file에 확장자가 있을 경우 바로 번들링한다.
- 아닐 경우 `resolve.extensions` 옵션에 지정된 확장자인지 확인 후 번들링한다.

디렉토리인 경우 아래 과정으로 정확한 파일을 찾는다.

- 디렉토리에 `package.json`이 있는 경우 `resolve.mainFields` 옵션에 명시된 값 순으로 찾는다. `package.json`의 첫번째 field가 파일 패스를 결정한다.
- `package.json`이 없거나 `resolve.mainFields`가 valid한 path를 반환하지 않는다면 `resolve.mainFiles`에 명시된 이름 순으로 찾는다.
- `reolsve.extension` option을 통해 확장자도 resolve한다.

## Resolving Loader
`resolveLoader`를 정의하여 loader를 위한 resolve 방법을 재 작성 할 수 있다.

## Caching
동일한 파일에 요청할 때 캐싱을 사용한다. `watch mode`에서는 수정한 파일만 재 캐시한다.