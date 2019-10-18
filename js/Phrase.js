/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
     constructor(phrase) {
         this.phrase = phrase.toLowerCase(); 
     }

    /**
    * Display phrase on game board
    */
    addPhraseToDisplay(){
        const ul = document.getElementById('phrase').firstElementChild; //document.querySelector('#phrase ul');
        
        for ( let i=0; i < this.phrase.length; i++) {
            let li = document.createElement('li');
            li.textContent = this.phrase[i];
            if(li.textContent === " "){
                li.classList.add('hide', 'space');
            } else {
                li.classList.add('hide', 'letter', `${li.textContent}`);
            } 
            ul.appendChild(li);
        }
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */
    checkLetter(letter){
        return this.phrase.includes(letter);

    }
    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */
    showMatchedLetter(letter){
        const liLetters = document.querySelectorAll(`.letter.${letter}`);
        for (let i=0; i < liLetters.length; i++){
            liLetters[i].classList.remove('hide');
            liLetters[i].classList.add('show');
        }
    }
 }