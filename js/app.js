//creating a function to do basic math
function multiply_math(num1 , num2) {
  //creeating the problem
    let problem = [(num1 + num2) * 5];
    //returning the problem
        return problem
}
multiply_math(2 , 4);

//creating a fuction to see is a word is greater than 10 characters
function users(thing){
  //making a loop to go through the words
    for (let i=0 ; i < thing.length; i++ ){
      //creating an if statement to determin if they are greater than 10 characters
      if (thing.length > 10){
        //returning true if they are greater
        return true;
      }
      //returning false if they arnt
    return false ;
    }
}
//making the 3 different instances 
let thing = [`cat`]
users(thing);
thing=(`doesthiscount`)
users(thing)
thing=(`jerry`)
users(thing)

//making a new function to determine the starting letters
 function spec_letters(Words){
  //adding a for loop that will go through "words" to see if it has a ph in it
for (let i = 0 ; i < Words.length ; i++){
  if(Words.includes(`ph`) = true){
    //returns true if it does
    return true;
  }
  //and false if it doesnt
  return false;
}
 }
 //calling apon the function with an array of words
 let Words = 'philadelphia'
 spec_letters(Words)
 Words = 'pittsburgh'
 spec_letters(Words)
