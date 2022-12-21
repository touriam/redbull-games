
const secondsStart = 30;
let time = secondsStart * 60;
const display = document.querySelector(".time-display");

const flower = document.querySelector(".flower");
const gameContainer = document.querySelector("#container");
const bee = document.querySelector(".bee");
    let seconds= 30;
    let interval = null;
    let win = ('Flower is Pollinated, you win!')



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
        if(display.innerText <= 0){
            display.innerText =('Flower is Pollinated, you win!')}
        
    })

    flower.addEventListener('drop', function(){
        console.log('im giving the bee some nectar')
        this.className = 'flower';
        this.append(bee);
        if(display.innerText <=30){
        
        display.innerText =('Flower is Pollinated, you win!')}
        
        if (display.innerText = 'Flower is Pollinated, you win!') {
            
        }
        if(display.innertext == 0){
            display.innerText= 'game over';
        }
    } )


    
    if(bee){}
    setInterval(function(){
        seconds -- ;
        display.innerText = seconds;
        
        if(display.innerText <= 0){
            display.innerText =('game over');
        
        if(display.innerText < 30){
            display.innerText =('Flower is Pollinated, you win!')
        }
       
        if (display.innerText == 'Flower is Pollinated, you win!') {
            
        }
        // if(display.innerText = 'Flower is Pollinated, you win!'){

        //     // if(display.innerText = ('Flower is Pollinated, you win!')){
            
        //     display.innerText = 'Flower is Pollinated, you win!'
            
        // }
        }
    }, 1000);
    
    }, {once: true}
    
)
    
    
    //https://www.youtube.com/watch?v=C22hQKE_32c&ab_channel=TraversyMedia dragend +dragfill help //


