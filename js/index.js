$('[data-toggle="modal"]').modal();﻿

function showPicture() {
  var picLocation = document.querySelector(".mySelfie");
  var closeButton = document.querySelector(".close-me");
  picLocation.style.display = "inline";
  closeButton.style.display = "block";
}
