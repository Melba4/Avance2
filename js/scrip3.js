 $(document).ready(function(){ 
 $(document).on( "click", "#btnformG", function(){

        /*Captura de datos escrito en los inputs*/        
        var nom = $("#nombre").val();
        var apel = $("#apellido").val();
        var mail = $("#email").val();
        var com = $("#Comen").val();
        var sex =  $("input:radio[name=sexo]:checked").val();
        $(":text").each(function(){  
            $($(this)).val('');
            });   
        
     
        localStorage["Nombre"] = nom
        localStorage["Apellido"] = apel
        localStorage["Correo"] =  mail
        localStorage["Comentario"] = com
        localStorage["Sexo"] = sex
       
    });
$(document).on("click","#btnCargar",function(){               
        /*Obtener datos almacenados*/
        /*alert("Entre al cargar");
        var nombre = localStorage["Nombre"];
        var apellido = localStorage["Apellido"];
        var correo = localStorage["Correo"];      
        var comentario = localStorage["Comentario"];
        var sexo =  localStorage["Sexo"];
         alert(nombre+apellido+correo+comentario+sexo);      
        $("#nombre").html('nombre');
        $("#apellido").html('apellido');
        $("#correo").html('correo');
        $("#comentario").html('comentario');
        $("#sexo").html();*/ 
        var nombre = localStorage["Nombre"];
        var apellido = localStorage["Apellido"];
        var correo = localStorage["Correo"];      
        var comentario = localStorage["Comentario"];
        var sexo =  localStorage["Sexo"]; 
        $("#tabla").css("display", "block");
                    var n = $('tr:last td', $("#tabla")).length;
                    var tds = '<tr>';
                    for(var i = 0; i < n; i++)
                    {
                    tds += '<td>..</td>';
                    }
                    tds += '</tr>';
                    //$("#tabla").append(tds);
                    $('#tabla').append('<tr><td>'+nombre+'</td>'+'<td>'+apellido+'</td>'+'<td>'+correo+'</td>'+'<td>'+comentario+'</td>'+'<td>'+sexo+'</td></tr>');
    });  
$(document).on("click","#btnEliminar",function(){                                                         
        /*Eliminar datos almacenados*/
        localStorage.removeItem("Nombre");
        localStorage.removeItem("Apellido");
        localStorage.removeItem("Correo");
        localStorage.removeItem("Comentario");
        localStorage.removeItem("Sexo"); 

        /*Limpiar datos almacenados*/       
        document.getElementById("nombre").innerHTML = "";
        document.getElementById("apellido").innerHTML = "";
        document.getElementById("correo").innerHTML = "";
        document.getElementById("comentario").innerHTML = "";
        document.getElementById("sexo").innerHTML = "";
        
    });  
});
 