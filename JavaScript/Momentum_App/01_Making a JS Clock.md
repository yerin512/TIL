
## 📖 Making a JS Clock part One
#### 자바스크립트로 실시간 시계를 만들어보자!

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Something</title>
        <link rel="stylesheet" href="index.css"/>
    </head>
    <body>
        <div class="js-clock">
            <h1>00:00:00</h1>
        </div>
        <script src="clock.js"></script>
    </body>
</html>
```

```css
body{
    background-color: #EEE;    
}

h1{
    color:#34495e;
    transition: color 0.5s ease-in-out;
}
```

```javascript
const clockContainer = document.querySelector(".js-clock"),
      clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours }:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds }`;

}

function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();
```




[참조 - Nomad Coders 유튜브 강의](https://youtu.be/f0nBj0YMBUI?list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr)
