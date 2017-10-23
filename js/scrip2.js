$(document).ready(function(){
	//Ahuachapan
	$("#SV-AH").mouseenter(function(e){
	    $("#pasarahua").css("left", e.pageX + 5);
	    $("#pasarahua").css("top", e.pageY + 5);
	    $("#pasarahua").css("display", "block");
	      	
	 $("#SV-AH").mouseleave(function(e){
	    $("#pasarahua").css("display", "none");
	   	});
	});
   
	//Cabañas
	$("#SV-CA").mouseenter(function(e){
	    $("#pasarcabanas").css("left", e.pageX + 5);
	    $("#pasarcabanas").css("top", e.pageY + 5);
	    $("#pasarcabanas").css("display", "block");
	      	
	 $("#SV-CA").mouseleave(function(e){
	    $("#pasarcabanas").css("display", "none");
	   	});
	});

   	//Chalatenando
	$("#SV-CH").mouseenter(function(e){
	    $("#pasarchalatenango").css("left", e.pageX + 5);
	    $("#pasarchalatenango").css("top", e.pageY + 5);
	    $("#pasarchalatenango").css("display", "block");
	      	
	 $("#SV-CH").mouseleave(function(e){
	    $("#pasarchalatenango").css("display", "none");
	   	});
	});

	//Cuscatlan
	$("#SV-CU").mouseenter(function(e){
	    $("#pasarcuscatlan").css("left", e.pageX + 5);
	    $("#pasarcuscatlan").css("top", e.pageY + 5);
	    $("#pasarcuscatlan").css("display", "block");
	      	
	 $("#SV-CU").mouseleave(function(e){
	    $("#pasarcuscatlan").css("display", "none");
	   	});
	});

	//La Libertad
	$("#SV-LI").mouseenter(function(e){
	    $("#pasarlalibertad").css("left", e.pageX + 5);
	    $("#pasarlalibertad").css("top", e.pageY + 5);
	    $("#pasarlalibertad").css("display", "block");
	      	
	 $("#SV-LI").mouseleave(function(e){
	    $("#pasarlalibertad").css("display", "none");
	   	});
	});

	//Morazan
	$("#SV-MO").mouseenter(function(e){
	    $("#pasarmorazan").css("left", e.pageX + 5);
	    $("#pasarmorazan").css("top", e.pageY + 5);
	    $("#pasarmorazan").css("display", "block");
	      	
	 $("#SV-MO").mouseleave(function(e){
	    $("#pasarmorazan").css("display", "none");
	   	});
	});
	
	//La Paz
	$("#SV-PA").mouseenter(function(e){
	    $("#pasarlapaz").css("left", e.pageX + 5);
	    $("#pasarlapaz").css("top", e.pageY + 5);
	    $("#pasarlapaz").css("display", "block");
	      	
	 $("#SV-PA").mouseleave(function(e){
	    $("#pasarlapaz").css("display", "none");
	   	});
	});
	
	//Santa Ana
	$("#SV-SA").mouseenter(function(e){
	    $("#pasarsantaana").css("left", e.pageX + 5);
	    $("#pasarsantaana").css("top", e.pageY + 5);
	    $("#pasarsantaana").css("display", "block");
	      	
	 $("#SV-SA").mouseleave(function(e){
	    $("#pasarsantaana").css("display", "none");
	   	});
	});
	
	//San Miguel
	$("#SV-SM").mouseenter(function(e){
	    $("#pasarsanmiguel").css("left", e.pageX + 5);
	    $("#pasarsanmiguel").css("top", e.pageY + 5);
	    $("#pasarsanmiguel").css("display", "block");
	      	
	 $("#SV-SM").mouseleave(function(e){
	    $("#pasarsanmiguel").css("display", "none");
	   	});
	});
	
	//Sonsonate
	$("#SV-SO").mouseenter(function(e){
	    $("#pasarsonsonate").css("left", e.pageX + 5);
	    $("#pasarsonsonate").css("top", e.pageY + 5);
	    $("#pasarsonsonate").css("display", "block");
	      	
	 $("#SV-SO").mouseleave(function(e){
	    $("#pasarsonsonate").css("display", "none");
	   	});
	});
	
	//San Salvador
	$("#SV-SS").mouseenter(function(e){
	    $("#pasarsansalvador").css("left", e.pageX + 5);
	    $("#pasarsansalvador").css("top", e.pageY + 5);
	    $("#pasarsansalvador").css("display", "block");
	      	
	 $("#SV-SS").mouseleave(function(e){
	    $("#pasarsansalvador").css("display", "none");
	   	});
	});
	
	//San Vicente
	$("#SV-SV").mouseenter(function(e){
	    $("#pasarsanvicente").css("left", e.pageX + 5);
	    $("#pasarsanvicente").css("top", e.pageY + 5);
	    $("#pasarsanvicente").css("display", "block");
	      	
	 $("#SV-SV").mouseleave(function(e){
	    $("#pasarsanvicente").css("display", "none");
	   	});
	});
	
	//La Union
	$("#SV-UN").mouseenter(function(e){
	    $("#pasarlaunion").css("left", e.pageX + 5);
	    $("#pasarlaunion").css("top", e.pageY + 5);
	    $("#pasarlaunion").css("display", "block");
	      	
	 $("#SV-UN").mouseleave(function(e){
	    $("#pasarlaunion").css("display", "none");
	   	});
	});
	
	//Usulutan
	$("#SV-US").mouseenter(function(e){
	    $("#pasarusulutan").css("left", e.pageX + 5);
	    $("#pasarusulutan").css("top", e.pageY + 5);
	    $("#pasarusulutan").css("display", "block");
	      	
	 $("#SV-US").mouseleave(function(e){
	    $("#pasarusulutan").css("display", "none");
	   	});
	});
});


$(document).ready(function(){
	$(document).on( "click", "#SV-AH", function(){
		$(location).attr('href','Ahuachapan.html'); 
	});
	$(document).on( "click", "#SV-CA", function(){
		$(location).attr('href','Cabañas.html');
	});
	$(document).on( "click", "#SV-CH", function(){
		$(location).attr('href','Chalatenango.html');
	});
	$(document).on( "click", "#SV-CU", function(){
		$(location).attr('href','Cuscatlan.html');
	});
	$(document).on( "click", "#SV-LI", function(){
		$(location).attr('href','LaLibertad.html');
	});
	$(document).on( "click", "#SV-MO", function(){
		$(location).attr('href','Morazan.html');
	});
	$(document).on( "click", "#SV-PA", function(){
		$(location).attr('href','LaPaz.html');
	});
	$(document).on( "click", "#SV-SA", function(){
		$(location).attr('href','SantaAna.html');
	});
	$(document).on( "click", "#SV-SM", function(){
		$(location).attr('href','SanMiguel.html');
	});
	$(document).on( "click", "#SV-SO", function(){
		$(location).attr('href','Sonsonate.html');
	});
	$(document).on( "click", "#SV-SS", function(){
		$(location).attr('href','SanSalvador.html');
	});
	$(document).on( "click", "#SV-SV", function(){
		$(location).attr('href','SanVicente.html');
	});
	$(document).on( "click", "#SV-UN", function(){
		$(location).attr('href','LaUnion.html');
	});
	$(document).on( "click", "#SV-US", function(){
		$(location).attr('href','Usulutan.html');
	});
});