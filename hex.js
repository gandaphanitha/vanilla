// const hex=[0,1,2,3,4,5,6,"A","B","C","D","E","F"]
// const btn=document.getElementById("btn")
// const color=document.querySelector(".color")
// btn.addEventListener("click",print)
// function print(){
//     let hexcolor="#";
//     for (i=0;i<6;i++){
//         hexcolor+=hex[getRandomNumber()]
//     }
//     console.log(hexColor)
//     const randomNumber = getRandomNumber();
//     document.body.style.backgroundColor=hexColor
//     color.textContent=hexcolor
// }
// function getRandomNumber(){
//     return Math.floor(Math.random() * hex.length);
// }
// print()





// const hex = [0, 1, 2, 3, 4, 5, 6, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", print);
const hex = [0, 1, 2, 3, 4, 5,"A","B"];
function print() {
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
        hexcolor += hex[getRandomNumber()];
    }
    // console.log(hexcolor);
    document.body.style.backgroundColor = hexcolor;
    color.textContent = hexcolor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}

print();