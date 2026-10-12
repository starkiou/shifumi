let jouer_j;
let jouer_b;
let resultat;
let victoire = 0;
let egalite = 0;
let defaite = 0;
let possibilite = ['pierre','feuille','ciseaux']


afficherScores();

document.getElementById("reset").addEventListener("click", restart);

function afficherScores(){
    document.getElementById("victoire").textContent = victoire;
    document.getElementById("egalite").textContent = egalite;
    document.getElementById("defaite").textContent = defaite;
}

function restart(){
    victoire = 0;
    egalite = 0;
    defaite = 0;
    document.getElementById("choix_j").textContent = '';
    document.getElementById("choix_b").textContent = '';
    document.getElementById("resultat").textContent = '';
    afficherScores();
}

function comparer(jouer_j, jouer_b){
    if(jouer_j === jouer_b){
        resultat = 'égalité';
        egalite++;
    }
    else if((jouer_j === 'pierre' && jouer_b === 'ciseaux') ||
            (jouer_j === 'ciseaux' && jouer_b === 'feuille') ||
            (jouer_j === 'feuille' && jouer_b === 'pierre')
    ){
        resultat = 'gagné';
        victoire++;
    }else{
        resultat = 'perdu';
        defaite++;
    }

    document.getElementById("choix_j").textContent = jouer_j;
    document.getElementById("choix_b").textContent = jouer_b;
    document.getElementById("resultat").textContent = resultat;
    afficherScores();
}

for(let i = 0; i < 3; i++){
    let bouton = document.getElementById("btn"+i);
    bouton.addEventListener("click", function(){
        jouer_j = bouton.dataset.choix;
        jouer_b = possibilite[Math.floor(Math.random() * 3)];
        comparer(jouer_j, jouer_b);
    });
}
