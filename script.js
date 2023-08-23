let left0 = document.getElementsByClassName("left")[0]
let leftrest = document.getElementsByClassName("left-rest")[0]
let right = document.getElementsByClassName("right")[0]
let taskbar = document.getElementsByClassName("taskbar")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]
let computer = document.getElementById("i1")
let computerfile = document.getElementsByClassName("computerfile")[0]
let recyclebinempty = document.getElementById("i2")
let recyclebinemptyopen = document.getElementsByClassName("recyclebin")[0]
let minmaxclose = document.getElementsByClassName("min-max-close")[0]

document.body.onclick = startmenu.style.bottom = "-484px"

left0.addEventListener("click", ()=>{
    if(startmenu.style.bottom == "40px"){
        startmenu.style.bottom = "-484px"
    }
    else{
        startmenu.style.bottom = "40px"
        startmenu.style.z-index === "100"
    }
})

computer.addEventListener("click", ()=>{
		startmenu.style.bottom = "-484px"
        computerfile.style.bottom = "250px"
		minmaxclose.style.bottom = "729px"
		recyclebinemptyopen.style.bottom = "-503px"
})

computerfile.addEventListener("click", ()=>{
		startmenu.style.bottom = "-484px"
})

leftrest.addEventListener("click", ()=>{
		startmenu.style.bottom = "-484px"
})

right.addEventListener("click", ()=>{
		startmenu.style.bottom = "-484px"
})

recyclebinemptyopen.addEventListener("click", ()=>{
		startmenu.style.bottom = "-484px"
})

recyclebinempty.addEventListener("click", ()=>{
		startmenu.style.bottom = "-484px"
		recyclebinemptyopen.style.bottom = "250px"
		minmaxclose.style.bottom = "729px"
		computerfile.style.bottom = "-503px"
})

minmaxclose.addEventListener("click", ()=>{
		startmenu.style.bottom = "-484px"
		computerfile.style.bottom = "-503px"
		recyclebinemptyopen.style.bottom = "-503px"
		minmaxclose.style.bottom = "-709px"
})
