// **************like/dislike + croix ***************
let Heart = Array.from(document.getElementsByClassName('fa-heart'));
console.log(Heart);
for(let i=0;i<Heart.length;i++){
    Heart[i].addEventListener("click",function(){
        if(Heart[i].style.color != 'red'){
        Heart[i].style.color='red';}
        else{
            Heart[i].style.color='Black';
        }
    })
}
let Croix = Array.from(document.getElementsByClassName('fa-times'));

for(let i=0; i<Croix.length;i++){
    Croix[i].addEventListener("click",function(){
        Infoarticle[i].remove();
        total()
    })    
}

// ********compteur**********
let Btnplus = Array.from(document.getElementsByClassName("Btn-plus"));
let Btnmoins = Array.from(document.getElementsByClassName("Btn-moins"));
let Sommearticle =Array.from(document.getElementsByClassName("Somme-article"))
let Soustotal =document.getElementById("Sous-Total");

for (let i=0; i<Btnplus.length; i++){
    
Btnplus[i].addEventListener("click",function(){
    Btnplus[i].nextElementSibling.innerHTML ++;
    // Qte[i].innerHTML++;
    // Sommearticle[i].innerHTML= Number(Prixunitaire[i].innerHTML)*Number(Qte[i].innerHTML);
    total()
 
})

}

for (let i=0; i<Btnmoins.length; i++){
Btnmoins[i].addEventListener("click", function(){
    if(Btnmoins[i].previousElementSibling.innerHTML >0) {
       Btnmoins[i].previousElementSibling.innerHTML--;
    // Sommearticle[i].innerHTML= Number(Prixunitaire[i].innerHTML)*Number(Qte[i].innerHTML);

}
total()
})

}

function total(){
    let Qte = Array.from(document.getElementsByClassName("Qte"));
    let Prixunitaire = Array.from(document.getElementsByClassName("Prix-unitaire"));
    let st=0;
    for (let i in Prixunitaire){
        Sommearticle[i].innerHTML= Number(Prixunitaire[i].innerHTML)*Number(Qte[i].innerHTML);
        
        st= st + Number(Prixunitaire[i].innerHTML) * Number(Qte[i].innerHTML);
    }
    Soustotal.innerHTML=st;
    return(Soustotal.innerHTML,Sommearticle.innerHTML);
}




