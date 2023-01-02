
## 📖 Saving the User Name
#### 사용자 이름을 Local Storage에 저장해보자!

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
        <form class="js-form form">
            <input type="text" placeholder="What is your name?"/>
        </form>
        <h4 class="js-greetings greetings"></h4>
        <script src="clock.js"></script>
        <script src="gretting.js"></script>
    </body>
</html>
```

```css
body{
    color:#34495e;  
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
```
```javascript
const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
   
    const USER_LS = "currentUser",
        SHOWING_CN = "showing";

    function saveName(text){
        localStorage.setItem(USER_LS, text);
    }

    
    function handleSubmit(event){
        event.preventDefault();
        const currentValue = input.value;
        paintGreeting(currentValue);
        saveName(currentValue);

    }
    
    function askForName(){
        form.classList.add(SHOWING_CN);
        form.addEventListener("submit", handleSubmit)

    }



    function paintGreeting(text){
        form.classList.remove(SHOWING_CN);
        greeting.classList.add(SHOWING_CN);
        greeting.innerText = `Hello ${text}`;
    }

    function loadName(){
        const currentUser = localStorage.getItem(USER_LS);
        if (currentUser === null){
            //she is not
            askForName();
        }else{
            paintGreeting(currentUser);
        }
    }

    function init(){
        loadName();
    }

    init();
```


### ⭐ 기억할 점 ⭐
*  localStorage.setItem(USER_LS, text); 저장
*  event.preventDefault(); 이벤트 발생하지않게





[참조 - Nomad Coders 유튜브 강의](https://youtu.be/f0nBj0YMBUI?list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr)
