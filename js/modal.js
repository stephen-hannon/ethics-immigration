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
/* MODAL 1 */

/* MODAL 2 */
// Get the modal
// var modal2 = document.getElementById("myModal2");

// // Get the button that opens the modal
// var btn2 = document.getElementById("myBtn2");

// // Get the <span> element that closes the modal
// var span2 = document.getElementsByClassName("close")[1];

// // When the user clicks on the button, open the modal
// btn2.onclick = function() {
//   modal2.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span2.onclick = function() {
//   modal2.style.display = "none";
// }

// /* MODAL 3 */
// // Get the modal
// var modal3 = document.getElementById("myModal3");

// // Get the button that opens the modal
// var btn3 = document.getElementById("myBtn3");

// // Get the <span> element that closes the modal
// var span3 = document.getElementsByClassName("close")[2];

// // When the user clicks on the button, open the modal
// btn3.onclick = function() {
//   modal3.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span3.onclick = function() {
//   modal3.style.display = "none";
// }

// /* MODAL 4 */
// // Get the modal
// var modal4 = document.getElementById("myModal4");

// // Get the button that opens the modal
// var btn4 = document.getElementById("myBtn4");

// // Get the <span> element that closes the modal
// var span4 = document.getElementsByClassName("close")[3];

// // When the user clicks on the button, open the modal
// btn4.onclick = function() {
//   modal4.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span4.onclick = function() {
//   modal4.style.display = "none";
// }

// /* MODAL 5 */
// // Get the modal
// var modal5 = document.getElementById("myModal5");

// // Get the button that opens the modal
// var btn5 = document.getElementById("myBtn5");

// // Get the <span> element that closes the modal
// var span5 = document.getElementsByClassName("close")[4];

// // When the user clicks on the button, open the modal
// btn5.onclick = function() {
//   modal5.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span5.onclick = function() {
//   modal5.style.display = "none";
// }

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