// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Rewriting some of the existing methods, such as changing code in `show()`
// - Adding methods
// - Adding additional fields
const words = FLASHCARD_DECKS.map(item => Object.values(item)[1]);
var background = document.querySelector('body');
var point = document.querySelector('.percent');
var right = document.getElementById('c');
var wrong = document.getElementById('ic');
var con = document.querySelector('.continue');
const flashcardword = document.querySelector('#flashcard word');
const flashcardContainer = document.querySelector('#flashcard-container');



var clickcontinue = () => {
  flashcardContainer.innerHTML = '';
  if (con.textContent == 'Continue') {
    i = wrongarray[j];
    menu2.hide();
    result2.hide();
    flashcard2.show();
    document.querySelector('.incorrect').textContent = '';
    wrong.textContent = '';
    right.textContent = '';
    countwrong = 0;
    document.querySelector('.incorrect').textContent = countwrong;
    wrong.textContent = countwrong;
    console.log('countwrong:' + countwrong);
    console.log('countright:' + countright);
    console.log('if:' + document.querySelector('.incorrect').textContent);
    j++;
   

  }


  else {
    i = 0;
    menu2.hide();
    result2.hide();
    flashcard2.show();
    wrong.textContent = '';
    right.textContent = '';
    countright = 0;
    countwrong = 0;
    j=0;
    document.querySelector('.incorrect').textContent = '';
    document.querySelector('.correct').textContent = '';
    wrongarray = [];
    console.log('else:' + document.querySelector('.incorrect').textContent);

  }






}

con.addEventListener('click', clickcontinue);

var goToNext = () => {


  if (wrongarray.indexOf('a')!=-1) {
    console.log("arrrrrrarrrry a=" );
    i = wrongarray[j];
    j++;
    console.log('i:' + i);
    if (countright + countwrong == 5) {
      i = 5;
    }
    var front = '';
    var back = '';
    console.log('aaaaaaaaaaaaaaaaaaaa');
    console.log(countright + countwrong);
    console.log(j);
  }
  else {
    console.log("arrrrrrarrrry b=");
    i++;
    var front = '';
    var back = '';
    console.log('bbbbbbbbbbbbbbbbbbb');
  }



  flashcardContainer.innerHTML = '';
  background.style.backgroundColor = "#d0e6df";
  if (i == 5) {
    menu2.hide();
    result2.show();
    flashcard2.hide();
    point.textContent = 100 * (countright / (countright + countwrong));
    right.textContent = countright;
    wrong.textContent = countwrong;
    wrongarray.push('a');
    if (countright == 5) {
      con.textContent = 'Startover?';
    }
    else {
      con.textContent = 'Continue';
    }
    console.log(wrongarray);
  } else {

    front = Object.keys(words[x - 1])[i];
    back = Object.values(words[x - 1])[i];
  }
  new Flashcard(flashcardContainer, front, back, this.goToNext);

};

class FlashcardScreen {

  constructor(containerElement) {
    this.containerElement = containerElement;

  }

  show() {
    console.log("show!!");
    var front = '';
    var back = '';


    this.containerElement.classList.remove('inactive');
    const flashcardContainer = document.querySelector('#flashcard-container');

    front = Object.keys(words[x - 1])[i];
    back = Object.values(words[x - 1])[i];

    const card = new Flashcard(flashcardContainer, front, back, goToNext);




  }


  hide() {
    this.containerElement.classList.add('inactive');

  }
}


