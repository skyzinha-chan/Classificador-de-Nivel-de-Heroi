var minhaDiv = document.querySelector( '.minhaDiv' );
var meuPopup = document.querySelector( '.meuPopup' );
var formulario = document.querySelector( '.formulario' );

minhaDiv.addEventListener( 'mouseover', function () {
    this.style.backgroundColor = 'rgba(255, 0, 144, 0.36)';
} );

minhaDiv.addEventListener( 'mouseout', function () {
    this.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
} );

window.onload = function () {
    meuPopup.style.display = 'block';
};

formulario.addEventListener( 'submit', function ( event ) {
    event.preventDefault();
    var nome = document.getElementById( 'nome' ).value;
    var xp = parseInt( document.getElementById( 'xp' ).value );

    if ( !nome || isNaN( xp ) ) {
        alert( 'Insira as informações abaixo:' );
        return;
    }

    var nivel;
    if ( xp < 1000 ) nivel = 'Ferro';
    else if ( xp <= 2000 ) nivel = 'Bronze';
    else if ( xp <= 5000 ) nivel = 'Prata';
    else if ( xp <= 7000 ) nivel = 'Ouro';
    else if ( xp <= 8000 ) nivel = 'Platina Diamante';
    else if ( xp <= 9000 ) nivel = 'Ascendente';
    else if ( xp <= 10000 ) nivel = 'Imortal';
    else nivel = 'Radiante';

    alert( 'O Herói de nome ' + nome + ' está no nível de ' + nivel );
} );