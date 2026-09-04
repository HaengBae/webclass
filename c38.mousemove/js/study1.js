const mouseCurcor = document.querySelector('.mouse-curcor')
const tooltipBox = document.querySelector('.tooltip-box')

let curcorState = false;

document.addEventListener('mousemove',(e)=>{
    
    if(!curcorState){
        mouseCurcor.style.display = "block"
        curcorState = true;
    }
    //마우스가 움직일때 만다 실행되는 소스코드
    mouseCurcor.style.left = e.clientX+"px"
    mouseCurcor.style.top = e.clientY+"px"

    tooltipBox.style.left = (e.clientX+120)+"px"
    tooltipBox.style.top = e.clientY+"px"
});
document.addEventListener('mousedown',()=>{
    mouseCurcor.innerHTML = `<img src="./img/clicked.png" alt="클릭한상태">`;
})

document.addEventListener('mouseup',()=>{
    mouseCurcor.innerHTML = `<img src="./img/default.png" alt="기본 마우스 커서">`;
})

const tooltips = document.querySelectorAll('.tooltip');
tooltips.forEach(tag=>{
    //마우스를 span 올렸을 때
    tag.addEventListener('mouseenter',()=>{        
        tooltipBox.style.display = 'block';
        tooltipBox.innerHTML = tag.getAttribute('data-tooltip');
        mouseCurcor.innerHTML = `<img src="./img/clicked.png" alt="클릭한상태">`;
        //getAttribute = 가져오다.
    });
    //마우스를 span 뺐을 때
    tag.addEventListener('mouseleave',()=>{
        tooltipBox.style.display = 'none';
        tooltipBox.innerHTML=``;
        mouseCurcor.innerHTML = `<img src="./img/default.png" alt="기본 마우스 커서">`;
    });
});