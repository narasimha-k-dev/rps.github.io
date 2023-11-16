/*function nuw(){
    let sti=document.querySelector('.ip');
        let cal=Number(sti.value);
       console.log( cal);
        if(cal<=40){
          cal+=10;
        }
        document.querySelector('.dollar').innerHTML=cal;
       
}*/
 

function cmv(){
    const ran=Math.random();
    let comp;
if(ran<=1/3 ){
  comp='rock';
}
else if(ran>1/3 && ran<=2/3){
comp='paper';
}
else {
    comp='scissors';
}
return comp;
}
document.querySelector('.js-rock-button').addEventListener('click',()=>{
  improve('rock');
});
document.querySelector('.js-paper-button').addEventListener('click',()=>{
  improve('paper');
});
document.querySelector('.js-scissor-button').addEventListener('click',()=>{
  improve('scissors');
});
function improve(sign){
const comp=cmv();
var result='';

if(sign==='rock'){
if(comp==='rock'){
result='tie';
}
else if(comp==='paper'){
result='you lose';
}
else{result='you win';}
}

else if(sign==='paper'){
if(comp==='paper'){
result='tie';
}
else if(comp==='rock'){
result='you lose';
}
else{result='you win';}
}
else{
if(comp==='scissors'){
result='tie';
}
else if(comp==='paper'){
result='you win';
}
else{result='you loss';}
}


if(result==='you win'){
score.wins++;
}else if(result==='you loss'){
score.loss++;
} else{
score.tie++;
}
localStorage.setItem('score',JSON.stringify(score));
document.querySelector('.para').innerHTML=`${result}`;
document.querySelector('.moves').innerHTML=`you <img class="icons" src="${sign}-emoji.png"> &&  computer <img class="icons" src="${comp}-emoji.png" alt="">`;
item();

}

function item(){
document.querySelector('.score').innerHTML=`wins-${score.wins} losses-${score.loss} ties-${score.tie}`;
}

let isautoplaying=false;
let autoId;
document.querySelector('.js-autoplay').addEventListener('click',()=>{
  autoplay();
 
});



function autoplay(){
  if(!isautoplaying){
   autoId=setInterval(() =>{
    sign=cmv();
    improve(sign);
   }, 1000);
   isautoplaying=true;
  }
  else{
    clearInterval(autoId);
    isautoplaying=false;

  }
  const stopelement=document.querySelector('.js-autoplay');
  if(!stopelement.classList.contains('stop')){
     stopelement.innerHTML='stop playing';
     stopelement.classList.add('stop');
  }
  else{
   stopelement.innerHTML='auto play';
   stopelement.classList.remove('stop');
  }
}