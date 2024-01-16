let gameseq=[];
let playerseq=[];
 let started=false;
 let level=0;
//let btn=document.querySelector("btn");
 let btns=["red","aqua","green","yellow"];
 let h2=document.querySelector("h2");
 document.addEventListener("keypress",function(){
    if(started==false){
        console.log("started game");
        started=true;
        levelup();
       
    }
 });

 function btnflash(btn){
   btn.classList.add("flash");
   setTimeout( function(){
    btn.classList.remove("flash");
   }, 250);
  }

  function levelup(){
   playerseq=[];
   level++;
   h2.innerText=`level ${level}`;
   let radidx=Math.floor(Math.random()*4);
   let radcolor=btns[radidx];
   let radbtn= document.querySelector(`.${radcolor}`);
    gameseq.push(radcolor);
    console.log(gameseq);
    btnflash(radbtn);
    
}

function check(idx){
   //let idx=level-1;
   if(playerseq[idx]===gameseq[idx]){
     if(playerseq.length==gameseq.length){
      setTimeout(levelup,1000);
     }
   }
   else{
      h2.innerHTML=`gameover!your score is ${level}<br> press any key to start`;
      let body=document.querySelector("body").style.backgroundColor="white";
      setTimeout(function(){
       body.style.backgroundColor="red";
      },150);
      started=false;
      level=0;
      gameseq=[];
      playerseq=[];
   }
 }

 function btnpress(){
   let btn=this;
   let some= btn.getAttribute("id");
   playerseq.push(some);
  console.log(playerseq);
   btnflash(btn);
  // console.log(playerseq.length);
   check(playerseq.length-1);
 }

 let allbtns=document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click",btnpress);
 }
 
 