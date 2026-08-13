document.addEventListener('DOMContentLoaded',()=>{
    let fontSizeBase = 20;
    //크게 버튼을 눌렀을때 작동하는 기능
    const html = document.querySelector("html");
    const btnFontUp = document.querySelector("#btn-font-up");
    btnFontUp.addEventListener('click',()=>{             
        if(fontSizeBase>40){return}
        fontSizeBase++;     
        html.style.fontSize = fontSizeBase+'px';
    });

    //작게 버튼 눌렀을때 동작하는 기능
    const btnFontDown = document.querySelector("#btn-font-down");
    btnFontDown.addEventListener('click',()=>{             
        if(fontSizeBase<13){return}
        fontSizeBase--;     
        html.style.fontSize = fontSizeBase+'px';
    });
    const btnToggle = document.querySelector("#btn-toggle");
    const fontControl = document.querySelector(".fontControl");
    btnToggle.addEventListener('click',()=>{
        fontControl.classList.toggle('on');
    });
    //아이콘 이미지 변경기능
    let btnState = false
    btnToggle.addEventListener('click',function(){
        if(!btnState){
            //이미지 닫기 교체
            this.children[0].setAttribute('src','./img/close.svg');
            this.children[0].setAttribute('alt','닫기');
            btnState = true;
        }else{
            //이미지 메뉴 교체
            this.children[0].setAttribute('src','./img/menu.svg');
            this.children[0].setAttribute('alt','.메뉴열기');
            btnState = false;
        }
    });

});