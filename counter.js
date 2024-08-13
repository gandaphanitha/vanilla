const count = document.getElementById("count");
const increase = document.querySelector(".btn2");
const decrease = document.querySelector(".btn1");
const reset = document.querySelector(".btn3");

increase.addEventListener("click", increment);
function increment() {
    count.innerHTML = parseInt(count.innerHTML) + 1;
    count.style.color="red";
}

decrease.addEventListener("click", decrement);
function decrement() {
    count.innerHTML = parseInt(count.innerHTML) - 1;
       count.style.color="green";
}

reset.addEventListener("click", resetCounter);
function resetCounter() {
    count.innerHTML = 0;
       count.style.color="pink";
}