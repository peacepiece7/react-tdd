# Unit test

## Test runner

테스트를 실행 후 결과를 생성

ex) mocha, karma

## Assertion

테스트 조건, 비교를 통한 테스트 로직

ex) chai, should.js, expect.js, better-assert

jest를 사용하면 위 두가지를 동시에 가능

# Jest

https://jestjs.io/

- zero config
- snapshots
- isolated
- great apis (it, expect)
  - https://jestjs.io/docs/api
- mocking
- exceptional error messages

## Unit-test & Jest 정리

1. 함수 단위의 테스트 코드를 작성해야함
2. 비동기 코드의 경우 네트워크같은 사이드 이펙트가 테스트 코드에 영향을 주어선 않됨
3. 행동 또는 결과를 테스트 해야함

Stub는 주로 행동을 테스트할 때 사용

Mock은 주로 결과를 테스트할 때 사용
