# React Test

## References

### React

[react testing](https://legacy.reactjs.org/docs/testing.html)

[react testing recipes](https://legacy.reactjs.org/docs/testing-recipes.html)

[react testing env](https://legacy.reactjs.org/docs/testing-environments.html)

### react testing library

[react testing library](https://testing-library.com/docs/react-testing-library/intro)

[react testing library cheat sheet](https://testing-library.com/docs/react-testing-library/cheatsheet/)

### Jest

[Jest docs](https://jestjs.io/docs/tutorial-react)

### react-query

[react-query testing docs](https://tanstack.com/query/latest/docs/react/guides/testing)

## Jest

jest를 사용해서 react component를 테스팅할 수 있다.

jsdom이라는 가상의 돔을 사용해서 테스팅한다.

## React Testing Library

react-testing-library를 사용해서 react component를 테스팅할 수 있다.

react-testing-library는 내구 구현 사항에 얽매이지 않고 사용자의 관점에서 테스팅하도록 도와준다.

클레스 이름이 바뀌어도 테스트 코드에 영향이 없다.

but 자식 컴포넌트를 테스트 하기는 어렵기 때문에 Jest의 mock을 사용해서 같이 테스트 해야한다.

## Coverage (Jest)

% stmt : 문장 커버리지

% branch : 분기 커버리지 (if, switch)

% func : 함수 커버리지

% lines : 라인 커버리지
