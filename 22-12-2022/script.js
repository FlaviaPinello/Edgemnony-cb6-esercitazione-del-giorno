//Sulla base della lezione del giorno, creare una nuova funzione che funzioni esattamente come il metodo parseInt che preso un numero come parametro lo ritorni senza virgola, 
//es: 23.23323 => 23
//Al fine di risolvere l'esercizio non utilizzare il parseInt chiaramente, 
//ma trovare una alternativa possibile, già vista a lezione oppure nuova cercando sulla rete.
//L'esercizio inoltre deve svilupparsi nell'osservanza dei concetti riguardo allo scope in javascript,
//quindi attenzione alla tipologia di varibili (var, let e const).

const obj = {
    num: '23.23323',
    valore: function () {
        return Math.floor( Number(this.num) );
        
    }
    
};
console.log( obj.valore() );

