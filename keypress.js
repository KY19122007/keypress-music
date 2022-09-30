document.addEventListener("keypress",Music)
let audio1 = new Audio("./SA.mpeg")
let audio2 = new Audio("./RE.mpeg")
let audio3 = new Audio("./GA.mpeg")
let audio4 = new Audio("./MA.mpeg")
let audio5 = new Audio("./PA.mpeg")
let audio6 = new Audio("./DA.mpeg")
let audio7 = new Audio("./NI.mpeg")
function Music(event){
     console.log(event.key)
     console.log("done")
     if(event.key=="1"){
        audio1.play()
         divArray[0].style.backgroundColor = "black"
         
     }
     if(event.key=="2"){
        audio2.play()
        divArray[1].style.opacity="100"
         
    }
    if(event.key=="3"){
        audio3.play()
        divArray[2].style.opacity="0.2"  
         
    }
    if(event.key=="4"){
        audio4.play()
        divArray[3].style.opacity="0.2"    
         
    }
    if(event.key=="5"){
        audio5.play()
        divArray[4].style.opacity="0.2"
         
    }
    if(event.key=="6"){
        audio6.play()
        divArray[5].style.opacity="0.2"
         
    }
    if(event.key=="7"){
        audio7.play()
        divArray[6].style.opacity="0.2"
         
    }
}

