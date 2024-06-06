class Quote {
    constructor(text, author) {
        this.text = text;
        this.author = author;
    }

    toString() {
        return `"${this.text}" - ${this.author}`;
    }
}

module.exports = Quote;
