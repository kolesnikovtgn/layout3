"use strict";
window.onload=function(event) {
  event.preventDefault();

  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  var items = document.getElementById('items');
  var itemCount = document.querySelectorAll('.item__image').length;
  var pos = 0;
  var transform = Modernizr.prefixed('transform');

  function setTransform() {
    items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
  }

  function prev() {
    pos = Math.max(pos - 1, 0);
    setTransform();
  }

  function next() {
    pos = Math.min(pos + 1, itemCount - 1);
    setTransform();
  }

  leftBtn.addEventListener("click", prev, false);
  rightBtn.addEventListener("click", next, false);
  window.addEventListener('resize', setTransform);
}