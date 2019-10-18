/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */


 class Game {
     constructor() {
         this.missed = 0; 
         this.phrases = [new Phrase("Zoologico"), new Phrase("Barcelona"), new Phrase("Has ganado"), new Phrase("Has perdido"), new Phrase("Como te llamas")];
         this.activePhrase = null;

     }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
     createPhrases(phrase) {
         const newPhrase = new Phrase(phrase);
         this.phrases.push(newPhrase);
         return (this.phrases);
     }

     /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
     getRandomPhrase() {
         const randomNum = Math.floor(Math.random() * this.phrases.length);
         return this.phrases[randomNum];
     }

     /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        this.resetGame();
        document.querySelector('#overlay').style.display = "none"; //document.querySelector('#overlay').classList.add('hide');
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button){
        console.log(button);
        const letter = button.innerHTML; 
        if(this.activePhrase.checkLetter(letter) === true){
            button.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);
            if (this.checkForWin() === true) {
                this.gameOver(true);
            }
        } else if (this.activePhrase.checkLetter(letter) === false) {
            button.classList.add('wrong');
            this.removeLife();
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin(){
        let letters = document.querySelectorAll('.letter');
        let showLetters = document.querySelectorAll('.show');
        if(letters.length == showLetters.length) {
            return true;
        } else {
            return false;
        }
    }  

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife(){
        let heartImg = document.querySelectorAll('#scoreboard img');
        heartImg[this.missed].src = "images/lostHeart.png";
        this.missed++;
        if(this.missed === 5){
            this.gameOver(false);
        }
    }


    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon){
        let overlay = document.querySelector('#overlay');
        overlay.style.display = "";
        let message = document.querySelector('#game-over-message');
        if (gameWon === false){
            message.textContent = "Sorry, you lose!";
            overlay.className = "lose";
        } else if (gameWon === true) {
            message.textContent = "Congratulation, you win!";
            overlay.className = "win";
        }

    }

     /**
    * reset the gameboard between games
    * Remove all li elements from the Phrase ul element.
    * Enable all of the onscreen keyboard buttons and update each to use the `key` CSS class,
    * and not use the chosen or wrong CSS classes.
    * Reset all of the heart images
    */
    resetGame() {
        this.missed = 0; 
        const keysLetters = document.querySelectorAll('.key');
        for(let i = 0; i < keysLetters.length; i++){
            //keysLetters[i].disabled = false;
            keysLetters[i].classList.remove('chosen', 'wrong');
          }
        const phraseUL = document.querySelector('#phrase ul');
        phraseUL.innerHTML = "";

        const heartImages = document.querySelectorAll('#scoreboard img');
        heartImages.forEach(i => {i.src = "images/liveHeart.png"}); //An alternative to for(). 
    }
 }
  

