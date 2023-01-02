

## 📖 Making a To Do List part One
#### To Do List를 만들어보자!

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
const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

    const TODOS_LS = "toDos";

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);

}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){

    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();
```


### ⭐ 기억할 점 ⭐
*  const li = document.createElement("li"); 생성
*  li.appendChild(delBtn); 앞으로 들어오게





[참조 - Nomad Coders 유튜브 강의](https://youtu.be/f0nBj0YMBUI?list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr)
