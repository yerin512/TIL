## 📖 Making a To Do List part Two
#### To Do List를 만들어보자! 2

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

    const toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    const span = document.createElement("span");
    const newId = toDos.length + 1;
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId

        };
        toDos.push(toDoObj);
        saveToDos();
    }



function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        //console.log(loadedToDos);
        const parsedToDos = JSON.parse(loadedToDos);
        //console.log(parsedToDos); json 차이
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
    
}

init();

```


### ⭐ 기억할 점 ⭐
*  const parsedToDos = JSON.parse(loadedToDos); 
ㄴ 자바스크립트는 object를 못읽어서 json으로 string을 object로 변경해줘야함
*  parsedToDos.forEach(function(toDo){});
ㄴ array를 각각 사용할수 있는 




[참조 - Nomad Coders 유튜브 강의](https://youtu.be/f0nBj0YMBUI?list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr)
