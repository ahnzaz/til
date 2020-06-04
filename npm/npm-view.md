# [NPM-View command](https://docs.npmjs.com/cli-commands/view.html)

## Description
현재 패키지, 또는 전달된 패키지의 대한 정보를 `stdout`으로 출력하는 명령어

`connect` package (기본 버전 @latest)에 대한 정보를 출력
`npm view connect`

의존성을 확인하는 명령어
`npm view ronn@0.3.5 dependencies`

주어진 패키지의 의존성 중 특정 패키지 버전을 확인하는 명령어
`npm view yui3@'>0.5.4' dependencies.jsdom`

버전 히스토리를 확인하는 명령어
`npm view connect versions`

## output
`--json` option을 주면 json format으로 출력