
# 1강 - Node.js와 

## Node.js란 무엇인가?

크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경
2008년 구글이 V8 엔진을 사용한 Chorme 브라우저를 출시해 실행 속도 이슈를 해결하고
2009년, Node.js가 공개된 후 JavaScript는 브라우저 밖의 환경에서도 활발히 쓰이는 언어로 재탄생 함.

V8은 C++로 작성된 Google의 오픈 소스 고성능 JavaScript 및 WebAssembly 엔진입니다.
런타임 : 컴퓨터 과학에서 컴퓨터 프로그래밍이 실행되고 있는 동안의 동작.

프론트엔드 개발에 Node.js가 필요한 이유

1. 최신 스펙으로 개발할 수 있다.
브라우저 지원속도는 항상 뒤쳐진다. 바벨 같은 도구의 도움이 있어야한다.
웹팩, NPM 같은 노드 기술로 만들어진 환경에서 사용해야 자동화된 프론트엔드 개발환경을 갖출 수 있다.

TS, SASS 같은 프로그래밍 고수준 언어를 사용하려면 전용 트랜스파일러가 필요한데, 이것 역시 Node.js 환경이 뒷받침 되어야 한다.

2. 빌드 자동화
Node.js는 일련의 빌드 과정을 이해하는데 많은 역할을 한다. 라이브러리 의존성을 해결하고, 각종 테스트를 자동화하는데도 사용된다.

3. 개발 환경 커스터마이징

커스터마이징 하려면 Node.js 지식이 필요하다. React.js의 CRA(create-react-app)같은 자동화된 도구를 사용할 수 없다면 말이다.

## NPM 이란?

Node.js를 설치하면 NPM도 자동으로 설치된다.
Node Package Manager은 Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 매치키 설치 및 관리를 위한 CLI를 제공함.

```
npm init
npm init -y  # 개별 설정 없이 package.json 생성
```

npm 프로젝트를 생성해 package.json이 만들어진다. Node.js는 package.json 파일에 프로젝트의 모든 정보를 기록한다. 

- name: 프로젝트 이름
- version: 프로젝트 버전 정보
- description: 프로젝트 설명
- main: 노드 어플리케이션일 경우 진입점 경로. 프론트엔드 프로젝트일 경우 사용하지 않는다.
- scripts: 프로젝트 명령어를 등록할 수 있다.초기화시 test 명령어가 샘플로 등록되어 있다
- author: 프로그램 작성자
- license: 라이센스

package.json에 등록한 스크립트(scripts)를 이용해 실행할 수 있다. 어플리케이션 빌드, 테스트, 배포, 실행 등의 명령을 등록할 수 있다.

```
Usage: npm <command>

where <command> is one of:
    access, adduser, audit, bin, bugs, c, cache, ci, cit,
    clean-install, clean-install-test, completion, config,
    create, ddp, dedupe, deprecate, dist-tag, docs, doctor,
    edit, explore, get, help, help-search, hook, i, init,
    install, install-ci-test, install-test, it, link, list, ln,
    login, logout, ls, org, outdated, owner, pack, ping, prefix,
    profile, prune, publish, rb, rebuild, repo, restart, root,
    run, run-script, s, se, search, set, shrinkwrap, star,
    stars, start, stop, t, team, test, token, tst, un,
    uninstall, unpublish, unstar, up, update, v, version, view,
    whoami
```

사용할 수 있는 명령어가 이렇게 많다.


```
npm install <name>
# 또는
npm i <name>
```

devDependencies에는 개발 시에만 사용하는 개발용 의존 패키지를 기록한다.  예를 들어, ESLint는 개발 단계에서만 필요하고 실제 사용자가 쓰는 제품에서는 필요 없으므로 devDependencies에만 포함시킨다. npm install 명령어에 --save-dev(축약형 -D) 옵션을 사용하면 패키지 설치와 함께 package.json의 devDependencies에 설치된 패키지와 버전이 기록된다.

```
npm i --save-dev
# 또는
npm i -D
```


## Webpack이란 무엇인가

[웹팩 핸드북](https://joshua1988.github.io/webpack-guide/guide.html)

웹팩이란 최신 프런트엔드 프레임워크에서 가장 많이 사용되는 모듈 번들러(Module Bundler). 모듈 번들러란 웹 애플리케이션을 구성하는 자원(HTML, CSS, Javscript, Images 등)을 모두 각각의 모듈로 보고 이를 조합해서 병합된 하나의 결과물을 만드는 도구.

웹팩에서 지칭하는 모듈이라는 개념은 위와 같이 자바스크립트 모듈에만 국한되지 않고 웹 애플리케이션을 구성하는 모든 자원을 의미

웹 애플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합 및 압축 해주는 동작을 모듈 번들링이라고 한다. 빌드, 번들링, 변환 이 세 단어 모두 같은 의미

### 왜 웹팩을 쓰는가?

1. 파일 단위의 자바스크립트 모듈 관리의 필요성
파일 단위로 변수를 관리하고 싶은 욕구, 자바스크립트 모듈화에 대한 욕구

2. 웹 개발 작업 자동화 도구 (Web Task Manager)
HTML, CSS, JS 압축
이미지 압축
CSS 전처리기 변환
이 일들을 자동화 해주는 도구가 필요했다.

3. 웹 애플리케이션의 빠른 로딩 속도와 높은 성능
웹팩은 기본적으로 필요한 자원은 미리 로딩하는게 아니라 그 때 그 때 요청하자

## 웹팩으로 해결하려는 문제?

1. 자바스크립트 변수 유효 범위
웹팩은 변수 유효 범위의 문제점을 ES6의 Modules 문법과 웹팩의 모듈 번들링으로 해결합니다.

2. 브라우저별 HTTP 요청 숫자의 제약
웹팩을 이용해 여러 개의 파일을 하나로 합치면 위와 같은 브라우저별 HTTP 요청 숫자 제약을 피할 수 있다.

3. 사용하지 않는 코드의 관리

4. Dynamic Loading & Lazy Loading 미지원
웹팩의 Code Splitting 기능을 이용하여 원하는 모듈을 원하는 타이밍에 로딩가능.

