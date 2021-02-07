## `rush update`
하위 패키지들의 의존성을 추적하여 `node_modules` directory내부에 symlink로 연결한다.
`package.json` 파일이 변경된 후에는 항상 실행할 것
- `git pull`
- `package.json` 파일이 어떤 방식으로든 수정되었을 때
- 버전에 영향이 가는 어느 `common/config`라도 수정되었을 때(`pnpmfile.js`, `common-versions.js` 등)
`rush update` 시 `common/config` 파일이 수정되었다면 마찬가지로 git에 반영할 것

`rush update`는 아래 작업을 수행한다.
- 정책들을 적용하고 `common/config` 파일을 업데이트
- 모든 패키지의 `package.json` 파일을 체크하여 shrinkwrap 파일과 충돌하는 부분은 없는지 체크
- 미업데이트 되었다면 업데이트
- `common/temp/node_modules`에 모든 의존성을 설치
- 각 패키지의 local `node_modules` directory를 생성하고 `common/temp/node_modules`에 실제 의존성 패키지에 symlink로 연결

### shrinkwrap 파일이란?
semversion으로 기록된 의존성은 설치 당시 최신 버전에 따라 실제 설치되는 패키지가 다르다. shrinkwrap file은 git으로 추적 가능한 큰 파일을 통해 이러한 문제를 회피할 수 있도록 버전 변경을 기록한다.

### `rush install`
shrinkwrap 파일을 기반으로 의존성 패키지를 설치한다.

## `rush clean`
생성된 symlink를 모두 제거하여 package간의 의존성 정보를 rush에서 제거한다.

## `rush update --purge`
모든 symlink를 삭제하고 재 갱신하여 깨진 symlink 상태를 복구한다.

## `rush rebuild`
repository내 모든 package에 대해 clean build를 수행한다.

## `rushx`
개별 package 하나만 빌드하려면 해당 package root에서 `rushx`를 실행한다. `npm run`과 유사하지만 error-report 등을 더 잘해준다.

## `rush check`
`package.json` file을 수정한 후 `rush check`를 수행하면 동일한 library의 다른 버전에 의존성을 가지는지 체크한다.

## `rush change --verify`

## `rushx`
`npm run`과 유사하나, error report가 적음