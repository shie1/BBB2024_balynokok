// if css supports dvh unit

if (window.CSS && CSS.supports('width', '1dvh')) {
  document.body.classList.add('dvh');
}else{
    document.body.classList.add('no-dvh');
}