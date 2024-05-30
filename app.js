 let gameSeq=[];
 let userSeq=[];
 let btns = ["yellow","red","purple","green"];

 let started= false;
 let level=0;
 let h2=document.querySelector("h2");

 document.addEventListener("keypress", function(){
  //console.log("game started");
  if (started== false){
    console.log("game is started"); // Using this fun game will start only 1 time
    started= true;           // level1 complete

    levelUp();
  }
 })  //--->level1 completed

 // level2 : btn flash +level1

 function gameFlash( btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
 }

  function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
      btn.classList.remove("userFlash");
    }, 250);
  }


 function levelUp(){

  userSeq= [];
  level++;  // level up done
  h2.innerText=`Level ${level}`; //level name updated
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randBtn);
  // console.log(randIdx);
  // console.log(randColor);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);

 }   //----> level2 completed



 // level3: Btn press by user [Event trigger help] then check
 function checkAns(idx){
  //console.log("curr level:", level);
 // let idx= level -1;
  if (userSeq[idx] == gameSeq[idx]){
    if( userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);
    }
    //console.log("same value");

  } else{
    h2.innerHTML = `Game Over! Your Score was<b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },150)
    reset();
  }
 }
 
 
 function btnPress(){
    
    //console.log(this);// check which button is pressed.
   let btn = this;
   userFlash(btn);
   userColor = btn.getAttribute("id");
   userSeq.push(userColor);
   checkAns(userSeq.length-1);
   //console.log(userColor);
  }

    let allBtns=document.querySelectorAll(".btn");// To acess all the btn from html
    for( btn of allBtns){
      btn.addEventListener("click", btnPress);
    }

    function reset(){
      started = false;
      gameSeq = [];
      userSeq = [];
      level = 0;
    }
