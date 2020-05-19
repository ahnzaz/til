# [npm-package.json](https://docs.npmjs.com/files/package.json)

## Dependencies

### Urls as dependencies

### Git URLs as dependencies

```
<protocol>://[<user>[:<password>]@]<hostname>[:<port>][:][/]<path>[#<commit-ish> | #semver:<semver>]
```

Protocol is one of below
- `git`
- `git+ssh`
- `git+http`
- `git+https`
- `git+file`

`#<commit-ish>`가 있다면 정확히 해당 commit을 클론한다. `#semver:<semver>`가 있다면 

### GitHub URLs
1.65 버전부터 github url을 명시할 수 있게 되었다.
```json
{
    "dependencies":{
        "express" : "expressjs/express",
        "mocha" : "mochajs/mocha#4727d357ea",
        "module" : "user/repo#feature\/branch",
    }
}
```

### Local paths
2.0.0부터는 local path도 지정 가능하다.
```json
{
    "dependencies":{
        "bar" : "file:../foo/bar",
    }
}
```

## bundledDependencies
```json
{
    "bundledDependencies" : ["<package1>", "<pacakge2>"]
}
```
현재 패키지에 같이 포함할 패키지명을 나열한다. 여기에 포함된 패키지는 `npm pack` 명령어를 실행할 때 같이 패키징된다.
다른 패키지에서 현재 패키지를 설치할 경우 일반적인 `dependency`는 해당 패키지의 `node_modules/`에 저장되는 반면, `bundleddDependencies`에 명시된 패키지는 현재 패키지의 `node_modules/`내에 카피 된다.
로컬 디렉토리를 패키지로 지정해야 하거나 credential이 필요한 private repo에 저장된 패키지를 공개 패키지에 포함시킬 경우 유용하게 사용할 수 있다.