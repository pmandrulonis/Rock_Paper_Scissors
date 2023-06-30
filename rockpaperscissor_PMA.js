
let userrunningscore = 0
let cpurunningscore = 0
let directions = "The game is simple, select rock, paper or scissors. Rock breaks scissors, scissors cuts paper and paper covers rock. We'll keep track of the score to see if you can beat the computer. After each round, you can choose to quit."
let prompt=require("prompt-sync")({sigint:true});
let name = prompt("What should I call you?")
let WouldYouLiketoPlay = prompt("Ok, " + name + " would you like to play a game of Rock, Paper, Scissors?");

    if(WouldYouLiketoPlay == "Y" || WouldYouLiketoPlay =="y" || WouldYouLiketoPlay == "yes" || WouldYouLiketoPlay == "Yes"){
        console.log("Alright, let's play!") 
        console.log(directions)
        console.log(" ")
        RPSGame()
    }else if(WouldYouLiketoPlay == "N" || WouldYouLiketoPlay == "n" || WouldYouLiketoPlay == "No" || WouldYouLiketoPlay == "no"){
        let scaredycat = prompt("What are you too scared?");
        if(scaredycat == "Yes" || scaredycat == "Y" || scaredycat == "y" || scaredycat == "yes"){
            console.log("Bye")
        }else if(scaredycat =="No" || scaredycat == "no" || scaredycat == "n" || scaredycat == "N"){
            console.log("Ok, if you're not scared, let's play.")
            console.log(directions)
            console.log(" ")
            RPSGame()
        }
    }else{
        let wrongentry = prompt("Please type Y for Yes or N for No.");
        if(wrongentry == "Y" || wrongentry == "Yes" || wrongentry == "y"|| wrongentry == "yes"){
            RPSGame()
        }else{console.log("Bye Bye")

        }
    }

function RPSGame(){
    let userscore = 0
    let computerscore = 0
    let userchoice = prompt("Rock, Paper or Scissors?")
    let possiblechoices = ["Rock", "Paper", "Scissors"]
    let CPUSmacktalk = ["Dummy", "This is too easy.", "LOSER!!"]
    let encouragementlist = ["Great Job!", "Let's go!", "You won!"]
    let encouragement = encouragementlist[Math.floor(Math.random()*encouragementlist.length)];
    let smacktalk = CPUSmacktalk[Math.floor(Math.random()*CPUSmacktalk.length)];
    let computerchoice = possiblechoices[Math.floor(Math.random() * possiblechoices.length)];

    if(userchoice == computerchoice){
        console.log("You tied the computer.")
        console.log(name + ": " + userrunningscore + " Computer: " + cpurunningscore)
    } else if(userchoice == "Rock" || userchoice == "rock" && computerchoice == "Scissors"){
        userscore += 1
        userrunningscore += 1
        console.log(encouragement)
        console.log(name + ": " + userrunningscore + " Computer: " + cpurunningscore)
    } else if(userchoice == "Paper" || userchoice == "paper" && computerchoice == "Rock"){
        userscore += 1
        userrunningscore += 1
        console.log(encouragement)
        console.log("Your Score: " + userrunningscore + " Computer Score: " + cpurunningscore)
    } else if(userchoice == "Scissors" || userchoice == "scissors" && computerchoice == "Paper"){
        userscore += 1
        userrunningscore += 1
        console.log(encouragement)
        console.log(name + ": " + userrunningscore + " Computer: " + cpurunningscore)
    } 
    else{console.log("The Computer got you that time.")
        cpurunningscore += 1
        console.log(smacktalk)
        console.log(name + ": " + userrunningscore + " Computer: " + cpurunningscore)}
//    if(userchoice !== "Rock" || userchoice !== "rock" || userchoice !== "Scissors" || userchoice !== "scissors" || userchoice !== "Paper" || userchoice !== "paper"){
//        console.log("I'm sorry if I wasn't clear, the choices are Rock, Paper or Scissors.")
//}
    let playagain = prompt("Do you want play again? Type Y for Yes.")
    if(playagain == "Y" || playagain == "y" || playagain == "yes" || playagain == "Yes"){
        console.log(" ")
        RPSGame()
    } 
    else if(playagain != "Y" || playagain != "y" || playagain != "yes" || playagain != "Yes"){
        let areyousure = prompt("Are you sure you want to quit?")
        if(areyousure == "Yes" || areyousure == "yes" || areyousure == "y" || areyousure == "Y"){
        console.log("----------------")
        console.log("Thank you for playing Rock, Paper, Scissors.")
        let finalscore = "The Final Score was " + name + ": " + userrunningscore + " Computer: " + cpurunningscore
        if(userrunningscore < cpurunningscore){
            console.log("You lost! The machines have shown their superiority.")
            console.log(finalscore)
        }else if(userrunningscore > cpurunningscore){
            console.log("You won! There's still a chance for humanity!")
            console.log(finalscore)
        }else{console.log("This battle between human and machine has ended in a draw.")
        console.log(finalscore)}
    } else{
        console.log("Let's keep playing.")
        RPSGame()
    }
    }
}
