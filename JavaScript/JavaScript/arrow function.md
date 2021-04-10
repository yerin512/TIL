# 함수 표현식, 화살표 함수

```javascript

function sayHello(){
    console.log("Hello")
    }

sayHello();

```

#### 위 방식은 함수 선언문이라고 한다.

```javascript

let sayHello = function(){
    console.log('Hello');
}

sayHello();

```

#### 변수를 선언해주고 이름없는 함수를 할당해줬다. 
#### 함수 표현식이라고 한다.

```javascript

sayHello();

```

호출방식은 동일하다. 둘의 차이점은 호출할 수 있는 타이밍임.
#### 함수 선언문 : 어디서든 호출 가능
### 함수 표현식 : 코드에 도달해야 가능

```javascript

sayHello();

function sayHello(){
    console.log("Hello")
    }


```

이런식으로 함수 선언문은 sayHello(); 가 위로가도 상관 없는거다.


## 자! arrow 함수를 알아보자!

s

