let homeEl = document.getElementById("home-score")
let homebtn1 = document.getElementById("home-btn-1")
let guestEl = document.getElementById("guest-score")
let guestbtn1 = document.getElementById("guest-btn-1")
let homeScore = 0
let guestScore = 0

function increasehomescoreby1(){
    homeScore += 1
    homeEl.textContent = homeScore  
}

function increasehomescoreby2(){
    homeScore += 2
    homeEl.textContent = homeScore  
}

function increasehomescoreby3(){
    homeScore += 3
    homeEl.textContent = homeScore  
}

function increaseguestscoreby1(){
    guestScore += 1
    guestEl.textContent = guestScore
}

function increaseguestscoreby2(){
    guestScore += 2
    guestEl.textContent = guestScore
}

function increaseguestscoreby3(){
    guestScore += 3
    guestEl.textContent = guestScore
}

function reset(){
    homeScore = 0
    guestScore = 0
    homeEl.textContent = 0  
    guestEl.textContent = 0
    
}
