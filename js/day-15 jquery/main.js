$(".hide").click(function(){
    $(".box").hide();
})

$(".show").click(function(){
    $(".box").show();
})
$(".toggle").click(function(){
    $(".box").toggle();
});
$(document).on("click mouseover",".boxes,.box",function(){
    $(this).css({
        "border-radius":"50%",
        "background":"#00ff00",
    });
});
