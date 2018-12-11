window.onload = (event) => {
  event.preventDefault();

  let leftBtn = document.getElementById('left-btn');
  const rightBtn = document.getElementById('right-btn');
  const items = document.getElementById('items');
  const itemCount = document.querySelectorAll('.item__image').length;
  const transform = Modernizr.prefixed('transform');
  let pos = 0;

  const setTransform = () => {
    items.style[transform] = `translate3d(${(-pos * items.offsetWidth)}px,0,0)`;
  };

  const prev = () => {
    pos = Math.max(pos - 1, 0);
    setTransform();
  };

  const next = () => {
    pos = Math.min(pos + 1, itemCount - 1);
    setTransform();
  };

  leftBtn.addEventListener('click', prev, false);
  rightBtn.addEventListener('click', next, false);
  window.addEventListener('resize', setTransform);
};
