document.addEventListener('DOMContentLoaded',()=>{
    const tabs = document.querySelectorAll('.tabs>div');
    const tabContens = document.querySelectorAll('.tab-contens>div')

    tabs.forEach(function(tab,index){
        tab.addEventListener('click',function(){
            tabs.forEach(intab=>intab.classList.remove('on'));
            tab.classList.add('on');
            tabContens.forEach(tabContent=>tabContent.classList.remove('on'));
            tabContens[index].classList.add('on');
        });
    });

});