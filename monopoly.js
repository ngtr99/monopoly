//selecting elements

const btnRoll = document.querySelector('.roll');
document.querySelector('.roll').disabled = true;

const btnStart = document.querySelector('.start-game');
document.querySelector('.start-game').disabled = true;

const playerInput = document.querySelector('.player-input');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const player3 = document.querySelector('.player3');
const player4 = document.querySelector('.player4');
const player5 = document.querySelector('.player5');
const player6 = document.querySelector('.player6');
const player7 = document.querySelector('.player7');
const player8 = document.querySelector('.player8');

const players = {
    player1: {
        position: 1,
        money: 2000,
    },
    player2: {
        position: 1,
        money: 2000,
    },
    player3: {
        position: 1,
        money: 2000,
    },
    player4: {
        position: 1,
        money: 2000,
    },
    player5: {
        position: 1,
        money: 2000,
    },
    player6: {
        position: 1,
        money: 2000,
    },
    player7: {
        position: 1,
        money: 2000,
    },
    player8: {
        position: 1,
        money: 2000,
    }
}

let jailPlayer = {
    player1: false,
    player2: false,
    player3: false,
    player4: false,
    player5: false,
    player6: false,
    player7: false,
    player8: false
}

let optionJail = false;

let community = false;
let chance = false;

let buyLand = false;
let isBuyClicked = false;
let isIgnoreClicked = false;

let carOption = false;
const boardPositions = {
    position2: {
        position: document.querySelector('#position2'),
        price: 60,
        rent: 20,
        lender: null,
    },
    position4: {
        position: document.querySelector('#position4'),
        price: 60,
        rent: 20,
        lender: null,
    },
    position7: {
        position: document.querySelector('#position7'),
        price: 100,
        rent: 20,
        lender: null,
    },
    position9: {
        position: document.querySelector('#position9'),
        price: 100,
        rent: 20,
        lender: null,
    },
    position10: {
        position: document.querySelector('#position10'),
        price: 120,
        rent: 20,
        lender: null,
    },
    position12: {
        position: document.querySelector('#position12'),
        price: 140,
        rent: 20,
        lender: null,
    },
    position13: {
        position: document.querySelector('#position13'),
        price: 150,
        rent: 20,
        lender: null,
    },
    position14: {
        position: document.querySelector('#position14'),
        price: 140,
        rent: 20,
        lender: null,
    },
    position15: {
        position: document.querySelector('#position15'),
        price: 160,
        rent: 20,
        lender: null,
    },
    position17: {
        position: document.querySelector('#position17'),
        price: 160,
        rent: 20,
        lender: null,
    },
    position19: {
        position: document.querySelector('#position19'),
        price: 160,
        rent: 20,
        lender: null,
    },
    position20: {
        position: document.querySelector('#position20'),
        price: 200,
        rent: 20,
        lender: null,
    },
    position22: {
        position: document.querySelector('#position22'),
        price: 220,
        rent: 20,
        lender: null,
    },
    position24: {
        position: document.querySelector('#position24'),
        price: 220,
        rent: 20,
        lender: null,
    },
    position25: {
        position: document.querySelector('#position25'),
        price: 240,
        rent: 20,
        lender: null,
    },
    position27: {
        position: document.querySelector('#position27'),
        price: 260,
        rent: 20,
        lender: null,
    },
    position28: {
        position: document.querySelector('#position28'),
        price: 260,
        rent: 20,
        lender: null,
    },
    position30: {
        position: document.querySelector('#position30'),
        price: 280,
        rent: 20,
        lender: null,
    },
    position32: {
        position: document.querySelector('#position32'),
        price: 300,
        rent: 20,
        lender: null,
    },
    position33: {
        position: document.querySelector('#position33'),
        price: 300,
        rent: 20,
        lender: null,
    },
    position35: {
        position: document.querySelector('#position35'),
        price: 320,
        rent: 20,
        lender: null,
    },
    position38: {
        position: document.querySelector('#position38'),
        price: 350,
        rent: 20,
        lender: null,
    },
    position39: {
        position: document.querySelector('#position39'),
        price: 75,
        rent: 20,
        lender: null,
    },
    position40: {
        position: document.querySelector('#position40'),
        price: 400,
        rent: 20,
        lender: null,
    }
}


//input the number of players
let numPlayers = 2;
playerInput.addEventListener('change', function() {
    

    //hiding the old players
    for (let i = 1; i <= 8; i++) {
        let player = document.querySelector(`#position${players['player' + (i)].position} > .player > .player${i}`);
        player.style.display = 'none';
    }

    //showing the new players
    numPlayers = playerInput.value;
    document.querySelector('.start-game').disabled = false;
    document.querySelector('.announcement > h2').textContent = `You have selected ${numPlayers} players and click start game to begin!`;


    //board
    document.querySelector('.board > p').textContent = ` `;
    document.querySelector('.board > h2').textContent = ` `;
    document.querySelector('.board > h2').textContent = `You have selected ${numPlayers} players with $2000 each players!`;
});

//starting the game
let playerTurn = 1;
btnStart.addEventListener('click', function() {
    document.querySelector('.board > h2').style.display = "none";
    document.querySelector('.roll').disabled = false;

    //hiding the old players
    for (let i = 1; i <= 8; i++) {
        let player = document.querySelector(`#position${players['player' + (i)].position} > .player > .player${i}`);
        player.style.display = 'none';
    }

    //showing the new players
    for (let i = 1; i <= numPlayers; i++) {
        let player = document.querySelector(`#position1 > .player > .player${i}`);
        player.style.display = 'block';
        document.querySelector('.announcement > h2').textContent = `The game has started! Player ${playerTurn} turn!`;
    }
});

//playing the game
//rolling the dice
btnRoll.addEventListener('click', function() {
    document.querySelector('.board > h2').style.display = "none";
    //random number between 1-6
    const diceRoll = Math.floor(Math.random() * 6) + 1;

    //displaying the dice roll
    const diceImg = document.querySelector('.dice');
    diceImg.src = `images/dice/dice-${diceRoll}.png`;
    diceImg.style.display = 'block';



    if (!jailPlayer[`player${playerTurn}`] || (jailPlayer[`player${playerTurn}`] && diceRoll % 2 === 0)) {
        if (jailPlayer[`player` + playerTurn]) {
            jailPlayer[`player` + playerTurn] = false;
        }

        //moving the player
        let player = document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`);
        player.style.display = 'none';

        players['player' + playerTurn].position = players['player' + playerTurn].position + diceRoll;

        //if the player goes over 40, reset to 1
        if (players['player' + playerTurn].position > 40) {
            players['player' + playerTurn].money = players['player' + playerTurn].money + 200;
        }
        if (players['player' + playerTurn].position > 40) {
            players['player' + playerTurn].position = players['player' + playerTurn].position - 40;
        } 

        //getting the new position
        let newPosition = document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`);
        newPosition.style.display = 'block';
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} is on position ${players['player' + playerTurn].position}!`;


        //move the player
    
        if (boardPositions[`position${players['player' + playerTurn].position}`]) {
            if (players['player' + playerTurn].lender == null) {
                btnRoll.disabled = true;
                document.querySelector(`.announcement > h2`).textContent = `Player ${playerTurn} has landed on position ${players['player' + playerTurn].position} and has to pay $${boardPositions[`position${players['player' + playerTurn].position}`].rent} to the bank!`;
                
                
                //buy land
                if (buyLand == false) {
                    if (!(document.querySelector('.announcement-4').style.display == "block" || document.querySelector('.announcement-5').style.display == "block")) {
                        document.querySelector('.announcement-4').style.display = "block";
                        document.querySelector('.announcement-4').textContent = "Ignore";
                        document.querySelector('.announcement-5').style.display = "block";
                        document.querySelector('.announcement-5').textContent = "Buy";
                        buyLand = true;
                    }
                }

                const buy = function() {
                    if (!buyLand) return; // Prevent repeated execution
                    isBuyClicked = true;
                    btnRoll.disabled = false;
                    document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} has bought the land!`;
                    players['player' + playerTurn].money -= boardPositions[`position${players['player' + playerTurn].position}`].price;
                    boardPositions[`position${players['player' + playerTurn].position}`].lender = playerTurn;
                    document.querySelector('.announcement-4').style.display = "none";
                    document.querySelector('.announcement-5').style.display = "none";
                    buyLand = false;
                    
                    for(let i = 1; i <= numPlayers; i++) {
                        document.querySelector('.board > p').innerHTML += 
                        `<p>Player ${i} has ${players['player' + i].money} at the position ${players['player' + i].position}</p>`;
                    }

                    // Ensure player turn updates correctly
                    updatePlayerTurn();
                };
                
                const next = function() {
                    if (!buyLand) return;
                    isIgnoreClicked = true;
                    btnRoll.disabled = false;
                    document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} has ignored the payment!`;
                    document.querySelector('.announcement-4').style.display = "none";
                    document.querySelector('.announcement-5').style.display = "none";
                    buyLand = false;
                
                    for(let i = 1; i <= numPlayers; i++) {
                        document.querySelector('.board > p').innerHTML += 
                        `<p>Player ${i} has ${players['player' + i].money} at the position ${players['player' + i].position}</p>`;
                    }


                    updatePlayerTurn();
                };
                
                function updatePlayerTurn() {
                    if(carOption == false && buyLand == false) {
                        if (optionJail == false) {
                            do {
                                playerTurn++;
                                if (playerTurn > numPlayers) {
                                    playerTurn = 1; // Reset to first player if exceeding total players
                                }
                                console.log("playerTurn inside", playerTurn);
                            } while (players[`player${playerTurn}`].money <= 0);
                        }
                    }
                }
                



                document.querySelector('.announcement-5').removeEventListener('click', buy);
                document.querySelector('.announcement-4').removeEventListener('click', next);

                document.querySelector('.announcement-5').addEventListener('click', buy);
                document.querySelector('.announcement-4').addEventListener('click', next);



            }
            if (playerTurn !== boardPositions[`position${players['player' + playerTurn].position}`].lender) {
                players['player' + playerTurn].money -= boardPositions[`position${players['player' + playerTurn].position}`].price;
            }
        }
        
    }

    //chance cards
    const chancePosition = [8, 23, 37];

    if (players['player' + playerTurn].position === chancePosition[0] || players['player' + playerTurn].position === chancePosition[1] || players['player' + playerTurn].position === chancePosition[2]) {
        btnRoll.disabled = true;
        chance = true;
        document.querySelector('.chance-cards-1').style.display = "block";
        document.querySelector('.chance-cards-2').style.display = "block";
        document.querySelector('.chance-cards-3').style.display = "block";

        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} must chose a card from chance cards!`;

    }

    //community chest cards
    const communityPosition = [3, 18, 34];
    if (players['player' + playerTurn].position === communityPosition[0] || players['player' + playerTurn].position === communityPosition[1] || players['player' + playerTurn].position === communityPosition[2]) {
        btnRoll.disabled = true;
        community = true;
        document.querySelector('.community-chest-cards-1').style.display = "block";
        document.querySelector('.community-chest-cards-2').style.display = "block";
        document.querySelector('.community-chest-cards-3').style.display = "block";
    
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} must chose a card from community chest cards!`;
    }
    

    //go the the cars
    carOption = false;
    const carPosition = [6, 16, 26, 36];
    if (players['player' + playerTurn].position === carPosition[0] || players['player' + playerTurn].position === carPosition[1] || players['player' + playerTurn].position === carPosition[2] || players['player' + playerTurn].position === carPosition[3]) {
        btnRoll.disabled = true;
        players['player' + playerTurn].money = players['player' + playerTurn].money - 100;
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} has paid $100 for the car!`;
        if (players['player' + playerTurn].money < 0) {
            document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} is bankrupt!`;
            document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`).style.display = 'none';
            numPlayers--;
            if (numPlayers === 1) {
                for (let i = 1; i <= 8; i++) {
                    if (players['player' + i].money > 0) {
                        document.querySelector('.announcement > h2').textContent = `Player ${i} wins!`;
                    }
                }
            }
        }
        document.querySelector('.announcement-3').style.display = "block";
        carOption = true;
        document.querySelector('.announcement-3').addEventListener('change', function() {
            document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`).style.display = 'none';
            document.querySelector('.announcement-3').style.display = "none";
            carOption = false;
            players['player' + playerTurn].position = Number(document.querySelector('.announcement-3').value);
            newPosition = document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`);
            newPosition.style.display = 'block';
            document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} has chosen the car and is now on position ${players['player' + playerTurn].position}`;
            document.querySelector('.board > p').textContent = ` `;
            for(let i = 1; i <= numPlayers; i++) {
                document.querySelector('.board > p').innerHTML += 
                `<p>Player ${i} has ${players['player' + i].money} at the position ${players['player' + i].position}</p>`;
            }
            btnRoll.disabled = false;

        });

    }

    //go to the jail
    
    if (!community && !chance && (players[`player${playerTurn}`].position == 31 || players[`player${playerTurn}`].position == 11)) {
        jail(); // Send player to jail if they land on "Go to Jail"
    }

    //changing the player turn
    if(carOption == false && buyLand == false) {
        if (optionJail == false) {
            if (community || chance) {
                console.log('do not change the player turn');
            } else {
                do {
                    playerTurn++;
                    if (playerTurn > numPlayers) {
                        playerTurn = 1; // Reset to first player if exceeding total players
                    }
                    console.log("playerTurn outside", playerTurn);
                } while (players[`player${playerTurn}`].money <= 0);
            }
        } 
    }
});

    //chance cards
const chanceCards = [
    { text: "Advance to GO", action: "go", money: 200 },
    { text: "Go to Jail", action: "jail" },
    { text: "Speeding Fine $15", action: "pay", money: -15 },
    { text: "Bank pays you dividend of $50", action: "collect", money: 50 },
    { text: "Your Building Loan Matures", action: "collect", money: 150 },
    { text: "Go Back 3 Spaces", action: "move", steps: -3 },
    { text: "Pay Hospital $100", action: "pay", money: -100 },
    { text: "Pay School $150", action: "pay", money: -150 },
    { text: "You win second prize in a beauty contest", action: "collect", money: 10 },
    { text: "You inherit $100", action: "collect", money: 100 }
];

const chanceAction = function() {

    chance = false;
    btnRoll.disabled = false;
    let randomIndex = Math.floor(Math.random() * chanceCards.length);
    let card = chanceCards[randomIndex];

    if (card.action === "collect") {
        players['player' + playerTurn].money += card.money;
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} ${card.text} and now has $${players['player' + playerTurn].money}`;
    } else if (card.action === "pay") {
        players['player' + playerTurn].money += card.money;
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} ${card.text} and now has $${players['player' + playerTurn].money}`;
        if (players['player' + playerTurn].money < 0) {
            document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} is bankrupt!`;
            document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`).style.display = 'none';
            numPlayers--;
            if (numPlayers === 1) {
                for (let i = 1; i <= 8; i++) {
                    if (players['player' + i].money > 0) {
                        document.querySelector('.announcement > h2').textContent = `Player ${i} wins!`;
                    }
                }
            }
        }
    } else if (card.action === "move") {
        document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`).style.display = 'none';
        players['player' + playerTurn].position += card.steps;
        if (players['player' + playerTurn].position < 1) {
            players['player' + playerTurn].position += 40;
        }
        newPosition = document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`);
        newPosition.style.display = 'block';
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} ${card.text} and is now on position ${players['player' + playerTurn].position}`;
        if (players[`player${playerTurn}`].position === 31 || players[`player${playerTurn}`].position === 11) {
            do {
                playerTurn++;
                if (playerTurn > numPlayers) {
                    playerTurn = 1; // Reset to first player if exceeding total players
                }
            } while (players[`player${playerTurn}`].money <= 0);
            jail(); // Send player to jail if they land on "Go to Jail"
        }
    } else if (card.action === "jail") {
        do {
            playerTurn++;
            if (playerTurn > numPlayers) {
                playerTurn = 1; // Reset to first player if exceeding total players
            }
        } while (players[`player${playerTurn}`].money <= 0);
        jail();
    }

    document.querySelector('.board > p').textContent = ` `;
    for(let i = 1; i <= numPlayers; i++) {
        document.querySelector('.board > p').innerHTML += 
        `<p>Player ${i} has ${players['player' + i].money} at the position ${players['player' + i].position}</p>`;
    }

    document.querySelector('.chance-cards-1').style.display = "none";
    document.querySelector('.chance-cards-2').style.display = "none";
    document.querySelector('.chance-cards-3').style.display = "none";


}

document.querySelector('.chance-cards-1').addEventListener('click', chanceAction);
document.querySelector('.chance-cards-2').addEventListener('click', chanceAction);
document.querySelector('.chance-cards-3').addEventListener('click', chanceAction);



//community chest cards

const communityChestCards = [
    { text: "Advance to GO", action: "go", money: 200 },
    { text: "Go to Jail", action: "jail" },
    { text: "Speeding Fine $15", action: "pay", money: -15 },
    { text: "Bank pays you dividend of $50", action: "collect", money: 50 },
    { text: "Your Building Loan Matures", action: "collect", money: 150 },
    { text: "Go Back 3 Spaces", action: "move", steps: -3 },
    { text: "Pay Hospital $100", action: "pay", money: -100 },
    { text: "Pay School $150", action: "pay", money: -150 },
    { text: "You win second prize in a beauty contest", action: "collect", money: 10 },
    { text: "You inherit $100", action: "collect", money: 100 }
];

const communityPosition = [3, 18, 34];
const communityAction = function() {

    community = false;
    btnRoll.disabled = false;
    let randomIndex = Math.floor(Math.random() * communityChestCards.length);
    let card = communityChestCards[randomIndex];

    if (card.action === "collect") {
        players['player' + playerTurn].money += card.money;
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} ${card.text} and now has $${players['player' + playerTurn].money}`;
    } else if (card.action === "pay") {
        players['player' + playerTurn].money += card.money;
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} ${card.text} and now has $${players['player' + playerTurn].money}`;
        if (players['player' + playerTurn].money < 0) {
            document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} is bankrupt!`;
            document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`).style.display = 'none';
            numPlayers--;
            if (numPlayers === 1) {
                for (let i = 1; i <= 8; i++) {
                    if (players['player' + i].money > 0) {
                        document.querySelector('.announcement > h2').textContent = `Player ${i} wins!`;
                    }
                }
            }
        }
    } else if (card.action === "move") {
        document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`).style.display = 'none';
        players['player' + playerTurn].position += card.steps;
        if (players['player' + playerTurn].position < 1) {
            players['player' + playerTurn].position += 40;
        }
        newPosition = document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`);
        newPosition.style.display = 'block';
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} ${card.text} and is now on position ${players['player' + playerTurn].position}`;
        if (players[`player${playerTurn}`].position === 31 || players[`player${playerTurn}`].position === 11) {
            do {
                playerTurn++;
                if (playerTurn > numPlayers) {
                    playerTurn = 1; // Reset to first player if exceeding total players
                }
            } while (players[`player${playerTurn}`].money <= 0);
            jail(); // Send player to jail if they land on "Go to Jail"
        }
    } else if (card.action === "jail") {
        do {
            playerTurn++;
            if (playerTurn > numPlayers) {
                playerTurn = 1; // Reset to first player if exceeding total players
            }
        } while (players[`player${playerTurn}`].money <= 0);
        jail();
    }

    document.querySelector('.board > p').textContent = ` `;
    for(let i = 1; i <= numPlayers; i++) {
        document.querySelector('.board > p').innerHTML += 
        `<p>Player ${i} has ${players['player' + i].money} at the position ${players['player' + i].position}</p>`;
    }

    document.querySelector('.community-chest-cards-1').style.display = "none";
    document.querySelector('.community-chest-cards-2').style.display = "none";
    document.querySelector('.community-chest-cards-3').style.display = "none";
}



document.querySelector('.community-chest-cards-1').addEventListener('click', communityAction);
document.querySelector('.community-chest-cards-2').addEventListener('click', communityAction);
document.querySelector('.community-chest-cards-3').addEventListener('click', communityAction);


//jail

const jail = function() {
    if (players[`player` + playerTurn].position === 31 || players[`player` + playerTurn].position === 11) {
        optionJail = true;
        jailPlayer[`player` + playerTurn] = true
        document.querySelector('#position31 > .player > .player' + playerTurn).style.display = 'none';
        btnRoll.disabled = true;
        players['player' + playerTurn].position = 11;
        newPosition = document.querySelector(`#position11 > .player > .player${playerTurn}`);
        newPosition.style.display = 'block';
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} is in Jail!`;
        document.querySelector('.announcement-1').style.display = "block";
        document.querySelector('.announcement-1').textContent = "pay $50";
        document.querySelector('.announcement-1').addEventListener('click', announcement1);

        document.querySelector('.announcement-2').style.display = "block";
        document.querySelector('.announcement-2').textContent = "even dice";
        document.querySelector('.announcement-2').addEventListener('click', announcement2);
    }
}


const announcement1 = function() {
    optionJail = false;
    btnRoll.disabled = false;
    document.querySelector('.announcement-1').style.display = "none";
    document.querySelector('.announcement-2').style.display = "none";
    players['player' + playerTurn].money -= 50;
    document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} has paid $50 and now has $${players['player' + playerTurn].money}`;
    jailPlayer[`player` + playerTurn] = false;
    if (players['player' + playerTurn].money < 0) {
        document.querySelector('.announcement > h2').textContent = `Player ${playerTurn} is bankrupt!`;
        document.querySelector(`#position${players['player' + playerTurn].position} > .player > .player${playerTurn}`).style.display = 'none';
        numPlayers--;
        if (numPlayers === 1) {
            for (let i = 1; i <= 8; i++) {
                if (players['player' + i].money > 0) {
                    document.querySelector('.announcement > h2').textContent = `Player ${i} wins!`;
                }
            }
        }
    }
    document.querySelector('.board > p').textContent = ``;
    for(let i = 1; i <= numPlayers; i++) {
        document.querySelector('.board > p').innerHTML += 
        `<p>Player ${i} has ${players['player' + i].money} at the position ${players['player' + i].position}</p>`;
    }

    do {
        playerTurn++;
        if (playerTurn > numPlayers) {
            playerTurn = 1; // Reset to first player if exceeding total players
        }
    } while (players[`player${playerTurn}`].money <= 0);
}

const announcement2 = function() {
    optionJail = false;
    btnRoll.disabled = false;
    
    jailPlayer[`player` + playerTurn] = true;
    document.querySelector('.announcement-1').style.display = "none";
    document.querySelector('.announcement-2').style.display = "none";

    do {
        playerTurn++;
        if (playerTurn > numPlayers) {
            playerTurn = 1; // Reset to first player if exceeding total players
        }
    } while (players[`player${playerTurn}`].money <= 0);
}



//board 


btnStart.addEventListener('click',function() {
    document.querySelector('.board > p').textContent = ``;
    document.querySelector('.start-game').disabled = false;
    for(let i = 1; i <= numPlayers; i++) {
        players['player' + i].money = 2000;
        players['player' + i].position = 1;
        document.querySelector('.board > p').innerHTML += 
        `<p>Player ${i} has ${players['player' + i].money} at the position ${players['player' + i].position}</p>`;
    }
});


btnRoll.addEventListener('click', function() {
    document.querySelector('.board > p').textContent = ` `;
    for(let i = 1; i <= numPlayers; i++) {
        document.querySelector('.board > p').innerHTML += 
        `<p>Player ${i} has ${players['player' + i].money} at the position ${players['player' + i].position}</p>`;
    }
});


