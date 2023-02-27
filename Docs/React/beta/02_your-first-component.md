

# 첫 번째 컴포넌트

React는 마크업, CSS, 자바스크립트를 하나의 사용자 지정 "컴포넌트"로 결합할 수 있도록 합니다. 이러한 컴포넌트는 앱에서 재사용 가능한 UI 요소입니다. 예를 들어, 위에서 보았던 목차 코드를 
```<TableOfContents /> ```컴포넌트로 변환하여 모든 페이지에서 렌더링할 수 있습니다. 그러나 내부에서는 여전히 ```<article>, <h1>``` 등과 같은 동일한 HTML 태그를 사용합니다.

HTML 태그와 마찬가지로 컴포넌트를 조합, 정렬 및 중첩하여 전체 페이지를 디자인할 수 있습니다. 예를 들어, 지금 읽고 있는 문서 페이지는 React 컴포넌트로 구성되어 있습니다.


```js
<PageLayout>
  <NavigationHeader>
    <SearchBar />
    <Link to="/docs">Docs</Link>
  </NavigationHeader>
  <Sidebar />
  <PageContent>
    <TableOfContents />
    <DocumentationText />
  </PageContent>
</PageLayout>
```

프로젝트가 성장하면 이미 작성한 컴포넌트를 재사용하여 디자인을 구성할 수 있음을 알게될 것입니다. 이렇게 하면 개발 속도가 빨라집니다. 위의 목차 표는 <TableOfContents />를 사용하여 어떤 화면에든 추가할 수 있습니다! 또한 Chakra UI나 Material UI와 같은 리액트 오픈 소스 커뮤니티에서 공유하는 수천 개의 컴포넌트로 프로젝트를 빠르게 시작할 수도 있습니다.



## 컴포넌트 정의하기

과거에는 웹 페이지를 만들 때 웹 개발자들은 콘텐츠를 마크업한 다음, 조금의 JavaScript를 덧붙여 상호작용을 추가했습니다. 이것은 상호작용이 웹에서 선택 사항이었을 때 잘 작동했습니다. 하지만 지금은 많은 사이트와 모든 앱에서 상호작용이 필수적으로 요구됩니다. React는 여전히 같은 기술을 사용하면서도 상호작용을 우선시합니다. React 컴포넌트는 마크업으로 살짝 덧붙인 JavaScript 함수입니다. 아래는 예시입니다 (아래 예시를 편집할 수 있습니다):


```js
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}
```

컴포넌트를 구축하는 방법은 다음과 같습니다:

### 1단계: 컴포넌트 내보내기
export default 접두사는 React에 특정한 것이 아닌 표준 JavaScript 구문입니다. 이를 사용하면 파일의 주요 함수를 표시하여 다른 파일에서 나중에 가져올 수 있습니다. (컴포넌트 가져오기 및 내보내기에서 자세히 다루겠습니다!)

### 2단계: 함수 정의하기
함수 이름이 Profile인 JavaScript 함수를 정의하려면 function Profile() {}를 사용합니다.

`주의사항
React 컴포넌트는 일반적인 JavaScript 함수이지만, 이름이 대문자로 시작해야만 작동합니다!`

### 3단계: 마크업 추가하기
컴포넌트는 src와 alt 속성이 있는 <img /> 태그를 반환합니다. <img />는 HTML과 같이 작성되지만 실제로는 내부적으로 JavaScript입니다! 이 구문은 JSX라고 하며, JavaScript 내에 마크업을 포함할 수 있도록 해줍니다.

`한 줄로 모든 반환문을 작성할 수도 있습니다.`


```js
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
```
하지만 반환문 다음에 마크업이 모두 적혀 있지 않으면, 괄호로 묶어주어야 합니다.

```js
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
```
`주의사항
괄호 없이는, 반환 키워드 이후에 있는 모든 코드는 무시됩니다!`

이제 Profile 컴포넌트를 정의했으므로, 다른 컴포넌트 내에 중첩해서 사용할 수 있습니다. 예를 들어, 여러 Profile 컴포넌트를 사용하는 Gallery 컴포넌트를 내보낼 수 있습니다.

## Using a component 


```js
export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
```




### DEEP DIVE

컴포넌트는 계속해서 사용됩니다.

React 애플리케이션은 "루트" 컴포넌트에서 시작합니다. 일반적으로 새 프로젝트를 시작할 때 자동으로 생성됩니다. 예를 들어, CodeSandbox나 Create React App을 사용하면 루트 컴포넌트는 src/App.js에 정의됩니다. Next.js 프레임워크를 사용하는 경우 루트 컴포넌트는 pages/index.js에 정의됩니다. 이러한 예에서 루트 컴포넌트를 내보내고 있습니다.

대부분의 React 앱은 모든 구성 요소를 사용합니다. 이는 재사용 가능한 요소인 버튼뿐만 아니라, 사이드바, 목록, 그리고 궁극적으로는 완전한 페이지에 대해서도 사용한다는 것을 의미합니다! 컴포넌트는 UI 코드와 마크업을 조직하는 편리한 방법입니다. 단지 한 번만 사용되는 컴포넌트가 있어도 그렇습니다.

Next.js와 같은 프레임워크는 이를 한 걸음 더 나아가게 만듭니다. React가 페이지를 자바스크립트로 관리하는 빈 HTML 파일을 사용하는 대신, 이러한 프레임워크에서는 React 컴포넌트에서 HTML도 자동으로 생성합니다. 이렇게 하면 앱이 자바스크립트 코드를 로드하기 전에 일부 콘텐츠를 표시할 수 있습니다.

그러나 많은 웹 사이트에서는 React를 "상호 작용의 뿌리"로만 사용합니다. 페이지 전체를 위한 하나의 루트 컴포넌트 대신에 많은 루트 컴포넌트를 가지고 있습니다. 필요한만큼 많이 또는 적게 React를 사용할 수 있습니다.

## What the browser sees

대소문자의 차이를 주목하세요:

<section>은 소문자이므로 React는 이것이 HTML 태그임을 압니다.
<Profile />는 대문자 P로 시작하므로 React는 우리가 Profile이라는 컴포넌트를 사용하고자 한다는 것을 압니다.

Profile은 더 많은 HTML(<img />)을 포함합니다. 마지막으로 브라우저는 다음과 같은 내용을 보게 됩니다:

```js
<section>
  <h1>Amazing scientists</h1>
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
</section>
```

컴포넌트 중첩 및 조직화
컴포넌트는 일반적인 JavaScript 함수이므로, 하나의 파일에 여러 컴포넌트를 유지할 수 있습니다. 이것은 컴포넌트가 상대적으로 작거나 서로 밀접하게 관련되어 있을 때 편리합니다. 이 파일이 혼잡해진다면, Profile을 별도의 파일로 이동할 수 있습니다. 이에 대해 자세히 배울 것입니다. 곧 Importing and Exporting Components 페이지에서 배울 것입니다.

Profile 컴포넌트가 Gallery 안에 렌더링되므로, Gallery는 각각의 Profile을 "자식"으로 렌더링하는 부모 컴포넌트라고 할 수 있습니다. 이것은 React의 매력 중 하나입니다. 컴포넌트를 한 번 정의하면 필요한 만큼 많은 곳에서 사용할 수 있습니다.

## Pitfall 

컴포넌트는 다른 컴포넌트를 렌더링할 수 있지만, 절대로 정의를 중첩해서는 안됩니다:

```js
export default function Gallery() {
  // 🔴 Never define a component inside another component!
  function Profile() {
    // ...
  }
  // ...
}
```

절대로 다른 컴포넌트 내부에서 컴포넌트를 정의하지 마세요!

```js
export default function Gallery() {
  // ...
}

// ✅ Declare components at the top level
function Profile() {
  // ...
}
```


위의 코드 조각은 매우 느리며 버그를 일으킵니다. 대신, 모든 컴포넌트를 최상위 수준에서 정의하세요:


## Recap

React를 사용하면 앱에서 재사용 가능한 UI 요소인 컴포넌트를 만들 수 있습니다.

React 앱에서 모든 UI 조각은 컴포넌트입니다.

React 컴포넌트는 JSX 마크업을 반환하는 일반 JavaScript 함수입니다. 그러나 이름이 항상 대문자로 시작된다는 점에서 다릅니다.

---

# 질문

질문 : what the broswer sees
Notice the difference in casing:
에서 dummy data나 상수를 저장해놓는
tsx이나 jsx 말고 ts나 js 파일은 소문자를 쓰는 이유를 아시는지?

