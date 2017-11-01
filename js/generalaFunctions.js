var cantDados = 5;
var jugador = 1; //  N° del jugador
var tirada = []; // Array donde se guardan los valores de los dados que van saliendo.
var puntajeP1 = 0;
var puntajeP2 = 0;
var cantTiros = 0; //  Cantidad de veces que puede arrojar los dados

//  VISUALIZACIÓN DE LOS PUNTAJES
function mostrarPuntajes(puntajeJuego) {
    if(jugador==1){
        puntajeP1 = puntajeP1 + puntajeJuego;
    }else{
        puntajeP2 = puntajeP2 + puntajeJuego;
    }
    $("table tbody tr:last-of-type td:nth-of-type(1)").html(puntajeP1);
    $("table tbody tr:last-of-type td:nth-of-type(2)").html(puntajeP2);
    

}

//  HABILITAR BOTONES
function comenzar() {
    $("#botonTirar").attr("disabled", false);
    $("#botonReset").attr("disabled", false);
    $("#player1").addClass("enJuego");
    $("#Info").html("Comienza tirando el jugador " + jugador);
}

//  CAMBIOS DE TURNO ENTE JUGADORES
function cambiarTurno() {
    var a;
    if (jugador === 1) {
        $("#player1").removeClass("enJuego");
        $("#player2").addClass("enJuego");
        jugador = 2;
        $("#Info").html("Turno jugador: " + jugador);
        $("#dado" + a).removeClass("seleccionado");
    } else {
        $("#player2").removeClass("enJuego");
        $("#player1").addClass("enJuego");
        jugador = 1;
        $("#Info").html("Turno jugador: " + jugador);
         $("#dado" + a).removeClass("seleccionado");
    }
    
    //Vaciar los dados
    for (var i = 0; i < cantDados; i++) {
        $("#dado" + (i + 1) + " img").attr("src", "img/0.jpg");
        $("#dado" + a).removeClass("seleccionado");
        $("#dado" + (i + 1) + " img").removeClass("seleccionado");
    }
    //ganador();
    cantTiros=0;
    $("#dado" + (i + 1) + " img").removeClass("seleccionado");
}

//  TIRAR DADOS Y ASIGNAR LAS IMAGENES
function tirarDados() {
    for (var i = 0; i < cantDados; i++) {
        if (!$("#dado" + (i + 1)).hasClass("seleccionado")) {
            var numero = (Math.floor(Math.random() * 6) + 1);
            tirada[i] = numero;
            $("#dado" + (i + 1) + " img").attr("src", "img/" + numero + ".jpg");
            console.log("Numero: " + tirada[i] + " Dado: " + numero)
        }
    }
    cantTiros++;
    checkJugada();
    // Sumar los cantTiros
    console.log("Cantidad de tiros: " + cantTiros);
    if (cantTiros >= 3) {
        $("#botonTirar").attr("disabled", true);
    }
    $("#Info").html("Turno jugador: " + jugador);
};

//  JUEGOS DE LOS NUMEROS DEL 1 - 6
function numb(a){
	var cantidad = 0;
	for (i=0; i<tirada.length; i++){
		if(tirada[i]==a){
			cantidad++;
		}
	}
    console.log("Suma del numero seleccionado: " + a*cantidad);
	$("table tbody tr:nth-of-type("+a+") td:nth-of-type("+(jugador+1)+")").html(a*cantidad);
    mostrarPuntajes(a*cantidad);
	cambiarTurno();
}

//  SELECCION DE LOS DADOS
function dados(a) {
    if ($("#dado" + a).attr("src") != "img/0.jpg") {
        if ($("#dado" + a).hasClass("seleccionado")) {
            $("#dado" + a).css("backgroundcolor", "red");
            $("#dado" + a).removeClass("seleccionado");
        } else {
            $("#dado" + a).css("backgroundcolor", "pink");
            $("#dado" + a).addClass("seleccionado");
        }
    }
};

// POKER
var juegoPoker = /1{4}[23456]|1{1}2{4}|1{1}3{4}|1{1}4{4}|1{1}5{4}|1{1}6{4}|2{4}[3456]|2{1}3{4}|2{1}4{4}|2{1}5{4}|2{1}6{4}|3{4}[456]|3{1}4{4}|3{1}5{4}|3{1}6{4}|4{4}[56]|4{1}5{4}|4{1}6{4}|5{4}[6]|5{1}6{4}/g;

//  GENERALA
var juegoGenerala = /1{5}|2{5}|3{5}|4{5}|5{5}|6{5}/g;

// FULL
var juegoFull = /(1{3}(2{2}|3{2}|4{2}|5{2}|6{2}))|(1{2}(2{3}|3{3}|4{3}|5{3}|6{3}))|(2{3}(3{2}|4{2}|5{2}|6{2}))|(2{2}(3{3}|4{3}|5{3}|6{3}))|(3{3}(4{2}|5{2}|6{2}))|(3{2}(4{3}|5{3}|6{3}))|(4{3}(5{2}|6{2}))|(4{2}(5{3}|6{3}))|5{3}6{2}|5{2}6{3}/g;

// ESCALERA
var juegoEscalera = /(12345)|(23456)|(13456)/g;

//  ANUNCIAR EL GANADOR
function ganador() {
    if (puntajeP1 > puntajeP2) {
        $("#marcador #info").html("El ganador es el jugador 1");
        $("#botonTirar").attr("disabled", true);
        $("#player1").addClass("enJuego");
        $("#player2").removeClass("enJuego");
    } else if (puntajeP2 > puntajeP1) {
        $("#marcador #info").html("El ganador es el jugador 2");
        $("#botonTirar").attr("disabled", true);
        $("#player1").removeClass("enJuego");
        $("#player2").addClass("enJuego");
    }
}

//  RESETEAR EL JUEGO
function resetGame() {
    $("table tbody tr td").html();
    $("botonIniciar").attr("disabled", false);
    $("botonTirar").removeAttr("disabled", "disabled");
    $("botonReset").attr("disabled", true);
    $("#player2").removeClass("enJuego");
    $("#player1").addClass("enJuego");
    $("#Info").html("");
    tirada = [];
    puntajeP1 = 0;
    puntajeP2 = 0;
    jugador = 1;
    cantTiros = 0;
    for (var i = 0; i < cantDados; i++) {
        $("#dado" + (i + 1) + " img").attr("src", "img/0.jpg");
        $("#dado" + (i + 1) + " img").removeClass("seleccionado");
    }
};

//  PRIMER METODO
function checkJugada() {
    //ordeno
    var tiradaOrdenada = tirada.slice();
    tiradaOrdenada.sort(function (a, b) {
        return a - b;
    });
    
    console.log("TiradaOrdenada: " + tiradaOrdenada);
    console.log("Tirada: " + tirada);
    
    var generala = hizoJuego(juegoGenerala,tiradaOrdenada);
    var poker = hizoJuego(juegoPoker,tiradaOrdenada);
    var full = hizoJuego(juegoFull,tiradaOrdenada);
    var escalera = hizoJuego(juegoEscalera,tiradaOrdenada);
    
    console.log("Generala: " + generala + "\n" + "Poker: " + poker + "\n" + "Full: " + full + "\n" + "Escalera: " + escalera);
    
    if(generala) {
        $("table tbody tr:nth-of-type(10) td:nth-of-type(" + (jugador + 1) + ")").html(50);
        mostrarPuntajes(50);
        cambiarTurno();
    }
    else if(poker) {
        if(cantTiros===1){
            $("table tbody tr:nth-of-type(9) td:nth-of-type(" + (jugador + 1) + ")").html(45);
            mostrarPuntajes(45);
            cambiarTurno();
        }
        else{
        $("table tbody tr:nth-of-type(9) td:nth-of-type(" + (jugador + 1) + ")").html(40);
        mostrarPuntajes(40);
        cambiarTurno();
    }}
    else if(full)
    {
        if(cantTiros===1){
            $("table tbody tr:nth-of-type(8) td:nth-of-type(" + (jugador + 1) + ")").html(35);
            mostrarPuntajes(35);
            cambiarTurno();
        }else{
        $("table tbody tr:nth-of-type(8) td:nth-of-type(" + (jugador + 1) + ")").html(30);
        mostrarPuntajes(30);
        cambiarTurno();
    }}
    else if(escalera)
    {
        if(cantTiros===1){
            $("table tbody tr:nth-of-type(7) td:nth-of-type(" + (jugador + 1) + ")").html(25);
            mostrarPuntajes(25);
            cambiarTurno();
        }else{
        $("table tbody tr:nth-of-type(7) td:nth-of-type(" + (jugador + 1) + ")").html(20);
        mostrarPuntajes(20);
        cambiarTurno();
    }}
}

function hizoJuego(juego,tiro) {

    if (tiro.join("").match(juego) != null) {
        return true;
        return true;
    }
    return false;
}

// MENU DE PUNTAJES DESPLEGABLE VERSION UNO
$(document).ready(function () {
    $("#tablaPuntajes").addClass("noDisp");
    $("#puntajes").click(function () {
        $("#tablaPuntajes").toggle();
    });
});

//  MENU DESPLEGABLE NUEVO SLIDE
function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
    $("container").addClass("overlay");
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    $("#container").removeClass("overlay");
}