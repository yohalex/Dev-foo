
const btnAddText = document.querySelector(".btn-addText");
const links = document.querySelectorAll(".link");
const sections = document.querySelectorAll('section')
const choice = document.querySelectorAll('.choice-categorie>button')

//Affiche le contenu du lien cliqué
links.forEach((link) => {
  link.addEventListener("click", () => {
      const temp = link.dataset.icon
      sections.forEach((section)=>{ section.style.display = section.dataset.page !== temp ? "none" : "flex" })
  });
});

//choisir si son texte est une citation 
//ou une blague  
choice.forEach((bouton)=>{
    bouton.addEventListener('click',()=>{
        const temp = bouton.className
        choice.forEach((elt)=>{
            if(elt.className === temp ){
                elt.style.backgroundColor = "#ffff"
                elt.style.color = '#00bcf2'
            }else{
                elt.style.backgroundColor = '#00bcf2'
                elt.style.color = "#ffff"
            }
        })
    })

})

//supprimer le comportement  par defaut de tous les boutons dans le formulaire
document.querySelectorAll('form button').forEach((elt)=>{elt.addEventListener('click',(e)=>{e.preventDefault()})})


