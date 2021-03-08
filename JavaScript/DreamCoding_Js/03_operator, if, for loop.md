```javascript
//1. String concatenation
console.log('my'+' cat');
console.log('1'+ 2);
console.log(`string literals: 1 + 2 = ${1+2}`);

//2. Numeric operators
console.log(1+1);//add
console.log(1-1);//substract
console.log(1/1);//divide
console.log(1 * 1);//multiply
console.log(5 % 2);//remainder
console.log(2 ** 3);//exponentiation

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
//couner = couner + 1;
//preIncrement = counter;
console.log(`postIncrement: ${preIncrement}, counter: ${counter}`);
const postIncrement = counter++;
//postIncrement = counter;
//counter = counter + 1;

//4. Assignment operators
let x = 3;
let y = 6;
x += y; x = x+y;
x -= y;
x *= y;
x /= y;

//5. Comparison operators
console.log(10 < 6); //less than
console.log(10 <= 6);//less than pr equal
console.log(10 > 6);//greater than
console.log(10 >= 6);//greater than or equal

//6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4<2;

// || (or), finds the thist turth value
//하나라도 true가있으면 거기서 끝!
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the thist flase value
//하나라도 거짓이 있으면 거기서 flase!
console.log(`and: ${value1 && value2 && check()}`);
//null값 확인해볼때도 쓴다네요

//! (not)
console.log(!value1);

//7. Equality
const stringFive = '5';
const nuberFive = 5;

// == loose equality, whth type conversion
console.log(stringFive == nuberFive);
console.log(stringFive != nuberFive);

// === strict equality, no type conversion 
//타입을 신경쓴다(이거쓰는게 더좋아)
console.log(stringFive === nuberFive);
console.log(stringFive !== nuberFive);

// object equality by reference
const yerin1 = {name: 'yerin'};
const yerin2 = {name: 'yerin'};
const yerin3 = yerin1;

console.log(yerin1 == yerin2); //f
console.log(yerin1 === yerin2); //f
console.log(yerin1 === yerin3); //t

//equality - puzzler
console.log(0 == false); // t
console.log(0 === false); //0은 bollean x f
console.log ('' == false); //t
console.log ('' === false); //f
console.log(null == undefined);//t
console.log(null === undefined);//f

// 8. Conditional operators: if
//if, else if, else
const name = 'ellie';
if(name === 'ellie'){
    console.log('Welcome, Ellie!');
}else if(name === 'coder'){
    console.log('coder');
}else{
    console.log(unkwnon);
}

//9. Ternary operator: ?
//condition ? value1 : value2;
console.log(name === 'coder' ? 'yes' : 'no');

//10. Switch statement
//use for multiple if checks
//use for eunm-like value check
//use for multiple type checks in TS
const browser = 'IE';
switch(browser){
    case'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you!');
        break;
    default:
        console.log('same all!');
        break;
}

//11. Loops
//while loop, while the condition is truthy
//body code is executed.
let i = 3;
while (i>0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, body code is executed first,
//then check the condition.
do{
    console.log(`do while: ${i}`);
    i--;
}while (i > 0);

//for loop, for(begin; condtion; step)
for (i=3; i>0;i--){

    console.log(`for: ${i}`);
}

for (let i = 3;i>0;i = i-2){
    //inline variable declaration
    console.log(`inline variable for: ${i}`);
}

//nested loops
for (let i = 0; i< 10; i++){
    for(let j =0; j<10; j++){
        console.log(`i: ${i}, j:${j}`);
    }
}

//break(루프를 아예 끝냄), continue(지금거만 스킵하고 다음걸로)
//01. iterate from 0 to 10 and print only even numbers
//(use continue)

for(let i=0;i<=10;i++){
   if(i % 2 == 0){
    continue;
      
   }
   console.log(`i: ${i}`);
}



//Q2. iterate from 0 to 10 and print numbers untio reaching 8 
//use break)

for(let i=0;i<=10;i++){
    console.log(`i: ${i}`);
    if(i == 8){
        break;
    }
   
 }

```
