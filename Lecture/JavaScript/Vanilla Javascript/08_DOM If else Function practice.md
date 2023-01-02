
# html javascript dom event mdn 
어떤이벤트가 있는지 궁금할땐 mdn 검색!


### 📖 DOM If else Function practice part Two

클릭시 클래스 이름 변경
``` javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS; //궁금점 currentClass = CLICKED_CLASS는 왜 안 먹는지 궁금
    }else{
        title.className = "";
    }
}

function init(){
    title.addEventListener("click", handleClick)
}

init();
```
클릭시 클래스리스트에 클래스 추가 (이게 더 좋다!)
``` javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if(!hasClass){
        title.classList.add(CLICKED_CLASS);
    }else{
        title.classList.remove(CLICKED_CLASS);
    }
}

function init(){
    title.addEventListener("click", handleClick)
}

init();
```
toggle로 완전 줄이기!
``` javascript
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
    
}

function init(){
    title.addEventListener("click", handleClick)
}

init();

```
