$(document).ready(function(){
    var test3=document.getElementById("p1_1");
    $("a#nosotros").click(function (e) { 
       e.preventDefault();
        $("#separador").load("./html/nosotros.html");
    });
    $("a#contacto").click(function (e) { 
        e.preventDefault();
         $("#separador").load("./html/contacto.html");
     });
    /* 
    $(".hojaElegida").click(function(){
        console.log(this.id);
    });*/

    $(document).on("click",".hojaElegida", function (e) {
        e.preventDefault();
        var x=this.id;
        console.log(x);
        $("#separador").load("./html/productos/"+x+".html");
        
    });

   /******Paginador */
$("#paginador").bootpag({total:5,page:1}).on("page",function(event,num){
    $("#paginas").fadeOut(500).hide().load("./html/p"+num+".html").fadeIn(500);
    $(this).bootpag({total:5,maxVisible:5}).fadeOut(500).hide().fadeIn(500);
  /**Fin de Paginador**/   
});


/*
$(document).on("click","#p1_1", function(e){
    /*la funcion click funciona cuando los elementos del DOM han sido registrados, esto quiere decir
    que como las demás hojas del paginador están a la espera de una llamada en función del paginador
    no es posible que click los llame pues no existen en el registro del DOM, para ello usamos la funcion
    on, que va funcionar cada vez que exista un rastos del id en el dom*/
 
 /*   e.preventDefault();
    $("#separador").load("./html/productos/p1_1.html");
    console.log(test3);
});*/


});
