const mov = document.getElementById("Mov");
const seats = document.querySelectorAll(".seat");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");
const seatsThing = document.querySelector(".seatsThing");



let price = Number(mov.value);
function IncCount(){
    const Selected=document.querySelectorAll( '.row .S');
    // console.log(Selected);
    const Selectedcount=Selected.length;
    // console.log(Selectedcount);
    count.innerText=Selectedcount;
    amount.innerText=Selectedcount*price;
    // localStorage.setItem("selectedseats",Selected);
    // localStorage.setItem("count",count);
    // localStorage.setItem("amount",amount);
}
// console.log(typeof price);
// console.log(price);
// object.addEventListener("change", myScript);
mov.addEventListener('change',e =>{
    price=Number(e.target.value);
    IncCount();
})

seatsThing.addEventListener('click',(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains('seat')){
        // console.log(e.target);
        e.target.classList.toggle('S');
    }
    IncCount();
})

// localStorage.setItem("lastname", "Smith");
// localStorage.getItem("lastname");

