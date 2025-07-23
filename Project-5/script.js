const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choice = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choice[randomNumber]
}

const playTheGame = (human, machine) => {
    if (human === machine) {

        console.log('Humano: ' + human + ' Maquina: ' + machine)
        result.innerHTML = 'Deu empate!'
    } else if (
        human === 'paper' && machine === 'rock' ||
        human === 'rock' && machine === 'scissors' || 
        human === 'scissors' && machine === 'paper') {

        result.innerHTML = 'Você ganhou!'
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = 'Você perdeu para a Alexa!'
    }
}