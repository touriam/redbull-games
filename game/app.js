
const secondsStart = 30;
let time = secondsStart * 60;
const display = document.querySelector(".time-display");

const flower = document.querySelector(".flower");
const gameContainer = document.querySelector("#container");
const bee = document.querySelector(".bee");
    let seconds = 30;
    let interval = null;
    let win = 'Flower is Pollinated, you win!'



// eventlisteners //
gameContainer.addEventListener('click', function(){
bee.addEventListener('dragstart', function(){

        console.log('start');
        setTimeout(() => this.className = 'invisble', 0);}
    )

    bee.addEventListener('dragend', function(){
        console.log('end');
        this.className = 'bee';
    })

    flower.addEventListener('dragover', function(e){
        e.preventDefault();
        console.log('bee is pollinating me')
        if(display.innerText <= 30){
            display.innerText = win}
        
    })

    flower.addEventListener('drop', function(){
          
        for( let seconds = 0; seconds <30; seconds--){
        this.className = 'flower';
        this.append(bee);  
        
        
        if(display.innerText < 30){
        
        display.innerText = win;
        seconds = 0;
            console.log(win)
    }
        
       
    }
    } )


    
    if(bee){}
    setInterval(function(){
        seconds -- ;
        display.innerText = seconds;
        
        if(display.innerText <= 0){
            display.innerText =('game over');
        if(display.innerText<=30){
            display.innerText= (win);
        }
   
        }
    }, 1000);
    
    }, {once: true}
    
)
    
    
    //https://www.youtube.com/watch?v=C22hQKE_32c&ab_channel=TraversyMedia dragend +dragfill help //


