var home = document.querySelector("#home");

var body = document.querySelector("#bod");
home.addEventListener("click", hm);

 function hm()
 {
  
   body.style.backgroundColor = "rgb(128, 41, 209)";
 }



 var like = document.querySelector("#like");

like.addEventListener("click", lk);

 function lk()
 {
  
   body.style.backgroundColor = "rgb(214, 35, 35)";
 }



 var search = document.querySelector("#search");
 search.addEventListener("click", sr);

 function sr()
 {
  
   body.style.backgroundColor = "rgba(226, 226, 46,0.568)";
 }



 var profile = document.querySelector("#profile");
  profile.addEventListener("click", pr);

 function pr()
 {
   body.style.backgroundColor = "rgb(57, 57, 241)";
 }
