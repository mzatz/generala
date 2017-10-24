var cantDados = 5;
var jugador = 1;    //  N° del jugador
var tirada = [];    // Array donde se guardan los valores de los dados que van saliendo.
var puntajeP1 = 0;
var puntajeP2  = 0;
var cantTiros = 0;  //  Cantidad de veces que puede arrojar los dados

//  VISUALIZACIÓN DE LOS PUNTAJES
$("table tbody tr:last-of-type td:nth-of-type(1)").html(puntajeP1);
$("table tbody tr:last-of-type td:nth-of-type(2)").html(puntajeP2);

//  HABILITAR BOTONES
function comenzar(){
    $("#botonTirar").attr("disabled",false);
    $("#botonReset").attr("disabled",false);
    $("#player1").addClass("enJuego");
    $("#Info").html("Comienza tirando el jugador " + jugador);
}

//  CAMBIOS DE TURNO ENTE JUGADORES
    function cambiarTurno() {
        if(jugador === 1) {
        $("#player1").removeClass("enJuego");
		$("#player2").addClass("enJuego");
        jugador = 2;
        $("#Info").html("Turno jugador: " + jugador);  
    }else{
        $("#player2").removeClass("enJuego");
        $("#player1").addClass("enJuego");
        jugador = 1;
        $("#Info").html("Turno jugador: " + jugador);
    }
        //Vaciar los dados
        for( var i=0 ; i<cantDados ; i++ ){
        $("#dado" + (i+1) + " img").attr("src","img/0.jpg");
    }
}

//  TIRAR DADOS Y ASIGNAR LAS IMAGENES
    function tirarDados() {
        for( var i=0 ; i<cantDados ; i++ ){
            var numero = (Math.floor(Math.random()*6)+1);
            tirada[i] = numero;
            $("#dado"+ (i+1) +" img").attr("src","img/"+numero+".jpg");
        }cantTiros++;
        //checkJugada();
        // Sumar los cantTiros
        console.log("Cantidad de tiros: " + cantTiros);
        if(cantTiros>=3){
             $("#botonTirar").attr("disabled",true);
        }
    };

//  SELECCION DE LOS DADOS
/*function dados(a){
	if($("contenedor dados img:nth-of-type("+a+")").attr("src")!="img/0.jpg"){ console.log("El dado no es 0")
		if($("img:nth-of-type("+a+")").hasClass("seleccionado")){console.log("Si esta seleccionado")
			$("img:nth-of-type("+a+")").css("backgroundcolor","red");
			$("img:nth-of-type("+a+")").removeClass("seleccionado");
		} else { console.log("No esta seleccionado")
			$("img:nth-of-type("+a+")").css("backgroundcolor","pink");
			$("img:nth-of-type("+a+")").addClass("seleccionado");
		}
	}
};*/

function dados(a){
	if($("contenedor dados img:nth-of-type("+a+")").attr("src")!="img/0.jpg"){ console.log("El dado no es 0")
		if($("img:nth-of-type("+a+")").hasClass("seleccionado")){console.log("Si esta seleccionado")
			$("img:nth-of-type("+a+")").css("backgroundcolor","red");
			$("img:nth-of-type("+a+")").removeClass("seleccionado");
		} else { console.log("No esta seleccionado")
			$("img:nth-of-type("+a+")").css("backgroundcolor","pink");
			$("img:nth-of-type("+a+")").addClass("seleccionado");
		}
	}
};

/*
//  ANOTAR LA JUGADA
function anotarTotales(){
	$("table tbody tr:last-of-type td:nth-of-type("+(jugador)+")").html(puntajeP1);
}
      
//  JUGADAS
function numeros(a){
	var repetidos = 0;
	for(i=0; i<tirada.length; i++){
		if(tirada[i]==a){
			repetidos++;
		}
	}*/

//  ESCALERA
function escalera() {
    var juegoEscalera = "(1|2|3|4|5) | (2|3|4|5|6) | (1|3|4|5|6)";
    // segun fabian = /12345|23456|34561/g;
    //La g (global) es para que siga preguntando
    var puntoEscalera = "table tbody tr:nth-of-type(8) td:nth-of-type('+jugador+')";
    
    if(cantTiros==1){
			puntoEscalera.html(25);
		} else if(cantTiros>1 && cantTiros<=3){
            puntoEscalera.html(20);
        } else {
            puntoEscalera.html(0);
        }
    };


//  FULL
var juegoFull = "(1{3}2{2})|(1{3}3{2})|(1{3}4{2})|(1{3}5{2})|(1{3}6{2})|(2{3}1{2})|(2{3}3{2})|(2{3}4{2})|(2{3}5{2})|(2{3}6{2})|(3{3}1{2})|(3{3}2{2})|(3{3}4{2})|(3{3}5{2})|(3{3}6{2})|(4{3}1{2})|(4{3}2{2})|(4{3}3{2})|(4{3}5{2})|(4{3}6{2})|(5{3}1{2})|(5{3}2{2})|(5{3}3{2})|(5{3}4{2})|(5{3}6{2})|(6{3}1{2})|(6{3}2{2})|(6{3}3{2})|(6{3}4{2})|(6{3}5{2})|(1{2}2{3})|(1{2}3{3})|(1{2}4{3})|(1{2}5{3})|(1{2}6{3})|(2{2}1{3})|(2{2}3{3})|(2{2}4{3})|(2{2}5{3})|(2{2}6{3})|(3{2}1{3})|(3{2}2{3})|(3{2}4{3})|(3{2}5{3})|(3{2}6{3})|(4{2}1{3})|(4{2}2{3})|(4{2}3{3})|(4{2}5{3})|(4{2}6{3})|(5{2}1{3})|(5{2}2{3})|(5{2}3{3})|(5{2}4{3})|(5{2}6{3})|(6{2}1{3})|(6{2}2{3})|(6{2}3{3})|(6{2}4{2})|(6{2}5{3})";

//  POKER

//var juegoPoker = "1{4}|2{4}|3{4}|4{4}|5{4}|6{4}";
//segun fabian 
var juegoPoker = /1{4}[23456] | 1{1}2{4} | 1{1}3{4} | 1{1}4{4} | 1{1}5{4} | 1{1}6{4} | 2{4}[3456] | 2{1}3{4} | 2{1}4{4} | 2{1}5{4} | 2{1}6{4} | 3{4}[456] | 3{1}4{4} | 3{1}5{4} | 3{1}6{4} | 4{4}[56] | 4{1}5{4} | 4{1}6{4} | 5{4}[6] | 5{1}6{4}/g;

//  GENERALA
var juegoGenerala = /1{5} | 2{5} | 3{5} | 4{5} | 5{5} | 6{5}/g;
//var juegoGenerala = "1{5} | 2{5} | 3{5} | 4{5} | 5{5} | 6{5}";

//  ANUNCIAR EL GANADOR
    function ganador() {
        if(puntajeP1>puntajeP2){
            $("h1").html("El ganador es el jugador 1");
            $("#botonTirar").attr("disabled", true);
            $("#player1").addClass("enJuego");
            $("#player2").removeClass("enJuego");
        }else if(puntajeP2>puntajeP1){
            $("h1").html("El ganador es el jugador 2");
            $("#botonTirar").attr("disabled",true);
            $("#player1").removeClass("enJuego");
            $("#player2").addClass("enJuego");
        }
    }
    
//  RESETEAR EL JUEGO
function resetGame(){
    $("table tbody tr td").html();
    //$("table tbody tr:last-of-type th td").html(puntajeP2);
    //$("h1").html("");
    $("botonIniciar").attr("disabled",false);
    $("botonTirar").removeAttr("disabled","disabled");
    $("botonReset").attr("disabled",true);
    $("#player2").removeClass("enJuego");
    $("#player1").addClass("enJuego");
    //$("#Info").html("");
    tirada = [];
    puntajeP1 = 0;
    puntajeP2  = 0;
    jugador = 1;
    for( var i=0 ; i<cantDados ; i++ ){
        $("#dado" + (i+1) + " img").attr("src","img/0.jpg");
    }
};

// Puntajes desplegable 
$(document).ready(function() {
    $("#tablaPuntajes").addClass("noDisp");
    $("#puntajes").click(function () {
    $("#tablaPuntajes").toggle();
  });
  });

//  PRIMER METODO
/*
function checkJugada()
{
    //ordeno
    tirada.sort(function(a,b){ return a-b;});
    
    //generala
    for(i = 1; i < 6; i++)
    {
        
        var check = tirada.join("").match(i.toString() + "{5}");
        if(check != null)
        {
            console.log("hizo generala");
        }
    }
    
    //poker
    for(i = 1; i < 6; i++)
    {
        
        var check = tirada.join("").match(i.toString() + "{4}");
        if(check != null)
        {
            console.log("hizo poker");
        }
    }
    
    //full
    for(i = 1; i < 6; i++)
    {
        for(j = 1; j < 6; j++)
        {
            var checkFullUno = tirada.join("").match(i.toString() + "{3}" + j.toString() + "{2}");
            var checkFullDos = tirada.join("").match(i.toString() + "{2}" + j.toString() + "{3}");
        }
        if(checkFullUno != null || checkFullDos != null)
        {
            console.log("hizo full");
        }
    }
}*/