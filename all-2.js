const score=JSON.parse(localStorage.getItem('score'))||{wins:0,loss:0,tie:0};
 item();

document.querySelector('.js-reset').addEventListener('click',()=>{
    displaynotification();
   });

function displaynotification(){
    const Html=`are you sure,want to delete?
    <button class="yes-button">yes</button>
    <button class="no-button">no</button>`;
   const sorn= document.querySelector('.js-notification');
   sorn.innerHTML=Html;
   document.querySelector('.yes-button').addEventListener('click',()=>{
    resetscore();
    sorn.innerHTML='';

   });
   document.querySelector('.no-button').addEventListener('click',()=>{
    sorn.innerHTML='';
   })
}

function resetscore(){
  
    score.wins=0;
    score.loss=0;
    score.tie=0;
    item();
    localStorage.removeItem('score');
  }
  document.body.addEventListener('keydown',(Event)=>{
    if(Event.key==='a'){
      autoplay();
    }
    else if(Event.key==='Backspace'){
      displaynotification();
    }
    else if(Event.key==='r'){
        improve('rock');
    }
    else if(Event.key==='p'){
        improve('paper');
    }
    else if(Event.key==='s'){
        improve('scissors');
    }
  });