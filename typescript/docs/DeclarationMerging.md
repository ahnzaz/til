# [Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)
## [Introduction](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#introduction)
Typesript의 특수한 기능 중 하나는 Javascript 객체를 type level로 묘사하는 것이다. 특이한 기능 중 하나로 'Declaration merging'이 있는데 이는 typescript의 추상 개념을 깊게 이해하는데 도움이 된다.

'Declaration merging'은 컴파일러가 같은 이름으로 선언된 두 개 이상의 타입을 하나로 합치는(merge) 기능이다. 합쳐진 정의부는 합쳐지기 전의 기능을 모두 가지고 있으며 합칠 수 있는 개수에는 제한이 없다.

## [Basic concepts](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#basic-concepts)
Typescript에서 무언가를 선언하면 3개의 그룹 중 하나 이상의 entity를 만든다. Namespace, type, value. Namespaces 생성 선언은 dot notation으로 접근 가능한 namespace를 만든다. Type 생성 선언은 선언된 영역에서만 보이며 주어진 이름에 bound되는 type을 생성한다. 마지막으로 value 생성 선언은 아웃풋 Javascript에서 보이는 값을 생성한다.
| Declaration type | Namespace | Type | value |
| ---------------- | --------- | ---- | ----- |
| Namespace        | X         |      | X     |
| Class            |           | X    | X     |
| Enum             |           | X    | X     |
| Interface        |           | X    |       |
| Type aliase      |           | X    |       |
| Function         |           | X    | X     |
| Variable         |           | X    | X     |
각 선언구가 어떤 것을 생성하는지 알아두면 `Declarations mergin'시에 어떤 것들이 merge되는지 알 수 있다.

## Merging Interface