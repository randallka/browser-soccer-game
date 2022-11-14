// constants 
 //player class 
 class Player { 
    constructor(name, ovr, atk, def) { 
        this.name = name;
        this.ovr = ovr; 
        this.atk = atk;
        this.def = def;
    }
    attack(defPlayer) { 

    }
    defend(atkPlayer) { 

    }
    control(oppPlayer) { 

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
 //team arrays containing player objects 
const arsenal = {
    name: "arsenal", 
    roster: [jesus, odegaard, partey, saka, xhaka, martinelli, gabriel, saliba, zinchenko, white, ramsdale]
}; 
const tottenham = {
    name: "tottenham", 
    roster: [son, kane, kulusevski, hojbjerg, perisic, romero, royal, bentacur, sanchez, dier, lloris]
};

let availableTeams = [arsenal, tottenham]; 
//state variables  
let userPlayers; 
let computerPlayers; 
let userScore; 
let computerScore; 
let gamePhase; 
let instructions; 
let outcome;

//DOM elements chached 
let instructionsEl = document.querySelector(".instructions"); 
let availableTeamBtn = document.querySelector(".teams"); 
let userScoreEl = document.querySelector(".user-score"); 
let computerScoreEl = document.querySelector(".computer-score"); 
let userPlayerEl = document.querySelectorAll(".user-player"); 
let computerPlayerEl = document.querySelectorAll(".computer-player");
let outcomeEl = document.querySelector(".event-outcome");
let userTeamEl = document.querySelector(".user-team");
let computerTeamEl = document.querySelector(".computer-team");
//event listeners 

availableTeamBtn.addEventListener("click", chooseTeam);
//team buttons on click run function to set up rosters w/ player buttons and start game (initial instructions for random attack/defend)


//player buttons to choose player for situation and change class to unavailable 


//functions 

init() 

//choose first attack/defend action randomly
function randomAction() { 
    return (Math.random() < 0.5) ? gamePhase = "attack" : gamePhase = "defend" 
} 

//onclick team selection to create player roster of clickable player buttons 
function chooseTeam(e) { 
    teamName = e.target.innerText; 
    //user team is the selected team
    userTeam = availableTeams.find(player => player.name === teamName);
    //remove team from available so computer can select a team 
    index = availableTeams.indexOf(availableTeams.find(player => player.name === teamName));
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
randomAction() 
render()   
}

//onclick for player buttons to run situation 
//init 
function init() { 
    userScore = 0; 
    computerScore = 0; 
    instructions = "Pick the team you'd like to play as! The computer will select another"
    outcome = ""
    render() 
}
//render 
// player button classes
//score
function render() { 
//remove available teams if a team has been selected 
    if (userTeamEl.querySelector("button") !== null) { 
        availableTeamBtn.remove()
    }
//text to display in instructions based on gamephase 
    if (gamePhase === "attack"){ 
        instructions = "Pick a player to try and score!"           
    } else if (gamePhase === "defend") { 
        instructions = "Pick a player to defend"
    } else if (gamePhase === "control") { 
        instructions = "pick a player to control the game"
    }
//update all elements
    userScoreEl.innerText = userScore; 
    computerScoreEl.innerText = computerScore; 
    instructionsEl.innerText = instructions; 
    outcomeEl.innerText = outcome; 
}

