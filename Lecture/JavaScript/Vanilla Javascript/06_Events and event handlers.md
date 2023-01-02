📖 Events and event handlers

사이즈 조절 시 이벤트 콘솔에 찍기
``` javascript
 const title = document.querySelector("#title");

function handleResize(event){
    console.log(event);
}
window.addEventListener("resize", handleResize);
```
클릭 시 이벤트 발생
``` javascript
 const title = document.querySelector("#title");

function handleClick(){
    title.style.color = "red";
}
title.addEventListener("click", handleClick);
```
