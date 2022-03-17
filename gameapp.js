function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bbs = document.querySelector("#bbs");
const bbc = document.querySelector("#bbc");
let myTimeout = null;
let info = document.querySelector(".message-screen")

bbs.addEventListener("click", () => {
    bbs.classList.add("bbhiden");
    bbs.classList.remove("bbshown");
    bbc.classList.remove("bbhiden");
    bbc.classList.add("bbshown");
    info.innerHTML = ""
    stopwatch();  
})

bbc.addEventListener("click", () => {
    bbc.classList.add("bbhiden");
    bbc.classList.remove("bbshown");
    bbs.classList.remove("bbhiden");
    bbs.classList.add("bbshown");
    clearTimeout(myTimeout);
    clock.innerHTML = "00:00:00" 
    gamechecker = 1;
    t = -1;
    info.innerHTML = "Press start to play again"
    for (let i = 1; i < 26; i++) {  
    }
    })

    let gamechecker = 1;    

    const clock = document.querySelector("#clock")
    clock.innerHTML = "00:00:00"
    let t = -1;
    
    function stopwatch() {  
    t++     
    let t1 = Math.trunc(t/6000);
    let t2 = Math.trunc((t - t1*6000)/600)
    let t3 = Math.trunc((t - t1*6000 - t2*600)/100)
    let t4 = Math.trunc((t - t1*6000 - t2*600 - t3*100)/10)
    let t5 = Math.trunc(t % 10)
    clock.innerHTML = `${t1}${t2}:${t3}${t4}:${t5}0`
    myTimeout = setTimeout(stopwatch, 100)   
    }
    
    let highscore1 = localStorage.getItem("Highscore4")   
    if(highscore1 === null){
        highscore1 = 60000;
       localStorage.setItem("Highscore4", highscore1)
    } else{
        highscore1 = Number(highscore1)
    }
    
    let highscore2 = localStorage.getItem("Highscore5")   
    if(highscore2 === null){
        highscore2 = 60000;
       localStorage.setItem("Highscore5", highscore2)
    } else{
        highscore2 = Number(highscore2)
    }
    
    let highscore3 = localStorage.getItem("Highscore6")   
    if(highscore3 === null){
        highscore3 = 60000;
       localStorage.setItem("Highscore6", highscore3)
    } else{
        highscore3 = Number(highscore3)
    }
    
    setTimeout(writescores, 100)
    
    
    function highscorechecker(){
        if (t < highscore1) {
            highscore3 = highscore2;
            highscore2 = highscore1;
            highscore1 = t;
            localStorage.setItem("Highscore4", highscore1)
            localStorage.setItem("Highscore5", highscore2)
            localStorage.setItem("Highscore6", highscore3)
        } else{if(t < highscore2){
            highscore3 = highscore2;
            highscore2 = t;
            localStorage.setItem("Highscore5", highscore2)
            localStorage.setItem("Highscore6", highscore3)
        } else{ if(t < highscore3){
            highscore3 = t;
            localStorage.setItem("Highscore6", highscore3)
        }
        }
        }
        t = -1;
        writescores()
    }
    
    function writescores() {
        
    
        if (highscore1 !== 60000) {
        document.querySelector("#hs-1").innerHTML = `1. ${writetime(highscore1)}`;   
        } else{
            document.querySelector("#hs-1").innerHTML =  "1.------";    
        }
        if (highscore2 !== 60000) {
            document.querySelector("#hs-2").innerHTML =`2. ${writetime(highscore2)}`;   
            } else{
                document.querySelector("#hs-2").innerHTML =  "2.------";    
            }
        if (highscore3 !== 60000) {
            document.querySelector("#hs-3").innerHTML =  `3. ${writetime(highscore3)}`;   
            } else{
                    document.querySelector("#hs-3").innerHTML =  "3.------";    
            }
    
        }
    
    
    function writetime(tz){
        let t1 = Math.trunc(tz/6000);
        let t2 = Math.trunc((tz - t1*6000)/600)
        let t3 = Math.trunc((tz - t1*6000 - t2*600)/100)
        let t4 = Math.trunc((tz - t1*6000 - t2*600 - t3*100)/10)
        let t5 = Math.trunc(tz % 10)
        return `${t1}${t2}:${t3}${t4}:${t5}0`
    }    


    const boxRight = document.getElementById("right-box")
let boxRighthtml = "";

for (let i = 1; i < 26; i++) {
const temphtml = `<div class="smallboxR" id ="r${i}"></div>`
boxRighthtml =boxRighthtml + temphtml;    
}

boxRight.innerHTML = boxRighthtml;


// ball generation

class Ball{
    

}