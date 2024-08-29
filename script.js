
// let obg = {
//   shohel : 'dhaka',
//   age : 20,
//  student :'in-kolkata',
// 'shohel2 rana' (num1, num2){
// return num1 + num2;
//  }

// }

// console.log(obg['shohel2 rana'](6 , 10))

// let x = obg;
// console.log(x);
// console.log(obg);
// x.shohel = "foridpur"
// console.log(x);
// console.log(obg);


// for of ********for in

// let shohel = {
//   name: 'shakil',
//   dist:'dhaka',
//   roll :12
// }

// for(key in shohel){
//   console.log(key+ shohel[key])
// }



// for vs for each




// // for (let i = 0; i < number.length; i++){
// //   console.log(number[i])
// // }
// const shohel  = (e)=>{
//    console.log(e)
// }

// let newNumber = [29, 58, 73, 38, 37];
// newNumber.map( function (e , index , arr){
//     arr[index] =  e + 5 ;
   
// })
// console.log(newNumber)

4
// let  score = ;

// console.log(typeof (score))
// let change = Number(score);
// console.log(typeof change)
// console.log(typeof (change))



// ***************************oparetion*************
// non premative***********
// const score = 100;
// const outside = null ;
// let user; 
// const id = Symbol('123')
// const roll = Symbol('123')
// console.log(id === roll);
// const bigNumber = 823248910240948767546776588568n;
// console.log(typeof bigNumber)

// premative***********




// console.log(Math.max(2, 5, 67 ,8));
// let number = 10;
// if(number > 20){
//  console.log('THIS IS TURE')
// }else{
//   console.log('this is false');
  
// }


let ball3 =document.querySelector("#ball");
let bat = document.querySelector('#bat');
let stamp = document.querySelector('#stamp');
let message = document.querySelector('.para');
let message2 = document.querySelector('.para2');


 let randomNumber = () => Math.floor((  Math.random()*3 ));


let userChoise;




ball.addEventListener("click",  function (){
  let random = randomNumber() ;
  userChoise = ball;
  if(random == 0 && userChoise == ball){

  message.innerHTML ="draw"
   
    message2.innerHTML = "computer choise ball ";
    
  }else if(random == 1) {
     message.innerHTML ="loss"
   
    message2.innerHTML = "computer choise bat ";
    
 
  }else{
     message.innerHTML ="win"
  
    message2.innerHTML = "computer choise stamp ";
    
    
  }


});
bat.addEventListener("click",  function (){
  let random = randomNumber() ;
  userChoise = bat;
  if(random == 0 && userChoise == bat){

      message.innerHTML ="win"
   
    message2.innerHTML = "computer choise ball ";
  
  }else if(random == 1) {
    
      message.innerHTML ="draw"
    message2.innerHTML = "computer choise bat ";
   
  }else{
   
    message.innerHTML = "loss"
    message2.innerHTML = "computer choise stamp ";
   
    
  }


})
stamp.addEventListener("click",  function (){
  let random = randomNumber() ;
  userChoise = stamp;
  if(random == 0 && userChoise == stamp){
  
     message.innerHTML = "loss"
    message2.innerHTML = "computer choise ball ";
  
  }else if(random == 1) {
     message.innerHTML = "win"
  
    message2.innerHTML = "computer choise bat ";
   
  }else{
     message.innerHTML = "draw"
   
    message2.innerHTML = "computer choise stamp ";
  
    
  }


})







  // if(randomNumber == 0){
  //   console.log("match draw")
  // } else if(randomNumber == 1){
  //   console.log("computer win");
    
  // }else{
  //   console.log("you win")
  // }




