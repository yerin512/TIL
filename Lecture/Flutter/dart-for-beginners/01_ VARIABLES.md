## 1.0 Hello World 

main함수

main함수는 모든 Dart 프로그램의 Entry point이다.
main 함수에서 쓴 코드가 호출된다. (만약 main이 없다면 실행이 되지 않음)
dart는 자동으로 세미콜론을 붙여주지 않기 때문에 직접 붙여야 한다. (일부러 세미콜론을 안 쓸 때가 있기 때문)
```
void main(){
print("hello world");
}
```

## 1.1 The Var Keyword

변수를 만드는 2가지 방법

```
void main() {
var name = "pizza"; // 방법 1
String name = "chicken"; // 방법 2
name = "chicken ";
}
```
함수나 메소드 내부에 지역변수를 선언할 때는 var를 사용하고
class에서 변수나 property를 선언할 때는 타입을 지정해준다.
둘 다 동일한 타입의 값에 대해 변수의 변경이 가능하다.
다른 타입의 변수는 서로 대입할 수 없다
변수는 업데이트 가능함


## 1.2 Dynamic Type

Dynamic 타입

dart는 `여러 타입을 가질 수 있는` dynamic 타입을 지원한다.
여러가지 타입을 가질 수 있는 변수에 쓰는 키워드이다. (해당 변수의 타입을 알 수 없을 때 주로 사용)
변수를 선언할 때 dynamic을 쓰거나 값을 지정하지 않으면 dynamic 타입을 가진다.

```
void main(){
dynamic name;
var name2;
}
```

dynamic 타입은 언제 사용될까?
대표적으로 타입을 알기가 힘들 때 사용한다. 예를 들어 json을 작업할 때 같은 경우다.

하지만 dynamic 타입은 다양한 타입을 가질 수 있기 때문에 `정말 필요할 때만` 사용해야 한다. (위험 방지)


## 1.3 Nullable Variables

Null Safety

개발자가 null 값을 참조할 수 없도록 하는 것이다.
String뒤에 ?를 붙여줌으로서 name이 String 또는 null이 될 수 있다고 명시해준 것입니다.
기본적으로 모든 변수는 non-nullable(null이 될 수 없음)이다.

```
void main() {
String? name = "hello";
name = null;
}
```

string처럼 데이터 타입이 주어진 곳에 파라미터로 null 보내면 -> 런타임 에러 발생 등 문제 발생 가능.
다트에서는 기존에 string처럼 타입을 선언하면 null을 가질 수 없음.
하지만 개발을 하다보면 null이 필요한 경우가 있고, 기존 타입과 null타입 모두 가지고 싶다면 타입 뒤에 ?를 붙이면 된다.


## 1.4 Final Variables 


final 변수

var대신 final로 변수를 만들게 되면 이 변수는 수정할 수 없게 된다. (딱 한 번만 설정 될 수 있음)
자바스크립트의 const랑 비슷하다.
```
void main() {
final name = "pizza";
name = "ham"; // 수정 불가

final String username = "tom";
name = "tom2"; // 수정 불가
}
```

## 1.5 Late Variables

late 변수

초기 데이터 없이 먼저 변수를 생성하고 추후에 데이터를 넣을 때 주로 사용한다.
flutter로 data fecthing을 할 때 유용하다.
late 변수를 만들고, API에 요청을 보낸 뒤에 API에서 값을 보내주면 그 응답값을 late변수에 넣어 사용할 수 있다.
```
void main() {
late final String name;

print(name); // name 변수에 접근 불가
}
```

## 1.6 Constant Variables

const 변수

dart의 상수는 자바스크립트와 다르다.
자바스크립트의 상수는 dart의 fianl과 같다.
dart의 const는 compoile-time constant를 만들어 준다.
const와 fianl의 가장 큰 차이점은 컴파일이 되는 시점에 그 값을 알 수 있는지 없는지의 차이다.

예를 들어 fetchApi를 하는 변수는 컴파일하는 시점에 그 변수를 알 수가 없다.

```dart
// 컴파일하는 시점에는 API의 값을 알 수 없다
const API = fetchAPI()
```

위 코드의 경우에는 const가 아닌 final이 더 적합하다.

final를 쓰는 대표적인 경우는
API fetching, 사용자가 화면에서 입력해야하는 값 등이 있다.

const를 쓰는 대표적인 경우는
max_allowed_price와 같은 상수에 쓰인다.



## 요약


변수를 만드는 2가지 방법
```dart
void main() {
var name = "pizza"; // 방법 1
name = "chicken ";
String name2 = "chicken"; // 방법 2
}
```

final: 값을 재할당하지 못하는 변수를 만듦
dynamic type: 어떤 타입의 데이터가 들어올 지 모를 때 사용함
const: 컴파일 할 때 값을 알고 있는 변수
final: 런타임 중에 만들어질 수 있는 변수
late: final, var, String같은 것들 앞에 써줄 수 있는 수식어로서 어떤 데이터가 올 지 모를 때 사용한다.
