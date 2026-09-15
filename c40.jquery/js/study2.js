$('.a').css('color','red');
let txt = $('.a').html();
// alert(txt)
$('.a').html('<i>새로운내용</i>');
let href = $('.b').attr('href');
// alert(href)
$('.b').attr('href','https://www.naver.com');
$('.c').addClass('on');
$('.c').removeClass('on');
$('.b').next().addClass('on');
$('.c').prev().html('네이버');
$('.c').parent().css('background-color','beige');

$('#btn').click(()=>{
    $(".frame").css('color','blue');
});

$('.list>li').click(function()
{
    let idx = $(this).index()
    alert(idx);
});

//생략함수인 =>를 썼을때. this가 묶이지 않고 상위로 감. (바인딩이 되지 않음), 