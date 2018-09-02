// document.addEventListener('DOMContentLoaded', function() {
//    animate_string('target')
// }, false);

// function animate_string(id) {

//     let text = document.getElementById('target').innerHTML

// 	setInterval(function () {
// 		text = text[text.length - 1] + text.substring(0, text.length - 1);
// 	 	document.getElementById('target').innerHTML = text;
// 	}, 300);
// }
//-------------------------

// year = window.prompt("Input a Year : ");


// x = (year % 100 === 0) 
// 		? (year % 400 === 0) 
// 		: (year % 4 === 0);
// console.log(x);

//-------------------- 7 -----------
// for (let year = 2000; year <= 2030; year++)
// {
// 	let d = new Date(year, 0, 1);  //вказується перше січня
// 	if (d.getDay() === 0)		   //вказує на день "неділя" у якого нульовий індек
// 		console.log("1st January is being a Sunday" + year);
// }

//------------------------ 8 ---------
// let random = Math.floor(Math.random() * 10);
// let num = prompt("Вгадай число від 1 до 10");
// x = (num === random) ? alert("true") : alert("false " + random);

//-------------------- 9 -------------
// let today = new Date();
// let newyear = new Date(today.getFullYear(), 11, 28);   // 28 грудня
// if (today.getMonth() == 11 && today.getDate() > 25) {
//     newyear.setFullYear(newyear.getFullYear() + 1);
// }
// let one_secondy = 1000;
// console.log(Math.floor( (newyear.getTime() - today.getTime()) / (one_day)) + " days left until Christmas!");

//------------------- 10 -----------------
// function GetResult(oper) {

//     const n1 = eval(form.num_01.value);
//     const n2 = eval(form.num_02.value);

//     switch (oper) {
//         case 1: //Кнопка +
//             {
//                 form.res.value = n1 + n2;
//                 break;
//             }
//         case 2: //Кнопка /
//             {
//                 form.res.value = n1 / n2;
//                 break;
//             }
//     }
// }

// let userName = "Maksym";
// let userAge = 25;
// let userName1 = "Yura";
// let userAge1 = 27;

// let user1 = {
// 	name: userName,
// 	age: userAge,
// 	hoby: ["hockey", "snowboard"]
// }
// let user2 = {
// 	name: userName1,
// 	age: userAge1
// }
// let user3 = {
// 	name: userName,
// 	age: userAge +5
// }
// let user4 = {
// 	name: userName1,
// 	age: userAge1 +5
// }


// let users = [user1, user2, user3, user4];

// users.forEach(function(user){
// 	console.log(user.name)
// });

// let company = {
// 	name: "WebDewConmany",
// 	officeAddress:"Okruzna",
// 	employee: users
// }

// console.log(company)

//************************************************************

//   чому не виводить всі дані??????????
// var user = {};
// user.name = 'Vasya';
// user.surname = 'Petrov';
// user.name = 'Sergey';

// console.log(user);

//********************************
// видаляєм перший елемент
// let users = ["max", "bob", "mike"];
// console.log(users);

// let del = users.shift();
// console.log(users);

// console.log(del);
//**********************************

//ФІЛЬТЕР
// let arr = [45, 55, 4, 6];
//  function filtArr(value) {
//      return value >= 10;
//  }

// console.log(arr.filter(filtArr));
//**************************************

// var fruits = ["Яблоко", "Апельсин",{name: 'max'}, "Слива"];

// alert(fruits[2].name)
//*********************************************


// let cars = [

//     {
//         model: 'audi',
//         color: 'white',
//         speed: 300,
//         price: 200000,

//     }, {
//         model: 'bmv',
//         color: 'black',
//         speed: 320,
//         price: 300000,

//     }, {
//         model: 'zhiguli',
//         color: 'green',
//         speed: 60,
//         price: 10000,

//     }
// ];
// cars.forEach( function(carCom) {
// 	console.log(carCom.model)
// });

// for (i = 0; i <= cars.length -1; i++) {
// 	console.log(cars[i].model);
// };

//*********************************************************************
// let cars = [{
//     brandName: 'audi',
//     models: [{
//         class: 'A3',
//         price: 100000,
//         color: 'red',
//         speed: 200
//     }, {
//         class: 'A8',
//         price: 100000,
//         color: 'red',
//         speed: 250
//     }]

// }, {
//     brandName: 'zhiuli',
//     models: [{
//         class: 6,
//         price: 10000,
//         color: 'red',
//         speed: 30
//     }, {
//         class: 7,
//         price: 20000,
//         color: 'white',
//         speed: 40
//     }]
// }, {
//     brandName: 'bmv',
//     models: [{
//         class: 'X3',
//         price: 300000,
//         color: 'black',
//         speed: 260
//     }, {
//         class: 'X5',
//         price: 250000,
//         color: 'green',
//         speed: 150
//     }]
// }];

// let modelsAll = [];
// cars.forEach(function(car) {
//     car.models.forEach(function(mod) {
//         // let str = `name - ${mod.name} : ${mod.speed} km/hr`;
//         modelsAll.push(mod);
//     });

// });
// console.log(modelsAll)

// let sort = modelsAll.sort(function(a, b) {
//     return b.speed - a.speed;
// });
// console.log(modelsAll[0]);









//***************************
/*-- forEach --*/
/* ES-5 */

// nums.forEach(function(v) {
//     if (v % 5 === 0)
//         fives.push(v);
// });

// /*ES-6*/

// nums.forEach(v => {
//     if (v % 5 === 0)
//         fives.push(v)
// })
//**************************