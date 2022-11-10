// -- Déclarer une variable
/*

    |           |
    |   Prénom  |   <<<<<   Agathe
    |___________|

    Permet de stocker des informations.

*/

var prenom = "Agathe";
var dateDeNaissance = "12/01/1995";

console.log(prenom);
console.log(dateDeNaissance);

// ------------------------------------- //

/*

    |            |
    |   Prénoms  |   <<<<<   Agathe & Hugo
    |____________|

    Permet de stocker des informations.

*/

var prenoms = ["Agathe", "Hugo"];
console.log(prenoms);

// var prenom = "Hugo";
// var nom = "LIEGEARD";
// var email = "hugo@biyn.media";
// var tel = "07 83 97 15 15";
// Plutôt que déclarer plusieurs variables, je peux tous stocker dans une seule.
// On utilisera alors un tableau.

var contact = ["Hugo", "LIEGEARD", "hugo@biyn.media", "07 83 97 15 15"];
console.log(contact);

// --------------------------------------------------------------------

var animal = "Chien";
var fleur = "Rose";
var nourriture = "Croziflette";
var vetement = "Jean";

console.log(animal);
console.log(fleur);

// --------------------------------------------------------------------

var animaux = ["Chat", "Chien", "Papillon", "Mouche", "Chèvre", "Phacochère"];
console.log(animaux);

/*
    Les boucles, vont me permettre de parcourir AUTOMATIQUEMENT
    les données de mon tableau...
 */

var nombreElementsDansMonTableau = animaux.length;
console.log(nombreElementsDansMonTableau);

for( let index = 0 ; index < nombreElementsDansMonTableau ; index++  ) {

    // index = 0 | animaux[0] = chat | 0 < 6 | index = 1
    // index = 1 | animaux[1] = chien | 1 < 6 | index = 2
    // index = X | animaux[X] = chien | X < 6 | index = X
    // index = 6 | 6 < 6 | La boucle s'arrête, la condition n'est plus validé.

    console.log( 'Ici, i = ' + index );
    console.log( animaux[index] );
    console.log( '---' );

} // Fin de boucle FOR

/*

    TABLEAU INDEXE
  __________________________________
  |      0       |       1         |
  ----------------------------------
  |    "Hugo"    |    "LIEGEARD"   |
  ---------------------------------

    OBJET
  __________________________________
  |    prenom    |       nom       |
  ----------------------------------
  |    "Hugo"    |    "LIEGEARD"   |
  ---------------------------------
 */

var contact = {
    // CLE: VALEUR
    prenom: "Hugo",
    nom: "LIEGEARD"
};

console.clear();
console.log(contact);
console.log(contact['prenom']);
console.log(contact['nom']);
console.log(contact.prenom);
console.log(contact.nom);

var contacts = [
    {
        // CLE: VALEUR
        prenom: "Hugo",
        nom: "LIEGEARD"
    },
    {
        // CLE: VALEUR
        prenom: "Agathe",
        nom: "MALLARD"
    }
];

console.log(contacts);
console.log(contacts[0].prenom);
console.log(contacts[1].prenom);

// On parle ici du format JSON.
// Eventuellement revoir les conditions. IF/ELSE
