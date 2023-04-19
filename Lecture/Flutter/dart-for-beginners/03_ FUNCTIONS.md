# 3 FUNCTIONS


## #3.0 Defining a Function 

Functions

Dart는 진정한 객체 지향 언어이므로 함수도 객체이며 타입이 Function입니다. 이는 함수를 변수에 할당하거나 다른 함수에 인수로 전달할 수 있음을 의미합니다.
```
// 하나의 표현식만 포함하는 함수의 경우 아래와 같이 단축 구문을 사용할 수 있습니다.
String sayHello(String name) => "Hello ${name} nice to meet you.";

num plus(num a, num b) => a + b;

void main() {
print(sayHello("sugar"));
}
```
https://dart.dev/guides/language/language-tour#functions

## #3.1 Named Parameters

Named parameters

Named parameters는 명시적으로 required로 표시되지 않는 한 선택 사항입니다. 기본값을 제공하지 않거나 Named parameters를 필수로 표시하지 않으면 해당 유형은 기본값이 null이 되므로 null을 허용해야 합니다.
```
String sayHello(
{required String name, required int age, required String country}) {
return "${name} / ${age} / ${country}";
}

void main() {
print(sayHello(name: "sugar", age: 10, country: "Korea"));
}
```
https://dart.dev/guides/language/language-tour#parameters

몇몇 function들은 default value를 주는 것이 불가능할 수 있다. 사용자가 데이터를 전달하지 않으면 동작하지 않는 function들 같은 경우이다.
예를 들어, 사용자가 로그인을 할 때 이메일이나 비밀번호를 default value로 줄 수는 없다.
이런 경우에는 required modifier을 주면 된다.

## #3.3 Optional Positional Parameters 

Dart에서 [] 은 optional, positional parameter를 명시할 때 사용된다.
name, age는 필수값이고 []를 통해 country를 optional값으로 지정해줄 수 있다.

```
String sayHello(String name, int age, [String? country = ""]) {
return 'Hello ${name}, You are ${age} from the ${country}';
}

void main() {
var result = sayHello("sugar", 10);
print(result);
}
```

```
[String? country='cuba'] --> cuba
[String country='cuba'] --> cuba
[String? country] --> null
[String country] --> error (컴파일 안됨)
```


## #3.4 QQ Operator

### QQ Operator

?? 연산자를 이용하면 왼쪽 값이 null인지 체크해서 null이 아니면 왼쪽 값을 리턴하고 null이면 오른쪽 값을 리턴한다.
```
String capitalizeName(String? name) {
return name?.toUpperCase() ?? "";
}
```

### QQ question operator

??= 연산자를 이용하면 변수 안에 값이 null일 때를 체크해서 값을 할당해줄 수 있다.
```
void main() {
String? name;
name ??= "sugar";
name = null;
name ??= "js";
print(name); // js
}
```

## #3.5 Typedef 

TypeDef

자료형에 사용자가 원하는 alias를 붙일 수 있게 해준다. (자료형 이름의 별명을 만들 때 사용)
```
typedef ListOfInts = List;

ListOfInts reverseListOfNumbers(ListOfInts list) {
var reversedList = list.reversed.toList();
return reversedList;
}
```
https://dart.dev/guides/language/language-tour#typedefs
