# [Championing proposal](https://github.com/tc39/how-we-work/blob/master/champion.md#championing-a-proposal-at-tc39)
## Work outside of committee
- Explainer : 고수준 언어로 잘 작성된 설명문. proposal의 목적과 형태가 무엇인지 기술한다.
- Documentation : Javascript 개발자 대상으로 proposal을 어떻게 사용하는지 설명
- Implementations : 구현 프로그래머에게 proposal을 어떻게 구현하는지 설명
- Tests : 구현이 제대로 되었는지 테스트 할 수 있는 로직 구현체 내에서도 가능하지만 궁극적으로 test262(?)로 마이그레이션이 목표
- Collecting feedback : 개발자, 프로그래머, 학계, 교육계, 커뮤니티 리더 등 다양한 계층으로부터 피드백 감수

## Managing a GitHub repository
stage된 제안은 tc39 위원회의 공개된 후에는 모두 tc39 기관 하에 포함된 깃헙 레포를 가지고 있어야 한다.

### [Stage process tracking issues](https://github.com/tc39/how-we-work/blob/master/champion.md#stage-process-tracking-issue)
## Stage 4
## Stage 3
## Stage 2
## Stage 1

### [Moving through the stage in commitee](https://github.com/tc39/how-we-work/blob/master/champion.md#moving-through-the-stages-in-committee)
stage 승급은 위원회 회의에서 결정됨 위원회에 제안이 소개되고, 위원회 멤버들이 stage 승급에 동의하는 경우에
[초안 프레젠테이션 가이드](https://github.com/tc39/how-we-work/blob/master/presenting.md)
#### Stage 1 진입 조건
> - Identified "champion" who will advance the addition
> - Prose outlining the problem or need and the general shape of a solution
> - Illustrative examples of usage
> - High-level API
> - Discussion of key algorithm, abstraction and semantics
> - Identification of potential "cross-cutting" concerns and imlementation challenges/complexity

수용의 의미:
> The committee expects to devote time to examining the problem space, solutions and cross-cutting concerns.

Leading up to stage 1,
- Identify a champion (or champion group)

stage 1 단계는 Javascript를 특정 방향으로 변경하겠다는 의지의 표명이 아니라 이 문제에 대해 위원회가 고려중이라는 것에 불과합니다.

stage 1 단계에 대해서는 아래 작업을 수행하는 것이 도움이 됩니다.
- Consult with Javascript developer : 개발자들이 어떤 문제에 직면해 있는지, 언어적인 수준에서 어떤 솔루션들이 해결책이 되고 있는지
- 반대 의견이 있다면 github issue에서 디스커션하고 여러가지 해결책에 대해 연구합니다.
- documentation 작업, draft 구현, test등을 수행
- Github에 적절히 대응하기 : 질문에 응답 등을 성실히 수행
- [이 절차](https://github.com/tc39/proposals#onboarding-existing-proposals)에 따라 Proposal repo를 tc39 기관 내로 이동하기

#### Stage 2
진입하기 위한 조건
- Initial spec text

Stage 2의 의미
실제로 개발되길 바라며 궁극적으로 표준에 포함되길 위원회가 바란다는 뜻.

Stage 2에서 해야 할 일
- Develop a full draft of the solution : 모든 질문에 대한 답이 될 필요는 없지만 드래프트 문서로부터 자신감이 느껴질 정도로 일관되게 작성되어야 함
- Write initial spec text : 100% 완벽할 필요는 없지만 솔루션 전체를 커버해야 한다.
- Prepare presentation : proposal에 대해 설명하고 왜 표준에 포함되어야 하는지 위원회를 설득해야 한다.

아래와 같은 일을 하는 것도 추천
- Keep talking with JavaScript developer
- If looking into multiple paths, works towards drawing them to a close some time before stage 3
- Stage 2에서는 테스트 할 수 있는 좋은 구현체가 필요하다. stage process에 있어 필수는 아니지만 stage 3으로 가기 전 실사용에 있어 피드백을 받는데 매우 유용하다.
- 이상적으로는 가장 큰 해결점이 도출되고, TC39 회의에서 더욱 더 세밀한 부분에 대해서 논의된다.
- TC39 회의에서 stage 2로 승격될 때 전통적으로 stage 3 리뷰어들이 선택된다.

#### Stage 3
진입 조건
> - complete spec text
> - Designated reviewers have signed off on the current spec text
> - All ECMAScript editors have signed off on the current spec text

진입 의의
> The solution is complete and no further works is possible without implementation experience, significant usage and external feedback.

Stage 3로 가기 위해서는,
- 가능하다면, 스펙에 대한 모든 문법 문맥적인 의문점 해결할 것
- Specification 문서를 완성할 것
- Stage 3 리뷰 받을 것
- 프레젠테이션 준비할 것

Stage 3에서는
- Write test262 test
- Work on various implementations.
- Communicate the decisions made to the broader community

#### Stage 4
진입 조건
> - Test262 테스터들이 중심이 되는 사용 시나리오에 대해 테스트 함
> - 두가지 호환되는 구현체가 수락 테스트를 통과해야 함
> - 두개의 독립적인 VM에 탑재되어 인필드 테스트를 통과해야 함
> - 모든 PR이 integrated 스펙 테스트와 함께 tc39/ecma262로 전송되어야 함
> - 모든 ECMAScript 에디터들이 PR에 사인해야 함

진입 의의
> - 이 스펙이 바로 다음 표준에 추가될 것임

Stage 4에 오르기 위해선
- At least two specification-compliant implementations.
- Full test262 tests.
- A PR against the main specification
- Prepare a presentation

Stage 4에 오르고 난 후
- Archive the proposal repository.
- Ensure that good documentation is available.
- Ensure polyfills/shims conditionally make use of native implementations when possible.


## [TC39 Code of conduct](https://tc39.es/code-of-conduct/)