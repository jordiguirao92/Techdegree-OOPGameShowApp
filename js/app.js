/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game; 
let keyPressed = [];
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});


const letterButton = document.getElementById('qwerty');
letterButton.addEventListener('click', (e) => {
  if (keyPressed.includes(e.target.textContent)){
    console.log("Repeat");
  } else {
    if(e.target.className === "key"){ 
        game.handleInteraction(e.target);
        keyPressed.push(e.target.textContent);
        console.log(e.target);
    }
  }
});


document.addEventListener('keypress', (e) => {
    const keyLetter = document.querySelectorAll('.key');
    let buttonLetter;
    if (keyPressed.includes(e.key)){
      console.log("Repeat");
    } else {
      for (let i = 0; i < keyLetter.length; i++) {
        if (keyLetter[i].textContent == e.key) {
          buttonLetter = keyLetter[i];
          keyPressed.push(e.key);
          break;
        }
      }
      game.handleInteraction(buttonLetter);
      console.log(buttonLetter);
    }
  });
