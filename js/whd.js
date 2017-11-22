$(document).ready(function(){
    $("#paginas").load("./html/p1.html");
    $("a#nosotros").click(function (e) { 
       e.preventDefault();
        $("#separador").load("./html/nosotros.html");
    });
    $("a#contacto").click(function (e) { 
        e.preventDefault();
         $("#separador").load("./html/contacto.html");
     });
    $("#paginador").bootpag({total:5,page:1}).on("page",function(event,num){
        $("#paginas").fadeOut(500).hide().load("./html/p"+num+".html").fadeIn(500);
        //.fadeOut(1000).hide().slideUp(300).slideDown(300).show().fadeIn(1000);
        $(this).bootpag({total:5,maxVisible:5});
     
    });
    
   

});