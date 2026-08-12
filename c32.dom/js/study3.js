 document.addEventListener("DOMContentLoaded",()=>{
    console.log(this); //function 을 쓰면 document를 가르키고, 축약문을 쓰면 window를 가르킴




    const btn1 = document.querySelector('#btn1');
        const btn2 = document.querySelector('#btn2');
        const box = document.querySelector('.box');
        btn1.addEventListener('click',function(){
            //alert('방가방가')
            //const box=document.querySelector('.box');
            console.log(this);
            box.innerHTML="안녕안녕";

        });
        btn1.addEventListener('dblclick',function(){
            const box = document.querySelector('.box');
            box.innerHTML="더블클릭 안녕방가"
        });        
        btn2.addEventListener('mousedown',()=>{
            box.innerHTML = "버튼을 누르고 있군요."
        });
        btn2.addEventListener('mouseup',()=>{
            box.innerHTML = '버튼을 놓쳤군요.'
        });
        box.addEventListener('mouseenter',()=>{
            box.innerHTML = '박스 안에 마우스를 들여놓았군요.'
        });
        box.addEventListener('mouseleave',()=>{
            box.innerHTML = '박스 밖에 마우스를 내보냈군요.'
        });
        document.addEventListener('click',(event)=>{
            console.log(event.target.textContent);  //텍스트명이 나옴
            console.log(event.target.className);    //클레스명이 나옴
            console.log(event.target.tagName);      //태그명이 나
        });
        // let taga = document/querySelector('a');
        // taga.addEventListener('click',(Event)=>{
        //     event.preventDefault();
        // });
        // taga.addEventListener('click' function(event){
        //     event.preventDefault();            
        // });
        const frame = document.querySelector('.frame');
        frame.addEventListener('click',function(){
            alert('프레임을 클릭하였습니다.');
        });
        const inbox = document.querySelector('.inbox');
        inbox.addEventListener('click',function(event){
            event.stopPropagation();    //부모한테 전달되는 이벤트를 막을 수 있음
            alert('안에 박스를 클릭하였습니다.');
        });
        const inputTag = document.querySelector('.input')
        inputTag.addEventListener('input',function(event){
            box.innerHTML = event.target.value;
            console.log(event.target.value);
        });
        inputTag.addEventListener('focus',()=>{
            console.log('입력을 시작하시겠습니다.')
        });
        inputTag.addEventListener('blur',()=>{
            console.log('입력을 마치셨습니다.')
        });
})