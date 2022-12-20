
const secondsStart = 30;
let time = secondsStart * 60;
const display = document.querySelector(".time-display");

const flower = document.querySelector(".flower");
const gameContainer = document.querySelector("#container");

    let seconds= 30;
    let interval = null;
    
// setInterval(() => {
//     seconds--;
    
//     if(seconds === 30){
//      display.innerText = `${sec}`;
//     display.innerText = seconds;   
//     }
    
    
// }, 3000);

gameContainer.addEventListener('click', function(){

    setInterval(function(){
        seconds -- ;
        display.innerText = seconds;
        if(display.innerText <=0){
            display.innerText =('game over');
        }
    }, 1000);
    
    }
    
)
    
    
//     seconds--;
//     let sec = seconds % 60;
//     display.innerText = `${sec}`;
//     if(seconds == 15){
//      display.innerText = `${sec}`;
//     display.innerText = seconds;   
//     }
//     if(display.innerText <= 0){
//         display.innerText= ('winner');
//     }
//     }

    
    

// );


