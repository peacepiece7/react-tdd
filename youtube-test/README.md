# 키워드

- TDD
- jest
- react-testing-library
- typescript
- vite
- eslint import order

# 템플릿 이슈

## ts(2307) 에러

일단 IDE 캐시 문제일 수 있음 껏다 켜자 제발

```json
//  tsconfig.node.js
{
  "include": ["vite.config.js", "tsconfig.node.json"]
}
```

## import order

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

## self colsing

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

## import alias

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

- 1 안

```js
// vite.config.ts
export default defindConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
```

- 2 안

```js
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
})
```
