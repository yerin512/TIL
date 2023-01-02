
### 📖 너의 첫번째 함수! (Your first JS Function)

``` javascript
function sayHello(name, age){
    console.log('Hello!', name, "you have", age, " years of age.");
}

sayHello("Yerin",15);
console.log("Hi!");
```

### 📖 More Function Fun

``` javascript
function sayHello(name, age){
    console.log('Hello!'+ name + "you are " + age + " years of age.");
}

sayHello("Yerin",15);
console.log("Hi!");
```

``` javascript
function sayHello(name, age){
    return `Hello ${name} you are ${age} years old`;
    

}

const greetYerin = sayHello("Yerin", 26);

console.log(greetYerin)
```

##### 더하기 계산기

``` javascript



const calculator = {
    plus: function(a,b){
        return a+b;
    }
}


const plus = calculator.plus(5,5)
console.log(plus)


```

##### 곱하기 계산기

``` javascript

const claculator = {
    multiple: function(a,b){
        return a * b
    }
}

const multiple = claculator.multiple(5,5);
console.log(multiple)


```

##### 빼기 계산기

``` javascript

const calculator = {
    minus: function(a,b){
        return a - b
    }
}

const minus = calculator.minus(3,1)
console.log(minus)

```

### 참조 노마드 코더 Nomad Coders
