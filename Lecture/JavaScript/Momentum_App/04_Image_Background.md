## 📖 Image BackGround
#### 랜덤 이미지 배경을 넣어보자!

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="index.css"/>
    </head>
    <body>
        <div class="js-clock">
            <h1>00:00:00</h1>
        </div>
        <form class="js-form form">
            <input type="text" placeholder="What is your name?"/>
        </form>
        <h4 class="js-greetings greetings"></h4>
        <form class="js-toDoForm">
            <input type="text" placeholder="Write a to do" />
        </form>
        <ul class="js-toDoList">
        
        </ul>
        <script src="clock.js"></script>
        <script src="gretting.js"></script>
        <script src="todo.js"></script>
        <script src="bg.js"></script>
    </body>
</html>
```

```css
body{
    background-color:#34495e;  
}

h1{
    
    transition: color 0.5s ease-in-out;
}

.btn{
    cursor: pointer;
}

.clicked{
    color : #7f8c8d;
}

.form, .greetings{
    display:none
}

.showing{
    display: block
}

@keyframes fadeIn{
    from{
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

.bgImage{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:-1;
    animation:  fadeIn .5s linear;
}
```

```javascript
//bg.js

const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();
```


### ⭐ 기억할 점 ⭐
*  const number = Math.floor(Math.random() * IMG_NUMBER);랜덤 숫자 만들기
*  body.prepend(image);





[참조 - Nomad Coders 유튜브 강의](https://youtu.be/f0nBj0YMBUI?list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr)
