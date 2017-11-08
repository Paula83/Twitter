window.onload = function(){
	var boton = document.getElementById("submit");

    /*contador carateres*/
	var mensaje = document.getElementsByClassName("mensaje")[0],
      charLeftLabel = "char-left",
      charLeft = document.getElementsByClassName(charLeftLabel)[0],
      maxChar = 140,
      maxCharWarn = 20;

  	  charLeft.innerHTML = maxChar;

  	  // Al presionar la tecla se actualiza el mensaje
  	    mensaje.onkeypress = function(){
        setTimeout(function(){
          charLeft.innerHTML = maxChar - mensaje.value.length;

          // muestra el número de caracteres que quedan
          var warnLabel = mensaje.value.length >= maxChar - maxCharWarn ? " warning" : "";
          charLeft.className = charLeftLabel + warnLabel;
        }, 1); 
      };

	     boton.addEventListener("click", function(){

		//Texto ingresado
		var mensaje = document.getElementById("mensaje").value;
	
		
		//Limpiar area
		document.getElementById("mensaje").value = "";

		//contenedor vacio - donde se incluye el mensaje
		var container = document.getElementById("container");
		var nodo = document.createTextNode(mensaje);
		var parrafo = document.createElement("p");

		parrafo.appendChild(nodo);
		container.appendChild(parrafo);

		//div que contiene mensaje
		var newMensaje= document.createElement("div");
		

		//validación mensaje 
		if(mensaje.length == 0 || mensaje == null){
			alert("ingresa mensaje");
			return false;
		}   

	})

}