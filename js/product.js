$(".bot-nav li").click(function(){
    var nums=$(this).index();
    $(".bot-main>div").eq(nums).show().siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
})