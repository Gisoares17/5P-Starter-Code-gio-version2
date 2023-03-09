let question1 = document.querySelector(".question1").value;
let question2 = document.querySelector(".question2");
let button = document.querySelector("button");

button.onclick = (function() {
    let Age = document.querySelector(".question1").value;
    let team = document.querySelector(".question2").value;
    if ( Age <= 16 && team=== "Rich") {
   document.querySelector(".result").innerHTML="You are " + Age + " years old. You want to play for a " + team + "  team . You are Neymar!";
    } 
   else if (Age >= 17 && team=== "Famous") {   
        document.querySelector(".result").innerHTML="You are " + Age + " years old. You want to play for a " + team + "   team. You are Messi!";
 	} else if ( Age <= 16 && team=== "Famous") {   
        document.querySelector(".result").innerHTML="You are " + Age + " years old. You want to play for a " + team + "   team. You are Cristiano Ronaldo!";
 	} else if (Age >= 17 && team=== "Rich") {   
        document.querySelector(".result").innerHTML="You are " + Age + " years old. You want to play for a " +  team  +  "   team. You are Mbappe!";
 	} 
});