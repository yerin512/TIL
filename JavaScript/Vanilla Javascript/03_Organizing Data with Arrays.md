
## 📖 1-9 Organizing Data with Arrays && Objects

``` javascript

배열과 객체(Object)의 차이



예를들어,

배열 선언은 ex) const info = ["book", "read"];       //////     Object 선언은 const info = {"book", "read"}  이라할 때,



Object로 선언한 info를 console.log로 찍어보면 SyntaxError: Unexpected token 에러가 뜬다.



즉, Object를 배열처럼 {} 안에다가 "" , "" 로 선언할 수 없다는 뜻.

참고로 배열은 [] 괄호로, Object는 {}로 사용한다.



Object는 실제 객체를 만드는 것.

ex) const info = {

name:"park",

gender:"male"

}

이렇게 변수와 값을 넣어주고 console.log(info)를 찍어보면 {name: "park", gender: "male}가 출력이 된다.

근데 나는 name만 출력하고 싶어...



그러면 console.log(info.name); 이라고 찍으면 콘솔에는 park이 출력된다.



만약에 내가 name을 park이 아닌 kim 으로 바꾸고 싶으면 기존에



ex) const info = {

name:"park",

gender:"male"

}

info.name = 'kim';



console.log(info.name); 이라고 바꾸면 된다.



하지만 info 자체를 바꿀 수는 없다는 점은 꼭 알아두길 바란다.



ex) info = "park";     (x)



우리는 한 사람의 정보를 여러개 저장해야할 경우가 생길텐데 그때, Object안에 Array를 넣어서 사용한다.



ex) const info = {

name:"park",

gender:"male",

hobby: ["movie", "sing", "computergame"],                    //배열의 Object

favFood: [

{

name:"rice", 

fatty:false

}, 

{

name:"Cheese burger",

fatty:true

}]  // Object의 배열

}


console.log(info) 출력

{ name: 'park',

  gender: 'male',

  hobby: [ 'movie', 'sing', 'computergame' ],

  favFood: 

   [ { name: 'rice', fatty: false },

     { name: 'Cheese burger', fatty: true } ] }

이 안에서 name이 'rice'를 뽑으려면 어떻게 해야할까? 그것은 본인에게 맞기겠습니다.


``` 
* 참조 : [자바스크립트 배열이란?](https://docu94.tistory.com/53)
* 참조 : [Array vs Object 무슨차이야?(Object란)](https://docu94.tistory.com/54)

``` javascript
//실습
const something = "Something"
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true, something];
const yerinInfo = {
    name:"Yerin",
    age:"26",
    gender:"Female",
    isHandsome:true,
    favMovies: ["Along the gods", "LOTR"],
    favFood: [{name:"Kimchi",
                fatty:false},{name:"Buger",fatty:true}]
}

console.log(yerinInfo.gender); //f

yerinInfo.gender = "male";

console.log(yerinInfo.gender);//m

console.log(daysOfWeek);
console.log(yerinInfo);


const sq = {
    name:"saeque",
    age:"8",
    gender:"Female",
    favFood:["인간밥","해바라기씨","밀렛"],
    favPerson:[{name:"yerin",age:"26",gender:"Female"},{name:"mom",age:"56",gender:"female"}]

}

console.log(sq);
console.log(sq.favFood[2]);

``` 

##### 참조 :  [초보자를 위한 바닐라 자바스크립트](https://youtu.be/PRA_bhUxuh4)
