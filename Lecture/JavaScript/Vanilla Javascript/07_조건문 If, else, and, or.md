### 📖 조건문!! If, else, and, or

if와 else

``` javascript
if (10 === 5) {
    console.log("hi");
}else if( 10 > 5){
    console.log("ho");
}else {
    console.log("hey");
}
```
and와 or의 차이점
``` javascript
true && true = true;
false && true = false;
true && false = false;
false && false = false;

true || true = true;
false || true = true;
true || false = true;
false || false = false;
```
연령체크 if else문
``` javascript
const age = prompt("How dold are you");

if(age >= 18){ 
    console.log("you can drink");
}else if(age > 21){
    console.log("go ahed");
}else{
    console.log("you cant")
}
```

### 📖 2-6 DOM If else Function practice

``` javascript
const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7F8C8D";

function handleClick() {
    const currentColor = title.style.color;
    if(currentColor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }

}

function init (){
    title.style.color = "#34495e";
    title.addEventListener("click", handleClick);
}

init();

function handleOffline(){
    console.log("Bye bye");
}

function handleOnline(){
    console.log("Welcome back");
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);




```
