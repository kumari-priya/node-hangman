const Letter = require('./letter');

let Word = (word) => {
  this.word = word;
  this.allLetters = [];
  this.guessesLetters = [];
  this.attempts = 5;


  let blankSpace = () => {
    allLetters = word.split('');
    guessesLetters = wordArr.map(function(i) {
      let objLetter = new Letter(i);
      allLetters.push(objLetter)
      return objLetter.blankSpace();
    });
    this.attempts += allLetters.length;
    return guessesLetters;
    // guessedWord = blankWord.join('');
    // return guessedWord;
  };

  let check = (letter) => {
    this.attempts--;
    if (guessesLetter.indexOf(letter) !== -1) {
      if (allLetters.indexOf(letter) > -1) {
        allLetters.forEach(function(element, index) {
          if (element == letter) {
            guessesLetter[index] = element;
          }
        });
        // if(guessesLetter.join('') === allLetters.join('')){
        //
        // }
      }
    }
  };
};

module.exports = Word;
