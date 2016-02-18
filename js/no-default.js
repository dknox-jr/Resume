$(".no-default").click(function (e) {
    e.preventDefault();
});

$("#site1img").click(function(){
        $("#site1").animate({height: "100%", width: "100%", opacity: ".8"}, 3000);
});