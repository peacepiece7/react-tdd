# 키워드

다음과 같은 기술 및 도구를 사용

- jest
- react-testing-library
- typescript
- vite
- eslint import order
- react-query
- tsx 확장자로 테스트 코드 짜기
- mocking 없이 비동기 함수 인터셉트 하기

# 템플릿 설명 및 이슈

## Typescript : ts(2307) 에러

일단 IDE 캐시 문제일 수 있음 껏다 켜자 제발

```json
//  tsconfig.node.js
{
  "include": ["vite.config.js", "tsconfig.node.json"]
}
```

## eslint : import order 설정

[import order setting](https://db2dev.tistory.com/entry/ESLint-importorder-규칙-설정하고-뒤죽박죽-import-코드-개선하기#newlines-between)

`npm install eslint-plugin-import`

```cjs
{
  extends : ['plugin:import/recommended',]
  plugins : ['import']
  rules : {
    'import/order': [
      'error',
       {
          // ...your import order config
       }
    ]
  }
}
```

## eslint : self closing tag 설정

`npm i -D eslint-plugin-react`

```json
{
  "extends": ["plugin:react/recommended"],
  "rules": {
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "react/react-in-jsx-scope": "off" // 이거 없으면 React import 해줘야함
  }
}
```

## eslint : import alias 설정

타입스크립트에 alias 설정 추가

```json
// tsconfing.json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"]
    }
  }
}
```

vite에 typescript alias를 쓰라고 알려주자

```js
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
```

# Jest 설정

\*.test.tsx를 사용하기 위한 jest 설정

비동기 함수는 테스트 코드 내에서 mock implementation을 통해 인터셉트 (msw 대신 stub를 따로 만듬)

https://xionwcfm.tistory.com/369
https://github.com/XionWCFM/vite-mui

## 테스팅에 필요한 도구 설치

```
npm i -D jest ts-jest @types/jest ts-node @testing-library/jest-dom jest-environment-jsdom
```

## 테스팅에 사용되는 도구 설치

```
npm i -D @testing-library/user-event @testing-library/react react-test-renderer @types/react-test-renderer
```

## jest.config.ts

```js
// jest.config.ts
export default {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.+)$': '<rootDir>/src/$1',
  },
  // ...the rest of options
}
```

```js
// jest.setup.ts
/**
 * 여기서 msw나 setup, teardown 등을 설정할 수 있다.
 * @see https://jestjs.io/docs/setup-teardown - setup, teardown
 * @see https://www.inflearn.com/questions/375768/jest%EC%99%80-testing-library-jest-dom - jest-dom
 * @see https://github.com/peacepiece7/templates/tree/main/redux-styled/src/mocks - msw
 */
import '@testing-library/jest-dom'
```

```js
// tsconfig.json
{
  "compilerOptions": {
    "types": [ "@testing-library/jest-dom"]
  }
}
```
