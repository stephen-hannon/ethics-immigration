[1, 5].forEach(function (num, index) {
  // Get the modal
  var modal = document.getElementById("myModal" + num);

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn" + num);

  // Get the <span> element that closes the modal
  var close = document.getElementsByClassName("close")[index];

  // When the user clicks on the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
  close.onclick = function() {
    modal.style.display = "none";
  }
})

// /* ALL MODALS */
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal1) {
//     modal1.style.display = "none";
//   }
//   if (event.target == modal2) {
//     modal2.style.display = "none";
//   }
//   if (event.target == modal3) {
//     modal3.style.display = "none";
//   }
//   if (event.target == modal4) {
//     modal4.style.display = "none";
//   }
//   if (event.target == modal5) {
//     modal5.style.display = "none";
//   }
// }