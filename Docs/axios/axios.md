## Axios란?

브라우저와 node.js에서 사용할 수 있는 Promise 기반 HTTP 클라이언트 라이브러리
서버 사이드에서는 네이티브 node.js의 http 모듈을 사용하고, 클라이언트(브라우저)에서는 XMLHttpRequests를 사용합니다.

(XMLHttpRequest (XHR) 객체는 서버와 상호작용할 때 사용합니다. XHR을 사용하면 페이지의 새로고침 없이도 URL에서 데이터를 가져올 수 있습니다. XMLHttpRequest는 AJAX 프로그래밍에 많이 사용됩니다.)


## 특징

- 브라우저를 위해 XMLHttpRequests 생성
- node.js 를 위해 http 요청 생성
- Promise API를 지원
- 요청 및 응답 인터셉트
- 요청 및 응답 데이터 변환
- 요청 취소
- JSON 데이터 자동 변환
- XSRF 를 막기위한 클라이언트 사이드 지원

(XSRF: 사이트 간 요청 위조. 사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제, 등록 등)를 특정 웹사이트에 요청하게 하는 공격)

## 설치


npm 사용하기:

$ npm install axios

bower 사용하기:

$ bower install axios

yarn 사용하기:

$ yarn add axios


## Axios를 사용하기 위한 기본 예제

### Get 요청

```
const axios = require('axios');

// 지정된 ID를 가진 유저에 대한 요청
axios.get('/user?ID=12345')
  .then(function (response) {
    // 성공 핸들링
    console.log(response);
  })
  .catch(function (error) {
    // 에러 핸들링
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });

// 선택적으로 위의 요청은 다음과 같이 수행될 수 있습니다.
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 항상 실행되는 영역
  });  

// async/await 사용을 원한다면, 함수 외부에 `async` 키워드를 추가하세요.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```


### Post 요청

```
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  // 여러 post 요청

  function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```

## Axios API 레퍼런스

axios(config). axios에 해당 config을 전송하면 요청이 가능합니다

```
// POST 요청 전송
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```


axios.request(config)
axios.get(url[, config])
axios.delete(url[, config])
axios.head(url[, config])
axios.options(url[, config])
axios.post(url[, data[, config]])
axios.put(url[, data[, config]])
axios.patch(url[, data[, config]])


명령어 메소드를 사용시 'url', 'method', 'data' 속성을 config에서 지정할 필요가 없습니다.

## Axios 인스턴스

사용자 지정 config로 새로운 Axios 인스턴스를 만들수 있습니다.

```
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
```

### 인스턴스 메소드

axios#request(config)
axios#get(url[, config])
axios#delete(url[, config])
axios#head(url[, config])
axios#options(url[, config])
axios#post(url[, data[, config]])
axios#put(url[, data[, config]])
axios#patch(url[, data[, config]])
axios#getUri([config])

## 요청 Config

다음은 요청을 만드는 데 사용할 수 있는 config 옵션들 입니다. 오직 url만 필수입니다. method를 지정하지 않으면 GET방식이 기본값 입니다.

```
{
  // `url`은 요청에 사용될 서버 URL입니다.
  url: '/user',

  // `method`는 요청을 생성할때 사용되는 메소드입니다.
  method: 'get', // 기본값

  // `url`이 절대값이 아닌 경우 `baseURL`은 URL 앞에 붙습니다.
  // 상대적인 URL을 인스턴스 메서드에 전달하려면 `baseURL`을 설정하는 것은 편리합니다.
  baseURL: 'https://some-domain.com/api',


  // `transformRequest`는 요청 데이터를 서버로 전송하기 전에 변경할 수 있게 해줍니다.
  // 이것은 'PUT', 'POST', 'PATCH', 'DELETE' 메소드에서만 적용됩니다.
  // 마지막 함수는 Buffer, ArrayBuffer, FormData 또는 Stream의 인스턴스 또는 문자열을 반환해야 합니다.
  // 헤더 객체를 수정할 수 있습니다.
  transformRequest: [function (data, headers) {
    // 데이터를 변환하려는 작업 수행

    return data;
  }],

  // `transformResponse`는 응답 데이터가 then/catch로 전달되기 전에 변경할 수 있게 해줍니다.
  transformResponse: [function (data) {
    // 데이터를 변환하려는 작업 수행

    return data;
  }],

  // `headers`는 사용자 지정 헤더입니다.
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // `params`은 요청과 함께 전송되는 URL 파라미터입니다.
  // 반드시 일반 객체나 URLSearchParams 객체여야 합니다.
  // 참고: null이나 undefined는 URL에 렌더링되지 않습니다.
  params: {
    ID: 12345
  },

  // `paramsSerializer`는 `params`의 시리얼라이즈를 담당하는 옵션 함수입니다.
  // (예: https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  paramsSerializer: function (params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  },

  // `data`는 요청 바디로 전송될 데이터입니다.  
  // 'PUT', 'POST', 'PATCH', 'DELETE' 메소드에서만 적용 가능합니다.
  // `transformRequest`가 설정되지 않은 경우 다음 타입 중 하나여야 합니다.
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 브라우저 전용: FormData, File, Blob
  // - Node 전용: Stream, Buffer
  data: {
    firstName: 'Fred'
  },

  // 바디로 전송하는 데이터의 대안 문법
  // POST 메소드
  // 키가 아닌 값만 전송됩니다.
  data: 'Country=Brasil&City=Belo Horizonte',

  // `timeout`은 요청이 시간 초과되기 전의 시간(밀리초)을 지정합니다.
  // 요청이 `timeout`보다 오래 걸리면 요청이 중단됩니다.
  timeout: 1000, // 기본값은 `0` (타임아웃 없음)

  // `withCredentials`은 자격 증명을 사용하여 사이트 간 액세스 제어 요청을 해야 하는지 여부를 나타냅니다.
  withCredentials: false, // 기본값

  // `adapter`'은 커스텀 핸들링 요청을 처리할 수 있어 테스트가 쉬워집니다.
  // 유효한 Promise 응답을 반환해야 합니다. (lib/adapters/README.md 참고)
  adapter: function (config) {
    /* ... */
  },

  // `auth`는 HTTP Basic 인증이 사용되며, 자격 증명을 제공합니다.
  // `auth`를 사용하면, `Authorization` 헤더가 설정되어 `headers`를 사용하여 설정한 기존의 `Authorization` 사용자 지정 헤더를 덮어씁니다.
  // 이 파라미터를 통해 HTTP Basic 인증만 구성할 수 있음을 참고하세요.
  // Bearer 토큰 등의 경우 `Authorization` 사용자 지정 헤더를 대신 사용합니다.
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // `responseType`은 서버에서 받는 데이터의 타입입니다.
  // 옵션: 'arraybuffer', 'document', 'json', 'text', 'stream'
  // 브라우저 전용: 'blob'
  responseType: 'json', // 기본값

  // `responseEncoding`은 응답 디코딩에 사용할 인코딩입니다.
  // Node.js 전용
  // 참고: 클라이언트 사이드 요청 또는 `responseType`이 'stream'이면 무시합니다.
  responseEncoding: 'utf8', // 기본값

  // `xsrfCookieName`은 xsrf 토큰 값으로 사용할 쿠키의 이름입니다.
  xsrfCookieName: 'XSRF-TOKEN', // 기본값

  // `xsrfHeaderName`은 xsrf 토큰 값을 운반하는 HTTP 헤더의 이름입니다.
  xsrfHeaderName: 'X-XSRF-TOKEN', // 기본값

  // `onUploadProgress`는 업로드 진행 이벤트를 처리합니다.
  // 브라우저 전용
  onUploadProgress: function (progressEvent) {
    // 업로드 진행 이벤트 작업 수행
  },

  // `onDownloadProgress`는 다운로드로드 진행 이벤트를 처리합니다.
  // 브라우저 전용
  onDownloadProgress: function (progressEvent) {
    // 다운로드 진행 이벤트 작업 수행
  },

  // `maxContentLength`는 node.js에서 허용되는 http 응답 콘텐츠의 최대 크기를 바이트 단위로 정의합니다.
  maxContentLength: 2000,

  // `maxBodyLength`는 허용되는 http 요청 콘텐츠의 최대 크기를 바이트 단위로 정의합니다.
  // Node.js 전용
  maxBodyLength: 2000,

  // `validateStatus`는 지정된 HTTP 응답 상태 코드에 대한 Promise를 이행할지 또는 거부할지 여부를 정의합니다. 
  // 만약 `validateStatus`가 true를 반환하면(또는 'null' 또는 'undefined'으로 설정) Promise는 이행됩니다.
  // 그렇지 않으면, 그 Promise는 거부될 것이다.
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 기본값
  },

  // `maxRedirects`는 node.js에서 리디렉션 최대값을 정의합니다.
  // 0으로 설정하면 리디렉션되지 않습니다.
  maxRedirects: 5, // 기본값

  // `socketPath`는 node.js에서 사용될 UNIX 소켓을 정의합니다.
  // 예: '/var/run/docker.sock' 도커 데몬에 요청을 보냅니다.
  // 오직 `socketPath` 또는 `proxy`만 지정할 수 있습니다.
  // 둘 다 지정되면 `socketPath`가 사용됩니다.
  socketPath: null, // 기본값

  // `httpAgent`와 `httpsAgent`는 각각 node.js에서 http 및 https 요청을 수행할 때 사용할 사용자 지정 에이전트를 정의합니다.
  // 이렇게 하면 기본적으로 활성화되지 않은 `keepAlive`와 같은 옵션을 추가할 수 있습니다.
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // `proxy`는 프록시 서버의 호스트이름, 포트, 프로토콜을 정의합니다.
  // 기존의 `http_proxy`와 `https_proxy` 환경 변수를 사용하여
  // 프록시를 정의할 수도 있습니다.
  // 프록시 구성에 환경 변수를 사용하는 경우, 'no_proxy' 환경 변수를 
  // 쉼표로 구분된 프록시가 되지 않는 도메인 목록으로 정의할 수도 있습니다.
  // `false`를 사용하면 프록시를 사용하지 않고, 환경 변수를 무시합니다.
  // `auth`는 프록시에 연결하는데 HTTP Basic auth를 사용해야 함을 나타내며, 
  // 자격 증명을 제공합니다. 그러면 `Proxy-Authorization` 헤더가 설정되고,
  // `headers`를 사용하여 기존의 `Proxy-Authorization` 사용자 지정 해더를 덮어씁니다.
  // 만약 프록시 서버가 HTTPS를 사용한다면, 프로토콜을 반드시 `https`로 설정해야 합니다.
  proxy: {
    protocol: 'https',
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // `cancelToken`은 요청을 취소하는 데 사용할 수 있는 취소 토큰을 지정합니다.
  // (자세한 내용은 요청 취소 섹션 참조)
  cancelToken: new CancelToken(function (cancel) {
  }),

  // `decompress`는 응답 바디의 자동 압축 해제 여부를 나타냅니다.
  //  `true`로 설정하면, 압축 해제된 모든 응답에서 'content-encoding' 헤더도 제거됩니다.
  // Node.js 전용 (XHR은 압축 해제할 수 없습니다)
  decompress: true // 기본값

}
```

## 응답 스키마

요청에 대한 응답은 아래의 정보를 가지고 있습니다.

```
{
  // `data`는 서버가 제공하는 응답입니다.
  data: {},

  // `status`는 HTTP 상태 코드입니다.
  status: 200,

  // `statusText`는 HTTP 상태 메시지입니다.
  statusText: 'OK',

  // `headers`는 HTTP 헤더입니다.
  // 모든 헤더 이름은 소문자이며, 괄호 표기법을 사용하여 접근할 수 있습니다.
  // 예시: `response.headers['content-type']`
  headers: {},

  // `config`는 요청을 위해 `Axios`가 제공하는 구성입니다.
  config: {},

  // `request`는 이번 응답으로 생성된 요청입니다.
  // 이것은 node.js에서 마지막 ClientRequest 인스턴스 입니다.
  // 브라우저에서는 XMLHttpRequest입니다.
  request: {}
}

```

then을 사용하면, 아래와 같은 응답을 받습니다:

```

axios.get('/user/12345')
  .then(function (response) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

  ```

  catch를 사용하거나, 거부 콜백 함수를 then의 두번째 인자로 넘길 시, 에러 핸들링에서 설명된 error 객체를 사용할 수 있습니다.

  ## Config 기본값

모든 요청에 적용될 config 기본값을 지정할 수 있습니다

### 전역 Axios 기본값

```
axios.defaults.baseURL = 'https://api.example.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```

### 커스텀 인스턴스 기본값


```
// 인스턴스를 생성할때 config 기본값 설정하기
const instance = axios.create({
  baseURL: 'https://api.example.com'
});

// 인스턴스를 만든 후 기본값 변경하기
instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;

```

### Config 우선 순위

Config는 우선 순위에 따라 병합됩니다. lib/defaults.js 라이브러리에서의 기본값, 인스턴스의 defaults 속성, 요청의 config 인자를 순서대로 찾습니다. 후자가 전자보다 우선순위가 높습니다. 다음은 예제입니다.


```
// 라이브러리에서 제공하는 config 기본값을 사용하여 인스턴스 만들기
// 이 때 timeout 값은 라이브러리의 기본값인 '0'입니다.
const instance = axios.create();

// 라이브러리에 대한 timeout 값 재정의
// 이제 모든 요청은 시간 초과 전 2.5초 대기하는 인스턴스를 사용합니다.
instance.defaults.timeout = 2500;

// 시간이 오래 걸리는 요청에 대한 timeout 값 재정의
instance.get('/longRequest', {
  timeout: 5000
});
```

## 인터셉터

then 또는 catch로 처리되기 전에 요청과 응답을 가로챌수 있습니다.

```
// 요청 인터셉터 추가하기
axios.interceptors.request.use(function (config) {
    // 요청이 전달되기 전에 작업 수행
    return config;
  }, function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  });

// 응답 인터셉터 추가하기
axios.interceptors.response.use(function (response) {
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 데이터가 있는 작업 수행
    return response;
  }, function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  });
  ```

  나중에 필요할때 인터셉터를 제거할 수 있습니다.

```
const myInterceptor = axios.interceptors.request.use(function () {/*...*/});
axios.interceptors.request.eject(myInterceptor);
```

커스텀 인스턴스에서도 인터셉터를 추가할 수 있습니다.

```
const instance = axios.create();
instance.interceptors.request.use(function () {/*...*/});
```

## 에러 핸들링

```
axios.get('/user/12345')
  .catch(function (error) {
    if (error.response) {
      // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // 요청이 전송되었지만, 응답이 수신되지 않았습니다. 
      // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
      // node.js에서는 http.ClientRequest 인스턴스입니다.
      console.log(error.request);
    } else {
      // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
      console.log('Error', error.message);
    }
    console.log(error.config);
  });


```

validateStatus config 옵션을 사용하면, 오류를 발생시키는 HTTP 코드를 정의할 수 있습니다.

```
axios.get('/user/12345', {
  validateStatus: function (status) {
    return status < 500; // 상태 코드가 500 미만인 경우에만 해결
  }
})
```

toJSON을 사용하면, HTTP 에러에 대한 더 많은 정보를 객체 형식으로 가저옵니다.


```
axios.get('/user/12345')
  .catch(function (error) {
    console.log(error.toJSON());
  });
  ```



  ## 요청 취소


취소 토큰을 이용해 요청을 취소할 수 있습니다.

Axios의 취소 토큰 API는 중단된 proposal-cancelable-promises을 기반으로 하고 있습니다.

아래와 같이 CancelToken.source 팩토리를 사용하여 취소 토큰을 만들수 있습니다:

```
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(function (thrown) {
  if (axios.isCancel(thrown)) {
    console.log('Request canceled', thrown.message);
  } else {
    // 에러 핸들링
  }
});

axios.post('/user/12345', {
  name: 'new name'
}, {
  cancelToken: source.token
})

// 요청 취소하기 (메시지 파라미터는 옵션입니다)
source.cancel('Operation canceled by the user.');
```

실행자 함수를 CancelToken 생성자에 전달하여, 취소 토큰을 만들수도 있습니다:

```
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/user/12345', {
  cancelToken: new CancelToken(function executor(c) {
    // 실행자 함수는 취소 함수를 파라미터로 받습니다.
    cancel = c;
  })
});

// 요청 취소하기
cancel();

```
참고: 같은 취소 토큰으로 여러 요청을 취소할 수 있습니다.

## URL-인코딩 바디


보통 Axios는 JSON을 사용합니다. application/x-www-form-urlencoded 포맷으로 데이터를 전송하려면, 다음 옵션 중 하나를 사용할 수 있습니다.

### 브라우저

브라우저에서는 URLSearchParams API를 사용할 수 있습니다:

```
const params = new URLSearchParams();
params.append('param1', 'value1');
params.append('param2', 'value2');
axios.post('/foo', params);
```

모든 브라우저가 URLSearchParams을 지원하지 않지만(caniuse.com을 확인하세요), polyfill을 사용할 수 있습니다(polyfill이 전역 환경에 있는지 확인하세요).
대안으로, qs 라이브러리를 사용하여 데이터를 인코딩 할 수 있습니다:

```
const qs = require('qs');
axios.post('/foo', qs.stringify({ 'bar': 123 }));
```


또는 ES6도 있습니다.

```
import qs from 'qs';
const data = { 'bar': 123 };
const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: qs.stringify(data),
  url,
};
axios(options);
```

