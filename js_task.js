const n1 = -9 * 3; //-27
const n2 = "vakue is" + 50; //value is50
const n3 = 17%5; //2
const n4 = 5 % 17; //5
const n5 = 5/10; //0.5
const n6 = (4==4); //True
const n7 = (4 != 5); //True
const n8 = (7 <= 8); //True
//const n9 = Math.ceil(x) - Math.floor(x); //i guess since we looking for the different bettwen the same value , its going to be 0

function displayNumber() {
    const number = prompt("Enter your number : ");
    alert(`You enterd number : ${number}`);
}

function displayAscendingOrder() {
    const num1 = prompt("Enter first number : ");
    const num2 = prompt("Enter second number : ");
    if (num1 < num2 ){
        alert(`The numbers in ascending order : ${num1} , ${num2}`);
    }
    else if (num2 < num1) {
        alert(`The numbers in ascending order : ${num2} , ${num1}`);
    
    }
    else{
        alert("The numbers are equal.");
    }   
}

function displayLargerNumber(){
    const num1 = prompt("Enter first number : ");
    const num2 = prompt("Enter second number : ");
    const largerNumber = Math.max(num1 , num2);
    alert(`The larger number is : ${largerNumber}`);
}

function dusplaySum() {
    const num1  = Number(prompt("Enter first number : "));
    const num2 = Number(prompt("Enter second number : "));
    const sum = num1 + num2
    alert(`The sum of the two numbers : ${sum} `);
} 

function displayVariable(){
    const num = Number(prompt("Enter your number : ")); 
    let result;
    
    switch (num) {
      case 1:
        result = "ONE";
        break;
      case 2:
        result = "TWO";
        break;
      case 3:
        result = "THREE";
        break;
      case 4:
        result = "FOUR";
        break;
      case 5:
        result = "FIVE";
        break;
      case 6:
        result = "SIX";
        break;
      case 7:
        result = "SEVEN";
        break;
      case 8:
        result = "EIGHT";
        break;
      case 9:
        result = "NINE";
        break;
      default:
        result = "PLEASE TRY AGAIN";
    }
    
    alert(result);
    
}
function diplayOneToFive(){
  for (let i = 0; i <= 5; i++){
    alert(i);
  }
}
function diplayOneToFive1(){
  let r = "";
  for (let i = 0; i <= 5; i++){
    r +=i + "\n";

  }
  alert(r);
}
function multiplies(){
  let r = "";
  for (let i = 0; i <= 20; i++){
    if(i%3 === 0){
      r+=i + ",";
    }
    
  }
  alert(r);
}

function hundredNumber(){
  while(true){
    userInput = prompt("Enter your number between (0-100): ");
    const number = parseInt(userInput);

    if (userInput === null){
      alert("User canceled input.");
      break;
    }

    if (number >=0 && number <=100){
      alert(`Your number is ${number}`);
      
    }
    else {
      alert("Please enter valid number .");
    }
  }
}


function hundredNumberAndMore(){
  
  while(true) {

    userInput = prompt("Please enter your input: ");
    

    if (userInput === null){
      alert("User canceled the input: ");
      break;

    }

    if (isNaN(userInput) || userInput >= 0 || userInput <= 100){
      alert(`Your input is ${userInput}`);
      
    }
    else{
      alert("Reload the page");
    }
  
  }
}

function sumOfNumbers(){
  
  
    const userInput = prompt("Enter your number: ");
    
    let sum = 0;
    for(let i =0; i <= userInput; i++){
      
      sum +=i;
      
    }
    
    alert(sum);
  
}

function avgNumbers(){
    let userInput = prompt("Enter your number: ");
    const number = parseInt(userInput);
    let sum = 0;
    for(let i =0; i <= number; i++){
      
      sum +=i;
      
      
    }
    const avg = sum / (number + 1);
    alert(avg);


}