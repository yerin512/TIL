# Importing and Exporting Components

컴포넌트의 마법은 재사용성에 있습니다. 다른 컴포넌트로 구성된 컴포넌트를 만들 수 있습니다. 그러나 컴포넌트를 중첩할수록 파일을 여러 개로 분리하는 것이 합리적일 때가 많습니다. 이렇게 하면 파일을 쉽게 스캔할 수 있으며 컴포넌트를 더 많은 곳에서 재사용할 수 있습니다.


## The root component file 


Create React App에서는 앱이 src/App.js에 위치합니다. 그러나 설정에 따라 루트 컴포넌트가 다른 파일에 있을 수도 있습니다. Next.js와 같이 파일 기반 라우팅을 사용하는 프레임워크를 사용하는 경우, 루트 컴포넌트는 각 페이지마다 다르게 됩니다.

## Exporting and importing a component 

앞으로 랜딩 화면을 변경하여 과학 서적 목록을 표시하거나 모든 프로필을 다른 위치에 놓고 싶다면 어떻게 해야 할까요? 이 경우 갤러리와 프로필 컴포넌트를 루트 컴포넌트 파일에서 분리하는 것이 합리적입니다. 이렇게 하면 컴포넌트를 다른 파일에서 더 모듈화하고 재사용할 수 있습니다. 컴포넌트를 이동하는 방법은 다음과 같습니다.

1. 새로운 JS 파일을 만들어 컴포넌트를 넣습니다.
2. 컴포넌트를 해당 파일에서 내보냅니다(default나 named exports를 사용하여).
3. 컴포넌트를 사용할 파일에서 가져옵니다(importing할 때 default나 named export에 맞게 가져오기).

### 참고

파일 확장자 .js를 생략한 파일을 만날 수도 있는데, 다음과 같이 작성됩니다.
import Gallery from './Gallery';

React에서는 './Gallery.js'나 './Gallery' 중 어느 것을 사용해도 괜찮지만, 전자가 네이티브 ES 모듈 동작 방식과 더 가깝습니다.

### DEEP DIVE : Default vs named exports 

기본 내보내기(Default exports)와 명명된 내보내기(named exports)는 JavaScript에서 값(export)을 내보내는 두 가지 주요 방법입니다. 지금까지의 예제에서는 기본 내보내기만 사용했습니다. 하지만 동일한 파일에서 둘 다 사용할 수 있습니다. 파일당 기본 내보내기는 하나만 가질 수 있지만, 명명된 내보내기는 원하는 만큼 가질 수 있습니다.

파일이 하나의 컴포넌트만 내보낼 때 기본 내보내기를 사용하고, 여러 컴포넌트와 값을 내보낼 때는 명명된 내보내기를 사용하는 경우가 많습니다. 원하는 코딩 스타일에 관계없이, 항상 컴포넌트 함수와 해당 파일의 이름에 의미 있는 이름을 지정하는 것이 좋습니다. 컴포넌트 함수와 파일 이름이 없는 컴포넌트는 디버깅을 어렵게 만드므로 사용을 지양해야합니다. 예를 들어, export default () => {}와 같이 이름이 없는 컴포넌트는 권장되지 않습니다.


## Exporting and importing multiple components from the same file 

. 예를 들어, Gallery.js 파일에서 Profile 컴포넌트를 보여주고 싶다면, Profile 컴포넌트도 export할 수 있습니다. 그러나 Gallery.js 파일에서 이미 default export가 존재하기 때문에(default export는 파일 당 하나만 존재할 수 있습니다) default export로는 export할 수 없습니다. Profile을 export하려면 named export를 사용해야 합니다. 파일에는 하나의 default export만 있을 수 있지만(named export는 여러 개 존재 가능), default와 named exports를 혼합해서 사용하는 것은 잠재적인 혼란을 줄 수 있습니다.

default와 named exports 간의 혼란을 최소화하기 위해, 일부 팀은 한 가지 스타일(default 또는 named)만 사용하거나 하나의 파일에서 혼합하지 않는 것을 선호합니다. 이것은 개인의 취향에 따라 다릅니다. 자신에게 가장 적합한 방식을 선택하십시오!

먼저 Gallery.js에서 Profile을 default 키워드 없이 named export를 사용하여 export합니다:

```js
export function Profile() {
  // ...
}
```
다음으로, 중괄호(curly braces)를 사용한 named import를 사용하여 Gallery.js에서 Profile을 App.js로 가져옵니다

```js
import { Profile } from './Gallery.js';
```

마지막으로, App 컴포넌트에서 <Profile />을 렌더링합니다:


```js
export default function App() {
  return <Profile />;
}
```

이제, default export와 named export를 혼용하여 사용하고 있습니다:

Gallery.js:

Profile 컴포넌트를 Profile이란 이름의 named export로 내보냅니다.
Gallery 컴포넌트를 default export로 내보냅니다.
App.js:

Gallery 컴포넌트를 Gallery.js 파일에서 default import로 가져옵니다.
Profile 컴포넌트를 Gallery.js 파일에서 named import로 가져옵니다.
root 컴포넌트인 App 컴포넌트를 default export로 내보냅니다.



## 질문

Default export와 named exports를 사용할 때는 언제인가요?

파일이 하나의 컴포넌트만 내보낼 때 기본 내보내기를 사용하고, 여러 컴포넌트와 값을 내보낼 때는 명명된 내보내기를 사용하는 경우가 많습니다

default와 named exports를 혼합해서 사용하는 것은 잠재적인 혼란을 줄 수 있습니다. 보통 어떤 식이신가요?


