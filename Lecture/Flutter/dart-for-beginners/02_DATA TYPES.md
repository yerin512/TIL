# 2 DATA TYPES

## 2.0 Basic Data Types

기본 데이터 타입

아래 타입을 포함한 거의 대부분의 타입들이 객체로 이루어져 있다. (함수도 객체)
이것이 Dart가 진정한 객체 지향 언어로 불리는 이유이다.
import할 필요 없이 해당 자료형이 가지는 모든 method를 사용할 수 있다.
그 중, int와 double 은 num이라는 자료형을 상속받은 자료형이다.
num은 그 값이 integer 일 수도 있고 double 일 수도 있다.
만약 IDE를 사용하고 있다면 컨트롤 + 클릭(mac인 경우 cmd + 클릭)을 통해 그 자료형에 들어가보면 class인 것을 확인할 수 있다.
```
void main() {
String name = "tom";
bool isPlay = true;
int age = 10;
double money = 52.55;
num x = 12;
num y = 1.2;
}
```

# 2.1 Lists 

dark에서 lists를 선언하는 것은 두 가지 방법이 있다.
```dart
void main(){
int case1 = [1,2,3,4,5];
List case2 = [1,2,3,4,5];
}
```
만약 vscode나 dartPad를 사용한다면 맨 끝을 쉽표로 마무리하면 유용하다.
```dart
void main(){
int case1 = [
1,
2,
3,
4,
5,
];
}
```

dart의 유용한 점은 `collection if`와 `collection for`을 지원하는 것이다.

collection if를 사용하면 `존재할 수도 안할 수도 있는 요소를 가지고 올 수 있다.`

```dart
void main(){
var giveMeSix = true;
int case1 = [
1,
2,
3,
4,
5,
if(giveMeSix) 6,
];
// 아래와 같은 기능이다.
if(giveMeSix){
case1.add(6);
}
}
```

List 자동 Formatting(DartPad) 안 되면!

1. 리스트의 마지막 변수 뒤에 ,(쉼표)를 붙인다.
2. 코드를 전체 선택 단축키(Ctrl+A)를 이용해서 전체 선택한다.
3. 자동 Formatting 단축키 (Shift+Ctrl+F)를 사용.


## 2.2 String Interpolation

변수 사용하는 방법

$달러 기호를 붙이고 사용할 변수를 적어주면 된다.
만약 무언가를 계산하고 싶다면 ${ } 형태로 적어주면 된다.
```
void main(){
var name = "tom";
var age = 10;
var greeting = "hello $name, I'm ${age + 5}";
}
```

## 2.3 Collection For

Dart는 조건문(if) 및 반복(for)을 사용하여 컬렉션을 구축하는 데 사용할 수 있는 컬렉션 if 및 컬렉션 for도 제공합니다.
```
void main() {
var oldFriends = ["nico", "lynn"];
var newFriends = [
"tom",
"jon",
for (var friend in oldFriends) "❤️ $friend"
];

print(newFriends); // [tom, jon, ❤️ nico, ❤️ lynn]
}
```
https://dart.dev/guides/language/language-tour#collection-operators

## 2.4 Maps 

Maps

일반적으로 맵은 key와 value를 연결하는 객체입니다. 키와 값 모두 모든 유형의 객체가 될 수 있습니다. 각 키는 한 번만 발생하지만 동일한 값을 여러 번 사용할 수 있습니다.
```
var gifts = {
// Key: Value
'first': 'partridge',
'second': 'turtledoves',
'fifth': 'golden rings'
};

// Map 생성자를 사용하여 동일한 객체를 만들 수 있습니다.
var gifts2 = Map();
gifts2['first'] = 'partridge';
gifts2['second'] = 'turtledoves';
gifts2['fifth'] = 'golden rings';
```
https://dart.dev/guides/language/language-tour#maps

## 2.5 Sets

Sets

set도 두 가지 방법으로 정의할 수 있다.
1. var을 사용
var numbers = {1, 2, 3};
2. 자료형 명시
Set numbers = {1, 2, 3};

Set에 속한 모든 아이템들이 유니크해야될 때 사용한다.
list는 같은 요소가 여러개 반복될 수 있지만, set은 중복이 허용되지 않는다.
유니크할 필요가 없다면 List를 사용하면 된다.
```
var halogens = {'fluorine', 'chlorine', 'bromine', 'iodine', 'astatine'};
```
https://dart.dev/guides/language/language-tour#sets
