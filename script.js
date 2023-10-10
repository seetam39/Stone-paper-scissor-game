let compscore=document.getElementById("scores-comp");
let userscore=document.getElementById("scores-user");
let comp=document.getElementById("comp");
let user=document.getElementById("user");
let btn1=document.getElementById("btn1");
let btn2=document.getElementById("btn2");
let btn3=document.getElementById("btn3");
let winner=document.getElementById("winner");
let playagain=document.getElementById("play-again")
// ****************************user moves*************************************
points=0;
point=0;
keys=(num)=>{
    user.innerHTML=num
    console.log(num)

    if(user.innerHTML==0){
        user.style.backgroundImage="url('stone.png')"
        user.style.backgroundSize="95%";
    }
    else if(user.innerHTML==1){
        user.style.backgroundImage="url('paper.png')"
        user.style.backgroundSize="95%";

    }
    else if(user.innerHTML==2){
        user.style.backgroundImage="url('scissor.png')"
        user.style.backgroundSize="95%";

    }



// ************************comp moves*****************************

    let comp1=Math.floor(Math.random()*3)
    console.log(comp1)
    comp.innerHTML=comp1;

    if(comp.innerHTML==0){
        comp.style.backgroundImage="url('stone2.png')"
        comp.style.backgroundSize="95%";
    }
    else if(comp.innerHTML==1){
        comp.style.backgroundImage="url('paper2.png')"
        comp.style.backgroundSize="95%";

    }
    else if(comp.innerHTML==2){
        comp.style.backgroundImage="url('scissor2.png')"
        comp.style.backgroundSize="95%";

    }




// **************************game logic*********************************

    if(comp.innerHTML==user.innerHTML){
        console.log("tied")
    }
    else if(comp.innerHTML==0 && user.innerHTML==1){
        console.log("user won")
        points++;
        userscore.innerHTML=points;
    }
    else if(comp.innerHTML==0 && user.innerHTML==2){
        console.log("comp won")
        point++;
        compscore.innerHTML=point;
    }
    else if(comp.innerHTML==1 && user.innerHTML==0){
        console.log("comp won")
        point++;
        compscore.innerHTML=point;
    }
    else if(comp.innerHTML==1 && user.innerHTML==2){
        console.log("user won")
        points++;
        userscore.innerHTML=points;
    }
    else if(comp.innerHTML==2 && user.innerHTML==0){
        console.log("user won")
        points++;
        userscore.innerHTML=points;
    }
    else if(comp.innerHTML==2 && user.innerHTML==1){
        console.log("comp won")
        point++;
        compscore.innerHTML=point;
    }

    if(compscore.innerHTML==8){
        winner.style.display="flex";
        winner.innerHTML="OOPS 😥😥😥 you lose. Better luck next time."
        btn1.style.display="none"
        btn2.style.display="none"
        btn3.style.display="none"
        playagain.style.display="block";
        }
        else if(userscore.innerHTML==8){
        winner.innerHTML="CONGRATULATIONS 🎉🎉You Won🎊🎊"
        winner.style.display="flex";
        btn1.style.display="none"
        btn2.style.display="none";
        btn3.style.display="none";
        playagain.style.display="block";
        }

        user.innerText="";
        comp.innerText="";
 
}

playagain.addEventListener("click",function(){
    window.location.reload();
})