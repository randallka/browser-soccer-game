// state variables
let userTeam; 
let computerTeam; 
let userScore; 
let computerScore; 
let gamePhase; 
let instructions; 
let outcome;
 //player class 
 class Player { 
    constructor(name, ovr, atk, def) { 
        this.name = name;
        this.ovr = ovr; 
        this.atk = atk;
        this.def = def;
    }
    //gamephase methods that alter the score and gamephase, displaying messages while they do so 
    attack(defPlayer) { 
        if ((this.ovr + (this.atk * 1.5)) >= (defPlayer.ovr + (defPlayer.def * 1.5))) { 
            userScore += 1
            outcome = `${this.name} beats ${defPlayer.name}  and scores!`
            gamePhase = "control"
        } else if ((defPlayer.ovr + (defPlayer.def * 1.5)) > (this.ovr + (this.atk * 1.5))) { 
            computerScore += 0
            outcome = `${defPlayer.name} stops ${this.name}'s attack`
            gamePhase = "control"
        }
    }
    defend(atkPlayer) { 
        if ((this.ovr + (this.def * 1.5)) > (atkPlayer.ovr + (atkPlayer.atk * 1.5))) { 
            userScore += 0
            outcome = `${this.name} defends well and takes the ball from ${atkPlayer.name}`
            gamePhase = "control"
        } else if ((atkPlayer.ovr + (atkPlayer.atk * 1.5)) >= (this.ovr + (this.def * 1.5))) { 
            computerScore += 1
            outcome = `${this.name} fails to defend and ${atkPlayer.name} scores!`
            gamePhase = "control"
        }
    }
    control(oppPlayer) { 
        if ((this.atk + this.def) >= (oppPlayer.atk + oppPlayer.def)) { 
            outcome = `${this.name} controls the game and starts an attack!`
            gamePhase = "attack"
        } else if ((this.atk + this.def) < (oppPlayer.atk + oppPlayer.def)) { 
            outcome = `${oppPlayer.name} takes the ball from ${this.name} and your team must defend!`
            gamePhase = "defend"
        }
    }
 }

 
//creating all players 
//arsenal players
jesus = new Player("Jesus", 85, 83, 41);
odegaard = new Player("Odegaard", 84, 81, 58); 
partey = new Player("Partey", 84, 78, 80); 
saka = new Player("Saka", 85, 83, 65); 
xhaka = new Player("Xhaka", 79, 74, 71); 
martinelli = new Player("Martinelli", 80, 78, 48); 
gabriel = new Player("Gabriel", 82, 55, 86); 
saliba = new Player("Saliba", 81, 54, 83); 
zinchenko = new Player("Zinchenko", 80, 73, 79); 
white = new Player("White", 79, 64, 81); 
ramsdale = new Player("Ramsdale", 82, 40, 85); 
//tottenham players 
son = new Player("Son", 87, 86, 40); 
kane = new Player("Kane", 87, 85, 42); 
kulusevski = new Player("Kulusevski", 81, 80, 56); 
hojbjerg = new Player("Hojbjerg", 83, 76, 79); 
perisic = new Player("Perisic", 83, 80, 74); 
romero = new Player("Romero", 83, 58, 84); 
royal = new Player("Royal", 78, 68, 75); 
bentacur = new Player("Bentacur", 79, 76, 78); 
sanchez = new Player("Sanchez", 79, 56, 79)
dier = new Player("Dier", 80, 67, 80); 
lloris = new Player("Lloris", 85, 40, 87);

 //team arrays containing rosters
const arsenal = {
    name: "arsenal", 
    roster: [jesus, odegaard, partey, saka, xhaka, martinelli, gabriel, saliba, zinchenko, white, ramsdale]
}; 
const tottenham = {
    name: "tottenham", 
    roster: [son, kane, kulusevski, hojbjerg, perisic, romero, royal, bentacur, sanchez, dier, lloris]
};

let availableTeams = [arsenal, tottenham];  

//DOM elements chached 
let instructionsEl = document.querySelector(".instructions"); 
let availableTeamBtn = document.querySelector(".teams"); 
let userScoreEl = document.querySelector(".user-score"); 
let computerScoreEl = document.querySelector(".computer-score"); 
let outcomeEl = document.querySelector(".event-outcome");
let userTeamEl = document.querySelector(".user-team");
let computerTeamEl = document.querySelector(".computer-team");

//event listeners 

availableTeamBtn.addEventListener("click", chooseTeam);
userTeamEl.addEventListener("click", select);

init() 

//functions

//remove available teams if a team has been selected 
function removeTeams() { 
    if (userTeamEl.querySelector("button") !== null) { 
    availableTeamBtn.remove();
    }
}
//choose first attack/defend action randomly
function randomAction() { 
    return (Math.random() < 0.5) ? gamePhase = "attack" : gamePhase = "defend";
} 

//if computer roster is empty then evaluate the score and display the end game message 
function checkWin() { 
    if (computerTeam.roster.length === 0) { 
        userTeamEl.removeEventListener("click", select);
        if (userScore > computerScore) { 
            instructions = "Your team won the game! Go celebrate! reload the page to play again";
        } else if (userScore < computerScore) { 
            instructions = "Your team lost. Reload the page to play again";
        } else if (userScore === computerScore) { 
            instructions = "It's a tie! (Yep ties happen in soccer, sorry)";
        }
}
}
function setInstructions() { 
    if (gamePhase === "attack"){ 
        instructions = "Pick a player to try and score!";           
    } else if (gamePhase === "defend") { 
        instructions = "Pick a player to defend";
    } else if (gamePhase === "control") { 
        instructions = "Pick a player to control the game";
    }
}
//onclick team selection to create player roster of clickable player buttons 
function chooseTeam(e) { 
    teamName = e.target.innerText; 
    //user team is the selected team
    userTeam = availableTeams.find(team => team.name === teamName);
    //remove team from available so computer can select a team 
    index = availableTeams.indexOf(availableTeams.find(team => team.name === teamName));
    availableTeams.splice(index, 1); 
    //add plyer buttons to user roster 
   userTeam.roster.forEach(player => { 
        playerBtn = document.createElement("button");
        let name = document.createTextNode(player.name); 
        playerBtn.appendChild(name);
        playerBtn.classList.add("unUsed");
        userTeamEl.appendChild(playerBtn); 
   })
   //add players to computer roster 
   computerTeam = availableTeams[Math.floor(Math.random() * availableTeams.length)]; 
   computerTeam.roster.forEach(player => { 
        playerBtn = document.createElement("button");
        let name = document.createTextNode(player.name); 
        playerBtn.appendChild(name);
        playerBtn.classList.add("unUsed");
        playerBtn.classList.add("unclickable"); 
        computerTeamEl.appendChild(playerBtn); 
})
    randomAction(); 
    removeTeams();
    setInstructions();
    render();   
}

//select function to use player for gamePhase
function select(e) { 
    playerName = e.target.innerText;
    selectedPlayer = userTeam.roster.find(player => player.name === playerName);
//computer randomly selects player to compete
    computerPlayerIndex = Math.floor(Math.random() * computerTeam.roster.length);
    computerPlayer = computerTeam.roster[computerPlayerIndex];
//caching button to add used class  
    function getBtn() {for (const a of document.querySelectorAll("button")) {
        if (a.textContent.includes(computerPlayer.name)) {
            return a
        }
      }
    }
    computerPlayerBtn = getBtn();

//run action function if player is unUsed 
    if (e.target.classList.contains("unUsed")) {
        if (gamePhase === "attack") { 
            selectedPlayer.attack(computerPlayer);
        } else if (gamePhase === "defend") { 
            selectedPlayer.defend(computerPlayer);
        } else if (gamePhase === "control") { 
            selectedPlayer.control(computerPlayer);
        };
//adjust player classes to show on screen and remove event listener from button 
        e.target.classList.remove("unUsed");
        e.target.classList.add("used");
        computerPlayerBtn.classList.remove("unUsed");
        computerPlayerBtn.classList.add("used");
        computerTeam.roster.splice(computerPlayerIndex, 1);
    }
    setInstructions();
    checkWin();
    render();
}


//init 
function init() { 
    userScore = 0; 
    computerScore = 0; 
    instructions = "Pick the team you'd like to play as! The computer will select another"
    outcome = ""
    render(); 
}

function render() { 
    userScoreEl.innerText = userScore; 
    computerScoreEl.innerText = computerScore; 
    instructionsEl.innerText = instructions; 
    outcomeEl.innerText = outcome; 
}

