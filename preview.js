preview_enabled = false;

if(typeof images == 'undefined')
   throw "Dependency missing! preview.js requires images.js";

function preview(uri){
   if(!preview_enabled) return true;

   var r = uri.split(":");
   var img = images[r[0]][r[1]];

   var p = Math.round(Math.random());

   if(p == 0)
      document.getElementById("nav").className += ' outstaged';
   else
      document.getElementById("nav").className = document.getElementById("nav").className.replace(/ ?outstaged/gi, "");

   document.getElementById("preview_"+p+":title").innerHTML = img.title;
   document.getElementById("preview_"+p+":image").src       = img.src;
   document.getElementById("preview_"+p).style.display = 'inline-block';
}
function fade(){
   document.getElementById("preview_0").style.display = 'none';
   document.getElementById("preview_1").style.display = 'none';
}