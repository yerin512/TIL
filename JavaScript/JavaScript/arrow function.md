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

```javascript

let sayHello = function(num1, num2){
    return num1 + num2
}

```

```javascript

let sayHello = (num1, num2) => {
    return num1 + num2;
}


//코드가 한줄이고 리턴문이 있기 때문에 변경가능
//리턴문의 경우 {}를 ()로 바꿀 수 있다.
```

```javascript

let sayHello = (num1, num2) => (
    num1 + num2
);

//리턴문이 한줄인 경우 괄호도 생략 가능하다

let sayHello = (num1, num2) => num1 + num2;

//인수가 하나면 괄호 생략이 가능하다.

let sayHello = num1 => console.log(`Hello ${num1}`);

//인수가 없는 경우는 괄호 생략이 불가하다

let sayHello = () => console.log('Hello!');


//리턴문이 있다해도 한줄이 아니면 일반괄호 ()를 사용할 수 없다.


let add = (num1) => {
    const result = num1 * 2;
    console.log(result);
}

```
