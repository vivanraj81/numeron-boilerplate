// Iteration 2: Generate 2 random number and display it on the screen

const num1=Math.floor(Math.random()*101)
const num2=Math.floor(Math.random()*101)

var numbers=document.getElementById("number1")
var numbers2=document.getElementById("number2")

numbers.innerText=num1;
numbers2.innerText=num2;

score=parseInt(sessionStorage.getItem("score")) || 0 ;

// Iteration 3: Make the options button functional
const btns = document.getElementById("buttons")

btns.addEventListener("click",(event)=>{
    if (num1>num2 && event.target.id=="greater-than"){
        console.log("win")
        score+=1
        window.location.reload()
        sessionStorage.setItem("score",score)  
    }
    else if (num1==num2 && event.target.id=="equal-to"){
        console.log("win")
        score+=1
        sessionStorage.setItem("score",score)   
        window.location.reload()
    }
    else if (num1<num2 && event.target.id=="lesser-than"){
        console.log("win")
        score+=1
        sessionStorage.setItem("score",score)
        window.location.reload()
    }
    else{
        window.location.href="gameover.html"
    }
})
console.log(score)


// Iteration 4: Build a timer for the game

const timer=document.getElementById("timer")
let timeLeft = 5;

timer.textContent = timeLeft;
const timerInterval = setInterval(() => {
    timeLeft--;
    timer.textContent = `${timeLeft}`;
    if (timeLeft === 0) {
        clearInterval(timerInterval);
        window.location.href="gameover.html"
    }},1000)