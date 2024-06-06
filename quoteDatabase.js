const Quote = require('./quote');

class QuoteDatabase {
    constructor() {
        this.quotes = [];
        this.populateQuotes();
    }

    populateQuotes() {
        this.quotes.push(new Quote("La vie est un mystère qu'il faut vivre, et non un problème à résoudre.", "Gandhi"));
        this.quotes.push(new Quote("Le plus grand risque est de ne prendre aucun risque.", "Mark Zuckerberg"));
        this.quotes.push(new Quote("L'important n'est pas de convaincre, mais de donner à réfléchir.", "Bernard Werber"));
        this.quotes.push(new Quote("Le succès c’est d’aller d’échec en échec sans perdre son enthousiasme.", "Winston Churchill"));
        this.quotes.push(new Quote("L'imagination est plus importante que le savoir.", "Albert Einstein"));
        this.quotes.push(new Quote("Il n'y a pas de chemin vers le bonheur, le bonheur est le chemin.", "Bouddha"));
        this.quotes.push(new Quote("Faites de votre vie un rêve, et d'un rêve, une réalité.", "Antoine de Saint-Exupéry"));
        this.quotes.push(new Quote("La seule chose que nous ayons à craindre est la peur elle-même.", "Franklin D. Roosevelt"));
        this.quotes.push(new Quote("La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.", "Albert Einstein"));
        this.quotes.push(new Quote("Le meilleur moyen de prédire l'avenir est de le créer.", "Peter Drucker"));
        this.quotes.push(new Quote("Celui qui déplace une montagne commence par déplacer de petites pierres.", "Confucius"));
        this.quotes.push(new Quote("Le bonheur n'est pas quelque chose de prêt à l'emploi. Il vient de vos propres actions.", "Dalai Lama"));
        this.quotes.push(new Quote("La plus grande gloire n'est pas de ne jamais tomber, mais de se relever à chaque chute.", "Confucius"));
        this.quotes.push(new Quote("Ne jugez pas chaque jour à la récolte que vous faites, mais aux graines que vous semez.", "Robert Louis Stevenson"));
        this.quotes.push(new Quote("Le véritable voyage de découverte ne consiste pas à chercher de nouveaux paysages, mais à avoir de nouveaux yeux.", "Marcel Proust"));
        this.quotes.push(new Quote("La seule limite à notre réalisation de demain sera nos doutes d'aujourd'hui.", "Franklin D. Roosevelt"));
        this.quotes.push(new Quote("Tout ce que l'esprit peut concevoir et croire, il peut le réaliser.", "Napoleon Hill"));
        this.quotes.push(new Quote("Pour accomplir de grandes choses, nous devons non seulement agir, mais aussi rêver; non seulement planifier, mais aussi croire.", "Anatole France"));
        this.quotes.push(new Quote("Il ne faut pas attendre d'être parfait pour commencer quelque chose de bien.", "Abbé Pierre"));
        this.quotes.push(new Quote("La plus grande richesse est de vivre content de peu.", "Platon"));
        this.quotes.push(new Quote("L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde.", "Nelson Mandela"));
        this.quotes.push(new Quote("Ne vis pas pour que ta présence se remarque, mais pour que ton absence se ressente.", "Bob Marley"));
        this.quotes.push(new Quote("Il n'y a qu'une façon d'échouer, c'est d'abandonner avant d'avoir réussi.", "Georges Clemenceau"));
        this.quotes.push(new Quote("Il n'y a pas de hasard, il n'y a que des rendez-vous.", "Paul Éluard"));
        this.quotes.push(new Quote("La meilleure façon de prédire l'avenir, c'est de le créer.", "Peter Drucker"));
        this.quotes.push(new Quote("La vraie générosité envers l'avenir consiste à tout donner au présent.", "Albert Camus"));
        this.quotes.push(new Quote("La vie, ce n'est pas d'attendre que l'orage passe, c'est d'apprendre à danser sous la pluie.", "Sénèque"));
        this.quotes.push(new Quote("La vie est trop courte pour la passer à regretter tout ce que l'on n'a pas eu le courage de tenter.", "Marie-Claude Blais"));
        this.quotes.push(new Quote("Le plus grand échec est de ne pas avoir le courage d'oser.", "Abbé Pierre"));
        this.quotes.push(new Quote("Il y a deux façons de vivre sa vie : l'une en faisant comme si rien n'était un miracle, l'autre en faisant comme si tout était un miracle.", "Albert Einstein"));
        this.quotes.push(new Quote("Ce qui compte, ce n'est pas ce que l'on donne, mais l'amour avec lequel on donne.", "Mère Teresa"));
        this.quotes.push(new Quote("La beauté est dans les yeux de celui qui regarde.", "Oscar Wilde"));
        this.quotes.push(new Quote("Le seul moyen de se délivrer de la tentation, c'est d'y céder.", "Oscar Wilde"));
        this.quotes.push(new Quote("Le plus grand plaisir dans la vie est de réaliser ce que les autres vous pensent incapable de réaliser.", "Walter Bagehot"));
        this.quotes.push(new Quote("Nous ne pouvons pas choisir les circonstances extérieures, mais nous pouvons toujours choisir la façon dont nous répondons à ces circonstances.", "Epictète"));
        this.quotes.push(new Quote("La vie est un défi à relever, un bonheur à mériter, une aventure à tenter.", "Mère Teresa"));
        this.quotes.push(new Quote("Le bonheur, c'est de continuer à désirer ce que l'on possède.", "Saint Augustin"));
        this.quotes.push(new Quote("Croyez en vos rêves et ils se réaliseront peut-être. Croyez en vous et ils se réaliseront sûrement.", "Martin Luther King"));
        this.quotes.push(new Quote("La vie ne se mesure pas par le nombre de respirations que nous prenons, mais par les moments qui nous coupent le souffle.", "Maya Angelou"));
        this.quotes.push(new Quote("Il faut viser la lune, parce qu’au moins, si vous échouez, vous finirez dans les étoiles.", "Oscar Wilde"));
        this.quotes.push(new Quote("Le courage n'est pas l'absence de peur, mais la capacité de vaincre ce qui fait peur.", "Nelson Mandela"));
        this.quotes.push(new Quote("On peut juger de la grandeur d'une nation par la façon dont les animaux y sont traités.", "Gandhi"));
        this.quotes.push(new Quote("La réussite, c'est d'aller d'échec en échec sans perdre son enthousiasme.", "Winston Churchill"));
        this.quotes.push(new Quote("Il est temps de vivre la vie que vous vous êtes imaginée.", "Henry James"));
        this.quotes.push(new Quote("Il n'est jamais trop tard pour devenir ce que l'on aurait pu être.", "George Eliot"));
        this.quotes.push(new Quote("N'attendez pas. Le moment ne sera jamais 'le bon moment'.", "Napoleon Hill"));
        this.quotes.push(new Quote("Le bonheur n'est pas dans la possession des choses, mais dans l'appréciation des choses.", "Socrate"));
        this.quotes.push(new Quote("Le seul vrai voyage, ce ne serait pas d'aller vers de nouveaux paysages, mais d'avoir d'autres yeux.", "Marcel Proust"));
    }

    getRandomQuote() {
        const randIndex = Math.floor(Math.random() * this.quotes.length);
        return this.quotes[randIndex];
    }
}

module.exports = QuoteDatabase;
