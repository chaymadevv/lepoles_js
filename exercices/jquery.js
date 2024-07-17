document.querySelector("#btChange").addEventListener("click", function (evt) {
    document.querySelector(".carre.bleu").style.backgroundColor = "green";
});

/*Exercice 2*/
document.querySelector("img1").addEventListener("click", function (evt) {
    console.log(this, this.style.width, this.style.height);
});