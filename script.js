


function show(){
    document.getElementById("Close").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("pages").style.display = "block";
    document.getElementById("pages").style.borderBottom= "1px solid yellow";


}
function hide(){
    document.getElementById("Close").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("pages").style.display = "none";
    document.getElementById("pages").style.borderBottom= "none";


}



let tabbtn=document.querySelectorAll(".tabs");
function changecolor(e) {
    let x = document.querySelectorAll(".tab")
    x = [...x];
    
    x.forEach(ele => {
            if(ele.classList.contains('bg-yellow-500')){
         ele.classList.remove('bg-yellow-500');
            }
    });
    e.parentNode.classList.add('bg-yellow-500');
}




window.addEventListener('load', all)
function all(){
    fetch("menu.json")
    .then(res=>res.json())
    .then(p=>{
       p.forEach(e => {
       
           
          let child=document.createElement("a")
          child.classList.add("child");
          child.innerHTML=`<img src="${e.img}" class="image">
                           <h1 class="name">${e.name}</h1>
                           <div class="shop">
                           <p class="price">₹ ${e.price}</p>
                           <button class="shop-btn">Buy Now </button>
                           </div>`;
                           
          parent.appendChild(child);

        })    })
    }



let tab1=document.querySelector(".tab1")
let parent=document.querySelector(".items")
tab1.addEventListener("click",()=>{
   parent.innerHTML="";
      burger();
});



function burger(){
    parent.innerHTML = '';
    fetch("menu.json")
        .then(res => res.json())
        .then(products => {
            products.filter(p => p.category === "burger").forEach(e => {
                let child = document.createElement('div');
                child.classList.add("child");
              
                    child.innerHTML=`<img src="${e.img}" class="image">
                           <h1 class="name">${e.name}</h1>
                           <div class="shop">
                           <p class="price">₹ ${e.price}</p>
                           <button class="shop-btn">Buy Now </button>
                           </div>`;

                parent.appendChild(child);
            });

        })
}











let tab2=document.querySelector(".tab2")

tab2.addEventListener("click",()=>{

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    
          
       beaverge();

    
})
function beaverge(){
    fetch("menu.json")
    .then(res=>res.json())
    .then(p=>{
       p.forEach(e => {
       
           if(e.category=="beaverge"){
          let child=document.createElement("a")
          child.classList.add("child");
          child.innerHTML=`<img src="${e.img}" class="image">
                           <h1 class="name">${e.name}</h1>
                           <div class="shop">
                           <p class="price">₹ ${e.price}</p>
                           <button class="shop-btn">Buy Now </button>
                           </div>`;
                           
          parent.appendChild(child);
}
        })    })
    }






    let tab3=document.querySelector(".tab3")

    tab3.addEventListener("click",()=>{
    
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
          }
        
              
           snack();
    
        
    })



    function snack(){
        fetch("menu.json")
        .then(res=>res.json())
        .then(p=>{
           p.forEach(e => {
           
               if(e.category=="snack"){
              let child=document.createElement("a")
              child.classList.add("child");
              child.innerHTML=`<img src="${e.img}" class="image">
                               <h1 class="name">${e.name}</h1>
                               <div class="shop">
                               <p class="price">₹ ${e.price}</p>
                               <button class="shop-btn">Buy Now </button>
                               </div>`;
                               
              parent.appendChild(child);
    }
            })    })
        }


        let topbtn=document.querySelector("#top-btn");
        topbtn.addEventListener("click",()=>{
            window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
        });
        window.addEventListener("scroll", () => {
            if (window.scrollY > window.innerHeight) {
                topbtn.classList.remove("hidden") 
              topbtn.classList.add("block")
            } else {
              topbtn.classList.add("hidden") 
              topbtn.classList.remove("block")
            }
          });


function dark(e) {
    document.body.style.backgroundColor="black";
    document.querySelector("#dark").style.display="none";
    document.querySelector("#light").style.display="block";

    
}

function light(e) {
    document.body.style.backgroundColor="#010e62";
    document.querySelector("#light").style.display="none";
    document.querySelector("#dark").style.display="block";

    
}