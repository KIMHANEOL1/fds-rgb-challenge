//문자열이 랜덤으로 나오게 하는 코드
function randomNumber(){
    return Math.floor(256 * Math.random());   //256보다 작은 수가 랜덤으로 나오게 함
}


function randomColorCode(){
    return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
}


const colorCodeEl = document.querySelector('.color-code');
const boxes = document.querySelectorAll('.box');

let correctAnswer;
let score=0;
document.querySelector('.score').textContent = score;


function newStage(){
    const colorCodes=[randomColorCode(),randomColorCode(),randomColorCode()]
    console.log(colorCodes);
    boxes.forEach((el,index)=>{
        el.style.backgroundColor = colorCodes[index];
    });
    correctAnswer = Math.floor(Math.random() * 3);
    colorCodeEl.textContent= colorCodes[correctAnswer];
}



boxes.forEach((el, index)=>{
    el.addEventListener('click',()=>{
        el.classList.add('large');
        if(correctAnswer === index){
            document.querySelector('.modal.right').classList.add('show');
            score++;
        }else{
            score=0;
        }
        document.querySelector('.score').textContent = score;
    })
    
})



document.querySelector('.modal.right .close').addEventListener('click',()=>{
    newStage();
    boxes.forEach(el =>{
    el.classList.remove('large');
});
    document.querySelector('.modal.right').classList.remove('show');
})


newStage();




