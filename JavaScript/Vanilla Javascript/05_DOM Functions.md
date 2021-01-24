
## 📖 2-2 JS DOM Functions

DOM이란 무엇인가?
```
DOM을 조금 풀어서 써 볼까요? DOM은 Document Object Model의 약자입니다. Document는 문서이고 Object는 객체로 번역이 되죠. 
그리고 Model은 그냥 모델로 많이 쓰죠. 
문서 객체 모델로 번역을 할 수 있겠네요. 번역을 해도 아직 통 감이 오지 않네요. 

도대체 이 문서 객체란 것이 무엇일까요? 문서 객체란 <html>이나 <body> 같은 html문서의 태그들을
 JavaScript가 이용할 수 있는 객체(object)로 만들면 그것을 문서 객체라고 합니다.
 (그럼 html문서의 태그들이 객체에 담긴 상태를 의미하는 것일까요? )

여기에 Model을 붙였는데 Model이라는 영어 단어에는 모형, 주형이라는 의미도 있고 모듈이라는 의미도 있습니다. 
비슷하게 여기서는 문서 객체를 '인식하는 방식'이라고 해석할 수 있습니다.
이제 조금은 명확해 지지 않았나요? 이제 조금 더 명확하게 DOM을 정의해보겠습니다. 
DOM은 넓은 의미로 웹 브라우저가 HTML 페이지를 인식하는 방식을 의미합니다.
조금 좁은 의미로 본다면 document 객체와 관련된 객체의 집합을 의미할 수도 있습니다. 

이제 DOM을 보게 되면 웹 브라우저가 html 페이지를 인식하는 방식을 이야기 하거나 
문서 객체(document object)와 관련된 객체의 집합에 관한 이야기라는 것을 쉽게 추측할 수 있습니다.
```
[참조 - DOM이란 무엇인가? by AIdev](https://m.blog.naver.com/magnking/220972680805)


```html

<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet" href="index.css"/>
    </head>
    <body>
        <h1 id="title">This works</h1>
        <script src="index.js"></script>
    </body>
</html>

```

``` javascript

 const title = document.getElementById("title");

 console.log(title);
 title.innerHTML = "Hi! From JS";

```


``` javascript

 const title = document.querySelector("#title");

 console.log(title);
 title.innerHTML = "Hi! From JS";
 title.style.color = "#DEEE";
 document.title = "YERIN"
 

```

