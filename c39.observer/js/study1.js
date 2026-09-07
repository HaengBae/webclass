// const obsrver = document.querySelector('.ltr');

// ltr.addEventListener('mousemove',()=>{
//     ltr.classList.add('on')
// });




const obsrver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            //태그가 화면에 들어 왔을때 = ture
            entry.target.classList.add('on')
        }else {
            //태그가 화면 밖ㅌ으로 나갔을때 =false
            entry.target.classList.remove('on')
        }
    });
},{
    threshold:0.3 //태그 화면에 10% 이상 보일때 트리거를 하게 됨
});


const tags = document.querySelectorAll('.ltr,.fade,.fog')
tags.forEach(tag=>obsrver.observe(tag))
