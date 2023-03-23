function multiply_math(num1 , num2) {
    let problem = [(num1 + num2) * 5];
        console.log(problem)
}
let end_number = multiply_math(2 , 4);
console.log(end_number)

function users(things){
    for (let i=0 ; i < things.length; i++ ){
      if (things.length < 10){
        return true;
      }
    return false ;
    }
}
things = users([`cat`,`dog`,`fish`,`bird`]);
console.log(things)
things =users([`jack`,`tom`,`jerry`,`alfred`,`john`,`liam`,`tim`,`logan`,`chase`,`jen`,`jasmine`])
console.log(things)
things = users([`jerry`,`tom`])
console.log(things)
