let Letter = (letter) => {
  this.letter = letter;
  this.gussed = false;
  let blankSpace = (letter) =>{
    return '_'
  }
  let replace = (letter) =>{
    this.gussed = true;
  }
};

module.exports = Letter;
