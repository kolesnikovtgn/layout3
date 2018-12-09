'use strict';
window.onload=function(event) {
  event.preventDefault();

  const leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  const items = document.getElementById('items');
  let itemCount = document.querySelectorAll('.item__image').length;
  let pos = 0;
  let transform = Modernizr.prefixed('transform');

  let setTransform = () => {
    items.style[transform] = 'translate3d(' + (-pos * items.offsetWidth) + 'px,0,0)';
  }

  let prev = () => {
    pos = Math.max(pos - 1, 0);
    setTransform();
  }

  let next = () => {
    pos = Math.min(pos + 1, itemCount - 1);
    setTransform();
  }

  leftBtn.addEventListener("click", prev, false);
  rightBtn.addEventListener("click", next, false);
  window.addEventListener('resize', setTransform);
}