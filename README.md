# React test

## Test

테스트란 제품의 기능이 정상적으로 동작하는지 확인하는 것

### Sofeware test 동작

요구사항에 맞게 제품이 동작하는지 테스트를 작성

함수, 기능, UI, 성능 등 다양한 expectation 테스트를 작성

`code -> [Expectation] -> test`

### 언제 소프트웨어를 테스트 해야할까?

수동 QA에 병목현상이 생기는 경우

### 테스트를 작성할 때 얻는 장점

- 자신감
- 제품/기능이 정상적으로 동작하는지 확인 가능
- 요구 사항 만족
- 이슈 예측
- 버그 예방 및 빠른 발견
- 리팩토링 용의
- 코드간 의존성이 낮아짐
- 코드 품질 향상
- 문서화

## Test Pyramid

```
               |
        |   E2E Test    |
    |   Integration Test   |
|           Unit Test         |
```

### Unit Test

단위 테스트
함수, 묘듈 클래스 단위 테스트

### Integration Test

모듈들, 클래스들이 잘 동작하는지 테스트

### E2E Test

사용자 관점에서의 UI 테스트

### 비용

```
cheap ---> expensive (개발 비용, 유지 보수 비용)
fast  ---> slow (테스트 속도)

Unit Test < Integration Test < E2E Test
```

### Etc

Contract Test, A/B Test, Stress Test 등 다양한 테스트도 있음

## TDD

Test Driven Development, 테스트 주도 개발

코드를 작성하기 전 테스트 코드를 먼저 작성하는 것

{(re)write the test} => {Run test} => Fail => {Write Engouh Code} => {Run test} => Pass => {Refactor} => {Run test} => Pass

사용자 입장에서 코드를 작성하기 떄문에

모든 요구 사항(목표)에 대해 점검

내부 구현 사항보다 인터페이스 위주로 코드를 작성하기 때문에 디커플링된 코드 작성이 가능

https://academy.dream-coding.com/courses/player/react-tdd/lessons/1121 (그림 찾아서 내용 대체하기)

- 메인 repo에 머지 전 코드에 test를 반드시 작성해야함
- 꼭 test -> code 순서로 작성해야하진 않음
- 좋은 문서화가 됨

## CI/CD와 테스트의 상관 관계

코드를 머지한 순간 모든 테스트가 동작하면서 통과되어야함

그래야 CD가 가능
