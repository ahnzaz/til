# [Code Splitting](https://webpack.js.org/guides/code-splitting/)

Code splitting은 webpack의 가장 강력한 기능 중 하나로써 코드를 여러 형태로 번들하여 필요에 따라 병렬로 불러올 수 있게 한다.

- Entry Points: Manually split code using `entry` configuration.
- PRevent Duplication: Use the `SplitChunksPlugins` to dedupe and split chunks.
- Dynamic imports: Split code via inline function calls within modules.

## Entry Points
가장 간단한 형태로 코드를 분할할 수 있지만 해야할 작업이 많고 고도화 시 위험성이 있다.

- 중복되는 모듈이 있다면 각 chunk에 모두 포함된다.
- Core application logic만 동적으로 유연하게 분할할 수 없다.

## Prevent Duplication
`SplitChunksPlugin`를 사용하면 중복되는 부분을 한 쪽 entry에 포함하거나 아예 다른 chunk로 추출할 수 있다.

webpack.config.js
```js
module.exports = {
    ...
    optimization: {
        splitChunks:{
            chunks:"all",
        }
    }
}
```

- `mini-css-extract-plugin`: CSS 파일 분리에 용이
- `bundle-loader`: 코드 분할 및 lazy-loading에 사용
- `promise-loader`: `bundle-loader`와 유사하지만 `Promise`를 사용

## Dynamic Imports
`import()` syntax
`require.ensure`

`chunkFilename` : entry가 아닌 chunk file 이름을 지정.

## Prefetchin/Preloading modules
- prefetch:Resource가 이후 이동할 페이지에서 필요할 수도 있음.
- preload:Resource가 현재 페이지에서 필요할 수 있음.

preload가 prefetch와 다른점은 아래와 같다.

- preload는 부모 chunk와 병렬로 동시에 로드한다. prefetched chunk는 부모 chunk 로딩이 끝난 후에 로드한다.
- preload chunk는 중간 우선권을 가지고 즉시 다운로드 하며 prefetch chunk는 브라우저가 idle 상태일 때 로드한다.
- preload chunk는 부모 chunk에서 즉시 로드지만 prefetch chunk는 향후 어느시점에서든지 호출할 수 있다.
- Browser support는 다른 문제.

webpack progress에 적용되는 것으로는 보이나 실제로 `<link>` element로 달리지는 않음. 뭔가 세팅을 잘못했나.

## Bundle Analysis
[Official analyze tool](https://github.com/webpack/analyse)

어떤지 써봐야 할 듯.

## Next steps
[Lazy loading](https://webpack.js.org/guides/lazy-loading/)