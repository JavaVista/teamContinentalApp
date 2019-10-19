(() => {
  /*
    This code is from my workspace in Treehouse:
    https://teamtreehouse.com/library/jquery-basics 
    Simple Lightbox
  */

  $(document).ready(() => {

    var $overlay = $('<div id="modal"></div>');
    var $image = $('<img src="./images/pushpins/m1.png">');
    var $caption = $('<p>what?</p>');

    // an image to overlay
    $overlay.append($image);
    // a caption
    $overlay.append($caption);
    // Add overlay
    $('body').append($overlay);


    // 1) Capture the click event on a link to an image
    $('.item a').click(function (e) {
      e.preventDefault(e);
      var imgLocation = $(this).attr('href');
      console.log('image: ' + imgLocation);
      // update overlay with the image linked in the link
      $image.attr('src', imgLocation);
      // 2) Show the overlay
      $overlay.hide().slideUp(1000).fadeIn(500);
      // Get child's alt atribute & set caption
      var imgCaption = $(this).children('img').attr('alt');
      console.log('caption: ' + imgCaption);
      $caption.append().text(imgCaption);
    });

    // When overlay is clicked
    $overlay.click(function () {
      // Hide the overlay
      $overlay.hide();
    });

    $overlay.hide();
  });
})(window);