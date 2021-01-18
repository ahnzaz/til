# Introduction
- A single NPM install : rush는 모든 프로젝트의 npm dependency를 공통 폴더에 설치한다. 각 프로젝트의 `node_modules` 디렉토리에 symlink로 dependency를 연결한다.
- Automatic local linking : local project 끼리는 자동으로 링크된다.
- Fast builds : 의존성 그래프를 생성하여 의존 관계에 있는 프로젝트들을 올바른 순서대로 자동으로 빌드해 준다. 의존 관계가 없는 프로젝트는 병렬 빌드한다.
- Subset and incremental builds
  - `rush rebulid --to <project>` : 해당 프로젝트까지의 upstream dependency만 빌드
  - `rush rebuild --from <project>` : 해당 프로젝트로부터 downstream dependency만 빌드
  - `rush build` : incremental build 수행
- Cyclic dependencies : 순환 참조가 있는 경우 last build를 활용하여 빌드 한다.
- Bulk publishing : 릴리즈시에 rush가 알아서 version bump를 수행. 각 project에서 `npm publish`로 퍼블리싱
- Changelog tracking : PR 생성 시 개발자로 하여금 changelog를 강제할 수 있다.

## Getting started as a developer
1. 특정 커맨드를 사용하지 말것 : `npm install`, `npm update` 등 의존성을 건드리는 명령어는 rush의 symlink 구조를 깨트리므로 사용 지양
2. 의존성 설치에 문제가 생겼다고 판단한다면 : `rush update --purge`로 의존성을 초기화 할 것

## Everyday commands
### `rush update`
- `git pull`로 변경사항 pull 후
- 프로젝트의 `package.json` 변경 후
- 아무 `common/config` 수정 후

#### `rush update`가 하는 것
- 정책을 체크하고 `common/config` 파일을 업데이트 하기도 함
- 프로젝트의 `package.json` 파일을 전체 체크하고 현재 shrinkwrap file과 비교
- 변경사항이 있다면 shrinkwrap file을 업데이트
- 이후 `common/temp/node_modules` 디렉토리에 전체 의존성 패키지를 설치
- 각 프로젝트의 `node_modules` 디렉토리에 `common/temp/node_modules`의 실제 의존성을 symlink (`symlink`와 동일한 작업)

