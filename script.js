//Agregar datos personales a los parrafos correspondientes
var parrafos = document.getElementsByTagName('p');
for(var i=0; i<parrafos.length; i++){
    if(parrafos[i].textContent == "Nombre: "){
        parrafos[i].innerHTML += "Josué Omar Machucho Avilés";
    }else if(parrafos[i].textContent == "Número de control: "){
        parrafos[i].innerHTML += "17390346";
    }       
}

//Agregar personajes con input
function agregarPersonajes(){    
    var perso = document.getElementById("personaje").value;
    var listaper = document.getElementById("pers");
    if(perso == null || perso.length == 0 || /^\s+$/.test(perso)){
        return false;
    }else{                
        var element = document.createElement("li");
        var texto = document.createTextNode(perso);
        element.appendChild(texto);        
        listaper.appendChild(element);
        document.getElementById("personaje").value= "";
    }     
}
//Insertar mis personajes con DOM(directamente después del 3er parrafo)
var lista = document.createElement('ul');
lista.setAttribute('id', "pers");
var per1 = document.createElement("li");
tper1 = document.createTextNode("Chespirito");
per1.appendChild(tper1);
lista.appendChild(per1);
var per2 = document.createElement("li");
tper2 = document.createTextNode("Toretto");
per2.appendChild(tper2);
lista.appendChild(per2);
var tercer = document.getElementsByTagName("p")[2];
tercer.insertAdjacentElement("afterend", lista);

//Arreglo de peliculas
var pelisFav = ["Rápido y Furioso", "Need for Speed", "Forrest Gump"];
var listap = document.getElementById('pelis');
for(var i=0; i<pelisFav.length; i++){
    var elemento = document.createElement("li");
    var text = document.createTextNode(pelisFav[i]);
    elemento.appendChild(text);
    listap.appendChild(elemento);
}

//Elementos de lista seleccionados
var list = document.querySelector('ol');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('select');
  }
}, false);

//Eliminar elementos
function eliminar(){
    var seleccionados = document.getElementsByClassName("select");    
    for (var i = seleccionados.length-1; i >= 0; i--) {
        seleccionados[i].parentElement.removeChild(seleccionados[i]);
    }
   
}


    
    
