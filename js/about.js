//.abouts-main>ul.about-top>li*3>a
//            div.about-bottom>span
//                             div>div.about-left>ul>li*5
//                                 div.about-right>div.left1  .left2  .left3  .left4  .left5
//面包屑
$('ul').on('click','li',function(){
    var reads=$(this).find('a').html();
    var bread=$('.about-top .breads').find('a');
    bread.html(reads);
})
//选项卡
$(".about-left li").click(function(){
    var nums=$(this).index();
    $(".about-right>div").eq(nums).show().siblings().hide();
    $(this).addClass("is-active").siblings().removeClass("is-active");
})

