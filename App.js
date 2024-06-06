const QuoteGenerator = require('./quoteGenerator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const quoteGenerator = new QuoteGenerator();

console.log("Bienvenue dans le générateur de citations !");
console.log("Tapez 'quote' pour obtenir une citation aléatoire ou 'exit' pour quitter.");

rl.on('line', (input) => {
    if (input.trim().toLowerCase() === 'exit') {
        rl.close();
    } else if (input.trim().toLowerCase() === 'quote') {
        console.log(quoteGenerator.generateQuote());
    } else {
        console.log("Commande non reconnue. Tapez 'quote' pour obtenir une citation ou 'exit' pour quitter.");
    }
});

rl.on('close', () => {
    console.log("Merci d'avoir utilisé le générateur de citations !");
    process.exit(0);
});
