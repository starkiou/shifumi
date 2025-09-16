
let jouer_j;
let jouer_b;
let resultat;
let victoire = 0;
let egalite = 0;
let defaite = 0;
let possibilite = ['pierre','feuille','ciseaux']

reset.addEventListener("click", restart);

function restart(){
    document.location.reload();
}

function comparer(jouer_j, jouer_b){
    if(jouer_j == jouer_b){
        resultat = 'équalité';
    }
    else if((jouer_j === 'pierre' && jouer_b === 'ciseaux') ||
            (jouer_j === 'ciseaux' && jouer_b === 'feuille') ||
            (jouer_j === 'feuille' && jouer_b === 'pierre')
    ){
        resultat = 'gagné';
    }else{
        resultat = 'perdu';
    }

    document.getElementById("choix_j").textContent = jouer_j;
    document.getElementById("choix_b").textContent = jouer_b;
    document.getElementById("resultat").textContent = resultat;
    document.getElementById("victoire").textContent = victoire;
    document.getElementById("egalite").textContent = egalite;
    document.getElementById("defaite").textContent = defaite;
}

for(i = 0; i<3; i++){
    let bouton =document.getElementById("btn"+i)
    bouton.addEventListener("click", function(){
        jouer_j = bouton.textContent;
        jouer_b = possibilite[Math.floor(Math.random() * 3)];
        alert('robot' + jouer_b);
        comparer(jouer_j, jouer_b);
    });
}
