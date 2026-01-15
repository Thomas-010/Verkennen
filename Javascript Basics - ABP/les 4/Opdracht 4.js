const kleuren = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

function regenboog(){

    const resultaat = document.getElementById("resultaat");
    resultaat.innerHTML = "";

    for(let i = 0; i < kleuren.length; i++ ) {
        const balk = document.createElement("div");
        balk.style.backgroundColor = kleuren[i];
        balk.style.height = "40px";
        resultaat.appendChild(balk);
    }

    console.log(resultaat);
}

function userinput(){
    const userkleur = document.getElementById('kleurinput').value;
    console.log(kleuren)
    if (userkleur) {
        kleuren.push(userkleur);
        regenboog();
        //document.getElementById(userinput).value = "";
    }
    console.log(userkleur);
}


regenboog();