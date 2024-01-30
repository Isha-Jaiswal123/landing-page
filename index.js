let navbar=document.querySelector(".navbar");

function run1(){
    
    prompt("Enter your email");
    alert("Your slot is successfully booked.")
}
function run2(){
    alert("Your slot is successfully booked.")
}

let dropdown=document.querySelector(".barclick");
let show=true;
function response(){
    if(show){
        dropdown.style.display="flex";
        show=false;
    }else{
        dropdown.style.display="none"; 
        show=true;
    }  
}

