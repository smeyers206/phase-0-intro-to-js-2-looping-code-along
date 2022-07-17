const names = ["Guadalupe", "Ollie", "Aki"];

function writeCards() {
    for (let i = 0; i < names.length; i++) {
    return (`Thank you, ${names[i]}, for the wonderdul suprise gift!`)
}
}
writeCards(["Guadalupe", "Ollie", "Aki"]);

function countDown(integer) {
 let i = 0;
 while (i < 11) {
    console.log(i++);
 }   
}
countDown(10);