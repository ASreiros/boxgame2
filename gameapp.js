function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const speedselector = document.querySelector("#select1");
let checkspeed = Number(speedselector.value)
let speed = 3500;
let speedcheck = 1;
speedselector.addEventListener("change", ()=>{
    checkspeed = Number(speedselector.value)    
    switch (checkspeed) {
        case 0:
            speed = 3500;
            speedcheck = 1;  
            break;
        case 3:
            speed = 5000;
            speedcheck = 2;  
            break;
        case 6:
            speed = 1500;
            speedcheck = 3;  
        break;
    }
writescores();    
})




const bbs = document.querySelector("#bbs");
const bbc = document.querySelector("#bbc");
let myTimeout = null;
let info = document.querySelector(".message-screen")

bbs.addEventListener("click", () => {
    bbs.classList.add("bbhiden");
    bbs.classList.remove("bbshown");
    bbc.classList.remove("bbhiden");
    bbc.classList.add("bbshown");
    speedselector.classList.add("noshow")
    info.innerHTML = ""
    stopwatch();
    const obj = new Ball(16)  
})

bbc.addEventListener("click", () => {
    bbc.classList.add("bbhiden");
    bbc.classList.remove("bbshown");
    bbs.classList.remove("bbhiden");
    bbs.classList.add("bbshown");
    speedselector.classList.remove("noshow")
    clearTimeout(myTimeout);
    clock.innerHTML = "00:00:00" 
    gamechecker = 1;
    t = -1;
    info.innerHTML = "Press start to play again";
    document.querySelector(".ball-holder").innerHTML = "";
    for (let i = 1; i < 17; i++) {
        document.querySelector(`#r${i}`).innerHTML = "";   
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


setTimeout(highscoredatacheck, 100)    
    
let highscoredata = [];    
function highscoredatacheck () { 
    
    highscoredata = JSON.parse(localStorage.getItem("Lentynahighscoredata"))
    if(highscoredata === null){
        highscoredata = [];
        for (let i = 0; i < 9; i++) {
        highscoredata.push(60000)    
        }
        console.log(highscoredata);
    }
    switch (checkspeed) {
        case 0:
            highscore1 = highscoredata[0];
            highscore2 = highscoredata[1];
            highscore3 = highscoredata[2];
            break;
        case 3:
            highscore1 = highscoredata[3];
            highscore2 = highscoredata[4];
            highscore3 = highscoredata[5];
            break;            
        case 6:
            highscore1 = highscoredata[6];
            highscore2 = highscoredata[7];
            highscore3 = highscoredata[8];
            break;    
    }
writescores();
}

    
    
    
    
    function highscorechecker(){
        if (t < highscore1) {
            highscore3 = highscore2;
            highscore2 = highscore1;
            highscore1 = t;
        } else{if(t < highscore2){
            highscore3 = highscore2;
            highscore2 = t;
        } else{ if(t < highscore3){
            highscore3 = t;
        }
        }
        }
        t = -1;
        highscoredata[checkspeed] = highscore1;
        highscoredata[checkspeed+1] = highscore2;
        highscoredata[checkspeed+2] = highscore3;
        localStorage.setItem("Lentynahighscoredata", JSON.stringify(highscoredata))
        writescores();
    }
    
    function writescores() {
        checkspeed = Number(speedselector.value)
        highscore1 = highscoredata[checkspeed] 
        highscore2 =  highscoredata[checkspeed+1]
        highscore3 = highscoredata[checkspeed+2] 
        console.log(checkspeed, highscore1, highscore2, highscore3);
    
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

for (let i = 1; i < 17; i++) {
const temphtml = `<div class="smallboxR" id ="r${i}"></div>`
boxRighthtml =boxRighthtml + temphtml;    
}

boxRight.innerHTML = boxRighthtml;


// ball generation

class Ball{
    static randomArr = [];

    static triger(x){
        while (this.randomArr.length < x) {
            let checker = 0;    
            const element = this.rand(1,x);
            this.randomArr.forEach(a => {
                if (a === element){
            checker++
                }
            })

            if(checker === 0){
            this.randomArr.push(element)
            }
        }
    }

    static ballfunction (x){
        for (let i = 0; i < x; i++) {
            //generuoja kamuoliukus
            const ball = document.createElement(`p`);
            const ballnumber = document.createTextNode(`${this.randomArr[i]}`)
            ball.classList.add("ball")
            ball.style.transitionDuration = `${this.rand(speed-1000, speed+1000)}ms`
            ball.setAttribute("id", `bb${this.randomArr[i]}`);
            
            //spalvos blokas
            const color1 = rand(0,255);
            const color2 = rand(0,255);
            const color3 = rand(0,255);
            let color4 = ""
            const suma = color1 + color2 + color3
            if (suma < 350) {
            color4 = "white"    
            } else{
            color4 = "black"    
            }
            ball.style.color = color4
            ball.style.background = `radial-gradient(circle at 15px 15px, rgb(${color1}, ${color2}, ${color3}), #000)` 
            //spalvos blokas-end
            
            ball.appendChild(ballnumber);
            document.querySelector(".ball-holder").appendChild(ball);
            firstpositioning(`bb${this.randomArr[i]}`)
            ball.addEventListener("click", ()=> { iclick(`bb${this.randomArr[i]}`) })
        }
    }

    static rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    constructor(x){
        this.constructor.triger(x);
        this.constructor.ballfunction (x);
     
    }
}

function firstpositioning(id) {
    const target = document.querySelector(`#${id}`);   
    const width = document.querySelector('.ball-holder').clientWidth
    const height = document.querySelector('.ball-holder').clientHeight
    target.style.left = `${rand(-50,width+50)}px`   
    target.style.top = `${rand(-50,height+50)}px`  
    setTimeout(positioning, 0, id)
}

function positioning(id) {
    const checker = id.substring(2)
    if(checker >= gamechecker){
    const target = document.querySelector(`#${id}`);
    const swidth = document.querySelector('.ball-holder').clientWidth*0.05
    const sheight = document.querySelector('.ball-holder').clientHeight*0.05   
    const width = document.querySelector('.ball-holder').clientWidth*0.9
    const height = document.querySelector('.ball-holder').clientHeight*0.9
    target.style.left = `${rand(swidth,width)}px`   
    target.style.top = `${rand(sheight,height)}px`
    let tempspeed =  rand(speed,speed+500);
    setTimeout(positioning, tempspeed, id)
    console.log(tempspeed)
    }
}


function iclick(id) {
    console.log("click located", id);
    if(id === `bb${gamechecker}`){
    myPositionTimeout = clearTimeout   
    const house = document.getElementById(`r${gamechecker}`)
    const iball = document.getElementById(`bb${gamechecker}`)
    iball.removeEventListener("click",iclick)
    iball.setAttribute("id", `bb${gamechecker+16}`)
    iball.classList.remove("ball")
    iball.classList.add("stopball")
    house.appendChild(iball)
        if (gamechecker === 16){
            info.innerHTML = "you won!!!"
            clearTimeout(myTimeout);
            speedselector.classList.remove("noshow")
            highscorechecker();
        }else{
            gamechecker++;
        }
    } else {
    const a = rand(1,3)
    let atext = "";
    let textclearer = setTimeout(textclear,0);
    switch (a) {
        case 1:
            atext = "Wrong ball";
            clearTimeout(textclearer);
            textclearer = setTimeout(textclear,1500);
        break;
        case 2:
            atext = "Nope"
            clearTimeout(textclearer);
            textclearer = setTimeout(textclear,1500);
        break;
        case 3:
            atext = "incorrect, click again"
            clearTimeout(textclearer);
            textclearer = setTimeout(textclear,1500);
        break;
    }    
    info.innerHTML = atext;
    
    function textclear() {
        info.innerHTML = "";  
    } 
    }
    
    }