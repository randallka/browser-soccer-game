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
arsenal = [jesus, odegaard, partey, saka, xhaka, martinelli, gabriel, saliba, zinchenko, white, ramsdale]; 
tottenham = [son, kane, kulusevski, hojbjerg, perisic, romero, royal, bentacur, sanchez, dier, lloris];

//state variables  
let userPlayers = []; 
let computerPlayers = []; 
let userScore; 
let computerScore; 

//DOM elements chached 
let instructionsEl = document.querySelector(".instructions"); 
let availableTeamEls = document.querySelectorAll(".available-team"); 

//functions 

//onclick team selection to create player roster of clickable player buttons 

//init 
function init() { 

}
//render 

function render() { 

}


console.log(availableTeamEls);