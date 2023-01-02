  

## 📖 Your first JS Variable(변수!)


Javascript에서는 3가지 변수 지정방법이 있다.
```javascript
var a = 1; // window.a === 1
const b = 2; // window.b === 2
let c = 3; // window.c === 3
d = 4; // window.d === 4
``` 
``` 
var 와 let, const 의 차이는 var 는 function scoped 에 포함되고, let, const 는 block scoped에 포함된다는 차이가 있다.<br>
var 는 같은이름의 변수를 재 선언할 수 있지만, let 과 const 로 선언한 변수는 같은 block scoped 내에서는 재선언 할 수 없다.<br>
let 과 const 의 차이는 const 는 선언한 이후 값을 변경할 수 없지만, let은 값을 변경할 수 있다.<br>
위와 같이 a = 1 을 지정하면 메모리의 공간에 원시값을 설장하고 메모리의 위치 값을 전달한다.
```

``` 
변수 선언에는 기본적으로 const를 사용하고, 재할당이 필요한 경우에 한정해 let 을 사용하는 것이 좋다.
그리고 객체를 재할당하는 경우는 생각보다 흔하지 않다. const 를 사용하면 의도치 않은 재할당을 방지해 주기 때문에 보다 안전하다.
재할당이 필요한 경우에 한정해 let 을 사용한다. 이때, 변수의 스코프는 최대한 좁게 만든다.
재할당이 필요 없는 상수와 객체에는 const 를 사용한다.
```  

##### [참조-Javascript와 변수 (박성룡님)](https://pks2974.medium.com/javascript%EC%99%80-%EB%B3%80%EC%88%98-f619ab9079b9)
