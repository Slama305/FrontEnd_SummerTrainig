
  var image = document.querySelector('img');
  image.style.float = 'right';

  var menuItems = document.querySelectorAll('#nav li');
  for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].style.listStyleType = 'circle';
  }

  var imageCopy = image.cloneNode(true);
  image.parentNode.insertBefore(imageCopy, image.nextSibling);
  imageCopy.style.float = 'left';
  