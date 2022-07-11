//function for countdownTimer V1 for wk1-2
function blastoffTimerV1(){
    console.log("start() function started");
    // created variable currTime set it equal to 10
    var currTime = 10;
    console.log(currTime);
    document.getElementById("countdownStatus").innerHTML = currTime;
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 1000)
    
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 2000)
    
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 3000)
    
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 4000)
    
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 5000)
    
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 6000)
    
    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 7000)

    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 8000)

    setTimeout(function(){
        currTime = currTime - 1;
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log(currTime);
    }, 9000)

  C
    
    }   

//creates option to play craps
function playCraps(){
    console.log("playCraps() started");
    var diel1;
    var diel2;
    var sum;

    //roll the dice
    diel1 = Math.floor(Math.random()*6) + 1;
    console.log(diel);
    die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2)
    //determine the sum of teh two dice and save it in sum

    sum = die1 + die2;
    console.log("sum is equal to " + sum);

    if(sum == 7 || sum ==11){
        document.getElementById("crapsStatus").innerHTML "Craps!! you lose!"
        //making it so you lose if you get either 7 or 11
    } else if(die1 == die2 && die1%2 == 0){
        document.getElementById("crapsStatus").innerHTML = "Huzzah! You Win!!!"
        //creating the scenario where you win the game
    } else {
        document.getElementById("crapsStatus").innerHTML = "You did not win or loose, please play again"
        //creating the scenario where you lose the game
    }

    }
}

function blastoffTimerV2(){
    console.log("blastoffTimerV2() started");
    //want a loop that runs 11 times, 10-1 and then blastoff
    var countdownTimer = 10
    var stepTime = 1000;

    for(var i = 0: i < 10; i = i + 1){
        setTimeout(function(){ 
        console.log(countdownTimer);
        document.getElementById("countdownStatus").innerHTML = countdownTimer;
        countdownTimer = countdownTimer - 1;
         }, stepTime * i)
    }
    setTimeout(function(){
        //what we do after the delay
        document.getElementById("countdownStatus").innerHTML = currTime;
        console.log("Blastoff");
    }, stepTime * countdownTimer)
    document.getElementById("countdownStatus").innerHTML = "Blastoff"
}

function blastoffTimerV3(){
    console.log("blastoffTimerV2() started");
    //want a loop that runs 11 times, 10-1 and then blastoff
    var countdownTimer = 10
    var stepTime = 1000;

    for(var i = 0: i <= countdownTimer; i = i + 1){
        setTimeout(function(){ 
        console.log(countdownTimer);
        if(countdownTimer == 0){
            document.getElementById("countdownStatus").innerHTML = currTime;
            console.log("Blastoff");
        } else if (currTime < 5){
            document.getElementById("countdownStatus").innerHTML = “Warning Less than ½ way to launch, time left = insert variable here = " + countdownTimer 
            console.log("Blastoff");
        } else {
            document.getElementById("countdownStatus").innerHTML = countdownTimer;
        countdownTimer = countdownTimer - 1;
        }
      }, stepTime * i)
    }
}
//starts the function
function startFun(){
    console.log("startFun() started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//stops the function
function stopFun(){
    console.log("stopFun() started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}
//creates ability to play audio
function playStation(){
    console.log("playStation() started");
    //play spaceStation sounds here
    mySound = new sound("us-lab-backround.mp3")
    mySound.play();
}
//creates a pth to the source file
function sound(srcFile){
    console.log("sound function started");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload","audio");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
//this creates the sound
//gives user control over the sound
//gives option to preload the audio
//choopses which Child to append
//creates function to plasy the audio
//creates function to stop the audio
   
   