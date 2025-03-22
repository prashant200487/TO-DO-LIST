let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function() {
    let x = document.createElement("li");
    x.innerText = inp.value;
    let delbtn=document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("Delete");
    x.appendChild(delbtn);
    ul.appendChild(x);
    inp.value = "";
});

ul.addEventListener("click",function(event){
  if(event.target.nodeName == "BUTTON"){
    let listitem=event.target.parentElement;
    listitem.remove();
    console.log("deleted");
  }
}); 
// let delbtns=document.querySelectorAll(".Delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//        par.remove();

//     });
// }
