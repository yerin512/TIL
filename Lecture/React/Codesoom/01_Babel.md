
## Babel이란?

[Babel 공식문서](https://babeljs.io/docs/en/)
[김정환님 블로그](https://jeonghwan-kim.github.io/series/2019/12/22/frontend-dev-env-babel.html)

Babel은 JavaScript 컴파일러다. 현재 및 이전 브라우저 또는 환경에서 ECMAScript 2015+ 코드를 이전 버전과 호환되는 JS 버전으로 변환하는데 주로 사용되는 도구 체인이다.

```js
// Babel Input: ES2015 arrow function
[1, 2, 3].map(n => n + 1);

// Babel Output: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

Babel은 크로스 브라우징의 혼란을 해결해줄 수 있다. CMAScript2015+로 작성한 코드를 모든 브라우져에서 동작하도록 호환성을 지켜주기 때문이다. 이렇게 변환하는 것을 "트랜스파일" 한다고 표현한다. 변환 전후의 추상화 수준이 다른 빌드와 달리 트랜스파일은 추상화 수준을 유지한 상태로 코드를 변환한다. 타입스크립트 → 자바스크립트, JSX → 자바스크립트처럼 트랜스파일 후에도 여전히 코드를 읽을 수 있다.


바벨은 세 단계로 빌드를 진행한다.

1. 파싱(Parsing) : 코드를 읽고 추상 구문 트리로 변환한다.
2. 변환(Transforming) : 추상 구문 트리를 변경한다. 실제 코드를 변경하는 거다.
3. 출력 (Printing) : 변경된 결과물을 출력한다.

실무 환경에서는 바벨을 직접 사용하는 것보다는 웹팩으로 통합해서 사용하는 것이 일반적이다. 로더 형태로 제공하는데 babel-loader가 그것이다.

```
npm install -D babel-loader

// webpack.config.js:
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader", // 바벨 로더를 추가한다
      },
    ],
  },
}
```

바벨은 일관적인 방식으로 코딩하면서, 다양한 브라우저에서 돌아가는 어플리케이션을 만들기 위한 도구다. 바벨의 코어는 파싱과 출력만 담당하고 변환 작업은 플러그인이 처리한다. 여러 개의 플러그인들을 모아놓은 세트를 프리셋이라고 하는데 ECMAScript+ 환경은 env 프리셋을 사용한다. 바벨이 변환하지 못하는 코드는 폴리필이라 부르는 코드조각을 불러와 결과물에 로딩해서 해결한다.
babel-loader로 웹팩과 함께 사용하면 훨씬 단순하고 자동화된 프론트엔드 개발환경을 갖출 수 있다.

