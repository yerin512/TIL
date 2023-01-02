```javascript
'use strict';

//1. String concatenation 스트링 연쇄?
console.log('my' + 'cat');
console.log('1'+2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log("ellie's \n\tbook");

//2. Numeric operators 숫자 연산자
console.log(1 + 1); //add
console.log(1 - 1); //substract 빼기
console.log(1 / 1); //divide 나누기
console.log(1 * 1); //multiply 곱하기
console.log (5 % 2); //remainder 소숫점
console.log(2 ** 3); //exponentiation 거듭제곱

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//counter = counter + 1;
//preIncrement = counter;
console.log(`preIncrenent: ${preIncrement}, counter: ${counter}`);
const postIncremente = counter++;
//postIncrement = counter;
//counter = counter + 1
console.log(`postIncrement: ${postIncremente}, counter: ${counter}`);


//4. Assignment operators 할당 연산자
let x = 3;
let y = 6;
x += y; // x = x + y; x = 9
x -= y; // x = x - y; x = 3
x *= y; // x = x  * y; x = 18
x /= y; // x = x / y; x = 3

console.log(x, y);

//5. Comparison operators 비교 연산자
console.log (10 < 6); //less than
console.log (10 <=6); //less than or equal
console.log (10 > 6); //greater than
console.log(10 >= 6); //greater than opr equal

//6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) 셋중에 하나라도 true면 true
//value1이 true로 판단나면 거기서 멈춘다? 왜냐면 or는 하나만
//true여도 true이게 되니까 뒤에껀 굳이 판별 안 하는거임
//고로 가장 심플하고 가벼운 애를 앞에, 무거운 함수는 뒤에
console.log(`or: ${value1 || value2 || check()}`);

//&& (and), finds the first falsy value
//and도 마찬가지로 하나라도 false면 쭉 false기 때문에
//맨 앞에껄 가벼운 걸로..
console.log( `and: ${value1 && value2 && check()}`);

//often used to compress long if-statement
//nullbleObject && nullableObject.something
// if (nullableObject != null){
//     nullableObject.something;
// }

function check(){
    for(let i = 0; i < 10; i ++){
        //wasting time
        console.log('갸악');
    }
    return true;
}

// ! (not)
console.log(!value1);

// 7. Equality
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion 
//타입 다르면 다른거임!
//웬만하면 이거 사용해서 검사하는 게 좋음
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

//object equality by reference
//오브젝트는 바로 값이 할당안되고 레프런스 통해야하는거 알즤?
const ellie1 = {name: 'ellie'};
const ellie2 = {name: 'ellie'};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);//각각다른 레퍼런스므로 f
console.log(ellie1 === ellie2);//레퍼런스 타입이 다르므로 f
console.log(ellie1 === ellie3);//1이가진 레퍼런스를 3에게 할당 t

//equaltiy - puzzler
console.log(0 == false); //t
console.log(0 === false); //f
console.log('' === false); // t
console.log('' === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

//8. Conditional operators: if
//if, else if, else
const name = 'df';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
} else if (name === 'coder'){
    console.log('You are amazing coder');
}else {
    console.log('unknown');
}

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'df' ? 'yes' : 'or');

//10. Switch statement
//use for multiple if checks
//use for enum-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch (browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Firefox': 
    case 'Chrome':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops 반복문
// while loop, while the condition is truthy,
// body code is excuted.
let i = 3;
while (i>0){
    console.log(`while:${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while (i > 0);
//do while은 한번 실행하보고 아니면 더 안 한다..

//for loop, for(befin; condtion; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i =3; i>0 ; i = i -2){
    //inline variable declartion
    console.log(`inline variable for: ${i}`);
}

//nested loops 중첩 반복문
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j ++){
        console.log(`i: ${i}, j:${j}`);
    }
}


//break 반복문을 완전히 끝냄, continue 지금것만 스킵하고 다음 스텝으로넘어감
// Q1. -0~10까지 짝수인 아이들만 프린트해라 
/*
for(let num = 0; num <= 10; num++){
    if (num % 2 == 0) {
        console.log(num);
    }else{
        continue;
    }
}
*/
for(let num = 0; num <= 10; num++){
    if (num % 2 !== 0) {
        continue;
    }else{
        console.log(num);
    }
}

// Q2. 0 ~10 까지 반복하되 숫자 8이되면 멈춰라

for (let num= 0; num <= 10; num ++){
    
    if(num > 8){
        break;
    }
    console.log(num);
}

```
