const tabs = $('.tabs>div');
const tabContens = $('.tab-contens>div')

tabs.click(function(){
    tabs.removeClass('on');
    $(this).addClass('on');
    tabContens.removeClass('on')
    let idx = $(this).index();
    tabContens.eq(idx).addClass('on')
});