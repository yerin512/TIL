# Next.js 13

출처 : [Next.js-13](https://nextjs.org/blog/next-13)

Update today by running:
```js
npm i next@latest react@latest react-dom@latest eslint-config-next@latest
```

## app/ Directory (beta)

Next.js에서 가장 사랑받는 기능 중 하나는 파일 시스템 라우터입니다. 폴더 안에 파일을 드롭하면 애플리케이션에서 즉시 경로를 생성할 수 있습니다. 구성이 필요하지 않습니다
app/ 디렉토리(베타)를 도입하여 Next.js의 라우팅 및 레이아웃 경험을 개선하고 있습니다.
이것은 커뮤니티 피드백을 위해 이전에 게시된 Layouts RFC의 결과입니다. 새 라우터는 다음을 지원합니다.

- Layouts : 상태를 유지하고 비용이 많이 드는 재렌더링을 피하면서 경로 간에 UI를 쉽게 공유할 수 있습니다.
- Server Components: 가장 동적인 애플리케이션의 경우 서버 우선을 기본값으로 설정합니다.
- Streaming: 렌더링 되는 즉시 로딩 상태와 스트림을 UI 단위로 표시합니다.
- Support for Data Fetching: 비동기 서버 구성 요소 및 확장 가져오기 API를 사용하면 구성 요소 수준 가져오기가 가능합니다.


Next.js 13으로 업그레이드할 때 app/ 디렉토리를 사용할 필요는 없지만, 점진적 채택을 위해 app/ 디렉토리가 기존 페이지 디렉토리와 공존할 수 있습니다.

![image](https://user-images.githubusercontent.com/73337811/199227882-2bd0f783-5e87-44ce-8fbb-9211f46bf756.png)


### Layouts

디렉토리를 사용하면 탐색 전반에 걸쳐 상태를 유지하고 비용이 많이 드는 재랜더링을 방지하며 고급 라우팅 패턴을 활성화하는 app/복잡한 인터페이스를 쉽게 배치할 수 있습니다.
또한 레이아웃을 중첩하고 구성요소, 테스트 및 스타일과 같은 경로와 함께 애플리케이션 코드를 함께 배치할 수 있습니다.

![image](https://user-images.githubusercontent.com/73337811/199228413-2702e275-0033-4ccd-852e-9e7840b99f01.png)

'app/' 내부에 경로를 생성하려면 'page.js'라는 단일 파일이 필요합니다.


 ```js
 // app/page.js
// This file maps to the index route (/)
export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

그런 다음 파일 시스템을 통해 레이아웃을 정의할 수 있습니다. 레이아웃은 여러 ㅍ페이지 간에 UI를 공유합니다. 탐색 시 레이아웃은 상태를 유지하고 대화형으로 유지되며 다시 렌더링하지 않습니다.

```js
// app/blog/layout.js
export default function BlogLayout({ children }) {
  return <section>{children}</section>;
}
```

### Server Components

디렉토리 는 app/React의 새로운 Server Components 아키텍처에 대한 지원을 소개합니다. 서버 및 클라이언트 구성 요소는 서버와 
클라이언트를 각각 가장 잘하는 용도로 사용하므로 뛰어난 개발자 경험을 제공하는 단일 프로그래밍 모델로 빠르고 고도로 상호 작용하는 앱을 빌드할 수 있습니다.

서버 구성 요소를 사용 하여 클라이언트에 전송되는 JavaScript의 양을 줄이면서 더 빠른 초기 페이지 로드를 가능하게 하는 동시에 복잡한 인터페이스를 구축할 수 있는 기반을 마련하고 있습니다.

경로가 로드되면 Next.js 및 React 런타임이 로드되며, 이는 캐시 가능 하고 크기 를 예측할 수 있습니다. 
이 런타임은 애플리케이션이 성장해도 크기가 증가 하지 않습니다 . 또한 런타임이 비동기식으로 로드되므로 서버의 HTML이 클라이언트에서 점진적으로 향상될 수 있습니다.

### Streaming



