https://youtu.be/OCCpGh4ujb8

```javascript
//1. Use strict
//added in ES 5
//use this for Valina Javascript.

'use strict';

//2. Variable
//let(added in ES6)
//Mutable type
let globalName = 'global name';
{
let name = 'ellie';
console.log(name);
name='hello';
console.log(name);
console.log(globalName);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting (move declaration from bottom to top)
//has no block scope
{
    age = 4;
    var age;
}

console.log(age);

//3. Contants
//Immutable type
//favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
//primitive, single item: number, string, boolean
//object, box container
//function, first-class function

//자바스크립트는 감사하게도! 숫자타입은 number만 쓰임
const count = 17; //integer
const size = 17.1; //decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speical numeric values: infinity, -infinity, Nan
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' /2;
console.log(infinity);
//console.log(negativeInfintiy);
console.log(nAn);

//bigInt (fairly new, don`t use it yet)
const bigInt = 123445667890123456789012345678901234567890n;//over(-2**53)~2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi $[brendan}!`; //template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: '+ helloBob + 'type: '+ typeof helloBob);

//boolean
//false: 0, null, undefined, NaN, ';
//ture: any other value
const canRead = true;
const test = 3<1; //false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

//null
let noting = null;
console.log(`value: ${noting}, type: ${typeof noting}`);

//undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

//symbol, create unigue identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);//false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

//object, real-life object, data structure
const ellie = {name: 'ellie', age: 20}; //변경 불가
ellie.age = 21;// 변경가능

//5. Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value ${text}, type: ${typeof text}`);
text = 1; //number 1
console.log(`value ${text}, type: ${typeof text}`);
text = '7' + 5; // string 75
console.log(`value ${text}, type: ${typeof text}`);
text = '8' / '2'; //number 4
console.log(`value ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); //오류



```
