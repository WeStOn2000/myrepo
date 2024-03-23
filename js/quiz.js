
const questions = [  
  ['How many planets are in the Solar System?', '8'],
['How many continents are there?', '7'],
['How many legs does an insect have?', '6'],
['What year was JavaScript created?', '1995']];


let correctanswer = 0;


for(let i = 0; i < questions.length; i++ ){
 let question = questions[i][0];
 let answer = questions[i][1];
 let response = prompt(question); 
 if(response === answer) {
  correctanswer++;
 }
}

let html =`
<h1>You got ${correctanswer} questions correct</h1>`;
document.querySelector('main').innerHTML =html;