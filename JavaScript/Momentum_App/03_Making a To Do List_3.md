## 📖 Making a To Do List part Three
#### To Do List를 삭제해보자!

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

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos
    saveToDos();
}


function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "X";
    delBtn.addEventListener("click", deleteToDo);
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
*  const btn = event.target; 해당 버튼만 선택되게
*  const li = btn.parentNode; 누르는 버튼의 부모 LI 아이디 찾기
*  filter, forEach 기억하기! 얘네가 list에 있는 item을 위한 함수를 실행하는 거임! 




[참조 - Nomad Coders 유튜브 강의](https://youtu.be/f0nBj0YMBUI?list=PLLUCyU7SBaR7tOMe-ySJ5Uu1UlEBznxTr)
