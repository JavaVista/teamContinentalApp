// (() => {
//   $(document).ready(() => {

//     var $overlay = $('<div id="modal"></div>');
//     var $image = $('<img src="./images/pushpins/m1.png">');
//     var $caption = $('<p>what?</p>');

//     // an image to overlay
//     $overlay.append($image);
//     // a caption
//     $overlay.append($caption);
//     // Add overlay
//     $('body').append($overlay);

//     // 1) Capture the click event on a link to an image
//     $('.item a').click(function (e) {
//       e.preventDefault(e);
//       var imgLocation = $(this).attr('href');
//       console.log('image: ' + imgLocation);
//       // update overlay with the image linked in the link
//       $image.attr('src', imgLocation);
//       // 2) Show the overlay
//       $overlay.hide().slideUp(1000).fadeIn(500);
//       // Get child's alt attribute & set caption
//       var imgCaption = $(this).children('img').attr('alt');
//       console.log('caption: ' + imgCaption);
//       $caption.append().text(imgCaption);
//     });

//     // When overlay is clicked
//     $overlay.click(function () {
//       // Hide the overlay
//       $overlay.hide();
//     });

//     $overlay.hide();
//   });
// })(window);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal2
var btn2 = document.getElementById("myBtn2");

// Get the <span> element that closes the modal2
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal2 
btn2.onclick = function () {
  modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal2
span.onclick = function () {
  modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal2, close it
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}