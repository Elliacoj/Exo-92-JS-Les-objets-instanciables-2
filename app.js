let Personne = function (nom, prenom, age, sex) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sex = sex;

    this.getIdentity = function () {
        return this.nom + " " + this.prenom + " a " + this.age + " et est un/une " + this.sex;
    }

    this.getChange = function (nom, prenom) {
        return (this.nom = nom) && (this.prenom = prenom);
    }

}
let john = new Personne("Doeuf", "John", "32 ans", "male");
let steve = new Personne("Air", "Steve", "22 ans", "male");
let elodie = new Personne("Sterique", "Elodie", "42 ans", "femelle");
let jerome = new Personne("Nimau", "Jerome", "35 ans", "male");
let laurie = new Personne("larante", "Laurie", "21 ans", "femelle");

let array = [john, steve, elodie, jerome, laurie];

let classe = {
    eleves: [john, steve, elodie, jerome, laurie],
}

for(let x = 0; x < classe.eleves.length; x++) {
    let div = document.createElement("div");
    document.body.append(div);
    div.innerHTML = classe.eleves[x].getIdentity();
}