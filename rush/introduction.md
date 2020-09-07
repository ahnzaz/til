# Rush introduction
## A single NPM install
`package.json` 파일에 의존성을 기록하지 않고 symlink를 통해 상호 의존성을 해결한다.

## Automatic local linking
Rush repo 내의 project들은 자동으로 local link되므로 변경 사항 발생 시 publish없이 다른 패키지에 반영된다.

## Fast builds
의존성 그래프를 자동으로 디텍트하여 의존 관계까 없는 패키지는 병렬로 빌드한다.

## Subset and incremental builds
`rush build --to <project>` 명령어는 업스트림 의존성을 가지는 프로젝트들만 클린 빌드한다.
`rush build --from <project>` 명령어는 다운스트림 의존성을 가지는 프로젝트들만 클린 빌드한다.

## Cyclic dependencies
순환 의존성이 발생한 경우 특정 패키지의 마지막 빌드된 버전을 활용한다.

## Bulk publishing
publich 시점에 rush가 알아서 변경점을 찾아내고 버전업을 해야 할 패키지를 판별한다.

## Changelog detecting
PR이 생성될 때 마다 개발자로 하여금 changelog 작성을 강제할 수 있습니다. 이는 이후 publish 단계에서 `CHANGELOG.md` 파일에 자동 기록됩니다.

## Enterprise policies
엔터프라이즈 급 프로젝트에 필요한 개발/운용 정책등을 강제할 수 있음