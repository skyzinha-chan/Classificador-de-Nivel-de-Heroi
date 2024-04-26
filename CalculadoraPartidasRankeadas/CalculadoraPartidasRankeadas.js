const readline = require( 'readline' ).createInterface( {
    input: process.stdin,
    output: process.stdout
} );

function calcularNivelVitorioso() {
    return new Promise( ( resolve, reject ) => {
        readline.question( 'Informe a quantidade de vitórias: ', ( vitorias ) => {
            readline.question( 'Informe a quantidade de derrotas: ', ( derrotas ) => {
                let saldoVitorias = vitorias - derrotas;
                resolve( saldoVitorias );
            } );
        } );
    } );
}

function encontrarVitorioso( saldoVitorias ) {
    let vitorioso = " ";
    if ( saldoVitorias < 11 ) {
        vitorioso = "Ferro";
    } else if ( saldoVitorias >= 11 && saldoVitorias <= 20 ) {
        vitorioso = "Bronze";
    } else if ( saldoVitorias >= 21 && saldoVitorias <= 50 ) {
        vitorioso = "Prata";
    } else if ( saldoVitorias >= 51 && saldoVitorias <= 80 ) {
        vitorioso = "Ouro";
    } else if ( saldoVitorias >= 81 && saldoVitorias <= 90 ) {
        vitorioso = "Diamante";
    } else if ( saldoVitorias >= 91 && saldoVitorias <= 100 ) {
        vitorioso = "Lendário";
    } else if ( saldoVitorias >= 101 ) {
        vitorioso = "Imortal";
    }
    return vitorioso;
}

function mostrarNivelHeroi( saldoVitorias, vitorioso ) {
    console.log( `O Herói tem saldo de: ${ saldoVitorias } e está no nível: ${ vitorioso }` );
}

calcularNivelVitorioso().then( saldoVitorias => {
    let vitorioso = encontrarVitorioso( saldoVitorias );
    mostrarNivelHeroi( saldoVitorias, vitorioso );
    readline.close();
} );