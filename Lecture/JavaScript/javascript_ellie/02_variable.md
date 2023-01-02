드림코딩 by 엘리

```javascript


'use strict';


// 변수 2. Varialle, rw(read/write)
// let (ES6에서  추가됨)
//ES6을 가르쳐줄게 = 자바스크립트를 가르쳐줄게.

let globalName = 'global name';
// Global scope 아무데서나 쓸수있다.
// 메모리에 저장되기 때문에 최소한으로 쓰는 게 좋다
//scope란? 변수에 접근할 수 있는 범위
//global(전역) local(지역) 타입으로 나뉜다.

{ //Block scope 블록밖에선 블록 안에서의 내용을 쓸수 없음
let name = 'ellie';
//name이란 변수를 선언하고 바로 ellie란 값을 할당해준 거임
console.log(name);
name = 'hello';
console.log(name);
}

//var 쓰지마...
//var hoisting (어디에 선언했는지 상관없이 맨 위로 선언을 끌어올려주는 것.)
//block scope를 무시함
age=4;
var age;

//3. Constant, r(read only)
//변경이 불가함 immutable 데이터 타입
//값을 선언하고 바꾸지 않을 
//보안성, 여러 thread에서 쓸땐 값이 변하지않는 거에서 값을 가져오는게 좋으니깐...
//인간의 실수를 줄여줌
//얘로 쓰는게 좋다

//note!
// Immutable data types: premitive types, frozen objects(i.e. object.freeze())
// Mutable data types: all objects by defalut are mutable in JS
// favor immutable data type always for a few reasons

//4. Variable types
//primitive, single item(더이상 나눠질수 없는 한가지 아이템)
//: number, string, boolean, null, undefiedn, symbol
//object(위 싱글 아이템을 한 박스 한 단위로 묶어 관리하게 해주는것), box container
//function, first-class function(자바스크립트는 function도 변수에 할당이됨)
//파라미터. 인자로 전달도 되고, 리턴타입으로도 function을 리턴할 수 있다.
//자바스크립트에선 number만 있음 됨. ㅎㅎㅎ
//number라고 선언 안 해도 됨 ㅎㅎㅎ

const count = 18; //integer 정수
const size =18.1; //decimal number 소수점 숫자
console.log(`value: ${count}, type:${typeof count}`);
console.log(`value: ${size}, type:${typeof size}`);

//number = speical numeric values:infinity, -infinity, Nan
//특별한 숫자 값들
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

//bigInt (새로 추가된 타입인데 아직 잘 안씀)
const bigInt = 1234567890123456789012345678901234567890n; //over(-2*53)~2*53
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

//Stiring 도 마찬가지로... 
const char = 'c';
const brendan = 'brendan';
const greeting ='hello'+brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`vlaue: ${helloBob}, type: ${typeof helloBob}`);

//template literals(string)이란? ` 백탭 눌러서 그 안에 + 필요없이 간편하게! 스트링!

//boolean
//false: 0, nul, undefined, NaN, ''
//true: any other value 0제외 나머지 숫자는 다 트루라는 거~
const canRead = true;
const test = 3 < 1; //false
console.log(`value: ${canRead}, type:${typeof canRead}`);
console.log(`value: ${test}, type:${typeof test}`);

//null
let nothing = null //내가 null이라고 지정해줌.
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefined
let x;// 아무런 값을 할당하지 않거나 = undefined라고 할당해줘도됨
console.log(`value: ${x}, type:${typeof x}`);

//symbol, 고유한 식별자 만들고 싶을 때 씀
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
//동일한 아이디이어도 다른 심볼이 만들어진 거기 때문에
console.log(symbol1 == symbol2);
//하면 false가 나옴

//동일한 심볼을 만들고 싶다면 (?) 
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`)
//symbol을 바로 출력하게 되면 에러가 떠서 .description 을 꼭 붙여줘야함

//object, real-life object, data structure
const ellie = {name: 'ellie', age: 20};
//위 엘리라는 오브젝트는 const로 선언해서 더 바꿀 수 없지만
ellie.age = 21;
//하지만 오브젝트 안에 있는 변수는 하나씩 지정해서 수정이 가능하다.


//5. 선언할때 어떤 타입인지 선언안해도 결과에 따라 타입이 바뀔수 있다
// Dynamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value:${text}, type: ${typeof text}`);
text = 1;
console.log(`value:${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value:${text}, type: ${typeof text}`);
text ='8' / '2';
console.log(`value:${text}, type: ${typeof text}`);
//console.log(text.charAt(0));
//아나 난 스트링으로 했는데 언제 넘버로 바뀌어서 오류가 뜨냐?
//-- > 이래서 Type Script가 나왔다네!
```
