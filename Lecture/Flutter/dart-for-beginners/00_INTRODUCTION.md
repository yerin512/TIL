# 00 Dart에 대해 알아보자!

## 00_1

Dart
Dart는 모든 플랫폼에서 빠른 앱을 위한 클라이언트 최적화 언어입니다.
1. UI 최적화용
(사용자 인터페이스 생성 요구에 특화된 프로그래밍 언어로 개발)
2. 생산적인 개발
(핫 리로드를 사용하여 실행 중인 앱에서 즉시 결과 확인)
3. 모든 플랫폼에서 빠름
(모바일, 데스크톱 및 백엔드용 ARM 및 x64 머신 코드로 컴파일합니다. 또는 웹용 JavaScript로 컴파일)
https://dart.dev/

Flutter 프레임워크는 인기 있는 다중 플랫폼 UI 툴킷으로 Dart 플랫폼으로 구동되며 iOS, Android, macOS, Windows, Linux 및 웹에서 실행되는 UI 경험을 빌드하기 위한 도구 및 UI 라이브러리를 제공합니다.


## 00_2

Dart의 컴파일러 기술을 사용하면 다양한 방식으로 코드를 실행할 수 있습니다.

기본 플랫폼: 모바일 및 데스크톱 장치를 대상으로 하는 앱의 경우 Dart에는 JIT(Just-In-Time) 컴파일 기능이 있는 Dart VM과 기계 코드 생성을 위한 AOT(Ahead-of-Time) 컴파일러가 모두 포함되어 있습니다.

웹 플랫폼: 웹을 대상으로 하는 앱의 경우 Dart는 개발 또는 프로덕션 목적으로 컴파일할 수 있습니다. 웹 컴파일러는 Dart를 JavaScript로 변환합니다.

https://dart.dev/overview


## 00_3

dart는 flutter를 사용하기 위해 배우는 경우가 많은데,
flutter를 설치하시면 dart는 자동으로 같이 설치됩니다

✔ Mac
$ brew install flutter
(brew 설치: https://brew.sh/index_ko)

✔ window
$ choco install flutter
(chocolatey 설치: https://community.chocolatey.org/)

dartpad
https://dartpad.dev

다트 SDK 설치 (Mac)
```
brew tap dart-lang/dart
brew install dart
dart --version (버전 확인)
```
https://dart.dev/get-dart
