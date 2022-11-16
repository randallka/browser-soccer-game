// state variables
let userTeam;
let userName;
let computerTeam; 
let computerName;
let userScore; 
let computerScore; 
let gamePhase; 
let instructions; 
let outcome;

//sounds 

const goalSound = new Audio('Audio/crowdCheer.mp3');
const ambientCrowd = document.querySelector(".background");
const whistleSound = new Audio("Audio/whistle.mp3");
const awSound = new Audio("Audio/crowdAww.mp3");
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
        goalSound.pause();
        goalSound.currentTime = 0;
        if ((this.ovr + (this.atk * 1.5)) >= (defPlayer.ovr + (defPlayer.def * 1.5))) { 
            userScore += 1
            outcome = `${this.name} beats ${defPlayer.name}  and scores!`
            gamePhase = "control"
            goalSound.play();
        } else if ((defPlayer.ovr + (defPlayer.def * 1.5)) > (this.ovr + (this.atk * 1.5))) { 
            computerScore += 0
            outcome = `${defPlayer.name} stops ${this.name}'s attack`
            gamePhase = "control"
        }
    }
    defend(atkPlayer) { 
        awSound.pause();
        awSound.currentTime = 0;
        if ((this.ovr + (this.def * 1.5)) > (atkPlayer.ovr + (atkPlayer.atk * 1.5))) { 
            userScore += 0
            outcome = `${this.name} defends well and takes the ball from ${atkPlayer.name}`
            gamePhase = "control"
        } else if ((atkPlayer.ovr + (atkPlayer.atk * 1.5)) >= (this.ovr + (this.def * 1.5))) { 
            computerScore += 1
            awSound.play();
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
// PSG plyers
messi = new Player("Messi", 90, 89, 34); 
mbappe = new Player("Mbappe", 89, 88, 36);
neymar = new Player("Neymar", 88, 87, 36);
verratti = new Player("Verratti", 86, 85, 79);
vitinha = new Player("Vitinha", 80, 78, 67);
marquinhos = new Player("Marquinhos", 87, 66, 87);
ramos = new Player("Ramos", 83, 70, 83);
hakimi = new Player("Hakimi", 83, 78, 75);
kimpembe = new Player("Kimpembe", 83, 57, 82);
bernat = new Player("Bernat", 78, 74, 75);
donnarumma = new Player("Donnarumma", 87, 38, 88)
//Inter players
martinez = new Player("Martinez", 85, 82, 48);
lukaku = new Player("Lukaku", 85, 83, 38);
dzeko = new Player("Dzeko", 82, 81, 45);
barella = new Player("Barella", 83, 80, 77);
brozovic = new Player("Brozovic", 84, 78, 81);
calhanoglu = new Player("Calhanoglu", 83, 83, 64);
mikhitaryan = new Player("Mikitaryan", 80, 79, 56);
skriniar = new Player("Skriniar", 84, 55, 86);
vrij = new Player("Vrij", 83, 51, 84);
dumfries = new Player("Dumfries", 81, 67, 78);
handanovic = new Player("Handanovic", 84, 38, 86);
//Real Madrid Players
benzema = new Player("Benzema", 90, 87, 37);
vinicius = new Player("Vinicius Jr.", 85, 84, 29);
hazard = new Player("Hazard", 84, 84, 35);
modric = new Player("Modric", 88, 85, 70);
kroos = new Player("Kroos", 86, 83, 71);
valverde = new Player("Valverde", 83, 77, 78);
rudiger = new Player("Rudiger", 86, 63, 86); 
alaba = new Player("Alaba", 85, 78, 84);
carvajal = new Player("Carvajal", 83, 70, 78);
militao = new Player("Militao", 83, 60, 83);
courtois = new Player("Courtois", 89, 39, 89);
//Barcelona Players
lewandowski = new Player("Lewandowski", 90, 88, 43);
dembele = new Player("Dembele", 83, 81, 36);
ansu = new Player("Ansu Fati", 81, 78, 35);
deJong = new Player("De Jong", 86, 82, 77);
pedri = new Player("Pedri", 84, 81, 68);
depay = new Player("Depay", 83, 83, 30);
alba = new Player("Alba", 84, 76, 78);
kounde = new Player("Kounde", 84, 67, 85);
arujo = new Player("Arujo", 82, 60, 83);
christensen = new Player("Christensen", 81, 55, 83);
stegen = new Player("ter Stegen", 86, 32, 87);
//Bayern Players
mane = new Player("Mane", 88, 86, 44);
sane = new Player("Sane", 84, 83, 38);
coman = new Player("Coman", 84, 83, 35);
kimmich = new Player("Kimmich", 88, 82, 83);
goretzka = new Player("Goretzka", 86, 82, 80);
muller = new Player("Muller", 84, 82, 56);
ligt = new Player("De Ligt", 85, 62, 84);
davies = new Player("Davies", 83, 77, 76);
hernandez = new Player("Hernandez", 83, 64, 84);
upmecano = new Player("Upmecano", 81, 53, 80);
neuer = new Player("Neuer", 89, 35, 90);
//Dortmund Players 
haller = new Player("Haller", 81, 78, 52);
reus = new Player("Reus", 84, 84, 53);
bellingham = new Player("Bellingham", 84, 80, 77);
brandt = new Player("Brandt", 82, 81, 48);
can = new Player("Can", 82, 79, 82);
reyna = new Player("Reyna", 78, 77, 36);
sule = new Player("Sule", 84, 56, 87);
hummels = new Player("Hummels", 84, 61, 85);
schlotterbeck = new Player("Schlotterbeck", 81, 63, 82);
guerreiro = new Player("Guerreiro", 81, 79, 75);
kobel = new Player("Kobel", 83, 29, 85);
 //team arrays containing rosters
const arsenal = {
    name: "Arsenal", 
    roster: [jesus, odegaard, partey, saka, xhaka, martinelli, gabriel, saliba, zinchenko, white, ramsdale],
}; 
const tottenham = {
    name: "Tottenham", 
    roster: [son, kane, kulusevski, hojbjerg, perisic, romero, royal, bentacur, sanchez, dier, lloris],
};
const psg = { 
    name: "PSG",
    roster: [messi, mbappe, neymar, verratti, vitinha, marquinhos, ramos, hakimi, kimpembe, bernat, donnarumma],
};
const inter = { 
    name: "Inter", 
    roster: [martinez, lukaku, dzeko, barella, brozovic, calhanoglu, mikhitaryan, skriniar, vrij, dumfries, handanovic],
};
const madrid = { 
    name: "Real Madrid", 
    roster: [benzema, vinicius, hazard, modric, kroos, valverde, rudiger, alaba, carvajal, militao, courtois],
};
const barcelona = { 
    name: "Barcelona", 
    roster: [lewandowski, dembele, ansu, deJong, pedri, depay, alba, kounde, arujo, christensen, stegen],
};
const bayern = { 
    name: "Bayern",
    roster: [mane, sane, coman, kimmich, goretzka, muller, ligt, davies, hernandez, upmecano, neuer],
};
const dordtmund = { 
    name: "Dortmund", 
    roster: [haller, reus, bellingham, brandt, can, reyna, sule, hummels, schlotterbeck, guerreiro, kobel],
}; 
let availableTeams = [arsenal, tottenham, psg, inter, madrid, barcelona, bayern, dordtmund];  

//DOM elements chached 
let instructionsEl = document.querySelector(".instructions"); 
let availableTeamBtn = document.querySelector(".teams"); 
let userScoreEl = document.querySelector(".user-score"); 
let computerScoreEl = document.querySelector(".computer-score"); 
let outcomeEl = document.querySelector(".event-outcome");
let userTeamEl = document.querySelector(".user-team");
let computerTeamEl = document.querySelector(".computer-team");
let userTeamNameEl = document.querySelector(".user-team-name"); 
let computerTeamNameEl = document.querySelector(".computer-team-name");
let audioBtnEl = document.querySelector(".audio-button");

//event listeners 

availableTeamBtn.addEventListener("click", chooseTeam);
userTeamEl.addEventListener("click", select);
audioBtnEl.addEventListener("click", toggleAudio);


init() 

//functions

//play/pause audio on button click 
function toggleAudio(e) { 
    if (e.target.classList.contains("mute")) {
        ambientCrowd.play(); 
        e.target.classList.remove("mute"); 
        e.target.classList.add("playing");
        e.target.classList.remove("fa-volume-xmark");
        e.target.classList.add("fa-volume-high");
    } else if (e.target.classList.contains("playing")) { 
        ambientCrowd.pause(); 
        e.target.classList.remove("playing");
        e.target.classList.add("mute");
        e.target.classList.remove("fa-volume-high");
        e.target.classList.add("fa-volume-xmark");
    }
}
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
        ambientCrowd.pause(); 
        whistleSound.play();
        if (userScore > computerScore) { 
            instructions = "Your team won the game! Go celebrate!";
            goalSound.pause(); 
            goalSound.currentTime = 0;
            goalSound.play();
        } else if (userScore < computerScore) { 
            instructions = "Your team lost.";
            awSound.play();
        } else if (userScore === computerScore) { 
            instructions = "It's a tie! (Yep ties happen in soccer, sorry)";
        }
}
}
//change bench borders to reflect team 
function changeBorder(side, team) {
    textId = `${team.name.replace(" ", "-")}-border`
    side.setAttribute("id", textId)
};
//function to display stats on player hover

function displayStats(e) { 
    if (e.target.classList.contains("hoverable")) {
    playerName = e.target.innerText;
    hoveredPlayer = userTeam.roster.find(player => player.name === playerName);
    playerAtk = hoveredPlayer.atk;
    playerDef = hoveredPlayer.def
    e.target.innerText = `Atk: ${playerAtk} Def: ${playerDef}`;
    }
}
function revertStats(e) { 
    playerName = e.target.id; 
    e.target.innerText = playerName
}
//computer will choose the best player it has left for a given situation
function choosePlayer(roster) { 
    let maxStat = 0;
    let highestPlayer;
    if (gamePhase === "defend") {
    roster.forEach((player) => {
        if (player.atk > maxStat) { 
            maxStat = player.atk
            highestPlayer = player
            return maxStat
        } 
    })
    } else if (gamePhase === "attack") { 
        roster.forEach((player) => {
            if (player.def > maxStat) { 
                maxStat = player.def
                highestPlayer = player
                return maxStat
            } 
        })
    } else if (gamePhase === "control") { 
        roster.forEach((player) => {
            if (player.ovr > maxStat) { 
                maxStat = player.ovr
                highestPlayer = player
                return maxStat
            } 
        })
    }
    return highestPlayer 
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
    //add player buttons to user roster 
   userTeam.roster.forEach(player => { 
        playerBtn = document.createElement("button");
        let name = document.createTextNode(player.name); 
        playerBtn.appendChild(name);
        playerBtn.setAttribute("id", player.name);
        playerBtn.classList.add("unUsed");
        playerBtn.classList.add("hoverable");
        playerBtn.addEventListener("mouseover", displayStats);
        playerBtn.addEventListener("mouseout", revertStats);
        userTeamEl.appendChild(playerBtn); 
   })
   userName = userTeam.name;
   changeBorder(userTeamEl, userTeam);
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
    changeBorder(computerTeamEl, computerTeam)
    computerName = computerTeam.name;
    randomAction(); 
    removeTeams();
    setInstructions();
    render();   
}

//select function to use player for gamePhase
function select(e) { 
    playerName = e.target.id;
    selectedPlayer = userTeam.roster.find(player => player.name === playerName);
//computer randomly selects player to compete
    computerPlayer = choosePlayer(computerTeam.roster);
    computerPlayerIndex = computerTeam.roster.indexOf(computerPlayer);
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
        e.target.classList.remove("hoverable");
        e.target.classList.add("used");
        computerPlayerBtn.classList.remove("unUsed");
        computerPlayerBtn.classList.add("used");
        computerTeam.roster.splice(computerPlayerIndex, 1);
    }
    setInstructions();
    checkWin();
    render();
}

function init() { 
    userScore = 0; 
    computerScore = 0; 
    instructions = "Pick the team you'd like to play as! The computer will select another"
    outcome = "";
    userName = "";
    computerName = "";
    render(); 
}

function render() { 
    userScoreEl.innerText = userScore; 
    computerScoreEl.innerText = computerScore; 
    instructionsEl.innerText = instructions; 
    outcomeEl.innerText = outcome; 
    userTeamNameEl.innerText = userName;
    computerTeamNameEl.innerText = computerName;
}

