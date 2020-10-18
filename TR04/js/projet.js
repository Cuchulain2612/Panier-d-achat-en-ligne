"use strict";
let listeArticle =[];  // liste des article            
let sommeTotal =0;    // future somme totale à payer

/**
*Fonction ajoutant un article à la liste des articles
*
*@param {string} string contenant le nom de l'article à ajouter
*@return ajoute à la fin de la liste le nouvel articele choisi
*/
function additionEtArray(stringArticle) {
    listeArticle.push(stringArticle);

}

/**
*Fonction supprimant de la liste des articles un article au choix grâce à une boucle for permettant de le retrouver dans cette liste
*
*@param {string} string contenant le nom de l'article à retirer
*@return retire de la liste l'articele choisi
*/
function soustraireEtArray(stringArticle) {
    for(let compteur = 1; compteur < listeArticle.length; compteur +=1){
        if (listeArticle[compteur] === stringArticle) {
            listeArticle.splice(compteur, 1);
            break;
        }
    }
}

/**
*Fonction calculant la somme totale à payer en utilisant une boucle pour vérifier tous les éléments de la liste. 
*On utilise un switch pour vérifier de quel article il sagit
*
*
*@return {} affiche en console la somme total à payer ainsi que le prix moyen d'un article
*/
function resultat() {
    for (let compteur =0; compteur < listeArticle.length; compteur +=1) {
        switch (listeArticle[compteur]) {
            case "salade" : sommeTotal += 2;
            break;
            case "tomate" : sommeTotal += 5;
            break;

            case "concombre" : sommeTotal += 10;
            break;

            case "kinder" : sommeTotal += 15;
            break;

            case "fromageBlanc" : sommeTotal += 20;
            break;

            case "fromageChevre" : sommeTotal += 100;
            break;

            case "poulet" : sommeTotal += 300;
            break;

            case "boeuf" : sommeTotal += 400;
            break;

            case "cheval" : sommeTotal += 450;
            break;

            case "tabac" : sommeTotal += 500;
            break;
        }
    }

    let moyenne = (sommeTotal/(listeArticle.length -1)).toFixed(2);
    console.log("Vous avez pour "+sommeTotal+"$ de course pour vos "+(listeArticle.length -1)+" articles (environ "+moyenne+"$ par article!)");



}







