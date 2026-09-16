// $(document).ready(function(){}); =>defer를 사용 안할대 사용

let fontSizeBase = 20;
const html = $("html");
const btnFontUp = $("#btn-font-up");

//크게 버튼을 눌렀을때 작동하는 기능
 btnFontUp.click(()=>{
    if(fontSizeBase>40){return}
    fontSizeBase++;
    html.css('font-size',fontSizeBase+'px')
 });

 //작게 버튼 눌렀을때 동작하는 기능
 const btnFontDown = $("#btn-font-down");

 btnFontDown.click(()=>{
    if(fontSizeBase<13){return}
    fontSizeBase--;
    html.css('font-size',fontSizeBase+'px')
 });

const btnToggle = $("#btn-toggle");
const fontControl = $(".fontControl");
btnToggle.click(()=>{
    fontControl.toggleClass('on');
});
//아이콘 이미지 변경기능
let btnState = false
btnToggle.click(function(){
    if(!btnState){
        //이미지 닫기 교체
        $(this).find('img').attr('src','./img/close.svg').find('img').attr('alt','메뉴닫기');
        btnState = true;
    }else {
        $(this).find('img').attr('src','./img/menu.svg').find('img').attr('alt','메뉴열기');
        btnState = true;

    };

});
