# output
compile된 파일을 어느 곳에 작성할지 결정하는 옵션입니다. `entry`는 여러 개가 될 수 있는 반면 `output`은 하나 뿐입니다.

## Usage
- `filename`은 output file의 이름입니다.

```javascript
module.exports = {
    output : {
        filename : 'bundle.js',
    }
}
```

## Multiple Entry Points
한개 이상의 "chunk"를 작성하려는 경우 각 파일이 서로 다른 이름을 가지도록 설정해야 합니다.

```javascript
module.exports = {
    entry : {
        app : './src/app.js',
        search : './src/search.js'
    },
    output : {
        filename : '[name].js',
        path : __dirname + 'dist'
    }
}
```

## Advanced
asset을 CDN과 hash를 사용하는 복합 예제입니다.

config.js
```javascript
module.exports = {
    //...
    output : {
        path : '/home/proj/cdn/assets/[hash]',
        publicPath : 'https://cdn.example.com/assets/[hash]/'
    }
}
```

publicPath는 빈칸으로 남겨놓고 runtime에 `__webpack_public_path__`에 동적으로 삽입할 수도 있다.

- [ ] publicPath가 어떤 역할일까?