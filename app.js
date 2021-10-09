
let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".abrirM")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalC = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click",function(e){
    e.preventDefault();
    modalC.style.opacity="1";
    modalC.style.visibility="visible";
    modal.classList.toggle("modal-close")
});

cerrar.addEventListener("click",function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        modalC.style.opacity="0";
        modalC.style.visibility="hidden";
    },800)
})

window.addEventListener("click",function(e){
    console.log(e.target)
    if (e.target == modalC){
        modal.classList.toggle("modal-close");
        setTimeout (function(){
            modalC.style.opacity="0";
            modalCstyle.visibility="hidden";
        },1200)
    }
})

function nombre() {
  var resultado1 = document.getElementById("nomEst").value;
  var resultado2 = document.getElementById("cel-Est").value;

  if (resultado1==""){
      alert("Debes digitar tu nombre")
      document.getElementById("nomEst").focus();
  }
  else{
      if(resultado2==""){
          alert("Debes digitar tu celular")
          document.getElementById("cel-Est").focus();
      }else{
          console.log(resultado1 + "  "+resultado2);
          document.getElementById("nomEst").value="";
          document.getElementById("cel-Est").value="";
      }
  }
}
