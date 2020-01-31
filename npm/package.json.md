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