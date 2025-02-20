import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  const whomArray = ["Mr. Officer,","Dr. O'Conner,", "Lord Farqwuad,","Look, Goku i was gonna come fight you but,"]
  const whenArray = ["after last class","this morning","when i was walking my dog","while i was watching naruto"]
  const culpritArray = ["a runaway train","The GingerBread Man","A WILD ZEBRA","a meteor","Micheal Jordan","Mr. Crabs"]
  const crimeArray = ["hit my house.","got into a fight with my granny.","barracaded itself in my room.","tried to steal the Crabby Paddy Formula.","asked me to prom!!!"]

  let whomIndex = Math.floor(Math.random() * whomArray.length);
  let whenIndex = Math.floor(Math.random() * whenArray.length);
  let culpritIndex = Math.floor(Math.random() * culpritArray.length);
  let crimeIndex = Math.floor(Math.random() * crimeArray.length);

  const whom = document.querySelector(".whom")
  const when = document.querySelector(".when")
  const culprit = document.querySelector(".culprit")
  const crime = document.querySelector(".crime")

  whom.innerHTML = whomArray[whomIndex]
  when.innerHTML = whenArray[whenIndex]
  culprit.innerHTML = culpritArray[culpritIndex]
  crime.innerHTML = crimeArray[crimeIndex]
  
  
  
  
  console.log("Hello Rigo from the console!");
};
