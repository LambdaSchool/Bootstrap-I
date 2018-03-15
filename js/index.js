// alert('Hello there welcome to my site');

function toggle_visibility(id) {
       var e = document.getElementById(id);
       if(e.style.display == 'block')
          e.style.display = 'none';
       else
          e.style.display = 'block';
}





function move(id, percent) {
	toggle_visibility(id);
    var e = document.getElementById(id);
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= percent) {
            clearInterval(id);
        } else {
            width++;
            e.style.width = width + '%';
        }
    }
}


function zoomImage(){
	var e = document.getElementById("blurpic");
	if(e.style.width  ==='100px'){
		e.style.width = '250px';

	} else {
		e.style.width = '100px';
	}

}
// .addEventListener("onmouseover", function(){


//     document.getElementById("blurpic2").style.display = 'none';
// });
