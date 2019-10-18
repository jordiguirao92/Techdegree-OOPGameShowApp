/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


const game = new Game();
const startButton = document.querySelector('#btn__reset');
    startButton.addEventListener('click', (e) => {
    game.startGame();
});


const letterButton = document.getElementById('qwerty');
letterButton.addEventListener('click', (e) => {
    if(e.target.className === "key"){ 
        game.handleInteraction(e.target);
        console.log(e.target);
    }

});

document.addEventListener('keypress', (e) => {
    const keyLetter = document.querySelectorAll('.key');
    let buttonLetter;
    for (let i = 0; i < keyLetter.length; i++) {
        if (keyLetter[i].textContent == e.key) {
          buttonLetter = keyLetter[i];
          break;
        }
      }
    game.handleInteraction(buttonLetter);
    console.log(buttonLetter);
  });
