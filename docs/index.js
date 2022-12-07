const hourContent = document.getElementById('hour');
const minContent = document.getElementById('minute');
const secContent = document.getElementById('second');
const miliSecContent = document.getElementById('milisec');
const laped = document.getElementById('laped');
const container = document.getElementById('contaier');


const controls = document.querySelectorAll('.controlBtns');

let hour = 0;
let min = 0;
let sec = 0;
let miliSec = 0;


const startWatch = () => {
    const sI = setInterval(()=>{
        miliSec++
        miliSecContent.innerHTML = miliSec

        if(miliSec === 500){
            miliSec = 0;
            sec++
            secContent.innerHTML = sec;

            if(sec === 60){
                sec = 0;
                min++;
                minContent.innerHTML = min;
                if(min === 60){
                    min = 0;
                    hour++;
                    hourContent.innerHTML = hour;
                }
            }

        }

        const pauseWatch = () => {
            clearInterval(sI);
           
        }
        
        controls[1].addEventListener('click', pauseWatch);

        const stopWatch =  () =>{
            clearInterval(sI);
            hour = '00';
            min = '00';
            sec = '00';
            miliSec = '00';
            secContent.innerHTML = sec;
            minContent.innerHTML = min;
            hourContent.innerHTML = hour;

        }

        controls[3].addEventListener('click', stopWatch);
        
        
    }, 1)
    
 

}
    
controls[0].addEventListener('click', startWatch);




const lapWatch = () => {
    document.getElementsByTagName('body').innerHTML += `<div class="laped">
    <span id="hour">00</span>:<span id="minute">00</span>:<span id="second">00</span>:<span id="milisec">00</span>
</div>`;
alert('laped!')
}

controls[2].addEventListener('click', lapWatch)