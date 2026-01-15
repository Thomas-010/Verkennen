function brew(){
    const juistgetal = 7
    let naam = document.getElementById("naam").value
    let getal = document.getElementById("getal").value
    const ingredient = document.getElementById("ingredient").checked;
    const resultaat = document.getElementById("resultaat");

    resultaat.textContent = ""

    if (naam == "" || getal == "") {
        document.getElementById("resultaat").innerText = "Vul een geldige invoer in!"
    }

    
    else if (parseInt(getal) === juistgetal && ingredient) {
        resultaat.textContent = `Je drankje is perfect gelukt!`;
    } else {
        resultaat.textContent = `De toverdrank is mislukt.`;

    }
}
