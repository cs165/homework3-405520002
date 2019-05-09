// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Adding methods
// - Adding additional fields

let originX = null;
let originY = null;
let offsetX = 0;
let offsetY = 0;
var countright = 0;
var countwrong = 0;
let rotation = 0;
let dragStarted = false;
var wrongarray = [];



class Flashcard {

  constructor(containerElement, frontText, backText, goToNext) {
    this.containerElement = containerElement;

    this._flipCard = this._flipCard.bind(this);

    this.flashcardElement = this._createFlashcardDOM(frontText, backText);
    this.containerElement.append(this.flashcardElement);

    this.flashcardElement.addEventListener('pointerup', this._flipCard);
    this.flashcardElement.addEventListener('pointermove', this.move);
    this.flashcardElement.addEventListener('pointerdown', this.onDragStart);
    this.flashcardElement.addEventListener('pointerup', this.onDragEnd);
    this.goToNext = goToNext;
    this.flashcardElement.style.animation = 'mymove 0.5s ';

  }

  // Creates the DOM object representing a flashcard with the given
  // |frontText| and |backText| strings to display on the front and
  // back of the card. Returns a reference to root of this DOM
  // snippet. Does not attach this to the page.
  //
  // More specifically, this creates the following HTML snippet in JS
  // as a DOM object:
  // <div class="flashcard-box show-word">
  //   <div class="flashcard word">frontText</div>
  //   <div class="flashcard definition">backText</div>
  // </div>
  // and returns a reference to the root of that snippet, i.e. the
  // <div class="flashcard-box">
  _createFlashcardDOM(frontText, backText) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('flashcard-box');
    cardContainer.classList.add('show-word');

    const wordSide = document.createElement('div');
    wordSide.classList.add('flashcard');
    wordSide.classList.add('word');
    wordSide.textContent = frontText;

    const definitionSide = document.createElement('div');
    definitionSide.classList.add('flashcard');
    definitionSide.classList.add('definition');
    definitionSide.textContent = backText;

    cardContainer.appendChild(wordSide);
    cardContainer.appendChild(definitionSide);
    return cardContainer;
  }

  _flipCard(event) {
    this.flashcardElement.classList.toggle('show-word');
  }


  onDragStart(event) {
    originX = event.clientX;
    originY = event.clientY;
    dragStarted = true;
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  move(event) {
    if (!dragStarted) {
      return;
    }
    event.preventDefault();
    const deltaX = event.clientX - originX;
    const deltaY = event.clientY - originY;
    const translateX = offsetX + deltaX;
    const translateY = offsetY + deltaY;
    this.offsetX1 = translateX;
    event.currentTarget.style.transform = 'translate(' +
      translateX + 'px, ' + translateY + 'px) ' + 'rotate(' + (translateX * 0.2) + 'deg)';
    event.currentTarget.style.transition = 'none';
    if (translateX < 150 && translateX > -150) {

   
      background.style.backgroundColor = '#d0e6df';
    

    }
    else {
      background.style.backgroundColor = '#97b7b7';

    }



  }

  onDragEnd(event) {
    dragStarted = false;
    rotation = 0;
    originX = event.clientX;
    originY = event.clientY;
    offsetX += event.clientX - originX;
    offsetY += event.clientY - originY;
    event.currentTarget.style.transform = 'translate(' +
      0 + 'px, ' + 0 + 'px) ' + 'rotate(' + (0 * 0.2) + 'deg) ';
    event.currentTarget.style.transition = 0.6 + 's ease-in';
   



    if (this.offsetX1 >= 150) {
      countright = countright + 1;
      document.querySelector('.correct').textContent = countright;
      dragStarted = false;
      offsetX += event.clientX - originX;
      offsetY += event.clientX - originX;
      goToNext();
      console.log('countright:' + countright);

    }

    else if (this.offsetX1 <= -150) {
      countwrong = countwrong + 1;
      wrongarray.push(i);
      document.querySelector('.incorrect').textContent = countwrong;
      dragStarted = false;
      offsetX += event.clientX - originX;
      offsetY += event.clientX - originX;
      goToNext();
      console.log('countwrong:'+countwrong);
    }

    
  }




}
