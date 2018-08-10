// header
(()=>{
    $.ajax({
        type:"get",
        url:"header.html"
    }).then((html)=>{
        $(".header").html(html);
        $("#change").on("click",function(){
            translate();
        })
    })
})();
// footer
(()=>{
    $.ajax({
        type:"get",
        url:"footer.html"
    }).then((html)=>{
        $(".footer").html(html);
    })
})();