// coded by @tsokying
// eslint-disable-next-line no-unused-vars
const projectName = "My portfolio";

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// image modal
var modal = document.getElementById("myModal");
var i;
var img = document.getElementsByClassName("image");
var modalImg = document.getElementById("img01");

 for(i=0;i< img.length;i++)
   {    
    img[i].onclick = function(){
    modal.style.display = "block";
	modalImg.src = this.src;
 }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
   modal.style.display = "none";
}