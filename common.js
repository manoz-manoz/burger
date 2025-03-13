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
document.querySelector(".customer").classList.add("drop-shadow-xl")

}

function light(e) {
document.body.style.backgroundColor="#010e62";
document.querySelector("#light").style.display="none";
document.querySelector("#dark").style.display="block";


}
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
