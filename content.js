document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    const currentOverflow = document.body.style.overflowY;
    document.body.style.overflowY = currentOverflow === 'hidden' ? 'auto' : 'hidden';
  }
});
