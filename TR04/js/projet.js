"use strict";
let listeArticle =[];
let sommeTotal =0;


function additionEtArray(stringArticle) {
    listeArticle.push(stringArticle);

}
function soustraireEtArray(stringArticle) {
    for(let compteur = 1; compteur < listeArticle.length; compteur +=1){
        if (listeArticle[compteur] === stringArticle) {
            listeArticle.splice(compteur, 1);
            break;
        }
    }
}
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







