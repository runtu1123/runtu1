var $alert=$("div.alert");
$("#btn").click(function(){
    $alert.addClass("in")
})
$("div.alert>.close").click(function(){
    $alert.removeClass("in")
})