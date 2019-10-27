//created a function and called it with a random string

function randomMessage(str) {
    console.log(str) 
}

randomMessage("The earth is very much NOT flat!")

//I think here that I have to put setTimeout within a function, I tried just doing setTimeout outside of a function
//and I got weird results like repeating the same message every 2seconds indefinately.
let myVar;

function myFunction() {
  myVar = setTimeout(alertFunc, 2000);
}

function alertFunc() {
  console.log("Hello!");
}

myFunction()

let newWords;

function getWords() {
    console.log("Word")
    newWords = setTimeout(aFunc1, 1000)
    newWords = setTimeout(aFunc2, 2000)
    newWords = setTimeout(aFunc3, 3000)
}

function aFunc1(){
    console.log('Word1')
}

function aFunc2(){
    console.log("Word2")
}

function aFunc3(){
    console.log("Word3")
}

getWords();


let countDown = (num, callback) => {

    setTimeout(() => {

        if (num > 1) {
            console.log(num);
            countDown(num -1, callback);
        } else {
            callback();
        }
    }, 1000)
};

let isDone = () => {
    console.log("Job's Done")
}

countDown(5, isDone); 

let lunchTime = false; 

let orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
      if(lunchTime === true){
          let lunch = {
              sandwich: "chicken",
              salad: "Spinach",
              drink: "Coke Zero"
            };
            resolve(lunch);
      } else {
          let err = new Error ("Not Hungry")
          reject(err);
      }
    }).then(function(result){
        console.log('Fulfilled!');
        console.log(result);
    }).catch(function (error){
        console.log(error);
    })


  };

  orderMeSomeFood()
  
