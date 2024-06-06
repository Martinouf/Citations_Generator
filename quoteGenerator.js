const QuoteDatabase = require('./quoteDatabase');

class QuoteGenerator {
    constructor() {
        this.quoteDatabase = new QuoteDatabase();
    }

    generateQuote() {
        const quote = this.quoteDatabase.getRandomQuote();
        return quote.toString();
    }
}

module.exports = QuoteGenerator;
