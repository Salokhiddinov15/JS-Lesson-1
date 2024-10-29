"use strict";

// alert("hello");

// const place = confirm("Are you here");
// console.log(typeof place);

// const currentPlace = prompt("Where are you", "jon")
// console.log(currentPlace);

// const age = +prompt("How old are you", "18");
// console.log(age + 10);

// const favouriteColor = []

// favouriteColor[0] = prompt("What's your favourite color #1", "");
// favouriteColor[1] = prompt("What's your favourite color #2", "");
// favouriteColor[2] = prompt("What's your favourite color #3", "");

// console.log(typeof favouriteColor);

// let person = {
//   name: 'Oga',
//   age: 21,
//   isMarried: 'false'
// }

// console.log(person);

//Array

// let arr=['Phone', 'Mouse', 'Soap']

// arr[0] = 'notebook';

// console.log(arr);

// console.log(arr[0]);

// let a = 10;
// let b = 10;

// console.log(a === b);

// console.log('10' === b);

// let alt = alert('Hello World')

// let con = confirm('Yoshingiz 21 dami')

// let answers = prompt('what is your name?')

// console.log(answers);



// for (let i = 1; i <= 10; i++){
//   console.log(i);
// }



// let i = 0;
// do {
//   console.log(i);
//   i++
// } while(i < 10);



// let i = 1;
// while (i <= 10) {
//   console.log(i);
//   i ++
// }

// let answers = [];

// let questions = [
//   'What is your name',
//   'What is your phone',
//   'How old are your'
// ];

// for (let i = 0; i < questions.length; i++){
//   answers[i] = prompt(questions[i])
// }

// console.log(answers);

// let i = 0;

// do{
//   answers[i] = prompt(questions[i])
//   console.log(answers);
//   i++
// }while (i < questions.length)

// let i = 0;
// while (i < questions.length) {
//   answers[i] = prompt(questions[i]);
//   console.log(answers);
//   i++
// }

// let age = prompt('How old are your');

// if(age < 18){
//   alert('Hali vohli')
// } else if(age > 80){
//   alert('Uje kech')
// } else{
//   alert('Xush kelibsiz')
// }



// Uyga vazifa #9

// const  numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");

// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const a = prompt("Oxirgi ko'rgan serialingiz?"),
//     b = +prompt("Nechi baxo berasiz?"),
//     c = prompt("Oxirgi ko'rgan serialingiz?"),
//     d = +prompt("Nechi baxo berasiz?")


// seriesDB.series[a] = b;
// seriesDB.series[c] = d;

// console.log(seriesDB);

// const Theif = {
//   jascet: "Black"
// }

// const property = "age",
//     value = 30;

// Theif[property] = value;

// const phone = "15 pro",
// sena = 1000;

// Theif[phone] = sena;

// console.log(Theif);


// const color = prompt('rang kiriting');

// switch(color) {
//   case "red":
//     console.log("Stop");
//     break;
//   case "green": 
//     console.log("Goo");
//     break;
//   case "yellow":
//     console.log("Slowly");
//     break;
//   default:
//     console.log("Traffic jam");
//     break;
// }

// for(let i = 1; i <=10; i++){
//   if(i === 8){
//     // break;
//     continue
//   }
//   console.log(i);
// }


// Homework #12


// let  numberOfSeries;

// function startApp () {

//   while (numberOfSeries == "" || numberOfSeries == null || isNaN(numberOfSeries)) {
//   numberOfSeries = +prompt("Nechta serial ko'rdingiz?", "");
//   }
// }

//  startApp();


// const seriesDB = {
//   count: numberOfSeries,
//   series: {},
//   actors: {},
//   genres: [],
//   private: false,
// };



// function rememberMySeries() {
//   if(seriesDB.count >= 0 && seriesDB.count < 5){
//     console.log("Kam serial ko'ribsiz!");
//   }else if(seriesDB.count >= 5 && 10 > seriesDB.count){
//     console.log("Siz classik tomoshabin ekansiz!");
//   }else if(10 <= seriesDB.count){
//     console.log("Siz serialchi zvezda ekansiz!");
//   }else {
//     console.log('Error');
//   }
// }

// rememberMySeries();


// function detectLevelSeries() {
//   for(let i = 0; i < 2; i++){
//     const a = prompt("Oxirgi ko'rgan serialingiz?"),
//           b = prompt("Necha baho berasiz?");
  
//         if(a != null && b != null && a != "" && b != ""){
//           seriesDB.series[a] = b;
//           console.log("Done");
//         }else{
//           console.log("Error");
//           i--;
//         }
    
//       }   
//     }
    
// // detectLevelSeries();

// function showDB(hidden) {
//   if(!hidden){
//     console.log(seriesDB)
//   }
// }
// showDB(seriesDB.private);


// function writeGenrs() {
//   for(let i = 0; i <= 2; i++){
//     const ganre = prompt(`Yaxshi ko'rgan janiringiz? ${i + 1}`)
//     seriesDB.genres[i] = ganre;
//   }
// }

// writeGenrs();



// function calc(a, b) {
//   console.log(a + b);
// }

// calc(5, 10)



// Function declaration //

// function calc(a, b) {
//   return(a + b);
// }

// const sumOfAandB = calc(5 , 11);
// console.log(sumOfAandB);

 
// Function expression

// const logger = function() {
//   console.log("Hello World");
// }

// logger();

// Arrow function

// const calc = (a, b) => a + b;

// console.log(calc(10, 5));

//  #14 JS lesson

// const user = "Ogabek";

// const toupperCase = user.toUpperCase();
// const tolowerCase = user.toLowerCase();
// console.log(toupperCase);
// console.log(tolowerCase);


//  const greeting = "Hello world";

//  console.log(greeting.length);
// console.log(greeting.indexOf("w"));
// console.log(greeting.slice(6, 9));
// console.log(greeting.substring(6, 10));
// console.log(greeting.substr(0, 7));


// const num = 8.8;

// console.log(Math.round(num));

// const borderWidth = "13,8px";

// console.log(parseInt(borderWidth));
// console.log(parseFloat(borderWidth));

// #16 Lesson //

// function edu(subject, callback){
//   console.log(`I wanna teach ${subject}`);
//   callback();
// }

// function done() {
//   console.log("What's great");
// }

// edu("Javascript",done);

// function first(cb) {
//   setTimeout(() => {
//     console.log(1);
//     cb();
//   }, 1000)
// }

// function second(){
//   console.log(2);
// }

// first(second);

// #17 Lesson Object

// const Theif = {
//   jacket: "black",
//   hiegth: 1.76,
//   colors: {
//     hair: "black",
//     style: "curley"
//   },
//   howout: function(){
//     console.log("Fast with help doors");
//   }
// };
// Theif.howout();

// const {hair, style} = Theif.colors

// console.log(hair,style);

// console.log(Object.keys(Theif.colors).length);

// for(let key in Theif) {
//   if(typeof Theif[key] === "object"){
//     for(let i in Theif[key]) {
//       console.log(`Property ${i} has value ${Theif[key][i]}`);
//     }
//   }else console.log(`Property ${key} has value ${Theif[key]}`);
// }

// console.log(Theif.jacket);

// delete Theif.jacket;
// console.log(Theif);



// #18 Lesson Arrey

// const arr = [1, 21, 3, 14, 15];

// arr.sort((a, b) => a - b);
// console.log(arr);

// function compareFn(a, b){
//   return a - b;
// }


// arr.forEach(function(item, index, arr){
//   console.log(`${index} : ${item} into arr ${arr}`);
// })

// arr[99] = 9

// console.log(arr);

// arr.pop()
// arr.push(7);

// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//   console.log(arr[i]);
// }

// for(let value of arr) {
//   console.log(value);
// }


// const movies = prompt("What's your favourity movies", "");
// const usermovies = movies.split(", ");
// usermovies.sort()
// console.log(usermovies.join("-"));

// #19 Lesson 

// function nusxaObj(obj){
//   let objNusxa = {}
  
//   for(let key in obj) {
//     objNusxa[key] = obj[key];
//   }
 
//   return objNusxa
// }

// const numbers = {
//   x: 10,
//   y: 5,
// }

// const newNubers = nusxaObj(numbers);

// newNubers.x = 15;

// console.log(newNubers);
// console.log(numbers);


// const numbers = {
//   x: 10,
//   y: 5,
// }

// const newNumbers = Object.assign({}, numbers);

// newNumbers.x = 15;

// console.log(newNumbers);
// console.log(numbers);

// const numbers = {
//   x: 10,
//   y: 5,
// }

// const addNumbers = {
//   z: 15,
// }

// const allNumbers = Object.assign(numbers, addNumbers);

// console.log(allNumbers);


// const arr = [1, 2, 3];
// const numbers = arr.slice();

// numbers[1] = 'Oga';
// console.log(numbers);
// console.log(arr);

// // SPREAD

// const liverpool = ['Salah', 'Mane'];
// const manCity = ['Halland'];

// const mixPlayers = [...liverpool, ...manCity]

// console.log(mixPlayers);


// const calc = [1, 2, 3];

// function logger(x, y, z){
//   console.log(x + y + z);
// }

// logger(...calc)

// const arr = ['x', 'y'];

// const newArr = [...arr]
// console.log(newArr);

// const number = {
//   a: 10,
//   b: 5,
// }

// const newNumbers = {...number}

// console.log(number);
// console.log(newNumbers);



// #21 Lesson OOP asoslari 


// const firstName = 'Oga';
// const str = new String(firstName);

// console.log(typeof firstName);
// console.log(typeof str);

const car = {
  motor: 'X',
  color: 'red',
  isAirbag: true,
  isSpeed: function() {
    console.log(320);
  }
}

const gm = {
  isAirbag: false,
}

// gm.__proto__  = car;

// console.log(gm.color);

// gm.isSpeed();

// Object.setPrototypeOf(gm, car);

const bmw = Object.create(car)
console.log(bmw);

