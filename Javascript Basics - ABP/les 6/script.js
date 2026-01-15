
function setName() {
    let person = prompt("Vul hier je naam in: ")
    const element = document.getElementById("heroName");
    element.innerHTML = (person)

}

function bioBtn() {
    let heroBio = prompt("Vul hier de beschrijving in: ")
    const element = document.getElementById("heroBio");
    element.innerHTML = (heroBio)
}

function emojiBtn() {
    const emojiDiv = document.getElementById('emoji')
    const emoji = ['🦸‍♂️','🦹', '🧙', '🧛']
    emojiDiv.textContent = emoji[0]
    const randomEmoji = emoji[Math.floor(Math.random() * emoji.length)];
    emojiDiv.textContent = randomEmoji
    console.log(randomEmoji)
}

function colorBtn() {
    let color = Math.floor(Math.random()*16777215).toString(16);
    color = "#" + color.padStart(6, "0");
    document.getElementById('avatarCard').style.backgroundColor = color;
}