var scrollDown = 20;

$(".no-default").click(function (e) {
    e.preventDefault();
});

window.onscroll = function (e) {
    scrollDown = window.scrollY + 20; // Value of scroll Y in px + 20px
    console.log(scrollDown);
};


$("#site1img").click(function(){
        $("#mask").css('position', 'fixed');
        $("#site1").animate({height: "400px", width: "600px", opacity: "1", left: "400px", marginTop: scrollDown}, 1500);
        $("#site1close").animate({height: "40px", width: "40px", opacity: "1", left: "800px"}, 1500);
        $("#site1caption").animate({height: "200px", width: "545px", opacity: "1", left: "300px"}, 1500);
        $("#mask").css('zIndex', '10'); 
        $("#mask").animate({opacity: ".7", left: "-30px"}, 500);
});

$("#site1close").click(function(){
    $("#mask").css('position', 'absolute');
    $("#site1").animate({height: "150px", width: "200px", opacity: "1", left: "30px", marginTop: "80px"}, 1500);
    $("#site1close").animate({height: "0px", width: "0px", opacity: "0", left: "30px"}, 1500);
    $("#site1caption").animate({height: "0px", width: "0px", opacity: "0", left: "30px"}, 1500);
    $("#mask").css('zIndex', '-10'); 
    $("#mask").animate({opacity: "0", left: "30px"}, 500);
});

$("#site2img").click(function(){
        $("#mask").css('position', 'fixed');
        $("#site2").animate({height: "400px", width: "600px", opacity: "1", left: "400px", marginTop: scrollDown}, 1500);
        $("#site2close").animate({height: "40px", width: "40px", opacity: "1", left: "800px", marginTop: "30px"}, 1500);
        $("#site2caption").animate({height: "200px", width: "545px", opacity: "1", left: "300px"}, 1500);
        $("#mask").css('zIndex', '10'); 
        $("#mask").animate({opacity: ".7", left: "-30px"}, 500);
});

$("#site2close").click(function(){
    $("#mask").css('position', 'absolute');
    $("#site2").animate({height: "150px", width: "200px", opacity: "1", left: "30px", marginTop: "250px"}, 1500);
    $("#site2close").animate({height: "0px", width: "0px", opacity: "0", left: "30px", marginTop: "30px"}, 1500);
    $("#site2caption").animate({height: "0px", width: "0px", opacity: "0", left: "30px"}, 1500);
    $("#mask").css('zIndex', '-10'); 
    $("#mask").animate({opacity: "0", left: "30px"}, 500);
});

$("#site3img").click(function(){
        $("#mask").css('position', 'fixed');
        $("#site3").animate({height: "400px", width: "600px", opacity: "1", left: "400px", marginTop: scrollDown}, 1500);
        $("#site3close").animate({height: "40px", width: "40px", opacity: "1", left: "800px", marginTop: "30px"}, 1500);
        $("#site3caption").animate({height: "200px", width: "545px", opacity: "1", left: "300px"}, 1500);
        $("#mask").css('zIndex', '10'); 
        $("#mask").animate({opacity: ".7", left: "-30px"}, 500);
});

$("#site3close").click(function(){
    $("#mask").css('position', 'absolute');
    $("#site3").animate({height: "150px", width: "200px", opacity: "1", left: "30px", marginTop: "420px"}, 1500);
    $("#site3close").animate({height: "0px", width: "0px", opacity: "0", left: "30px", marginTop: "30px"}, 1500);
    $("#site3caption").animate({height: "0px", width: "0px", opacity: "0", left: "30px"}, 1500);
    $("#mask").css('zIndex', '-10'); 
    $("#mask").animate({opacity: "0", left: "30px"}, 500);
});

$("#site4img").click(function(){
        $("#mask").css('position', 'fixed');
        $("#site4").animate({height: "400px", width: "600px", opacity: "1", left: "400px", marginTop: scrollDown}, 1500);
        $("#site4close").animate({height: "40px", width: "40px", opacity: "1", left: "800px", marginTop: "30px"}, 1500);
        $("#site4caption").animate({height: "200px", width: "545px", opacity: "1", left: "300px"}, 1500);
        $("#mask").css('zIndex', '10'); 
        $("#mask").animate({opacity: ".7", left: "-30px"}, 500);
});

$("#site4close").click(function(){
    $("#mask").css('position', 'absolute');
    $("#site4").animate({height: "150px", width: "200px", opacity: "1", left: "30px", marginTop: "590px"}, 1500);
    $("#site4close").animate({height: "0px", width: "0px", opacity: "0", left: "30px", marginTop: "30px"}, 1500);
    $("#site4caption").animate({height: "0px", width: "0px", opacity: "0", left: "30px"}, 1500);
    $("#mask").css('zIndex', '-10'); 
    $("#mask").animate({opacity: "0", left: "30px"}, 500);
});

$("#site5img").click(function(){
        $("#mask").css('position', 'fixed');
        $("#site5").animate({height: "400px", width: "600px", opacity: "1", left: "400px", marginTop: scrollDown}, 1500);
        $("#site5close").animate({height: "40px", width: "40px", opacity: "1", left: "800px", marginTop: "30px"}, 1500);
        $("#site5caption").animate({height: "200px", width: "545px", opacity: "1", left: "300px"}, 1500);
        $("#mask").css('zIndex', '10'); 
        $("#mask").animate({opacity: ".7", left: "-30px"}, 500);
});

$("#site5close").click(function(){
    $("#mask").css('position', 'absolute');
    $("#site5").animate({height: "150px", width: "200px", opacity: "1", left: "30px", marginTop: "760px"}, 250);
    $("#site5close").animate({height: "0px", width: "0px", opacity: "0", left: "30px", marginTop: "30px"}, 250);
    $("#site5caption").animate({height: "0px", width: "0px", opacity: "0", left: "30px"}, 250);
    $("#mask").css('zIndex', '-10'); 
    $("#mask").animate({opacity: "0", left: "30px"}, 500);
});

$("#site6img").click(function(){
        $("#mask").css('position', 'fixed');
        $("#site6").animate({height: "400px", width: "600px", opacity: "1", left: "400px", marginTop: scrollDown}, 1500);
        $("#site6close").animate({height: "40px", width: "40px", opacity: "1", left: "800px", marginTop: "30px"}, 1500);
        $("#site6caption").animate({height: "200px", width: "545px", opacity: "1", left: "300px"}, 1500);
        $("#mask").css('zIndex', '10'); 
        $("#mask").animate({opacity: ".7", left: "-30px"}, 500);
});

$("#site6close").click(function(){
    $("#mask").css('position', 'absolute');
    $("#site6").animate({height: "150px", width: "200px", opacity: "1", left: "30px", marginTop: "930px"}, 1500);
    $("#site6close").animate({height: "0px", width: "0px", opacity: "0", left: "30px", marginTop: "30px"}, 1500);
    $("#site6caption").animate({height: "0px", width: "0px", opacity: "0", left: "30px"}, 1500);
    $("#mask").css('zIndex', '-10'); 
    $("#mask").animate({opacity: "0", left: "30px"}, 500);
});

$("#site7img").click(function(){
        $("#mask").css('position', 'fixed');
        $("#site7").animate({height: "400px", width: "600px", opacity: "1", left: "400px", marginTop: scrollDown}, 1500);
        $("#site7close").animate({height: "40px", width: "40px", opacity: "1", left: "800px", marginTop: "30px"}, 1500);
        $("#site7caption").animate({height: "200px", width: "545px", opacity: "1", left: "300px"}, 1500);
        $("#mask").css('zIndex', '10'); 
        $("#mask").animate({opacity: ".7", left: "-30px"}, 500);
});

$("#site7close").click(function(){
    $("#mask").css('position', 'absolute');
    $("#site7").animate({height: "150px", width: "200px", opacity: "1", left: "30px", marginTop: "1180px"}, 1500);
    $("#site7close").animate({height: "0px", width: "0px", opacity: "0", left: "30px", marginTop: "30px"}, 1500);
    $("#site7caption").animate({height: "0px", width: "0px", opacity: "0", left: "30px"}, 1500);
    $("#mask").css('zIndex', '-10'); 
    $("#mask").animate({opacity: "0", left: "30px"}, 500);
});

$("#site8img").click(function(){
        $("#mask").css('position', 'fixed');
        $("#site8").animate({height: "400px", width: "600px", opacity: "1", left: "400px", marginTop: scrollDown}, 1500);
        $("#site8close").animate({height: "40px", width: "40px", opacity: "1", left: "800px", marginTop: "30px"}, 1500);
        $("#site8caption").animate({height: "200px", width: "545px", opacity: "1", left: "300px"}, 1500);
        $("#mask").css('zIndex', '10'); 
        $("#mask").animate({opacity: ".7", left: "-30px"}, 500);
});

$("#site8close").click(function(){
    $("#mask").css('position', 'absolute');
    $("#site8").animate({height: "150px", width: "200px", opacity: "1", left: "30px", marginTop: "1350px"}, 1500);
    $("#site8close").animate({height: "0px", width: "0px", opacity: "0", left: "30px", marginTop: "30px"}, 1500);
    $("#site8caption").animate({height: "0px", width: "0px", opacity: "0", left: "30px"}, 1500);
    $("#mask").css('zIndex', '-10'); 
    $("#mask").animate({opacity: "0", left: "30px"}, 500);
});

$("#site9img").click(function(){
        $("#mask").css('position', 'fixed');
        $("#site9").animate({height: "400px", width: "600px", opacity: "1", left: "400px", marginTop: scrollDown}, 1500);
        $("#site9close").animate({height: "40px", width: "40px", opacity: "1", left: "800px", marginTop: "30px"}, 1500);
        $("#site9caption").animate({height: "200px", width: "545px", opacity: "1", left: "300px"}, 1500);
        $("#mask").css('zIndex', '10'); 
        $("#mask").animate({opacity: ".7", left: "-30px"}, 500);
});

$("#site9close").click(function(){
    $("#mask").css('position', 'absolute');
    $("#site9").animate({height: "150px", width: "200px", opacity: "1", left: "30px", marginTop: "1520px"}, 1500);
    $("#site9close").animate({height: "0px", width: "0px", opacity: "0", left: "30px", marginTop: "30px"}, 1500);
    $("#site9caption").animate({height: "0px", width: "0px", opacity: "0", left: "30px"}, 1500);
    $("#mask").css('zIndex', '-10'); 
    $("#mask").animate({opacity: "0", left: "30px"}, 500);
});