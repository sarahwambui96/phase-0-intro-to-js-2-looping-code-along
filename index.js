// whiteCards
//const names = ["Guadalupe", "Ollie", "Aki"];
function writeCards(names, event){
    const messages = [];
    for (let i = 0;
        i < names.length;
        i++) {
    messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        }
        return messages;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

// countDown()
let number = 10;
function countDown(number) {
    while (number > 0) {
        console.log(number);
        number-=1;
    }
    console.log(number);
}