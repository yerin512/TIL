https://youtu.be/1Lbr29tzAA8
```javascript
//Objects
//one of the JavaScript's data types.
//a collection of related data and/or functionality
//Nearly all objects in JavaScript are instances of Object
//object = {key: value};
const obj1 = {};//'object literal' syntax
const obj2 = new Object(); //'object construcor' syntax

function print(person){
    console.log(person.name);
    console.log(person.age);
}
const yerin = {name: 'yerin', age:4}
print(yerin);

yerin.hasJob = true;
console.log(yerin.hasJob);

delete yerin.hasJob;
console.log(yerin.jasJob);

//2. Computed properties
console.log(yerin.name);
yerin['hasFriend'] = false;
console.log(yerin['hasFriend']);

function printValue(obj, key){
    console.log(obj[key]);
}
printValue(yerin, 'name');
printValue(yerin, 'age');

//3. Property value shorthand
const person1 = {name: 'bob', age:2};
const person2 = {name:'steve', age:3};
const person3 = {name:'dave', age:4};
const person4 = new Person('ellie', 30);
console.log(person4);
function Person(name,age){
    //생략된 this = {};
        this.name = name;
        this.age =age;
    //return this;
}
//object를 만들기 위한 함수는 이름을 대문자로.. 생성자가 되는것이지!


//5. in operator: property existence check (key in obj)
console.log('name' in yerin);
console.log('age' in yerin)

//6. for..in vs for..of
//for(key in obj)
console.clear();
for(key in yerin){
    console.log(key);
}

//for (value of iterable)
const array = [1,2,3,4];
// for (let i = 0; i <array.length;i++){
// console.log(array[i]);
// }
for(value of array){
    console.log(value);
}
//7. Fun cloaing
//Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'yerin', age: '20'};
const user2 =user;
user2.name = 'coder';
console.log(user);

//old way (예전 복사방법)
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = new User4();
Object.assign(user4, user);
console.log(user4);

const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);

```
