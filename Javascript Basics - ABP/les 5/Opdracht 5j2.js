console.log('JS werkt')

function zetKleur(kleur){
    const div = document.getElementById("kleurbox");
    div.style.backgroundColor = kleur;
}

function kiesKleur(kleur){
    zetKleur(kleur);
}

function kiesRandomKleur(){
    const kleuren = ['red', 'bleu', 'yellow', 'green' ]
    const randomIndex = Math.floor(Math.random() * kleuren.length);
    zetKleur(kleuren[randomIndex]);
}