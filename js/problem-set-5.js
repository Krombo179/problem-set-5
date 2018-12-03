/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

  function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  while (true){
    height=prompt("Please enter a integer between 1 and 23");
    height=Number(height);
    if(height>=1 && height<=23 && Number.isInteger(height)){
      break;
    }
  }
  let i=1;
  let hashmarks='#';
  let lines="<code>";
  let breaks=height-2;

  while (i<=height){
    let a='';
    for(let j=0;j<=breaks;j++) {
      a+='&nbsp;';
    }
    breaks--;
    hashmarks=hashmarks+'#';
    lines=lines+a+hashmarks+"</br>";
    i++;
  }
  document.getElementById("mario-easy-output").innerHTML=lines;
  lines=lines+"</code>"

  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  while (true){
  height=prompt("Please enter an integer between 1 and 23");
  height=Number(height);
  if(height>=1 && height<=23 && Number.isInteger(height)){
    break;
    }
  }
  let i=1;
  let hashmarks='#';
  let lines="<code>";
  let breaksBefore=height-2;
  let breaksAfter='&nbsp'+'&nbsp';
  while (i<=height){
  let a='';
  for(let j=0;j<=breaksBefore;j++) {
    a+='&nbsp;';
  }
    breaksBefore--;
    hashmarks=hashmarks+'#';
    lines=lines+a+hashmarks+breaksAfter+hashmarks+"</br>";
    i++;
  }
  document.getElementById("mario-hard-output").innerHTML=lines;
  lines=lines+"</code>"

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  let sumOne = 0;
  let sumTwo = 0;
  while (true){
  card = prompt("Enter your credit card number with no spaces, dashes, etc.");

  if (Number.isInteger(Number(card))){
    break;
    }

  if(card === null){
    break;
    }
  }

  if (card !== null) {
  for(let i = card.length-2; i >= 0; i-=2) {
  let num = Number(card[i]) * 2;
  let numString = num.toString();
  let numSum = 0;
  for (let j = 0 ; j < numString.length; j++){
      numSum = numSum + Number(numString[j]);
    }
    sumOne = numSum + sumOne;
    console.log(sumOne);
  }

  for(let k = card.length-1; k >= 0;k-=2){
    sumTwo = sumTwo + Number(card[k])
  }

  console.log(sumTwo);

  if (card.length == 15 && (card[0] == 3 &&(card[1] == 7 || card[1] == 4)) && (sumOne + sumTwo)% 10 == 0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/amex.png'/>";
  }
  else if ((card.length == 13 || card.length == 16) && card[0] == 4 && (sumOne + sumTwo) % 10 == 0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/visa.png'/>";
  }
  else if (card.length == 16 && (card[0] == 5 && (card[1] == 1 || card[1] == 2 || card[1] == 4 || card[1] == 5)) && (sumOne + sumTwo) % 10 == 0){
    document.getElementById("credit-output").innerHTML="<img src ='./images/mastercard.png'/>";
  }
  else {
    document.getElementById("credit-output").innerHTML="<img src ='./images/invalid.png'/>";
  }

  card=Number(card);
  }
  else {
  document.getElementById("credit-output").innerHTML = "";
  }

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  let p=document.getElementById("guess-output")
  let randomNumber=Math.floor(Math.random() * 1000) + 1;
  let guessAmount=1
  let guess=prompt("Guess a Real Number Between 1 and 1,000")

  while(guess>=0 && guess<=1000 && guess!=randomNumber){
    guessAmount++
      if(guess<randomNumber){
        guess=prompt("Guess a Higher Number")
      }
      else{
        guess=prompt("Guess a Lower Number")
      }
  }

  if(guess=randomNumber){
    p.innerHTML=`Correct Number: ${randomNumber} <br/> Number of Guesses: ${guessAmount}`
  }

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  let p=document.getElementById("hurricane-output");
  windspeed=prompt("Enter an Integer Between 1 and Infinite");

  while(windspeed<1){
    windspeed=prompt("Enter an Integer Between 1 and Inifite");
  }

  let type=parseInt(windspeed, 10);

  if (windspeed>0 && windspeed<39){
    p.innerHTML="The skies are calm...";
  }
  else if (windspeed>38 && windspeed<74){
    p.innerHTML="Tropical Storm.";
  }
  else if (windspeed>73 && windspeed<96){
    p.innerHTML="Category 1 Hurricane."
  }
  else if (windspeed>95 && windspeed<111){
    p.innerHTML="Category 2 Hurricane."
  }
  else if (windspeed>110 && windspeed<130){
    p.innerHTML="Category 3 Hurricane."
  }
  else if (windspeed>129 && windspeed<157){
    p.innerHTML="Category 4 Hurricane."
  }
  else if (windspeed>156){
    p.innerHTML="Category 5 Hurricane."
  }

  windspeed=type;

  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

   let p=document.getElementById("gymnastics-output")

   let firstScore=prompt("A Real Number Between 0.0 and 10.0")
   while (firstScore<0 || firstScore>10){
     firstScore=prompt("A Real Number Between 0.0 and 10.0")
   }
   firstScore=parseInt(firstScore, 10);

   let secondScore=prompt("A Real Number Between 0.0 and 10.0")
   while (secondScore<0 || secondScore>10){
     secondScore=prompt("A Real Number Between 0.0 and 10.0")
   }
   secondScore=parseInt(secondScore, 10);

   let thirdScore=prompt("A Real Number Between 0.0 and 10.0")
   while (thirdScore<0 || thirdScore>10){
     thirdScore=prompt("A Real Number Between 0.0 and 10.0")
   }
   thirdScore=parseInt(thirdScore, 10);

   let fourthScore=prompt("A Real Number Between 0.0 and 10.0")
   while (fourthScore<0 || fourthScore>10){
     fourthScore=prompt("A Real Number Between 0.0 and 10.0")
   }
   fourthScore=parseInt(fourthScore, 10);

   let fifthScore=prompt("A Real Number Between 0.0 and 10.0")
   while (fifthScore<0 || fifthScore>10){
     fifthScore=prompt("A Real Number Between 0.0 and 10.0")
   }
   fifthScore=parseInt(fifthScore, 10);

   let sixthScore=prompt("A Real Number Between 0.0 and 10.0")
   while (sixthScore<0 || sixthScore>10){
     sixthScore=prompt("A Real Number Between 0.0 and 10.0")
   }
   sixthScore=parseInt(sixthScore, 10);

   scores.push(firstScore);
   scores.push(secondScore);
   scores.push(thirdScore);
   scores.push(fourthScore);
   scores.push(fifthScore);
   scores.push(sixthScore);

   total=(firstScore + secondScore + thirdScore + fourthScore + fifthScore + sixthScore);
   let minScore=Math.min(firstScore, secondScore, thirdScore, fourthScore, fifthScore, sixthScore);
   let maxScore=Math.max(firstScore, secondScore, thirdScore, fourthScore, fifthScore, sixthScore);

   average =(total-(minScore+maxScore)) / 4;
   average = average.toFixed(2);
   discarded = `${minScore}, ${maxScore}`;

   p.innerHTML = `Discarded: ${discarded}<br/>Score: ${average}`;

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  tests = -1;
  quizzes = -1;
  homeworks = -1;

  let testExtra
  for (testExtra = 0; testExtra != -1; testTotal = testTotal + testExtra) {
    testExtra = prompt(`Enter test grades between 0.0 and 100.0 when finshed enter "-1"`)
    while (testExtra < 0 && testExtra != -1 || testExtra > 100.0){
      testExtra = prompt(`Enter test grades between 0.0 and 100.0 when finished enter "-1"`)
    }
    testExtra = parseInt(testExtra, 10);
      tests = tests + 1
    if (testExtra === -1) {
     testTotal++
    }
  }

  let quizExtra
  for (quizExtra = 0; quizExtra != -1; quizTotal = quizTotal + quizExtra) {
    quizExtra = prompt(`Enter quiz grades between 0.0 and 100.0 when finshed enter "-1"`)
    while (quizExtra < 0 && quizExtra != -1 || quizExtra > 100.0){
      quizExtra = prompt(`Enter quiz grades between 0.0 and 100.0 when finshed enter "-1"`)
    }
    quizExtra = parseInt(quizExtra, 10);
      quizzes = quizzes + 1
    if (quizExtra === -1) {
      quizTotal++
    }
  }

  let homeworkExtra
  for (homeworkExtra = 0; homeworkExtra != -1; homeworkTotal = homeworkTotal + homeworkExtra) {
    homeworkExtra = prompt(`Enter homework grades between 0.0 and 100.0 when finshed enter "-1"`)
    while (homeworkExtra < 0 && homeworkExtra != -1 || homeworkExtra > 100.0){
      homeworkExtra = prompt(`Enter test grades between 0.0 and 100.0 when finshed enter "-1"`)
    }
    homeworkExtra = parseInt(homeworkExtra, 10);
      homeworks = homeworks + 1
    if (homeworkExtra === -1) {
      homeworkTotal++
    }
  }

  let testAverage = testTotal / tests
  let quizAverage = quizTotal / quizzes
  let homeworkAverage = homeworkTotal / homeworks
  testAverage = testAverage.toFixed(2);
  quizAverage = quizAverage.toFixed(2);
  homeworkAverage = homeworkAverage.toFixed(2);
  let grade = (testAverage * 0.6) + (quizAverage * 0.3) + (homeworkAverage * 0.1)
  grade = grade.toFixed(2);
  let p =document.getElementById("report-card-output");
  p.innerHTML =`Tests: ${testAverage}<br/>Quizzes: ${quizAverage}<br/>Homework: ${homeworkAverage}<br/>Grade: ${grade}`;

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */

  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
