var overlay = document.querySelector(".overlay")
var popup = document.querySelector(".popup")
var addbtn = document.getElementById("addbtn")


addbtn.addEventListener("click",function(){
    overlay.style.display="block";
    popup.style.display="block";
})

var cancelbtn = document.getElementById("cancelgame")

cancelbtn.addEventListener("click",function(){
    event.preventDefault();

    overlay.style.display="none";
    popup.style.display="none";

})



var container = document.querySelector(".container");
var addgamee = document.getElementById("addgame");
var gamenamee = document.getElementById("gamename");
var gametypee = document.getElementById("gametype");
var gamedescriptionn = document.getElementById("gamedescription");

addgame.addEventListener("click",function(){
    
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class", "gamecontainer")
    div.innerHTML=`<h2>${gamenamee.value}</h2>
    <h4>${gametypee.value}</h4>
    <p>${gamedescriptionn.value}</p>
    <button onclick="deletegame(event)">Delete</button>`
    container.append(div)
        overlay.style.display="none";
    popup.style.display="none";

})



function deletegame(event){

    event.target.parentElement.remove()
}