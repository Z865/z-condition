/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let correct = 0;



// 2. Store the rank of a player

rank = "Not Known";

// 3. Select the <main> HTML element


/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
answer1 = prompt('Name the programming language that you learned?')

if( answer1.toUpperCase() == "JAVASCRIPT")
  {correct += 1;}


answer2 = prompt('what is the programmin language for web content?')
if(answer2.toUpperCase() == "HTML") {
  correct += 1;
}

answer3 = prompt('what language we use for styling?')
if(answer3.toUpperCase() == "CSS") {
  correct += 1;
}

answer4 = prompt('what is the name of the collage you are studying in?')
if(answer4.toUpperCase() == "DOUGLAS") {
  correct += 1;
}

answer5 = prompt('what is the of the city where you collage is?')
if(answer5.toUpperCase() == "NEW WESTMINISTER") {
  correct += 1;
}



if (correct >= 5)
{
  rank = "Gold"
}
else if (correct>=3)
{ rank = "Silver"

}
else if (correct >= 1)
{
  rank = "Bronze"
}
else{ rank = "No Crown"}

document.querySelector('main').innerHTML = `Your rank is ${correct} out of 5 <br> Your Crown is ${rank}`;




/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/


// 6. Output results to the <main> element

