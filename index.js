let countGuest = document.getElementById("count-guest")
let countHome = document.getElementById("count-home")
console.log(countGuest)
console.log(countHome)
let countNumG = 0
let countNumH = 0

function plus1guest() {
    console.log("btn+1_pressed")
    countNumG += 1
    countGuest.textContent = countNumG
    console.log(countGuest)
}

function plus2guest() {
    console.log("btn+2_pressed")
    countNumG += 2
    countGuest.textContent = countNumG
    console.log(countGuest)
}

function plus3guest() {
    console.log("btn+3_pressed")
    countNumG += 3
    countGuest.textContent = countNumG
    console.log(countGuest)
}

function plus1home() {
    console.log("btn+1_pressed")
    countNumH += 1
    countHome.textContent = countNumH
    console.log(countGuest)
}

function plus2home() {
    console.log("btn+2_pressed")
    countNumH += 2
    countHome.textContent = countNumH
    console.log(countGuest)
}

function plus3home() {
    console.log("btn+3_pressed")
    countNumH += 3
    countHome.textContent = countNumH
}

function reset() {
    console.log("reset-btn-pressed")
    countNumG = 0
    countNumH = 0
    countHome.textContent = countNumH
    countGuest.textContent = countNumG
}