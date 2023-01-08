

```js
const element = <h1>Hello, world!</h1>;
```

JSX란? 

자바스크립트를 확장한 문법. UI가 어떻게 생겨야 하는지 설명하기 위해 React와 함께 사용한다. JavaScript의 모든 기능이 포함되어 있다.
JSX는 React "엘리먼트(element)" 를 생성한다. 

React에서는 본질적으로 렌더링 로직이 UI 로직과 연결된다.
ex) 이벤트가 처리되는 방식, 시간에 따라 state가 변하는 방식, 화면에 표시하기 위해 데이터가 준비되는 방식

React는 별도의 파일에 마크업과 로직을 넣어 기술을 인위적으로 분리하는 대신, 둘 다 포함하는 "컴포넌트" 라고 부르는 느슨하게 연결된 유닛으로 관심사를 분리한다.

## JSX에 표현식 포함하기

```js
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```

JSX 중괄호 안에는 유효한 모든 JavaScript 표현식을 넣을 수 있다.
ex) 2 + 2, user.firstName 또는 formatName(user)


```js
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
```
함수 호출 결과도 가능하다.

## JSX도 표현식이다.

컴파일이 끝나면, JSX 표현식이 정규 JavaScript 함수 호출이 되고 JavaScript 객체로 인식된다. JSX를 if 구문 및 for loop 안에 사용하고, 변수에 할당하고, 인자로서 받아들이고, 함수로서 반환할 수 있다. JSX도 표현식이기 때문이다.


## JSX 속성 정의

어트리뷰트(속성)에 따옴표를 이용해 문자열 리터럴을 정의할 수 있다. 중괄호를 사용하여 어트리뷰트에 JavaScript 표현식을 삽입할 수도 있다.

```js
const element = <a href="https://www.reactjs.org"> link </a>;
const element = <img src={user.avatarUrl}></img>;
```

어트리뷰트에 JavaScript 표현식을 삽입할 때 중괄호 주변에 따옴표를 입력하면 안 된다. 따옴표 or 중괄호 둘 중 하나여야 한다. 동일한 어트리뷰트에 두 가지를 동시에 사용하면 안 된다.

JSX는 HTML보다는 JavaScript에 가깝기 때문에, React DOM은 HTML 어트리뷰트 이름 대신 camelCase 프로퍼티 명명 규칙을 사용한다.

Ex) JSX에서 class는 className가 되고 tabindex는 tabIndex가 된다.

## JSX는 주입 공격을 방지한다.

JSX에 사용자 입력을 삽입하는 것은 안전하다.
기본적으로 React DOM은 JSX에 삽입된 모든 값을 렌더링하기 전에 이스케이프 하므로, 애플리케이션에서 명시적으로 작성되지 않은 내용은 주입되지 않습니다. 모든 항목은 렌더링 되기 전에 문자열로 변환됩니다. 이런 특성으로 인해 XSS (cross-site-scripting) 공격을 방지할 수 있습니다.


## JSX는 객체를 표현합니다.

Babel은 JSX를 React.createElement() 호출로 컴파일합니다.

```js
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```js
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

React.createElement()는 버그가 없는 코드를 작성하는 데 도움이 되도록 몇 가지 검사를 수행하며, 기본적으로 다음과 같은 객체를 생성합니다.

```js
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!'
  }
};
```

이러한 객체를 “React 엘리먼트”라고 하며, 화면에서 보고 싶은 것을 나타내는 표현이라 생각하면 됩니다. React는 이 객체를 읽어서, DOM을 구성하고 최신 상태로 유지하는 데 사용합니다.



질문 : JSX란?
- 자바스크립트를 확장한 문법이고 React element를 생성함.

질문 : 리액트는 JSX로 어떻게 React element를 생성하나?
- Babel이 React.createElement()를 호출하여 컴파일 함. 검사 수행 후 React 엘리먼트를 생성한다. React는 이 객체를 읽어서, DOM을 구성하고 최신 상태로 유지하는 데 사용한다.
