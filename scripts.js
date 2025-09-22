
let jouer_j;
let jouer_b;
let resultat;
let victoire = 0;
let egalite = 0;
let defaite = 0;
let possibilite = ['pierre','feuille','ciseaux']


document.getElementById("victoire").textContent = 0;
document.getElementById("egalite").textContent = 0;
document.getElementById("defaite").textContent = 0;

reset.addEventListener("click", restart);

function restart(){
    document.location.reload();
}

function comparer(jouer_j, jouer_b){
    if(jouer_j == jouer_b){
        resultat = 'équalité';
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
    document.getElementById("victoire").textContent = victoire;
    document.getElementById("egalite").textContent = egalite;
    document.getElementById("defaite").textContent = defaite;
}

for(let i = 0; i < 3; i++){
    let bouton = document.getElementById("btn"+i);
    bouton.addEventListener("click", function(){
        jouer_j = bouton.querySelector('.btn-label').textContent.trim();
        jouer_b = possibilite[Math.floor(Math.random() * 3)];
        comparer(jouer_j, jouer_b);
    });
}
