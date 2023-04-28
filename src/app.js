/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console! ");
};
let generateExcuse = () => {
  let who = ["el perro", "mi abuela", "la tortuga", "mi conejo"];
  let action = ["se comio", "se orino", "rompio", "tumbo"];
  let what = ["mi tarea", "las llaves", "el carro"];
  let when = [
    "antes de llegar a clase",
    "en ese momento",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras oraba"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx = Math.floor(Math.random() * action.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  return (
    who[whoIndx] +
    " " +
    action[actionIndx] +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
