// TODO(you): Modify the class in whatever ways necessary to implement
// the flashcard app behavior.
//
// You may need to do things such as:
// - Changing the constructor parameters
// - Changing the code in the constructor
// - Adding methods
// - Adding additional fields

var menu2 ;
var result2 ;
var flashcard2 ;
var text=document.getElementById('choices1');
var text2=document.getElementById('choices2');
var text3=document.getElementById('choices3');
var flashcard=document.querySelector('.flashcard');
var startover=document.querySelector('.to-menu')
var x=0;  
var i = 0;
var j=0;
const idList = FLASHCARD_DECKS.map(item => Object.values(item)[0])

window.onload=function (){ 
  text.innerHTML=idList[0];
  text2.textContent=idList[1];
  text3.textContent=idList[2];
  console.log(idList);
  console.log(Object.keys(words[0])[0]);
  
}

function clicktext(){
  x=1;
  console.log(x);
  var apps= new App();
  console.log(apps.flashcards);

}

function clicktext1(){
  x=2;
  console.log(x);
  var apps1= new App();

}

function clicktext2(){
  x=3;
  console.log(x);
  var apps2= new App();

}
function clickstartover(){
  window.location.reload();
}



text.addEventListener('click',clicktext);
text2.addEventListener('click',clicktext1);
text3.addEventListener('click',clicktext2);
startover.addEventListener('click',clickstartover);

class App {
  constructor() {
    const menuElement = document.querySelector('#menu');
    this.menu = new MenuScreen(menuElement);
    menu2 = this.menu;
    const mainElement = document.querySelector('#main');
    this.flashcards = new FlashcardScreen(mainElement);
    flashcard2 = this.flashcards;

    const resultElement = document.querySelector('#results');
    this.results = new ResultsScreen(resultElement);
    result2 = this.results;

     //Uncomment this pair of lines to see the "flashcard" screen:
     if(x==1||x==2||x==3){
      this.menu.hide();
      this.flashcards.show();

     }

    // Uncomment this pair of lines to see the "results" screen:
   
  }
  getResult(){
    this.menu.hide();
    this.results.show();
    this.flashcards.hide();
  }
}
