#### .map()이란...

```javascript
const days = ["Mon", "Tue", "Wed", "Thus", "Fri"];
//여기에 뭔가를 추가하고 싶다? map()함수를 쓰는 거야!
//map() 함수는 모든 배열 값에 function을 실행하는 메소드거든...
//각 요일마다 function을 실행하고 그 function에서 나오는 값을 저장해 새로운 배열을 만들어
//function에 주는 변수는 아무거나 가능...

const addDay = days.map(day => day + 'day');
console.log(addDay);

//이러면 배열이 하나씩 console에 찍히게 되는 거임 ㅎㅎ
//return값은 console.log(day+1)임.
```
#### 두배 만들기

```javascript
let num = [1,2,3,4,5];
let result = num.map(multiply => multiply * 2);
console.log(result);
```
