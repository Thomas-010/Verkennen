let aantal = 0;
function koekjes(){
    let koekje = prompt ("Hoeveel koekjes wilt u bestellen")
    aantal += parseInt(koekje)
    console.log(koekje, aantal)
    document.getElementById('score').innerText = "Zoveel koekjes heeft u besteld\n" + aantal
}