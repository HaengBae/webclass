const station = $('.station');
const train = $('.train');
const btnPrev = $('#btn-prev');
const btnNext = $('#btn-next');

let count = 0;
function autoSlide(slideconut){
    slideconut++;
        train.css('transition',`all 0.8s ease 0s`);
        train.css('transform',`translateX(${-20*slideconut}%)`);
        if(slideconut===4){
            setTimeout(()=>{
               train.css('transition',`none`);
               train.css('transform',`translateX(0%)`);
               count = 0;
            },810);
        }
        return slideconut;

}

let timer = setInterval(()=>{
        count = autoSlide(count);
    },3000);


 train.mouseenter(()=>{
        clearInterval(timer);
    });

    train.mouseleave(()=>{
        timer = setInterval(()=>{
           count = autoSlide(count);
        },3000);
    });